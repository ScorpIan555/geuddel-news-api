(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./getNews.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./getNews.js":
/*!********************!*\
  !*** ./getNews.js ***!
  \********************/
/*! exports provided: main */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "main", function() { return main; });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "source-map-support/register");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_response_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./libs/response-lib */ "./libs/response-lib.js");
/* harmony import */ var newsapi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! newsapi */ "newsapi");
/* harmony import */ var newsapi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(newsapi__WEBPACK_IMPORTED_MODULE_2__);


 // initialize and configure Newsapi instance

var newsApiKey = process.env.newsApiKey;
var newsapi = new newsapi__WEBPACK_IMPORTED_MODULE_2___default.a(newsApiKey); // To query /v2/top-headlines
// All options passed to topHeadlines are optional, but you need to include at least one of them
// receive POST from client and make GET call from back-end to 3rd party api
// return result to client side's redux cycle

function main(event, context) {
  console.log('event:::', event);
  console.log('context:::', context); // parse and store object sent from client
  // const queryData = JSON.parse(event.body);
  // const { sources, q, category, language, country } = queryData;
  // make asynchronous api call to Newsapi.org for headlines
  // try {

  var q = 'brexit';
  newsapi.v2.topHeadlines({
    // sources: 'bbc-news,the-verge',
    // q: 'bitcoin',
    // category: 'business',
    // language: 'en',
    // country: 'us'
    // sources: sources,
    q: q // category: category,
    // language: language,
    // country: country

  }).then(function (res) {
    var res = res;
    console.log('res:::', res);
    return Object(_libs_response_lib__WEBPACK_IMPORTED_MODULE_1__["success"])({
      status: true
    });
  })["catch"](function (e) {
    console.log("ERROR:::", e);
    return Object(_libs_response_lib__WEBPACK_IMPORTED_MODULE_1__["failure"])({
      message: e.message
    });
  }); // } catch (e) {
  // logging output during development
  // console.log("ERROR:::", e);
  // return failure({ message: e.message });
  // }

  return Object(_libs_response_lib__WEBPACK_IMPORTED_MODULE_1__["success"])({
    status: true
  });
}

/***/ }),

/***/ "./libs/response-lib.js":
/*!******************************!*\
  !*** ./libs/response-lib.js ***!
  \******************************/
/*! exports provided: success, failure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "success", function() { return success; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "failure", function() { return failure; });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "source-map-support/register");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);

function success(body) {
  return buildResponse(200, body);
}
function failure(body) {
  return buildResponse(500, body);
}

function buildResponse(statusCode, body) {
  return {
    statusCode: statusCode,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true
    },
    body: JSON.stringify(body)
  };
}

/***/ }),

/***/ "newsapi":
/*!**************************!*\
  !*** external "newsapi" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("newsapi");

/***/ }),

/***/ "source-map-support/register":
/*!**********************************************!*\
  !*** external "source-map-support/register" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("source-map-support/register");

/***/ })

/******/ })));
//# sourceMappingURL=getNews.js.map