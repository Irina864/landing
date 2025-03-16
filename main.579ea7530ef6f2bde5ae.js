/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 75:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/yandex-money.svg";

/***/ }),

/***/ 115:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/doc.svg";

/***/ }),

/***/ 303:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/hyphen.svg";

/***/ }),

/***/ 385:
/***/ (function(module) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ 390:
/***/ (function() {

const form = {
  form: document.forms.orderForm,
  inputs: [document.forms.orderForm.elements.system, document.forms.orderForm.elements.mail, document.forms.orderForm.elements.customer, document.forms.orderForm.elements.percent, document.forms.orderForm.elements.file],
  fields: [document.querySelector('.select__label'), document.forms.orderForm.elements.mail, document.forms.orderForm.elements.customer, document.forms.orderForm.elements.percent, document.querySelector('.button_file')]
};
form.inputs.forEach((input, index) => {
  input.addEventListener('input', () => {
    removeErrorClass(form.fields[index]);
    const errorElement = form.fields[index].nextElementSibling;
    if (errorElement && errorElement.classList.contains('error')) {
      errorElement.remove();
    }
  });
});
form.fields[0].addEventListener('click', e => {
  e.preventDefault();
  removeErrorClass(form.fields[0]);
  const errorElement = form.fields[0].nextElementSibling;
  if (errorElement && errorElement.classList.contains('error')) {
    errorElement.remove();
  }
});
form.form.addEventListener('submit', async e => {
  e.preventDefault();
  const sendData = validateForm();
  if (sendData) {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(sendData)
      });
      const data = await response.json();
      console.log('POST response: ', data);
      if (response.ok) {
        form.inputs.forEach(input => {
          input.value = '';
          if (input.type === 'range') {
            input.value = '75';
          }
        });
        alert('Данные отправлены на сервер');
      } else {
        throw new Error('Ошибка на сервере');
      }
    } catch (error) {
      console.log('POST response error: ', error);
    }
  }
});
function validateForm() {
  document.querySelectorAll('.error').forEach(error => error.remove());
  let isValid = true;
  form.inputs.forEach((input, index) => {
    if (!checkValidity(input, form.fields[index])) {
      isValid = false;
    }
  });
  if (isValid) {
    const sendData = {
      system: form.form.elements.system.value,
      email: form.form.elements.mail.value,
      customer: form.form.elements.customer.value,
      percent: form.form.elements.percent.value,
      file: form.form.elements.file.files[0]
    };
    return sendData;
  }
  return false;
}
function checkValidity(input, field) {
  if (input.validity.valueMissing) {
    createNewElement('Обязательное поле', 'div', field, 'error');
    addErrorClass(field);
    return false;
  }
  if (input.name === 'system' && input.value === '') {
    createNewElement('Выберите тип системы', 'div', field, 'error');
    addErrorClass(field);
    return false;
  }
  if (input.validity.tooShort) {
    createNewElement(`Минимальная длина - ${input.minLength} символов`, 'div', field, 'error');
    addErrorClass(field);
    return false;
  }
  if (input.validity.tooLong) {
    createNewElement(`Максимальная длина - ${input.maxLength} символов`, 'div', field, 'error');
    addErrorClass(field);
    return false;
  }
  if (input.validity.typeMismatch && input.type === 'email') {
    createNewElement('Введите корректный адрес электронной почты', 'div', field, 'error');
    addErrorClass(field);
    return false;
  }
  if (input.validity.patternMismatch && input.type === 'email') {
    createNewElement('Некорректное значение в поле', 'div', field, 'error');
    addErrorClass(field);
    return false;
  }
  if (input.type === 'file' && input.files.length === 0) {
    createNewElement('Выберите файл', 'div', field, 'error');
    addErrorClass(field);
    return false;
  }
  if (input.type === 'range') {
    const min = input.min ? parseFloat(input.min) : 0;
    const max = input.max ? parseFloat(input.max) : 100;
    if (input.value < min || input.value > max) {
      createNewElement(`Значение должно быть от ${min} до ${max}`, 'div', field, 'error');
      addErrorClass(field);
      return false;
    }
  }
  return true;
}
function createNewElement(content, tag, elem, classNew) {
  const newElem = document.createElement(tag);
  newElem.classList.add(classNew);
  newElem.innerHTML = content;
  elem.after(newElem);
}
function removeErrorClass(elem) {
  elem.classList.remove('error-border');
}
function addErrorClass(elem) {
  elem.classList.add('error-border');
}

/***/ }),

/***/ 496:
/***/ (function() {

const select = {
  label: document.querySelector('.select__label'),
  input: document.forms.orderForm.elements.system,
  menu: document.querySelector('.menu'),
  selectItems: document.querySelectorAll('.menu__item'),
  arrow: document.querySelector('.select__arrow')
};
const range = {
  input: document.forms.orderForm.elements.percent,
  display: document.querySelector('#rangeValue')
};
const file = {
  input: document.forms.orderForm.elements.file,
  label: document.querySelector('.button_file')
};

// toggle menu
select.menu.style.display = 'none';
select.label.addEventListener('click', e => {
  e.preventDefault();
  if (select.menu.style.display === 'none') {
    select.menu.style.display = 'flex';
    select.label.classList.add('select__label_active');
    select.arrow.classList.add('select__arrow_active');
  } else {
    select.menu.style.display = 'none';
    select.label.classList.remove('select__label_active');
    select.arrow.classList.remove('select__arrow_active');
  }
});

// select item
select.selectItems.forEach(selectItem => {
  selectItem.addEventListener('click', event => {
    event.preventDefault();
    select.input.value = selectItem.textContent;
    select.menu.style.display = 'none';
    select.label.classList.remove('select__label_active');
  });
});

// select range
range.display.textContent = range.input.value;
range.input.addEventListener('change', event => {
  event.preventDefault();
  range.display.textContent = event.target.value;
});

// add file
file.input.addEventListener('change', e => {
  const files = e.target.files;
  if (files.length > 0) {
    const selectedFile = files[0];
    file.label.innerHTML = ` <img
                      class="button__img"
                      src="./img/doc.svg"
                      alt="file"
                    />Файл прикреплен`;
    if (selectedFile.size > 10 * 1024 * 1024) {
      alert('Размер файла не должен превышать 10 Мб');
      file.input.value = '';
      file.label.innerHTML = ` <img
                      class="button__img"
                      src="./img/doc.svg"
                      alt="file"
                    /> ПРИКРЕПИТЬ ФАЙЛ`;
      return;
    }
  } else {
    file.label.innerHTML = `  <img
                      class="button__img"
                      src="./img/doc.svg"
                      alt="file"
                    />ПРИКРЕПИТЬ ФАЙЛ`;
  }
});

/***/ }),

/***/ 574:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/vk.svg";

/***/ }),

/***/ 597:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/qiwi-wallet.svg";

/***/ }),

/***/ 738:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/logo.svg";

/***/ }),

/***/ 747:
/***/ (function() {

const navItems = document.querySelectorAll('.nav__link');
const burger = {
  menu: document.querySelector('.burger'),
  lines: document.querySelectorAll('.burger__line'),
  list: document.querySelector('.nav__list')
};

// select a navigation item
navItems.forEach(navElem => {
  navElem.addEventListener('click', event => {
    event.preventDefault();
    navItems.forEach(item => item.classList.remove('nav__link_active'));
    navElem.classList.add('nav__link_active');
    if (burger.lines[0].classList.contains('burger__line_active')) {
      burger.list.classList.remove('nav__list_active');
      burger.lines.forEach(item => item.classList.remove('burger__line_active'));
    }
  });
});

//toggle burger-menu
burger.menu.addEventListener('click', e => {
  e.preventDefault();
  burger.lines.forEach(line => {
    line.classList.toggle('burger__line_active');
    burger.list.classList.toggle('nav__list_active');
  });
  burger.lines[0].classList.contains('burger__line_active') ? burger.list.classList.add('nav__list_active') : burger.list.classList.remove('nav__list_active');
});

/***/ }),

/***/ 780:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/web-money.svg";

/***/ }),

/***/ 873:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/email.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			792: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	}();
/******/ 	
/************************************************************************/
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
!function() {
"use strict";

// EXTERNAL MODULE: ./node_modules/html-loader/dist/runtime/getUrl.js
var getUrl = __webpack_require__(385);
var getUrl_default = /*#__PURE__*/__webpack_require__.n(getUrl);
;// ./src/index.html
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(738), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(303), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(115), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(597), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(75), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(780), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(873), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(574), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = getUrl_default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = getUrl_default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = getUrl_default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = getUrl_default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = getUrl_default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = getUrl_default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = getUrl_default()(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = getUrl_default()(___HTML_LOADER_IMPORT_7___);
var code = "<!DOCTYPE html> <html lang=\"ru\"> <head> <meta charset=\"UTF-8\"/> <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"/> <meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"/> <title>Landing</title> </head> <body> <div class=\"landing\"> <header class=\"header\"> <div class=\"content\"> <a href=\"/\" class=\"logo\"> <img class=\"logo__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"logo\"/> </a> <nav class=\"nav\"> <ul class=\"nav__list\"> <li class=\"nav__item\"> <a href=\"/\" class=\"nav__link nav__link_active\">БИЗНЕС</a> </li> <li class=\"nav__item\"><a href=\"#\" class=\"nav__link\">О НАС</a></li> <li class=\"nav__item\"><a href=\"#\" class=\"nav__link\">ЦЕНЫ</a></li> <li class=\"nav__item\"> <a href=\"#order\" class=\"nav__link\">ОФОРМИТЬ ЗАКАЗ</a> </li> </ul> <div class=\"burger\"> <div class=\"burger__line\"></div> <div class=\"burger__line\"></div> <div class=\"burger__line\"></div> </div> </nav> </div> </header> <main class=\"main\"> <section class=\"greeting\"> <div class=\"greeting__content\"> <h1 class=\"greeting__title\"> Lorem ipsum <span class=\"greeting__dark\">dolor sit <br/>amet consectetur</span> adipiscing </h1> <article class=\"advantages\"> <p class=\"advantages__note\"> At vero eos et accusamus et iusto odio dignissimos ducimus! </p> <ul class=\"advantages__list\"> <li class=\"advantages__item\"> <img class=\"advantages__hyphen\" src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"hyphen\"/> <span class=\"advantages__text\"> Totam rem aperiam eaque ipsa </span> </li> <li class=\"advantages__item\"> <img class=\"advantages__hyphen\" src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"hyphen\"/> <span class=\"advantages__text\"> Sit voluptatem accusantium doloremque laudantium </span> </li> <li class=\"advantages__item\"> <img class=\"advantages__hyphen\" src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"hyphen\"/> <span class=\"advantages__text\"> Sed ut perspiciatis, unde omnis iste natus error </span> </li> </ul> </article> <div class=\"greeting__buttons\"> <a href=\"#orderForm\" class=\"button button_dark\">ЗАКАЗАТЬ</a> <a href=\"#process\" class=\"button\">ПОДРОБНЕЕ</a> </div> </div> </section> <section class=\"order\" id=\"order\"> <div class=\"title\"> <h2 class=\"title__text\"> ОФОРМЛЕНИЕ <span class=\"title__dark\">ЗАКАЗА</span> </h2> <p class=\"title__subtitle\"> Перед заполнением формы ознакомьтесь с нашей схемой работы! </p> </div> <div class=\"order__content\"> <div class=\"process\" id=\"process\"></div> <form name=\"orderForm\" class=\"form\" id=\"orderForm\" novalidate> <div class=\"form__box\"> <fieldset class=\"select\"> <div class=\"select__label\"> <input name=\"system\" class=\"select__input\" type=\"text\" readonly=\"readonly\" placeholder=\"Выберите тип системы\" required/> <div class=\"select__arrow\"></div> </div> <div class=\"menu\"> <div class=\"menu__wrap\"> <div class=\"menu__item\">Sed ut perspiciatis</div> <div class=\"menu__item\">Nemo enim ipsam</div> <div class=\"menu__item\">Et harum quidem</div> <div class=\"menu__item\">Temporibus autem</div> <div class=\"menu__item\">Itaque earum rerum</div> <div class=\"menu__item\">Sed ut perspiciatis</div> <div class=\"menu__item\">Nemo enim ipsam</div> <div class=\"menu__item\">Et harum quidem</div> </div> </div> </fieldset> <fieldset class=\"form__field\"> <input name=\"mail\" class=\"form__input\" type=\"email\" placeholder=\"Ваш e-mail\" required/> </fieldset> <fieldset class=\"form__field\"> <input name=\"customer\" class=\"form__input\" type=\"text\" placeholder=\"Ваше имя\" required/> </fieldset> <fieldset class=\"range\"> <div class=\"range__label-wrap\"> <label class=\"range__label\" for=\"percent\"> Sed ut perspiciatis, unde omnis iste natus </label> <div class=\"range__display\"> <span class=\"range__number\" id=\"rangeValue\"></span> % </div> </div> <input name=\"range\" type=\"range\" class=\"range__input\" id=\"percent\" min=\"0\" max=\"100\" value=\"75\" required/> </fieldset> <fieldset class=\"file\"> <label class=\"button button_file\" for=\"file\"> <img class=\"button__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"file\"/>ПРИКРЕПИТЬ ФАЙЛ </label> <input type=\"file\" id=\"file\" name=\"file\" class=\"file__input\" required/> </fieldset> </div> <div class=\"form__submit\"> <button type=\"submit\" class=\"button button_dark\"> ОТПРАВИТЬ </button> </div> </form> </div> </section> </main> <footer class=\"footer\"> <div class=\"footer__content\"> <div class=\"copyright\"> &copy; 2018 «LOREMIPSUM.NET» Все права защищены. </div> <div class=\"footer__line\"></div> <ul class=\"payment\"> <li class=\"payment__item\"> <img class=\"payment__icon\" src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"qiwi-wallet\"/> <span class=\"payment__text\">Qiwi wallet</span> </li> <li class=\"payment__item\"> <img class=\"payment__icon\" src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"yandex-money\"/> <span class=\"payment__text\">Yandex Money</span> </li> <li class=\"payment__item\"> <img class=\"payment__icon\" src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"web-money\"/> <span class=\"payment__text\">Web Money</span> </li> </ul> <div class=\"footer__line\"></div> <ul class=\"contact\"> <li class=\"contact__item\"> <a href=\"mailto:info@ipsum228.com\" class=\"contact__link\"> <img class=\"contact__icon\" src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"email\"/> <span class=\"contact__text\">info@ipsum228.com</span> </a> </li> <li class=\"contact__item\"> <a href=\"https://vk.com\" class=\"contact__link\" target=\"_blank\" rel=\"noopener noreferrer\"> <img class=\"contact__icon\" src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"vk\"/> <span class=\"contact__text\">Мы вконтакте</span> </a> </li> </ul> </div> </footer> </div> </body> </html> ";
// Exports
/* harmony default export */ var src = ((/* unused pure expression or super */ null && (code)));
;// ./src/modules/createStepItem.js
function createStepItem(_ref) {
  let {
    step,
    container,
    isLast
  } = _ref;
  const processItem = document.createElement('div');
  processItem.className = 'process__item';
  const stepItem = document.createElement('article');
  stepItem.className = 'step';
  const stepCircle = document.createElement('div');
  stepCircle.className = 'step__circle';
  const img = document.createElement('img');
  img.src = step.img_url;
  img.alt = step.img_alt;
  stepCircle.appendChild(img);
  stepItem.appendChild(stepCircle);
  const stepText = document.createElement('p');
  stepText.className = 'step__text';
  stepText.textContent = step.step;
  stepItem.appendChild(stepText);
  processItem.appendChild(stepItem);
  const circlebox = document.createElement('div');
  circlebox.className = 'circleline';
  if (!isLast) {
    const circlebox = document.createElement('div');
    circlebox.className = 'circlebox';
    for (let i = 0; i < 5; i++) {
      const circleboxItem = document.createElement('div');
      circleboxItem.className = 'circlebox__item';
      circlebox.appendChild(circleboxItem);
    }
    processItem.appendChild(circlebox);
  }
  container.appendChild(processItem);
}
;// ./src/modules/getSteps.js


// getting and rendering steps
function getProcess() {
  fetch('../data/processData.json').then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
  }).then(data => {
    data.forEach((step, index) => {
      createStepItem({
        step: step,
        container: document.querySelector('.process'),
        isLast: index === data.length - 1
      });
    });
  }).catch(error => {
    console.error(error);
  });
}
document.addEventListener('DOMContentLoaded', () => {
  getProcess();
});
// EXTERNAL MODULE: ./src/modules/navigation.js
var navigation = __webpack_require__(747);
// EXTERNAL MODULE: ./src/modules/setInputValue.js
var setInputValue = __webpack_require__(496);
// EXTERNAL MODULE: ./src/modules/validation.js
var validation = __webpack_require__(390);
;// ./src/index.js







}();
/******/ })()
;