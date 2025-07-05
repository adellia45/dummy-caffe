const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
menuOpenButton.addEventListener("click", () => {
    // toggle mobile menu visibility
    document.body.classList.toggle("show-mobile-menu");
})
//close menu when the close button is clicked
menuCloseButton.addEventListener("click", () => menuOpenButton.click ());

// initialize swiper
const swiper = new Swiper('.slider-wrapper',{
    loop: true,
    grabCursor: true,
    spaceBetween: 25,

    //if we need pagination
    pagination: {
        el: '.swiper-pagiantion',
        clickable: true,
        dynamicBullets: true,

    },

    //navigation arrows
    navigation:{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // responsive 
    breakpoints: {
        0: {
            sliderPerView: 1
        },
        768: {
            sliderPerView: 2
        },
        1024: {
            sliderPerView: 3
        }
    }
})