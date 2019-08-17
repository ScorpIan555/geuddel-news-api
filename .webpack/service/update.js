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
/******/ 	return __webpack_require__(__webpack_require__.s = "./update.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./libs/dynamodb-lib.js":
/*!******************************!*\
  !*** ./libs/dynamodb-lib.js ***!
  \******************************/
/*! exports provided: call */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "call", function() { return call; });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "source-map-support/register");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aws-sdk */ "aws-sdk");
/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_1__);


function call(action, params) {
  var dynamoDb = new aws_sdk__WEBPACK_IMPORTED_MODULE_1___default.a.DynamoDB.DocumentClient();
  return dynamoDb[action](params).promise();
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

/***/ "./update.js":
/*!*******************!*\
  !*** ./update.js ***!
  \*******************/
/*! exports provided: main */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "main", function() { return main; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! source-map-support/register */ "source-map-support/register");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _libs_dynamodb_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./libs/dynamodb-lib */ "./libs/dynamodb-lib.js");
/* harmony import */ var _libs_response_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./libs/response-lib */ "./libs/response-lib.js");





function main(_x, _x2) {
  return _main.apply(this, arguments);
}

function _main() {
  _main = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event, context) {
    var data, timestamp, params, result;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log("update.put.event:::", event);
            console.log("update.put.event.requestContext:::", event.requestContext);
            console.log("update.put.event.pathParameters:::", event.pathParameters);
            console.log("update.put.event.body:::", event.body);
            console.log("update.put.context:::", context);
            console.log("update.put.process.env.TableName", process.env.userTableName);
            data = JSON.parse(event.body);
            timestamp = new Date();
            console.log("timestamp:", timestamp);

            if (!(typeof data.email !== "string")) {
              _context.next = 12;
              break;
            }

            console.error("Validation Failed");
            return _context.abrupt("return", {
              statusCode: 400,
              headers: {
                "Content-Type": "text/plain"
              },
              body: "Couldn't update user item, failed validation."
            });

          case 12:
            params = {
              TableName: process.env.userTableName,
              // TableName: "dev-gNewsUser",
              // 'Key' defines the partition key and sort key of the item to be updated
              // - 'userId': Identity Pool identity id of the authenticated user
              Key: {
                // userId: event.requestContext.identity.cognitoIdentityId,
                userId: data.email
              },
              Item: {
                // userId: event.requestContext.identity.cognitoIdentityId,
                userId: data.email,
                email: data.email,
                language: data.language,
                country: data.country,
                category: data.category,
                content: data.content,
                attachment: data.attachment,
                updatedAt: Date()
              },
              // 'UpdateExpression' defines the attributes to be updated
              UpdateExpression: "SET #email = :email, #updatedAt = :updatedAt, #category = :category, #country = :country,  #language = :language, content = :content, attachment = :attachment",
              ExpressionAttributeNames: {
                "#language": "language",
                "#country": "country",
                "#category": "category",
                "#updatedAt": "updatedAt",
                "#email": "email"
              },
              // 'ExpressionAttributeValues' defines the value in the update expression
              ExpressionAttributeValues: {
                ":attachment": data.attachment || null,
                ":content": data.content || null,
                ":language": data.language || null,
                ":country": data.country || null,
                ":category": data.category || null,
                ":updatedAt": timestamp,
                ":email": data.email || null
              },
              // 'ReturnValues' specifies if and how to return the item's attributes,
              // where ALL_NEW returns all attributes of the item after the update; you
              // can inspect 'result' below to see how it works with different settings
              ReturnValues: "ALL_NEW"
            };
            _context.prev = 13;
            _context.next = 16;
            return _libs_dynamodb_lib__WEBPACK_IMPORTED_MODULE_3__["call"]("update", params);

          case 16:
            result = _context.sent;
            console.log("update.put.result:::", result);
            console.log("update.put.params.Item:::", params.Item);
            return _context.abrupt("return", Object(_libs_response_lib__WEBPACK_IMPORTED_MODULE_4__["success"])(params.Item));

          case 22:
            _context.prev = 22;
            _context.t0 = _context["catch"](13);
            return _context.abrupt("return", Object(_libs_response_lib__WEBPACK_IMPORTED_MODULE_4__["failure"])({
              status: false
            }));

          case 25:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[13, 22]]);
  }));
  return _main.apply(this, arguments);
}

/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/asyncToGenerator");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("aws-sdk");

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
//# sourceMappingURL=update.js.map