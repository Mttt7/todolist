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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  font-family: \"Poppins\", sans-serif;\n}\n\n#content {\n  font-family: \"Poppins\", sans-serif;\n  height: 100vh;\n  display: grid;\n  grid-template-columns: 1fr 10fr;\n  grid-template-rows: 100px 1fr 1fr;\n}\n\n.header {\n  grid-column: 1/3;\n  background-color: rgb(221, 76, 61);\n  padding: 1.7rem;\n  font-size: 2.3rem;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n}\n.header .responsive-nav {\n  margin-left: auto;\n  margin-top: 5px;\n}\n.header .responsive-nav > * {\n  display: block;\n  width: 50px;\n  height: 6px;\n  margin-bottom: 9px;\n  position: relative;\n  background-color: white;\n  border-radius: 6px;\n  z-index: 1;\n  transform-origin: 0 0;\n  transition: 0.4s;\n}\n.header .responsive-nav.is-active span:nth-child(1) {\n  transform: translate(0px, -2px) rotate(45deg);\n}\n.header .responsive-nav.is-active span:nth-child(2) {\n  opacity: 0;\n  transform: translateX(15px);\n}\n.header .responsive-nav.is-active span:nth-child(3) {\n  transform: translate(-3px, 3px) rotate(-45deg);\n}\n\n.mobile-nav {\n  display: none;\n}\n\n.mobile-nav.is-active {\n  grid-column: 1/3;\n  grid-row: 2/3;\n  height: 100%;\n  width: 100%;\n  background-color: rgb(244, 238, 238);\n  font-size: 2rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.45rem;\n  padding: 1rem;\n  -webkit-animation: fade 0.2s;\n          animation: fade 0.2s;\n}\n.mobile-nav.is-active .nav-element:hover {\n  transform: scale(1.05);\n  cursor: pointer;\n}\n.mobile-nav.is-active .links .ig-img {\n  width: 30px;\n}\n.mobile-nav.is-active .links .ig-img:hover {\n  cursor: pointer;\n  transform: scale(1.03);\n}\n.mobile-nav.is-active .links .github-img {\n  width: 60px;\n}\n.mobile-nav.is-active .links .github-img:hover {\n  cursor: pointer;\n  transform: scale(1.03);\n}\n\n@-webkit-keyframes fade {\n  100% {\n    transform: scale(1);\n  }\n  0% {\n    transform: scale(0.1);\n  }\n}\n\n@keyframes fade {\n  100% {\n    transform: scale(1);\n  }\n  0% {\n    transform: scale(0.1);\n  }\n}\n.nav-bar {\n  background-color: rgb(244, 238, 238);\n  font-size: 1.35rem;\n  grid-column: 1;\n  grid-row: 2/4;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  padding: 1rem;\n  height: 100%;\n  width: 160px;\n}\n.nav-bar .nav-element:hover {\n  transform: scale(1.05);\n  cursor: pointer;\n}\n.nav-bar .links .ig-img {\n  width: 30px;\n}\n.nav-bar .links .ig-img:hover {\n  cursor: pointer;\n  transform: scale(1.03);\n}\n.nav-bar .links .github-img {\n  width: 60px;\n}\n.nav-bar .links .github-img:hover {\n  cursor: pointer;\n  transform: scale(1.03);\n}\n\n.main {\n  grid-column: 2/4;\n  grid-row: 2/4;\n}\n\n.main.shrink {\n  grid-row: 3/4;\n  padding-top: 2rem;\n}\n\n.all-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  padding: 2rem;\n}\n\n.task-el {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-top: 1rem;\n  width: 450px;\n  height: 50px;\n  background-color: rgb(244, 238, 238);\n  border-radius: 20px;\n  padding: 0 0.7rem;\n}\n.task-el .is-done {\n  height: 25px;\n  width: 25px;\n  margin: 1rem;\n}\n.task-el .show-btn {\n  margin-left: auto;\n  color: white;\n  background-color: red;\n  padding: 0.4rem;\n  border-radius: 10px;\n  font-weight: 600;\n}\n\n.add-task-el {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  margin-top: 1rem;\n  width: 450px;\n  height: 50px;\n  background-color: rgb(244, 238, 238);\n  border-radius: 20px;\n  padding: 0 0.7rem;\n}\n.add-task-el .new-btn {\n  background-color: rgb(221, 76, 61);\n  color: white;\n  background-color: red;\n  padding: 0.4rem;\n  border-radius: 10px;\n  font-weight: 600;\n}\n\n.btn {\n  cursor: pointer;\n}\n\n.btn:hover {\n  transform: scale(1.05);\n}\n\n.modal {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 1.3rem;\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 400px;\n  height: 50%;\n  border-radius: 20px;\n  background-color: gray;\n}\n.modal .text-form {\n  padding: 9px;\n  font-size: 22px;\n  border-width: 0px;\n  border-color: #ed0000;\n  background-color: #ffffff;\n  color: #000000;\n  border-style: solid;\n  border-radius: 30px;\n  box-shadow: 0px 0px 8px rgba(66, 66, 66, 0.2);\n  text-shadow: 0px 0px 0px rgba(66, 66, 66, 0.75);\n  margin-top: 1rem;\n}\n.modal .description-form {\n  height: 100px;\n  resize: none;\n}\n.modal .title-form {\n  font-size: 1.4rem;\n}\n.modal .project-form {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 200px;\n  height: 50px;\n}\n.modal .project-form .project-select {\n  padding: 9px;\n  font-size: 22px;\n  background-color: #ffffff;\n  color: #000000;\n  border-style: solid;\n  border-radius: 30px;\n  box-shadow: 0px 0px 8px rgba(66, 66, 66, 0.2);\n  text-shadow: 0px 0px 0px rgba(66, 66, 66, 0.75);\n  margin-top: 1rem;\n}\n.modal .date-form {\n  padding: 9px;\n  font-size: 22px;\n  border-width: 0px;\n  border-color: #ed0000;\n  background-color: #ffffff;\n  color: #000000;\n  border-style: solid;\n  border-radius: 30px;\n  box-shadow: 0px 0px 8px rgba(66, 66, 66, 0.2);\n  text-shadow: 0px 0px 0px rgba(66, 66, 66, 0.75);\n  margin-top: 1rem;\n}\n.modal .important-form {\n  -webkit-user-select: none; /* Safari */\n  -ms-user-select: none; /* IE 10 and IE 11 */\n  -moz-user-select: none;\n       user-select: none; /* Standard syntax */\n  width: 210px;\n  height: 40px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.7rem;\n  font-weight: 600;\n  cursor: pointer;\n}\n.modal .not-important {\n  color: #ed0000;\n}\n.modal .important {\n  color: #02f32e;\n}\n.modal .close-modal {\n  display: inline-block;\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  cursor: pointer;\n  width: 30px;\n  height: 30px;\n}\n.modal .line {\n  position: absolute;\n  width: 100%;\n  height: 5px;\n  background-color: white;\n  transition: transform 0.2s ease;\n}\n.modal .line:first-child {\n  transform: rotate(45deg);\n}\n.modal .line:last-child {\n  transform: rotate(-45deg);\n}\n.modal .submit-btn {\n  color: rgb(254, 254, 254);\n  font-weight: 600;\n  background-color: rgb(221, 76, 61);\n  padding: 0.5rem 5rem;\n  border-radius: 20px;\n  margin-top: auto;\n  margin-bottom: 1rem;\n}\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}/*# sourceMappingURL=style.css.map */@media only screen and (min-width: 701px) {\n  .responsive-nav {\n    display: none;\n  }\n}@media only screen and (max-width: 700px) {\n  .nav-bar {\n    display: none;\n  }\n  .task-el {\n    width: 300px;\n  }\n  .add-task-el {\n    width: 300px;\n  }\n  .main {\n    grid-column: 1/4;\n  }\n}", "",{"version":3,"sources":["webpack://./src/style.scss","webpack://./src/style.css","<no source>"],"names":[],"mappings":"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","sourcesContent":[null,"body {\n  font-family: \"Poppins\", sans-serif;\n}\n\n#content {\n  font-family: \"Poppins\", sans-serif;\n  height: 100vh;\n  display: grid;\n  grid-template-columns: 1fr 10fr;\n  grid-template-rows: 100px 1fr 1fr;\n}\n\n.header {\n  grid-column: 1/3;\n  background-color: rgb(221, 76, 61);\n  padding: 1.7rem;\n  font-size: 2.3rem;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n}\n.header .responsive-nav {\n  margin-left: auto;\n  margin-top: 5px;\n}\n.header .responsive-nav > * {\n  display: block;\n  width: 50px;\n  height: 6px;\n  margin-bottom: 9px;\n  position: relative;\n  background-color: white;\n  border-radius: 6px;\n  z-index: 1;\n  transform-origin: 0 0;\n  transition: 0.4s;\n}\n.header .responsive-nav.is-active span:nth-child(1) {\n  transform: translate(0px, -2px) rotate(45deg);\n}\n.header .responsive-nav.is-active span:nth-child(2) {\n  opacity: 0;\n  transform: translateX(15px);\n}\n.header .responsive-nav.is-active span:nth-child(3) {\n  transform: translate(-3px, 3px) rotate(-45deg);\n}\n\n.mobile-nav {\n  display: none;\n}\n\n.mobile-nav.is-active {\n  grid-column: 1/3;\n  grid-row: 2/3;\n  height: 100%;\n  width: 100%;\n  background-color: rgb(244, 238, 238);\n  font-size: 2rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.45rem;\n  padding: 1rem;\n  -webkit-animation: fade 0.2s;\n          animation: fade 0.2s;\n}\n.mobile-nav.is-active .nav-element:hover {\n  transform: scale(1.05);\n  cursor: pointer;\n}\n.mobile-nav.is-active .links .ig-img {\n  width: 30px;\n}\n.mobile-nav.is-active .links .ig-img:hover {\n  cursor: pointer;\n  transform: scale(1.03);\n}\n.mobile-nav.is-active .links .github-img {\n  width: 60px;\n}\n.mobile-nav.is-active .links .github-img:hover {\n  cursor: pointer;\n  transform: scale(1.03);\n}\n\n@-webkit-keyframes fade {\n  100% {\n    transform: scale(1);\n  }\n  0% {\n    transform: scale(0.1);\n  }\n}\n\n@keyframes fade {\n  100% {\n    transform: scale(1);\n  }\n  0% {\n    transform: scale(0.1);\n  }\n}\n.nav-bar {\n  background-color: rgb(244, 238, 238);\n  font-size: 1.35rem;\n  grid-column: 1;\n  grid-row: 2/4;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  padding: 1rem;\n  height: 100%;\n  width: 160px;\n}\n.nav-bar .nav-element:hover {\n  transform: scale(1.05);\n  cursor: pointer;\n}\n.nav-bar .links .ig-img {\n  width: 30px;\n}\n.nav-bar .links .ig-img:hover {\n  cursor: pointer;\n  transform: scale(1.03);\n}\n.nav-bar .links .github-img {\n  width: 60px;\n}\n.nav-bar .links .github-img:hover {\n  cursor: pointer;\n  transform: scale(1.03);\n}\n\n.main {\n  grid-column: 2/4;\n  grid-row: 2/4;\n}\n\n.main.shrink {\n  grid-row: 3/4;\n  padding-top: 2rem;\n}\n\n.all-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  padding: 2rem;\n}\n\n.task-el {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-top: 1rem;\n  width: 450px;\n  height: 50px;\n  background-color: rgb(244, 238, 238);\n  border-radius: 20px;\n  padding: 0 0.7rem;\n}\n.task-el .is-done {\n  height: 25px;\n  width: 25px;\n  margin: 1rem;\n}\n.task-el .show-btn {\n  margin-left: auto;\n  color: white;\n  background-color: red;\n  padding: 0.4rem;\n  border-radius: 10px;\n  font-weight: 600;\n}\n\n.add-task-el {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  margin-top: 1rem;\n  width: 450px;\n  height: 50px;\n  background-color: rgb(244, 238, 238);\n  border-radius: 20px;\n  padding: 0 0.7rem;\n}\n.add-task-el .new-btn {\n  background-color: rgb(221, 76, 61);\n  color: white;\n  background-color: red;\n  padding: 0.4rem;\n  border-radius: 10px;\n  font-weight: 600;\n}\n\n.btn {\n  cursor: pointer;\n}\n\n.btn:hover {\n  transform: scale(1.05);\n}\n\n.modal {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 1.3rem;\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 400px;\n  height: 50%;\n  border-radius: 20px;\n  background-color: gray;\n}\n.modal .text-form {\n  padding: 9px;\n  font-size: 22px;\n  border-width: 0px;\n  border-color: #ed0000;\n  background-color: #ffffff;\n  color: #000000;\n  border-style: solid;\n  border-radius: 30px;\n  box-shadow: 0px 0px 8px rgba(66, 66, 66, 0.2);\n  text-shadow: 0px 0px 0px rgba(66, 66, 66, 0.75);\n  margin-top: 1rem;\n}\n.modal .description-form {\n  height: 100px;\n  resize: none;\n}\n.modal .title-form {\n  font-size: 1.4rem;\n}\n.modal .project-form {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 200px;\n  height: 50px;\n}\n.modal .project-form .project-select {\n  padding: 9px;\n  font-size: 22px;\n  background-color: #ffffff;\n  color: #000000;\n  border-style: solid;\n  border-radius: 30px;\n  box-shadow: 0px 0px 8px rgba(66, 66, 66, 0.2);\n  text-shadow: 0px 0px 0px rgba(66, 66, 66, 0.75);\n  margin-top: 1rem;\n}\n.modal .date-form {\n  padding: 9px;\n  font-size: 22px;\n  border-width: 0px;\n  border-color: #ed0000;\n  background-color: #ffffff;\n  color: #000000;\n  border-style: solid;\n  border-radius: 30px;\n  box-shadow: 0px 0px 8px rgba(66, 66, 66, 0.2);\n  text-shadow: 0px 0px 0px rgba(66, 66, 66, 0.75);\n  margin-top: 1rem;\n}\n.modal .important-form {\n  -webkit-user-select: none; /* Safari */\n  -ms-user-select: none; /* IE 10 and IE 11 */\n  -moz-user-select: none;\n       user-select: none; /* Standard syntax */\n  width: 210px;\n  height: 40px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.7rem;\n  font-weight: 600;\n  cursor: pointer;\n}\n.modal .not-important {\n  color: #ed0000;\n}\n.modal .important {\n  color: #02f32e;\n}\n.modal .close-modal {\n  display: inline-block;\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  cursor: pointer;\n  width: 30px;\n  height: 30px;\n}\n.modal .line {\n  position: absolute;\n  width: 100%;\n  height: 5px;\n  background-color: white;\n  transition: transform 0.2s ease;\n}\n.modal .line:first-child {\n  transform: rotate(45deg);\n}\n.modal .line:last-child {\n  transform: rotate(-45deg);\n}\n.modal .submit-btn {\n  color: rgb(254, 254, 254);\n  font-weight: 600;\n  background-color: rgb(221, 76, 61);\n  padding: 0.5rem 5rem;\n  border-radius: 20px;\n  margin-top: auto;\n  margin-bottom: 1rem;\n}\n\n@media only screen and (min-width: 701px) {\n  .responsive-nav {\n    display: none;\n  }\n}\n@media only screen and (max-width: 700px) {\n  .nav-bar {\n    display: none;\n  }\n  .task-el {\n    width: 300px;\n  }\n  .add-task-el {\n    width: 300px;\n  }\n  .main {\n    grid-column: 1/4;\n  }\n}\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}/*# sourceMappingURL=style.css.map */",null],"sourceRoot":""}]);
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

        // if(task.important==true){
        //     console.log("IMPORTANT")
        //     importantForm.dataset.important = true
        //     importantForm.textContent = 'important'
        //     importantForm.classList.remove('not-important')
        //     importantForm.classList.add('important')
        // }else{
        //     console.log("NOT IMPORTANT")
        //     importantForm.dataset.important = false
        //     importantForm.textContent = 'not important'
        //     importantForm.classList.add('not-important')
        //     importantForm.classList.remove('important')
        // }
        



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

            
            if(currentWindow()=='All') (0,_all_js__WEBPACK_IMPORTED_MODULE_1__["default"])()



            console.log(task)

        })



    modal.appendChild(X(modal))



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sWUFBWSxZQUFZLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsWUFBWSxZQUFZLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxZQUFZLFlBQVksV0FBVyxNQUFNLE1BQU0sWUFBWSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FB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QUFHdkM7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQixtREFBUztBQUN6QixZQUFZLCtDQUFLOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixJQUFJO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQTs7OztBQUlBOzs7O0FBSUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxpQkFBaUI7OztBQUdqQjtBQUNBOzs7O0FBSUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOzs7QUFHYjs7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9EQUFPOzs7QUFHUCwyQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3M/NDI1NCIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2FsbC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9kYXRhLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2RyYXdpbmcuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbW9kYWxzLmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDEwZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IDFmciAxZnI7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZ3JpZC1jb2x1bW46IDEvMztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjEsIDc2LCA2MSk7XFxuICBwYWRkaW5nOiAxLjdyZW07XFxuICBmb250LXNpemU6IDIuM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmhlYWRlciAucmVzcG9uc2l2ZS1uYXYge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxufVxcbi5oZWFkZXIgLnJlc3BvbnNpdmUtbmF2ID4gKiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiA2cHg7XFxuICBtYXJnaW4tYm90dG9tOiA5cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIHotaW5kZXg6IDE7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbn1cXG4uaGVhZGVyIC5yZXNwb25zaXZlLW5hdi5pcy1hY3RpdmUgc3BhbjpudGgtY2hpbGQoMSkge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAtMnB4KSByb3RhdGUoNDVkZWcpO1xcbn1cXG4uaGVhZGVyIC5yZXNwb25zaXZlLW5hdi5pcy1hY3RpdmUgc3BhbjpudGgtY2hpbGQoMikge1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNXB4KTtcXG59XFxuLmhlYWRlciAucmVzcG9uc2l2ZS1uYXYuaXMtYWN0aXZlIHNwYW46bnRoLWNoaWxkKDMpIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0zcHgsIDNweCkgcm90YXRlKC00NWRlZyk7XFxufVxcblxcbi5tb2JpbGUtbmF2IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5tb2JpbGUtbmF2LmlzLWFjdGl2ZSB7XFxuICBncmlkLWNvbHVtbjogMS8zO1xcbiAgZ3JpZC1yb3c6IDIvMztcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NCwgMjM4LCAyMzgpO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjQ1cmVtO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlIDAuMnM7XFxuICAgICAgICAgIGFuaW1hdGlvbjogZmFkZSAwLjJzO1xcbn1cXG4ubW9iaWxlLW5hdi5pcy1hY3RpdmUgLm5hdi1lbGVtZW50OmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5tb2JpbGUtbmF2LmlzLWFjdGl2ZSAubGlua3MgLmlnLWltZyB7XFxuICB3aWR0aDogMzBweDtcXG59XFxuLm1vYmlsZS1uYXYuaXMtYWN0aXZlIC5saW5rcyAuaWctaW1nOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XFxufVxcbi5tb2JpbGUtbmF2LmlzLWFjdGl2ZSAubGlua3MgLmdpdGh1Yi1pbWcge1xcbiAgd2lkdGg6IDYwcHg7XFxufVxcbi5tb2JpbGUtbmF2LmlzLWFjdGl2ZSAubGlua3MgLmdpdGh1Yi1pbWc6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGUge1xcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICB9XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC4xKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlIHtcXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgfVxcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMSk7XFxuICB9XFxufVxcbi5uYXYtYmFyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDQsIDIzOCwgMjM4KTtcXG4gIGZvbnQtc2l6ZTogMS4zNXJlbTtcXG4gIGdyaWQtY29sdW1uOiAxO1xcbiAgZ3JpZC1yb3c6IDIvNDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjVyZW07XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDE2MHB4O1xcbn1cXG4ubmF2LWJhciAubmF2LWVsZW1lbnQ6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLm5hdi1iYXIgLmxpbmtzIC5pZy1pbWcge1xcbiAgd2lkdGg6IDMwcHg7XFxufVxcbi5uYXYtYmFyIC5saW5rcyAuaWctaW1nOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XFxufVxcbi5uYXYtYmFyIC5saW5rcyAuZ2l0aHViLWltZyB7XFxuICB3aWR0aDogNjBweDtcXG59XFxuLm5hdi1iYXIgLmxpbmtzIC5naXRodWItaW1nOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XFxufVxcblxcbi5tYWluIHtcXG4gIGdyaWQtY29sdW1uOiAyLzQ7XFxuICBncmlkLXJvdzogMi80O1xcbn1cXG5cXG4ubWFpbi5zaHJpbmsge1xcbiAgZ3JpZC1yb3c6IDMvNDtcXG4gIHBhZGRpbmctdG9wOiAycmVtO1xcbn1cXG5cXG4uYWxsLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBwYWRkaW5nOiAycmVtO1xcbn1cXG5cXG4udGFzay1lbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICB3aWR0aDogNDUwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ0LCAyMzgsIDIzOCk7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgcGFkZGluZzogMCAwLjdyZW07XFxufVxcbi50YXNrLWVsIC5pcy1kb25lIHtcXG4gIGhlaWdodDogMjVweDtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgbWFyZ2luOiAxcmVtO1xcbn1cXG4udGFzay1lbCAuc2hvdy1idG4ge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBwYWRkaW5nOiAwLjRyZW07XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLmFkZC10YXNrLWVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgd2lkdGg6IDQ1MHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NCwgMjM4LCAyMzgpO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIHBhZGRpbmc6IDAgMC43cmVtO1xcbn1cXG4uYWRkLXRhc2stZWwgLm5ldy1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMSwgNzYsIDYxKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIHBhZGRpbmc6IDAuNHJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uYnRuIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmJ0bjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgZ2FwOiAxLjNyZW07XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBsZWZ0OiA1MCU7XFxuICB0b3A6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgaGVpZ2h0OiA1MCU7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG59XFxuLm1vZGFsIC50ZXh0LWZvcm0ge1xcbiAgcGFkZGluZzogOXB4O1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbiAgYm9yZGVyLXdpZHRoOiAwcHg7XFxuICBib3JkZXItY29sb3I6ICNlZDAwMDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgY29sb3I6ICMwMDAwMDA7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggOHB4IHJnYmEoNjYsIDY2LCA2NiwgMC4yKTtcXG4gIHRleHQtc2hhZG93OiAwcHggMHB4IDBweCByZ2JhKDY2LCA2NiwgNjYsIDAuNzUpO1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG59XFxuLm1vZGFsIC5kZXNjcmlwdGlvbi1mb3JtIHtcXG4gIGhlaWdodDogMTAwcHg7XFxuICByZXNpemU6IG5vbmU7XFxufVxcbi5tb2RhbCAudGl0bGUtZm9ybSB7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG59XFxuLm1vZGFsIC5wcm9qZWN0LWZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMjAwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxufVxcbi5tb2RhbCAucHJvamVjdC1mb3JtIC5wcm9qZWN0LXNlbGVjdCB7XFxuICBwYWRkaW5nOiA5cHg7XFxuICBmb250LXNpemU6IDIycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgY29sb3I6ICMwMDAwMDA7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggOHB4IHJnYmEoNjYsIDY2LCA2NiwgMC4yKTtcXG4gIHRleHQtc2hhZG93OiAwcHggMHB4IDBweCByZ2JhKDY2LCA2NiwgNjYsIDAuNzUpO1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG59XFxuLm1vZGFsIC5kYXRlLWZvcm0ge1xcbiAgcGFkZGluZzogOXB4O1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbiAgYm9yZGVyLXdpZHRoOiAwcHg7XFxuICBib3JkZXItY29sb3I6ICNlZDAwMDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgY29sb3I6ICMwMDAwMDA7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggOHB4IHJnYmEoNjYsIDY2LCA2NiwgMC4yKTtcXG4gIHRleHQtc2hhZG93OiAwcHggMHB4IDBweCByZ2JhKDY2LCA2NiwgNjYsIDAuNzUpO1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG59XFxuLm1vZGFsIC5pbXBvcnRhbnQtZm9ybSB7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOyAvKiBTYWZhcmkgKi9cXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTsgLyogSUUgMTAgYW5kIElFIDExICovXFxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICB1c2VyLXNlbGVjdDogbm9uZTsgLyogU3RhbmRhcmQgc3ludGF4ICovXFxuICB3aWR0aDogMjEwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLm1vZGFsIC5ub3QtaW1wb3J0YW50IHtcXG4gIGNvbG9yOiAjZWQwMDAwO1xcbn1cXG4ubW9kYWwgLmltcG9ydGFudCB7XFxuICBjb2xvcjogIzAyZjMyZTtcXG59XFxuLm1vZGFsIC5jbG9zZS1tb2RhbCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDE1cHg7XFxuICByaWdodDogMTVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbn1cXG4ubW9kYWwgLmxpbmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZTtcXG59XFxuLm1vZGFsIC5saW5lOmZpcnN0LWNoaWxkIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG59XFxuLm1vZGFsIC5saW5lOmxhc3QtY2hpbGQge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG59XFxuLm1vZGFsIC5zdWJtaXQtYnRuIHtcXG4gIGNvbG9yOiByZ2IoMjU0LCAyNTQsIDI1NCk7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMSwgNzYsIDYxKTtcXG4gIHBhZGRpbmc6IDAuNXJlbSA1cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCxcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBmb250OiBpbmhlcml0O1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSxcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcblxcbm9sLCB1bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5ibG9ja3F1b3RlLCBxIHtcXG4gIHF1b3Rlczogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBjb250ZW50OiBub25lO1xcbn1cXG5cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XFxufS8qIyBzb3VyY2VNYXBwaW5nVVJMPXN0eWxlLmNzcy5tYXAgKi9AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcwMXB4KSB7XFxuICAucmVzcG9uc2l2ZS1uYXYge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XFxuICAubmF2LWJhciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICAudGFzay1lbCB7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gIH1cXG4gIC5hZGQtdGFzay1lbCB7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gIH1cXG4gIC5tYWluIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvNDtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIixcIjxubyBzb3VyY2U+XCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUtBO0VBQ0ksa0NBQUE7QUNKSjs7QURPQTtFQUNJ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QUMvRlI7QURrR007RUFDRSx5QkFBQTtBQ2hHUjtBRHFHSTtFQUNJLHlCQXBaQTtFQXFaQSxnQkFBQTtFQUNBLGtDQXZaQTtFQXdaQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ25HUjtBRCtKQTs7Ozs7Ozs7Ozs7OztFQWFDLFNBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7QUN6SUQ7O0FEMklBLGdEQUFBO0FBQ0E7O0VBRUMsY0FBQTtBQ3hJRDs7QUQwSUE7RUFDQyxjQUFBO0FDdklEOztBRHlJQTtFQUNDLGdCQUFBO0FDdElEOztBRHdJQTtFQUNDLFlBQUE7QUNySUQ7O0FEdUlBOztFQUVDLFdBQUE7RUFDQSxhQUFBO0FDcElEOztBRHNJQTtFQUNDLHlCQUFBO0VBQ0EsaUJBQUE7QUNuSUQsQ0FBQSxvQ0FBQSxDQzlYQTtFRjBhSTtJQUNJLGFBQUE7RUM3R047QUEyREYsQ0N6WEE7RUZrYkk7SUFDSSxhQUFBO0VDaEhOO0VEbUhFO0lBQ0ksWUFBQTtFQ2pITjtFRG1IRTtJQUNJLFlBQUE7RUNqSE47RURxSEU7SUFDSSxnQkFBQTtFQ25ITjtBQTBERlwiLFwic291cmNlc0NvbnRlbnRcIjpbbnVsbCxcImJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMTBmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHggMWZyIDFmcjtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBncmlkLWNvbHVtbjogMS8zO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMSwgNzYsIDYxKTtcXG4gIHBhZGRpbmc6IDEuN3JlbTtcXG4gIGZvbnQtc2l6ZTogMi4zcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uaGVhZGVyIC5yZXNwb25zaXZlLW5hdiB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi10b3A6IDVweDtcXG59XFxuLmhlYWRlciAucmVzcG9uc2l2ZS1uYXYgPiAqIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDUwcHg7XFxuICBoZWlnaHQ6IDZweDtcXG4gIG1hcmdpbi1ib3R0b206IDlweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgei1pbmRleDogMTtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxufVxcbi5oZWFkZXIgLnJlc3BvbnNpdmUtbmF2LmlzLWFjdGl2ZSBzcGFuOm50aC1jaGlsZCgxKSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIC0ycHgpIHJvdGF0ZSg0NWRlZyk7XFxufVxcbi5oZWFkZXIgLnJlc3BvbnNpdmUtbmF2LmlzLWFjdGl2ZSBzcGFuOm50aC1jaGlsZCgyKSB7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE1cHgpO1xcbn1cXG4uaGVhZGVyIC5yZXNwb25zaXZlLW5hdi5pcy1hY3RpdmUgc3BhbjpudGgtY2hpbGQoMykge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTNweCwgM3B4KSByb3RhdGUoLTQ1ZGVnKTtcXG59XFxuXFxuLm1vYmlsZS1uYXYge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm1vYmlsZS1uYXYuaXMtYWN0aXZlIHtcXG4gIGdyaWQtY29sdW1uOiAxLzM7XFxuICBncmlkLXJvdzogMi8zO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ0LCAyMzgsIDIzOCk7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDAuNDVyZW07XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGZhZGUgMC4ycztcXG4gICAgICAgICAgYW5pbWF0aW9uOiBmYWRlIDAuMnM7XFxufVxcbi5tb2JpbGUtbmF2LmlzLWFjdGl2ZSAubmF2LWVsZW1lbnQ6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLm1vYmlsZS1uYXYuaXMtYWN0aXZlIC5saW5rcyAuaWctaW1nIHtcXG4gIHdpZHRoOiAzMHB4O1xcbn1cXG4ubW9iaWxlLW5hdi5pcy1hY3RpdmUgLmxpbmtzIC5pZy1pbWc6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcXG59XFxuLm1vYmlsZS1uYXYuaXMtYWN0aXZlIC5saW5rcyAuZ2l0aHViLWltZyB7XFxuICB3aWR0aDogNjBweDtcXG59XFxuLm1vYmlsZS1uYXYuaXMtYWN0aXZlIC5saW5rcyAuZ2l0aHViLWltZzpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZSB7XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIH1cXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjEpO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGUge1xcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICB9XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC4xKTtcXG4gIH1cXG59XFxuLm5hdi1iYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NCwgMjM4LCAyMzgpO1xcbiAgZm9udC1zaXplOiAxLjM1cmVtO1xcbiAgZ3JpZC1jb2x1bW46IDE7XFxuICBncmlkLXJvdzogMi80O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuNXJlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTYwcHg7XFxufVxcbi5uYXYtYmFyIC5uYXYtZWxlbWVudDpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubmF2LWJhciAubGlua3MgLmlnLWltZyB7XFxuICB3aWR0aDogMzBweDtcXG59XFxuLm5hdi1iYXIgLmxpbmtzIC5pZy1pbWc6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcXG59XFxuLm5hdi1iYXIgLmxpbmtzIC5naXRodWItaW1nIHtcXG4gIHdpZHRoOiA2MHB4O1xcbn1cXG4ubmF2LWJhciAubGlua3MgLmdpdGh1Yi1pbWc6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcXG59XFxuXFxuLm1haW4ge1xcbiAgZ3JpZC1jb2x1bW46IDIvNDtcXG4gIGdyaWQtcm93OiAyLzQ7XFxufVxcblxcbi5tYWluLnNocmluayB7XFxuICBncmlkLXJvdzogMy80O1xcbiAgcGFkZGluZy10b3A6IDJyZW07XFxufVxcblxcbi5hbGwtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIHBhZGRpbmc6IDJyZW07XFxufVxcblxcbi50YXNrLWVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG4gIHdpZHRoOiA0NTBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDQsIDIzOCwgMjM4KTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBwYWRkaW5nOiAwIDAuN3JlbTtcXG59XFxuLnRhc2stZWwgLmlzLWRvbmUge1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgd2lkdGg6IDI1cHg7XFxuICBtYXJnaW46IDFyZW07XFxufVxcbi50YXNrLWVsIC5zaG93LWJ0biB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIHBhZGRpbmc6IDAuNHJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uYWRkLXRhc2stZWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICB3aWR0aDogNDUwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ0LCAyMzgsIDIzOCk7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgcGFkZGluZzogMCAwLjdyZW07XFxufVxcbi5hZGQtdGFzay1lbCAubmV3LWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIxLCA3NiwgNjEpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgcGFkZGluZzogMC40cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5idG4ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYnRuOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxufVxcblxcbi5tb2RhbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBnYXA6IDEuM3JlbTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRvcDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICB3aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IDUwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbn1cXG4ubW9kYWwgLnRleHQtZm9ybSB7XFxuICBwYWRkaW5nOiA5cHg7XFxuICBmb250LXNpemU6IDIycHg7XFxuICBib3JkZXItd2lkdGg6IDBweDtcXG4gIGJvcmRlci1jb2xvcjogI2VkMDAwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICBjb2xvcjogIzAwMDAwMDtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCA4cHggcmdiYSg2NiwgNjYsIDY2LCAwLjIpO1xcbiAgdGV4dC1zaGFkb3c6IDBweCAwcHggMHB4IHJnYmEoNjYsIDY2LCA2NiwgMC43NSk7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbn1cXG4ubW9kYWwgLmRlc2NyaXB0aW9uLWZvcm0ge1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIHJlc2l6ZTogbm9uZTtcXG59XFxuLm1vZGFsIC50aXRsZS1mb3JtIHtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbn1cXG4ubW9kYWwgLnByb2plY3QtZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGhlaWdodDogNTBweDtcXG59XFxuLm1vZGFsIC5wcm9qZWN0LWZvcm0gLnByb2plY3Qtc2VsZWN0IHtcXG4gIHBhZGRpbmc6IDlweDtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICBjb2xvcjogIzAwMDAwMDtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCA4cHggcmdiYSg2NiwgNjYsIDY2LCAwLjIpO1xcbiAgdGV4dC1zaGFkb3c6IDBweCAwcHggMHB4IHJnYmEoNjYsIDY2LCA2NiwgMC43NSk7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbn1cXG4ubW9kYWwgLmRhdGUtZm9ybSB7XFxuICBwYWRkaW5nOiA5cHg7XFxuICBmb250LXNpemU6IDIycHg7XFxuICBib3JkZXItd2lkdGg6IDBweDtcXG4gIGJvcmRlci1jb2xvcjogI2VkMDAwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICBjb2xvcjogIzAwMDAwMDtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCA4cHggcmdiYSg2NiwgNjYsIDY2LCAwLjIpO1xcbiAgdGV4dC1zaGFkb3c6IDBweCAwcHggMHB4IHJnYmEoNjYsIDY2LCA2NiwgMC43NSk7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbn1cXG4ubW9kYWwgLmltcG9ydGFudC1mb3JtIHtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIFNhZmFyaSAqL1xcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAvKiBJRSAxMCBhbmQgSUUgMTEgKi9cXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgIHVzZXItc2VsZWN0OiBub25lOyAvKiBTdGFuZGFyZCBzeW50YXggKi9cXG4gIHdpZHRoOiAyMTBweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjdyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubW9kYWwgLm5vdC1pbXBvcnRhbnQge1xcbiAgY29sb3I6ICNlZDAwMDA7XFxufVxcbi5tb2RhbCAuaW1wb3J0YW50IHtcXG4gIGNvbG9yOiAjMDJmMzJlO1xcbn1cXG4ubW9kYWwgLmNsb3NlLW1vZGFsIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTVweDtcXG4gIHJpZ2h0OiAxNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxufVxcbi5tb2RhbCAubGluZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlO1xcbn1cXG4ubW9kYWwgLmxpbmU6Zmlyc3QtY2hpbGQge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbn1cXG4ubW9kYWwgLmxpbmU6bGFzdC1jaGlsZCB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbn1cXG4ubW9kYWwgLnN1Ym1pdC1idG4ge1xcbiAgY29sb3I6IHJnYigyNTQsIDI1NCwgMjU0KTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIxLCA3NiwgNjEpO1xcbiAgcGFkZGluZzogMC41cmVtIDVyZW07XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzAxcHgpIHtcXG4gIC5yZXNwb25zaXZlLW5hdiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gIC5uYXYtYmFyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gIC50YXNrLWVsIHtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgfVxcbiAgLmFkZC10YXNrLWVsIHtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgfVxcbiAgLm1haW4ge1xcbiAgICBncmlkLWNvbHVtbjogMS80O1xcbiAgfVxcbn1cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCxcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBmb250OiBpbmhlcml0O1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSxcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcblxcbm9sLCB1bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5ibG9ja3F1b3RlLCBxIHtcXG4gIHF1b3Rlczogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBjb250ZW50OiBub25lO1xcbn1cXG5cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XFxufS8qIyBzb3VyY2VNYXBwaW5nVVJMPXN0eWxlLmNzcy5tYXAgKi9cIixudWxsXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvZ3JvdXAtY3NzLW1lZGlhLXF1ZXJpZXMtbG9hZGVyL2xpYi9pbmRleC5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9ncm91cC1jc3MtbWVkaWEtcXVlcmllcy1sb2FkZXIvbGliL2luZGV4LmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIlxuaW1wb3J0IHsgUHJvamVjdCwgVGFzaywgYWRkVG9Qcm9qZWN0LCBkZWxldGVGcm9tUHJvamVjdCB9IGZyb20gJy4vZGF0YS5qcydcbmltcG9ydCAgZHJhd1Rhc2sgIGZyb20gJy4vZHJhd2luZy5qcydcbmltcG9ydCB7ZHJhd0FkZFRhc2tFbH0gZnJvbSAnLi9kcmF3aW5nLmpzJ1xuXG5cbmNvbnN0IHAxID0gbmV3IFByb2plY3QoJ3Byb2pla3QxJywnb3BpcyBwcm9qZWt0dScsW10pXG5jb25zdCBwMiA9IG5ldyBQcm9qZWN0KCdwcm9qZWt0MicsJ29waXMgcHJvamVrdHUnLFtdKVxuY29uc3QgcDMgPSBuZXcgUHJvamVjdCgncHJvamVrdDMnLCdvcGlzIHByb2pla3R1JyxbXSlcblxuXG5mdW5jdGlvbiBkcmF3QWxsKCl7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYWxsLWNvbnRhaW5lcicpXG5cbiAgICBcbiAgICBcbiAgICBcbiAgICBjb250YWluZXIuYXBwZW5kKGRyYXdBZGRUYXNrRWwoKSlcbiAgICBmb3IobGV0IGk9MDtpPFRhc2sudGFza3MubGVuZ3RoO2krKyl7XG4gICAgICAgIGNvbnN0IHRhc2tFbCA9IGRyYXdUYXNrKFRhc2sudGFza3NbaV0pXG4gICAgICAgIFxuICAgICAgICBjb250YWluZXIuYXBwZW5kKHRhc2tFbClcblxuICAgIH1cblxuXG5cbiAgICByZXR1cm4gY29udGFpbmVyXG59XG5cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZEFsbCgpe1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW5cIilcblxuICAgIGNvbnN0IG5hdkJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2LWJhclwiKVxuICAgIFxuXG4gICAgZm9yKGxldCBpID0gMDtpPG5hdkJhci5jaGlsZHJlbi5sZW5ndGgtMjtpKyspe1xuICAgICAgICBuYXZCYXIuY2hpbGRyZW5baV0uZGF0YXNldC5pc2FjdGl2ZT1mYWxzZVxuICAgIH1cbiAgIFxuICAgIHZhciBhcnIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCggbmF2QmFyLmNoaWxkcmVuIClcbiAgICBsZXQgcmVzICA9IGFyci5maW5kKGl0ZW0gPT4gaXRlbS5pbm5lclRleHQgPT0gJ0FsbCcpO1xuICAgIHJlcy5kYXRhc2V0LmlzYWN0aXZlPXRydWVcbiAgICBcblxuXG4gICAgbWFpbi50ZXh0Q29udGVudD0nJ1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoZHJhd0FsbCgpKVxufSIsIi8vaW1wb3J0IHsgIGZvcm1hdCB9IGZyb20gJ2RhdGUtZm5zJ1xuXG5leHBvcnQgY2xhc3MgUHJvamVjdHtcbiAgICBzdGF0aWMgcHJvamVjdHMgPSBbXVxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLGRlc2NyaXB0aW9uLHRhc2tzKXtcbiAgICAgICAgdGhpcy5fdGl0bGUgPSB0aXRsZVxuICAgICAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uXG4gICAgICAgIHRoaXMuX3Rhc2tzID0gdGFza3NcbiAgICAgICAgUHJvamVjdC5wcm9qZWN0cy5wdXNoKHRoaXMpXG4gICAgfVxuXG4gICAgZ2V0IHRpdGxlKCl7cmV0dXJuIHRoaXMuX3RpdGxlfVxuICAgIGdldCBkZXNjcmlwdGlvbigpe3JldHVybiB0aGlzLl9kZXNjcmlwdGlvbn1cbiAgICBnZXQgdGFza3MoKXtyZXR1cm4gdGhpcy5fdGFza3N9XG5cblxuICAgIHNldCB0aXRsZSh0aXRsZSl7dGhpcy5fdGl0bGU9dGl0bGV9XG4gICAgc2V0IGRlc2NyaXB0aW9uKGRlc2NyaXB0aW9uKXsgdGhpcy5fZGVzY3JpcHRpb249ZGVzY3JpcHRpb259XG4gICAgc2V0IHRhc2tzKHRhc2tzKXt0aGlzLl90YXNrcz10YXNrc31cbiAgICBcbn1cblxuLy9PbmUgdGFzayBjYW4gb25seSBiZWxvbmcgdG8gb25lIHByb2plY3RcbmV4cG9ydCBjbGFzcyBUYXNre1xuICAgIHN0YXRpYyB0YXNrcyA9IFtdXG5cbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSxkZXNjcmlwdGlvbixkYXRlLGltcG9ydGFudCxwcm9qZWN0KXtcbiAgICAgICAgdGhpcy5fdGl0bGUgPSB0aXRsZVxuICAgICAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uXG4gICAgICAgIHRoaXMuX2RhdGUgPSBkYXRlXG4gICAgICAgIHRoaXMuX2ltcG9ydGFudCA9IGltcG9ydGFudFxuICAgICAgICB0aGlzLl9wcm9qZWN0ID0gcHJvamVjdFxuXG4gICAgICAgIFRhc2sudGFza3MucHVzaCh0aGlzKVxuICAgIH1cblxuICAgIGdldCB0aXRsZSgpeyByZXR1cm4gdGhpcy5fdGl0bGV9XG4gICAgZ2V0IGRlc2NyaXB0aW9uKCl7IHJldHVybiB0aGlzLl9kZXNjcmlwdGlvbn1cbiAgICBnZXQgZGF0ZSgpeyByZXR1cm4gdGhpcy5fZGF0ZX1cbiAgICBnZXQgaW1wb3J0YW50KCl7IHJldHVybiB0aGlzLl9pbXBvcnRhbnR9XG4gICAgZ2V0IHByb2plY3QoKXsgcmV0dXJuIHRoaXMuX3Byb2plY3R9XG5cbiAgICBzZXQgdGl0bGUodGl0bGUpe3RoaXMuX3RpdGxlPXRpdGxlfVxuICAgIHNldCBkZXNjcmlwdGlvbihkZXNjcmlwdGlvbil7IHRoaXMuX2Rlc2NyaXB0aW9uPWRlc2NyaXB0aW9ufVxuICAgIHNldCBkYXRlKGRhdGUpe3RoaXMuX2RhdGUgPSBkYXRlfVxuICAgIHNldCBpbXBvcnRhbnQoaW1wb3J0YW50KXt0aGlzLl9pbXBvcnRhbnQgPSBpbXBvcnRhbnR9XG4gICAgc2V0IHByb2plY3QocHJvamVjdCl7IHRoaXMuX3Byb2plY3Q9cHJvamVjdH1cblxuXG4gICAgXG5cbn1cblxuLy8/Pz9cbmV4cG9ydCBmdW5jdGlvbiBhZGRUb1Byb2plY3QodGFzayxwcm9qZWN0VGl0KXtcblxuICAgIHRhc2sucHJvamVjdCA9IHByb2plY3RUaXRcbiAgICBjb25zdCBwcm9qZWN0ID0gUHJvamVjdC5wcm9qZWN0cy5maW5kKGl0ZW0gPT4gaXRlbS50aXRsZSA9PSBwcm9qZWN0VGl0KTtcbiAgICBcbiAgICBwcm9qZWN0LnRhc2tzLnB1c2godGFzay50aXRsZSlcblxuICAgIGNvbnNvbGUubG9nKFwiYWRkZWQgXCIsdGFzay50aXRsZSxcInRvIFwiLHByb2plY3QudGl0bGUpXG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZUZyb21Qcm9qZWN0KHRhc2sscHJvamVjdCl7XG4gICAgbGV0IHRvRGVsID0gdGFzay5fcHJvamVjdFxuICAgIHRhc2suX3Byb2plY3Q9JydcbiAgICBwcm9qZWN0Ll90YXNrcyA9IHByb2plY3QuX3Rhc2tzLmZpbHRlcih0ID0+dCE9PXRhc2sudGl0bGUpXG4gICAgY29uc29sZS5sb2coXCJkZWxldGVkIFwiLHRvRGVsLFwiZnJvbSBcIixwcm9qZWN0LnRpdGxlKVxufVxuXG4iLCJpbXBvcnQge2FkZE1vZGFsLCBzaG93TW9kYWx9IGZyb20gJy4vbW9kYWxzLmpzJ1xuaW1wb3J0IHtUYXNrfSBmcm9tICcuL2RhdGEuanMnXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZHJhd1Rhc2sodGFzayl7XG4gICAgY29uc3QgdGFza0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0YXNrRWwuY2xhc3NMaXN0LmFkZCgndGFzay1lbCcpXG4gICAgICAgIGNvbnN0IGlzRG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgICAgaXNEb25lLnR5cGUgPSAnY2hlY2tib3gnXG4gICAgICAgIGlzRG9uZS5jbGFzc0xpc3QuYWRkKCdpcy1kb25lJylcbiAgICAgICAgdGFza0VsLmFwcGVuZENoaWxkKGlzRG9uZSlcblxuICAgICAgICBjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHRhc2tOYW1lLmNsYXNzTGlzdC5hZGQoJ3Rhc2stdGl0bGUnKVxuICAgICAgICBcbiAgICAgICAgdGFza05hbWUudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlXG4gICAgICAgIHRhc2tFbC5hcHBlbmRDaGlsZCh0YXNrTmFtZSlcblxuICAgICAgICBjb25zdCB0YXNrRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHRhc2tEYXRlLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGF0ZScpXG4gICAgICAgIHRhc2tEYXRlLnRleHRDb250ZW50ID0gdGFzay5kYXRlXG4gICAgICAgIHRhc2tFbC5hcHBlbmRDaGlsZCh0YXNrRGF0ZSlcblxuICAgICAgICBjb25zdCBzaG93QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgc2hvd0J0bi5jbGFzc0xpc3QuYWRkKCdzaG93LWJ0bicpXG4gICAgICAgIHNob3dCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJylcbiAgICAgICAgc2hvd0J0bi50ZXh0Q29udGVudCA9ICdTSE9XJ1xuICAgICAgICB0YXNrRWwuYXBwZW5kQ2hpbGQoc2hvd0J0bilcblxuICAgICAgICBzaG93QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxkcmF3U2hvd01vZGFsKVxuXG5cblxuICAgIHJldHVybiB0YXNrRWxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRyYXdBZGRUYXNrRWwoKXtcbiAgICBjb25zdCB0YXNrRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRhc2tFbC5jbGFzc0xpc3QuYWRkKCdhZGQtdGFzay1lbCcpXG4gICAgICAgIGNvbnN0IG5ld0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIG5ld0J0bi5jbGFzc0xpc3QuYWRkKCduZXctYnRuJylcbiAgICAgICAgbmV3QnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicpXG4gICAgICAgIG5ld0J0bi50ZXh0Q29udGVudD1cIk5FV1wiXG4gICAgICAgIHRhc2tFbC5hcHBlbmRDaGlsZChuZXdCdG4pXG5cbiAgICAgICAgbmV3QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxkcmF3QWRkTW9kYWwpXG5cbiAgICByZXR1cm4gdGFza0VsXG59XG5cbmZ1bmN0aW9uIGRyYXdBZGRNb2RhbCgpe1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW5cIilcbiAgICBtYWluLmFwcGVuZENoaWxkKGFkZE1vZGFsKCkpXG4gICAgXG59XG5cbmZ1bmN0aW9uIGRyYXdTaG93TW9kYWwoZSl7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpblwiKVxuICAgIGxldCB0YXNrVGl0bGUgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuWzFdLnRleHRDb250ZW50XG4gICAgbGV0IHRhc2sgPSBUYXNrLnRhc2tzLmZpbmQodCA9PiB0Ll90aXRsZT09dGFza1RpdGxlKVxuICAgIGNvbnNvbGUubG9nKHRhc2spXG4gICAgbWFpbi5hcHBlbmRDaGlsZChzaG93TW9kYWwodGFzaykpXG5cblxufSIsImltcG9ydCB7IFByb2plY3QsIFRhc2ssIGFkZFRvUHJvamVjdCwgZGVsZXRlRnJvbVByb2plY3QgfSBmcm9tICcuL2RhdGEuanMnXG5pbXBvcnQgbG9hZEFsbCBmcm9tICcuL2FsbC5qcydcblxuXG5mdW5jdGlvbiBYKG1vZGFsKXtcbiAgICBjb25zdCBjbG9zZU1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjbG9zZU1vZGFsLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlLW1vZGFsJylcbiAgICBcbiAgICAgICAgY29uc3QgbFggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICAgICAgY29uc3QgclggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICAgICAgbFguY2xhc3NMaXN0LmFkZCgnbGluZScpXG4gICAgICAgIHJYLmNsYXNzTGlzdC5hZGQoJ2xpbmUnKVxuICAgICAgICBjbG9zZU1vZGFsLmFwcGVuZENoaWxkKGxYKVxuICAgICAgICBjbG9zZU1vZGFsLmFwcGVuZENoaWxkKHJYKVxuXG4gICAgICAgIGNsb3NlTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgICAgIC8vIG1vZGFsLnN0eWxlLmRpc3BsYXk9J25vbmUnXG4gICAgICAgICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluXCIpXG4gICAgICAgICAgICBtYWluLnJlbW92ZUNoaWxkKG1vZGFsKVxuICAgICAgICB9KSAgXG4gICAgcmV0dXJuIGNsb3NlTW9kYWxcbn1cblxuXG5mdW5jdGlvbiBjdXJyZW50V2luZG93KCl7XG4gICAgXG4gICAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXYtYmFyXCIpXG4gICAgdmFyIGFyciA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKCBuYXZCYXIuY2hpbGRyZW4gKVxuICAgIFxuICAgIGxldCByZXMgID0gYXJyLmZpbmQoaXRlbSA9PiBpdGVtLmRhdGFzZXQuaXNhY3RpdmUgPT0gJ3RydWUnKS5pbm5lclRleHQ7XG4gICAgXG5cbiAgICByZXR1cm4gcmVzXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRNb2RhbCgpe1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdtb2RhbCcpXG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnYWRkLW1vZGFsJylcbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5PSdmbGV4J1xuICAgIFxuXG4gICAgbW9kYWwuYXBwZW5kQ2hpbGQoWChtb2RhbCkpXG4gICAgICAgXG4gICAgICAgIGNvbnN0IHRpdGxlRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHRpdGxlRm9ybS50eXBlID0gJ3RleHQnO1xuICAgICAgICB0aXRsZUZvcm0ucGxhY2Vob2xkZXIgPSAnVGl0bGUnO1xuICAgICAgICB0aXRsZUZvcm0uY2xhc3NMaXN0LmFkZCgndGl0bGUtZm9ybScpO1xuICAgICAgICB0aXRsZUZvcm0uY2xhc3NMaXN0LmFkZCgndGV4dC1mb3JtJyk7XG4gICAgICAgIG1vZGFsLmFwcGVuZENoaWxkKHRpdGxlRm9ybSk7XG4gICAgXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgICAgIGRlc2NyaXB0aW9uRm9ybS5wbGFjZWhvbGRlciA9ICdEZXNjcmlwdGlvbic7XG4gICAgICAgIGRlc2NyaXB0aW9uRm9ybS5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbi1mb3JtJyk7XG4gICAgICAgIGRlc2NyaXB0aW9uRm9ybS5jbGFzc0xpc3QuYWRkKCd0ZXh0LWZvcm0nKTtcbiAgICAgICAgbW9kYWwuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25Gb3JtKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHByb2plY3RGb3JtLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtZm9ybScpXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0JylcbiAgICAgICAgICAgIHByb2plY3RTZWxlY3QuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1zZWxlY3QnKVxuICAgICAgICAgICAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdFNlbGVjdClcblxuICAgICAgICAgICAgY29uc3Qgb3B0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICAgICAgICAgIG9wdC52YWx1ZT0wXG4gICAgICAgICAgICBvcHQudGV4dD0nbm9uZSdcbiAgICAgICAgICAgIHByb2plY3RTZWxlY3QuYXBwZW5kQ2hpbGQob3B0KVxuXG4gICAgICAgICAgICBmb3IobGV0IGk9MDtpPFByb2plY3QucHJvamVjdHMubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICAgICAgICAgICAgICBvcHQudmFsdWU9aSsxXG4gICAgICAgICAgICAgICAgb3B0LnRleHQ9UHJvamVjdC5wcm9qZWN0c1tpXS50aXRsZVxuICAgICAgICAgICAgICAgIHByb2plY3RTZWxlY3QuYXBwZW5kQ2hpbGQob3B0KVxuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIG1vZGFsLmFwcGVuZENoaWxkKHByb2plY3RGb3JtKTsgICAgICAgICAgICBcblxuICAgICAgICBjb25zdCBkYXRlRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGRhdGVGb3JtLnR5cGUgPSAnZGF0ZSc7XG4gICAgICAgIGRhdGVGb3JtLmNsYXNzTGlzdC5hZGQoJ2RhdGUtZm9ybScpO1xuICAgICAgICBtb2RhbC5hcHBlbmRDaGlsZChkYXRlRm9ybSk7XG4gICAgXG5cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGltcG9ydGFudEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBpbXBvcnRhbnRGb3JtLmNsYXNzTGlzdC5hZGQoJ2ltcG9ydGFudC1mb3JtJylcbiAgICAgICAgaW1wb3J0YW50Rm9ybS5jbGFzc0xpc3QuYWRkKCdub3QtaW1wb3J0YW50JylcbiAgICAgICAgaW1wb3J0YW50Rm9ybS50ZXh0Q29udGVudCA9ICdub3QgaW1wb3J0YW50J1xuICAgICAgICBpbXBvcnRhbnRGb3JtLmRhdGFzZXQuaW1wb3J0YW50PWZhbHNlXG4gICAgICAgIGltcG9ydGFudEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgICAgICBpbXBvcnRhbnRGb3JtLmNsYXNzTGlzdC50b2dnbGUoJ25vdC1pbXBvcnRhbnQnKVxuICAgICAgICAgICAgaW1wb3J0YW50Rm9ybS5jbGFzc0xpc3QudG9nZ2xlKCdpbXBvcnRhbnQnKVxuXG4gICAgICAgICAgICBpZihpbXBvcnRhbnRGb3JtLmNsYXNzTGlzdC5jb250YWlucygnaW1wb3J0YW50Jykpe1xuICAgICAgICAgICAgICAgIGltcG9ydGFudEZvcm0udGV4dENvbnRlbnQgPSAnaW1wb3J0YW50J1xuICAgICAgICAgICAgICAgIGltcG9ydGFudEZvcm0uZGF0YXNldC5pbXBvcnRhbnQ9dHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZihpbXBvcnRhbnRGb3JtLmNsYXNzTGlzdC5jb250YWlucygnbm90LWltcG9ydGFudCcpKXtcbiAgICAgICAgICAgICAgICBpbXBvcnRhbnRGb3JtLnRleHRDb250ZW50ID0gJ25vdCBpbXBvcnRhbnQnXG4gICAgICAgICAgICAgICAgaW1wb3J0YW50Rm9ybS5kYXRhc2V0LmltcG9ydGFudD1mYWxzZVxuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgfSlcbiAgICAgICAgbW9kYWwuYXBwZW5kQ2hpbGQoaW1wb3J0YW50Rm9ybSlcblxuXG5cbiAgICAgICAgY29uc3Qgc3VibWl0QnRuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHN1Ym1pdEJ0bi5pbm5lclRleHQgPSAnU1VCTUlUJ1xuICAgICAgICBzdWJtaXRCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJylcbiAgICAgICAgc3VibWl0QnRuLmNsYXNzTGlzdC5hZGQoJ3N1Ym1pdC1idG4nKVxuXG4gICAgICAgIHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgICAgIGxldCB0aXRsZSA9IHRpdGxlRm9ybS52YWx1ZVxuICAgICAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25Gb3JtLnZhbHVlXG4gICAgICAgICAgICBsZXQgcHJvamVjdCA9IHByb2plY3RTZWxlY3Qub3B0aW9uc1twcm9qZWN0U2VsZWN0LnNlbGVjdGVkSW5kZXhdLnRleHRcbiAgICAgICAgICAgIGxldCBpbXBvcnRhbnQgPSBpbXBvcnRhbnRGb3JtLmRhdGFzZXQuaW1wb3J0YW50XG4gICAgICAgICAgICBsZXQgZGF0ZSA9IGRhdGVGb3JtLnZhbHVlXG5cbiAgICAgICAgICAgIGlmKHByb2plY3Q9PSdub25lJyl7XG4gICAgICAgICAgICAgICAgcHJvamVjdD0nJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYodGl0bGU9PScnKXtcbiAgICAgICAgICAgICAgICB0aXRsZT0ndW5uYW1lZCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHRhc2sgPSBuZXcgVGFzayh0aXRsZSxkZXNjcmlwdGlvbixkYXRlLGltcG9ydGFudCxwcm9qZWN0KVxuICAgICAgICAgICAgaWYocHJvamVjdCE9Jycpe1xuICAgICAgICAgICAgICAgIGFkZFRvUHJvamVjdCh0YXNrLHByb2plY3QpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYoY3VycmVudFdpbmRvdygpPT0nQWxsJykgbG9hZEFsbCgpXG5cblxuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0YXNrKVxuXG4gICAgICAgIH0pXG5cblxuICAgICAgICBtb2RhbC5hcHBlbmRDaGlsZChzdWJtaXRCdG4pXG4gICAgXG4gICAgXG4gICBcblxuXG5cbiAgICByZXR1cm4gbW9kYWxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dNb2RhbCh0YXNrKXtcbiAgICBjb25zdCBtb2RhbCA9IGFkZE1vZGFsKClcbiAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdhZGQtbW9kYWwnKVxuICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ2VkaXQtbW9kYWwnKVxuICAgICAgICBjb25zdCB0aXRsZUZvcm0gPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCcudGl0bGUtZm9ybScpXG4gICAgICAgIHRpdGxlRm9ybS52YWx1ZSA9IHRhc2sudGl0bGVcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uRm9ybSA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5kZXNjcmlwdGlvbi1mb3JtJylcbiAgICAgICAgZGVzY3JpcHRpb25Gb3JtLnZhbHVlID0gdGFzay5kZXNjcmlwdGlvblxuXG4gICAgICAgIGNvbnN0IHByb2plY3RTZWxlY3QgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1zZWxlY3QnKVxuXG4gICAgICAgIGxldCBpbmRleD0wXG4gICAgICAgIFxuICAgICAgICBpZih0YXNrLnByb2plY3QhPScnKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdQUk9KRUNUIEVYSVNUJylcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7aTw9UHJvamVjdC5wcm9qZWN0cy5sZW5ndGg7aSsrKXtcblxuICAgICAgICAgICAgICAgIGlmKHRhc2sucHJvamVjdD09cHJvamVjdFNlbGVjdC5vcHRpb25zW2ldLmlubmVyVGV4dCl7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpbmRleCA9IChwcm9qZWN0U2VsZWN0Lm9wdGlvbnNbaV0udmFsdWUpIFxuICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHByb2plY3RTZWxlY3Quc2VsZWN0ZWRJbmRleCA9IGluZGV4XG4gICAgICAgIFxuICAgICAgICBjb25zdCBkYXRlRm9ybSA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5kYXRlLWZvcm0nKVxuICAgICAgICBkYXRlRm9ybS52YWx1ZSA9IHRhc2suZGF0ZVxuICAgICAgICBcbiAgICAgICAgY29uc3QgaW1wb3J0YW50Rm9ybSA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5pbXBvcnRhbnQtZm9ybScpXG4gICAgICAgIGNvbnNvbGUubG9nKHRhc2suaW1wb3J0YW50KVxuICAgICAgICBjb25zdCBpbXAgPSB0YXNrLmltcG9ydGFudFxuICAgICAgICBcbiAgICAgICAgaWYoaW1wPT0ndHJ1ZScpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1RSVUVFRUVFJylcbiAgICAgICAgICAgIGltcG9ydGFudEZvcm0uZGF0YXNldC5pbXBvcnRhbnQ9J3RydWUnXG4gICAgICAgICAgICBpbXBvcnRhbnRGb3JtLmNsYXNzTGlzdC5hZGQoJ2ltcG9ydGFudCcpXG4gICAgICAgICAgICBpbXBvcnRhbnRGb3JtLnRleHRDb250ZW50ID0gJ2ltcG9ydGFudCdcbiAgICAgICAgICAgIGltcG9ydGFudEZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnbm90LWltcG9ydGFudCcpXG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZih0YXNrLmltcG9ydGFudD09dHJ1ZSl7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcIklNUE9SVEFOVFwiKVxuICAgICAgICAvLyAgICAgaW1wb3J0YW50Rm9ybS5kYXRhc2V0LmltcG9ydGFudCA9IHRydWVcbiAgICAgICAgLy8gICAgIGltcG9ydGFudEZvcm0udGV4dENvbnRlbnQgPSAnaW1wb3J0YW50J1xuICAgICAgICAvLyAgICAgaW1wb3J0YW50Rm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdub3QtaW1wb3J0YW50JylcbiAgICAgICAgLy8gICAgIGltcG9ydGFudEZvcm0uY2xhc3NMaXN0LmFkZCgnaW1wb3J0YW50JylcbiAgICAgICAgLy8gfWVsc2V7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcIk5PVCBJTVBPUlRBTlRcIilcbiAgICAgICAgLy8gICAgIGltcG9ydGFudEZvcm0uZGF0YXNldC5pbXBvcnRhbnQgPSBmYWxzZVxuICAgICAgICAvLyAgICAgaW1wb3J0YW50Rm9ybS50ZXh0Q29udGVudCA9ICdub3QgaW1wb3J0YW50J1xuICAgICAgICAvLyAgICAgaW1wb3J0YW50Rm9ybS5jbGFzc0xpc3QuYWRkKCdub3QtaW1wb3J0YW50JylcbiAgICAgICAgLy8gICAgIGltcG9ydGFudEZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnaW1wb3J0YW50JylcbiAgICAgICAgLy8gfVxuICAgICAgICBcblxuXG5cbiAgICAgICAgY29uc3Qgc3VibWl0QnRuID0gbW9kYWwucXVlcnlTZWxlY3RvcignLnN1Ym1pdC1idG4nKVxuICAgICAgICAvLypjbG9uaW5nIG5vZGVzIHRvIHJlbW92ZSBhbGwgZXZlbnQgbGlzdGVuZXJzIGZyb20gc3VibWl0IGJ0blxuICAgICAgICBjb25zdCBlZGl0U3VibWl0QnRuID0gc3VibWl0QnRuLmNsb25lTm9kZSh0cnVlKVxuICAgICAgICBzdWJtaXRCdG4ucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoZWRpdFN1Ym1pdEJ0bixzdWJtaXRCdG4pXG5cbiAgICAgICAgZWRpdFN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgICAgIGxldCB0aXRsZSA9IHRpdGxlRm9ybS52YWx1ZVxuICAgICAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25Gb3JtLnZhbHVlXG4gICAgICAgICAgICBsZXQgcHJvamVjdCA9IHByb2plY3RTZWxlY3Qub3B0aW9uc1twcm9qZWN0U2VsZWN0LnNlbGVjdGVkSW5kZXhdLnRleHRcbiAgICAgICAgICAgIGxldCBpbXBvcnRhbnQgPSBpbXBvcnRhbnRGb3JtLmRhdGFzZXQuaW1wb3J0YW50XG4gICAgICAgICAgICBsZXQgZGF0ZSA9IGRhdGVGb3JtLnZhbHVlXG5cbiAgICAgICAgICAgIGlmKHByb2plY3Q9PSdub25lJyl7XG4gICAgICAgICAgICAgICAgcHJvamVjdD0nJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYodGl0bGU9PScnKXtcbiAgICAgICAgICAgICAgICB0aXRsZT0ndW5uYW1lZCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYocHJvamVjdCE9Jycpe1xuICAgICAgICAgICAgICAgIGFkZFRvUHJvamVjdCh0YXNrLHByb2plY3QpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRhc2sudGl0bGUgPSB0aXRsZVxuICAgICAgICAgICAgdGFzay5kZXNjcmlwdGlvbj1kZXNjcmlwdGlvblxuICAgICAgICAgICAgdGFzay5wcm9qZWN0PXByb2plY3RcbiAgICAgICAgICAgIHRhc2suaW1wb3J0YW50ID0gaW1wb3J0YW50XG4gICAgICAgICAgICB0YXNrLmRhdGU9ZGF0ZVxuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKGN1cnJlbnRXaW5kb3coKT09J0FsbCcpIGxvYWRBbGwoKVxuXG5cblxuICAgICAgICAgICAgY29uc29sZS5sb2codGFzaylcblxuICAgICAgICB9KVxuXG5cblxuICAgIG1vZGFsLmFwcGVuZENoaWxkKFgobW9kYWwpKVxuXG5cblxuICAgIHJldHVybiBtb2RhbFxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBsb2FkQWxsIGZyb20gJy4vYWxsLmpzJ1xuaW1wb3J0IGdpdGh1YkltZyBmcm9tICcuL2ltYWdlcy9naXRodWJsb2dvLnBuZydcbmltcG9ydCBpZ0ltZyBmcm9tICcuL2ltYWdlcy9pZ2xvZ28ucG5nJ1xuXG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIilcblxuY29uc3QgR2l0aHViSW1nID0gbmV3IEltYWdlKClcbmNvbnN0IElnSW1nID0gbmV3IEltYWdlKClcbkdpdGh1YkltZy5zcmMgPSBnaXRodWJJbWdcbklnSW1nLnNyYyA9IGlnSW1nXG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpe1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIilcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50PVwiVG8gZG8gTGlzdFwiXG5cblxuXG4gICAgLy9yZXBvbnNpdmUgbmF2YmFyLy9cbiAgICBjb25zdCByZXBvbnNpdmVOYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHJlcG9uc2l2ZU5hdi5jbGFzc0xpc3QuYWRkKCdyZXNwb25zaXZlLW5hdicpXG4gICAgICAgICAgICBmb3IobGV0IGk9MDtpPDM7aSsrKXtcbiAgICAgICAgICAgICAgICBjb25zdCBsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgICAgICAgICAgICAgLy9saW5lLmNsYXNzTGlzdC5hZGQoJ2xpbmUnKVxuICAgICAgICAgICAgICAgIHJlcG9uc2l2ZU5hdi5hcHBlbmRDaGlsZChsaW5lKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IE5hdkJhclRvQ2xvbmUgPSBjcmVhdGVOYXZCYXIoKVxuICAgICAgICAgICAgY29uc3QgbW9iaWxlTmF2ID0gTmF2QmFyVG9DbG9uZS5jbG9uZU5vZGUodHJ1ZSlcbiAgICAgICAgICAgIG1vYmlsZU5hdi5pZD1cIm1vYmlsZS1uYXZcIlxuICAgICAgICAgICAgbW9iaWxlTmF2LmNsYXNzTGlzdC5hZGQoJ21vYmlsZS1uYXYnKVxuICAgICAgICAgICAgbW9iaWxlTmF2LmNsYXNzTGlzdC5yZW1vdmUoXCJuYXYtYmFyXCIpXG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChtb2JpbGVOYXYpXG5cbiAgICAgICAgICAgIFxuXG5cbiAgICAgICAgICAgIFxuXG5cblxuICAgICAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKHJlcG9uc2l2ZU5hdilcblxuXG5cbiAgICByZXR1cm4gaGVhZGVyXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5hdkJhcigpe1xuICAgIGNvbnN0IG5hdkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbmF2QmFyLmNsYXNzTGlzdC5hZGQoJ25hdi1iYXInKVxuXG4gICAgICAgIGNvbnN0IG5hdkFsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIG5hdkFsbC5jbGFzc0xpc3QuYWRkKCduYXYtZWxlbWVudCcpXG4gICAgICAgIG5hdkFsbC5kYXRhc2V0LmlzYWN0aXZlPWZhbHNlXG4gICAgICAgIG5hdkJhci5hcHBlbmRDaGlsZChuYXZBbGwpXG4gICAgICAgICAgICBuYXZBbGwudGV4dENvbnRlbnQ9J0FsbCdcblxuICAgICAgICBjb25zdCBuYXZUb2RheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIG5hdlRvZGF5LmNsYXNzTGlzdC5hZGQoJ25hdi1lbGVtZW50JylcbiAgICAgICAgbmF2VG9kYXkuZGF0YXNldC5pc2FjdGl2ZT1mYWxzZVxuICAgICAgICBuYXZCYXIuYXBwZW5kQ2hpbGQobmF2VG9kYXkpXG4gICAgICAgICAgICBuYXZUb2RheS50ZXh0Q29udGVudD0nVG9kYXknICAgIFxuXG4gICAgICAgIGNvbnN0IG5hdlRoaXNXZWVrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgbmF2VGhpc1dlZWsuY2xhc3NMaXN0LmFkZCgnbmF2LWVsZW1lbnQnKVxuICAgICAgICBuYXZUaGlzV2Vlay5kYXRhc2V0LmlzYWN0aXZlPWZhbHNlXG4gICAgICAgIG5hdkJhci5hcHBlbmRDaGlsZChuYXZUaGlzV2VlaylcbiAgICAgICAgICAgIG5hdlRoaXNXZWVrLnRleHRDb250ZW50PSdUaGlzIHdlZWsnXG4gICAgICAgICAgICBcbiAgICAgICAgY29uc3QgbmF2T3ZlcmR1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIG5hdk92ZXJkdWUuY2xhc3NMaXN0LmFkZCgnbmF2LWVsZW1lbnQnKVxuICAgICAgICBuYXZPdmVyZHVlLmRhdGFzZXQuaXNhY3RpdmU9ZmFsc2VcbiAgICAgICAgbmF2QmFyLmFwcGVuZENoaWxkKG5hdk92ZXJkdWUpXG4gICAgICAgIG5hdk92ZXJkdWUudGV4dENvbnRlbnQ9J092ZXJkdWUnXG5cbiAgICAgICAgY29uc3QgbmF2UHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBuYXZQcm9qZWN0cy5jbGFzc0xpc3QuYWRkKCduYXYtZWxlbWVudCcpXG4gICAgICAgIG5hdlByb2plY3RzLmRhdGFzZXQuaXNhY3RpdmU9ZmFsc2VcbiAgICAgICAgbmF2QmFyLmFwcGVuZENoaWxkKG5hdlByb2plY3RzKVxuICAgICAgICBuYXZQcm9qZWN0cy50ZXh0Q29udGVudD0nUHJvamVjdHMnXG5cbiAgICAgICAgY29uc3QgbmF2VHJhc2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBuYXZUcmFzaC5jbGFzc0xpc3QuYWRkKCduYXYtZWxlbWVudCcpXG4gICAgICAgIG5hdlRyYXNoLmRhdGFzZXQuaXNhY3RpdmU9ZmFsc2VcbiAgICAgICAgbmF2QmFyLmFwcGVuZENoaWxkKG5hdlRyYXNoKVxuICAgICAgICBuYXZUcmFzaC50ZXh0Q29udGVudD0nVHJhc2gnXG5cblxuICAgICAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJylcbiAgICAgICAgbmF2QmFyLmFwcGVuZENoaWxkKGZvb3RlcilcbiAgICAgICAgICAgIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgIG5hdkJhci5hcHBlbmRDaGlsZChsaW5rcylcbiAgICAgICAgICAgIGxpbmtzLmNsYXNzTGlzdC5hZGQoJ2xpbmtzJylcbiAgICAgICAgICAgICAgICBsaW5rcy5hcHBlbmRDaGlsZChHaXRodWJJbWcpXG4gICAgICAgICAgICAgICAgbGlua3MuYXBwZW5kQ2hpbGQoSWdJbWcpXG4gICAgICAgICAgICAgICAgR2l0aHViSW1nLmNsYXNzTGlzdC5hZGQoJ2dpdGh1Yi1pbWcnKVxuICAgICAgICAgICAgICAgIEdpdGh1YkltZy5jbGFzc0xpc3QuYWRkKCdsaW5rJylcbiAgICAgICAgICAgICAgICBJZ0ltZy5jbGFzc0xpc3QuYWRkKCdpZy1pbWcnKVxuICAgICAgICAgICAgICAgIElnSW1nLmNsYXNzTGlzdC5hZGQoJ2xpbmsnKVxuICAgICAgICAgICAgICAgIEdpdGh1YkltZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lm9wZW4oXCJodHRwczovL2dpdGh1Yi5jb20vTXR0dDcvcmVzdGF1cmFudHBhZ2VcIixcIl9zZWxmXCIpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBJZ0ltZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lm9wZW4oXCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL210dC5qcGVnL1wiLFwiX3NlbGZcIilcbiAgICAgICAgICAgICAgICB9KVxuXG5cbiAgICAgICAgXG4gICAgICAgIFxuXG5cblxuICAgIHJldHVybiBuYXZCYXJcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWFpbigpe1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG1haW4uY2xhc3NMaXN0LmFkZChcIm1haW5cIilcbiAgICBtYWluLmlkPVwibWFpblwiXG5cblxuICAgIGNvbnN0IHJlcG9uc2l2ZU5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzcG9uc2l2ZS1uYXZcIilcbiAgICBjb25zdCBtb2JpbGVOYXYgPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9iaWxlLW5hdlwiKVxuICAgIHJlcG9uc2l2ZU5hdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScpXG4gICAgICAgICAgICAgICAgbW9iaWxlTmF2LmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScpXG4gICAgICAgICAgICAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpblwiKVxuICAgICAgICAgICAgICAgIG1haW4uY2xhc3NMaXN0LnRvZ2dsZSgnc2hyaW5rJylcbiAgICAgICAgICAgIH0pXG5cblxuICAgIHJldHVybiBtYWluXG5cbn1cblxuXG5cbmZ1bmN0aW9uIEluaXRpYWxpemVXZWJzaXRlKCl7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSlcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU5hdkJhcigpKVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTWFpbigpKVxuICAgIFxufVxuXG5Jbml0aWFsaXplV2Vic2l0ZSgpXG5sb2FkQWxsKClcblxuXG5jb25zb2xlLmxvZygnd29ya2luZyBmaW5lJykiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=