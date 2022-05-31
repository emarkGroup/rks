/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/lk_request_fileinput.js":
/*!****************************************!*\
  !*** ./src/js/lk_request_fileinput.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _modules_controls_slider_changeSliderHeight_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/controls/slider/changeSliderHeight.js */ \"./src/js/modules/controls/slider/changeSliderHeight.js\");\n\r\n\r\n\r\n    function parseLimit(size) {\r\n      if (!size) return Number.MAX_VALUE;\r\n      if (typeof size == \"number\") return size > 0 ? size : Number.MAX_VALUE;\r\n      size = size.toString().toLowerCase();\r\n      size = /^(\\d+)(k|m)?$/g.exec(size);\r\n      if (!size) return Number.MAX_VALUE;\r\n      var result = parseInt(size[1], 10);\r\n      if (size[2] == \"k\")\r\n        result *= 1024;\r\n      else if (size[2] == \"m\")\r\n        result *= 1024 * 1024;\r\n      else if (size[2] == \"g\") result *= 1024 * 1024 * 1024;\r\n      return result;\r\n    }\r\n\r\n    function formatSize(size) {\r\n      var K = 1024;\r\n      var M = K * K;\r\n      var suffix = \"\";\r\n      if (size > K) {\r\n        size /= K;\r\n        suffix = \" кб\";\r\n      }\r\n      if (size > K) {\r\n        size /= K;\r\n        suffix = \" мб\";\r\n      }\r\n      size = size.toFixed(2);\r\n      size = size.replace(/0+$/gi, \"\").replace(/\\.$/gi, \"\");\r\n      return size + suffix;\r\n    }\r\n\r\n    var totalSize = 0;\r\n\r\n    function bindAttachment(div, input, size) {\r\n      div.find(\".delete_file_btn\").click(function (e) {\r\n        e.preventDefault();\r\n        e.stopPropagation();\r\n        totalSize -= size;\r\n        input.remove();\r\n        div.remove();\r\n\t      (0,_modules_controls_slider_changeSliderHeight_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n      });\r\n    }\r\n\r\n    function bindFileInput(el) {\r\n\r\n      el = $(el);\r\n\r\n      el.change(function () {\r\n\r\n        var $this = $(this);\r\n        var label = $(\"label[for=\" + $this.attr(\"id\") + \"]\");\r\n        if (!label.length) return;\r\n\r\n        var div = $(\"<div class=\\\"attachment\\\" />\");\r\n        var names = [];\r\n        var size = 0;\r\n        $(this.files).each(function (i, f) {\r\n          names.push(f.name);\r\n          size += f.size;\r\n          $(\"<div class=\\\"attachment__item\\\" />\")\r\n            .text(f.name + \" (\" + formatSize(f.size) + \")\")\r\n            .appendTo(div);\r\n          $(\"<a href=\\\"#\\\" class=\\\"delete_file_btn\\\" />\").appendTo(div);\r\n\t\t      (0,_modules_controls_slider_changeSliderHeight_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n        });\r\n\r\n\r\n\r\n        if (names.length) {\r\n\r\n          var limit = parseLimit($this.attr(\"data-maxsize\"));\r\n\r\n          // Проверить лимит на размер выбранных файлов\r\n          if (totalSize + size > limit) {\r\n            alert(\"Ошибка\", \"Размер выбранных файлов \"\r\n              + formatSize(totalSize + size)\r\n              + \" превышает указанный лимит в \" + formatSize(limit));\r\n            $this.val(\"\");\r\n            setTimeout(function () {\r\n              $this.change();\r\n            }, 1);\r\n            return;\r\n          }\r\n\r\n          label.after(div);\r\n\r\n          var newInput = $this.clone();\r\n          newInput.val(\"\");\r\n          label.after(newInput);\r\n          bindFileInput(newInput);\r\n\r\n          $this.removeAttr(\"id\");\r\n          // Присвоим наименование поле выбора файла с указанным типом документа\r\n          var doctype_id = $this.attr('data-id');\r\n          $this.attr(\"name\", \"doc_\" + doctype_id);\r\n\r\n          totalSize += size;\r\n          bindAttachment(div, $this, size);\r\n\r\n        }\r\n\r\n        else {\r\n          label.empty();\r\n        }\r\n\r\n      });\r\n\r\n    }\r\n\r\n    $(function() {\r\n      bindFileInput(\".fileinput\");\r\n    });\r\n\r\n    $(function() {\r\n\r\n         $(\".modaldelfileclose\").click(function(e) {\r\n             e.preventDefault();\r\n             var modal = e.target.parentNode.parentNode;\r\n             if (modal) modal.classList.add('hidden');\r\n         });\r\n\r\n         $(\"[data-target-modal-file^='confirm_']\").click(function(e) {\r\n             e.preventDefault();\r\n             var modal = document.getElementById(e.target.getAttribute('data-target-modal-file') || '');\r\n             if (modal) modal.classList.remove('hidden');\r\n         });\r\n\r\n         $(\"[id^='delete_cancel_']\").click(function() {\r\n             var uuid = $(this).attr(\"id\").replace(\"delete_cancel_\", \"\");\r\n             $(\"input#\" + uuid).prop(\"checked\", false);\r\n             $(\".modaldelfileclose\").trigger('click');\r\n         });\r\n\r\n         $(\"[id^='modal_accept_del_']\").click(function() {\r\n             var uuid = $(this).attr(\"id\").replace(\"modal_accept_del_\", \"\");\r\n             $(\"input#\" + uuid).prop(\"checked\", true);\r\n             $(\"label[for='\" + uuid + \"']\").hide();\r\n             $(\".attachment__item_\" + uuid).remove();\r\n             $(\".modaldelfileclose\").trigger('click');\r\n\t           (0,_modules_controls_slider_changeSliderHeight_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n         });\r\n\r\n         $(\"[id^='attachment__decldel_']\").click(function() {\r\n             var uuid = $(this).attr(\"id\").replace(\"attachment__decldel_\", \"\");\r\n             $(\"input#\" + uuid).prop(\"checked\", false);\r\n             $(\"label[for='\" + uuid + \"']\").hide();\r\n             $(\".attachment__item_\" + uuid).remove();\r\n\t         (0,_modules_controls_slider_changeSliderHeight_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n         });\r\n\r\n\r\n\r\n     });\r\n\r\n    // Блоки \"Лицо для основания на подключение\", \"Вид правообладания земельным участком\", \"Вид объекта подключения\" - д/них сущ-ет привязка доков к БД + \"Характеристика...\"\r\n\r\n    function docblocksHide(doc_blocks, radio_name) {\r\n\r\n        var $cur_val = $('input[name='+radio_name+']:checked').val();\r\n\r\n        doc_blocks.each(\r\n            function () {\r\n                var $this = $(this);\r\n                var doctype_vals = $this.val()\r\n                var docblock = $this.parent().parent();\r\n\r\n                if ($cur_val === null || $cur_val === undefined || (doctype_vals.length !== 0 && doctype_vals.indexOf($cur_val) === -1))\r\n                {\r\n                    docblock.addClass(radio_name+'_hide');\r\n                }\r\n                else {\r\n                    docblock.removeClass(radio_name+'_hide');\r\n                }\r\n\r\n            }\r\n        )\r\n        docGroupsRequiredIfOne();\r\n    }\r\n\r\nfunction docblocksHideQueueVals(doc_blocks, radio_name) {\r\n\r\n    var checkedRadios = $('input[name*='+radio_name+']:checked')\r\n\r\n    doc_blocks.forEach(docblock_radio =>\r\n        {\r\n            var doctype_vals = $(docblock_radio).val()\r\n            var docblock = $(docblock_radio).parent().parent();\r\n\r\n            checkedRadios.each(function() {\r\n                var $cur_val = $(this).val()\r\n                if ($cur_val === null || $cur_val === undefined || (doctype_vals.length !== 0 && doctype_vals.indexOf($cur_val) === -1)) {\r\n                    docblock.addClass(radio_name+'_hide');\r\n                    return false;\r\n                }\r\n                else {\r\n                    docblock.removeClass(radio_name+'_hide');\r\n                }\r\n            })\r\n        }\r\n    )\r\n    docGroupsRequiredIfOne();\r\n}\r\n\r\n    // если в группе условно-обязательных документов только один документ, то показываем звездочку\r\n    function docGroupsRequiredIfOne() {\r\n        let elems_req_group = $('.form__field:not([class*=_hide]) [class*=req_group_]');\r\n        var group_names = [];   // получаем существующие названия групп\r\n        elems_req_group.each(function () {\r\n            var $this = $(this);\r\n            var el_id = $this[0].id;\r\n            if (!group_names.includes(el_id))\r\n                group_names.push(el_id);\r\n        });\r\n        group_names.forEach(function (e) {    // для каждой группы получаем ее элементы\r\n            let group = elems_req_group.filter('#' + e);\r\n            if (group.length === 1 ) group[0].previousElementSibling.classList.add(\"required_doc_group\")\r\n            else group.each(function () {\r\n                var $this = $(this);\r\n                $this[0].previousElementSibling.classList.remove(\"required_doc_group\")\r\n            })\r\n\r\n        })\r\n    }\r\n\r\n    function initCheckRadios(radio_name) {\r\n\r\n        const radios = document.querySelectorAll('input[name^='+radio_name+']');\r\n        if (radio_name !== 'connectobjchar') {\r\n            const docblocks = $('[name^=\"doc_'+radio_name+'_\"]');\r\n            docblocksHide(docblocks, radio_name);\r\n\r\n            for (let i = 0; i < radios.length; i++) {\r\n                if (radios[i].disabled) return;\r\n                const label = radios[i].parentNode;\r\n                label.addEventListener('click', () => docblocksHide(docblocks, radio_name));\r\n            }\r\n        }\r\n        else {\r\n            const docblocks = document.querySelectorAll('[name^=doc_'+radio_name+']');\r\n            docblocksHideQueueVals(docblocks, radio_name)\r\n            for (let i = 0; i < radios.length; i++) {\r\n                if (radios[i].disabled) return;\r\n                const label = radios[i].parentNode;\r\n                label.addEventListener('click', () => docblocksHideQueueVals(docblocks, radio_name));\r\n            }\r\n        }\r\n    }\r\n\r\n    if (document.querySelector('.personbasis')) initCheckRadios('personbasis');\r\n    if (document.querySelector('.owner_or_tenant')) initCheckRadios('owner_or_tenant');\r\n    if (document.querySelector('.connectobjkind')) initCheckRadios('connectobjkind');\r\n    if (document.querySelector('input[name=requesttype_id]').value === '10002' &&\r\n        document.querySelector('.connectobjchar')) initCheckRadios('connectobjchar');\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initCheckRadios);\r\n\n\n//# sourceURL=webpack://rks/./src/js/lk_request_fileinput.js?");

/***/ }),

/***/ "./src/js/modules/controls/slider/changeSliderHeight.js":
/*!**************************************************************!*\
  !*** ./src/js/modules/controls/slider/changeSliderHeight.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// изменение высоты слайдера\r\nfunction changeSliderHeight(action, value) {\r\n  setTimeout(() => {\r\n    const slickList = document.querySelector('.slick-list')\r\n    const slickCurrent = slickList.querySelector('.slick-current')\r\n    const slickCurrentHeight = getComputedStyle(slickCurrent).height\r\n\r\n    slickList.style.height = slickCurrentHeight\r\n  }, 0)\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (changeSliderHeight);\r\n\n\n//# sourceURL=webpack://rks/./src/js/modules/controls/slider/changeSliderHeight.js?");

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
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/lk_request_fileinput.js");
/******/ 	
/******/ })()
;