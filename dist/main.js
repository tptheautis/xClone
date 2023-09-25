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

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _leftSidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./leftSidebar */ \"./src/leftSidebar.js\");\n/* harmony import */ var _middleContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./middleContent */ \"./src/middleContent.js\");\n/* harmony import */ var _rightSidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rightSidebar */ \"./src/rightSidebar.js\");\n\n\n\n\nfunction createHomePage() {\n  (0,_leftSidebar__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  (0,_middleContent__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  (0,_rightSidebar__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHomePage);\n\n\n//# sourceURL=webpack://twitterclone/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _profilePage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profilePage */ \"./src/profilePage.js\");\n\n\n\n// Project Global Variables\n\nconst content = document.getElementById('content');\nconst mainContainer = document.createElement('div');\nconst column1 = document.createElement('div');\nconst column2 = document.createElement('div');\nconst column3 = document.createElement('div');\nconst row1 = document.createElement('div');\nconst row2 = document.createElement('div');\nconst searchBar = document.createElement('div');\nconst happeningContainer = document.createElement('div');\nconst whoToFollowContainer = document.createElement('div');\nmainContainer.classList.add('mainContainer');\ncolumn1.classList.add('column1');\ncolumn2.classList.add('column2');\ncolumn3.classList.add('column3');\nrow1.classList.add('row1');\nrow2.classList.add('row2');\nsearchBar.classList.add('searchBar');\nhappeningContainer.classList.add('happeningContainer');\nwhoToFollowContainer.classList.add('whoToFollowContainer');\ncontent.append(mainContainer);\nmainContainer.append(column1);\nmainContainer.append(column2);\nmainContainer.append(column3);\ncolumn2.append(row1);\ncolumn2.append(row2);\ncolumn3.append(searchBar);\ncolumn3.append(happeningContainer);\ncolumn3.append(whoToFollowContainer);\n\n(0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n\n//# sourceURL=webpack://twitterclone/./src/index.js?");

/***/ }),

/***/ "./src/leftSidebar.js":
/*!****************************!*\
  !*** ./src/leftSidebar.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createLeftSidebar() {\n  console.log('left')\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createLeftSidebar);\n\n\n//# sourceURL=webpack://twitterclone/./src/leftSidebar.js?");

/***/ }),

/***/ "./src/middleContent.js":
/*!******************************!*\
  !*** ./src/middleContent.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createMiddleContent() {\n  console.log('middle');\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMiddleContent);\n\n\n//# sourceURL=webpack://twitterclone/./src/middleContent.js?");

/***/ }),

/***/ "./src/profile.js":
/*!************************!*\
  !*** ./src/profile.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createProfile() {\n  console.log('profile');\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createProfile);\n\n\n//# sourceURL=webpack://twitterclone/./src/profile.js?");

/***/ }),

/***/ "./src/profilePage.js":
/*!****************************!*\
  !*** ./src/profilePage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _leftSidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./leftSidebar */ \"./src/leftSidebar.js\");\n/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile */ \"./src/profile.js\");\n/* harmony import */ var _rightSidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rightSidebar */ \"./src/rightSidebar.js\");\n\n\n\n\nfunction createProfilePage() {\n  (0,_leftSidebar__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  (0,_profile__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  (0,_rightSidebar__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createProfilePage);\n\n\n//# sourceURL=webpack://twitterclone/./src/profilePage.js?");

/***/ }),

/***/ "./src/rightSidebar.js":
/*!*****************************!*\
  !*** ./src/rightSidebar.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createRightSidebar() {\n  console.log('right');\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createRightSidebar);\n\n//# sourceURL=webpack://twitterclone/./src/rightSidebar.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;