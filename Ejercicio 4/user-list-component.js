class UserListComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
        this.shadowRoot.querySelector('button').addEventListener('click', () => this.getUsers());
    }

    getUsers() {
        var apiUrl = 'https://jsonplaceholder.typicode.com/users';
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                if (Array.isArray(data)) {
                    this.displayUsers(data);
                } else {
                    console.error('La respuesta de la API no tiene la estructura esperada', data);
                }
            })
            .catch(error => {
                console.error('Error al obtener datos de la API', error);
            });
    }

    displayUsers(userList) {
        var userListElement = this.shadowRoot.getElementById('user-list');
        userListElement.innerHTML = '';
        userList.forEach(user => {
            var listItem = document.createElement('li');
            listItem.textContent = `${user.name}: ${user.email}`;
            userListElement.appendChild(listItem);
        });
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                body {
                    font-family: Arial, sans-serif;
                    text-align: center;
                }

                #user-list {
                    list-style: none;
                    padding: 0;
                }

                li {
                    margin: 10px;
                }
            </style>
            <h1>Lista de Usuarios</h1>
            <button>Mostrar Usuarios</button>
            <ul id="user-list"></ul>
        `;
    }
}

customElements.define('user-list-component', UserListComponent);
