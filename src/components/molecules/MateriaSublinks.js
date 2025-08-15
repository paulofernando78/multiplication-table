import cssImportsPath from "/src/css/imports.css?inline";
import materiaSublinks from "/src/config/materia-sublinks.json";

class MateriaSublinks extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const cssImports = document.createElement("style");
    cssImports.textContent = cssImportsPath;

    const materiaLinks = document.createElement("nav");
    /*html*/
    this.shadowRoot.innerHTML = `
    <style>
      ${cssImportsPath}
      ul {
        list-style: none;
      }

      li a {
        text-decoration: none;
      }

      .bullet::before {
        content: "• ";
        font-weight: bold
      }
    </style>
    <ul id="materia-sublinks"></ul>
  `;
  }

  connectedCallback() {
    const materia = this.dataset.materia;
    const ul = this.shadowRoot.getElementById("materia-sublinks");

    const links = materiaSublinks[materia];

    Object.entries(links).forEach(([nome, path]) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.classList.add("bullet")
      a.href = path;
      a.textContent = nome.charAt(0).toUpperCase() + nome.slice(1);
      li.appendChild(a);
      ul.appendChild(li);
    });
  }
}

export default MateriaSublinks;
