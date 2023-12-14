// ReceptorComponent
class ReceptorComponent extends HTMLElement {
    connectedCallback() {
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
        <div id="infoDisplay">Esperando información...</div>
      `;

      document.addEventListener('mensaje-recibido', (event) => {
        console.log('Evento recibido:', event.detail);
        this.shadowRoot.querySelector('#infoDisplay').innerText = event.detail.mensaje;
      });
    }
}

customElements.define('receptor-component', ReceptorComponent);
