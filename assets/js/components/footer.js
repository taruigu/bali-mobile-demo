class CustomFooter extends HTMLElement {
  connectedCallback() {
    // Get text content from template
    const template = document.querySelector('#footer-template');
    if (!template) {
      console.error('Footer template not found');
      return;
    }
    
    // Determine if we're in pages folder
    const isInPages = window.location.pathname.includes('/pages/') || document.currentScript?.src.includes('/pages/');
    const basePath = isInPages ? '..' : '.';
    
    // Get current page for active tab highlighting
    const currentPath = window.location.pathname;
    const isHome = currentPath === '/' || currentPath.endsWith('index.html');
    const isCategories = currentPath.includes('categories');
    const isCart = currentPath.includes('cart');
    const isUser = currentPath.includes('user') || currentPath.includes('profile');
    
    const footerLinkHome = template.content.querySelector('#footer-link-home')?.textContent || '首页';
    const footerLinkCategories = template.content.querySelector('#footer-link-categories')?.textContent || '礼品分类';
    const footerLinkBusiness = template.content.querySelector('#footer-link-business')?.textContent || '企业服务';
    const footerLinkAbout = template.content.querySelector('#footer-link-about')?.textContent || '关于我们';
    
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 100;
          background-color: var(--dark-blue);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .tab-bar {
          display: flex;
          justify-content: space-around;
          align-items: center;
          height: 60px;
          width: 100%;
        }
        
        .tab-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          flex: 1;
          height: 100%;
          color: rgba(255, 255, 255, 0.6);
          text-decoration: none;
          transition: all 0.3s ease;
          gap: 4px;
          font-size: 0.75rem;
        }
        
        .tab-item:active,
        .tab-item.active {
          color: var(--gold);
        }
        
        .tab-item svg {
          width: 24px;
          height: 24px;
          stroke-width: 2;
          transition: all 0.3s ease;
        }
        
        .tab-item.active svg {
          stroke: var(--gold);
          fill: var(--gold);
        }
        
        .tab-label {
          font-weight: 500;
          white-space: nowrap;
        }
      </style>
      
      <nav class="tab-bar">
        <a href="${basePath}/index.html" class="tab-item ${isHome ? 'active' : ''}">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12L12 3L21 12V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V12Z" stroke="currentColor" fill="none"/>
            <path d="M9 22V12H15V22" stroke="currentColor" fill="none"/>
          </svg>
          <span class="tab-label">${footerLinkHome}</span>
        </a>
        
        <a href="${basePath}/pages/categories.html" class="tab-item ${isCategories ? 'active' : ''}">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6C4 4.89543 4.89543 4 6 4H9C10.1046 4 11 4.89543 11 6V9C11 10.1046 10.1046 11 9 11H6C4.89543 11 4 10.1046 4 9V6Z" stroke="currentColor" fill="none"/>
            <path d="M13 6C13 4.89543 13.8954 4 15 4H18C19.1046 4 20 4.89543 20 6V9C20 10.1046 19.1046 11 18 11H15C13.8954 11 13 10.1046 13 9V6Z" stroke="currentColor" fill="none"/>
            <path d="M4 15C4 13.8954 4.89543 13 6 13H9C10.1046 13 11 13.8954 11 15V18C11 19.1046 10.1046 20 9 20H6C4.89543 20 4 19.1046 4 18V15Z" stroke="currentColor" fill="none"/>
            <path d="M13 15C13 13.8954 13.8954 13 15 13H18C19.1046 13 20 13.8954 20 15V18C20 19.1046 19.1046 20 18 20H15C13.8954 20 13 19.1046 13 18V15Z" stroke="currentColor" fill="none"/>
          </svg>
          <span class="tab-label">${footerLinkCategories}</span>
        </a>
        
        <a href="${basePath}/pages/business.html" class="tab-item">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7V12C2 18.1 7.4 23.3 12 24C16.6 23.3 22 18.1 22 12V7L12 2Z" stroke="currentColor" fill="none"/>
            <path d="M12 12L8 10M12 12L16 10M12 12V17" stroke="currentColor" fill="none"/>
          </svg>
          <span class="tab-label">${footerLinkBusiness}</span>
        </a>
        
        <a href="${basePath}/pages/about.html" class="tab-item">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="8" r="4" stroke="currentColor" fill="none"/>
            <path d="M4 20C4 16.134 7.582 13 12 13C16.418 13 20 16.134 20 20" stroke="currentColor" fill="none"/>
          </svg>
          <span class="tab-label">${footerLinkAbout}</span>
        </a>
      </nav>
    `;
    
    // Add active state handler for real-time updates
    this.updateActiveTab();
    window.addEventListener('load', () => this.updateActiveTab());
  }
  
  updateActiveTab() {
    const currentPath = window.location.pathname;
    const isHome = currentPath === '/' || currentPath.endsWith('index.html');
    const isCategories = currentPath.includes('categories');
    
    const items = this.shadowRoot?.querySelectorAll('.tab-item') || [];
    items.forEach((item, index) => {
      item.classList.remove('active');
      if ((index === 0 && isHome) || (index === 1 && isCategories)) {
        item.classList.add('active');
      }
    });
  }
}

customElements.define('custom-footer', CustomFooter);
