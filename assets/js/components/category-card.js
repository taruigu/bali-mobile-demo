class CategoryCard extends HTMLElement {
  connectedCallback() {
    const title = this.getAttribute('title') || '分类';
    const icon = this.getAttribute('icon') || 'box';
    const color = this.getAttribute('color') || 'var(--blue)';
    
    let actualColor = color;
    if (color.includes('var(')) {
      const varName = color.match(/--[\w-]+/)[0];
      actualColor = getComputedStyle(document.documentElement).getPropertyValue(varName).trim() || '#3a86ff';
    }
    
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .category-card {
          background-color: white;
          border-radius: 10px;
          padding: 18px 15px;
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
        }
        
        .category-card:active {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
        }
        
        .category-icon {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background-color: ${actualColor}20;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 12px;
        }
        
        .category-icon svg {
          width: 20px;
          height: 20px;
        }
        
        .category-title {
          font-size: 0.9rem;
          font-weight: 600;
          color: #0a2540;
          line-height: 1.2;
        }
      </style>
      
      <a href="./pages/categories.html" class="category-card">
        <div class="category-icon">
          ${this.getIconSVG(icon, actualColor)}
        </div>
        <h3 class="category-title">${title}</h3>
      </a>
    `;
  }
  getIconSVG(icon, color) {
    const icons = {
      'phone': `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.01V17M12 13V14M18 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V4C20 2.89543 19.1046 2 18 2Z" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      'shopping-bag': `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 22H15C20 22 21 21 21 16V8C21 3 20 2 15 2H9C4 2 3 3 3 8V16C3 21 4 22 9 22Z" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      'gift': `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 12V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V12" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 9H3V12H21V9Z" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      'home': `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 9.5L12 3L21 9.5V19.5C21 20.0523 20.5523 20.5 20 20.5H4C3.44772 20.5 3 20.0523 3 19.5V9.5Z" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      'watch': `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      'heart': `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.84 4.61C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.61L12 5.67L10.94 4.61C9.9083 3.57831 8.50903 2.99871 7.05 2.99871C5.59096 2.99871 4.19169 3.57831 3.16 4.61C2.1283 5.64169 1.54871 7.04097 1.54871 8.5C1.54871 9.95903 2.1283 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.351 11.8792 21.7564 11.2728 22.0329 10.6054C22.3095 9.93789 22.4518 9.22249 22.4518 8.5C22.4518 7.77751 22.3095 7.0621 22.0329 6.39464C21.7564 5.72718 21.351 5.12075 20.84 4.61V4.61Z" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      'activity': `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 12H18L15 21L9 3L6 12H2" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      'globe': `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`
    };
    return icons[icon] || icons['gift'];
  }
}

customElements.define('category-card', CategoryCard);
