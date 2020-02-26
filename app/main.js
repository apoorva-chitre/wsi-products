// main.js

import css from "./style.css";

fetch("../data.json")
.then( response => { 
    return response.json()
})
.then ( data => {
    const products = data.groups;

    const productsTemplate = `
        ${products.forEach( product => {
            buildProduct(product)
        })}
    `;

    console.log(productsTemplate);

    document.getElementById('products').innerHTML = productsTemplate;
});


  
function buildProduct(product) {

    console.log(product.price);

    var price = 0;

    if(product.price.regular){
        price = product.price.regular
    } else {
        if(product.price.selling.high) {
            price = product.price.selling.high
        } else {
            price = product.price.selling
        }
    }

    return `
        <section id="product">
            <img src="${product.hero.href}" width="${product.hero.width}" />
            <h2>${product.name}</h2>
            <aside>
                <ul>
                    <li>${price}</li>
                </ul>
            </aside>
        </section>
    `;  
}