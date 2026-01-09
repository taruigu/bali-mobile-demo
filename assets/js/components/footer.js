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
    
    const footerLogoText = template.content.querySelector('#footer-logo-text')?.textContent || '芭利礼品';
    const footerDescription = template.content.querySelector('#footer-description')?.textContent || '';
    const footerQuickLinks = template.content.querySelector('#footer-quick-links')?.textContent || '快速链接';
    const footerLinkHome = template.content.querySelector('#footer-link-home')?.textContent || '首页';
    const footerLinkCategories = template.content.querySelector('#footer-link-categories')?.textContent || '礼品分类';
    const footerLinkBusiness = template.content.querySelector('#footer-link-business')?.textContent || '企业服务';
    const footerLinkAbout = template.content.querySelector('#footer-link-about')?.textContent || '关于我们';
    const footerHelpCenter = template.content.querySelector('#footer-help-center')?.textContent || '帮助中心';
    const footerLinkFaq = template.content.querySelector('#footer-link-faq')?.textContent || '常见问题';
    const footerLinkContact = template.content.querySelector('#footer-link-contact')?.textContent || '联系我们';
    const footerLinkShipping = template.content.querySelector('#footer-link-shipping')?.textContent || '配送信息';
    const footerLinkReturns = template.content.querySelector('#footer-link-returns')?.textContent || '退换政策';
    const footerContactUs = template.content.querySelector('#footer-contact-us')?.textContent || '联系我们';
    const footerPhone = template.content.querySelector('#footer-phone')?.textContent || '客服电话: 400-888-8888';
    const footerEmail = template.content.querySelector('#footer-email')?.textContent || '邮箱: service@baligift.com';
    const footerTime = template.content.querySelector('#footer-time')?.textContent || '工作时间: 9:00-18:00';
    const footerAddress = template.content.querySelector('#footer-address')?.textContent || '地址: 上海市浦东新区张江高科技园区';
    const footerCopyright = template.content.querySelector('#footer-copyright')?.textContent || '© 2023 芭利礼品兑换平台. 保留所有权利. 沪ICP备12345678号';
    
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          background-color: var(--dark-blue);
          color: white;
          padding: 50px 0 20px;
        }
        
        .footer-content {
          display: grid;
          grid-template-columns: 1fr;
          gap: 30px;
          margin-bottom: 30px;
        }
        
        .footer-logo {
          display: flex;
          align-items: center;
          margin-bottom: 15px;
          font-size: 1.2rem;
          font-weight: 600;
        }
        
        .footer-logo svg {
          width: 18px;
          height: 18px;
          margin-right: 8px;
        }
        
        .footer-description {
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.5;
          margin-bottom: 15px;
          font-size: 0.85rem;
        }
        
        .footer-title {
          font-size: 0.95rem;
          font-weight: 600;
          margin-bottom: 12px;
          color: white;
        }
        
        .footer-links {
          list-style: none;
        }
        
        .footer-link {
          margin-bottom: 8px;
          font-size: 0.85rem;
        }
        
        .footer-link a {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          transition: color 0.3s;
        }
        
        .footer-link a:active {
          color: var(--gold);
        }
        
        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 20px;
          text-align: center;
          color: rgba(255, 255, 255, 0.5);
          font-size: 0.75rem;
        }
        
        .social-links {
          display: flex;
          gap: 10px;
          margin-top: 15px;
        }
        
        .social-link {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 0.3s;
        }
        
        .social-link:active {
          background-color: var(--gold);
        }
        
        .social-link svg {
          width: 14px;
          height: 14px;
        }
      </style>
      
      <div class="container" style="padding: 0 15px;">
        <div class="footer-content">
          <div class="footer-col">
            <div class="footer-logo">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L3 7L12 12L21 7L12 2Z" fill="var(--gold)"/>
                <path d="M3 12L12 17L21 12" stroke="var(--gold)" stroke-width="2"/>
                <path d="M3 17L12 22L21 17" stroke="var(--gold)" stroke-width="2"/>
              </svg>
              <span>${footerLogoText}</span>
            </div>
            <p class="footer-description">
              ${footerDescription}
            </p>
            <div class="social-links">
              <a href="#" class="social-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
              <a href="#" class="social-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23 3.01006C23 3.01006 20.9821 4.20217 19.86 4.54006C19.2577 3.84757 18.4573 3.35675 17.567 3.13398C16.6767 2.91122 15.7395 2.96725 14.8821 3.29451C14.0247 3.62177 13.2884 4.20446 12.773 4.96377C12.2575 5.72309 11.9877 6.62239 12 7.54006V8.54006C10.2426 8.58562 8.50127 8.19587 6.93101 7.4055C5.36074 6.61513 4.01032 5.44869 3 4.01006C3 4.01006 -1 13.0101 8 17.0101C5.94053 18.408 3.48716 19.109 1 19.0101C10 24.0101 21 19.0101 21 7.51006C20.9991 7.23151 20.9723 6.95365 20.92 6.68006C21.9406 5.67355 23 3.01006 23 3.01006Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
              <a href="#" class="social-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61991 14.1902 8.22773 13.4229 8.09406 12.5922C7.9604 11.7616 8.09205 10.9099 8.47032 10.1584C8.84858 9.40685 9.45418 8.79374 10.201 8.40624C10.9478 8.01875 11.7978 7.87658 12.63 8C13.4789 8.12588 14.2648 8.52146 14.8717 9.1283C15.4785 9.73515 15.8741 10.5211 16 11.37Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div class="footer-col">
            <h3 class="footer-title">${footerQuickLinks}</h3>
            <ul class="footer-links">
              <li class="footer-link"><a href="${basePath}/index.html">${footerLinkHome}</a></li>
              <li class="footer-link"><a href="${basePath}/pages/categories.html">${footerLinkCategories}</a></li>
              <li class="footer-link"><a href="${basePath}/pages/business.html">${footerLinkBusiness}</a></li>
              <li class="footer-link"><a href="${basePath}/pages/about.html">${footerLinkAbout}</a></li>
            </ul>
          </div>
          
          <div class="footer-col">
            <h3 class="footer-title">${footerHelpCenter}</h3>
            <ul class="footer-links">
              <li class="footer-link"><a href="${basePath}/pages/faq.html">${footerLinkFaq}</a></li>
              <li class="footer-link"><a href="${basePath}/pages/contact.html">${footerLinkContact}</a></li>
              <li class="footer-link"><a href="${basePath}/pages/shipping.html">${footerLinkShipping}</a></li>
              <li class="footer-link"><a href="${basePath}/pages/returns.html">${footerLinkReturns}</a></li>
            </ul>
          </div>
          
          <div class="footer-col">
            <h3 class="footer-title">${footerContactUs}</h3>
            <ul class="footer-links">
              <li class="footer-link">${footerPhone}</li>
              <li class="footer-link">${footerEmail}</li>
              <li class="footer-link">${footerTime}</li>
              <li class="footer-link">${footerAddress}</li>
            </ul>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>${footerCopyright}</p>
        </div>
      </div>
    `;
  }
}

customElements.define('custom-footer', CustomFooter);
