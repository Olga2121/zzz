import '../scss/style.scss';

"user strict";

let swiper = new Swiper('.swiper1', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

let mySwiper = new Swiper('.swiper2', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

let mSwiper = new Swiper('.swiper3', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});





// // //первый свайпер
// let openSise = window.matchMedia('(min-width: 768px)').matches;
// window.addEventListener('load', function() {
//     if (openSise) {
//         swiper.destroy();
//     }
// })
// window.addEventListener('resize', function() {
//     let openSizeResize = window.matchMedia('(min-width: 768px)').matches;
//     console.log(openSizeResize);
//     if (openSizeResize) {
//         swiper.destroy();
//     } else {
//         swiper = new Swiper('.swiper1', {
//             pagination: {
//                 el: '.swiper-pagination',
//             },
//         });
//     }
// })

// //второй свайпер
// let openSises = window.matchMedia('(min-width: 768px)').matches;
// window.addEventListener('load', function() {
//     if (openSises) {
//         mySwiper.destroy();
//     }
// })
// window.addEventListener('resize', function() {
//     let openSizeResizes = window.matchMedia('(min-width: 768px)').matches;
//     console.log(openSizeResizes);
//     if (openSizeResizes) {
//         mySwiper.destroy();
//     } else {
//         mySwiper = new Swiper('.swiper2', {
//             pagination: {
//                 el: '.swiper-pagination',
//             },
//         });
//     }
// })

//меню боковое

const sandwichmenu = document.querySelector('#header__button');
const js_menu = document.querySelector('.contener__aside');


sandwichmenu.addEventListener('click', function(e) {
    e.preventDefault();
    sandwichmenu.classList.toggle('active');
    js_menu.classList.toggle('active');

});

const ss = document.querySelector('.aside__header__button');


ss.addEventListener('click', function(e) {
    e.preventDefault();
    ss.classList.toggle('active');
    js_menu.classList.toggle('active');

});

// по клику открывается форма

const message = document.querySelector('.icon-middle__button-two');
const modal = document.querySelector('.modal-window');

message.addEventListener('click', function(e) {
    e.preventDefault();
    message.classList.toggle('active');
    modal.classList.toggle('active');

});

const modalTwo = document.querySelector('.modal-window__cross-button');

modalTwo.addEventListener('click', function(e) {
    e.preventDefault();
    modalTwo.classList.toggle('active');
    modal.classList.toggle('active');

});

const messageAside = document.querySelector('.aside__footer__button-message');
messageAside.addEventListener('click', function(e) {
    e.preventDefault();
    messageAside.classList.toggle('active');
    modal.classList.toggle('active');

});

// по клику открывается звонок
const messageTel = document.querySelector('.aside__footer__button-phone');
const modalTel = document.querySelector('.modal-tel');

messageTel.addEventListener('click', function(e) {
    e.preventDefault();
    messageTel.classList.toggle('active');
    modalTel.classList.toggle('active');

});
const messageTelCros = document.querySelector('.modal-tel__cross-button');
messageTelCros.addEventListener('click', function(e) {
    e.preventDefault();
    messageTelCros.classList.toggle('active');
    modalTel.classList.toggle('active');

});

const messageTelTwo = document.querySelector('.icon-middle__button');
messageTelTwo.addEventListener('click', function(e) {
    e.preventDefault();
    messageTelTwo.classList.toggle('active');
    modalTel.classList.toggle('active');

});