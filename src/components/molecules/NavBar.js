import cssImportsPath from "/src/css/imports.css?inline";

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
    <ul>
      <li><a href="/">Início</a></li>
      <li><a href="/src/materia/portugues.html">Português</a></li>
      <li><a href="/src/materia/matematica.html">Matemática</a></li>
      <li><a href="/src/materia/historia.html">História</a></li>
      <li><a href="/src/materia/geografia.html">Geografia</a></li>
      <li><a href="/src/materia/quimica.html">Química</a></li>
      <li><a href="/src/materia/biologia.html">Biologia</a></li>
      <li><a href="/src/materia/biologia.html">Inglês</a></li>
    </ul>
  `;
  }
}

export default NavBar;
