"use strict"

new Swiper('.swipper-review',{
    navigation:{
        nextEl: ".button-next",
        prevEl: ".button-prev",
    },
    // увімкнути/вимкнути захват та рух слайдів мишею на ПК
    simulateTouch: true,
    // чутливість
    touchRatio: 1,
    // кут роботи властивості
    touchAngle: 45,
    // курсор при переміщені
    grabCursor: true,
    // перемикання при кліку на слайд
    slideToClickedSlide: true,

    // управління клавіатурою 
    keyboard: {
        // ввімкнути/вимкнути 
        enabled: true,
        // ввімкнути тільки тоді коли слайдер видно
        onlyInViewport: true,
        // ввімкнути керування за допомогою page up/down
        pageUpDown: true,
    },
    // відступи між слайдами
    spaceBetween: 100,

   // швидкість перемикання слайдів
   speed: 800,

})

new Swiper('.swiper-howDoWeWork',{
    pagination: {
        el: ".swiper-pagination",
        // булети =============================================================
        // перехід на слайд по кліку на пагінацію
        clickable: true,
        // динамічні булети
        dynamicBullets: true,
        // булети =============================================================
    },
    // увімкнути/вимкнути захват та рух слайдів мишею на ПК
    simulateTouch: true,
    // чутливість
    touchRatio: 1,
    // кут роботи властивості
    touchAngle: 45,
    // курсор при переміщені
    grabCursor: true,
    // перемикання при кліку на слайд
    slideToClickedSlide: true,

    // управління клавіатурою 
    keyboard: {
        // ввімкнути/вимкнути 
        enabled: true,
        // ввімкнути тільки тоді коли слайдер видно
        onlyInViewport: true,
        // ввімкнути керування за допомогою page up/down
        pageUpDown: true,
    },
    // кількість слайдів для показу читатти там відключення функціоналу якщо слайдів менше чим порібно 
    watchOverflow: true,
    spaceBetween: 40,
   // швидкість перемикання слайдів
   speed: 2000,
   
   breakpoints: {
    320: {
        spaceBetween: 24,
    },
    500.98:{
        spaceBetween: 0,
        slidesPerView: 1.2,
    },
    767: {
        slidesPerView: 2.2,
        
    },
    992: {
        slidesPerView: 3.2,
    },
}
})