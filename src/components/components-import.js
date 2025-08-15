// Atoms
import Board from "./atoms/Board";
import Button from "./atoms/Button";
import Card from "./atoms/Card";
import Footer from "./atoms/Footer";
import Icon from "./atoms/Icon";

// Molecules
import Header from "./molecules/Header";
import NavBar from "./molecules/NavBar";
import MateriaSublinks from "./molecules/MateriaSublinks";

// Organisms

// Atoms
customElements.define("wc-board", Board)
customElements.define("wc-button", Button)
customElements.define("wc-card", Card)
customElements.define("wc-footer", Footer)
customElements.define("wc-icon", Icon)

// Molecules
customElements.define("wc-header", Header)
customElements.define("wc-nav-bar", NavBar)
customElements.define("wc-materia-sublinks", MateriaSublinks)

// Organisms