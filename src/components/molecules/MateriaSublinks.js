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

    if (!this.subIndex) this.subIndex = 0

    Object.entries(links).forEach(([nome, val]) => {
      if (typeof val === "string") {
        // Caso simples: link direto
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.classList.add("bullet");
        a.href = val;
        a.textContent = nome;
        li.appendChild(a);
        ul.appendChild(li);
      } else if (val && typeof val === "object") {
        // Caso com submatéria
        const liSub = document.createElement("li");
        if (this.subIndex > 0) {
          liSub.style.marginTop = "16px"
        }
        this.subIndex++;
        
        const span = document.createElement("span");
        span.textContent = nome;
        span.style.fontWeight = "bold"
        liSub.appendChild(span)

        const subUl = document.createElement("ul");

        Object.entries(val).forEach(([subNome, subPath]) => {
          const li = document.createElement("li");
          const a = document.createElement("a");
          a.classList.add("bullet");
          a.href = subPath;
          a.textContent = subNome;
          li.appendChild(a);
          subUl.appendChild(li);
        });

        liSub.appendChild(subUl);
        ul.appendChild(liSub);
      }
    });
  }
}

export default MateriaSublinks;
