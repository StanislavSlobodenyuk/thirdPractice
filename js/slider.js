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