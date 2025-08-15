import cssImportsPath from "/src/css/imports.css?inline";
import { apple, banana, orange } from "/src/assets/images/svg-imports.js";

const icons = {
  apple,
  banana,
  orange
}

class Icon extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const cssImports = document.createElement("style");
    cssImports.textContent = cssImportsPath;
    this.shadowRoot.appendChild(cssImports);

    const css = document.createElement("style");
    /*css*/
    css.textContent = `
      span {
        display: inline-block;
        // border: 1px solid red
      }
    `;
    this.shadowRoot.appendChild(css)
  }

  connectedCallback() {
    const name = this.getAttribute("name");
    const wrapper = document.createElement("span")
    wrapper.innerHTML = icons[name] || "";
    this.shadowRoot.appendChild(wrapper)
  }
}

export default Icon;
