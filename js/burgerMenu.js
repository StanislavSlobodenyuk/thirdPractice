"use strict"

// == Бургер меню =====================================================================
const iconMenu = document.querySelector(".menu__icon");
const MenuBody = document.querySelector('.menu__body');
if (iconMenu) {
    iconMenu.addEventListener("click", function(e){
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        MenuBody.classList.toggle('_active');
    });
}
// == Бургер меню =====================================================================
