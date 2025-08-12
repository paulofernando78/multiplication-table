class Footer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const css = document.createElement("style");
    /*css*/
    css.textContent = `
      small {
        display: block;
        text-align: center;
        margin-top: 15px
      }
    `
    this.shadowRoot.appendChild(css)

    const footer = document.createElement("footer");
    /*html*/
    footer.innerHTML = `
      <hr />
      <small>&copy; 2025 Atividades Online. Todos os direitos reservados.</small>
    `;
    
    this.shadowRoot.appendChild(footer);
  }
}

export default Footer;
