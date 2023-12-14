// contenedor-component.js

class ContenedorComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .container {
                    border: 2px solid #007bff;
                    margin: 20px;
                    padding: 20px;
                    text-align: center;
                }
            </style>
            <div class="container">
                <div class="encabezado">
                    <slot name="encabezado"></slot>
                </div>
                <div class="cuerpo">
                    <slot name="cuerpo"></slot>
                </div>
            </div>
        `;
    }
}

customElements.define('contenedor-component', ContenedorComponent);
