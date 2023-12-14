class SaludoComponent extends HTMLElement {
    constructor() {
      super();
  
      var shadow = this.attachShadow({mode: 'open'});
  
      var saludo = document.createElement('span');
      saludo.textContent = "¡Hola, Mundo!";
  
      // Creamos un elemento de estilo
      var estilo = document.createElement('style');
      estilo.textContent = `
        span {
          font-size: 2em;
          font-family: Arial, sans-serif;
        }
      `;
  
      // Estilo en el shadow DOM
      shadow.appendChild(estilo);
  
      shadow.appendChild(saludo);
    }
  }
  
  customElements.define('saludo-component', SaludoComponent);
  