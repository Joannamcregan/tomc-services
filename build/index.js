/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/ServiceSearch.js":
/*!**************************************!*\
  !*** ./src/modules/ServiceSearch.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

class ServiceSearch {
  constructor() {
    this.serviceListingsDiv = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-service-results");
    this.servicesSearchBar = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#service-search-term");
    this.servicesSearchButton = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#service-search-button");
    this.events();
  }
  events() {
    this.servicesSearchButton.on('click', this.getResults.bind(this));
  }
  getResults() {
    if (this.servicesSearchBar.val()) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#service-search-no-term-message').addClass('hidden');
      jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
        beforeSend: xhr => {
          xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
        },
        url: tomcBookorgData.root_url + '/wp-json/tomcServices/v1/search',
        type: 'GET',
        data: {
          'searchterm': this.servicesSearchBar.val().substring(0, 300)
        },
        success: response => {
          this.serviceListingsDiv.html('');
          if (response.length > 0) {
            for (let i = 0; i < response.length; i++) {
              let newHeading = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<h3/>').addClass('gray-link');
              let newLink = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<a/>').attr('href', response[i]['product_url']).html(response[i]['post_title']);
              newHeading.append(newLink);
              let newSpan = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<span/>').html(' $' + response[i]['price']);
              newHeading.append(newSpan);
              this.serviceListingsDiv.append(newHeading);
              let newText = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div/>').addClass('prewrap').html(response[i]['post_content']);
              this.serviceListingsDiv.append(newText);
              let lines = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div/>').addClass('orange-yellow-line-break-30');
              this.serviceListingsDiv.append(lines);
            }
          } else {
            let newP = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<p/>').addClass('centered-text').html("Sorry, we don't currently have any listings that match your search term. Feel free to spread the word about our cooperative to your favorite editors, cover artists, and other folks who offer services to authors!");
            this.serviceListingsDiv.append(newP);
          }
        },
        error: response => {
          console.log(response);
        }
      });
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#service-search-no-term-message').removeClass('hidden');
    }
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ServiceSearch);

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/***/ ((module) => {

module.exports = window["jQuery"];

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_ServiceSearch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/ServiceSearch */ "./src/modules/ServiceSearch.js");

const serviceSearch = new _modules_ServiceSearch__WEBPACK_IMPORTED_MODULE_0__["default"]();
/******/ })()
;
//# sourceMappingURL=index.js.map