const DOMcarrito = document.querySelector('#list'); // ul
const DOMdivCarrito = document.querySelector('seccion-cuerpo'); // ul
const DOMprod = document.querySelector('.main'); // ul
const DOMtotal = document.querySelector('#text-right');  //p

const DOMbotonagredar = document.querySelectorAll('.add-cart');// boton de añadir
const DOMdivcart = document.querySelector('.div-cart');// div contenedor de productos del carrito en tienda
// Creamos una variable para almacenar el carrito en localStorage
let carrito = JSON.parse(localStorage.getItem("carrito"));
let see_more_details_product = JSON.parse(localStorage.getItem("see_more_details_product"));
// Si el carrito en localStorage no existe, entonces lo creamos como un array vacio
if(!carrito) {
    carrito = [];
}
if(!see_more_details_product) {
  see_more_details_product = [];
}

// Capturamos el contenedor de productos de la vista del carrito
let productsContainer = document.querySelector(".cart-container");
let containerDetailProduct = document.querySelector('.seccion-cuerpo-detailsProduct');
// CODIGO PARA MOSTRAR PRODUCTOS EN EL CARRITO
// Hacemos un condicional para agregar el addEventListener si es que el elemento existe
if(productsContainer) {
    productsContainer.addEventListener('click', showProducts());
}
if(containerDetailProduct) {
  containerDetailProduct.addEventListener('click', showDetailproduct());
}

// Funcion para mostrar productos en el carrito
async function showProducts() {
    // Llamo el array "carrito" del localStorage y declaro un array vacio llamado "arrayProducts"
    let carrito = JSON.parse(localStorage.getItem('carrito'));
    let arrayProducts = [];
    // Con un for of itero atravez de los elementos de shoppingCart y hago un Fetch a la API para buscar
    // el producto en la base de datos y pusheo los datos necesarios para el carrito como un objeto a "arrayProducts"
    for(let item of carrito) {
        await fetch(`https://ecommerce-node.up.railway.app/api/getone/product/${item.id}`)
        .then(response => response.json())
        .then(data => {
            const { id, productName, price, description, img } = data;
            arrayProducts.push({
                id,
                quantity: item.quantity,
                description,
                img,
                productName,
                price,
            });
        })
        .catch(error => console.log(error));
    };
    
    let total = 0;
    // Apartir de aca lo que hago es renderizar los elementos de la vista del carrito con sus
    // respectivos datos, iterando atravez de "arrayProducts" y creando un product card por elemento
    for(let product of arrayProducts) {
      total += product.price * product.quantity;
      let productHTML = `<div class="producto">
            <div class="divImg"><img src="${product.img}" alt="Imagen del producto"></div>
          <h4>${product.productName}</h4>
          <div class="cuerpo-carrito">
          <p>Unidades: ${product.quantity}</p>
          <p>Precio: ${product.price * product.quantity}</p></div>
          <button class="btn-delete-product" onclick="removeFromCart(${product.id})"><img src="/imagenes/trash-can_38501.png" width="30px"></button>
          <div class="producto-info">
          <div class="producto-info-1">
            <h6>Detalles del Producto</h6>
            <p>${product.description}</p>
          </div>
          <hr></div>`;
      productsContainer.innerHTML += productHTML;
    }

    // Aqui renderizo el final del carrito

    let finalInfo = `<p class="text-right">Total: <span id="total">${total}</span>&euro;</p>
    <button id="boton-vaciar" class="btn btn-danger" onclick="vaciarCarrito()">Vaciar</button>`;
    productsContainer.innerHTML += finalInfo;
}

// Detectamos con un addEventListener en el documento que si se hace click en el documento y si dentro
// de ese elemento existe el atributo "addToCartId", entonces llama a la funcion "addToCart" si es que existe
let addCart = document.querySelectorAll('.add-cart');

// Si el boton existe, entonces iteramos entre todos los que haya y le agregamos un addEventListener
// Asi cuando se hace click en el boton, se ejecuta la funcion addToCart con el productId como argumento 
if(addCart) {
  for(let botton of addCart) {
    botton.addEventListener('click', function(e) {
      let productId = e.target.getAttribute('productId');
      if(productId) {
        addToCart(productId);
      }
    });
  }
};
// Función para añadir productos al carrito
function addToCart(productId) {
  // Comprobamos si el producto ya se encuentra en el carrito
  const existingProductIndex = carrito.findIndex(
    (p) => p.id === productId
  );
  if (existingProductIndex >= 0) {
    // Si ya está en el carrito, solo aumentamos la cantidad
    carrito[existingProductIndex].quantity += 1;
    // Actualizamos el carrito en localStorage
    localStorage.setItem("carrito", JSON.stringify(carrito));
    console.log('unidad agregada a producto existente!');
    location.reload();
  } else {
    // Si no está en el carrito, lo añadimos como un nuevo producto
    carrito.push({
      id: productId,
      quantity: 1,
    });
    // Actualizamos el carrito en localStorage
    localStorage.setItem("carrito", JSON.stringify(carrito));
    console.log('producto nuevo agregado!');
    location.reload();
  }
};
let seeMoreDetails = document.querySelectorAll('.see-more');
if(seeMoreDetails) {
  for(let botton of seeMoreDetails) {
    botton.addEventListener('click', function(e) {
      let productId = e.target.getAttribute('detailsProductId');
      if(productId) {
        seeMore(productId);
      }
    });
  }
}
// Función para añadir productos al carrito
function seeMore(productId) {

  // agregamos el id el localstorage para poder hacer uso de el
  see_more_details_product.push({
    id: productId
  });

  localStorage.setItem("see_more_details_product", JSON.stringify(see_more_details_product));
}

//mostramos el producto seleccioinado el el detalle de producto
//de manera dinamica
async function showDetailproduct(){
  let see_more_details_product = JSON.parse(localStorage.getItem('see_more_details_product'));
    let show_Detail_products = [];
    for(let item of see_more_details_product){
  await fetch(`https://ecommerce-node.up.railway.app/api/getone/product/${item.id}`)
          .then(res => res.json())
            .then(data=>{
              const {productName, price, description, img } = data;
              show_Detail_products.push({
                  productName,
                  price,
                  description,
                  img

              })
            });
      };    
  for (let product of show_Detail_products) {
    let showDetailproductHTML = `<div class="img"><img src=${product.img} alt="Imagen del producto">
    </div>
    <div class="detalle-de-producto">
        <div class="detalle-de-compra">
            <h5>${product.productName}</h5>
            <h6>$${product.price}</h6>
        </div>
        <br>
        <div class="texto"><span>${product.description}</span>
          </div>
        <br>
        <div class="btn">
            <button type="submit"><a class="add-cart" style="color:white;text-decoration: none;">add cart</a></button>
            <button type="submit"><a style="color:white;text-decoration: none;" href="/cart" >cart</a></button>
        </div>`
        containerDetailProduct.innerHTML = showDetailproductHTML;
      }    
           
};

// Funcion para mostrar los productos en el carrito en la vista de Tienda
// Agregamos un add event listener al div-cart para que cuando cargue, ejecute la funcion showProductsCartInStore
DOMdivcart.addEventListener('load', showProductsCartInStore());
async function showProductsCartInStore() {
  let total = 0;
  // Iteramos todos los productos del carrito en localStorage y creamos una card por producto
  // con sus respectivos datos
  for(let item of carrito) {
    await fetch(`https://ecommerce-node.up.railway.app/api/getone/product/${item.id}`)
      .then(response => response.json())
      .then(data => {
        const { id, productName, price, description, img } = data;
        total += price * item.quantity;
        const productIndex = carrito.findIndex(
          (p) => +p.id === +item.id
        );
        const product = carrito[productIndex];
        const productInStoreHTML = `<li class="list-group-item text-right mx-2" style="width: 80%;">
          <span> ${product.quantity} </span>
          x ${productName} -$ ${price}  
          <button class="btn btn-danger mx-5" style="margin-left: 1rem; " onclick="removeFromCart(${item.id})">X</button>
          <hr>
          </li>`;
        // Mezclamos nodos
        DOMcarrito.innerHTML += productInStoreHTML;
      });
  }
  // Al final agregamos la parte de "total" con el precio total de los elementos en el carrito
  const totalHTML = `<p class="text-right">Total: ${total}<span id="total"></span>&dollar;</p>`
  DOMcarrito.innerHTML += totalHTML;
}



// Función para eliminar productos del carrito
function removeFromCart(productId) {
  // Encontramos el índice del producto en el carrito
  const existingProductIndex = carrito.findIndex(
    (p) => +p.id === productId
  );
  // Si se encuentra el producto, lo eliminamos del carrito
  if (existingProductIndex >= 0) {
    carrito.splice(existingProductIndex, 1);
    // Actualizamos el carrito en localStorage
    localStorage.setItem("carrito", JSON.stringify(carrito));
    // recargamos el carrito para que vuelva a cargar los productos del localStorage y se pueda ver el cambio
    location.reload();
  }
}



// Funcion para vaciar carrito
const DOMbtnVaciar = document.querySelector('.btn-vaciar');
const DOMbtnClean = document.querySelector('#btn-vaciar');
if(DOMbtnVaciar) {
    DOMbtnVaciar.addEventListener('click', vaciarCarrito);
}
if(DOMbtnClean) {
    DOMbtnClean.addEventListener('click', vaciarCarrito);
}

function vaciarCarrito() {
    localStorage.clear();
    location.reload();
}




