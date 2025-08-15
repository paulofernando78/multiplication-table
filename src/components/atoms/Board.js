import cssImportsPath from "/src/css/imports.css?inline";

import board from "@images/board.jpg";

class Board extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const cssImports = document.createElement("style");
    cssImports.textContent = cssImportsPath;

    const titulo = this.getAttribute("titulo")
    const subTitulo = this.getAttribute("subtitulo")
    const descricao = this.getAttribute("descricao")

    /*html*/
    this.shadowRoot.innerHTML = `
    <style>
      ${cssImportsPath}
      div {
        width: 100%;
        height: 164px;
        padding: 22px 15px 15px 15px;
        font-family: "Rock Salt", cursive;
        color: white;
        border-radius: var(--border-radius);
        background-image: url(${board});
        margin-bottom: 50px
      }

      h1 {
        margin-bottom: 20px
      }
      
      h2 {
        margin-bottom: 20px
      }
      
    </style>
    <div>
      <h1>${titulo}</h1>
      ${subTitulo ? `<h2>${subTitulo}</h2>` : ""}
      ${descricao ? `<h3>${descricao}</h3>` : ""}
    </div>
    `;
  }
}

export default Board;
