// EmisorComponent
class EmisorComponent extends HTMLElement {
    connectedCallback() {
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
        <button id="myButton">Haz clic</button>
      `;

      this.shadowRoot.querySelector('#myButton').addEventListener('click', () => {
        const customEvent = new CustomEvent('mensaje-recibido', {
          bubbles: true,
          composed: true,
          detail: { mensaje: 'Información actualizada' },
        });
        this.dispatchEvent(customEvent);
      });
    }
}

customElements.define('emisor-component', EmisorComponent);
