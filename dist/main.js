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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  font-family: \"Poppins\", sans-serif;\n}\n\n#content {\n  font-family: \"Poppins\", sans-serif;\n  height: 100vh;\n  display: grid;\n  grid-template-columns: 1fr 10fr;\n  grid-template-rows: 100px 1fr 1fr;\n}\n\n.header {\n  grid-column: 1/3;\n  background-color: rgb(221, 76, 61);\n  padding: 1.7rem;\n  font-size: 2.3rem;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n}\n.header .responsive-nav {\n  margin-left: auto;\n  margin-top: 5px;\n}\n.header .responsive-nav > * {\n  display: block;\n  width: 50px;\n  height: 6px;\n  margin-bottom: 9px;\n  position: relative;\n  background-color: white;\n  border-radius: 6px;\n  z-index: 1;\n  transform-origin: 0 0;\n  transition: 0.4s;\n}\n.header .responsive-nav.is-active span:nth-child(1) {\n  transform: translate(0px, -2px) rotate(45deg);\n}\n.header .responsive-nav.is-active span:nth-child(2) {\n  opacity: 0;\n  transform: translateX(15px);\n}\n.header .responsive-nav.is-active span:nth-child(3) {\n  transform: translate(-3px, 3px) rotate(-45deg);\n}\n\n.mobile-nav {\n  display: none;\n}\n\n.mobile-nav.is-active {\n  grid-column: 1/3;\n  grid-row: 2/3;\n  height: 100%;\n  width: 100%;\n  background-color: rgb(244, 238, 238);\n  font-size: 2rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.45rem;\n  padding: 1rem;\n  -webkit-animation: fade 0.2s;\n          animation: fade 0.2s;\n}\n.mobile-nav.is-active .nav-element:hover {\n  transform: scale(1.05);\n  cursor: pointer;\n}\n.mobile-nav.is-active .links .ig-img {\n  width: 30px;\n}\n.mobile-nav.is-active .links .ig-img:hover {\n  cursor: pointer;\n  transform: scale(1.03);\n}\n.mobile-nav.is-active .links .github-img {\n  width: 60px;\n}\n.mobile-nav.is-active .links .github-img:hover {\n  cursor: pointer;\n  transform: scale(1.03);\n}\n\n@-webkit-keyframes fade {\n  100% {\n    transform: scale(1);\n  }\n  0% {\n    transform: scale(0.1);\n  }\n}\n\n@keyframes fade {\n  100% {\n    transform: scale(1);\n  }\n  0% {\n    transform: scale(0.1);\n  }\n}\n.nav-bar {\n  background-color: rgb(244, 238, 238);\n  font-size: 1.35rem;\n  grid-column: 1;\n  grid-row: 2/4;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  padding: 1rem;\n  height: 100%;\n  width: 160px;\n}\n.nav-bar .nav-element:hover {\n  transform: scale(1.05);\n  cursor: pointer;\n}\n.nav-bar .links .ig-img {\n  width: 30px;\n}\n.nav-bar .links .ig-img:hover {\n  cursor: pointer;\n  transform: scale(1.03);\n}\n.nav-bar .links .github-img {\n  width: 60px;\n}\n.nav-bar .links .github-img:hover {\n  cursor: pointer;\n  transform: scale(1.03);\n}\n\n.main {\n  grid-column: 2/4;\n  grid-row: 2/4;\n}\n\n.main.shrink {\n  grid-row: 3/4;\n  padding-top: 2rem;\n}\n\n.all-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  padding: 2rem;\n}\n\n.task-el {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-top: 1rem;\n  width: 450px;\n  height: 50px;\n  background-color: rgb(244, 238, 238);\n  border-radius: 20px;\n  padding: 0 0.7rem;\n}\n.task-el .is-done {\n  height: 25px;\n  width: 25px;\n  margin: 1rem;\n}\n.task-el .show-btn {\n  margin-left: auto;\n  color: white;\n  background-color: red;\n  padding: 0.4rem;\n  border-radius: 10px;\n  font-weight: 600;\n}\n\n.add-task-el {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  margin-top: 1rem;\n  width: 450px;\n  height: 50px;\n  background-color: rgb(244, 238, 238);\n  border-radius: 20px;\n  padding: 0 0.7rem;\n}\n.add-task-el .new-btn {\n  background-color: rgb(221, 76, 61);\n  color: white;\n  background-color: red;\n  padding: 0.4rem;\n  border-radius: 10px;\n  font-weight: 600;\n}\n\n.btn {\n  cursor: pointer;\n}\n\n.btn:hover {\n  transform: scale(1.05);\n}\n\n.modal {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 1.3rem;\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 400px;\n  height: 50%;\n  border-radius: 20px;\n  background-color: gray;\n}\n.modal .text-form {\n  padding: 9px;\n  font-size: 22px;\n  border-width: 0px;\n  border-color: #ed0000;\n  background-color: #ffffff;\n  color: #000000;\n  border-style: solid;\n  border-radius: 30px;\n  box-shadow: 0px 0px 8px rgba(66, 66, 66, 0.2);\n  text-shadow: 0px 0px 0px rgba(66, 66, 66, 0.75);\n  margin-top: 1rem;\n}\n.modal .description-form {\n  height: 100px;\n  resize: none;\n}\n.modal .title-form {\n  font-size: 1.4rem;\n}\n.modal .project-form {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 200px;\n  height: 50px;\n}\n.modal .project-form .project-select {\n  padding: 9px;\n  font-size: 22px;\n  background-color: #ffffff;\n  color: #000000;\n  border-style: solid;\n  border-radius: 30px;\n  box-shadow: 0px 0px 8px rgba(66, 66, 66, 0.2);\n  text-shadow: 0px 0px 0px rgba(66, 66, 66, 0.75);\n  margin-top: 1rem;\n}\n.modal .date-form {\n  padding: 9px;\n  font-size: 22px;\n  border-width: 0px;\n  border-color: #ed0000;\n  background-color: #ffffff;\n  color: #000000;\n  border-style: solid;\n  border-radius: 30px;\n  box-shadow: 0px 0px 8px rgba(66, 66, 66, 0.2);\n  text-shadow: 0px 0px 0px rgba(66, 66, 66, 0.75);\n  margin-top: 1rem;\n}\n.modal .important-form {\n  -webkit-user-select: none; /* Safari */\n  -ms-user-select: none; /* IE 10 and IE 11 */\n  -moz-user-select: none;\n       user-select: none; /* Standard syntax */\n  width: 210px;\n  height: 40px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.7rem;\n  font-weight: 600;\n  cursor: pointer;\n}\n.modal .not-important {\n  color: #ed0000;\n}\n.modal .important {\n  color: #02f32e;\n}\n.modal .close-modal {\n  display: inline-block;\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  cursor: pointer;\n  width: 30px;\n  height: 30px;\n}\n.modal .line {\n  position: absolute;\n  width: 100%;\n  height: 5px;\n  background-color: white;\n  transition: transform 0.2s ease;\n}\n.modal .line:first-child {\n  transform: rotate(45deg);\n}\n.modal .line:last-child {\n  transform: rotate(-45deg);\n}\n.modal .btn {\n  color: rgb(254, 254, 254);\n  font-weight: 600;\n  background-color: rgb(221, 76, 61);\n  padding: 0.5rem 5rem;\n  border-radius: 20px;\n  margin-top: auto;\n  margin-bottom: 1rem;\n}\n.modal .delete-btn {\n  margin-top: 0rem;\n  margin-bottom: 0.3rem;\n}\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}/*# sourceMappingURL=style.css.map */@media only screen and (min-width: 701px) {\n  .responsive-nav {\n    display: none;\n  }\n}@media only screen and (max-width: 700px) {\n  .nav-bar {\n    display: none;\n  }\n  .task-el {\n    width: 300px;\n  }\n  .add-task-el {\n    width: 300px;\n  }\n  .main {\n    grid-column: 1/4;\n  }\n}", "",{"version":3,"sources":["webpack://./src/style.scss","webpack://./src/style.css","<no source>"],"names":[],"mappings":"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","sourcesContent":[null,"body {\n  font-family: \"Poppins\", sans-serif;\n}\n\n#content {\n  font-family: \"Poppins\", sans-serif;\n  height: 100vh;\n  display: grid;\n  grid-template-columns: 1fr 10fr;\n  grid-template-rows: 100px 1fr 1fr;\n}\n\n.header {\n  grid-column: 1/3;\n  background-color: rgb(221, 76, 61);\n  padding: 1.7rem;\n  font-size: 2.3rem;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n}\n.header .responsive-nav {\n  margin-left: auto;\n  margin-top: 5px;\n}\n.header .responsive-nav > * {\n  display: block;\n  width: 50px;\n  height: 6px;\n  margin-bottom: 9px;\n  position: relative;\n  background-color: white;\n  border-radius: 6px;\n  z-index: 1;\n  transform-origin: 0 0;\n  transition: 0.4s;\n}\n.header .responsive-nav.is-active span:nth-child(1) {\n  transform: translate(0px, -2px) rotate(45deg);\n}\n.header .responsive-nav.is-active span:nth-child(2) {\n  opacity: 0;\n  transform: translateX(15px);\n}\n.header .responsive-nav.is-active span:nth-child(3) {\n  transform: translate(-3px, 3px) rotate(-45deg);\n}\n\n.mobile-nav {\n  display: none;\n}\n\n.mobile-nav.is-active {\n  grid-column: 1/3;\n  grid-row: 2/3;\n  height: 100%;\n  width: 100%;\n  background-color: rgb(244, 238, 238);\n  font-size: 2rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.45rem;\n  padding: 1rem;\n  -webkit-animation: fade 0.2s;\n          animation: fade 0.2s;\n}\n.mobile-nav.is-active .nav-element:hover {\n  transform: scale(1.05);\n  cursor: pointer;\n}\n.mobile-nav.is-active .links .ig-img {\n  width: 30px;\n}\n.mobile-nav.is-active .links .ig-img:hover {\n  cursor: pointer;\n  transform: scale(1.03);\n}\n.mobile-nav.is-active .links .github-img {\n  width: 60px;\n}\n.mobile-nav.is-active .links .github-img:hover {\n  cursor: pointer;\n  transform: scale(1.03);\n}\n\n@-webkit-keyframes fade {\n  100% {\n    transform: scale(1);\n  }\n  0% {\n    transform: scale(0.1);\n  }\n}\n\n@keyframes fade {\n  100% {\n    transform: scale(1);\n  }\n  0% {\n    transform: scale(0.1);\n  }\n}\n.nav-bar {\n  background-color: rgb(244, 238, 238);\n  font-size: 1.35rem;\n  grid-column: 1;\n  grid-row: 2/4;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  padding: 1rem;\n  height: 100%;\n  width: 160px;\n}\n.nav-bar .nav-element:hover {\n  transform: scale(1.05);\n  cursor: pointer;\n}\n.nav-bar .links .ig-img {\n  width: 30px;\n}\n.nav-bar .links .ig-img:hover {\n  cursor: pointer;\n  transform: scale(1.03);\n}\n.nav-bar .links .github-img {\n  width: 60px;\n}\n.nav-bar .links .github-img:hover {\n  cursor: pointer;\n  transform: scale(1.03);\n}\n\n.main {\n  grid-column: 2/4;\n  grid-row: 2/4;\n}\n\n.main.shrink {\n  grid-row: 3/4;\n  padding-top: 2rem;\n}\n\n.all-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  padding: 2rem;\n}\n\n.task-el {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-top: 1rem;\n  width: 450px;\n  height: 50px;\n  background-color: rgb(244, 238, 238);\n  border-radius: 20px;\n  padding: 0 0.7rem;\n}\n.task-el .is-done {\n  height: 25px;\n  width: 25px;\n  margin: 1rem;\n}\n.task-el .show-btn {\n  margin-left: auto;\n  color: white;\n  background-color: red;\n  padding: 0.4rem;\n  border-radius: 10px;\n  font-weight: 600;\n}\n\n.add-task-el {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  margin-top: 1rem;\n  width: 450px;\n  height: 50px;\n  background-color: rgb(244, 238, 238);\n  border-radius: 20px;\n  padding: 0 0.7rem;\n}\n.add-task-el .new-btn {\n  background-color: rgb(221, 76, 61);\n  color: white;\n  background-color: red;\n  padding: 0.4rem;\n  border-radius: 10px;\n  font-weight: 600;\n}\n\n.btn {\n  cursor: pointer;\n}\n\n.btn:hover {\n  transform: scale(1.05);\n}\n\n.modal {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 1.3rem;\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 400px;\n  height: 50%;\n  border-radius: 20px;\n  background-color: gray;\n}\n.modal .text-form {\n  padding: 9px;\n  font-size: 22px;\n  border-width: 0px;\n  border-color: #ed0000;\n  background-color: #ffffff;\n  color: #000000;\n  border-style: solid;\n  border-radius: 30px;\n  box-shadow: 0px 0px 8px rgba(66, 66, 66, 0.2);\n  text-shadow: 0px 0px 0px rgba(66, 66, 66, 0.75);\n  margin-top: 1rem;\n}\n.modal .description-form {\n  height: 100px;\n  resize: none;\n}\n.modal .title-form {\n  font-size: 1.4rem;\n}\n.modal .project-form {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 200px;\n  height: 50px;\n}\n.modal .project-form .project-select {\n  padding: 9px;\n  font-size: 22px;\n  background-color: #ffffff;\n  color: #000000;\n  border-style: solid;\n  border-radius: 30px;\n  box-shadow: 0px 0px 8px rgba(66, 66, 66, 0.2);\n  text-shadow: 0px 0px 0px rgba(66, 66, 66, 0.75);\n  margin-top: 1rem;\n}\n.modal .date-form {\n  padding: 9px;\n  font-size: 22px;\n  border-width: 0px;\n  border-color: #ed0000;\n  background-color: #ffffff;\n  color: #000000;\n  border-style: solid;\n  border-radius: 30px;\n  box-shadow: 0px 0px 8px rgba(66, 66, 66, 0.2);\n  text-shadow: 0px 0px 0px rgba(66, 66, 66, 0.75);\n  margin-top: 1rem;\n}\n.modal .important-form {\n  -webkit-user-select: none; /* Safari */\n  -ms-user-select: none; /* IE 10 and IE 11 */\n  -moz-user-select: none;\n       user-select: none; /* Standard syntax */\n  width: 210px;\n  height: 40px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.7rem;\n  font-weight: 600;\n  cursor: pointer;\n}\n.modal .not-important {\n  color: #ed0000;\n}\n.modal .important {\n  color: #02f32e;\n}\n.modal .close-modal {\n  display: inline-block;\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  cursor: pointer;\n  width: 30px;\n  height: 30px;\n}\n.modal .line {\n  position: absolute;\n  width: 100%;\n  height: 5px;\n  background-color: white;\n  transition: transform 0.2s ease;\n}\n.modal .line:first-child {\n  transform: rotate(45deg);\n}\n.modal .line:last-child {\n  transform: rotate(-45deg);\n}\n.modal .btn {\n  color: rgb(254, 254, 254);\n  font-weight: 600;\n  background-color: rgb(221, 76, 61);\n  padding: 0.5rem 5rem;\n  border-radius: 20px;\n  margin-top: auto;\n  margin-bottom: 1rem;\n}\n.modal .delete-btn {\n  margin-top: 0rem;\n  margin-bottom: 0.3rem;\n}\n\n@media only screen and (min-width: 701px) {\n  .responsive-nav {\n    display: none;\n  }\n}\n@media only screen and (max-width: 700px) {\n  .nav-bar {\n    display: none;\n  }\n  .task-el {\n    width: 300px;\n  }\n  .add-task-el {\n    width: 300px;\n  }\n  .main {\n    grid-column: 1/4;\n  }\n}\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}/*# sourceMappingURL=style.css.map */",null],"sourceRoot":""}]);
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






const p1 = new _data_js__WEBPACK_IMPORTED_MODULE_0__.Project('projekt1','opis projektu',[])
const p2 = new _data_js__WEBPACK_IMPORTED_MODULE_0__.Project('projekt2','opis projektu',[])
const p3 = new _data_js__WEBPACK_IMPORTED_MODULE_0__.Project('projekt3','opis projektu',[])


function drawAll(){
    const container = document.createElement('div')
    container.classList.add('all-container')

    
    
    
    container.append((0,_drawing_js__WEBPACK_IMPORTED_MODULE_1__.drawAddTaskEl)())
    for(let i=0;i<_data_js__WEBPACK_IMPORTED_MODULE_0__.Task.tasks.length;i++){
        const taskEl = (0,_drawing_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_data_js__WEBPACK_IMPORTED_MODULE_0__.Task.tasks[i])
        
        container.append(taskEl)

    }



    return container
}





function loadAll(){
    const main = document.querySelector("#main")

    const navBar = document.querySelector(".nav-bar")
    

    for(let i = 0;i<navBar.children.length-2;i++){
        navBar.children[i].dataset.isactive=false
    }
   
    var arr = Array.prototype.slice.call( navBar.children )
    let res  = arr.find(item => item.innerText == 'All');
    res.dataset.isactive=true
    


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
//import {  format } from 'date-fns'

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
    set date(date){this._date = date}
    set important(important){this._important = important}
    set project(project){ this._project=project}


    

}

//???
function addToProject(task,projectTit){

    task.project = projectTit
    const project = Project.projects.find(item => item.title == projectTit);
    
    project.tasks.push(task.title)

    console.log("added ",task.title,"to ",project.title)

}

function deleteFromProject(task,project){
    let toDel = task._project
    task._project=''
    project._tasks = project._tasks.filter(t =>t!==task.title)
    console.log("deleted ",toDel,"from ",project.title)
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
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.js */ "./src/data.js");




function drawTask(task){
    const taskEl = document.createElement('div')
    taskEl.classList.add('task-el')
        const isDone = document.createElement('input')
        isDone.type = 'checkbox'
        isDone.classList.add('is-done')
        taskEl.appendChild(isDone)

        const taskName = document.createElement('div')
        taskName.classList.add('task-title')
        
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

        showBtn.addEventListener('click',drawShowModal)



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
    main.appendChild((0,_modals_js__WEBPACK_IMPORTED_MODULE_0__.addModal)())
    
}

function drawShowModal(e){
    const main = document.querySelector("#main")
    let taskTitle = e.target.parentElement.children[1].textContent
    let task = _data_js__WEBPACK_IMPORTED_MODULE_1__.Task.tasks.find(t => t._title==taskTitle)
    console.log(task)
    main.appendChild((0,_modals_js__WEBPACK_IMPORTED_MODULE_0__.showModal)(task))


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
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ "./src/data.js");
/* harmony import */ var _all_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./all.js */ "./src/all.js");




function X(modal){
    const closeModal = document.createElement('div')
    closeModal.classList.add('close-modal')
    
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
    return closeModal
}


function currentWindow(){
    
    const navBar = document.querySelector(".nav-bar")
    var arr = Array.prototype.slice.call( navBar.children )
    
    let res  = arr.find(item => item.dataset.isactive == 'true').innerText;
    

    return res
}

function addModal(){
    const modal = document.createElement('div')
    modal.classList.add('modal')
    modal.classList.add('add-modal')
    modal.style.display='flex'
    

    modal.appendChild(X(modal))
       
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

        const projectForm = document.createElement('div')
        projectForm.classList.add('project-form')
            const projectSelect = document.createElement('select')
            projectSelect.classList.add('project-select')
            projectForm.appendChild(projectSelect)

            const opt = document.createElement('option')
            opt.value=0
            opt.text='none'
            projectSelect.appendChild(opt)

            for(let i=0;i<_data_js__WEBPACK_IMPORTED_MODULE_0__.Project.projects.length;i++){
                const opt = document.createElement('option')
                opt.value=i+1
                opt.text=_data_js__WEBPACK_IMPORTED_MODULE_0__.Project.projects[i].title
                projectSelect.appendChild(opt)
            }


            modal.appendChild(projectForm);            

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
                importantForm.dataset.important=true
            }
            else if(importantForm.classList.contains('not-important')){
                importantForm.textContent = 'not important'
                importantForm.dataset.important=false
            }


        })
        modal.appendChild(importantForm)



        const submitBtn=document.createElement('div')
        submitBtn.innerText = 'SUBMIT'
        submitBtn.classList.add('btn')
        submitBtn.classList.add('submit-btn')

        submitBtn.addEventListener('click',()=>{
            let title = titleForm.value
            let description = descriptionForm.value
            let project = projectSelect.options[projectSelect.selectedIndex].text
            let important = importantForm.dataset.important
            let date = dateForm.value

            if(project=='none'){
                project=''
            }
            if(title==''){
                title='unnamed'
            }
            const task = new _data_js__WEBPACK_IMPORTED_MODULE_0__.Task(title,description,date,important,project)
            if(project!=''){
                (0,_data_js__WEBPACK_IMPORTED_MODULE_0__.addToProject)(task,project)
            }

            
            if(currentWindow()=='All') (0,_all_js__WEBPACK_IMPORTED_MODULE_1__["default"])()



            console.log(task)

        })


        modal.appendChild(submitBtn)
    
    
   



    return modal
}

function showModal(task){
    const modal = addModal()
        const deleteBtn = document.createElement('div')
        deleteBtn.classList.add('delete-btn')
        deleteBtn.classList.add('btn')
        deleteBtn.textContent = 'DELETE'
        modal.appendChild(deleteBtn)

        deleteBtn.addEventListener('click',()=>{
            console.log('#task title:',task.title)
            console.log('#tasks:',_data_js__WEBPACK_IMPORTED_MODULE_0__.Task.tasks)
            
            _data_js__WEBPACK_IMPORTED_MODULE_0__.Task.tasks = _data_js__WEBPACK_IMPORTED_MODULE_0__.Task.tasks.filter((t)=>t.title!=task.title)
            refresh()
        })



    modal.classList.remove('add-modal')
    modal.classList.add('edit-modal')
        const titleForm = modal.querySelector('.title-form')
        titleForm.value = task.title
        
        const descriptionForm = modal.querySelector('.description-form')
        descriptionForm.value = task.description

        const projectSelect = modal.querySelector('.project-select')

        let index=0
        
        if(task.project!=''){
            console.log('PROJECT EXIST')
            for(let i = 0;i<=_data_js__WEBPACK_IMPORTED_MODULE_0__.Project.projects.length;i++){

                if(task.project==projectSelect.options[i].innerText){
                    
                    index = (projectSelect.options[i].value) 
                   
                }

            }
        }
        projectSelect.selectedIndex = index
        
        const dateForm = modal.querySelector('.date-form')
        dateForm.value = task.date
        
        const importantForm = modal.querySelector('.important-form')
        console.log(task.important)
        const imp = task.important
        
        if(imp=='true'){
            console.log('TRUEEEEE')
            importantForm.dataset.important='true'
            importantForm.classList.add('important')
            importantForm.textContent = 'important'
            importantForm.classList.remove('not-important')
        }

        


        const submitBtn = modal.querySelector('.submit-btn')
        //*cloning nodes to remove all event listeners from submit btn
        const editSubmitBtn = submitBtn.cloneNode(true)
        submitBtn.parentNode.replaceChild(editSubmitBtn,submitBtn)

        editSubmitBtn.addEventListener('click',()=>{
            let title = titleForm.value
            let description = descriptionForm.value
            let project = projectSelect.options[projectSelect.selectedIndex].text
            let important = importantForm.dataset.important
            let date = dateForm.value

            if(project=='none'){
                project=''
            }
            if(title==''){
                title='unnamed'
            }
            
            if(project!=''){
                (0,_data_js__WEBPACK_IMPORTED_MODULE_0__.addToProject)(task,project)
            }

            task.title = title
            task.description=description
            task.project=project
            task.important = important
            task.date=date

            
            refresh()



            console.log(task)

        })



    modal.appendChild(X(modal))



    function refresh(){
        if(currentWindow()=='All') (0,_all_js__WEBPACK_IMPORTED_MODULE_1__["default"])()
    }

    return modal
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
        navAll.dataset.isactive=false
        navBar.appendChild(navAll)
            navAll.textContent='All'

        const navToday = document.createElement('div')
        navToday.classList.add('nav-element')
        navToday.dataset.isactive=false
        navBar.appendChild(navToday)
            navToday.textContent='Today'    

        const navThisWeek = document.createElement('div')
        navThisWeek.classList.add('nav-element')
        navThisWeek.dataset.isactive=false
        navBar.appendChild(navThisWeek)
            navThisWeek.textContent='This week'
            
        const navOverdue = document.createElement('div')
        navOverdue.classList.add('nav-element')
        navOverdue.dataset.isactive=false
        navBar.appendChild(navOverdue)
        navOverdue.textContent='Overdue'

        const navProjects = document.createElement('div')
        navProjects.classList.add('nav-element')
        navProjects.dataset.isactive=false
        navBar.appendChild(navProjects)
        navProjects.textContent='Projects'

        const navTrash = document.createElement('div')
        navTrash.classList.add('nav-element')
        navTrash.dataset.isactive=false
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sWUFBWSxZQUFZLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsWUFBWSxZQUFZLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxZQUFZLFlBQVksV0FBVyxNQUFNLE1BQU0sWUFBWSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFX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Q0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOzs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDUztBQUNpQjtBQUNSOzs7QUFHdkM7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQixtREFBUztBQUN6QixZQUFZLCtDQUFLOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixJQUFJO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQTs7OztBQUlBOzs7O0FBSUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxpQkFBaUI7OztBQUdqQjtBQUNBOzs7O0FBSUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOzs7QUFHYjs7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9EQUFPOzs7QUFHUCwyQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3M/NDI1NCIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2FsbC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9kYXRhLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2RyYXdpbmcuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbW9kYWxzLmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDEwZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IDFmciAxZnI7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZ3JpZC1jb2x1bW46IDEvMztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjEsIDc2LCA2MSk7XFxuICBwYWRkaW5nOiAxLjdyZW07XFxuICBmb250LXNpemU6IDIuM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmhlYWRlciAucmVzcG9uc2l2ZS1uYXYge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxufVxcbi5oZWFkZXIgLnJlc3BvbnNpdmUtbmF2ID4gKiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiA2cHg7XFxuICBtYXJnaW4tYm90dG9tOiA5cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIHotaW5kZXg6IDE7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbn1cXG4uaGVhZGVyIC5yZXNwb25zaXZlLW5hdi5pcy1hY3RpdmUgc3BhbjpudGgtY2hpbGQoMSkge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAtMnB4KSByb3RhdGUoNDVkZWcpO1xcbn1cXG4uaGVhZGVyIC5yZXNwb25zaXZlLW5hdi5pcy1hY3RpdmUgc3BhbjpudGgtY2hpbGQoMikge1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNXB4KTtcXG59XFxuLmhlYWRlciAucmVzcG9uc2l2ZS1uYXYuaXMtYWN0aXZlIHNwYW46bnRoLWNoaWxkKDMpIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0zcHgsIDNweCkgcm90YXRlKC00NWRlZyk7XFxufVxcblxcbi5tb2JpbGUtbmF2IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5tb2JpbGUtbmF2LmlzLWFjdGl2ZSB7XFxuICBncmlkLWNvbHVtbjogMS8zO1xcbiAgZ3JpZC1yb3c6IDIvMztcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NCwgMjM4LCAyMzgpO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjQ1cmVtO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlIDAuMnM7XFxuICAgICAgICAgIGFuaW1hdGlvbjogZmFkZSAwLjJzO1xcbn1cXG4ubW9iaWxlLW5hdi5pcy1hY3RpdmUgLm5hdi1lbGVtZW50OmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5tb2JpbGUtbmF2LmlzLWFjdGl2ZSAubGlua3MgLmlnLWltZyB7XFxuICB3aWR0aDogMzBweDtcXG59XFxuLm1vYmlsZS1uYXYuaXMtYWN0aXZlIC5saW5rcyAuaWctaW1nOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XFxufVxcbi5tb2JpbGUtbmF2LmlzLWFjdGl2ZSAubGlua3MgLmdpdGh1Yi1pbWcge1xcbiAgd2lkdGg6IDYwcHg7XFxufVxcbi5tb2JpbGUtbmF2LmlzLWFjdGl2ZSAubGlua3MgLmdpdGh1Yi1pbWc6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGUge1xcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICB9XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC4xKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlIHtcXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgfVxcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMSk7XFxuICB9XFxufVxcbi5uYXYtYmFyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDQsIDIzOCwgMjM4KTtcXG4gIGZvbnQtc2l6ZTogMS4zNXJlbTtcXG4gIGdyaWQtY29sdW1uOiAxO1xcbiAgZ3JpZC1yb3c6IDIvNDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjVyZW07XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDE2MHB4O1xcbn1cXG4ubmF2LWJhciAubmF2LWVsZW1lbnQ6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLm5hdi1iYXIgLmxpbmtzIC5pZy1pbWcge1xcbiAgd2lkdGg6IDMwcHg7XFxufVxcbi5uYXYtYmFyIC5saW5rcyAuaWctaW1nOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XFxufVxcbi5uYXYtYmFyIC5saW5rcyAuZ2l0aHViLWltZyB7XFxuICB3aWR0aDogNjBweDtcXG59XFxuLm5hdi1iYXIgLmxpbmtzIC5naXRodWItaW1nOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XFxufVxcblxcbi5tYWluIHtcXG4gIGdyaWQtY29sdW1uOiAyLzQ7XFxuICBncmlkLXJvdzogMi80O1xcbn1cXG5cXG4ubWFpbi5zaHJpbmsge1xcbiAgZ3JpZC1yb3c6IDMvNDtcXG4gIHBhZGRpbmctdG9wOiAycmVtO1xcbn1cXG5cXG4uYWxsLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBwYWRkaW5nOiAycmVtO1xcbn1cXG5cXG4udGFzay1lbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICB3aWR0aDogNDUwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ0LCAyMzgsIDIzOCk7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgcGFkZGluZzogMCAwLjdyZW07XFxufVxcbi50YXNrLWVsIC5pcy1kb25lIHtcXG4gIGhlaWdodDogMjVweDtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgbWFyZ2luOiAxcmVtO1xcbn1cXG4udGFzay1lbCAuc2hvdy1idG4ge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBwYWRkaW5nOiAwLjRyZW07XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLmFkZC10YXNrLWVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgd2lkdGg6IDQ1MHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NCwgMjM4LCAyMzgpO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIHBhZGRpbmc6IDAgMC43cmVtO1xcbn1cXG4uYWRkLXRhc2stZWwgLm5ldy1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMSwgNzYsIDYxKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIHBhZGRpbmc6IDAuNHJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uYnRuIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmJ0bjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgZ2FwOiAxLjNyZW07XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBsZWZ0OiA1MCU7XFxuICB0b3A6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgaGVpZ2h0OiA1MCU7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG59XFxuLm1vZGFsIC50ZXh0LWZvcm0ge1xcbiAgcGFkZGluZzogOXB4O1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbiAgYm9yZGVyLXdpZHRoOiAwcHg7XFxuICBib3JkZXItY29sb3I6ICNlZDAwMDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgY29sb3I6ICMwMDAwMDA7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggOHB4IHJnYmEoNjYsIDY2LCA2NiwgMC4yKTtcXG4gIHRleHQtc2hhZG93OiAwcHggMHB4IDBweCByZ2JhKDY2LCA2NiwgNjYsIDAuNzUpO1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG59XFxuLm1vZGFsIC5kZXNjcmlwdGlvbi1mb3JtIHtcXG4gIGhlaWdodDogMTAwcHg7XFxuICByZXNpemU6IG5vbmU7XFxufVxcbi5tb2RhbCAudGl0bGUtZm9ybSB7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG59XFxuLm1vZGFsIC5wcm9qZWN0LWZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMjAwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxufVxcbi5tb2RhbCAucHJvamVjdC1mb3JtIC5wcm9qZWN0LXNlbGVjdCB7XFxuICBwYWRkaW5nOiA5cHg7XFxuICBmb250LXNpemU6IDIycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgY29sb3I6ICMwMDAwMDA7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggOHB4IHJnYmEoNjYsIDY2LCA2NiwgMC4yKTtcXG4gIHRleHQtc2hhZG93OiAwcHggMHB4IDBweCByZ2JhKDY2LCA2NiwgNjYsIDAuNzUpO1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG59XFxuLm1vZGFsIC5kYXRlLWZvcm0ge1xcbiAgcGFkZGluZzogOXB4O1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbiAgYm9yZGVyLXdpZHRoOiAwcHg7XFxuICBib3JkZXItY29sb3I6ICNlZDAwMDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgY29sb3I6ICMwMDAwMDA7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggOHB4IHJnYmEoNjYsIDY2LCA2NiwgMC4yKTtcXG4gIHRleHQtc2hhZG93OiAwcHggMHB4IDBweCByZ2JhKDY2LCA2NiwgNjYsIDAuNzUpO1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG59XFxuLm1vZGFsIC5pbXBvcnRhbnQtZm9ybSB7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOyAvKiBTYWZhcmkgKi9cXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTsgLyogSUUgMTAgYW5kIElFIDExICovXFxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICB1c2VyLXNlbGVjdDogbm9uZTsgLyogU3RhbmRhcmQgc3ludGF4ICovXFxuICB3aWR0aDogMjEwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLm1vZGFsIC5ub3QtaW1wb3J0YW50IHtcXG4gIGNvbG9yOiAjZWQwMDAwO1xcbn1cXG4ubW9kYWwgLmltcG9ydGFudCB7XFxuICBjb2xvcjogIzAyZjMyZTtcXG59XFxuLm1vZGFsIC5jbG9zZS1tb2RhbCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDE1cHg7XFxuICByaWdodDogMTVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbn1cXG4ubW9kYWwgLmxpbmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZTtcXG59XFxuLm1vZGFsIC5saW5lOmZpcnN0LWNoaWxkIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG59XFxuLm1vZGFsIC5saW5lOmxhc3QtY2hpbGQge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG59XFxuLm1vZGFsIC5idG4ge1xcbiAgY29sb3I6IHJnYigyNTQsIDI1NCwgMjU0KTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIxLCA3NiwgNjEpO1xcbiAgcGFkZGluZzogMC41cmVtIDVyZW07XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcbi5tb2RhbCAuZGVsZXRlLWJ0biB7XFxuICBtYXJnaW4tdG9wOiAwcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMC4zcmVtO1xcbn1cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCxcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBmb250OiBpbmhlcml0O1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSxcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcblxcbm9sLCB1bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5ibG9ja3F1b3RlLCBxIHtcXG4gIHF1b3Rlczogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBjb250ZW50OiBub25lO1xcbn1cXG5cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XFxufS8qIyBzb3VyY2VNYXBwaW5nVVJMPXN0eWxlLmNzcy5tYXAgKi9AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcwMXB4KSB7XFxuICAucmVzcG9uc2l2ZS1uYXYge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XFxuICAubmF2LWJhciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICAudGFzay1lbCB7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gIH1cXG4gIC5hZGQtdGFzay1lbCB7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gIH1cXG4gIC5tYWluIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvNDtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIixcIjxubyBzb3VyY2U+XCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUtBO0VBQ0ksa0NBQUE7QUNKSjs7QURPQTtFQUNJLGtDQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSwrQkFBQTtFQUNBLGlDQUFBO0FDSko7O0FET0E7RUFDSSxnQkFBQTtFQUNBLGtDQWxCSTtFQW1CSixlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0pKO0FEUUk7RUFDUSxpQkFBQTtFQUNBLGVBQUE7QUNOWjtBRE9RO0VBRUksY0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUVBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBRUEscUJBQUE7RUFFQSxnQkFBQTtBQ1RaO0FEYUk7RUFDSSw2Q0FBQTtBQ1hSO0FEY0k7RUFDSSxVQUFBO0VBQ0EsMkJBQUE7QUNaUjtBRGVJO0VBQ0ksOENBQUE7QUNiUjs7QURrQkE7RUFDSSxhQUFBO0FDZko7O0FEbUJBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFFQSxvQ0F4RUk7RUF5RUosZUFBQTtFQUVBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBRUEsWUFBQTtFQUNBLGFBQUE7RUFFQSw0QkFBQTtVQUFBLG9CQUFBO0FDcEJKO0FEeUJJO0VBQ0ksc0JBQUE7RUFDQSxlQUFBO0FDdkJSO0FENEJRO0VBQ0ksV0FBQTtBQzFCWjtBRDRCUTtFQUNJLGVBQUE7RUFDQSxzQkFBQTtBQzFCWjtBRDRCUTtFQUNJLFdBQUE7QUMxQlo7QUQ2QlE7RUFDSSxlQUFBO0VBQ0Esc0JBQUE7QUMzQlo7O0FEb0NBO0VBQ0k7SUFDSSxtQkFBQTtFQ2pDTjtFRG9D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O0FEcUZJO0VBQ0ksY0FBQTtBQ25GUjtBRDRGSTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQzFGUjtBRDZGSTtFQUVJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUVBLCtCQUFBO0FDN0ZSO0FEaUdNO0VBQ0Usd0JBQUE7QUMvRlI7QURrR007RUFDRSx5QkFBQTtBQ2hHUjtBRHVHSTtFQUNJLHlCQXRaQTtFQXVaQSxnQkFBQTtFQUNBLGtDQXpaQTtFQTBaQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ3JHUjtBRHVHSTtFQUNJLGdCQUFBO0VBQ0EscUJBQUE7QUNyR1I7QURnS0E7Ozs7Ozs7Ozs7Ozs7RUFhQyxTQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0FDMUlEOztBRDRJQSxnREFBQTtBQUNBOztFQUVDLGNBQUE7QUN6SUQ7O0FEMklBO0VBQ0MsY0FBQTtBQ3hJRDs7QUQwSUE7RUFDQyxnQkFBQTtBQ3ZJRDs7QUR5SUE7RUFDQyxZQUFBO0FDdElEOztBRHdJQTs7RUFFQyxXQUFBO0VBQ0EsYUFBQTtBQ3JJRDs7QUR1SUE7RUFDQyx5QkFBQTtFQUNBLGlCQUFBO0FDcElELENBQUEsb0NBQUEsQ0NsWUE7RUYrYUk7SUFDSSxhQUFBO0VDOUdOO0FBMkRGLENDN1hBO0VGdWJJO0lBQ0ksYUFBQTtFQ2pITjtFRG9IRTtJQUNJLFlBQUE7RUNsSE47RURvSEU7SUFDSSxZQUFBO0VDbEhOO0VEc0hFO0lBQ0ksZ0JBQUE7RUNwSE47QUEwREZcIixcInNvdXJjZXNDb250ZW50XCI6W251bGwsXCJib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDEwZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IDFmciAxZnI7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZ3JpZC1jb2x1bW46IDEvMztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjEsIDc2LCA2MSk7XFxuICBwYWRkaW5nOiAxLjdyZW07XFxuICBmb250LXNpemU6IDIuM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmhlYWRlciAucmVzcG9uc2l2ZS1uYXYge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxufVxcbi5oZWFkZXIgLnJlc3BvbnNpdmUtbmF2ID4gKiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiA2cHg7XFxuICBtYXJnaW4tYm90dG9tOiA5cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIHotaW5kZXg6IDE7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbn1cXG4uaGVhZGVyIC5yZXNwb25zaXZlLW5hdi5pcy1hY3RpdmUgc3BhbjpudGgtY2hpbGQoMSkge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAtMnB4KSByb3RhdGUoNDVkZWcpO1xcbn1cXG4uaGVhZGVyIC5yZXNwb25zaXZlLW5hdi5pcy1hY3RpdmUgc3BhbjpudGgtY2hpbGQoMikge1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNXB4KTtcXG59XFxuLmhlYWRlciAucmVzcG9uc2l2ZS1uYXYuaXMtYWN0aXZlIHNwYW46bnRoLWNoaWxkKDMpIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0zcHgsIDNweCkgcm90YXRlKC00NWRlZyk7XFxufVxcblxcbi5tb2JpbGUtbmF2IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5tb2JpbGUtbmF2LmlzLWFjdGl2ZSB7XFxuICBncmlkLWNvbHVtbjogMS8zO1xcbiAgZ3JpZC1yb3c6IDIvMztcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NCwgMjM4LCAyMzgpO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjQ1cmVtO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlIDAuMnM7XFxuICAgICAgICAgIGFuaW1hdGlvbjogZmFkZSAwLjJzO1xcbn1cXG4ubW9iaWxlLW5hdi5pcy1hY3RpdmUgLm5hdi1lbGVtZW50OmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5tb2JpbGUtbmF2LmlzLWFjdGl2ZSAubGlua3MgLmlnLWltZyB7XFxuICB3aWR0aDogMzBweDtcXG59XFxuLm1vYmlsZS1uYXYuaXMtYWN0aXZlIC5saW5rcyAuaWctaW1nOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XFxufVxcbi5tb2JpbGUtbmF2LmlzLWFjdGl2ZSAubGlua3MgLmdpdGh1Yi1pbWcge1xcbiAgd2lkdGg6IDYwcHg7XFxufVxcbi5tb2JpbGUtbmF2LmlzLWFjdGl2ZSAubGlua3MgLmdpdGh1Yi1pbWc6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGUge1xcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICB9XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC4xKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlIHtcXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgfVxcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMSk7XFxuICB9XFxufVxcbi5uYXYtYmFyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDQsIDIzOCwgMjM4KTtcXG4gIGZvbnQtc2l6ZTogMS4zNXJlbTtcXG4gIGdyaWQtY29sdW1uOiAxO1xcbiAgZ3JpZC1yb3c6IDIvNDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjVyZW07XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDE2MHB4O1xcbn1cXG4ubmF2LWJhciAubmF2LWVsZW1lbnQ6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLm5hdi1iYXIgLmxpbmtzIC5pZy1pbWcge1xcbiAgd2lkdGg6IDMwcHg7XFxufVxcbi5uYXYtYmFyIC5saW5rcyAuaWctaW1nOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XFxufVxcbi5uYXYtYmFyIC5saW5rcyAuZ2l0aHViLWltZyB7XFxuICB3aWR0aDogNjBweDtcXG59XFxuLm5hdi1iYXIgLmxpbmtzIC5naXRodWItaW1nOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XFxufVxcblxcbi5tYWluIHtcXG4gIGdyaWQtY29sdW1uOiAyLzQ7XFxuICBncmlkLXJvdzogMi80O1xcbn1cXG5cXG4ubWFpbi5zaHJpbmsge1xcbiAgZ3JpZC1yb3c6IDMvNDtcXG4gIHBhZGRpbmctdG9wOiAycmVtO1xcbn1cXG5cXG4uYWxsLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBwYWRkaW5nOiAycmVtO1xcbn1cXG5cXG4udGFzay1lbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICB3aWR0aDogNDUwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ0LCAyMzgsIDIzOCk7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgcGFkZGluZzogMCAwLjdyZW07XFxufVxcbi50YXNrLWVsIC5pcy1kb25lIHtcXG4gIGhlaWdodDogMjVweDtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgbWFyZ2luOiAxcmVtO1xcbn1cXG4udGFzay1lbCAuc2hvdy1idG4ge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBwYWRkaW5nOiAwLjRyZW07XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLmFkZC10YXNrLWVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgd2lkdGg6IDQ1MHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NCwgMjM4LCAyMzgpO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIHBhZGRpbmc6IDAgMC43cmVtO1xcbn1cXG4uYWRkLXRhc2stZWwgLm5ldy1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMSwgNzYsIDYxKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIHBhZGRpbmc6IDAuNHJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uYnRuIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmJ0bjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgZ2FwOiAxLjNyZW07XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBsZWZ0OiA1MCU7XFxuICB0b3A6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgaGVpZ2h0OiA1MCU7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG59XFxuLm1vZGFsIC50ZXh0LWZvcm0ge1xcbiAgcGFkZGluZzogOXB4O1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbiAgYm9yZGVyLXdpZHRoOiAwcHg7XFxuICBib3JkZXItY29sb3I6ICNlZDAwMDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgY29sb3I6ICMwMDAwMDA7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggOHB4IHJnYmEoNjYsIDY2LCA2NiwgMC4yKTtcXG4gIHRleHQtc2hhZG93OiAwcHggMHB4IDBweCByZ2JhKDY2LCA2NiwgNjYsIDAuNzUpO1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG59XFxuLm1vZGFsIC5kZXNjcmlwdGlvbi1mb3JtIHtcXG4gIGhlaWdodDogMTAwcHg7XFxuICByZXNpemU6IG5vbmU7XFxufVxcbi5tb2RhbCAudGl0bGUtZm9ybSB7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG59XFxuLm1vZGFsIC5wcm9qZWN0LWZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMjAwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxufVxcbi5tb2RhbCAucHJvamVjdC1mb3JtIC5wcm9qZWN0LXNlbGVjdCB7XFxuICBwYWRkaW5nOiA5cHg7XFxuICBmb250LXNpemU6IDIycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgY29sb3I6ICMwMDAwMDA7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggOHB4IHJnYmEoNjYsIDY2LCA2NiwgMC4yKTtcXG4gIHRleHQtc2hhZG93OiAwcHggMHB4IDBweCByZ2JhKDY2LCA2NiwgNjYsIDAuNzUpO1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG59XFxuLm1vZGFsIC5kYXRlLWZvcm0ge1xcbiAgcGFkZGluZzogOXB4O1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbiAgYm9yZGVyLXdpZHRoOiAwcHg7XFxuICBib3JkZXItY29sb3I6ICNlZDAwMDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgY29sb3I6ICMwMDAwMDA7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggOHB4IHJnYmEoNjYsIDY2LCA2NiwgMC4yKTtcXG4gIHRleHQtc2hhZG93OiAwcHggMHB4IDBweCByZ2JhKDY2LCA2NiwgNjYsIDAuNzUpO1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG59XFxuLm1vZGFsIC5pbXBvcnRhbnQtZm9ybSB7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOyAvKiBTYWZhcmkgKi9cXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTsgLyogSUUgMTAgYW5kIElFIDExICovXFxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICB1c2VyLXNlbGVjdDogbm9uZTsgLyogU3RhbmRhcmQgc3ludGF4ICovXFxuICB3aWR0aDogMjEwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLm1vZGFsIC5ub3QtaW1wb3J0YW50IHtcXG4gIGNvbG9yOiAjZWQwMDAwO1xcbn1cXG4ubW9kYWwgLmltcG9ydGFudCB7XFxuICBjb2xvcjogIzAyZjMyZTtcXG59XFxuLm1vZGFsIC5jbG9zZS1tb2RhbCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDE1cHg7XFxuICByaWdodDogMTVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbn1cXG4ubW9kYWwgLmxpbmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZTtcXG59XFxuLm1vZGFsIC5saW5lOmZpcnN0LWNoaWxkIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG59XFxuLm1vZGFsIC5saW5lOmxhc3QtY2hpbGQge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG59XFxuLm1vZGFsIC5idG4ge1xcbiAgY29sb3I6IHJnYigyNTQsIDI1NCwgMjU0KTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIxLCA3NiwgNjEpO1xcbiAgcGFkZGluZzogMC41cmVtIDVyZW07XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcbi5tb2RhbCAuZGVsZXRlLWJ0biB7XFxuICBtYXJnaW4tdG9wOiAwcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMC4zcmVtO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcwMXB4KSB7XFxuICAucmVzcG9uc2l2ZS1uYXYge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XFxuICAubmF2LWJhciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICAudGFzay1lbCB7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gIH1cXG4gIC5hZGQtdGFzay1lbCB7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gIH1cXG4gIC5tYWluIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvNDtcXG4gIH1cXG59XFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5cXG5vbCwgdWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZSwgcSB7XFxuICBxdW90ZXM6IG5vbmU7XFxufVxcblxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgY29udGVudDogbm9uZTtcXG59XFxuXFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcbn0vKiMgc291cmNlTWFwcGluZ1VSTD1zdHlsZS5jc3MubWFwICovXCIsbnVsbF0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL2dyb3VwLWNzcy1tZWRpYS1xdWVyaWVzLWxvYWRlci9saWIvaW5kZXguanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvZ3JvdXAtY3NzLW1lZGlhLXF1ZXJpZXMtbG9hZGVyL2xpYi9pbmRleC5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJcbmltcG9ydCB7IFByb2plY3QsIFRhc2ssIGFkZFRvUHJvamVjdCwgZGVsZXRlRnJvbVByb2plY3QgfSBmcm9tICcuL2RhdGEuanMnXG5pbXBvcnQgIGRyYXdUYXNrICBmcm9tICcuL2RyYXdpbmcuanMnXG5pbXBvcnQge2RyYXdBZGRUYXNrRWx9IGZyb20gJy4vZHJhd2luZy5qcydcblxuXG5jb25zdCBwMSA9IG5ldyBQcm9qZWN0KCdwcm9qZWt0MScsJ29waXMgcHJvamVrdHUnLFtdKVxuY29uc3QgcDIgPSBuZXcgUHJvamVjdCgncHJvamVrdDInLCdvcGlzIHByb2pla3R1JyxbXSlcbmNvbnN0IHAzID0gbmV3IFByb2plY3QoJ3Byb2pla3QzJywnb3BpcyBwcm9qZWt0dScsW10pXG5cblxuZnVuY3Rpb24gZHJhd0FsbCgpe1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2FsbC1jb250YWluZXInKVxuXG4gICAgXG4gICAgXG4gICAgXG4gICAgY29udGFpbmVyLmFwcGVuZChkcmF3QWRkVGFza0VsKCkpXG4gICAgZm9yKGxldCBpPTA7aTxUYXNrLnRhc2tzLmxlbmd0aDtpKyspe1xuICAgICAgICBjb25zdCB0YXNrRWwgPSBkcmF3VGFzayhUYXNrLnRhc2tzW2ldKVxuICAgICAgICBcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZCh0YXNrRWwpXG5cbiAgICB9XG5cblxuXG4gICAgcmV0dXJuIGNvbnRhaW5lclxufVxuXG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRBbGwoKXtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluXCIpXG5cbiAgICBjb25zdCBuYXZCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdi1iYXJcIilcbiAgICBcblxuICAgIGZvcihsZXQgaSA9IDA7aTxuYXZCYXIuY2hpbGRyZW4ubGVuZ3RoLTI7aSsrKXtcbiAgICAgICAgbmF2QmFyLmNoaWxkcmVuW2ldLmRhdGFzZXQuaXNhY3RpdmU9ZmFsc2VcbiAgICB9XG4gICBcbiAgICB2YXIgYXJyID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoIG5hdkJhci5jaGlsZHJlbiApXG4gICAgbGV0IHJlcyAgPSBhcnIuZmluZChpdGVtID0+IGl0ZW0uaW5uZXJUZXh0ID09ICdBbGwnKTtcbiAgICByZXMuZGF0YXNldC5pc2FjdGl2ZT10cnVlXG4gICAgXG5cblxuICAgIG1haW4udGV4dENvbnRlbnQ9JydcbiAgICBtYWluLmFwcGVuZENoaWxkKGRyYXdBbGwoKSlcbn0iLCIvL2ltcG9ydCB7ICBmb3JtYXQgfSBmcm9tICdkYXRlLWZucydcblxuZXhwb3J0IGNsYXNzIFByb2plY3R7XG4gICAgc3RhdGljIHByb2plY3RzID0gW11cbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSxkZXNjcmlwdGlvbix0YXNrcyl7XG4gICAgICAgIHRoaXMuX3RpdGxlID0gdGl0bGVcbiAgICAgICAgdGhpcy5fZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblxuICAgICAgICB0aGlzLl90YXNrcyA9IHRhc2tzXG4gICAgICAgIFByb2plY3QucHJvamVjdHMucHVzaCh0aGlzKVxuICAgIH1cblxuICAgIGdldCB0aXRsZSgpe3JldHVybiB0aGlzLl90aXRsZX1cbiAgICBnZXQgZGVzY3JpcHRpb24oKXtyZXR1cm4gdGhpcy5fZGVzY3JpcHRpb259XG4gICAgZ2V0IHRhc2tzKCl7cmV0dXJuIHRoaXMuX3Rhc2tzfVxuXG5cbiAgICBzZXQgdGl0bGUodGl0bGUpe3RoaXMuX3RpdGxlPXRpdGxlfVxuICAgIHNldCBkZXNjcmlwdGlvbihkZXNjcmlwdGlvbil7IHRoaXMuX2Rlc2NyaXB0aW9uPWRlc2NyaXB0aW9ufVxuICAgIHNldCB0YXNrcyh0YXNrcyl7dGhpcy5fdGFza3M9dGFza3N9XG4gICAgXG59XG5cbi8vT25lIHRhc2sgY2FuIG9ubHkgYmVsb25nIHRvIG9uZSBwcm9qZWN0XG5leHBvcnQgY2xhc3MgVGFza3tcbiAgICBzdGF0aWMgdGFza3MgPSBbXVxuXG4gICAgY29uc3RydWN0b3IodGl0bGUsZGVzY3JpcHRpb24sZGF0ZSxpbXBvcnRhbnQscHJvamVjdCl7XG4gICAgICAgIHRoaXMuX3RpdGxlID0gdGl0bGVcbiAgICAgICAgdGhpcy5fZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblxuICAgICAgICB0aGlzLl9kYXRlID0gZGF0ZVxuICAgICAgICB0aGlzLl9pbXBvcnRhbnQgPSBpbXBvcnRhbnRcbiAgICAgICAgdGhpcy5fcHJvamVjdCA9IHByb2plY3RcblxuICAgICAgICBUYXNrLnRhc2tzLnB1c2godGhpcylcbiAgICB9XG5cbiAgICBnZXQgdGl0bGUoKXsgcmV0dXJuIHRoaXMuX3RpdGxlfVxuICAgIGdldCBkZXNjcmlwdGlvbigpeyByZXR1cm4gdGhpcy5fZGVzY3JpcHRpb259XG4gICAgZ2V0IGRhdGUoKXsgcmV0dXJuIHRoaXMuX2RhdGV9XG4gICAgZ2V0IGltcG9ydGFudCgpeyByZXR1cm4gdGhpcy5faW1wb3J0YW50fVxuICAgIGdldCBwcm9qZWN0KCl7IHJldHVybiB0aGlzLl9wcm9qZWN0fVxuXG4gICAgc2V0IHRpdGxlKHRpdGxlKXt0aGlzLl90aXRsZT10aXRsZX1cbiAgICBzZXQgZGVzY3JpcHRpb24oZGVzY3JpcHRpb24peyB0aGlzLl9kZXNjcmlwdGlvbj1kZXNjcmlwdGlvbn1cbiAgICBzZXQgZGF0ZShkYXRlKXt0aGlzLl9kYXRlID0gZGF0ZX1cbiAgICBzZXQgaW1wb3J0YW50KGltcG9ydGFudCl7dGhpcy5faW1wb3J0YW50ID0gaW1wb3J0YW50fVxuICAgIHNldCBwcm9qZWN0KHByb2plY3QpeyB0aGlzLl9wcm9qZWN0PXByb2plY3R9XG5cblxuICAgIFxuXG59XG5cbi8vPz8/XG5leHBvcnQgZnVuY3Rpb24gYWRkVG9Qcm9qZWN0KHRhc2sscHJvamVjdFRpdCl7XG5cbiAgICB0YXNrLnByb2plY3QgPSBwcm9qZWN0VGl0XG4gICAgY29uc3QgcHJvamVjdCA9IFByb2plY3QucHJvamVjdHMuZmluZChpdGVtID0+IGl0ZW0udGl0bGUgPT0gcHJvamVjdFRpdCk7XG4gICAgXG4gICAgcHJvamVjdC50YXNrcy5wdXNoKHRhc2sudGl0bGUpXG5cbiAgICBjb25zb2xlLmxvZyhcImFkZGVkIFwiLHRhc2sudGl0bGUsXCJ0byBcIixwcm9qZWN0LnRpdGxlKVxuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVGcm9tUHJvamVjdCh0YXNrLHByb2plY3Qpe1xuICAgIGxldCB0b0RlbCA9IHRhc2suX3Byb2plY3RcbiAgICB0YXNrLl9wcm9qZWN0PScnXG4gICAgcHJvamVjdC5fdGFza3MgPSBwcm9qZWN0Ll90YXNrcy5maWx0ZXIodCA9PnQhPT10YXNrLnRpdGxlKVxuICAgIGNvbnNvbGUubG9nKFwiZGVsZXRlZCBcIix0b0RlbCxcImZyb20gXCIscHJvamVjdC50aXRsZSlcbn1cblxuIiwiaW1wb3J0IHthZGRNb2RhbCwgc2hvd01vZGFsfSBmcm9tICcuL21vZGFscy5qcydcbmltcG9ydCB7VGFza30gZnJvbSAnLi9kYXRhLmpzJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRyYXdUYXNrKHRhc2spe1xuICAgIGNvbnN0IHRhc2tFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGFza0VsLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZWwnKVxuICAgICAgICBjb25zdCBpc0RvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICAgIGlzRG9uZS50eXBlID0gJ2NoZWNrYm94J1xuICAgICAgICBpc0RvbmUuY2xhc3NMaXN0LmFkZCgnaXMtZG9uZScpXG4gICAgICAgIHRhc2tFbC5hcHBlbmRDaGlsZChpc0RvbmUpXG5cbiAgICAgICAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICB0YXNrTmFtZS5jbGFzc0xpc3QuYWRkKCd0YXNrLXRpdGxlJylcbiAgICAgICAgXG4gICAgICAgIHRhc2tOYW1lLnRleHRDb250ZW50ID0gdGFzay50aXRsZVxuICAgICAgICB0YXNrRWwuYXBwZW5kQ2hpbGQodGFza05hbWUpXG5cbiAgICAgICAgY29uc3QgdGFza0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICB0YXNrRGF0ZS5jbGFzc0xpc3QuYWRkKCd0YXNrLWRhdGUnKVxuICAgICAgICB0YXNrRGF0ZS50ZXh0Q29udGVudCA9IHRhc2suZGF0ZVxuICAgICAgICB0YXNrRWwuYXBwZW5kQ2hpbGQodGFza0RhdGUpXG5cbiAgICAgICAgY29uc3Qgc2hvd0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHNob3dCdG4uY2xhc3NMaXN0LmFkZCgnc2hvdy1idG4nKVxuICAgICAgICBzaG93QnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicpXG4gICAgICAgIHNob3dCdG4udGV4dENvbnRlbnQgPSAnU0hPVydcbiAgICAgICAgdGFza0VsLmFwcGVuZENoaWxkKHNob3dCdG4pXG5cbiAgICAgICAgc2hvd0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZHJhd1Nob3dNb2RhbClcblxuXG5cbiAgICByZXR1cm4gdGFza0VsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkcmF3QWRkVGFza0VsKCl7XG4gICAgY29uc3QgdGFza0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0YXNrRWwuY2xhc3NMaXN0LmFkZCgnYWRkLXRhc2stZWwnKVxuICAgICAgICBjb25zdCBuZXdCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBuZXdCdG4uY2xhc3NMaXN0LmFkZCgnbmV3LWJ0bicpXG4gICAgICAgIG5ld0J0bi5jbGFzc0xpc3QuYWRkKCdidG4nKVxuICAgICAgICBuZXdCdG4udGV4dENvbnRlbnQ9XCJORVdcIlxuICAgICAgICB0YXNrRWwuYXBwZW5kQ2hpbGQobmV3QnRuKVxuXG4gICAgICAgIG5ld0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZHJhd0FkZE1vZGFsKVxuXG4gICAgcmV0dXJuIHRhc2tFbFxufVxuXG5mdW5jdGlvbiBkcmF3QWRkTW9kYWwoKXtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluXCIpXG4gICAgbWFpbi5hcHBlbmRDaGlsZChhZGRNb2RhbCgpKVxuICAgIFxufVxuXG5mdW5jdGlvbiBkcmF3U2hvd01vZGFsKGUpe1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW5cIilcbiAgICBsZXQgdGFza1RpdGxlID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5jaGlsZHJlblsxXS50ZXh0Q29udGVudFxuICAgIGxldCB0YXNrID0gVGFzay50YXNrcy5maW5kKHQgPT4gdC5fdGl0bGU9PXRhc2tUaXRsZSlcbiAgICBjb25zb2xlLmxvZyh0YXNrKVxuICAgIG1haW4uYXBwZW5kQ2hpbGQoc2hvd01vZGFsKHRhc2spKVxuXG5cbn0iLCJpbXBvcnQgeyBQcm9qZWN0LCBUYXNrLCBhZGRUb1Byb2plY3QsIGRlbGV0ZUZyb21Qcm9qZWN0IH0gZnJvbSAnLi9kYXRhLmpzJ1xuaW1wb3J0IGxvYWRBbGwgZnJvbSAnLi9hbGwuanMnXG5cblxuZnVuY3Rpb24gWChtb2RhbCl7XG4gICAgY29uc3QgY2xvc2VNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY2xvc2VNb2RhbC5jbGFzc0xpc3QuYWRkKCdjbG9zZS1tb2RhbCcpXG4gICAgXG4gICAgICAgIGNvbnN0IGxYID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgICAgIGNvbnN0IHJYID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgICAgIGxYLmNsYXNzTGlzdC5hZGQoJ2xpbmUnKVxuICAgICAgICByWC5jbGFzc0xpc3QuYWRkKCdsaW5lJylcbiAgICAgICAgY2xvc2VNb2RhbC5hcHBlbmRDaGlsZChsWClcbiAgICAgICAgY2xvc2VNb2RhbC5hcHBlbmRDaGlsZChyWClcblxuICAgICAgICBjbG9zZU1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICAgICAvLyBtb2RhbC5zdHlsZS5kaXNwbGF5PSdub25lJ1xuICAgICAgICAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpblwiKVxuICAgICAgICAgICAgbWFpbi5yZW1vdmVDaGlsZChtb2RhbClcbiAgICAgICAgfSkgIFxuICAgIHJldHVybiBjbG9zZU1vZGFsXG59XG5cblxuZnVuY3Rpb24gY3VycmVudFdpbmRvdygpe1xuICAgIFxuICAgIGNvbnN0IG5hdkJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2LWJhclwiKVxuICAgIHZhciBhcnIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCggbmF2QmFyLmNoaWxkcmVuIClcbiAgICBcbiAgICBsZXQgcmVzICA9IGFyci5maW5kKGl0ZW0gPT4gaXRlbS5kYXRhc2V0LmlzYWN0aXZlID09ICd0cnVlJykuaW5uZXJUZXh0O1xuICAgIFxuXG4gICAgcmV0dXJuIHJlc1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTW9kYWwoKXtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnbW9kYWwnKVxuICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ2FkZC1tb2RhbCcpXG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheT0nZmxleCdcbiAgICBcblxuICAgIG1vZGFsLmFwcGVuZENoaWxkKFgobW9kYWwpKVxuICAgICAgIFxuICAgICAgICBjb25zdCB0aXRsZUZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICB0aXRsZUZvcm0udHlwZSA9ICd0ZXh0JztcbiAgICAgICAgdGl0bGVGb3JtLnBsYWNlaG9sZGVyID0gJ1RpdGxlJztcbiAgICAgICAgdGl0bGVGb3JtLmNsYXNzTGlzdC5hZGQoJ3RpdGxlLWZvcm0nKTtcbiAgICAgICAgdGl0bGVGb3JtLmNsYXNzTGlzdC5hZGQoJ3RleHQtZm9ybScpO1xuICAgICAgICBtb2RhbC5hcHBlbmRDaGlsZCh0aXRsZUZvcm0pO1xuICAgIFxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbkZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgICAgICBkZXNjcmlwdGlvbkZvcm0ucGxhY2Vob2xkZXIgPSAnRGVzY3JpcHRpb24nO1xuICAgICAgICBkZXNjcmlwdGlvbkZvcm0uY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24tZm9ybScpO1xuICAgICAgICBkZXNjcmlwdGlvbkZvcm0uY2xhc3NMaXN0LmFkZCgndGV4dC1mb3JtJyk7XG4gICAgICAgIG1vZGFsLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uRm9ybSk7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBwcm9qZWN0Rm9ybS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWZvcm0nKVxuICAgICAgICAgICAgY29uc3QgcHJvamVjdFNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpXG4gICAgICAgICAgICBwcm9qZWN0U2VsZWN0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3Qtc2VsZWN0JylcbiAgICAgICAgICAgIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKHByb2plY3RTZWxlY3QpXG5cbiAgICAgICAgICAgIGNvbnN0IG9wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gICAgICAgICAgICBvcHQudmFsdWU9MFxuICAgICAgICAgICAgb3B0LnRleHQ9J25vbmUnXG4gICAgICAgICAgICBwcm9qZWN0U2VsZWN0LmFwcGVuZENoaWxkKG9wdClcblxuICAgICAgICAgICAgZm9yKGxldCBpPTA7aTxQcm9qZWN0LnByb2plY3RzLmxlbmd0aDtpKyspe1xuICAgICAgICAgICAgICAgIGNvbnN0IG9wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gICAgICAgICAgICAgICAgb3B0LnZhbHVlPWkrMVxuICAgICAgICAgICAgICAgIG9wdC50ZXh0PVByb2plY3QucHJvamVjdHNbaV0udGl0bGVcbiAgICAgICAgICAgICAgICBwcm9qZWN0U2VsZWN0LmFwcGVuZENoaWxkKG9wdClcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICBtb2RhbC5hcHBlbmRDaGlsZChwcm9qZWN0Rm9ybSk7ICAgICAgICAgICAgXG5cbiAgICAgICAgY29uc3QgZGF0ZUZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBkYXRlRm9ybS50eXBlID0gJ2RhdGUnO1xuICAgICAgICBkYXRlRm9ybS5jbGFzc0xpc3QuYWRkKCdkYXRlLWZvcm0nKTtcbiAgICAgICAgbW9kYWwuYXBwZW5kQ2hpbGQoZGF0ZUZvcm0pO1xuICAgIFxuXG4gICAgICAgIFxuICAgICAgICBjb25zdCBpbXBvcnRhbnRGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgaW1wb3J0YW50Rm9ybS5jbGFzc0xpc3QuYWRkKCdpbXBvcnRhbnQtZm9ybScpXG4gICAgICAgIGltcG9ydGFudEZvcm0uY2xhc3NMaXN0LmFkZCgnbm90LWltcG9ydGFudCcpXG4gICAgICAgIGltcG9ydGFudEZvcm0udGV4dENvbnRlbnQgPSAnbm90IGltcG9ydGFudCdcbiAgICAgICAgaW1wb3J0YW50Rm9ybS5kYXRhc2V0LmltcG9ydGFudD1mYWxzZVxuICAgICAgICBpbXBvcnRhbnRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICAgICAgaW1wb3J0YW50Rm9ybS5jbGFzc0xpc3QudG9nZ2xlKCdub3QtaW1wb3J0YW50JylcbiAgICAgICAgICAgIGltcG9ydGFudEZvcm0uY2xhc3NMaXN0LnRvZ2dsZSgnaW1wb3J0YW50JylcblxuICAgICAgICAgICAgaWYoaW1wb3J0YW50Rm9ybS5jbGFzc0xpc3QuY29udGFpbnMoJ2ltcG9ydGFudCcpKXtcbiAgICAgICAgICAgICAgICBpbXBvcnRhbnRGb3JtLnRleHRDb250ZW50ID0gJ2ltcG9ydGFudCdcbiAgICAgICAgICAgICAgICBpbXBvcnRhbnRGb3JtLmRhdGFzZXQuaW1wb3J0YW50PXRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYoaW1wb3J0YW50Rm9ybS5jbGFzc0xpc3QuY29udGFpbnMoJ25vdC1pbXBvcnRhbnQnKSl7XG4gICAgICAgICAgICAgICAgaW1wb3J0YW50Rm9ybS50ZXh0Q29udGVudCA9ICdub3QgaW1wb3J0YW50J1xuICAgICAgICAgICAgICAgIGltcG9ydGFudEZvcm0uZGF0YXNldC5pbXBvcnRhbnQ9ZmFsc2VcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgIH0pXG4gICAgICAgIG1vZGFsLmFwcGVuZENoaWxkKGltcG9ydGFudEZvcm0pXG5cblxuXG4gICAgICAgIGNvbnN0IHN1Ym1pdEJ0bj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBzdWJtaXRCdG4uaW5uZXJUZXh0ID0gJ1NVQk1JVCdcbiAgICAgICAgc3VibWl0QnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicpXG4gICAgICAgIHN1Ym1pdEJ0bi5jbGFzc0xpc3QuYWRkKCdzdWJtaXQtYnRuJylcblxuICAgICAgICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgICAgICBsZXQgdGl0bGUgPSB0aXRsZUZvcm0udmFsdWVcbiAgICAgICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uRm9ybS52YWx1ZVxuICAgICAgICAgICAgbGV0IHByb2plY3QgPSBwcm9qZWN0U2VsZWN0Lm9wdGlvbnNbcHJvamVjdFNlbGVjdC5zZWxlY3RlZEluZGV4XS50ZXh0XG4gICAgICAgICAgICBsZXQgaW1wb3J0YW50ID0gaW1wb3J0YW50Rm9ybS5kYXRhc2V0LmltcG9ydGFudFxuICAgICAgICAgICAgbGV0IGRhdGUgPSBkYXRlRm9ybS52YWx1ZVxuXG4gICAgICAgICAgICBpZihwcm9qZWN0PT0nbm9uZScpe1xuICAgICAgICAgICAgICAgIHByb2plY3Q9JydcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHRpdGxlPT0nJyl7XG4gICAgICAgICAgICAgICAgdGl0bGU9J3VubmFtZWQnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB0YXNrID0gbmV3IFRhc2sodGl0bGUsZGVzY3JpcHRpb24sZGF0ZSxpbXBvcnRhbnQscHJvamVjdClcbiAgICAgICAgICAgIGlmKHByb2plY3QhPScnKXtcbiAgICAgICAgICAgICAgICBhZGRUb1Byb2plY3QodGFzayxwcm9qZWN0KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKGN1cnJlbnRXaW5kb3coKT09J0FsbCcpIGxvYWRBbGwoKVxuXG5cblxuICAgICAgICAgICAgY29uc29sZS5sb2codGFzaylcblxuICAgICAgICB9KVxuXG5cbiAgICAgICAgbW9kYWwuYXBwZW5kQ2hpbGQoc3VibWl0QnRuKVxuICAgIFxuICAgIFxuICAgXG5cblxuXG4gICAgcmV0dXJuIG1vZGFsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93TW9kYWwodGFzayl7XG4gICAgY29uc3QgbW9kYWwgPSBhZGRNb2RhbCgpXG4gICAgICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdkZWxldGUtYnRuJylcbiAgICAgICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicpXG4gICAgICAgIGRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9ICdERUxFVEUnXG4gICAgICAgIG1vZGFsLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bilcblxuICAgICAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnI3Rhc2sgdGl0bGU6Jyx0YXNrLnRpdGxlKVxuICAgICAgICAgICAgY29uc29sZS5sb2coJyN0YXNrczonLFRhc2sudGFza3MpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFRhc2sudGFza3MgPSBUYXNrLnRhc2tzLmZpbHRlcigodCk9PnQudGl0bGUhPXRhc2sudGl0bGUpXG4gICAgICAgICAgICByZWZyZXNoKClcbiAgICAgICAgfSlcblxuXG5cbiAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdhZGQtbW9kYWwnKVxuICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ2VkaXQtbW9kYWwnKVxuICAgICAgICBjb25zdCB0aXRsZUZvcm0gPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCcudGl0bGUtZm9ybScpXG4gICAgICAgIHRpdGxlRm9ybS52YWx1ZSA9IHRhc2sudGl0bGVcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uRm9ybSA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5kZXNjcmlwdGlvbi1mb3JtJylcbiAgICAgICAgZGVzY3JpcHRpb25Gb3JtLnZhbHVlID0gdGFzay5kZXNjcmlwdGlvblxuXG4gICAgICAgIGNvbnN0IHByb2plY3RTZWxlY3QgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1zZWxlY3QnKVxuXG4gICAgICAgIGxldCBpbmRleD0wXG4gICAgICAgIFxuICAgICAgICBpZih0YXNrLnByb2plY3QhPScnKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdQUk9KRUNUIEVYSVNUJylcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7aTw9UHJvamVjdC5wcm9qZWN0cy5sZW5ndGg7aSsrKXtcblxuICAgICAgICAgICAgICAgIGlmKHRhc2sucHJvamVjdD09cHJvamVjdFNlbGVjdC5vcHRpb25zW2ldLmlubmVyVGV4dCl7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpbmRleCA9IChwcm9qZWN0U2VsZWN0Lm9wdGlvbnNbaV0udmFsdWUpIFxuICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHByb2plY3RTZWxlY3Quc2VsZWN0ZWRJbmRleCA9IGluZGV4XG4gICAgICAgIFxuICAgICAgICBjb25zdCBkYXRlRm9ybSA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5kYXRlLWZvcm0nKVxuICAgICAgICBkYXRlRm9ybS52YWx1ZSA9IHRhc2suZGF0ZVxuICAgICAgICBcbiAgICAgICAgY29uc3QgaW1wb3J0YW50Rm9ybSA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5pbXBvcnRhbnQtZm9ybScpXG4gICAgICAgIGNvbnNvbGUubG9nKHRhc2suaW1wb3J0YW50KVxuICAgICAgICBjb25zdCBpbXAgPSB0YXNrLmltcG9ydGFudFxuICAgICAgICBcbiAgICAgICAgaWYoaW1wPT0ndHJ1ZScpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1RSVUVFRUVFJylcbiAgICAgICAgICAgIGltcG9ydGFudEZvcm0uZGF0YXNldC5pbXBvcnRhbnQ9J3RydWUnXG4gICAgICAgICAgICBpbXBvcnRhbnRGb3JtLmNsYXNzTGlzdC5hZGQoJ2ltcG9ydGFudCcpXG4gICAgICAgICAgICBpbXBvcnRhbnRGb3JtLnRleHRDb250ZW50ID0gJ2ltcG9ydGFudCdcbiAgICAgICAgICAgIGltcG9ydGFudEZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnbm90LWltcG9ydGFudCcpXG4gICAgICAgIH1cblxuICAgICAgICBcblxuXG4gICAgICAgIGNvbnN0IHN1Ym1pdEJ0biA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXQtYnRuJylcbiAgICAgICAgLy8qY2xvbmluZyBub2RlcyB0byByZW1vdmUgYWxsIGV2ZW50IGxpc3RlbmVycyBmcm9tIHN1Ym1pdCBidG5cbiAgICAgICAgY29uc3QgZWRpdFN1Ym1pdEJ0biA9IHN1Ym1pdEJ0bi5jbG9uZU5vZGUodHJ1ZSlcbiAgICAgICAgc3VibWl0QnRuLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKGVkaXRTdWJtaXRCdG4sc3VibWl0QnRuKVxuXG4gICAgICAgIGVkaXRTdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgICAgICBsZXQgdGl0bGUgPSB0aXRsZUZvcm0udmFsdWVcbiAgICAgICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uRm9ybS52YWx1ZVxuICAgICAgICAgICAgbGV0IHByb2plY3QgPSBwcm9qZWN0U2VsZWN0Lm9wdGlvbnNbcHJvamVjdFNlbGVjdC5zZWxlY3RlZEluZGV4XS50ZXh0XG4gICAgICAgICAgICBsZXQgaW1wb3J0YW50ID0gaW1wb3J0YW50Rm9ybS5kYXRhc2V0LmltcG9ydGFudFxuICAgICAgICAgICAgbGV0IGRhdGUgPSBkYXRlRm9ybS52YWx1ZVxuXG4gICAgICAgICAgICBpZihwcm9qZWN0PT0nbm9uZScpe1xuICAgICAgICAgICAgICAgIHByb2plY3Q9JydcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHRpdGxlPT0nJyl7XG4gICAgICAgICAgICAgICAgdGl0bGU9J3VubmFtZWQnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKHByb2plY3QhPScnKXtcbiAgICAgICAgICAgICAgICBhZGRUb1Byb2plY3QodGFzayxwcm9qZWN0KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0YXNrLnRpdGxlID0gdGl0bGVcbiAgICAgICAgICAgIHRhc2suZGVzY3JpcHRpb249ZGVzY3JpcHRpb25cbiAgICAgICAgICAgIHRhc2sucHJvamVjdD1wcm9qZWN0XG4gICAgICAgICAgICB0YXNrLmltcG9ydGFudCA9IGltcG9ydGFudFxuICAgICAgICAgICAgdGFzay5kYXRlPWRhdGVcblxuICAgICAgICAgICAgXG4gICAgICAgICAgICByZWZyZXNoKClcblxuXG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhc2spXG5cbiAgICAgICAgfSlcblxuXG5cbiAgICBtb2RhbC5hcHBlbmRDaGlsZChYKG1vZGFsKSlcblxuXG5cbiAgICBmdW5jdGlvbiByZWZyZXNoKCl7XG4gICAgICAgIGlmKGN1cnJlbnRXaW5kb3coKT09J0FsbCcpIGxvYWRBbGwoKVxuICAgIH1cblxuICAgIHJldHVybiBtb2RhbFxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBsb2FkQWxsIGZyb20gJy4vYWxsLmpzJ1xuaW1wb3J0IGdpdGh1YkltZyBmcm9tICcuL2ltYWdlcy9naXRodWJsb2dvLnBuZydcbmltcG9ydCBpZ0ltZyBmcm9tICcuL2ltYWdlcy9pZ2xvZ28ucG5nJ1xuXG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIilcblxuY29uc3QgR2l0aHViSW1nID0gbmV3IEltYWdlKClcbmNvbnN0IElnSW1nID0gbmV3IEltYWdlKClcbkdpdGh1YkltZy5zcmMgPSBnaXRodWJJbWdcbklnSW1nLnNyYyA9IGlnSW1nXG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpe1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIilcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50PVwiVG8gZG8gTGlzdFwiXG5cblxuXG4gICAgLy9yZXBvbnNpdmUgbmF2YmFyLy9cbiAgICBjb25zdCByZXBvbnNpdmVOYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHJlcG9uc2l2ZU5hdi5jbGFzc0xpc3QuYWRkKCdyZXNwb25zaXZlLW5hdicpXG4gICAgICAgICAgICBmb3IobGV0IGk9MDtpPDM7aSsrKXtcbiAgICAgICAgICAgICAgICBjb25zdCBsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgICAgICAgICAgICAgLy9saW5lLmNsYXNzTGlzdC5hZGQoJ2xpbmUnKVxuICAgICAgICAgICAgICAgIHJlcG9uc2l2ZU5hdi5hcHBlbmRDaGlsZChsaW5lKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IE5hdkJhclRvQ2xvbmUgPSBjcmVhdGVOYXZCYXIoKVxuICAgICAgICAgICAgY29uc3QgbW9iaWxlTmF2ID0gTmF2QmFyVG9DbG9uZS5jbG9uZU5vZGUodHJ1ZSlcbiAgICAgICAgICAgIG1vYmlsZU5hdi5pZD1cIm1vYmlsZS1uYXZcIlxuICAgICAgICAgICAgbW9iaWxlTmF2LmNsYXNzTGlzdC5hZGQoJ21vYmlsZS1uYXYnKVxuICAgICAgICAgICAgbW9iaWxlTmF2LmNsYXNzTGlzdC5yZW1vdmUoXCJuYXYtYmFyXCIpXG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChtb2JpbGVOYXYpXG5cbiAgICAgICAgICAgIFxuXG5cbiAgICAgICAgICAgIFxuXG5cblxuICAgICAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKHJlcG9uc2l2ZU5hdilcblxuXG5cbiAgICByZXR1cm4gaGVhZGVyXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5hdkJhcigpe1xuICAgIGNvbnN0IG5hdkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbmF2QmFyLmNsYXNzTGlzdC5hZGQoJ25hdi1iYXInKVxuXG4gICAgICAgIGNvbnN0IG5hdkFsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIG5hdkFsbC5jbGFzc0xpc3QuYWRkKCduYXYtZWxlbWVudCcpXG4gICAgICAgIG5hdkFsbC5kYXRhc2V0LmlzYWN0aXZlPWZhbHNlXG4gICAgICAgIG5hdkJhci5hcHBlbmRDaGlsZChuYXZBbGwpXG4gICAgICAgICAgICBuYXZBbGwudGV4dENvbnRlbnQ9J0FsbCdcblxuICAgICAgICBjb25zdCBuYXZUb2RheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIG5hdlRvZGF5LmNsYXNzTGlzdC5hZGQoJ25hdi1lbGVtZW50JylcbiAgICAgICAgbmF2VG9kYXkuZGF0YXNldC5pc2FjdGl2ZT1mYWxzZVxuICAgICAgICBuYXZCYXIuYXBwZW5kQ2hpbGQobmF2VG9kYXkpXG4gICAgICAgICAgICBuYXZUb2RheS50ZXh0Q29udGVudD0nVG9kYXknICAgIFxuXG4gICAgICAgIGNvbnN0IG5hdlRoaXNXZWVrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgbmF2VGhpc1dlZWsuY2xhc3NMaXN0LmFkZCgnbmF2LWVsZW1lbnQnKVxuICAgICAgICBuYXZUaGlzV2Vlay5kYXRhc2V0LmlzYWN0aXZlPWZhbHNlXG4gICAgICAgIG5hdkJhci5hcHBlbmRDaGlsZChuYXZUaGlzV2VlaylcbiAgICAgICAgICAgIG5hdlRoaXNXZWVrLnRleHRDb250ZW50PSdUaGlzIHdlZWsnXG4gICAgICAgICAgICBcbiAgICAgICAgY29uc3QgbmF2T3ZlcmR1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIG5hdk92ZXJkdWUuY2xhc3NMaXN0LmFkZCgnbmF2LWVsZW1lbnQnKVxuICAgICAgICBuYXZPdmVyZHVlLmRhdGFzZXQuaXNhY3RpdmU9ZmFsc2VcbiAgICAgICAgbmF2QmFyLmFwcGVuZENoaWxkKG5hdk92ZXJkdWUpXG4gICAgICAgIG5hdk92ZXJkdWUudGV4dENvbnRlbnQ9J092ZXJkdWUnXG5cbiAgICAgICAgY29uc3QgbmF2UHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBuYXZQcm9qZWN0cy5jbGFzc0xpc3QuYWRkKCduYXYtZWxlbWVudCcpXG4gICAgICAgIG5hdlByb2plY3RzLmRhdGFzZXQuaXNhY3RpdmU9ZmFsc2VcbiAgICAgICAgbmF2QmFyLmFwcGVuZENoaWxkKG5hdlByb2plY3RzKVxuICAgICAgICBuYXZQcm9qZWN0cy50ZXh0Q29udGVudD0nUHJvamVjdHMnXG5cbiAgICAgICAgY29uc3QgbmF2VHJhc2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBuYXZUcmFzaC5jbGFzc0xpc3QuYWRkKCduYXYtZWxlbWVudCcpXG4gICAgICAgIG5hdlRyYXNoLmRhdGFzZXQuaXNhY3RpdmU9ZmFsc2VcbiAgICAgICAgbmF2QmFyLmFwcGVuZENoaWxkKG5hdlRyYXNoKVxuICAgICAgICBuYXZUcmFzaC50ZXh0Q29udGVudD0nVHJhc2gnXG5cblxuICAgICAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJylcbiAgICAgICAgbmF2QmFyLmFwcGVuZENoaWxkKGZvb3RlcilcbiAgICAgICAgICAgIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgIG5hdkJhci5hcHBlbmRDaGlsZChsaW5rcylcbiAgICAgICAgICAgIGxpbmtzLmNsYXNzTGlzdC5hZGQoJ2xpbmtzJylcbiAgICAgICAgICAgICAgICBsaW5rcy5hcHBlbmRDaGlsZChHaXRodWJJbWcpXG4gICAgICAgICAgICAgICAgbGlua3MuYXBwZW5kQ2hpbGQoSWdJbWcpXG4gICAgICAgICAgICAgICAgR2l0aHViSW1nLmNsYXNzTGlzdC5hZGQoJ2dpdGh1Yi1pbWcnKVxuICAgICAgICAgICAgICAgIEdpdGh1YkltZy5jbGFzc0xpc3QuYWRkKCdsaW5rJylcbiAgICAgICAgICAgICAgICBJZ0ltZy5jbGFzc0xpc3QuYWRkKCdpZy1pbWcnKVxuICAgICAgICAgICAgICAgIElnSW1nLmNsYXNzTGlzdC5hZGQoJ2xpbmsnKVxuICAgICAgICAgICAgICAgIEdpdGh1YkltZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lm9wZW4oXCJodHRwczovL2dpdGh1Yi5jb20vTXR0dDcvcmVzdGF1cmFudHBhZ2VcIixcIl9zZWxmXCIpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBJZ0ltZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lm9wZW4oXCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL210dC5qcGVnL1wiLFwiX3NlbGZcIilcbiAgICAgICAgICAgICAgICB9KVxuXG5cbiAgICAgICAgXG4gICAgICAgIFxuXG5cblxuICAgIHJldHVybiBuYXZCYXJcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWFpbigpe1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG1haW4uY2xhc3NMaXN0LmFkZChcIm1haW5cIilcbiAgICBtYWluLmlkPVwibWFpblwiXG5cblxuICAgIGNvbnN0IHJlcG9uc2l2ZU5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzcG9uc2l2ZS1uYXZcIilcbiAgICBjb25zdCBtb2JpbGVOYXYgPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9iaWxlLW5hdlwiKVxuICAgIHJlcG9uc2l2ZU5hdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScpXG4gICAgICAgICAgICAgICAgbW9iaWxlTmF2LmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScpXG4gICAgICAgICAgICAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpblwiKVxuICAgICAgICAgICAgICAgIG1haW4uY2xhc3NMaXN0LnRvZ2dsZSgnc2hyaW5rJylcbiAgICAgICAgICAgIH0pXG5cblxuICAgIHJldHVybiBtYWluXG5cbn1cblxuXG5cbmZ1bmN0aW9uIEluaXRpYWxpemVXZWJzaXRlKCl7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSlcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU5hdkJhcigpKVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTWFpbigpKVxuICAgIFxufVxuXG5Jbml0aWFsaXplV2Vic2l0ZSgpXG5sb2FkQWxsKClcblxuXG5jb25zb2xlLmxvZygnd29ya2luZyBmaW5lJykiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=