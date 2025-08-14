import cssImportsPath from "/src/css/imports.css?inline";
import materias from "/src/config/materias.json";

class NavBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const cssImports = document.createElement("style");
    cssImports.textContent = cssImportsPath;

    const navBar = document.createElement("nav");
    /*html*/
    this.shadowRoot.innerHTML = `
    <style>
      ${cssImportsPath}
      ul {
        margin-top: 12px;
        list-style: none;
      }

      li a {
        text-decoration: none;
        font-family: "Slackey";
      }
    </style>
    <nav>
    <ul id="nav-list"></ul>
    </nav>
  `;
  }

  connectedCallback() {
    const ul = this.shadowRoot.getElementById("nav-list");
    Object.entries(materias).forEach(([nome, path]) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = path;
      a.textContent = nome.charAt(0).toUpperCase() + nome.slice(1); // Capitaliza
      li.appendChild(a);
      ul.appendChild(li);
    });
  }
}

export default NavBar;
