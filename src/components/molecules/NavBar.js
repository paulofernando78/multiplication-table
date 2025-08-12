import cssImportsPath from "/src/main.css?inline";

class NavBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    /*css imports*/
    const cssImports = document.createElement("style");
    cssImports.textContent = cssImportsPath;

    const css = document.createElement("style");
    /*css*/
    css.textContent = `
      ul {
        background-color: black;
        border-radius: var(--border-radius);
        padding: var(--padding);
        list-style: none;
      }

      li a {
        text-decoration: none;
        color: white;
        font-family: "Slackey";
      }
    `;
    this.shadowRoot.appendChild(css);

    const navBar = document.createElement("nav");
    /*html*/
    navBar.innerHTML = `
    <ul>
      <li><a href="/index.html">Início</a></li>
      <li><a href="/portugues.html">Português</a></li>
      <li><a href="/matematica.html">Matemática</a></li>
      <li><a href="/historia.html">História</a></li>
      <li><a href="/geografia.html">Geografia</a></li>
      <li><a href="/quimica.html">Química</a></li>
      <li><a href="/biologia.html">Biologia</a></li>
      <li><a href="/biologia.html">Inglês</a></li>
    </ul>
  `;

    this.shadowRoot.appendChild(navBar);
  }
}

export default NavBar;
