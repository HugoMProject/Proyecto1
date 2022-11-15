const fs = require ('fs');

const readProducts = () => {

    const products = fs.readFileSync(__dirname + '/../database.json');

    // console.log('Products leidos con exito',JSON.parse(products));

    return JSON.parse(products);

}
const readProduct = (id) =>{  
    const prods = readProducts()
    const prod = prods.find(p =>p.id == id);
  
    return prod;     
    
}

module.exports = {readProducts, readProduct};