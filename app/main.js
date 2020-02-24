// main.js

import css from "./style.css";

let products = [];

fetch("../data.json")
.then( response => { 
    return response.json()
})
.then ( data => {
    products = data.groups;
});

