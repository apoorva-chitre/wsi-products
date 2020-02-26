// main.js

import css from "./style.css";

fetch("../data.json")
.then( response => { 
    return response.json()
})
.then ( data => {
    const products = data.groups;

    var productsTemplate = ``;

    products.forEach( product => {

        productsTemplate += buildProduct(product)
    });

    console.log(productsTemplate);

    document.getElementById('products').innerHTML = productsTemplate;
});


  
function buildProduct(product) {

    var price = 0;

    if (product.price){
        price = product.price.selling
    }

    if(product.priceRange) {
        price = product.priceRange.selling.high
    }

    return `
        <section id="product">
            <img src="${product.hero.href}" width="${product.hero.width}" />
            <h2>${product.name}</h2>
            <span>$${price}</span>
            
        </section>
    `;  
}