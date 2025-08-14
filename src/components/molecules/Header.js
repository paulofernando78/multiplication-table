import cssImportsPath from "/src/css/imports.css?inline";

class Header extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const cssImports = document.createElement("style");
    cssImports.textContent = cssImportsPath;

    /*html*/
    this.shadowRoot.innerHTML = `
      <style>
        ${cssImportsPath}
        header {
          padding: 5px 0 0 0;
        }
        
        .flex {
          display: flex;
          justify-content: space-between
        }

        wc-nav-bar {
          display: none
        }

        wc-nav-bar.show {
          display: block
        }
      </style>
      <header>
        <div class="flex">
          <wc-button id="button" label="Menu"></wc-button>
          <wc-button id="button" label="escuro"></wc-button>
        </div>
        <wc-nav-bar id="nav-bar"></wc-nav-bar>
      </header>
      `;

    const button = this.shadowRoot.querySelector("#button");
    const navBar = this.shadowRoot.querySelector("#nav-bar");

    button.addEventListener("click", () => {
      navBar.classList.toggle("show");
    });
  }
}

export default Header;
