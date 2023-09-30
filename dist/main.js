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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"column1\": () => (/* binding */ column1)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _signIn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signIn */ \"./src/signIn.js\");\n\n\n\n// Base layout\nconst content = document.getElementById('content');\nconst mainContainer = document.createElement('div');\nconst column1 = document.createElement('div');\nconst column2 = document.createElement('div');\nconst column3 = document.createElement('div');\nconst row1 = document.createElement('div');\nconst row2 = document.createElement('div');\nconst searchBar = document.createElement('div');\nconst happeningContainer = document.createElement('div');\nconst whoToFollowContainer = document.createElement('div');\nmainContainer.classList.add('mainContainer');\ncolumn1.classList.add('column1');\ncolumn2.classList.add('column2');\ncolumn3.classList.add('column3');\nrow1.classList.add('row1');\nrow2.classList.add('row2');\nsearchBar.classList.add('searchBar');\nhappeningContainer.classList.add('happeningContainer');\nwhoToFollowContainer.classList.add('whoToFollowContainer');\ncontent.append(mainContainer);\nmainContainer.append(column1);\nmainContainer.append(column2);\nmainContainer.append(column3);\ncolumn2.append(row1);\ncolumn2.append(row2);\ncolumn3.append(searchBar);\ncolumn3.append(happeningContainer);\ncolumn3.append(whoToFollowContainer);\n\n\n\n// Project Global Variables\n(0,_signIn__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n\n//# sourceURL=webpack://twitterclone/./src/index.js?");

/***/ }),

/***/ "./src/leftSidebar.js":
/*!****************************!*\
  !*** ./src/leftSidebar.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\n\nfunction createLeftSidebar() {\n  // Left Sidebar Elements\n  const home = document.createElement('div');\n  const explore = document.createElement('div');\n  const notifications = document.createElement('div');\n  const messages = document.createElement('div');\n  const bookmarks = document.createElement('div');\n  const twitterBlue = document.createElement('div');\n  const profile = document.createElement('div');\n  const more = document.createElement('div');\n  const tweet = document.createElement('div');\n\n  // Left Sidebar Containers\n  const homeContainer = document.createElement('div')\n  const exploreContainer = document.createElement('div');\n  const notificationsContainer = document.createElement('div');\n  const messagesContainer = document.createElement('div');\n  const bookmarksContainer = document.createElement('div');\n  const twitterBlueContainer = document.createElement('div');\n  const profileContainer = document.createElement('div');\n  const moreContainer = document.createElement('div');\n  const tweetContainer = document.createElement('div');\n\n  // Left Sidebar Images\n  const twitterLogo = document.createElement('img');\n  twitterLogo.classList.add('twitterLogo');\n  twitterLogo.src = '../src/assets/twitter-logo.png';\n  _index_js__WEBPACK_IMPORTED_MODULE_0__.column1.append(twitterLogo);\n  const homeLogo = document.createElement('img');\n  homeLogo.classList.add('homeLogo');\n  homeLogo.src = '../src/assets/home.png';\n  home.append(homeLogo);\n  const exploreLogo = document.createElement('img');\n  exploreLogo.classList.add('exploreLogo');\n  exploreLogo.src = '../src/assets/hashtag.png';\n  explore.append(exploreLogo);\n  const notificationsLogo = document.createElement('img');\n  notificationsLogo.classList.add('notificationsLogo');\n  notificationsLogo.src = '../src/assets/bell.png';\n  notifications.append(notificationsLogo);\n  const messagesLogo = document.createElement('img');\n  messagesLogo.classList.add('messagesLogo');\n  messagesLogo.src = '../src/assets/mail.png';\n  messages.append(messagesLogo);\n  const bookmarksLogo = document.createElement('img');\n  bookmarksLogo.classList.add('bookmarksLogo');\n  bookmarksLogo.src = '../src/assets/bookmark.png';\n  bookmarks.append(bookmarksLogo);\n  const twitterBlueLogo = document.createElement('img');\n  twitterBlueLogo.classList.add('twitterBlueLogo');\n  twitterBlueLogo.src = '../src/assets/twitterBlue.png';\n  twitterBlue.append(twitterBlueLogo);\n  const profileLogo = document.createElement('img');\n  profileLogo.classList.add('profileLogo');\n  profileLogo.src = '../src/assets/profile.png';\n  profile.append(profileLogo);\n  const moreLogo = document.createElement('img');\n  moreLogo.classList.add('moreLogo');\n  moreLogo.src = '../src/assets/more.png';\n  more.append(moreLogo);\n\n  // Left Sidebar Classes\n  home.classList.add('home');\n  explore.classList.add('explore');\n  notifications.classList.add('notifications');\n  messages.classList.add('messages');\n  bookmarks.classList.add('bookmarks');\n  twitterBlue.classList.add('twitterBlue');\n  profile.classList.add('profile');\n  more.classList.add('more');\n  tweet.classList.add('tweet');\n  homeContainer.classList.add('homeContainer');\n  exploreContainer.classList.add('exploreContainer');\n  notificationsContainer.classList.add('notificationsContainer');\n  messagesContainer.classList.add('messagesContainer');\n  bookmarksContainer.classList.add('bookmarksContainer');\n  twitterBlueContainer.classList.add('twitterBlueContainer');\n  profileContainer.classList.add('profileContainer');\n  moreContainer.classList.add('moreContainer');\n\n  // Left Sidebar Text\n  const homeText = document.createTextNode('Home');\n  const exploreText = document.createTextNode('Explore');\n  const notificationsText = document.createTextNode('Notifications');\n  const messagesText = document.createTextNode('Messages');\n  const bookmarksText = document.createTextNode('Bookmarks');\n  const twitterBlueText = document.createTextNode('Twitter Blue');\n  const profileText = document.createTextNode('Profile');\n  const moreText = document.createTextNode('More');\n  const tweetText = document.createTextNode('Tweet');\n\n  // Left Sidebar Appending\n  _index_js__WEBPACK_IMPORTED_MODULE_0__.column1.append(homeContainer, exploreContainer, notificationsContainer, messagesContainer);\n  _index_js__WEBPACK_IMPORTED_MODULE_0__.column1.append(bookmarksContainer, twitterBlueContainer, profileContainer, moreContainer);\n  homeContainer.append(homeLogo, homeText);\n  exploreContainer.append(exploreLogo, exploreText);\n  notificationsContainer.append(notificationsLogo, notificationsText);\n  messagesContainer.append(messagesLogo, messagesText);\n  bookmarksContainer.append(bookmarksLogo, bookmarksText);\n  twitterBlueContainer.append(twitterBlueLogo, twitterBlueText);\n  profileContainer.append(profileLogo, profileText);\n  moreContainer.append(moreLogo, moreText);\n  _index_js__WEBPACK_IMPORTED_MODULE_0__.column1.append(tweet);\n  tweet.append(tweetText);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createLeftSidebar);\n\n\n//# sourceURL=webpack://twitterclone/./src/leftSidebar.js?");

/***/ }),

/***/ "./src/middleContent.js":
/*!******************************!*\
  !*** ./src/middleContent.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createMiddleContent() {\n  console.log('middle');\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMiddleContent);\n\n\n//# sourceURL=webpack://twitterclone/./src/middleContent.js?");

/***/ }),

/***/ "./src/rightSidebar.js":
/*!*****************************!*\
  !*** ./src/rightSidebar.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createRightSidebar() {\n  console.log('right');\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createRightSidebar);\n\n//# sourceURL=webpack://twitterclone/./src/rightSidebar.js?");

/***/ }),

/***/ "./src/signIn.js":
/*!***********************!*\
  !*** ./src/signIn.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction signIn() {\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (signIn);\n\n\n//# sourceURL=webpack://twitterclone/./src/signIn.js?");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;