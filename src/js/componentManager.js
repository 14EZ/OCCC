

class MyHeader extends HTMLElement {
  async connectedCallback() {
    const resp = await fetch("src//header.html");
   
    this.innerHTML = await resp.text();
    const height = this.children[0].offsetHeight;
    this.style.height = `${height}px`
  }
}

class MyFooter extends HTMLElement {
  async connectedCallback() {
    const resp = await fetch("src/footer.html");
    this.innerHTML = await resp.text();
  }
}


customElements.define('my-header', MyHeader);
customElements.define('my-footer', MyFooter);


