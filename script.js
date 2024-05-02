const searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    login.classList.remove('active');
    menuBar.classList.remove("active")
}

const shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () => {
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    login.classList.remove('active');
    menuBar.classList.remove("active")
}

const login = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () => {
    login.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    menuBar.classList.remove("active")
}

const menuBar=document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick=()=>{
    menuBar.classList.toggle("active")
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    login.classList.remove('active');
}

window.onscroll=() =>{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    login.classList.remove('active');
    menuBar.classList.remove("active")
}


    var swiper = new Swiper(".products-slider", {
      loop:true,
      spaceBetween: 20,
      autoplay: {
        delay: 7500,
        disableOnInteraction: false,
      },
      centeredSlides:true,
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1020: {
          slidesPerView: 3,
        },
      },
    });

    var swiper = new Swiper(".review-slidder", {
      loop:true,
      spaceBetween: 20,
      autoplay: {
        delay: 7500,
        disableOnInteraction: false,
      },
      centeredSlides:true,
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1020: {
          slidesPerView: 3,
        },
      },
    });