document.addEventListener("DOMContentLoaded", function(){
    const burger = document.querySelector('.burger');
    const mainMenuMobile = document.querySelector('.main-menu__mobile');
    const mainMenuItemsToMobile = document.querySelectorAll('.main-menu__item--to-mobile');

    // скопировать все элементы с классом ".main-menu__item--to-mobile" в ".main-menu__mobile"
    mainMenuItemsToMobile.forEach(item => {
        mainMenuMobile.append(item.cloneNode(true));
    });

    burger.addEventListener("click", () => {
        burger.classList.toggle('burger--active');
        mainMenuMobile.classList.toggle('main-menu__mobile--active');
    });
});