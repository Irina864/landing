!function(){var e={75:function(e,t,n){"use strict";e.exports=n.p+"assets/yandex-money.svg"},115:function(e,t,n){"use strict";e.exports=n.p+"assets/doc.svg"},303:function(e,t,n){"use strict";e.exports=n.p+"assets/hyphen.svg"},385:function(e){"use strict";e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),t.hash&&(e+=t.hash),t.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(e)?'"'.concat(e,'"'):e):e}},390:function(){const e={form:document.forms.orderForm,inputs:[document.forms.orderForm.elements.system,document.forms.orderForm.elements.mail,document.forms.orderForm.elements.customer,document.forms.orderForm.elements.percent,document.forms.orderForm.elements.file],fields:[document.querySelector(".select__label"),document.forms.orderForm.elements.mail,document.forms.orderForm.elements.customer,document.forms.orderForm.elements.percent,document.querySelector(".button_file")]};function t(e,t,n,r){const s=document.createElement(t);s.classList.add(r),s.innerHTML=e,n.after(s)}function n(e){e.classList.remove("error-border")}function r(e){e.classList.add("error-border")}e.inputs.forEach(((t,r)=>{t.addEventListener("input",(()=>{n(e.fields[r]);const t=e.fields[r].nextElementSibling;t&&t.classList.contains("error")&&t.remove()}))})),e.fields[0].addEventListener("click",(t=>{t.preventDefault(),n(e.fields[0]);const r=e.fields[0].nextElementSibling;r&&r.classList.contains("error")&&r.remove()})),e.form.addEventListener("submit",(async n=>{n.preventDefault();const s=function(){document.querySelectorAll(".error").forEach((e=>e.remove()));let n=!0;if(e.inputs.forEach(((s,o)=>{(function(e,n){if(e.validity.valueMissing)return t("Обязательное поле","div",n,"error"),r(n),!1;if("system"===e.name&&""===e.value)return t("Выберите тип системы","div",n,"error"),r(n),!1;if(e.validity.tooShort)return t(`Минимальная длина - ${e.minLength} символов`,"div",n,"error"),r(n),!1;if(e.validity.tooLong)return t(`Максимальная длина - ${e.maxLength} символов`,"div",n,"error"),r(n),!1;if(e.validity.typeMismatch&&"email"===e.type)return t("Введите корректный адрес электронной почты","div",n,"error"),r(n),!1;if(e.validity.patternMismatch&&"email"===e.type)return t("Некорректное значение в поле","div",n,"error"),r(n),!1;if("file"===e.type&&0===e.files.length)return t("Выберите файл","div",n,"error"),r(n),!1;if("range"===e.type){const s=e.min?parseFloat(e.min):0,o=e.max?parseFloat(e.max):100;if(e.value<s||e.value>o)return t(`Значение должно быть от ${s} до ${o}`,"div",n,"error"),r(n),!1}return!0})(s,e.fields[o])||(n=!1)})),n){return{system:e.form.elements.system.value,email:e.form.elements.mail.value,customer:e.form.elements.customer.value,percent:e.form.elements.percent.value,file:e.form.elements.file.files[0]}}return!1}();if(s)try{const t=await fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});await t.json();if(!t.ok)throw new Error("Ошибка на сервере");e.inputs.forEach((e=>{e.value="","range"===e.type&&(e.value="75",document.querySelector("#rangeValue").textContent=e.value),"file"===e.type&&(document.querySelector(".button_file").innerHTML='  <img\n            class="button__img"\n            src="./img/doc.svg"\n            alt="file"\n          />ПРИКРЕПИТЬ ФАЙЛ')})),alert("Данные отправлены на сервер")}catch(e){}}))},496:function(){const e={label:document.querySelector(".select__label"),input:document.forms.orderForm.elements.system,menu:document.querySelector(".menu"),selectItems:document.querySelectorAll(".menu__item"),arrow:document.querySelector(".select__arrow")},t={input:document.forms.orderForm.elements.percent,display:document.querySelector("#rangeValue")},n={input:document.forms.orderForm.elements.file,label:document.querySelector(".button_file")};e.menu.style.display="none",e.label.addEventListener("click",(t=>{t.preventDefault(),"none"===e.menu.style.display?(e.menu.style.display="flex",e.label.classList.add("select__label_active"),e.arrow.classList.add("select__arrow_active")):(e.menu.style.display="none",e.label.classList.remove("select__label_active"),e.arrow.classList.remove("select__arrow_active"))})),e.selectItems.forEach((t=>{t.addEventListener("click",(n=>{n.preventDefault(),e.selectItems.forEach((e=>e.classList.remove("menu__item_active"))),e.input.value=t.textContent,t.classList.add("menu__item_active"),e.menu.style.display="none",e.arrow.classList.remove("select__arrow_active"),e.label.classList.remove("select__label_active")}))})),t.display.textContent=t.input.value,t.input.addEventListener("change",(e=>{e.preventDefault(),t.display.textContent=e.target.value})),n.input.addEventListener("change",(e=>{const t=e.target.files;if(t.length>0){const e=t[0];if(n.label.innerHTML=' <img\n                      class="button__img"\n                      src="./img/doc.svg"\n                      alt="file"\n                    />Файл прикреплен',e.size>10485760)return alert("Размер файла не должен превышать 10 Мб"),n.input.value="",void(n.label.innerHTML=' <img\n                      class="button__img"\n                      src="./img/doc.svg"\n                      alt="file"\n                    /> ПРИКРЕПИТЬ ФАЙЛ')}else n.label.innerHTML='  <img\n                      class="button__img"\n                      src="./img/doc.svg"\n                      alt="file"\n                    />ПРИКРЕПИТЬ ФАЙЛ'}))},574:function(e,t,n){"use strict";e.exports=n.p+"assets/vk.svg"},597:function(e,t,n){"use strict";e.exports=n.p+"assets/qiwi-wallet.svg"},738:function(e,t,n){"use strict";e.exports=n.p+"assets/logo.svg"},747:function(){const e=document.querySelectorAll(".nav__link"),t={menu:document.querySelector(".burger"),lines:document.querySelectorAll(".burger__line"),list:document.querySelector(".nav__list")};e.forEach((n=>{n.addEventListener("click",(r=>{r.preventDefault(),e.forEach((e=>e.classList.remove("nav__link_active"))),n.classList.add("nav__link_active"),t.lines[0].classList.contains("burger__line_active")&&(t.list.classList.remove("nav__list_active"),t.lines.forEach((e=>e.classList.remove("burger__line_active"))))}))})),t.menu.addEventListener("click",(e=>{e.preventDefault(),t.lines.forEach((e=>{e.classList.toggle("burger__line_active"),t.list.classList.toggle("nav__list_active")})),t.lines[0].classList.contains("burger__line_active")?t.list.classList.add("nav__list_active"):t.list.classList.remove("nav__list_active")}))},780:function(e,t,n){"use strict";e.exports=n.p+"assets/web-money.svg"},873:function(e,t,n){"use strict";e.exports=n.p+"assets/email.svg"}},t={};function n(r){var s=t[r];if(void 0!==s)return s.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.m=e,n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var s=r.length-1;s>-1&&(!e||!/^http(s?):/.test(e));)e=r[s--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/^blob:/,"").replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e}(),n.b=document.baseURI||self.location.href,function(){"use strict";var e=n(385),t=n.n(e),r=new URL(n(738),n.b),s=new URL(n(303),n.b),o=new URL(n(115),n.b),i=new URL(n(597),n.b),l=new URL(n(75),n.b),c=new URL(n(780),n.b),a=new URL(n(873),n.b),u=new URL(n(574),n.b),m=t()(r),d=t()(s);t()(o),t()(i),t()(l),t()(c),t()(a),t()(u);fetch("./data/processData.json").then((e=>{if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return e.json()})).then((e=>{e.forEach(((t,n)=>{!function(e){let{step:t,container:n,isLast:r}=e;const s=document.createElement("div");s.className="process__item";const o=document.createElement("article");o.className="step";const i=document.createElement("div");i.className="step__circle";const l=document.createElement("img");l.src=t.img_url,l.alt=t.img_alt,i.appendChild(l),o.appendChild(i);const c=document.createElement("p");if(c.className="step__text",c.textContent=t.step,o.appendChild(c),s.appendChild(o),document.createElement("div").className="circleline",!r){const e=document.createElement("div");e.className="circlebox";for(let t=0;t<5;t++){const t=document.createElement("div");t.className="circlebox__item",e.appendChild(t)}s.appendChild(e)}n.appendChild(s)}({step:t,container:document.querySelector(".process"),isLast:n===e.length-1})}))})).catch((e=>{}));n(747),n(496),n(390)}()}();