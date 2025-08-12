class Button extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ "mode": open})
  }
}

export default Button
