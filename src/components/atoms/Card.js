class Card extends HTMLElement {
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

    const card = document.createElement("div")
    
    this.shadowRoot.appendChild(card)
  }
}

export default Card
