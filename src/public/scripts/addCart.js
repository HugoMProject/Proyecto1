
 
//     event.preventDefault()

let carrito = [];
const divisa = '$';
const DOMcarrito = document.querySelector('#list'); // ul
const DOMdivCarrito = document.querySelector('#seccion-cuerpo'); // ul
const DOMtotal = document.querySelector('#text-right');  //p
const DOMbotonagredar = document.querySelector('.add-cart');// boton de añadir
const DOMbotonVaciar = document.querySelector('#btn-vaciar'); // boton de vaciar
// elementos del html de la base de datos
const price = document.querySelector('.price').textContent;
const productName = document.querySelector('.productName').textContent;
const miLocalStorage = window.localStorage;



/**
 * Evento para añadir un producto al carrito de la compra
 */
function renderizarCarrito() {
        const quantity = 1;
        const carritoSinDuplicados = [...new Set(carrito)];

        carritoSinDuplicados.forEach((item) => {
            // Obtenemos el item que necesitamos de la variable base de datos
            console.log(carritoSinDuplicados)
                // ¿Coincide las id? Solo puede existir un caso
                // return itemBaseDatos.id === parseInt(item);
            });
            // Cuenta el número de veces que se repite el producto
        // Creamos el nodo del item del carrito
            const miNodo = document.createElement('li');
            const miNodospace = document.createElement('hr');
            miNodo.classList.add('list-group-item', 'text-right', 'mx-2',);
            miNodo.textContent = `${quantity}  x  ${ productName }--${price}`;
            // Boton de borrar
            const miBoton = document.createElement('button');
            miBoton.classList.add('btn', 'btn-danger', 'mx-5');
            miBoton.textContent = 'X';
            miBoton.style.marginLeft = '1rem';
                // añadimos el evento de eliminar un producto
            miBoton.addEventListener('click',() => {
               // Evento para borrar un elemento del carrito
                miNodo.parentNode.removeChild(miNodo);
                guardarCarritoEnLocalStorage();
               });
            // Mezclamos nodos
            miNodo.appendChild(miBoton);
            miNodo.appendChild(miNodospace);
            let i =   DOMcarrito.appendChild(miNodo).textContent;
            carrito = [...carrito, i]; 
            guardarCarritoEnLocalStorage();
            console.log(carrito)
 //   });
    /*
    // Renderizamos el precio total en el HTML
    DOMtotal.textContent = calcularTotal();*/
};



/**
 * Calcula el precio total teniendo en cuenta los productos repetidos
 */
function calcularTotal() {
    // Recorremos el array del carrito 
    return carrito.reduce((total, item) => {
        // De cada elemento obtenemos su precio
        const miItem = dbProducts.filter((itemBaseDatos) => {
            return itemBaseDatos.id === parseInt(item);
        });
        // Los sumamos al total
        return total + miItem[0].precio;
    }, 0).toFixed(2);
}

/**
 * Varia el carrito y vuelve a dibujarlo
 */
function vaciarCarrito() {
    // Limpiamos los productos guardados
    carrito = [];
    // Renderizamos los cambios
    DOMcarrito.textContent = '';
        // Borra LocalStorage
    localStorage.clear();
};
function guardarCarritoEnLocalStorage () {
    miLocalStorage.setItem('carrito', JSON.stringify(carrito));
}

function cargarCarritoDeLocalStorage () {
    // ¿Existe un carrito previo guardado en LocalStorage?
    if (miLocalStorage.getItem('carrito') !== null) {
        // Carga la información
        carrito = JSON.parse(miLocalStorage.getItem('carrito'));
    }
}

// Eventos
DOMbotonVaciar.addEventListener('click', vaciarCarrito);

// Inicio
cargarCarritoDeLocalStorage();