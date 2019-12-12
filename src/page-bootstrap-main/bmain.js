const basket_counter = document.querySelector('.basket-counter');
const nav_basket_icon = document.querySelector('.shopping-basket');
const btn_bestellen = document.querySelector('.btn-bestellen');
const nav_icon_bg_color = nav_basket_icon.getAttribute('backgroundColor');


let count = 0;

function addItem() {
    count++;
    basket_counter.textContent = count;
}

function emptyBasket() {
    count = 0;
    basket_counter.textContent = count;
}

function basketHover() {
    nav_basket_icon.style.backgroundColor = 'grey';

}

function basketHoverOut() {
    nav_basket_icon.style.backgroundColor = nav_icon_bg_color;
}

btn_bestellen.addEventListener('click', addItem);
nav_basket_icon.addEventListener('click', emptyBasket);

nav_basket_icon.onmouseover = basketHover;
nav_basket_icon.onmouseout = basketHoverOut;