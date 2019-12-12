const basket_counter = document.querySelector('.basket-counter');
const basket_icon = document.querySelector('.shopping-basket');
const btn_bestellen = document.querySelector('.btn-bestellen');
let count = 0;

function addItem(){
    count++;
    basket_counter.textContent = count;
}

function emptyBasket(){
    count = 0;
    basket_counter.textContent = count;
}

btn_bestellen.addEventListener('click', addItem);
basket_icon.addEventListener('click', emptyBasket);