import cssImportsPath from "/src/css/imports.css?inline";
import * as icons from "/src/assets/images/svg-imports.js";

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
          <wc-button id="darkButton" icon="lightOff"></wc-button>
        </div>
        <wc-nav-bar id="nav-bar"></wc-nav-bar>
      </header>
      `;

    const button = this.shadowRoot.querySelector("#button");
    const navBar = this.shadowRoot.querySelector("#nav-bar");

    const darkMode = this.shadowRoot.querySelector("#darkButton");

    if (darkMode) {
      darkMode.addEventListener("click", () => {
        const html = document.documentElement;
        const isDark = html.classList.toggle("dark");

        darkMode.setAttribute("icon", isDark ? "light" : "lightOff");
        localStorage.setItem("theme", isDark ? "dark" : "light");

        const front = darkMode.shadowRoot.querySelector(".front");
        if (front) front.innerHTML = icons[isDark ? "light" : "lightOff"];
      });
    }

    button.addEventListener("click", () => {
      navBar.classList.toggle("show");
    });
  }
}

export default Header;
