

let carrito = [];
const DOMcarrito = document.querySelector('#list'); // ul
const DOMdivCarrito = document.querySelector('seccion-cuerpo'); // ul
const DOMprod = document.querySelector('.main'); // ul
const DOMtotal = document.querySelector('#text-right');  //p
const DOMbotonagredar = document.querySelectorAll('.add-cart');// boton de añadir
// elementos del html de la base de datos
const miLocalStorage = window.localStorage;
/**
 * Evento para añadir un producto al carrito de la compra
 */


 async function renderizarCarrito(evento) {
     let newcarrito = [];
    let quantity = 1;

        
    await fetch(`http://localhost:3000/api/getone/product/${evento}`)
          .then(response => response.json())
          .then(data => {
            const { id, productName, price, description,img } = data;
            newcarrito.push({
              id,
              quantity: 1 + 1,
              productName,
              price,
            });
            cargarCarritoDeLocalStorage ();
            guardarCarritoEnLocalStorage([...newcarrito, carrito]);
                const miNodo = document.createElement('li'); 
                const miNodospace = document.createElement('hr');
                miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
                miNodo.innerHTML = `<span> ${quantity} </span> x ${ productName } -$ ${ price }  `;
               
                miNodo.style.width = "80%";
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
                DOMcarrito.appendChild(miNodo);
                
                
                
        })
        .catch(error => console.log(error));
};


function guardarCarritoEnLocalStorage (carrito) {

    miLocalStorage.setItem('carrito', JSON.stringify(carrito));

}

function cargarCarritoDeLocalStorage () {
    // ¿Existe un carrito previo guardado en LocalStorage?
    if (miLocalStorage.getItem('carrito') !== null) {
        // Carga la información
        carrito = JSON.parse(miLocalStorage.getItem('carrito'));
    }

}


// Inicio
cargarCarritoDeLocalStorage();

