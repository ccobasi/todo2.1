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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  background-color: #eee;\\n}\\n\\ni {\\n  color: gray;\\n}\\n\\n.wrapper {\\n  background-color: #fff;\\n  width: 30%;\\n  margin: 100px auto;\\n  border: 1px solid #eee;\\n  padding: 5px 0 0 0;\\n  box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);\\n}\\n\\n.wrapper p {\\n  margin: 0;\\n  font-size: 20px;\\n}\\n\\n.mini-section {\\n  border-bottom: 1px solid rgb(224, 224, 224);\\n  margin: 0;\\n  padding: 10px;\\n}\\n\\n.title {\\n  display: flex;\\n  justify-content: space-between;\\n}\\n\\n.task {\\n  border: none;\\n  font-style: italic;\\n  width: 90%;\\n  padding: 8px;\\n}\\n\\n.task:focus {\\n  outline: none;\\n}\\n\\n.do {\\n  padding: 5px;\\n  display: flex;\\n}\\n\\n.clear-all {\\n  padding: 5px;\\n  text-align: center;\\n  color: grey;\\n  background-color: rgb(241, 241, 241);\\n}\\n\\n.clear-all p {\\n  padding: 10px;\\n  font-size: 15px;\\n}\\n\\n.item {\\n  padding: 1rem;\\n  background-color: rgb(247, 247, 247);\\n}\\n\\n.clear-all p:hover,\\n.item:hover {\\n  background-color: rgb(235, 235, 235);\\n}\\n\\n.check {\\n  width: 10px;\\n  margin: 0 10px;\\n}\\n\\n.desc {\\n  text-decoration: line-through;\\n}\\n\\n.dragging {\\n  opacity: 0.5;\\n}\\n\\n.trash {\\n  float: right;\\n}\\n\\n.trash:hover {\\n  cursor: pointer;\\n  color: rgb(241, 198, 198);\\n}\\n\\n.invalid {\\n  outline-color: rgb(241, 198, 198);\\n}\\n\\n.clear-all:hover {\\n  cursor: pointer;\\n}\\n\\n.ellipsis:hover {\\n  cursor: move;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/addRemove.js":
/*!**************************!*\
  !*** ./src/addRemove.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addTask)\n/* harmony export */ });\n/* harmony import */ var _drag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drag.js */ \"./src/drag.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n/* eslint-disable import/no-cycle */\n\n\n\nfunction addTask(task) {\n  const newTask = document.createElement('div');\n  newTask.classList.add('mini-section');\n  newTask.classList.add('item');\n  newTask.setAttribute('draggable', 'true');\n  newTask.innerHTML = `\n  <span>\n  <input class='check' type='checkbox' id='task-description' name='task-description' value='${task}'>${task}\n  <i class=\"fas fa-ellipsis-v ellipsis\" style=\"color: gray; float: right;\"></i>\n  </span>\n  `;\n  _index_js__WEBPACK_IMPORTED_MODULE_1__.todoList.appendChild(newTask);\n  (0,_drag_js__WEBPACK_IMPORTED_MODULE_0__.saveChanges)();\n  (0,_drag_js__WEBPACK_IMPORTED_MODULE_0__.saveLocalstorage)(_drag_js__WEBPACK_IMPORTED_MODULE_0__.list);\n  document.location.reload(true);\n}\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/addRemove.js?");

/***/ }),

/***/ "./src/complete.js":
/*!*************************!*\
  !*** ./src/complete.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getContainer\": () => (/* binding */ getContainer)\n/* harmony export */ });\n/* harmony import */ var _drag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drag.js */ \"./src/drag.js\");\n/* eslint-disable import/prefer-default-export */\n/* eslint-disable import/no-cycle */\n\n\n\n// Checks if input are checked or not, and Add Or remove Css Class => The line through style.\nconst getContainer = (newContainer) => {\n  const d = [...newContainer.querySelectorAll('input')];\n  d.forEach((input) => {\n    input.addEventListener('change', (e) => {\n      if (e.target.checked) {\n        input.parentNode.classList.add('desc');\n        (0,_drag_js__WEBPACK_IMPORTED_MODULE_0__.saveChanges)();\n      } else {\n        input.parentNode.classList.remove('desc');\n        (0,_drag_js__WEBPACK_IMPORTED_MODULE_0__.saveChanges)();\n      }\n    });\n  });\n};\n\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/complete.js?");

/***/ }),

/***/ "./src/drag.js":
/*!*********************!*\
  !*** ./src/drag.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"list\": () => (/* binding */ list),\n/* harmony export */   \"saveLocalstorage\": () => (/* binding */ saveLocalstorage),\n/* harmony export */   \"saveChanges\": () => (/* binding */ saveChanges),\n/* harmony export */   \"inputListener\": () => (/* binding */ inputListener),\n/* harmony export */   \"reloadContainer\": () => (/* binding */ reloadContainer),\n/* harmony export */   \"getDragAfterElement\": () => (/* binding */ getDragAfterElement),\n/* harmony export */   \"dragOver\": () => (/* binding */ dragOver),\n/* harmony export */   \"deleteItem\": () => (/* binding */ deleteItem),\n/* harmony export */   \"deleteAll\": () => (/* binding */ deleteAll),\n/* harmony export */   \"addListeners\": () => (/* binding */ addListeners)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n/* harmony import */ var _addRemove_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addRemove.js */ \"./src/addRemove.js\");\n// Initials tasks\n/* eslint-disable import/no-mutable-exports,  */\n/* eslint-disable import/no-cycle */\n/* eslint-disable no-loop-func */\n\n\n\n\nlet list = [];\n\nif (localStorage.getItem('list')) {\n  const getList = JSON.parse(localStorage.getItem('list'));\n  list = getList;\n}\n\n// Add Drag-start and drag-End listeners --- Add Css Class\nconst addListeners = (elements) => {\n  elements.forEach((item) => {\n    item.addEventListener('dragstart', () => {\n      item.classList.add('dragging');\n\n      item.addEventListener('dragend', () => {\n        item.classList.remove('dragging');\n      });\n    });\n  });\n};\n\n/// Code for local Storage Save.\n\nconst saveLocalstorage = () => {\n  localStorage.setItem('list', JSON.stringify(list));\n};\n\n// Help save any changes in real time (Save position after DragDrop, etc...)\n//----------------------\n\nconst saveChanges = () => {\n  const newList = [];\n  const listTasks = document.querySelectorAll('.item');\n  if (listTasks.length === 0) {\n    list = [];\n    saveLocalstorage(list);\n  } else {\n    for (let i = 0; i < listTasks.length; i += 1) {\n      newList.push({\n        index: i + 1,\n        description: listTasks[i].firstChild.nextSibling.firstChild.nextSibling.value,\n        completed: listTasks[i].firstChild.nextSibling.firstChild.nextSibling.checked,\n      });\n\n      list = newList;\n      saveLocalstorage(list);\n    }\n  }\n};\n\nconst inputListener = (input) => {\n  input.addEventListener('keypress', (e) => {\n    if (e.key === 'Enter') {\n      (0,_addRemove_js__WEBPACK_IMPORTED_MODULE_1__.default)(input.value);\n    }\n  });\n};\n\nconst reloadContainer = (elements) => {\n  elements.forEach((item) => {\n    item.addEventListener('drop', () => {\n      saveChanges();\n    });\n  });\n};\n\n// ----------------\n\n// Get the element just after the location of the mouse\nconst getDragAfterElement = (container, y) => {\n  const draggableElements = [...container.querySelectorAll('.item:not(.dragging)')];\n\n  return draggableElements.reduce((closest, child) => {\n    const box = child.getBoundingClientRect();\n    const offset = y - box.top - box.height / 2;\n\n    if (offset < 0 && offset > closest.offset) {\n      return { offset, element: child };\n    }\n    return closest;\n  }, { offset: Number.NEGATIVE_INFINITY }).element;\n};\n\n// Add event listener DragOver to dragzone\nconst dragOver = (container) => {\n  container.addEventListener('dragover', (e) => {\n    e.preventDefault();\n    const afterElement = getDragAfterElement(container, e.clientY);\n    const draggable = document.querySelector('.dragging');\n    if (afterElement === undefined) {\n      container.appendChild(draggable);\n    } else {\n      container.insertBefore(draggable, afterElement);\n    }\n  });\n};\n\nconst deleteItem = () => {\n  _index_js__WEBPACK_IMPORTED_MODULE_0__.del.addEventListener('click', (e) => {\n    e.preventDefault();\n    e.target.parentElement.parentElement.remove();\n    saveChanges();\n    document.location.reload(true);\n  });\n};\n\nconst deleteAll = () => {\n  _index_js__WEBPACK_IMPORTED_MODULE_0__.clearAll.addEventListener('click', (e) => {\n    e.preventDefault();\n    list = list.filter((task) => task.completed === false);\n    saveLocalstorage();\n    document.location.reload(true);\n  });\n};\n\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/drag.js?");

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ editListener)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n/* harmony import */ var _drag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drag.js */ \"./src/drag.js\");\n/* eslint-disable import/no-cycle */\n\n\n\nfunction editListener() {\n  for (let i = 0; i < _index_js__WEBPACK_IMPORTED_MODULE_0__.items.length; i += 1) {\n    _index_js__WEBPACK_IMPORTED_MODULE_0__.items[i].addEventListener('dblclick', () => {\n      const oldValue = _index_js__WEBPACK_IMPORTED_MODULE_0__.items[i].children[0].children[0];\n      const oldElement = _index_js__WEBPACK_IMPORTED_MODULE_0__.items[i].children[0].children[0].nextSibling.nextSibling;\n      oldElement.remove();\n      _index_js__WEBPACK_IMPORTED_MODULE_0__.items[i].children[0].children[0].nextSibling.remove();\n      const newInput = document.createElement('input');\n      const icon = document.createElement('i');\n      icon.classList.add('fa', 'fa-trash', 'trash');\n      _index_js__WEBPACK_IMPORTED_MODULE_0__.items[i].firstChild.nextSibling.removeChild(_index_js__WEBPACK_IMPORTED_MODULE_0__.items[i].children[0].children[0]);\n      newInput.placeholder = oldValue.value;\n      _index_js__WEBPACK_IMPORTED_MODULE_0__.items[i].children[0].insertBefore(newInput, _index_js__WEBPACK_IMPORTED_MODULE_0__.items[i].children[0].children[0]);\n      _index_js__WEBPACK_IMPORTED_MODULE_0__.items[i].children[0].insertBefore(icon, _index_js__WEBPACK_IMPORTED_MODULE_0__.items[i].children[0].children[0]);\n\n      newInput.addEventListener('keypress', (e) => {\n        if (e.key === 'Enter') {\n          if (newInput.value.trim() === '') {\n            newInput.classList.add('invalid');\n          } else {\n            _index_js__WEBPACK_IMPORTED_MODULE_0__.items[i].children[0].id = i;\n            newInput.setAttribute('description', newInput.value);\n            _index_js__WEBPACK_IMPORTED_MODULE_0__.items[i].firstChild.nextSibling.removeChild(_index_js__WEBPACK_IMPORTED_MODULE_0__.items[i].children[0].children[0]);\n\n            _index_js__WEBPACK_IMPORTED_MODULE_0__.items[i].firstChild.nextSibling.innerHTML = `\n           <input class='check' type='checkbox' id='task-description' name='task-description' value='${newInput.value}'>${newInput.value}\n           <i class=\"fas fa-ellipsis-v ellipsis\" style=\"color: gray; float: right;\"></i>\n          `;\n            _drag_js__WEBPACK_IMPORTED_MODULE_1__.list[i].description = newInput.value;\n            _drag_js__WEBPACK_IMPORTED_MODULE_1__.list[i].completed = false;\n            (0,_drag_js__WEBPACK_IMPORTED_MODULE_1__.saveChanges)();\n          }\n        }\n      });\n\n      icon.addEventListener('click', (e) => {\n        e.target.parentElement.parentElement.remove();\n        (0,_drag_js__WEBPACK_IMPORTED_MODULE_1__.saveChanges)();\n        document.location.reload(true);\n      });\n    });\n  }\n}\n\n//# sourceURL=webpack://webpack-boilerplate/./src/edit.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"todoList\": () => (/* binding */ todoList),\n/* harmony export */   \"clearAll\": () => (/* binding */ clearAll),\n/* harmony export */   \"showTask\": () => (/* binding */ showTask),\n/* harmony export */   \"items\": () => (/* binding */ items),\n/* harmony export */   \"del\": () => (/* binding */ del)\n/* harmony export */ });\n/* harmony import */ var _drag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drag.js */ \"./src/drag.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _complete_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./complete.js */ \"./src/complete.js\");\n/* harmony import */ var _edit_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit.js */ \"./src/edit.js\");\n/* eslint-disable import/prefer-default-export */\n/* eslint-disable import/no-cycle */\n/* eslint-disable import/no-duplicates */\n\n\n\n\n\n\n\nconst todoList = document.querySelector('.todoList');\nconst clearAll = document.querySelector('.clear-all');\n\nconst task = document.querySelector('.task');\nconst showTask = (list) => {\n  list.forEach((e) => {\n    const lists = document.createElement('div');\n    lists.classList.add('mini-section');\n    lists.classList.add('item');\n    lists.setAttribute('draggable', 'true');\n    if (e.completed === true) {\n      lists.innerHTML = `\n      <span class='desc'>\n      <input class='check' type='checkbox' id='task-description' name='task-description' value='${e.description}' checked = true>${e.description}</input>\n      <i class=\"fas fa-trash\" style=\"color: black; float: right;\"></i>\n      <i class=\"fas fa-ellipsis-v ellipsis\" style=\"color: gray; float: right;\"></i>\n      </span>\n      `;\n    } else {\n      lists.innerHTML = `\n      <span>\n      <input class='check' type='checkbox' id='task-description' name='task-description' value='${e.description}'>${e.description}</input>\n      <i class=\"fas fa-trash\" style=\"color: black; float: right;\"></i>\n      <i class=\"fas fa-ellipsis-v ellipsis\" style=\"color: gray; float: right;\"></i>\n      </span>\n      `;\n    }\n\n    todoList.appendChild(lists);\n  });\n};\n\nshowTask(_drag_js__WEBPACK_IMPORTED_MODULE_0__.list);\n(0,_complete_js__WEBPACK_IMPORTED_MODULE_2__.getContainer)(todoList);\nconst items = document.querySelectorAll('.item');\nconst del = document.querySelector('.fa-trash');\n(0,_drag_js__WEBPACK_IMPORTED_MODULE_0__.inputListener)(task);\n(0,_edit_js__WEBPACK_IMPORTED_MODULE_3__.default)();\n(0,_drag_js__WEBPACK_IMPORTED_MODULE_0__.addListeners)(items);\n(0,_drag_js__WEBPACK_IMPORTED_MODULE_0__.dragOver)(todoList);\n(0,_drag_js__WEBPACK_IMPORTED_MODULE_0__.reloadContainer)(items);\ndeleteItem();\n(0,_drag_js__WEBPACK_IMPORTED_MODULE_0__.deleteAll)();\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/index.js?");

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
/******/ 			id: moduleId,
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;