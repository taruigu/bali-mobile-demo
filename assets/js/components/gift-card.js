class GiftCard extends HTMLElement {
  connectedCallback() {
    const title = this.getAttribute('title') || '礼品';
    const value = this.getAttribute('value') || '0';
    const image = this.getAttribute('image') || 'http://static.photos/gradient/640x360/1';
    const category = this.getAttribute('category') || '其他';
    
    // Get text content from template
    const template = document.querySelector('#gift-card-template');
    if (!template) {
      console.error('Gift card template not found');
      return;
    }
    const valueLabel = template.content.querySelector('#gift-value-label')?.textContent || '所需礼品卡';
    const exchangeBtn = template.content.querySelector('#gift-exchange-btn')?.textContent || '立即兑换';
    
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .gift-card {
          background-color: white;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          position: relative;
        }
        
        .gift-card:active {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
        }
        
        .gift-image {
          width: 100%;
          height: 150px;
          object-fit: cover;
        }
        
        .gift-badge {
          position: absolute;
          top: 10px;
          right: 10px;
          background-color: var(--gold);
          color: var(--dark-blue);
          padding: 3px 10px;
          border-radius: 15px;
          font-size: 0.65rem;
          font-weight: 600;
        }
        
        .gift-content {
          padding: 15px;
        }
        
        .gift-title {
          font-size: 0.95rem;
          font-weight: 600;
          margin-bottom: 8px;
          color: var(--dark-blue);
          line-height: 1.3;
        }
        
        .gift-value {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 10px;
          font-size: 0.85rem;
        }
        
        .value-label {
          color: var(--text-light);
        }
        
        .value-amount {
          font-size: 1rem;
          font-weight: 600;
          color: var(--gold);
        }
        
        .exchange-btn {
          width: 100%;
          padding: 10px;
          margin-top: 12px;
          background-color: var(--dark-blue);
          color: white;
          border: none;
          border-radius: 6px;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.3s;
          font-size: 0.85rem;
        }
        
        .exchange-btn:active {
          background-color: #1a365d;
        }
      </style>
      
      <div class="gift-card">
        <img src="${image}" alt="${title}" class="gift-image">
        <span class="gift-badge">${category}</span>
        
        <div class="gift-content">
          <h3 class="gift-title">${title}</h3>
          
          <div class="gift-value">
            <span class="value-label">${valueLabel}</span>
            <span class="value-amount">￥${value}</span>
          </div>
          
          <button class="exchange-btn">${exchangeBtn}</button>
        </div>
      </div>
    `;
  }
}

customElements.define('gift-card', GiftCard);
