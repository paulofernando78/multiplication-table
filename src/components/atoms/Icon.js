import cssImportsPath from "/src/css/imports.css?inline";
import { apple, light, dark } from "/src/assets/images/svg-imports.js";

const icons = {
  apple,
  light,
  dark
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
      svg {
        vertical-align: middle;
        position: relative;
        bottom: 3px
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
