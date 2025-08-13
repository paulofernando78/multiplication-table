class Board extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ "mode": open})

    const css = document.createElement("style")
    /*css*/
    css.textContent = `
      div {
        border: "var(--border)"
      }
    `

    const board = document.createElement("div")
    
    this.shadowRoot.appendChild(Board)
  }
}

export default Card
