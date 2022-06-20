/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_0__);

"user strict";
var swiper = new Swiper('.swiper1', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
});
var mySwiper = new Swiper('.swiper2', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
});
var mSwiper = new Swiper('.swiper3', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
}); // // //первый свайпер

var openSise = window.matchMedia('(min-width: 768px)').matches;
window.addEventListener('load', function () {
  if (openSise) {
    swiper.destroy();
  }
});
window.addEventListener('resize', function () {
  var openSizeResize = window.matchMedia('(min-width: 768px)').matches;
  console.log(openSizeResize);

  if (openSizeResize) {
    swiper.destroy();
  } else {
    swiper = new Swiper('.swiper1', {
      pagination: {
        el: '.swiper-pagination'
      }
    });
  }
}); //второй свайпер

var openSises = window.matchMedia('(min-width: 768px)').matches;
window.addEventListener('load', function () {
  if (openSises) {
    mySwiper.destroy();
  }
});
window.addEventListener('resize', function () {
  var openSizeResizes = window.matchMedia('(min-width: 768px)').matches;
  console.log(openSizeResizes);

  if (openSizeResizes) {
    mySwiper.destroy();
  } else {
    mySwiper = new Swiper('.swiper2', {
      pagination: {
        el: '.swiper-pagination'
      }
    });
  }
}); //меню боковое

var sandwichmenu = document.querySelector('#header__button');
var js_menu = document.querySelector('.contener__aside');
sandwichmenu.addEventListener('click', function (e) {
  e.preventDefault();
  sandwichmenu.classList.toggle('active');
  js_menu.classList.toggle('active');
});
var ss = document.querySelector('.aside__header__button');
ss.addEventListener('click', function (e) {
  e.preventDefault();
  ss.classList.toggle('active');
  js_menu.classList.toggle('active');
}); // по клику открывается форма

var message = document.querySelector('.icon-middle__button-two');
var modal = document.querySelector('.modal-window');
message.addEventListener('click', function (e) {
  e.preventDefault();
  message.classList.toggle('active');
  modal.classList.toggle('active');
});
var modalTwo = document.querySelector('.modal-window__cross-button');
modalTwo.addEventListener('click', function (e) {
  e.preventDefault();
  modalTwo.classList.toggle('active');
  modal.classList.toggle('active');
});
var messageAside = document.querySelector('.aside__footer__button-message');
messageAside.addEventListener('click', function (e) {
  e.preventDefault();
  messageAside.classList.toggle('active');
  modal.classList.toggle('active');
}); // по клику открывается звонок

var messageTel = document.querySelector('.aside__footer__button-phone');
var modalTel = document.querySelector('.modal-tel');
messageTel.addEventListener('click', function (e) {
  e.preventDefault();
  messageTel.classList.toggle('active');
  modalTel.classList.toggle('active');
});
var messageTelCros = document.querySelector('.modal-tel__cross-button');
messageTelCros.addEventListener('click', function (e) {
  e.preventDefault();
  messageTelCros.classList.toggle('active');
  modalTel.classList.toggle('active');
});
var messageTelTwo = document.querySelector('.icon-middle__button');
messageTelTwo.addEventListener('click', function (e) {
  e.preventDefault();
  messageTelTwo.classList.toggle('active');
  modalTel.classList.toggle('active');
});

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!*******************************!*\
  !*** multi ./src/js/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/js/index.js */"./src/js/index.js");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map