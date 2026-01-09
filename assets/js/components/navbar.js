class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    
    // Get text content from template
    const template = document.querySelector('#navbar-template');
    if (!template) {
      console.error('Navbar template not found');
      return;
    }
    // Use template.content to access elements inside template
    const logoText = template.content.querySelector('#logo-text')?.textContent || '';
    const homeText = template.content.querySelector('#nav-link-home')?.textContent || '';
    const categoriesText = template.content.querySelector('#nav-link-categories')?.textContent || '';
    const businessText = template.content.querySelector('#nav-link-business')?.textContent || '';
    const aboutText = template.content.querySelector('#nav-link-about')?.textContent || '';
    const cartLabel = template.content.querySelector('#cart-label')?.textContent || '';
    const userLabel = template.content.querySelector('#user-label')?.textContent || '';
    
    // Determine if we're in pages folder
    const isInPages = window.location.pathname.includes('/pages/') || document.currentScript?.src.includes('/pages/');
    const basePath = isInPages ? '..' : '.';
    
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background-color: var(--dark-blue);
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 15px;
        }
        
        .logo {
          display: flex;
          align-items: center;
          color: white;
          text-decoration: none;
          font-size: 1.1rem;
          font-weight: 600;
        }
        
        .logo svg {
          width: 20px;
          height: 20px;
        }
        
        .logo span {
          margin-left: 8px;
        }
        
        .nav-links {
          display: none;
        }
        
        .nav-link {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s;
          position: relative;
          font-size: 0.9rem;
        }
        
        .nav-link:active {
          color: white;
        }
        
        .nav-link.active {
          color: var(--gold);
        }
        
        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: var(--gold);
        }
        
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        
        .action-btn {
          color: white;
          background: none;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 4px;
          font-weight: 500;
          font-size: 0.85rem;
          padding: 8px;
        }
        
        .action-btn svg {
          width: 18px;
          height: 18px;
        }
        
        .user-avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background-color: var(--gold);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--dark-blue);
          font-weight: bold;
          cursor: pointer;
          font-size: 0.85rem;
        }
        
        .mobile-menu-btn {
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          font-size: 1.5rem;
          padding: 8px;
        }
        
        .mobile-nav-menu {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background-color: var(--dark-blue);
          flex-direction: column;
          gap: 10px;
          padding: 15px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .mobile-nav-menu.active {
          display: flex;
        }
        
        .mobile-nav-menu a {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          font-weight: 500;
          padding: 10px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          font-size: 0.9rem;
        }
        
        .mobile-nav-menu a:last-child {
          border-bottom: none;
        }
        
        .mobile-nav-menu a.active {
          color: var(--gold);
        }
      </style>
      
      <div class="container" style="padding: 0 15px;">
        <nav class="navbar">
          <a href="${basePath}/index.html" class="logo">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L3 7L12 12L21 7L12 2Z" fill="var(--gold)"/>
              <path d="M3 12L12 17L21 12" stroke="var(--gold)" stroke-width="2"/>
              <path d="M3 17L12 22L21 17" stroke="var(--gold)" stroke-width="2"/>
            </svg>
            <span>${logoText}</span>
          </a>
          
          <div class="nav-actions">
            <button class="action-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <button class="action-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <div class="user-avatar">${userLabel}</div>
            <button class="mobile-menu-btn" id="mobile-menu-btn">☰</button>
          </div>
        </nav>
        
        <div class="mobile-nav-menu" id="mobile-nav-menu">
          <a href="${basePath}/index.html" class="nav-link ${window.location.pathname === '/' || window.location.pathname.endsWith('index.html') ? 'active' : ''}">${homeText}</a>
          <a href="${basePath}/pages/categories.html" class="nav-link ${window.location.pathname.includes('categories') ? 'active' : ''}">${categoriesText}</a>
          <a href="${basePath}/pages/business.html" class="nav-link ${window.location.pathname.includes('business') ? 'active' : ''}">${businessText}</a>
          <a href="${basePath}/pages/about.html" class="nav-link ${window.location.pathname.includes('about') ? 'active' : ''}">${aboutText}</a>
        </div>
      </div>
    `;
    
    // Add mobile menu toggle functionality
    this.shadowRoot.getElementById('mobile-menu-btn').addEventListener('click', (e) => {
      const menu = this.shadowRoot.getElementById('mobile-nav-menu');
      menu.classList.toggle('active');
    });
  }
}

customElements.define('custom-navbar', CustomNavbar);
