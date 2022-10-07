let navbar  = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick =() =>{
    navbar.classList.remove('active');
    searchform.classList.remove('active');
    cartitem.classList.remove('active');

}
let cartItem  = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick =() =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    cartitem.classList.remove('active');
    

}
let cartitem = document.querySelector('.search-form');

document.querySelector('#cart-btn').onclick =() =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchform.classList.remove('active');
    
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchform.classList.remove('active');
    cartitem.classList.remove('active');

}