import cssImportsPath from "/src/css/imports.css?inline";

class Conteudo extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    /*html*/
    this.shadowRoot.innerHTML = `
    <style>
        ${cssImportsPath}
        span {
          font-weight: 900
        }
      </style>
      <span>CONTEÚDO</span>
    `;
  }
}

export default Conteudo;
