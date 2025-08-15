import cssImportsPath from "/src/css/imports.css?inline";
import * as icons from "/src/assets/images/svg-imports.js"

class Button extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const cssImports = document.createElement("style");
    cssImports.textContent = cssImportsPath;
  }

  connectedCallback() {
    const label = this.getAttribute("label");
    const icon = this.getAttribute("icon")

    const frontContent = icon && icons[icon] ? icons[icon] : label

    const buttonStyle = icon ? "width: 39px; height: 33px" : "";

    /*html*/
    this.shadowRoot.innerHTML = `
        <style>
          ${cssImportsPath}
          button {
            font-family: "Press Start 2P", system-ui;
          }

          .front {
            display: block;
            position: relative;
            padding: 8px 10px;
            border-radius: 8px;
            font-size: .8rem;
            color: white;
            background: hsl(345deg 100% 47%);
            will-change: transform;
            transform: translateY(-4px);
            transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
          }

          .front svg {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%)

          }

          .pushable {
            position: relative;
            border: none;
            background: transparent;
            padding: 0;
            cursor: pointer;
            outline-offset: 4px;
            transition: filter 250ms;
          }

          .shadow {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 8px;
            background: hsl(0deg 0% 0% / 0.25);
            will-change: transform;
            transform: translateY(2px);
            transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
          }

          .edge {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 8px;
            background: linear-gradient(
              to left,
              hsl(340deg 100% 16%) 0%,
              hsl(340deg 100% 32%) 8%,
              hsl(340deg 100% 32%) 92%,
              hsl(340deg 100% 16%) 100%
            );
          }
  
          .pushable:hover .front {
            transform: translateY(-4px);
            transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
          }

          .pushable:active .front {
            transform: translateY(-2px);
            transition: transform 34ms;
          }

          .pushable:hover .shadow {
            transform: translateY(2px);
            transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
          }

          .pushable:active .shadow {
            transform: translateY(1px);
            transition: transform 34ms;
          }

          .pushable:focus:not(:focus-visible) {
            outline: none;
          }
        </style>
        <button class="pushable" style="${buttonStyle}">
          <span class="shadow" style="${buttonStyle}"></span>
          <span class="edge" style="${buttonStyle}"></span>
          <span class="front" style="${buttonStyle}">${frontContent}</span>
        </button>
        `;
  }
}

export default Button;
