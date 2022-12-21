const DOMcart = document.querySelector('#list'); // ul
const DOMbtnVaciar = document.querySelector('#btn-vaciar');
const myLocalStorage = window.localStorage;




let cart = [];

function vaciarCarrito() {
    // Limpiamos los productos guardados
    cart = [];
    // Renderizamos los cambios
    DOMcart.textContent = '';
        // Borra LocalStorage
    localStorage.clear();
};
function cargarCarritoDeLocalStorage () {
    // ¿Existe un carrito previo guardado en LocalStorage?
    if (myLocalStorage.getItem('carrito') !== null) {
        // Carga la información
        carrito = JSON.parse(myLocalStorage.getItem('carrito'));
    }
}

DOMbtnVaciar.addEventListener('click', vaciarCarrito);
cargarCarritoDeLocalStorage (); 

