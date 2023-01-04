/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/group-css-media-queries-loader/lib/index.js!./src/style.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/group-css-media-queries-loader/lib/index.js!./src/style.css ***!
  \************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  font-family: \"Poppins\", sans-serif;\n}\n\n#content {\n  font-family: \"Poppins\", sans-serif;\n  height: 100vh;\n  display: grid;\n  grid-template-columns: 1fr 10fr;\n  grid-template-rows: 100px 1fr 1fr;\n}\n\n.header {\n  grid-column: 1/3;\n  background-color: rgb(221, 76, 61);\n  padding: 1.7rem;\n  font-size: 2.3rem;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n}\n.header .responsive-nav {\n  margin-left: auto;\n  margin-top: 5px;\n}\n.header .responsive-nav > * {\n  display: block;\n  width: 50px;\n  height: 6px;\n  margin-bottom: 9px;\n  position: relative;\n  background-color: white;\n  border-radius: 6px;\n  z-index: 1;\n  transform-origin: 0 0;\n  transition: 0.4s;\n}\n.header .responsive-nav.is-active span:nth-child(1) {\n  transform: translate(0px, -2px) rotate(45deg);\n}\n.header .responsive-nav.is-active span:nth-child(2) {\n  opacity: 0;\n  transform: translateX(15px);\n}\n.header .responsive-nav.is-active span:nth-child(3) {\n  transform: translate(-3px, 3px) rotate(-45deg);\n}\n\n.mobile-nav {\n  display: none;\n}\n\n.mobile-nav.is-active {\n  grid-column: 1/3;\n  grid-row: 2/3;\n  height: 100%;\n  width: 100%;\n  background-color: rgb(244, 238, 238);\n  font-size: 2rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.45rem;\n  padding: 1rem;\n  -webkit-animation: fade 0.2s;\n          animation: fade 0.2s;\n}\n.mobile-nav.is-active .nav-element:hover {\n  transform: scale(1.05);\n  cursor: pointer;\n}\n.mobile-nav.is-active .links .ig-img {\n  width: 30px;\n}\n.mobile-nav.is-active .links .ig-img:hover {\n  cursor: pointer;\n  transform: scale(1.03);\n}\n.mobile-nav.is-active .links .github-img {\n  width: 60px;\n}\n.mobile-nav.is-active .links .github-img:hover {\n  cursor: pointer;\n  transform: scale(1.03);\n}\n\n@-webkit-keyframes fade {\n  100% {\n    transform: scale(1);\n  }\n  0% {\n    transform: scale(0.1);\n  }\n}\n\n@keyframes fade {\n  100% {\n    transform: scale(1);\n  }\n  0% {\n    transform: scale(0.1);\n  }\n}\n.nav-bar {\n  background-color: rgb(244, 238, 238);\n  font-size: 1.35rem;\n  grid-column: 1;\n  grid-row: 2/4;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  padding: 1rem;\n  height: 100%;\n  width: 160px;\n}\n.nav-bar .nav-element:hover {\n  transform: scale(1.05);\n  cursor: pointer;\n}\n.nav-bar .links .ig-img {\n  width: 30px;\n}\n.nav-bar .links .ig-img:hover {\n  cursor: pointer;\n  transform: scale(1.03);\n}\n.nav-bar .links .github-img {\n  width: 60px;\n}\n.nav-bar .links .github-img:hover {\n  cursor: pointer;\n  transform: scale(1.03);\n}\n\n.main {\n  grid-column: 2/4;\n  grid-row: 2/4;\n}\n\n.main.shrink {\n  grid-row: 3/4;\n  padding-top: 2rem;\n}\n\n.all-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  padding: 2rem;\n}\n\n.task-el {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-top: 1rem;\n  width: 450px;\n  height: 50px;\n  background-color: rgb(244, 238, 238);\n  border-radius: 20px;\n  padding: 0 0.7rem;\n}\n.task-el .is-done {\n  height: 25px;\n  width: 25px;\n  margin: 1rem;\n}\n.task-el .show-btn {\n  margin-left: auto;\n  color: white;\n  background-color: red;\n  padding: 0.4rem;\n  border-radius: 10px;\n  font-weight: 600;\n}\n\n.add-task-el {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  margin-top: 1rem;\n  width: 450px;\n  height: 50px;\n  background-color: rgb(244, 238, 238);\n  border-radius: 20px;\n  padding: 0 0.7rem;\n}\n.add-task-el .new-btn {\n  background-color: rgb(221, 76, 61);\n  color: white;\n  background-color: red;\n  padding: 0.4rem;\n  border-radius: 10px;\n  font-weight: 600;\n}\n\n.btn {\n  cursor: pointer;\n}\n\n.btn:hover {\n  transform: scale(1.05);\n}\n\n.modal {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 1.3rem;\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 400px;\n  height: 50%;\n  border-radius: 20px;\n  background-color: gray;\n}\n.modal .text-form {\n  padding: 9px;\n  font-size: 22px;\n  border-width: 0px;\n  border-color: #ed0000;\n  background-color: #ffffff;\n  color: #000000;\n  border-style: solid;\n  border-radius: 30px;\n  box-shadow: 0px 0px 8px rgba(66, 66, 66, 0.2);\n  text-shadow: 0px 0px 0px rgba(66, 66, 66, 0.75);\n  margin-top: 1rem;\n}\n.modal .description-form {\n  height: 100px;\n  resize: none;\n}\n.modal .title-form {\n  font-size: 1.4rem;\n}\n.modal .date-form {\n  padding: 9px;\n  font-size: 22px;\n  border-width: 0px;\n  border-color: #ed0000;\n  background-color: #ffffff;\n  color: #000000;\n  border-style: solid;\n  border-radius: 30px;\n  box-shadow: 0px 0px 8px rgba(66, 66, 66, 0.2);\n  text-shadow: 0px 0px 0px rgba(66, 66, 66, 0.75);\n  margin-top: 1rem;\n}\n.modal .important-form {\n  -webkit-user-select: none; /* Safari */\n  -ms-user-select: none; /* IE 10 and IE 11 */\n  -moz-user-select: none;\n       user-select: none; /* Standard syntax */\n  width: 210px;\n  height: 40px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.7rem;\n  font-weight: 600;\n  cursor: pointer;\n}\n.modal .not-important {\n  color: #ed0000;\n}\n.modal .important {\n  color: #02f32e;\n}\n.modal .close-modal {\n  display: inline-block;\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  cursor: pointer;\n  width: 30px;\n  height: 30px;\n}\n.modal .line {\n  position: absolute;\n  width: 100%;\n  height: 5px;\n  background-color: white;\n  transition: transform 0.2s ease;\n}\n.modal .line:first-child {\n  transform: rotate(45deg);\n}\n.modal .line:last-child {\n  transform: rotate(-45deg);\n}\n.modal .submit-btn {\n  color: rgb(254, 254, 254);\n  font-weight: 600;\n  background-color: rgb(221, 76, 61);\n  padding: 0.5rem 5rem;\n  border-radius: 20px;\n  margin-top: auto;\n  margin-bottom: 1rem;\n}\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}/*# sourceMappingURL=style.css.map */@media only screen and (min-width: 701px) {\n  .responsive-nav {\n    display: none;\n  }\n}@media only screen and (max-width: 700px) {\n  .nav-bar {\n    display: none;\n  }\n  .task-el {\n    width: 300px;\n  }\n  .add-task-el {\n    width: 300px;\n  }\n  .main {\n    grid-column: 1/4;\n  }\n}", "",{"version":3,"sources":["webpack://./src/style.scss","webpack://./src/style.css","<no source>"],"names":[],"mappings":"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","sourcesContent":[null,"body {\n  font-family: \"Poppins\", sans-serif;\n}\n\n#content {\n  font-family: \"Poppins\", sans-serif;\n  height: 100vh;\n  display: grid;\n  grid-template-columns: 1fr 10fr;\n  grid-template-rows: 100px 1fr 1fr;\n}\n\n.header {\n  grid-column: 1/3;\n  background-color: rgb(221, 76, 61);\n  padding: 1.7rem;\n  font-size: 2.3rem;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n}\n.header .responsive-nav {\n  margin-left: auto;\n  margin-top: 5px;\n}\n.header .responsive-nav > * {\n  display: block;\n  width: 50px;\n  height: 6px;\n  margin-bottom: 9px;\n  position: relative;\n  background-color: white;\n  border-radius: 6px;\n  z-index: 1;\n  transform-origin: 0 0;\n  transition: 0.4s;\n}\n.header .responsive-nav.is-active span:nth-child(1) {\n  transform: translate(0px, -2px) rotate(45deg);\n}\n.header .responsive-nav.is-active span:nth-child(2) {\n  opacity: 0;\n  transform: translateX(15px);\n}\n.header .responsive-nav.is-active span:nth-child(3) {\n  transform: translate(-3px, 3px) rotate(-45deg);\n}\n\n.mobile-nav {\n  display: none;\n}\n\n.mobile-nav.is-active {\n  grid-column: 1/3;\n  grid-row: 2/3;\n  height: 100%;\n  width: 100%;\n  background-color: rgb(244, 238, 238);\n  font-size: 2rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.45rem;\n  padding: 1rem;\n  -webkit-animation: fade 0.2s;\n          animation: fade 0.2s;\n}\n.mobile-nav.is-active .nav-element:hover {\n  transform: scale(1.05);\n  cursor: pointer;\n}\n.mobile-nav.is-active .links .ig-img {\n  width: 30px;\n}\n.mobile-nav.is-active .links .ig-img:hover {\n  cursor: pointer;\n  transform: scale(1.03);\n}\n.mobile-nav.is-active .links .github-img {\n  width: 60px;\n}\n.mobile-nav.is-active .links .github-img:hover {\n  cursor: pointer;\n  transform: scale(1.03);\n}\n\n@-webkit-keyframes fade {\n  100% {\n    transform: scale(1);\n  }\n  0% {\n    transform: scale(0.1);\n  }\n}\n\n@keyframes fade {\n  100% {\n    transform: scale(1);\n  }\n  0% {\n    transform: scale(0.1);\n  }\n}\n.nav-bar {\n  background-color: rgb(244, 238, 238);\n  font-size: 1.35rem;\n  grid-column: 1;\n  grid-row: 2/4;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  padding: 1rem;\n  height: 100%;\n  width: 160px;\n}\n.nav-bar .nav-element:hover {\n  transform: scale(1.05);\n  cursor: pointer;\n}\n.nav-bar .links .ig-img {\n  width: 30px;\n}\n.nav-bar .links .ig-img:hover {\n  cursor: pointer;\n  transform: scale(1.03);\n}\n.nav-bar .links .github-img {\n  width: 60px;\n}\n.nav-bar .links .github-img:hover {\n  cursor: pointer;\n  transform: scale(1.03);\n}\n\n.main {\n  grid-column: 2/4;\n  grid-row: 2/4;\n}\n\n.main.shrink {\n  grid-row: 3/4;\n  padding-top: 2rem;\n}\n\n.all-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  padding: 2rem;\n}\n\n.task-el {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-top: 1rem;\n  width: 450px;\n  height: 50px;\n  background-color: rgb(244, 238, 238);\n  border-radius: 20px;\n  padding: 0 0.7rem;\n}\n.task-el .is-done {\n  height: 25px;\n  width: 25px;\n  margin: 1rem;\n}\n.task-el .show-btn {\n  margin-left: auto;\n  color: white;\n  background-color: red;\n  padding: 0.4rem;\n  border-radius: 10px;\n  font-weight: 600;\n}\n\n.add-task-el {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  margin-top: 1rem;\n  width: 450px;\n  height: 50px;\n  background-color: rgb(244, 238, 238);\n  border-radius: 20px;\n  padding: 0 0.7rem;\n}\n.add-task-el .new-btn {\n  background-color: rgb(221, 76, 61);\n  color: white;\n  background-color: red;\n  padding: 0.4rem;\n  border-radius: 10px;\n  font-weight: 600;\n}\n\n.btn {\n  cursor: pointer;\n}\n\n.btn:hover {\n  transform: scale(1.05);\n}\n\n.modal {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 1.3rem;\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 400px;\n  height: 50%;\n  border-radius: 20px;\n  background-color: gray;\n}\n.modal .text-form {\n  padding: 9px;\n  font-size: 22px;\n  border-width: 0px;\n  border-color: #ed0000;\n  background-color: #ffffff;\n  color: #000000;\n  border-style: solid;\n  border-radius: 30px;\n  box-shadow: 0px 0px 8px rgba(66, 66, 66, 0.2);\n  text-shadow: 0px 0px 0px rgba(66, 66, 66, 0.75);\n  margin-top: 1rem;\n}\n.modal .description-form {\n  height: 100px;\n  resize: none;\n}\n.modal .title-form {\n  font-size: 1.4rem;\n}\n.modal .date-form {\n  padding: 9px;\n  font-size: 22px;\n  border-width: 0px;\n  border-color: #ed0000;\n  background-color: #ffffff;\n  color: #000000;\n  border-style: solid;\n  border-radius: 30px;\n  box-shadow: 0px 0px 8px rgba(66, 66, 66, 0.2);\n  text-shadow: 0px 0px 0px rgba(66, 66, 66, 0.75);\n  margin-top: 1rem;\n}\n.modal .important-form {\n  -webkit-user-select: none; /* Safari */\n  -ms-user-select: none; /* IE 10 and IE 11 */\n  -moz-user-select: none;\n       user-select: none; /* Standard syntax */\n  width: 210px;\n  height: 40px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.7rem;\n  font-weight: 600;\n  cursor: pointer;\n}\n.modal .not-important {\n  color: #ed0000;\n}\n.modal .important {\n  color: #02f32e;\n}\n.modal .close-modal {\n  display: inline-block;\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  cursor: pointer;\n  width: 30px;\n  height: 30px;\n}\n.modal .line {\n  position: absolute;\n  width: 100%;\n  height: 5px;\n  background-color: white;\n  transition: transform 0.2s ease;\n}\n.modal .line:first-child {\n  transform: rotate(45deg);\n}\n.modal .line:last-child {\n  transform: rotate(-45deg);\n}\n.modal .submit-btn {\n  color: rgb(254, 254, 254);\n  font-weight: 600;\n  background-color: rgb(221, 76, 61);\n  padding: 0.5rem 5rem;\n  border-radius: 20px;\n  margin-top: auto;\n  margin-bottom: 1rem;\n}\n\n@media only screen and (min-width: 701px) {\n  .responsive-nav {\n    display: none;\n  }\n}\n@media only screen and (max-width: 700px) {\n  .nav-bar {\n    display: none;\n  }\n  .task-el {\n    width: 300px;\n  }\n  .add-task-el {\n    width: 300px;\n  }\n  .main {\n    grid-column: 1/4;\n  }\n}\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}/*# sourceMappingURL=style.css.map */",null],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_group_css_media_queries_loader_lib_index_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/group-css-media-queries-loader/lib/index.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/group-css-media-queries-loader/lib/index.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_group_css_media_queries_loader_lib_index_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_group_css_media_queries_loader_lib_index_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_group_css_media_queries_loader_lib_index_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_group_css_media_queries_loader_lib_index_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/all.js":
/*!********************!*\
  !*** ./src/all.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadAll)
/* harmony export */ });
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ "./src/data.js");
/* harmony import */ var _drawing_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drawing.js */ "./src/drawing.js");





function drawAll(){
    const container = document.createElement('div')
    container.classList.add('all-container')

    const task11 = new _data_js__WEBPACK_IMPORTED_MODULE_0__.Task('task1','des','11-1',true,[])
    const task12 = new _data_js__WEBPACK_IMPORTED_MODULE_0__.Task('task1','des','11-1',true,[])
    const task13 = new _data_js__WEBPACK_IMPORTED_MODULE_0__.Task('task1','des','11-1',true,[])

    
    container.append((0,_drawing_js__WEBPACK_IMPORTED_MODULE_1__.drawAddTaskEl)())
    for(let i=0;i<_data_js__WEBPACK_IMPORTED_MODULE_0__.Task.tasks.length;i++){
        const taskEl = (0,_drawing_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_data_js__WEBPACK_IMPORTED_MODULE_0__.Task.tasks[i])
        
        container.append(taskEl)

    }



    return container
}





function loadAll(){
    const main = document.querySelector("#main")
    main.textContent=''
    main.appendChild(drawAll())
}

/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project),
/* harmony export */   "Task": () => (/* binding */ Task),
/* harmony export */   "addToProject": () => (/* binding */ addToProject),
/* harmony export */   "deleteFromProject": () => (/* binding */ deleteFromProject)
/* harmony export */ });

class Project{
    static projects = []
    constructor(title,description,tasks){
        this._title = title
        this._description = description
        this._tasks = tasks
        Project.projects.push(this)
    }

    get title(){return this._title}
    get description(){return this._description}
    get tasks(){return this._tasks}


    set title(title){this._title=title}
    set description(description){ this._description=description}
    set tasks(tasks){this._tasks=tasks}
    
}

//One task can only belong to one project
class Task{
    static tasks = []

    constructor(title,description,date,important,project){
        this._title = title
        this._description = description
        this._date = date
        this._important = important
        this._project = project

        Task.tasks.push(this)
    }

    get title(){ return this._title}
    get description(){ return this._description}
    get date(){ return this._date}
    get important(){ return this._important}
    get project(){ return this._project}

    set title(title){this._title=title}
    set description(description){ this._description=description}
    set date(date){this_date = date}
    set important(important){this._important = important}
    set project(project){ this._project=project}


    

}

//???
function addToProject(taskTitle,projectTitle){
    const task = Task.tasks.find(t => t._title===taskTitle)
    task._project = projectTitle
    const project = Project.projects.find(p => p._title===projectTitle)
    project._tasks.push(taskTitle)
    console.log("added ",taskTitle,"to ",projectTitle)

}

function deleteFromProject(taskTitle,projectTitle){
    const task = Task.tasks.find(t => t._title===taskTitle)
    task._project=''
    const project = Project.projects.find(p => p._title===projectTitle)
    project._tasks = project._tasks.filter(t =>t!==taskTitle)
    console.log("deleted ",taskTitle,"from ",projectTitle)
}



/***/ }),

/***/ "./src/drawing.js":
/*!************************!*\
  !*** ./src/drawing.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ drawTask),
/* harmony export */   "drawAddTaskEl": () => (/* binding */ drawAddTaskEl)
/* harmony export */ });
/* harmony import */ var _modals_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modals.js */ "./src/modals.js");



function drawTask(task){
    const taskEl = document.createElement('div')
    taskEl.classList.add('task-el')
        const isDone = document.createElement('input')
        isDone.type = 'checkbox'
        isDone.classList.add('is-done')
        taskEl.appendChild(isDone)

        const taskName = document.createElement('div')
        taskName.classList.add('task-title')
        console.log(task.name)
        taskName.textContent = task.title
        taskEl.appendChild(taskName)

        const taskDate = document.createElement('div')
        taskDate.classList.add('task-date')
        taskDate.textContent = task.date
        taskEl.appendChild(taskDate)

        const showBtn = document.createElement('div')
        showBtn.classList.add('show-btn')
        showBtn.classList.add('btn')
        showBtn.textContent = 'SHOW'
        taskEl.appendChild(showBtn)



    return taskEl
}

function drawAddTaskEl(){
    const taskEl = document.createElement('div')
    taskEl.classList.add('add-task-el')
        const newBtn = document.createElement('div')
        newBtn.classList.add('new-btn')
        newBtn.classList.add('btn')
        newBtn.textContent="NEW"
        taskEl.appendChild(newBtn)

        newBtn.addEventListener('click',drawAddModal)

    return taskEl
}

function drawAddModal(){
    const main = document.querySelector("#main")
    console.log("xxxx")
    main.appendChild((0,_modals_js__WEBPACK_IMPORTED_MODULE_0__.addModal)())
    
}

/***/ }),

/***/ "./src/modals.js":
/*!***********************!*\
  !*** ./src/modals.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addModal": () => (/* binding */ addModal),
/* harmony export */   "showModal": () => (/* binding */ showModal)
/* harmony export */ });
function addModal(){
    const modal = document.createElement('div')
    modal.classList.add('modal')
    modal.classList.add('add-modal')
    modal.style.display='flex'
    console.log('crerated')


        const closeModal = document.createElement('div')
        closeModal.classList.add('close-modal')
        modal.appendChild(closeModal)
            const lX = document.createElement('span')
            const rX = document.createElement('span')
            lX.classList.add('line')
            rX.classList.add('line')
            closeModal.appendChild(lX)
            closeModal.appendChild(rX)

            closeModal.addEventListener('click',()=>{
               // modal.style.display='none'
                const main = document.querySelector("#main")
                main.removeChild(modal)
            })  


        const titleForm = document.createElement('input');
        titleForm.type = 'text';
        titleForm.placeholder = 'Title';
        titleForm.classList.add('title-form');
        titleForm.classList.add('text-form');
        modal.appendChild(titleForm);
    
        const descriptionForm = document.createElement('textarea');
        descriptionForm.placeholder = 'Description';
        descriptionForm.classList.add('description-form');
        descriptionForm.classList.add('text-form');
        modal.appendChild(descriptionForm);
    
        const dateForm = document.createElement('input');
        dateForm.type = 'date';
        dateForm.classList.add('date-form');
        modal.appendChild(dateForm);
    

        
        const importantForm = document.createElement('div')
        importantForm.classList.add('important-form')
        importantForm.classList.add('not-important')
        importantForm.textContent = 'not important'
        importantForm.dataset.important=false
        importantForm.addEventListener('click',()=>{
            importantForm.classList.toggle('not-important')
            importantForm.classList.toggle('important')

            if(importantForm.classList.contains('important')){
                importantForm.textContent = 'important'
            }
            else if(importantForm.classList.contains('not-important')){
                importantForm.textContent = 'not important'
            }


        })
        modal.appendChild(importantForm)



        const submitBtn=document.createElement('div')
        submitBtn.innerText = 'SUBMIT'
        submitBtn.classList.add('btn')
        submitBtn.classList.add('submit-btn')
        modal.appendChild(submitBtn)
    
    
   



    return modal
}

function showModal(){

}

/***/ }),

/***/ "./src/images/githublogo.png":
/*!***********************************!*\
  !*** ./src/images/githublogo.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3431e8f4c131607d5da5.png";

/***/ }),

/***/ "./src/images/iglogo.png":
/*!*******************************!*\
  !*** ./src/images/iglogo.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "82b7427cf5bb2f702053.png";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _all_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./all.js */ "./src/all.js");
/* harmony import */ var _images_githublogo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/githublogo.png */ "./src/images/githublogo.png");
/* harmony import */ var _images_iglogo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/iglogo.png */ "./src/images/iglogo.png");






const content = document.querySelector("#content")

const GithubImg = new Image()
const IgImg = new Image()
GithubImg.src = _images_githublogo_png__WEBPACK_IMPORTED_MODULE_2__
IgImg.src = _images_iglogo_png__WEBPACK_IMPORTED_MODULE_3__

function createHeader(){
    const header = document.createElement('div')
    header.classList.add("header")
        header.textContent="To do List"



    //reponsive navbar//
    const reponsiveNav = document.createElement('div')
    reponsiveNav.classList.add('responsive-nav')
            for(let i=0;i<3;i++){
                const line = document.createElement('span')
                //line.classList.add('line')
                reponsiveNav.appendChild(line)
            }
            let NavBarToClone = createNavBar()
            const mobileNav = NavBarToClone.cloneNode(true)
            mobileNav.id="mobile-nav"
            mobileNav.classList.add('mobile-nav')
            mobileNav.classList.remove("nav-bar")
            

            content.appendChild(mobileNav)

            


            



            header.appendChild(reponsiveNav)



    return header
}

function createNavBar(){
    const navBar = document.createElement('div')
    navBar.classList.add('nav-bar')

        const navAll = document.createElement('div')
        navAll.classList.add('nav-element')
        navBar.appendChild(navAll)
            navAll.textContent='All'

        const navToday = document.createElement('div')
        navToday.classList.add('nav-element')
        navBar.appendChild(navToday)
            navToday.textContent='Today'    

        const navThisWeek = document.createElement('div')
        navThisWeek.classList.add('nav-element')
        navBar.appendChild(navThisWeek)
            navThisWeek.textContent='This week'
            
        const navOverdue = document.createElement('div')
        navOverdue.classList.add('nav-element')
        navBar.appendChild(navOverdue)
        navOverdue.textContent='Overdue'

        const navProjects = document.createElement('div')
        navProjects.classList.add('nav-element')
        navBar.appendChild(navProjects)
        navProjects.textContent='Projects'

        const navTrash = document.createElement('div')
        navTrash.classList.add('nav-element')
        navBar.appendChild(navTrash)
        navTrash.textContent='Trash'


        const footer = document.createElement('div')
        footer.classList.add('footer')
        navBar.appendChild(footer)
            const links = document.createElement('div')
            navBar.appendChild(links)
            links.classList.add('links')
                links.appendChild(GithubImg)
                links.appendChild(IgImg)
                GithubImg.classList.add('github-img')
                GithubImg.classList.add('link')
                IgImg.classList.add('ig-img')
                IgImg.classList.add('link')
                GithubImg.addEventListener('click',()=>{
                    window.open("https://github.com/Mttt7/restaurantpage","_self")
                })
                IgImg.addEventListener('click',()=>{
                    window.open("https://www.instagram.com/mtt.jpeg/","_self")
                })


        
        



    return navBar
}

function createMain(){
    const main = document.createElement('div')
    main.classList.add("main")
    main.id="main"


    const reponsiveNav = document.querySelector(".responsive-nav")
    const mobileNav =document.querySelector("#mobile-nav")
    reponsiveNav.addEventListener('click',function(){
                this.classList.toggle('is-active')
                mobileNav.classList.toggle('is-active')
                const main = document.querySelector("#main")
                main.classList.toggle('shrink')
            })


    return main

}



function InitializeWebsite(){
    content.appendChild(createHeader())
    content.appendChild(createNavBar())
    content.appendChild(createMain())
    
}

InitializeWebsite()
;(0,_all_js__WEBPACK_IMPORTED_MODULE_1__["default"])()


console.log('working fine')
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsZ0RBQWdELHlDQUF5QyxHQUFHLGNBQWMseUNBQXlDLGtCQUFrQixrQkFBa0Isb0NBQW9DLHNDQUFzQyxHQUFHLGFBQWEscUJBQXFCLHVDQUF1QyxvQkFBb0Isc0JBQXNCLHFCQUFxQixrQkFBa0Isd0JBQXdCLEdBQUcsMkJBQTJCLHNCQUFzQixvQkFBb0IsR0FBRywrQkFBK0IsbUJBQW1CLGdCQUFnQixnQkFBZ0IsdUJBQXVCLHVCQUF1Qiw0QkFBNEIsdUJBQXVCLGVBQWUsMEJBQTBCLHFCQUFxQixHQUFHLHVEQUF1RCxrREFBa0QsR0FBRyx1REFBdUQsZUFBZSxnQ0FBZ0MsR0FBRyx1REFBdUQsbURBQW1ELEdBQUcsaUJBQWlCLGtCQUFrQixHQUFHLDJCQUEyQixxQkFBcUIsa0JBQWtCLGlCQUFpQixnQkFBZ0IseUNBQXlDLG9CQUFvQixrQkFBa0IsMkJBQTJCLHdCQUF3QixpQkFBaUIsa0JBQWtCLGlDQUFpQyxpQ0FBaUMsR0FBRyw0Q0FBNEMsMkJBQTJCLG9CQUFvQixHQUFHLHdDQUF3QyxnQkFBZ0IsR0FBRyw4Q0FBOEMsb0JBQW9CLDJCQUEyQixHQUFHLDRDQUE0QyxnQkFBZ0IsR0FBRyxrREFBa0Qsb0JBQW9CLDJCQUEyQixHQUFHLDZCQUE2QixVQUFVLDBCQUEwQixLQUFLLFFBQVEsNEJBQTRCLEtBQUssR0FBRyxxQkFBcUIsVUFBVSwwQkFBMEIsS0FBSyxRQUFRLDRCQUE0QixLQUFLLEdBQUcsWUFBWSx5Q0FBeUMsdUJBQXVCLG1CQUFtQixrQkFBa0Isa0JBQWtCLDJCQUEyQixnQkFBZ0Isa0JBQWtCLGlCQUFpQixpQkFBaUIsR0FBRywrQkFBK0IsMkJBQTJCLG9CQUFvQixHQUFHLDJCQUEyQixnQkFBZ0IsR0FBRyxpQ0FBaUMsb0JBQW9CLDJCQUEyQixHQUFHLCtCQUErQixnQkFBZ0IsR0FBRyxxQ0FBcUMsb0JBQW9CLDJCQUEyQixHQUFHLFdBQVcscUJBQXFCLGtCQUFrQixHQUFHLGtCQUFrQixrQkFBa0Isc0JBQXNCLEdBQUcsb0JBQW9CLGtCQUFrQiwyQkFBMkIsd0JBQXdCLGdDQUFnQyxrQkFBa0IsR0FBRyxjQUFjLGtCQUFrQix3QkFBd0IsY0FBYyxxQkFBcUIsaUJBQWlCLGlCQUFpQix5Q0FBeUMsd0JBQXdCLHNCQUFzQixHQUFHLHFCQUFxQixpQkFBaUIsZ0JBQWdCLGlCQUFpQixHQUFHLHNCQUFzQixzQkFBc0IsaUJBQWlCLDBCQUEwQixvQkFBb0Isd0JBQXdCLHFCQUFxQixHQUFHLGtCQUFrQixrQkFBa0Isd0JBQXdCLDRCQUE0QixjQUFjLHFCQUFxQixpQkFBaUIsaUJBQWlCLHlDQUF5Qyx3QkFBd0Isc0JBQXNCLEdBQUcseUJBQXlCLHVDQUF1QyxpQkFBaUIsMEJBQTBCLG9CQUFvQix3QkFBd0IscUJBQXFCLEdBQUcsVUFBVSxvQkFBb0IsR0FBRyxnQkFBZ0IsMkJBQTJCLEdBQUcsWUFBWSxrQkFBa0IsMkJBQTJCLHdCQUF3QixnQ0FBZ0MsZ0JBQWdCLG9CQUFvQixjQUFjLGFBQWEscUNBQXFDLGlCQUFpQixnQkFBZ0Isd0JBQXdCLDJCQUEyQixHQUFHLHFCQUFxQixpQkFBaUIsb0JBQW9CLHNCQUFzQiwwQkFBMEIsOEJBQThCLG1CQUFtQix3QkFBd0Isd0JBQXdCLGtEQUFrRCxvREFBb0QscUJBQXFCLEdBQUcsNEJBQTRCLGtCQUFrQixpQkFBaUIsR0FBRyxzQkFBc0Isc0JBQXNCLEdBQUcscUJBQXFCLGlCQUFpQixvQkFBb0Isc0JBQXNCLDBCQUEwQiw4QkFBOEIsbUJBQW1CLHdCQUF3Qix3QkFBd0Isa0RBQWtELG9EQUFvRCxxQkFBcUIsR0FBRywwQkFBMEIsK0JBQStCLHVDQUF1QyxnREFBZ0QsNEJBQTRCLHNDQUFzQyxpQkFBaUIsa0JBQWtCLDJCQUEyQix3QkFBd0IsNEJBQTRCLHNCQUFzQixxQkFBcUIsb0JBQW9CLEdBQUcseUJBQXlCLG1CQUFtQixHQUFHLHFCQUFxQixtQkFBbUIsR0FBRyx1QkFBdUIsMEJBQTBCLHVCQUF1QixjQUFjLGdCQUFnQixvQkFBb0IsZ0JBQWdCLGlCQUFpQixHQUFHLGdCQUFnQix1QkFBdUIsZ0JBQWdCLGdCQUFnQiw0QkFBNEIsb0NBQW9DLEdBQUcsNEJBQTRCLDZCQUE2QixHQUFHLDJCQUEyQiw4QkFBOEIsR0FBRyxzQkFBc0IsOEJBQThCLHFCQUFxQix1Q0FBdUMseUJBQXlCLHdCQUF3QixxQkFBcUIsd0JBQXdCLEdBQUcsMGZBQTBmLGNBQWMsZUFBZSxjQUFjLG9CQUFvQixrQkFBa0IsNkJBQTZCLEdBQUcsaUpBQWlKLG1CQUFtQixHQUFHLFVBQVUsbUJBQW1CLEdBQUcsWUFBWSxxQkFBcUIsR0FBRyxtQkFBbUIsaUJBQWlCLEdBQUcsNkRBQTZELGtCQUFrQixrQkFBa0IsR0FBRyxXQUFXLDhCQUE4QixzQkFBc0IsR0FBRyxnRkFBZ0YscUJBQXFCLG9CQUFvQixLQUFLLEdBQUcsMkNBQTJDLGNBQWMsb0JBQW9CLEtBQUssY0FBYyxtQkFBbUIsS0FBSyxrQkFBa0IsbUJBQW1CLEtBQUssV0FBVyx1QkFBdUIsS0FBSyxHQUFHLE9BQU8sMkhBQTJILFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxZQUFZLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sWUFBWSxZQUFZLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsWUFBWSxZQUFZLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxZQUFZLFlBQVksV0FBVyxNQUFNLE1BQU0sWUFBWSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLHFCQUFxQixzQkFBc0IsV0FBVyxzQkFBc0IsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxN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QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOzs7QUFHYjs7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9EQUFPOzs7QUFHUCwyQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3M/NDI1NCIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2FsbC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9kYXRhLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2RyYXdpbmcuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbW9kYWxzLmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDEwZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IDFmciAxZnI7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZ3JpZC1jb2x1bW46IDEvMztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjEsIDc2LCA2MSk7XFxuICBwYWRkaW5nOiAxLjdyZW07XFxuICBmb250LXNpemU6IDIuM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmhlYWRlciAucmVzcG9uc2l2ZS1uYXYge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxufVxcbi5oZWFkZXIgLnJlc3BvbnNpdmUtbmF2ID4gKiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiA2cHg7XFxuICBtYXJnaW4tYm90dG9tOiA5cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIHotaW5kZXg6IDE7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbn1cXG4uaGVhZGVyIC5yZXNwb25zaXZlLW5hdi5pcy1hY3RpdmUgc3BhbjpudGgtY2hpbGQoMSkge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAtMnB4KSByb3RhdGUoNDVkZWcpO1xcbn1cXG4uaGVhZGVyIC5yZXNwb25zaXZlLW5hdi5pcy1hY3RpdmUgc3BhbjpudGgtY2hpbGQoMikge1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNXB4KTtcXG59XFxuLmhlYWRlciAucmVzcG9uc2l2ZS1uYXYuaXMtYWN0aXZlIHNwYW46bnRoLWNoaWxkKDMpIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0zcHgsIDNweCkgcm90YXRlKC00NWRlZyk7XFxufVxcblxcbi5tb2JpbGUtbmF2IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5tb2JpbGUtbmF2LmlzLWFjdGl2ZSB7XFxuICBncmlkLWNvbHVtbjogMS8zO1xcbiAgZ3JpZC1yb3c6IDIvMztcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NCwgMjM4LCAyMzgpO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjQ1cmVtO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlIDAuMnM7XFxuICAgICAgICAgIGFuaW1hdGlvbjogZmFkZSAwLjJzO1xcbn1cXG4ubW9iaWxlLW5hdi5pcy1hY3RpdmUgLm5hdi1lbGVtZW50OmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5tb2JpbGUtbmF2LmlzLWFjdGl2ZSAubGlua3MgLmlnLWltZyB7XFxuICB3aWR0aDogMzBweDtcXG59XFxuLm1vYmlsZS1uYXYuaXMtYWN0aXZlIC5saW5rcyAuaWctaW1nOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XFxufVxcbi5tb2JpbGUtbmF2LmlzLWFjdGl2ZSAubGlua3MgLmdpdGh1Yi1pbWcge1xcbiAgd2lkdGg6IDYwcHg7XFxufVxcbi5tb2JpbGUtbmF2LmlzLWFjdGl2ZSAubGlua3MgLmdpdGh1Yi1pbWc6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGUge1xcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICB9XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC4xKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlIHtcXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgfVxcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMSk7XFxuICB9XFxufVxcbi5uYXYtYmFyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDQsIDIzOCwgMjM4KTtcXG4gIGZvbnQtc2l6ZTogMS4zNXJlbTtcXG4gIGdyaWQtY29sdW1uOiAxO1xcbiAgZ3JpZC1yb3c6IDIvNDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjVyZW07XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDE2MHB4O1xcbn1cXG4ubmF2LWJhciAubmF2LWVsZW1lbnQ6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLm5hdi1iYXIgLmxpbmtzIC5pZy1pbWcge1xcbiAgd2lkdGg6IDMwcHg7XFxufVxcbi5uYXYtYmFyIC5saW5rcyAuaWctaW1nOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XFxufVxcbi5uYXYtYmFyIC5saW5rcyAuZ2l0aHViLWltZyB7XFxuICB3aWR0aDogNjBweDtcXG59XFxuLm5hdi1iYXIgLmxpbmtzIC5naXRodWItaW1nOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XFxufVxcblxcbi5tYWluIHtcXG4gIGdyaWQtY29sdW1uOiAyLzQ7XFxuICBncmlkLXJvdzogMi80O1xcbn1cXG5cXG4ubWFpbi5zaHJpbmsge1xcbiAgZ3JpZC1yb3c6IDMvNDtcXG4gIHBhZGRpbmctdG9wOiAycmVtO1xcbn1cXG5cXG4uYWxsLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBwYWRkaW5nOiAycmVtO1xcbn1cXG5cXG4udGFzay1lbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICB3aWR0aDogNDUwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ0LCAyMzgsIDIzOCk7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgcGFkZGluZzogMCAwLjdyZW07XFxufVxcbi50YXNrLWVsIC5pcy1kb25lIHtcXG4gIGhlaWdodDogMjVweDtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgbWFyZ2luOiAxcmVtO1xcbn1cXG4udGFzay1lbCAuc2hvdy1idG4ge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBwYWRkaW5nOiAwLjRyZW07XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLmFkZC10YXNrLWVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgd2lkdGg6IDQ1MHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NCwgMjM4LCAyMzgpO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIHBhZGRpbmc6IDAgMC43cmVtO1xcbn1cXG4uYWRkLXRhc2stZWwgLm5ldy1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMSwgNzYsIDYxKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIHBhZGRpbmc6IDAuNHJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uYnRuIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmJ0bjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgZ2FwOiAxLjNyZW07XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBsZWZ0OiA1MCU7XFxuICB0b3A6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgaGVpZ2h0OiA1MCU7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG59XFxuLm1vZGFsIC50ZXh0LWZvcm0ge1xcbiAgcGFkZGluZzogOXB4O1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbiAgYm9yZGVyLXdpZHRoOiAwcHg7XFxuICBib3JkZXItY29sb3I6ICNlZDAwMDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgY29sb3I6ICMwMDAwMDA7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggOHB4IHJnYmEoNjYsIDY2LCA2NiwgMC4yKTtcXG4gIHRleHQtc2hhZG93OiAwcHggMHB4IDBweCByZ2JhKDY2LCA2NiwgNjYsIDAuNzUpO1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG59XFxuLm1vZGFsIC5kZXNjcmlwdGlvbi1mb3JtIHtcXG4gIGhlaWdodDogMTAwcHg7XFxuICByZXNpemU6IG5vbmU7XFxufVxcbi5tb2RhbCAudGl0bGUtZm9ybSB7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG59XFxuLm1vZGFsIC5kYXRlLWZvcm0ge1xcbiAgcGFkZGluZzogOXB4O1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbiAgYm9yZGVyLXdpZHRoOiAwcHg7XFxuICBib3JkZXItY29sb3I6ICNlZDAwMDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgY29sb3I6ICMwMDAwMDA7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggOHB4IHJnYmEoNjYsIDY2LCA2NiwgMC4yKTtcXG4gIHRleHQtc2hhZG93OiAwcHggMHB4IDBweCByZ2JhKDY2LCA2NiwgNjYsIDAuNzUpO1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG59XFxuLm1vZGFsIC5pbXBvcnRhbnQtZm9ybSB7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOyAvKiBTYWZhcmkgKi9cXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTsgLyogSUUgMTAgYW5kIElFIDExICovXFxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICB1c2VyLXNlbGVjdDogbm9uZTsgLyogU3RhbmRhcmQgc3ludGF4ICovXFxuICB3aWR0aDogMjEwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLm1vZGFsIC5ub3QtaW1wb3J0YW50IHtcXG4gIGNvbG9yOiAjZWQwMDAwO1xcbn1cXG4ubW9kYWwgLmltcG9ydGFudCB7XFxuICBjb2xvcjogIzAyZjMyZTtcXG59XFxuLm1vZGFsIC5jbG9zZS1tb2RhbCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDE1cHg7XFxuICByaWdodDogMTVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbn1cXG4ubW9kYWwgLmxpbmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZTtcXG59XFxuLm1vZGFsIC5saW5lOmZpcnN0LWNoaWxkIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG59XFxuLm1vZGFsIC5saW5lOmxhc3QtY2hpbGQge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG59XFxuLm1vZGFsIC5zdWJtaXQtYnRuIHtcXG4gIGNvbG9yOiByZ2IoMjU0LCAyNTQsIDI1NCk7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMSwgNzYsIDYxKTtcXG4gIHBhZGRpbmc6IDAuNXJlbSA1cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCxcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBmb250OiBpbmhlcml0O1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSxcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcblxcbm9sLCB1bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5ibG9ja3F1b3RlLCBxIHtcXG4gIHF1b3Rlczogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBjb250ZW50OiBub25lO1xcbn1cXG5cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XFxufS8qIyBzb3VyY2VNYXBwaW5nVVJMPXN0eWxlLmNzcy5tYXAgKi9AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcwMXB4KSB7XFxuICAucmVzcG9uc2l2ZS1uYXYge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XFxuICAubmF2LWJhciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICAudGFzay1lbCB7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gIH1cXG4gIC5hZGQtdGFzay1lbCB7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gIH1cXG4gIC5tYWluIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvNDtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIixcIjxubyBzb3VyY2U+XCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUtBO0VBQ0ksa0NBQUE7QUNKSjs7QURPQTtFQUNJLGtDQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSwrQkFBQTtFQUNBLGlDQUFBO0FDSko7O0FET0E7RUFDSSxnQkFBQTtFQUNBLGtDQWxCSTtFQW1C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QTtFQUNDLGdCQUFBO0FDbElEOztBRG9JQTtFQUNDLFlBQUE7QUNqSUQ7O0FEbUlBOztFQUVDLFdBQUE7RUFDQSxhQUFBO0FDaElEOztBRGtJQTtFQUNDLHlCQUFBO0VBQ0EsaUJBQUE7QUMvSEQsQ0FBQSxvQ0FBQSxDQzNXQTtFRm1aSTtJQUNJLGFBQUE7RUN6R047QUEyREYsQ0N0V0E7RUYyWkk7SUFDSSxhQUFBO0VDNUdOO0VEK0dFO0lBQ0ksWUFBQTtFQzdHTjtFRCtHRTtJQUNJLFlBQUE7RUM3R047RURpSEU7SUFDSSxnQkFBQTtFQy9HTjtBQTBERlwiLFwic291cmNlc0NvbnRlbnRcIjpbbnVsbCxcImJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMTBmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHggMWZyIDFmcjtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBncmlkLWNvbHVtbjogMS8zO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMSwgNzYsIDYxKTtcXG4gIHBhZGRpbmc6IDEuN3JlbTtcXG4gIGZvbnQtc2l6ZTogMi4zcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uaGVhZGVyIC5yZXNwb25zaXZlLW5hdiB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi10b3A6IDVweDtcXG59XFxuLmhlYWRlciAucmVzcG9uc2l2ZS1uYXYgPiAqIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDUwcHg7XFxuICBoZWlnaHQ6IDZweDtcXG4gIG1hcmdpbi1ib3R0b206IDlweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgei1pbmRleDogMTtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxufVxcbi5oZWFkZXIgLnJlc3BvbnNpdmUtbmF2LmlzLWFjdGl2ZSBzcGFuOm50aC1jaGlsZCgxKSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIC0ycHgpIHJvdGF0ZSg0NWRlZyk7XFxufVxcbi5oZWFkZXIgLnJlc3BvbnNpdmUtbmF2LmlzLWFjdGl2ZSBzcGFuOm50aC1jaGlsZCgyKSB7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE1cHgpO1xcbn1cXG4uaGVhZGVyIC5yZXNwb25zaXZlLW5hdi5pcy1hY3RpdmUgc3BhbjpudGgtY2hpbGQoMykge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTNweCwgM3B4KSByb3RhdGUoLTQ1ZGVnKTtcXG59XFxuXFxuLm1vYmlsZS1uYXYge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm1vYmlsZS1uYXYuaXMtYWN0aXZlIHtcXG4gIGdyaWQtY29sdW1uOiAxLzM7XFxuICBncmlkLXJvdzogMi8zO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ0LCAyMzgsIDIzOCk7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDAuNDVyZW07XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGZhZGUgMC4ycztcXG4gICAgICAgICAgYW5pbWF0aW9uOiBmYWRlIDAuMnM7XFxufVxcbi5tb2JpbGUtbmF2LmlzLWFjdGl2ZSAubmF2LWVsZW1lbnQ6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLm1vYmlsZS1uYXYuaXMtYWN0aXZlIC5saW5rcyAuaWctaW1nIHtcXG4gIHdpZHRoOiAzMHB4O1xcbn1cXG4ubW9iaWxlLW5hdi5pcy1hY3RpdmUgLmxpbmtzIC5pZy1pbWc6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcXG59XFxuLm1vYmlsZS1uYXYuaXMtYWN0aXZlIC5saW5rcyAuZ2l0aHViLWltZyB7XFxuICB3aWR0aDogNjBweDtcXG59XFxuLm1vYmlsZS1uYXYuaXMtYWN0aXZlIC5saW5rcyAuZ2l0aHViLWltZzpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZSB7XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIH1cXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjEpO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGUge1xcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICB9XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC4xKTtcXG4gIH1cXG59XFxuLm5hdi1iYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NCwgMjM4LCAyMzgpO1xcbiAgZm9udC1zaXplOiAxLjM1cmVtO1xcbiAgZ3JpZC1jb2x1bW46IDE7XFxuICBncmlkLXJvdzogMi80O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuNXJlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTYwcHg7XFxufVxcbi5uYXYtYmFyIC5uYXYtZWxlbWVudDpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubmF2LWJhciAubGlua3MgLmlnLWltZyB7XFxuICB3aWR0aDogMzBweDtcXG59XFxuLm5hdi1iYXIgLmxpbmtzIC5pZy1pbWc6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcXG59XFxuLm5hdi1iYXIgLmxpbmtzIC5naXRodWItaW1nIHtcXG4gIHdpZHRoOiA2MHB4O1xcbn1cXG4ubmF2LWJhciAubGlua3MgLmdpdGh1Yi1pbWc6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcXG59XFxuXFxuLm1haW4ge1xcbiAgZ3JpZC1jb2x1bW46IDIvNDtcXG4gIGdyaWQtcm93OiAyLzQ7XFxufVxcblxcbi5tYWluLnNocmluayB7XFxuICBncmlkLXJvdzogMy80O1xcbiAgcGFkZGluZy10b3A6IDJyZW07XFxufVxcblxcbi5hbGwtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIHBhZGRpbmc6IDJyZW07XFxufVxcblxcbi50YXNrLWVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG4gIHdpZHRoOiA0NTBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDQsIDIzOCwgMjM4KTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBwYWRkaW5nOiAwIDAuN3JlbTtcXG59XFxuLnRhc2stZWwgLmlzLWRvbmUge1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgd2lkdGg6IDI1cHg7XFxuICBtYXJnaW46IDFyZW07XFxufVxcbi50YXNrLWVsIC5zaG93LWJ0biB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIHBhZGRpbmc6IDAuNHJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uYWRkLXRhc2stZWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICB3aWR0aDogNDUwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ0LCAyMzgsIDIzOCk7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgcGFkZGluZzogMCAwLjdyZW07XFxufVxcbi5hZGQtdGFzay1lbCAubmV3LWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIxLCA3NiwgNjEpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgcGFkZGluZzogMC40cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5idG4ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYnRuOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxufVxcblxcbi5tb2RhbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBnYXA6IDEuM3JlbTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRvcDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICB3aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IDUwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbn1cXG4ubW9kYWwgLnRleHQtZm9ybSB7XFxuICBwYWRkaW5nOiA5cHg7XFxuICBmb250LXNpemU6IDIycHg7XFxuICBib3JkZXItd2lkdGg6IDBweDtcXG4gIGJvcmRlci1jb2xvcjogI2VkMDAwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICBjb2xvcjogIzAwMDAwMDtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCA4cHggcmdiYSg2NiwgNjYsIDY2LCAwLjIpO1xcbiAgdGV4dC1zaGFkb3c6IDBweCAwcHggMHB4IHJnYmEoNjYsIDY2LCA2NiwgMC43NSk7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbn1cXG4ubW9kYWwgLmRlc2NyaXB0aW9uLWZvcm0ge1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIHJlc2l6ZTogbm9uZTtcXG59XFxuLm1vZGFsIC50aXRsZS1mb3JtIHtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbn1cXG4ubW9kYWwgLmRhdGUtZm9ybSB7XFxuICBwYWRkaW5nOiA5cHg7XFxuICBmb250LXNpemU6IDIycHg7XFxuICBib3JkZXItd2lkdGg6IDBweDtcXG4gIGJvcmRlci1jb2xvcjogI2VkMDAwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICBjb2xvcjogIzAwMDAwMDtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCA4cHggcmdiYSg2NiwgNjYsIDY2LCAwLjIpO1xcbiAgdGV4dC1zaGFkb3c6IDBweCAwcHggMHB4IHJnYmEoNjYsIDY2LCA2NiwgMC43NSk7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbn1cXG4ubW9kYWwgLmltcG9ydGFudC1mb3JtIHtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIFNhZmFyaSAqL1xcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAvKiBJRSAxMCBhbmQgSUUgMTEgKi9cXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgIHVzZXItc2VsZWN0OiBub25lOyAvKiBTdGFuZGFyZCBzeW50YXggKi9cXG4gIHdpZHRoOiAyMTBweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjdyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubW9kYWwgLm5vdC1pbXBvcnRhbnQge1xcbiAgY29sb3I6ICNlZDAwMDA7XFxufVxcbi5tb2RhbCAuaW1wb3J0YW50IHtcXG4gIGNvbG9yOiAjMDJmMzJlO1xcbn1cXG4ubW9kYWwgLmNsb3NlLW1vZGFsIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTVweDtcXG4gIHJpZ2h0OiAxNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxufVxcbi5tb2RhbCAubGluZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlO1xcbn1cXG4ubW9kYWwgLmxpbmU6Zmlyc3QtY2hpbGQge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbn1cXG4ubW9kYWwgLmxpbmU6bGFzdC1jaGlsZCB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbn1cXG4ubW9kYWwgLnN1Ym1pdC1idG4ge1xcbiAgY29sb3I6IHJnYigyNTQsIDI1NCwgMjU0KTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIxLCA3NiwgNjEpO1xcbiAgcGFkZGluZzogMC41cmVtIDVyZW07XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzAxcHgpIHtcXG4gIC5yZXNwb25zaXZlLW5hdiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gIC5uYXYtYmFyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gIC50YXNrLWVsIHtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgfVxcbiAgLmFkZC10YXNrLWVsIHtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgfVxcbiAgLm1haW4ge1xcbiAgICBncmlkLWNvbHVtbjogMS80O1xcbiAgfVxcbn1cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCxcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBmb250OiBpbmhlcml0O1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSxcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcblxcbm9sLCB1bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5ibG9ja3F1b3RlLCBxIHtcXG4gIHF1b3Rlczogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBjb250ZW50OiBub25lO1xcbn1cXG5cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XFxufS8qIyBzb3VyY2VNYXBwaW5nVVJMPXN0eWxlLmNzcy5tYXAgKi9cIixudWxsXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvZ3JvdXAtY3NzLW1lZGlhLXF1ZXJpZXMtbG9hZGVyL2xpYi9pbmRleC5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9ncm91cC1jc3MtbWVkaWEtcXVlcmllcy1sb2FkZXIvbGliL2luZGV4LmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIlxuaW1wb3J0IHsgUHJvamVjdCwgVGFzaywgYWRkVG9Qcm9qZWN0LCBkZWxldGVGcm9tUHJvamVjdCB9IGZyb20gJy4vZGF0YS5qcydcbmltcG9ydCAgZHJhd1Rhc2sgIGZyb20gJy4vZHJhd2luZy5qcydcbmltcG9ydCB7ZHJhd0FkZFRhc2tFbH0gZnJvbSAnLi9kcmF3aW5nLmpzJ1xuXG5mdW5jdGlvbiBkcmF3QWxsKCl7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYWxsLWNvbnRhaW5lcicpXG5cbiAgICBjb25zdCB0YXNrMTEgPSBuZXcgVGFzaygndGFzazEnLCdkZXMnLCcxMS0xJyx0cnVlLFtdKVxuICAgIGNvbnN0IHRhc2sxMiA9IG5ldyBUYXNrKCd0YXNrMScsJ2RlcycsJzExLTEnLHRydWUsW10pXG4gICAgY29uc3QgdGFzazEzID0gbmV3IFRhc2soJ3Rhc2sxJywnZGVzJywnMTEtMScsdHJ1ZSxbXSlcblxuICAgIFxuICAgIGNvbnRhaW5lci5hcHBlbmQoZHJhd0FkZFRhc2tFbCgpKVxuICAgIGZvcihsZXQgaT0wO2k8VGFzay50YXNrcy5sZW5ndGg7aSsrKXtcbiAgICAgICAgY29uc3QgdGFza0VsID0gZHJhd1Rhc2soVGFzay50YXNrc1tpXSlcbiAgICAgICAgXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQodGFza0VsKVxuXG4gICAgfVxuXG5cblxuICAgIHJldHVybiBjb250YWluZXJcbn1cblxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkQWxsKCl7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpblwiKVxuICAgIG1haW4udGV4dENvbnRlbnQ9JydcbiAgICBtYWluLmFwcGVuZENoaWxkKGRyYXdBbGwoKSlcbn0iLCJcbmV4cG9ydCBjbGFzcyBQcm9qZWN0e1xuICAgIHN0YXRpYyBwcm9qZWN0cyA9IFtdXG4gICAgY29uc3RydWN0b3IodGl0bGUsZGVzY3JpcHRpb24sdGFza3Mpe1xuICAgICAgICB0aGlzLl90aXRsZSA9IHRpdGxlXG4gICAgICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25cbiAgICAgICAgdGhpcy5fdGFza3MgPSB0YXNrc1xuICAgICAgICBQcm9qZWN0LnByb2plY3RzLnB1c2godGhpcylcbiAgICB9XG5cbiAgICBnZXQgdGl0bGUoKXtyZXR1cm4gdGhpcy5fdGl0bGV9XG4gICAgZ2V0IGRlc2NyaXB0aW9uKCl7cmV0dXJuIHRoaXMuX2Rlc2NyaXB0aW9ufVxuICAgIGdldCB0YXNrcygpe3JldHVybiB0aGlzLl90YXNrc31cblxuXG4gICAgc2V0IHRpdGxlKHRpdGxlKXt0aGlzLl90aXRsZT10aXRsZX1cbiAgICBzZXQgZGVzY3JpcHRpb24oZGVzY3JpcHRpb24peyB0aGlzLl9kZXNjcmlwdGlvbj1kZXNjcmlwdGlvbn1cbiAgICBzZXQgdGFza3ModGFza3Mpe3RoaXMuX3Rhc2tzPXRhc2tzfVxuICAgIFxufVxuXG4vL09uZSB0YXNrIGNhbiBvbmx5IGJlbG9uZyB0byBvbmUgcHJvamVjdFxuZXhwb3J0IGNsYXNzIFRhc2t7XG4gICAgc3RhdGljIHRhc2tzID0gW11cblxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLGRlc2NyaXB0aW9uLGRhdGUsaW1wb3J0YW50LHByb2plY3Qpe1xuICAgICAgICB0aGlzLl90aXRsZSA9IHRpdGxlXG4gICAgICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25cbiAgICAgICAgdGhpcy5fZGF0ZSA9IGRhdGVcbiAgICAgICAgdGhpcy5faW1wb3J0YW50ID0gaW1wb3J0YW50XG4gICAgICAgIHRoaXMuX3Byb2plY3QgPSBwcm9qZWN0XG5cbiAgICAgICAgVGFzay50YXNrcy5wdXNoKHRoaXMpXG4gICAgfVxuXG4gICAgZ2V0IHRpdGxlKCl7IHJldHVybiB0aGlzLl90aXRsZX1cbiAgICBnZXQgZGVzY3JpcHRpb24oKXsgcmV0dXJuIHRoaXMuX2Rlc2NyaXB0aW9ufVxuICAgIGdldCBkYXRlKCl7IHJldHVybiB0aGlzLl9kYXRlfVxuICAgIGdldCBpbXBvcnRhbnQoKXsgcmV0dXJuIHRoaXMuX2ltcG9ydGFudH1cbiAgICBnZXQgcHJvamVjdCgpeyByZXR1cm4gdGhpcy5fcHJvamVjdH1cblxuICAgIHNldCB0aXRsZSh0aXRsZSl7dGhpcy5fdGl0bGU9dGl0bGV9XG4gICAgc2V0IGRlc2NyaXB0aW9uKGRlc2NyaXB0aW9uKXsgdGhpcy5fZGVzY3JpcHRpb249ZGVzY3JpcHRpb259XG4gICAgc2V0IGRhdGUoZGF0ZSl7dGhpc19kYXRlID0gZGF0ZX1cbiAgICBzZXQgaW1wb3J0YW50KGltcG9ydGFudCl7dGhpcy5faW1wb3J0YW50ID0gaW1wb3J0YW50fVxuICAgIHNldCBwcm9qZWN0KHByb2plY3QpeyB0aGlzLl9wcm9qZWN0PXByb2plY3R9XG5cblxuICAgIFxuXG59XG5cbi8vPz8/XG5leHBvcnQgZnVuY3Rpb24gYWRkVG9Qcm9qZWN0KHRhc2tUaXRsZSxwcm9qZWN0VGl0bGUpe1xuICAgIGNvbnN0IHRhc2sgPSBUYXNrLnRhc2tzLmZpbmQodCA9PiB0Ll90aXRsZT09PXRhc2tUaXRsZSlcbiAgICB0YXNrLl9wcm9qZWN0ID0gcHJvamVjdFRpdGxlXG4gICAgY29uc3QgcHJvamVjdCA9IFByb2plY3QucHJvamVjdHMuZmluZChwID0+IHAuX3RpdGxlPT09cHJvamVjdFRpdGxlKVxuICAgIHByb2plY3QuX3Rhc2tzLnB1c2godGFza1RpdGxlKVxuICAgIGNvbnNvbGUubG9nKFwiYWRkZWQgXCIsdGFza1RpdGxlLFwidG8gXCIscHJvamVjdFRpdGxlKVxuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVGcm9tUHJvamVjdCh0YXNrVGl0bGUscHJvamVjdFRpdGxlKXtcbiAgICBjb25zdCB0YXNrID0gVGFzay50YXNrcy5maW5kKHQgPT4gdC5fdGl0bGU9PT10YXNrVGl0bGUpXG4gICAgdGFzay5fcHJvamVjdD0nJ1xuICAgIGNvbnN0IHByb2plY3QgPSBQcm9qZWN0LnByb2plY3RzLmZpbmQocCA9PiBwLl90aXRsZT09PXByb2plY3RUaXRsZSlcbiAgICBwcm9qZWN0Ll90YXNrcyA9IHByb2plY3QuX3Rhc2tzLmZpbHRlcih0ID0+dCE9PXRhc2tUaXRsZSlcbiAgICBjb25zb2xlLmxvZyhcImRlbGV0ZWQgXCIsdGFza1RpdGxlLFwiZnJvbSBcIixwcm9qZWN0VGl0bGUpXG59XG5cbiIsImltcG9ydCB7YWRkTW9kYWwsIHNob3dNb2RhbH0gZnJvbSAnLi9tb2RhbHMuanMnXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZHJhd1Rhc2sodGFzayl7XG4gICAgY29uc3QgdGFza0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0YXNrRWwuY2xhc3NMaXN0LmFkZCgndGFzay1lbCcpXG4gICAgICAgIGNvbnN0IGlzRG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgICAgaXNEb25lLnR5cGUgPSAnY2hlY2tib3gnXG4gICAgICAgIGlzRG9uZS5jbGFzc0xpc3QuYWRkKCdpcy1kb25lJylcbiAgICAgICAgdGFza0VsLmFwcGVuZENoaWxkKGlzRG9uZSlcblxuICAgICAgICBjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHRhc2tOYW1lLmNsYXNzTGlzdC5hZGQoJ3Rhc2stdGl0bGUnKVxuICAgICAgICBjb25zb2xlLmxvZyh0YXNrLm5hbWUpXG4gICAgICAgIHRhc2tOYW1lLnRleHRDb250ZW50ID0gdGFzay50aXRsZVxuICAgICAgICB0YXNrRWwuYXBwZW5kQ2hpbGQodGFza05hbWUpXG5cbiAgICAgICAgY29uc3QgdGFza0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICB0YXNrRGF0ZS5jbGFzc0xpc3QuYWRkKCd0YXNrLWRhdGUnKVxuICAgICAgICB0YXNrRGF0ZS50ZXh0Q29udGVudCA9IHRhc2suZGF0ZVxuICAgICAgICB0YXNrRWwuYXBwZW5kQ2hpbGQodGFza0RhdGUpXG5cbiAgICAgICAgY29uc3Qgc2hvd0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHNob3dCdG4uY2xhc3NMaXN0LmFkZCgnc2hvdy1idG4nKVxuICAgICAgICBzaG93QnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicpXG4gICAgICAgIHNob3dCdG4udGV4dENvbnRlbnQgPSAnU0hPVydcbiAgICAgICAgdGFza0VsLmFwcGVuZENoaWxkKHNob3dCdG4pXG5cblxuXG4gICAgcmV0dXJuIHRhc2tFbFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZHJhd0FkZFRhc2tFbCgpe1xuICAgIGNvbnN0IHRhc2tFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGFza0VsLmNsYXNzTGlzdC5hZGQoJ2FkZC10YXNrLWVsJylcbiAgICAgICAgY29uc3QgbmV3QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgbmV3QnRuLmNsYXNzTGlzdC5hZGQoJ25ldy1idG4nKVxuICAgICAgICBuZXdCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJylcbiAgICAgICAgbmV3QnRuLnRleHRDb250ZW50PVwiTkVXXCJcbiAgICAgICAgdGFza0VsLmFwcGVuZENoaWxkKG5ld0J0bilcblxuICAgICAgICBuZXdCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGRyYXdBZGRNb2RhbClcblxuICAgIHJldHVybiB0YXNrRWxcbn1cblxuZnVuY3Rpb24gZHJhd0FkZE1vZGFsKCl7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpblwiKVxuICAgIGNvbnNvbGUubG9nKFwieHh4eFwiKVxuICAgIG1haW4uYXBwZW5kQ2hpbGQoYWRkTW9kYWwoKSlcbiAgICBcbn0iLCJleHBvcnQgZnVuY3Rpb24gYWRkTW9kYWwoKXtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnbW9kYWwnKVxuICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ2FkZC1tb2RhbCcpXG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheT0nZmxleCdcbiAgICBjb25zb2xlLmxvZygnY3JlcmF0ZWQnKVxuXG5cbiAgICAgICAgY29uc3QgY2xvc2VNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGNsb3NlTW9kYWwuY2xhc3NMaXN0LmFkZCgnY2xvc2UtbW9kYWwnKVxuICAgICAgICBtb2RhbC5hcHBlbmRDaGlsZChjbG9zZU1vZGFsKVxuICAgICAgICAgICAgY29uc3QgbFggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICAgICAgICAgIGNvbnN0IHJYID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgICAgICAgICBsWC5jbGFzc0xpc3QuYWRkKCdsaW5lJylcbiAgICAgICAgICAgIHJYLmNsYXNzTGlzdC5hZGQoJ2xpbmUnKVxuICAgICAgICAgICAgY2xvc2VNb2RhbC5hcHBlbmRDaGlsZChsWClcbiAgICAgICAgICAgIGNsb3NlTW9kYWwuYXBwZW5kQ2hpbGQoclgpXG5cbiAgICAgICAgICAgIGNsb3NlTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgICAgICAgICAvLyBtb2RhbC5zdHlsZS5kaXNwbGF5PSdub25lJ1xuICAgICAgICAgICAgICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW5cIilcbiAgICAgICAgICAgICAgICBtYWluLnJlbW92ZUNoaWxkKG1vZGFsKVxuICAgICAgICAgICAgfSkgIFxuXG5cbiAgICAgICAgY29uc3QgdGl0bGVGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgdGl0bGVGb3JtLnR5cGUgPSAndGV4dCc7XG4gICAgICAgIHRpdGxlRm9ybS5wbGFjZWhvbGRlciA9ICdUaXRsZSc7XG4gICAgICAgIHRpdGxlRm9ybS5jbGFzc0xpc3QuYWRkKCd0aXRsZS1mb3JtJyk7XG4gICAgICAgIHRpdGxlRm9ybS5jbGFzc0xpc3QuYWRkKCd0ZXh0LWZvcm0nKTtcbiAgICAgICAgbW9kYWwuYXBwZW5kQ2hpbGQodGl0bGVGb3JtKTtcbiAgICBcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb25Gb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICAgICAgZGVzY3JpcHRpb25Gb3JtLnBsYWNlaG9sZGVyID0gJ0Rlc2NyaXB0aW9uJztcbiAgICAgICAgZGVzY3JpcHRpb25Gb3JtLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uLWZvcm0nKTtcbiAgICAgICAgZGVzY3JpcHRpb25Gb3JtLmNsYXNzTGlzdC5hZGQoJ3RleHQtZm9ybScpO1xuICAgICAgICBtb2RhbC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkZvcm0pO1xuICAgIFxuICAgICAgICBjb25zdCBkYXRlRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGRhdGVGb3JtLnR5cGUgPSAnZGF0ZSc7XG4gICAgICAgIGRhdGVGb3JtLmNsYXNzTGlzdC5hZGQoJ2RhdGUtZm9ybScpO1xuICAgICAgICBtb2RhbC5hcHBlbmRDaGlsZChkYXRlRm9ybSk7XG4gICAgXG5cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGltcG9ydGFudEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBpbXBvcnRhbnRGb3JtLmNsYXNzTGlzdC5hZGQoJ2ltcG9ydGFudC1mb3JtJylcbiAgICAgICAgaW1wb3J0YW50Rm9ybS5jbGFzc0xpc3QuYWRkKCdub3QtaW1wb3J0YW50JylcbiAgICAgICAgaW1wb3J0YW50Rm9ybS50ZXh0Q29udGVudCA9ICdub3QgaW1wb3J0YW50J1xuICAgICAgICBpbXBvcnRhbnRGb3JtLmRhdGFzZXQuaW1wb3J0YW50PWZhbHNlXG4gICAgICAgIGltcG9ydGFudEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgICAgICBpbXBvcnRhbnRGb3JtLmNsYXNzTGlzdC50b2dnbGUoJ25vdC1pbXBvcnRhbnQnKVxuICAgICAgICAgICAgaW1wb3J0YW50Rm9ybS5jbGFzc0xpc3QudG9nZ2xlKCdpbXBvcnRhbnQnKVxuXG4gICAgICAgICAgICBpZihpbXBvcnRhbnRGb3JtLmNsYXNzTGlzdC5jb250YWlucygnaW1wb3J0YW50Jykpe1xuICAgICAgICAgICAgICAgIGltcG9ydGFudEZvcm0udGV4dENvbnRlbnQgPSAnaW1wb3J0YW50J1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZihpbXBvcnRhbnRGb3JtLmNsYXNzTGlzdC5jb250YWlucygnbm90LWltcG9ydGFudCcpKXtcbiAgICAgICAgICAgICAgICBpbXBvcnRhbnRGb3JtLnRleHRDb250ZW50ID0gJ25vdCBpbXBvcnRhbnQnXG4gICAgICAgICAgICB9XG5cblxuICAgICAgICB9KVxuICAgICAgICBtb2RhbC5hcHBlbmRDaGlsZChpbXBvcnRhbnRGb3JtKVxuXG5cblxuICAgICAgICBjb25zdCBzdWJtaXRCdG49ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgc3VibWl0QnRuLmlubmVyVGV4dCA9ICdTVUJNSVQnXG4gICAgICAgIHN1Ym1pdEJ0bi5jbGFzc0xpc3QuYWRkKCdidG4nKVxuICAgICAgICBzdWJtaXRCdG4uY2xhc3NMaXN0LmFkZCgnc3VibWl0LWJ0bicpXG4gICAgICAgIG1vZGFsLmFwcGVuZENoaWxkKHN1Ym1pdEJ0bilcbiAgICBcbiAgICBcbiAgIFxuXG5cblxuICAgIHJldHVybiBtb2RhbFxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd01vZGFsKCl7XG5cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgbG9hZEFsbCBmcm9tICcuL2FsbC5qcydcbmltcG9ydCBnaXRodWJJbWcgZnJvbSAnLi9pbWFnZXMvZ2l0aHVibG9nby5wbmcnXG5pbXBvcnQgaWdJbWcgZnJvbSAnLi9pbWFnZXMvaWdsb2dvLnBuZydcblxuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpXG5cbmNvbnN0IEdpdGh1YkltZyA9IG5ldyBJbWFnZSgpXG5jb25zdCBJZ0ltZyA9IG5ldyBJbWFnZSgpXG5HaXRodWJJbWcuc3JjID0gZ2l0aHViSW1nXG5JZ0ltZy5zcmMgPSBpZ0ltZ1xuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKXtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpXG4gICAgICAgIGhlYWRlci50ZXh0Q29udGVudD1cIlRvIGRvIExpc3RcIlxuXG5cblxuICAgIC8vcmVwb25zaXZlIG5hdmJhci8vXG4gICAgY29uc3QgcmVwb25zaXZlTmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICByZXBvbnNpdmVOYXYuY2xhc3NMaXN0LmFkZCgncmVzcG9uc2l2ZS1uYXYnKVxuICAgICAgICAgICAgZm9yKGxldCBpPTA7aTwzO2krKyl7XG4gICAgICAgICAgICAgICAgY29uc3QgbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgICAgICAgICAgIC8vbGluZS5jbGFzc0xpc3QuYWRkKCdsaW5lJylcbiAgICAgICAgICAgICAgICByZXBvbnNpdmVOYXYuYXBwZW5kQ2hpbGQobGluZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBOYXZCYXJUb0Nsb25lID0gY3JlYXRlTmF2QmFyKClcbiAgICAgICAgICAgIGNvbnN0IG1vYmlsZU5hdiA9IE5hdkJhclRvQ2xvbmUuY2xvbmVOb2RlKHRydWUpXG4gICAgICAgICAgICBtb2JpbGVOYXYuaWQ9XCJtb2JpbGUtbmF2XCJcbiAgICAgICAgICAgIG1vYmlsZU5hdi5jbGFzc0xpc3QuYWRkKCdtb2JpbGUtbmF2JylcbiAgICAgICAgICAgIG1vYmlsZU5hdi5jbGFzc0xpc3QucmVtb3ZlKFwibmF2LWJhclwiKVxuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobW9iaWxlTmF2KVxuXG4gICAgICAgICAgICBcblxuXG4gICAgICAgICAgICBcblxuXG5cbiAgICAgICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChyZXBvbnNpdmVOYXYpXG5cblxuXG4gICAgcmV0dXJuIGhlYWRlclxufVxuXG5mdW5jdGlvbiBjcmVhdGVOYXZCYXIoKXtcbiAgICBjb25zdCBuYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG5hdkJhci5jbGFzc0xpc3QuYWRkKCduYXYtYmFyJylcblxuICAgICAgICBjb25zdCBuYXZBbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBuYXZBbGwuY2xhc3NMaXN0LmFkZCgnbmF2LWVsZW1lbnQnKVxuICAgICAgICBuYXZCYXIuYXBwZW5kQ2hpbGQobmF2QWxsKVxuICAgICAgICAgICAgbmF2QWxsLnRleHRDb250ZW50PSdBbGwnXG5cbiAgICAgICAgY29uc3QgbmF2VG9kYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBuYXZUb2RheS5jbGFzc0xpc3QuYWRkKCduYXYtZWxlbWVudCcpXG4gICAgICAgIG5hdkJhci5hcHBlbmRDaGlsZChuYXZUb2RheSlcbiAgICAgICAgICAgIG5hdlRvZGF5LnRleHRDb250ZW50PSdUb2RheScgICAgXG5cbiAgICAgICAgY29uc3QgbmF2VGhpc1dlZWsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBuYXZUaGlzV2Vlay5jbGFzc0xpc3QuYWRkKCduYXYtZWxlbWVudCcpXG4gICAgICAgIG5hdkJhci5hcHBlbmRDaGlsZChuYXZUaGlzV2VlaylcbiAgICAgICAgICAgIG5hdlRoaXNXZWVrLnRleHRDb250ZW50PSdUaGlzIHdlZWsnXG4gICAgICAgICAgICBcbiAgICAgICAgY29uc3QgbmF2T3ZlcmR1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIG5hdk92ZXJkdWUuY2xhc3NMaXN0LmFkZCgnbmF2LWVsZW1lbnQnKVxuICAgICAgICBuYXZCYXIuYXBwZW5kQ2hpbGQobmF2T3ZlcmR1ZSlcbiAgICAgICAgbmF2T3ZlcmR1ZS50ZXh0Q29udGVudD0nT3ZlcmR1ZSdcblxuICAgICAgICBjb25zdCBuYXZQcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIG5hdlByb2plY3RzLmNsYXNzTGlzdC5hZGQoJ25hdi1lbGVtZW50JylcbiAgICAgICAgbmF2QmFyLmFwcGVuZENoaWxkKG5hdlByb2plY3RzKVxuICAgICAgICBuYXZQcm9qZWN0cy50ZXh0Q29udGVudD0nUHJvamVjdHMnXG5cbiAgICAgICAgY29uc3QgbmF2VHJhc2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBuYXZUcmFzaC5jbGFzc0xpc3QuYWRkKCduYXYtZWxlbWVudCcpXG4gICAgICAgIG5hdkJhci5hcHBlbmRDaGlsZChuYXZUcmFzaClcbiAgICAgICAgbmF2VHJhc2gudGV4dENvbnRlbnQ9J1RyYXNoJ1xuXG5cbiAgICAgICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpXG4gICAgICAgIG5hdkJhci5hcHBlbmRDaGlsZChmb290ZXIpXG4gICAgICAgICAgICBjb25zdCBsaW5rcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICBuYXZCYXIuYXBwZW5kQ2hpbGQobGlua3MpXG4gICAgICAgICAgICBsaW5rcy5jbGFzc0xpc3QuYWRkKCdsaW5rcycpXG4gICAgICAgICAgICAgICAgbGlua3MuYXBwZW5kQ2hpbGQoR2l0aHViSW1nKVxuICAgICAgICAgICAgICAgIGxpbmtzLmFwcGVuZENoaWxkKElnSW1nKVxuICAgICAgICAgICAgICAgIEdpdGh1YkltZy5jbGFzc0xpc3QuYWRkKCdnaXRodWItaW1nJylcbiAgICAgICAgICAgICAgICBHaXRodWJJbWcuY2xhc3NMaXN0LmFkZCgnbGluaycpXG4gICAgICAgICAgICAgICAgSWdJbWcuY2xhc3NMaXN0LmFkZCgnaWctaW1nJylcbiAgICAgICAgICAgICAgICBJZ0ltZy5jbGFzc0xpc3QuYWRkKCdsaW5rJylcbiAgICAgICAgICAgICAgICBHaXRodWJJbWcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5vcGVuKFwiaHR0cHM6Ly9naXRodWIuY29tL010dHQ3L3Jlc3RhdXJhbnRwYWdlXCIsXCJfc2VsZlwiKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgSWdJbWcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5vcGVuKFwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9tdHQuanBlZy9cIixcIl9zZWxmXCIpXG4gICAgICAgICAgICAgICAgfSlcblxuXG4gICAgICAgIFxuICAgICAgICBcblxuXG5cbiAgICByZXR1cm4gbmF2QmFyXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1haW4oKXtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoXCJtYWluXCIpXG4gICAgbWFpbi5pZD1cIm1haW5cIlxuXG5cbiAgICBjb25zdCByZXBvbnNpdmVOYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc3BvbnNpdmUtbmF2XCIpXG4gICAgY29uc3QgbW9iaWxlTmF2ID1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vYmlsZS1uYXZcIilcbiAgICByZXBvbnNpdmVOYXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnKVxuICAgICAgICAgICAgICAgIG1vYmlsZU5hdi5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnKVxuICAgICAgICAgICAgICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW5cIilcbiAgICAgICAgICAgICAgICBtYWluLmNsYXNzTGlzdC50b2dnbGUoJ3NocmluaycpXG4gICAgICAgICAgICB9KVxuXG5cbiAgICByZXR1cm4gbWFpblxuXG59XG5cblxuXG5mdW5jdGlvbiBJbml0aWFsaXplV2Vic2l0ZSgpe1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyKCkpXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVOYXZCYXIoKSlcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU1haW4oKSlcbiAgICBcbn1cblxuSW5pdGlhbGl6ZVdlYnNpdGUoKVxubG9hZEFsbCgpXG5cblxuY29uc29sZS5sb2coJ3dvcmtpbmcgZmluZScpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9