class Footer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const css = document.createElement("style");
    /*css*/
    css.textContent = `
      div {
        background-color: white
      }
    
      small {
        max-width: 1000px;
        margin: 0 auto;
        padding-block: 8px;
        display: block;
        text-align: center;
        border: 1px solid lightgray;
        border-radius: var(--border-radius)
      }
    `
    this.shadowRoot.appendChild(css)

    const footer = document.createElement("footer");
    /*html*/
    footer.innerHTML = `
      <div>
      <small>&copy; 2025 Atividades Online. Todos os direitos reservados.</small>
      </div>
    `;
    
    this.shadowRoot.appendChild(footer);
  }
}

export default Footer;
