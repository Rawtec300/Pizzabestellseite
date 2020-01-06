//Navbar variables
const basket_counter = document.querySelector('.basket-counter');
const nav_items = document.querySelectorAll('.nav-link');
const nav_brand = document.querySelector('.navbar-brand');
const nav_basket = document.querySelector(".shopping-basket")
const btn_bestellen = document.querySelector('.btn-bestellen');
const nav_icon_bg_color = nav_basket.getAttribute('backgroundColor');
let count = 0;
//Form Validation variables
const form = document.querySelector('#form');
const password = document.querySelector('.password');
const password_repeat = document.querySelector('.password-repeat');
const form_error_message = document.querySelector('.form-error-message');

//Adds 1 to the shopping-basket counter
function addItem() {
    count++;
    basket_counter.textContent = count;
}

//Sets the shopping-basket counter to 0
function emptyBasket() {
    count = 0;
    basket_counter.textContent = count;
}

//Changes the BackgroundColor of the nav Element to lightgrey
function navItemHover() {
    this.style.backgroundColor = 'lightgrey';
}

//Reverts navItemHover()
function navItemHoverOut() {
    this.style.backgroundColor = nav_icon_bg_color;
}



//Adds a eventListener to the Modal Button "Bestellen"
btn_bestellen.addEventListener('click', addItem);
nav_basket.addEventListener('click', emptyBasket);

//Adds a Listener to the nav Items
for (let i = 0; i < nav_items.length; i++) {
    nav_items[i].onmouseover = navItemHover;
    nav_items[i].onmouseout = navItemHoverOut;
}
nav_brand.onmouseover = navItemHover;
nav_brand.onmouseout = navItemHoverOut;

//Checks if the passwords are the same
form.onsubmit = function(e) {
    if (password.value !== password_repeat.value) {
        console.error('Die Passwörter sind unterschiedlich!');
        e.preventDefault();
        form_error_message.textContent = 'Die Passwörter müssen identisch sein!';
    }else{
        form_error_message.textContent = '';
    }
}