import cssImportsPath from "/src/css/imports.css?inline";

import board from "@images/board.jpg";

class Board extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const cssImports = document.createElement("style");
    cssImports.textContent = cssImportsPath;

    const title = this.getAttribute("title")
    const subTitle = this.getAttribute("subtitle")

    /*html*/
    this.shadowRoot.innerHTML = `
    <style>
      ${cssImportsPath}
      div {
        width: 100%;
        height: 200px;
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
    </style>
    <div>
      <h1>${title}</h1>
      ${subTitle ? `<h2>${subTitle}</h2>` : ""}
    </div>
    `;
  }
}

export default Board;
