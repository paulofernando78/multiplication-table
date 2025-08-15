import cssImportsPath from "/src/css/imports.css?inline";

class Card extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    /*html*/
    this.shadowRoot.innerHTML = `
    <style>
        ${cssImportsPath}
        div {
          width: max-content;
          padding: var(--padding);
          border: var(--border);
          border-radius: var(--border-radius);
          box-shadow: var(--box-shadow)
        }
      </style>
      <div>
        <slot></slot>
      </div>
    `;
  }
}

export default Card;
