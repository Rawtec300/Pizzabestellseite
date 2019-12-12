const basket_counter = document.querySelector('.basket-counter');
const nav_items = document.querySelectorAll('.nav-link');
const nav_brand = document.querySelector('.navbar-brand');
const nav_basket = document.querySelector(".shopping-basket")
const btn_bestellen = document.querySelector('.btn-bestellen');
const nav_icon_bg_color = nav_basket.getAttribute('backgroundColor');


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
    this.style.backgroundColor = 'grey';
}

function basketHoverOut() {
    this.style.backgroundColor = nav_icon_bg_color;
}

btn_bestellen.addEventListener('click', addItem);
for (let i = 0; i < nav_items.length; i++) {
    nav_items[i].onmouseover = basketHover;
    nav_items[i].onmouseout = basketHoverOut;
}
nav_brand.onmouseover = basketHover;
nav_brand.onmouseout = basketHoverOut;

nav_basket.addEventListener('click', emptyBasket);