import cssImportsPath from "/src/css/imports.css?inline";

class Header extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    /*html*/
    this.shadowRoot.innerHTML = `
      <style>
        ${cssImportsPath}
        header {
          padding: 5px 0 0 0;
        }

        wc-nav-bar {
          display: none
        }

        wc-nav-bar.show {
          display: block
        }
      </style>
      <header>
        <div>
        <wc-button id="button" label="Menu"></wc-button>
        <wc-button id="button" label="escuro"></wc-button>
        </div>
        <wc-nav-bar id="nav-bar"></wc-nav-bar>
      </header>
      `;

      const button = this.shadowRoot.querySelector("#button")
      const navBar = this.shadowRoot.querySelector("#nav-bar")

      button.addEventListener("click", () => {
        navBar.classList.toggle("show")
      })
    }

    
}

export default Header;
