import cssImportsPath from "/src/css/imports.css?inline";

class Card extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: open });

    const cssImports = document.createElement("style");
    cssImports.textContent = cssImportsPath;

    const css = document.createElement("style");
    /*css*/
    css.textContent = `
      div {
        border: "var(--border)"
      }
    `;

    const card = document.createElement("div");

    this.shadowRoot.appendChild(card);
  }
}

export default Card;
