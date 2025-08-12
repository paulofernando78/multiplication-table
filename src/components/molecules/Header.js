class Header extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const header = document.createElement("header");
    header.style.backgroundColor = "black";
    header.style.color = "white";
    header.style.padding = "10px";
    header.style.borderRadius = "var(--border-radius)"
    header.textContent = "Header";

    this.shadowRoot.append(header);
  }
}

export default Header;