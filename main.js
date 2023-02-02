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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  font-family: \"Poppins\", sans-serif;\n}\n\n#content {\n  font-family: \"Poppins\", sans-serif;\n  height: 100vh;\n  display: grid;\n  grid-template-columns: 1fr 10fr;\n  grid-template-rows: 100px 1fr 1fr;\n}\n\n.header {\n  grid-column: 1/3;\n  background-color: rgb(221, 76, 61);\n  padding: 1.7rem;\n  font-size: 2.3rem;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n}\n.header .responsive-nav {\n  margin-left: auto;\n  margin-top: 5px;\n}\n.header .responsive-nav > * {\n  display: block;\n  width: 50px;\n  height: 6px;\n  margin-bottom: 9px;\n  position: relative;\n  background-color: white;\n  border-radius: 6px;\n  z-index: 1;\n  transform-origin: 0 0;\n  transition: 0.4s;\n}\n.header .responsive-nav.is-active span:nth-child(1) {\n  transform: translate(0px, -2px) rotate(45deg);\n}\n.header .responsive-nav.is-active span:nth-child(2) {\n  opacity: 0;\n  transform: translateX(15px);\n}\n.header .responsive-nav.is-active span:nth-child(3) {\n  transform: translate(-3px, 3px) rotate(-45deg);\n}\n\n.mobile-nav {\n  display: none;\n}\n\n.mobile-nav.is-active {\n  grid-column: 1/3;\n  grid-row: 2/3;\n  height: 100%;\n  width: 100%;\n  background-color: rgb(244, 238, 238);\n  font-size: 2rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.45rem;\n  padding: 1rem;\n  -webkit-animation: fade 0.2s;\n          animation: fade 0.2s;\n}\n.mobile-nav.is-active .nav-element:hover {\n  transform: scale(1.05);\n  cursor: pointer;\n}\n.mobile-nav.is-active .links .ig-img {\n  width: 30px;\n}\n.mobile-nav.is-active .links .ig-img:hover {\n  cursor: pointer;\n  transform: scale(1.03);\n}\n.mobile-nav.is-active .links .github-img {\n  width: 60px;\n}\n.mobile-nav.is-active .links .github-img:hover {\n  cursor: pointer;\n  transform: scale(1.03);\n}\n\n@-webkit-keyframes fade {\n  100% {\n    transform: scale(1);\n  }\n  0% {\n    transform: scale(0.1);\n  }\n}\n\n@keyframes fade {\n  100% {\n    transform: scale(1);\n  }\n  0% {\n    transform: scale(0.1);\n  }\n}\n.nav-bar {\n  background-color: rgb(244, 238, 238);\n  font-size: 1.35rem;\n  grid-column: 1;\n  grid-row: 2/4;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  padding: 1rem;\n  height: 100%;\n  width: 160px;\n}\n.nav-bar .nav-element:hover {\n  transform: scale(1.05);\n  cursor: pointer;\n}\n.nav-bar .links .ig-img {\n  width: 30px;\n}\n.nav-bar .links .ig-img:hover {\n  cursor: pointer;\n  transform: scale(1.03);\n}\n.nav-bar .links .github-img {\n  width: 60px;\n}\n.nav-bar .links .github-img:hover {\n  cursor: pointer;\n  transform: scale(1.03);\n}\n\n.main {\n  grid-column: 2/4;\n  grid-row: 2/4;\n}\n\n.main.shrink {\n  grid-row: 3/4;\n  padding-top: 2rem;\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  padding: 2rem;\n}\n\n.task-el {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-top: 1rem;\n  width: 450px;\n  height: 50px;\n  background-color: rgb(244, 238, 238);\n  border-radius: 20px;\n  padding: 0 0.7rem;\n}\n.task-el .is-done {\n  height: 25px;\n  width: 25px;\n  margin: 1rem;\n}\n.task-el .show-btn,\n.task-el .recover-btn {\n  margin-left: auto;\n  color: white;\n  background-color: red;\n  padding: 0.4rem;\n  border-radius: 10px;\n  font-weight: 600;\n}\n\n.add-task-el {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  margin-top: 1rem;\n  width: 450px;\n  height: 50px;\n  background-color: rgb(244, 238, 238);\n  border-radius: 20px;\n  padding: 0 0.7rem;\n}\n\n.recover-btn,\n.new-btn {\n  background-color: rgb(221, 76, 61);\n  color: white;\n  background-color: red;\n  padding: 0.4rem;\n  border-radius: 10px;\n  font-weight: 600;\n}\n\n.btn {\n  cursor: pointer;\n}\n\n.btn:hover {\n  transform: scale(1.05);\n}\n\n.modal {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 1.3rem;\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 400px;\n  height: 50%;\n  border-radius: 20px;\n  background-color: gray;\n}\n.modal .text-form {\n  padding: 9px;\n  font-size: 22px;\n  border-width: 0px;\n  border-color: #ed0000;\n  background-color: #ffffff;\n  color: #000000;\n  border-style: solid;\n  border-radius: 30px;\n  box-shadow: 0px 0px 8px rgba(66, 66, 66, 0.2);\n  text-shadow: 0px 0px 0px rgba(66, 66, 66, 0.75);\n  margin-top: 1rem;\n}\n.modal .description-form {\n  height: 100px;\n  resize: none;\n}\n.modal .title-form {\n  font-size: 1.4rem;\n}\n.modal .project-form {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 200px;\n  height: 50px;\n}\n.modal .project-form .project-select {\n  padding: 9px;\n  font-size: 22px;\n  background-color: #ffffff;\n  color: #000000;\n  border-style: solid;\n  border-radius: 30px;\n  box-shadow: 0px 0px 8px rgba(66, 66, 66, 0.2);\n  text-shadow: 0px 0px 0px rgba(66, 66, 66, 0.75);\n  margin-top: 1rem;\n}\n.modal .date-form {\n  padding: 9px;\n  font-size: 22px;\n  border-width: 0px;\n  border-color: #ed0000;\n  background-color: #ffffff;\n  color: #000000;\n  border-style: solid;\n  border-radius: 30px;\n  box-shadow: 0px 0px 8px rgba(66, 66, 66, 0.2);\n  text-shadow: 0px 0px 0px rgba(66, 66, 66, 0.75);\n  margin-top: 1rem;\n}\n.modal .important-form {\n  -webkit-user-select: none; /* Safari */\n  -ms-user-select: none; /* IE 10 and IE 11 */\n  -moz-user-select: none;\n       user-select: none; /* Standard syntax */\n  width: 210px;\n  height: 40px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.7rem;\n  font-weight: 600;\n  cursor: pointer;\n}\n.modal .not-important {\n  color: #ed0000;\n}\n.modal .important {\n  color: #02f32e;\n}\n.modal .close-modal {\n  display: inline-block;\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  cursor: pointer;\n  width: 30px;\n  height: 30px;\n}\n.modal .line {\n  position: absolute;\n  width: 100%;\n  height: 5px;\n  background-color: white;\n  transition: transform 0.2s ease;\n}\n.modal .line:first-child {\n  transform: rotate(45deg);\n}\n.modal .line:last-child {\n  transform: rotate(-45deg);\n}\n.modal .btn {\n  color: rgb(254, 254, 254);\n  font-weight: 600;\n  background-color: rgb(221, 76, 61);\n  padding: 0.5rem 5rem;\n  border-radius: 20px;\n  margin-top: auto;\n  margin-bottom: 1rem;\n}\n.modal .delete-btn {\n  margin-top: 0;\n  margin-bottom: 0.3rem;\n}\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}/*# sourceMappingURL=style.css.map */@media only screen and (min-width: 701px) {\n  .responsive-nav {\n    display: none;\n  }\n}@media only screen and (max-width: 700px) {\n  .nav-bar {\n    display: none;\n  }\n  .task-el {\n    width: 300px;\n  }\n  .add-task-el {\n    width: 300px;\n  }\n  .main {\n    grid-column: 1/4;\n  }\n}", "",{"version":3,"sources":["webpack://./src/style.scss","webpack://./src/style.css","<no source>"],"names":[],"mappings":"AAKA;EACI,kCAAA;ACJJ;;ADOA;EACI,kCAAA;EACA,aAAA;EACA,aAAA;EACA,+BAAA;EACA,iCAAA;ACJJ;;ADOA;EACI,gBAAA;EACA,kCAlBI;EAmBJ,eAAA;EACA,iBAAA;EACA,gBAAA;EACA,aAAA;EACA,mBAAA;ACJJ;ADQI;EACQ,iBAAA;EACA,eAAA;ACNZ;ADOQ;EAEI,cAAA;EACA,WAAA;EACA,WAAA;EACA,kBAAA;EACA,kBAAA;EAEA,uBAAA;EACA,kBAAA;EACA,UAAA;EAEA,qBAAA;EAEA,gBAAA;ACTZ;ADaI;EACI,6CAAA;ACXR;ADcI;EACI,UAAA;EACA,2BAAA;ACZR;ADeI;EACI,8CAAA;ACbR;;ADkBA;EACI,aAAA;ACfJ;;ADmBA;EACI,gBAAA;EACA,aAAA;EACA,YAAA;EACA,WAAA;EAEA,oCAxEI;EAyEJ,eAAA;EAEA,aAAA;EACA,sBAAA;EACA,mBAAA;EAEA,YAAA;EACA,aAAA;EAEA,4BAAA;UAAA,oBAAA;ACpBJ;ADyBI;EACI,sBAAA;EACA,eAAA;ACvBR;AD4BQ;EACI,WAAA;AC1BZ;AD4BQ;EACI,eAAA;EACA,sBAAA;AC1BZ;AD4BQ;EACI,WAAA;AC1BZ;AD6BQ;EACI,eAAA;EACA,sBAAA;AC3BZ;;ADoCA;EACI;IACI,mBAAA;ECjCN;EDoCE;IACI,qBAAA;EClCN;AACF;;AD2BA;EACI;IACI,mBAAA;ECjCN;EDoCE;IACI,qBAAA;EClCN;AACF;ADuCA;EACI,oCAjII;EAkIJ,kBAAA;EAEA,cAAA;EACA,aAAA;EACA,aAAA;EACA,sBAAA;EACA,WAAA;EACA,aAAA;EACA,YAAA;EACA,YAAA;ACtCJ;ADwCI;EACI,sBAAA;EACA,eAAA;ACtCR;AD2CQ;EACI,WAAA;ACzCZ;AD2CQ;EACI,eAAA;EACA,sBAAA;ACzCZ;AD2CQ;EACI,WAAA;ACzCZ;AD4CQ;EACI,eAAA;EACA,sBAAA;AC1CZ;;ADmDA;EACI,gBAAA;EACA,aAAA;AChDJ;;ADkDA;EACI,aAAA;EACA,iBAAA;AC/CJ;;ADmDA;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,2BAAA;EAEA,aAAA;ACjDJ;;ADqDA;EACI,aAAA;EACA,mBAAA;EAGA,SAAA;EACA,gBAAA;EACA,YAAA;EACA,YAAA;EACA,oCAvMI;EAwMJ,mBAAA;EACA,iBAAA;ACpDJ;ADwDI;EACI,YAAA;EACA,WAAA;EACA,YAAA;ACtDR;AD8DI;;EAEI,iBAAA;EACA,YAAA;EACA,qBAAA;EACA,eAAA;EACA,mBAAA;EACA,gBAAA;AC5DR;;ADmEA;EACI,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,SAAA;EACA,gBAAA;EACA,YAAA;EACA,YAAA;EACA,oCA9OI;EA+OJ,mBAAA;EACA,iBAAA;AChEJ;;ADoEA;;EAEI,kCAxPI;EAyPJ,YAAA;EACA,qBAAA;EACA,eAAA;EACA,mBAAA;EACA,gBAAA;ACjEJ;;ADsEA;EACI,eAAA;ACnEJ;;ADqEA;EACI,sBAAA;AClEJ;;ADsEA;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,2BAAA;EACA,WAAA;EAEA,eAAA;EACA,SAAA;EACA,QAAA;EACA,gCAAA;EAEA,YAAA;EACA,WAAA;EACA,mBAAA;EAEA,sBAAA;ACtEJ;ADyEI;EACI,YAAA;EACA,eAAA;EACA,iBAAA;EACA,qBAAA;EACA,yBAAA;EACA,cAAA;EACA,mBAAA;EACA,mBAAA;EACA,6CAAA;EACA,+CAAA;EAEA,gBAAA;ACxER;AD0EI;EAEI,aAAA;EACA,YAAA;ACzER;AD2EI;EACG,iBAAA;ACzEP;AD6EI;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,YAAA;EACA,YAAA;AC3ER;AD6EQ;EACI,YAAA;EACA,eAAA;EACA,yBAAA;EACA,cAAA;EACA,mBAAA;EACA,mBAAA;EACA,6CAAA;EACA,+CAAA;EAEA,gBAAA;AC5EZ;ADgFI;EACI,YAAA;EACA,eAAA;EACA,iBAAA;EACA,qBAAA;EACA,yBAAA;EACA,cAAA;EACA,mBAAA;EACA,mBAAA;EACA,6CAAA;EACA,+CAAA;EAEA,gBAAA;AC/ER;ADkFI;EACI,yBAAA,EAAA,WAAA;EACA,qBAAA,EAAA,oBAAA;EACA,sBAAA;OAAA,iBAAA,EAAA,oBAAA;EAEA,YAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EAEA,iBAAA;EAGA,gBAAA;EACA,eAAA;ACpFR;ADsFI;EACI,cAAA;ACpFR;ADuFI;EACI,cAAA;ACrFR;AD8FI;EACI,qBAAA;EACA,kBAAA;EACA,SAAA;EACA,WAAA;EACA,eAAA;EACA,WAAA;EACA,YAAA;AC5FR;AD+FI;EAEI,kBAAA;EACA,WAAA;EACA,WAAA;EACA,uBAAA;EAEA,+BAAA;AC/FR;ADmGM;EACE,wBAAA;ACjGR;ADoGM;EACE,yBAAA;AClGR;ADyGI;EACI,yBA3ZA;EA4ZA,gBAAA;EACA,kCA9ZA;EA+ZA,oBAAA;EACA,mBAAA;EACA,gBAAA;EACA,mBAAA;ACvGR;ADyGI;EACI,aAAA;EACA,qBAAA;ACvGR;ADkKA;;;;;;;;;;;;;EAaC,SAAA;EACA,UAAA;EACA,SAAA;EACA,eAAA;EACA,aAAA;EACA,wBAAA;AC5ID;;AD8IA,gDAAA;AACA;;EAEC,cAAA;AC3ID;;AD6IA;EACC,cAAA;AC1ID;;AD4IA;EACC,gBAAA;ACzID;;AD2IA;EACC,YAAA;ACxID;;AD0IA;;EAEC,WAAA;EACA,aAAA;ACvID;;ADyIA;EACC,yBAAA;EACA,iBAAA;ACtID,CAAA,oCAAA,CCrYA;EFobI;IACI,aAAA;EChHN;AA2DF,CChYA;EF4bI;IACI,aAAA;ECnHN;EDsHE;IACI,YAAA;ECpHN;EDsHE;IACI,YAAA;ECpHN;EDwHE;IACI,gBAAA;ECtHN;AA0DF","sourcesContent":[null,"body {\n  font-family: \"Poppins\", sans-serif;\n}\n\n#content {\n  font-family: \"Poppins\", sans-serif;\n  height: 100vh;\n  display: grid;\n  grid-template-columns: 1fr 10fr;\n  grid-template-rows: 100px 1fr 1fr;\n}\n\n.header {\n  grid-column: 1/3;\n  background-color: rgb(221, 76, 61);\n  padding: 1.7rem;\n  font-size: 2.3rem;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n}\n.header .responsive-nav {\n  margin-left: auto;\n  margin-top: 5px;\n}\n.header .responsive-nav > * {\n  display: block;\n  width: 50px;\n  height: 6px;\n  margin-bottom: 9px;\n  position: relative;\n  background-color: white;\n  border-radius: 6px;\n  z-index: 1;\n  transform-origin: 0 0;\n  transition: 0.4s;\n}\n.header .responsive-nav.is-active span:nth-child(1) {\n  transform: translate(0px, -2px) rotate(45deg);\n}\n.header .responsive-nav.is-active span:nth-child(2) {\n  opacity: 0;\n  transform: translateX(15px);\n}\n.header .responsive-nav.is-active span:nth-child(3) {\n  transform: translate(-3px, 3px) rotate(-45deg);\n}\n\n.mobile-nav {\n  display: none;\n}\n\n.mobile-nav.is-active {\n  grid-column: 1/3;\n  grid-row: 2/3;\n  height: 100%;\n  width: 100%;\n  background-color: rgb(244, 238, 238);\n  font-size: 2rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.45rem;\n  padding: 1rem;\n  -webkit-animation: fade 0.2s;\n          animation: fade 0.2s;\n}\n.mobile-nav.is-active .nav-element:hover {\n  transform: scale(1.05);\n  cursor: pointer;\n}\n.mobile-nav.is-active .links .ig-img {\n  width: 30px;\n}\n.mobile-nav.is-active .links .ig-img:hover {\n  cursor: pointer;\n  transform: scale(1.03);\n}\n.mobile-nav.is-active .links .github-img {\n  width: 60px;\n}\n.mobile-nav.is-active .links .github-img:hover {\n  cursor: pointer;\n  transform: scale(1.03);\n}\n\n@-webkit-keyframes fade {\n  100% {\n    transform: scale(1);\n  }\n  0% {\n    transform: scale(0.1);\n  }\n}\n\n@keyframes fade {\n  100% {\n    transform: scale(1);\n  }\n  0% {\n    transform: scale(0.1);\n  }\n}\n.nav-bar {\n  background-color: rgb(244, 238, 238);\n  font-size: 1.35rem;\n  grid-column: 1;\n  grid-row: 2/4;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  padding: 1rem;\n  height: 100%;\n  width: 160px;\n}\n.nav-bar .nav-element:hover {\n  transform: scale(1.05);\n  cursor: pointer;\n}\n.nav-bar .links .ig-img {\n  width: 30px;\n}\n.nav-bar .links .ig-img:hover {\n  cursor: pointer;\n  transform: scale(1.03);\n}\n.nav-bar .links .github-img {\n  width: 60px;\n}\n.nav-bar .links .github-img:hover {\n  cursor: pointer;\n  transform: scale(1.03);\n}\n\n.main {\n  grid-column: 2/4;\n  grid-row: 2/4;\n}\n\n.main.shrink {\n  grid-row: 3/4;\n  padding-top: 2rem;\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  padding: 2rem;\n}\n\n.task-el {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-top: 1rem;\n  width: 450px;\n  height: 50px;\n  background-color: rgb(244, 238, 238);\n  border-radius: 20px;\n  padding: 0 0.7rem;\n}\n.task-el .is-done {\n  height: 25px;\n  width: 25px;\n  margin: 1rem;\n}\n.task-el .show-btn,\n.task-el .recover-btn {\n  margin-left: auto;\n  color: white;\n  background-color: red;\n  padding: 0.4rem;\n  border-radius: 10px;\n  font-weight: 600;\n}\n\n.add-task-el {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  margin-top: 1rem;\n  width: 450px;\n  height: 50px;\n  background-color: rgb(244, 238, 238);\n  border-radius: 20px;\n  padding: 0 0.7rem;\n}\n\n.recover-btn,\n.new-btn {\n  background-color: rgb(221, 76, 61);\n  color: white;\n  background-color: red;\n  padding: 0.4rem;\n  border-radius: 10px;\n  font-weight: 600;\n}\n\n.btn {\n  cursor: pointer;\n}\n\n.btn:hover {\n  transform: scale(1.05);\n}\n\n.modal {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 1.3rem;\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 400px;\n  height: 50%;\n  border-radius: 20px;\n  background-color: gray;\n}\n.modal .text-form {\n  padding: 9px;\n  font-size: 22px;\n  border-width: 0px;\n  border-color: #ed0000;\n  background-color: #ffffff;\n  color: #000000;\n  border-style: solid;\n  border-radius: 30px;\n  box-shadow: 0px 0px 8px rgba(66, 66, 66, 0.2);\n  text-shadow: 0px 0px 0px rgba(66, 66, 66, 0.75);\n  margin-top: 1rem;\n}\n.modal .description-form {\n  height: 100px;\n  resize: none;\n}\n.modal .title-form {\n  font-size: 1.4rem;\n}\n.modal .project-form {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 200px;\n  height: 50px;\n}\n.modal .project-form .project-select {\n  padding: 9px;\n  font-size: 22px;\n  background-color: #ffffff;\n  color: #000000;\n  border-style: solid;\n  border-radius: 30px;\n  box-shadow: 0px 0px 8px rgba(66, 66, 66, 0.2);\n  text-shadow: 0px 0px 0px rgba(66, 66, 66, 0.75);\n  margin-top: 1rem;\n}\n.modal .date-form {\n  padding: 9px;\n  font-size: 22px;\n  border-width: 0px;\n  border-color: #ed0000;\n  background-color: #ffffff;\n  color: #000000;\n  border-style: solid;\n  border-radius: 30px;\n  box-shadow: 0px 0px 8px rgba(66, 66, 66, 0.2);\n  text-shadow: 0px 0px 0px rgba(66, 66, 66, 0.75);\n  margin-top: 1rem;\n}\n.modal .important-form {\n  -webkit-user-select: none; /* Safari */\n  -ms-user-select: none; /* IE 10 and IE 11 */\n  -moz-user-select: none;\n       user-select: none; /* Standard syntax */\n  width: 210px;\n  height: 40px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.7rem;\n  font-weight: 600;\n  cursor: pointer;\n}\n.modal .not-important {\n  color: #ed0000;\n}\n.modal .important {\n  color: #02f32e;\n}\n.modal .close-modal {\n  display: inline-block;\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  cursor: pointer;\n  width: 30px;\n  height: 30px;\n}\n.modal .line {\n  position: absolute;\n  width: 100%;\n  height: 5px;\n  background-color: white;\n  transition: transform 0.2s ease;\n}\n.modal .line:first-child {\n  transform: rotate(45deg);\n}\n.modal .line:last-child {\n  transform: rotate(-45deg);\n}\n.modal .btn {\n  color: rgb(254, 254, 254);\n  font-weight: 600;\n  background-color: rgb(221, 76, 61);\n  padding: 0.5rem 5rem;\n  border-radius: 20px;\n  margin-top: auto;\n  margin-bottom: 1rem;\n}\n.modal .delete-btn {\n  margin-top: 0;\n  margin-bottom: 0.3rem;\n}\n\n@media only screen and (min-width: 701px) {\n  .responsive-nav {\n    display: none;\n  }\n}\n@media only screen and (max-width: 700px) {\n  .nav-bar {\n    display: none;\n  }\n  .task-el {\n    width: 300px;\n  }\n  .add-task-el {\n    width: 300px;\n  }\n  .main {\n    grid-column: 1/4;\n  }\n}\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}/*# sourceMappingURL=style.css.map */",null],"sourceRoot":""}]);
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
/* harmony import */ var _globalFunctions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./globalFunctions.js */ "./src/globalFunctions.js");






const p1 = new _data_js__WEBPACK_IMPORTED_MODULE_0__.Project('projekt1','opis projektu',[])
const p2 = new _data_js__WEBPACK_IMPORTED_MODULE_0__.Project('projekt2','opis projektu',[])
const p3 = new _data_js__WEBPACK_IMPORTED_MODULE_0__.Project('projekt3','opis projektu',[])


function drawAll(){
    const container = document.createElement('div')
    container.classList.add('container')

    
    
    
    container.append((0,_drawing_js__WEBPACK_IMPORTED_MODULE_1__.drawAddTaskEl)())
    for(let i=0;i<_data_js__WEBPACK_IMPORTED_MODULE_0__.Task.tasks.length;i++){
        if(_data_js__WEBPACK_IMPORTED_MODULE_0__.Task.tasks[i].isDone==false){
            const taskEl = (0,_drawing_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_data_js__WEBPACK_IMPORTED_MODULE_0__.Task.tasks[i])
        
            container.append(taskEl)
        }
        //refresh()
        

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

/***/ "./src/completed.js":
/*!**************************!*\
  !*** ./src/completed.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadCompleted)
/* harmony export */ });
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ "./src/data.js");
/* harmony import */ var _drawing_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drawing.js */ "./src/drawing.js");






function drawCompleted(){
    const container = document.createElement('div')
    container.classList.add('container')

    
    
    
    
    for(let i=0;i<_data_js__WEBPACK_IMPORTED_MODULE_0__.Task.tasks.length;i++){
        if(_data_js__WEBPACK_IMPORTED_MODULE_0__.Task.tasks[i].isDone==true){
            const taskEl = (0,_drawing_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_data_js__WEBPACK_IMPORTED_MODULE_0__.Task.tasks[i])
            const isDone = taskEl.querySelector('.is-done')
            isDone.checked=true
            container.append(taskEl)
        }
        

    }



    return container
}

function loadCompleted(){
    console.log("LOAD COMPLETED")
    const main = document.querySelector("#main")

    const navBar = document.querySelector(".nav-bar")
    

    for(let i = 0;i<navBar.children.length-2;i++){
        navBar.children[i].dataset.isactive=false
    }
   
    var arr = Array.prototype.slice.call( navBar.children )
    let res  = arr.find(item => item.innerText == 'Completed');
    res.dataset.isactive=true
    


    main.textContent=''
    main.appendChild(drawCompleted())
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
    static trash = []

    constructor(title,description,date,important,project){
        this._title = title
        this._description = description
        this._date = date
        this._important = important
        this._project = project
        this._isDone = false

        Task.tasks.push(this)
    }

    get title(){ return this._title}
    get description(){ return this._description}
    get date(){ return this._date}
    get important(){ return this._important}
    get project(){ return this._project}
    get isDone(){return this._isDone}

    set title(title){this._title=title}
    set description(description){ this._description=description}
    set date(date){this._date = date}
    set important(important){this._important = important}
    set project(project){ this._project=project}
    set isDone(isDone){this._isDone=isDone}

    

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
/* harmony export */   "drawAddTaskEl": () => (/* binding */ drawAddTaskEl),
/* harmony export */   "drawTaskInTrash": () => (/* binding */ drawTaskInTrash)
/* harmony export */ });
/* harmony import */ var _modals_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modals.js */ "./src/modals.js");
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.js */ "./src/data.js");
/* harmony import */ var _trash_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./trash.js */ "./src/trash.js");
/* harmony import */ var _completed_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./completed.js */ "./src/completed.js");
/* harmony import */ var _globalFunctions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./globalFunctions.js */ "./src/globalFunctions.js");








function drawTask(task){
    const taskEl = document.createElement('div')
    taskEl.classList.add('task-el')
        const isDone = document.createElement('input')
        isDone.type = 'checkbox'
        isDone.classList.add('is-done')
        if(task.isDone==true) isDone.checked=true
        taskEl.appendChild(isDone)

        isDone.addEventListener('click',()=>{
            console.log("-------")
            console.log(task) 
            if(task.isDone==false){
                console.log("task.isDone==false")
                task.isDone = true
            }
            else if(task.isDone==true){
                console.log("task.isDone==true")
                task.isDone = false
            }
            (0,_globalFunctions_js__WEBPACK_IMPORTED_MODULE_4__.refresh)()

           console.log(task) 
           console.log("-------")
        })


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

function drawTaskInTrash(task){
    const taskEl = drawTask(task)

    taskEl.removeChild(taskEl.querySelector('.show-btn'))
    
    const recoverBtn = document.createElement('div')
        recoverBtn.classList.add('recover-btn')
        recoverBtn.classList.add('btn')
        recoverBtn.innerText='Recover'
        taskEl.appendChild(recoverBtn)

        recoverBtn.addEventListener('click',()=>{
            
            _data_js__WEBPACK_IMPORTED_MODULE_1__.Task.trash = _data_js__WEBPACK_IMPORTED_MODULE_1__.Task.trash.filter(t=>t.title!=task.title)
            
            
            _data_js__WEBPACK_IMPORTED_MODULE_1__.Task.tasks.push(task)
           
            ;(0,_globalFunctions_js__WEBPACK_IMPORTED_MODULE_4__.refresh)()
            
        })


    
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

/***/ "./src/globalFunctions.js":
/*!********************************!*\
  !*** ./src/globalFunctions.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "refresh": () => (/* binding */ refresh)
/* harmony export */ });
/* harmony import */ var _all__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./all */ "./src/all.js");
/* harmony import */ var _completed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./completed */ "./src/completed.js");
/* harmony import */ var _trash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./trash */ "./src/trash.js");




function currentWindow(){
    
    const navBar = document.querySelector(".nav-bar")
    var arr = Array.prototype.slice.call( navBar.children )
    
    let res  = arr.find(item => item.dataset.isactive == 'true').innerText;
    
    console.log("###current widnow: "+res)

    return res
}

function refresh(){
    console.log("###refreshing: ")
    if(currentWindow()=='All') (0,_all__WEBPACK_IMPORTED_MODULE_0__["default"])()
    if(currentWindow()=='Trash') (0,_trash__WEBPACK_IMPORTED_MODULE_2__["default"])()
    if(currentWindow()=='Completed') (0,_completed__WEBPACK_IMPORTED_MODULE_1__["default"])()
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
/* harmony import */ var _completed_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./completed.js */ "./src/completed.js");





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
                console.log('unnamed')
                title='unnamed'+' '+checkUnnamed()
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
            _data_js__WEBPACK_IMPORTED_MODULE_0__.Task.trash.push(task)
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
                console.log('unnamed')
                title='unnamed'+' '+checkUnnamed()
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



    

    return modal
}

function refresh(){
    if(currentWindow()=='All') (0,_all_js__WEBPACK_IMPORTED_MODULE_1__["default"])()
    if(currentWindow()=='Completed') (0,_completed_js__WEBPACK_IMPORTED_MODULE_2__["default"])()
}



// NOT WORKING (ADD TRASH FEATURE ! ! ! )
function checkUnnamed(){
    let unn=0
    console.log(_data_js__WEBPACK_IMPORTED_MODULE_0__.Task.tasks)
    for(let i = 0;i<_data_js__WEBPACK_IMPORTED_MODULE_0__.Task.tasks.length;i++){
        console.log(_data_js__WEBPACK_IMPORTED_MODULE_0__.Task.tasks[i].title)
        console.log('unn:',unn)
        if(_data_js__WEBPACK_IMPORTED_MODULE_0__.Task.tasks[i].title.slice(0,7)=='unnamed'){
            
            unn++
        }
    }
    for(let i = 0; i<_data_js__WEBPACK_IMPORTED_MODULE_0__.Task.trash.length;i++){
        if(_data_js__WEBPACK_IMPORTED_MODULE_0__.Task.trash[i].title.slice(0,7)=='unnamed'){
            unn++
        }
    }
    return unn
    
}

/***/ }),

/***/ "./src/trash.js":
/*!**********************!*\
  !*** ./src/trash.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadTrash)
/* harmony export */ });
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ "./src/data.js");
/* harmony import */ var _drawing_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drawing.js */ "./src/drawing.js");





function drawTrash(){
    const container = document.createElement('div')
    container.classList.add('container')

    
    
    
    
    for(let i=0;i<_data_js__WEBPACK_IMPORTED_MODULE_0__.Task.trash.length;i++){
        const taskEl = (0,_drawing_js__WEBPACK_IMPORTED_MODULE_1__.drawTaskInTrash)(_data_js__WEBPACK_IMPORTED_MODULE_0__.Task.trash[i])
        
        container.append(taskEl)

    }



    return container
}


function loadTrash(){
    const main = document.querySelector("#main")

    const navBar = document.querySelector(".nav-bar")
    

    for(let i = 0;i<navBar.children.length-2;i++){
        navBar.children[i].dataset.isactive=false
    }
   
    var arr = Array.prototype.slice.call( navBar.children )
    let res  = arr.find(item => item.innerText == 'Trash');
    res.dataset.isactive=true
    


    main.textContent=''
    main.appendChild(drawTrash())
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
/* harmony import */ var _trash_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./trash.js */ "./src/trash.js");
/* harmony import */ var _completed_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./completed.js */ "./src/completed.js");
/* harmony import */ var _images_githublogo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/githublogo.png */ "./src/images/githublogo.png");
/* harmony import */ var _images_iglogo_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/iglogo.png */ "./src/images/iglogo.png");








const content = document.querySelector("#content")

const GithubImg = new Image()
const IgImg = new Image()
GithubImg.src = _images_githublogo_png__WEBPACK_IMPORTED_MODULE_4__
IgImg.src = _images_iglogo_png__WEBPACK_IMPORTED_MODULE_5__

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

        const navCompleted = document.createElement('div')
        navCompleted.classList.add('nav-element')
        navCompleted.dataset.isactive=false
        navBar.appendChild(navCompleted)
        navCompleted.textContent='Completed'


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


        

                //action listeners

                navAll.addEventListener('click',()=>{
                    ;(0,_all_js__WEBPACK_IMPORTED_MODULE_1__["default"])()
                })


                navTrash.addEventListener('click',()=>{
                    ;(0,_trash_js__WEBPACK_IMPORTED_MODULE_2__["default"])()
                })

                navCompleted.addEventListener('click',()=>{
                    console.log("lll")
                    ;(0,_completed_js__WEBPACK_IMPORTED_MODULE_3__["default"])()
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sWUFBWSxZQUFZLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsWUFBWSxZQUFZLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLE1BQU0sT0FBTyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxZQUFZLFlBQVksV0FBVyxPQUFPLE9BQU8sWUFBWSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFX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QUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGlCQUFpQjs7O0FBR2pCOztBQUVBOztBQUVBO0FBQ0Esb0JBQW9CLG9EQUFPO0FBQzNCLGlCQUFpQjs7O0FBR2pCO0FBQ0Esb0JBQW9CLHNEQUFTO0FBQzdCLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBLG9CQUFvQiwwREFBYTtBQUNqQyxpQkFBaUI7O0FBRWpCOzs7O0FBSUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOzs7QUFHYjs7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9EQUFPOzs7QUFHUCwyQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3M/NDI1NCIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2FsbC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9jb21wbGV0ZWQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvZGF0YS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9kcmF3aW5nLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2dsb2JhbEZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9tb2RhbHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvdHJhc2guanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMTBmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHggMWZyIDFmcjtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBncmlkLWNvbHVtbjogMS8zO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMSwgNzYsIDYxKTtcXG4gIHBhZGRpbmc6IDEuN3JlbTtcXG4gIGZvbnQtc2l6ZTogMi4zcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uaGVhZGVyIC5yZXNwb25zaXZlLW5hdiB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi10b3A6IDVweDtcXG59XFxuLmhlYWRlciAucmVzcG9uc2l2ZS1uYXYgPiAqIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDUwcHg7XFxuICBoZWlnaHQ6IDZweDtcXG4gIG1hcmdpbi1ib3R0b206IDlweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgei1pbmRleDogMTtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxufVxcbi5oZWFkZXIgLnJlc3BvbnNpdmUtbmF2LmlzLWFjdGl2ZSBzcGFuOm50aC1jaGlsZCgxKSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIC0ycHgpIHJvdGF0ZSg0NWRlZyk7XFxufVxcbi5oZWFkZXIgLnJlc3BvbnNpdmUtbmF2LmlzLWFjdGl2ZSBzcGFuOm50aC1jaGlsZCgyKSB7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE1cHgpO1xcbn1cXG4uaGVhZGVyIC5yZXNwb25zaXZlLW5hdi5pcy1hY3RpdmUgc3BhbjpudGgtY2hpbGQoMykge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTNweCwgM3B4KSByb3RhdGUoLTQ1ZGVnKTtcXG59XFxuXFxuLm1vYmlsZS1uYXYge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm1vYmlsZS1uYXYuaXMtYWN0aXZlIHtcXG4gIGdyaWQtY29sdW1uOiAxLzM7XFxuICBncmlkLXJvdzogMi8zO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ0LCAyMzgsIDIzOCk7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDAuNDVyZW07XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGZhZGUgMC4ycztcXG4gICAgICAgICAgYW5pbWF0aW9uOiBmYWRlIDAuMnM7XFxufVxcbi5tb2JpbGUtbmF2LmlzLWFjdGl2ZSAubmF2LWVsZW1lbnQ6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLm1vYmlsZS1uYXYuaXMtYWN0aXZlIC5saW5rcyAuaWctaW1nIHtcXG4gIHdpZHRoOiAzMHB4O1xcbn1cXG4ubW9iaWxlLW5hdi5pcy1hY3RpdmUgLmxpbmtzIC5pZy1pbWc6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcXG59XFxuLm1vYmlsZS1uYXYuaXMtYWN0aXZlIC5saW5rcyAuZ2l0aHViLWltZyB7XFxuICB3aWR0aDogNjBweDtcXG59XFxuLm1vYmlsZS1uYXYuaXMtYWN0aXZlIC5saW5rcyAuZ2l0aHViLWltZzpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZSB7XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIH1cXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjEpO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGUge1xcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICB9XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC4xKTtcXG4gIH1cXG59XFxuLm5hdi1iYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NCwgMjM4LCAyMzgpO1xcbiAgZm9udC1zaXplOiAxLjM1cmVtO1xcbiAgZ3JpZC1jb2x1bW46IDE7XFxuICBncmlkLXJvdzogMi80O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuNXJlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTYwcHg7XFxufVxcbi5uYXYtYmFyIC5uYXYtZWxlbWVudDpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubmF2LWJhciAubGlua3MgLmlnLWltZyB7XFxuICB3aWR0aDogMzBweDtcXG59XFxuLm5hdi1iYXIgLmxpbmtzIC5pZy1pbWc6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcXG59XFxuLm5hdi1iYXIgLmxpbmtzIC5naXRodWItaW1nIHtcXG4gIHdpZHRoOiA2MHB4O1xcbn1cXG4ubmF2LWJhciAubGlua3MgLmdpdGh1Yi1pbWc6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcXG59XFxuXFxuLm1haW4ge1xcbiAgZ3JpZC1jb2x1bW46IDIvNDtcXG4gIGdyaWQtcm93OiAyLzQ7XFxufVxcblxcbi5tYWluLnNocmluayB7XFxuICBncmlkLXJvdzogMy80O1xcbiAgcGFkZGluZy10b3A6IDJyZW07XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgcGFkZGluZzogMnJlbTtcXG59XFxuXFxuLnRhc2stZWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgd2lkdGg6IDQ1MHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NCwgMjM4LCAyMzgpO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIHBhZGRpbmc6IDAgMC43cmVtO1xcbn1cXG4udGFzay1lbCAuaXMtZG9uZSB7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICB3aWR0aDogMjVweDtcXG4gIG1hcmdpbjogMXJlbTtcXG59XFxuLnRhc2stZWwgLnNob3ctYnRuLFxcbi50YXNrLWVsIC5yZWNvdmVyLWJ0biB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIHBhZGRpbmc6IDAuNHJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uYWRkLXRhc2stZWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICB3aWR0aDogNDUwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ0LCAyMzgsIDIzOCk7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgcGFkZGluZzogMCAwLjdyZW07XFxufVxcblxcbi5yZWNvdmVyLWJ0bixcXG4ubmV3LWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIxLCA3NiwgNjEpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgcGFkZGluZzogMC40cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5idG4ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYnRuOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxufVxcblxcbi5tb2RhbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBnYXA6IDEuM3JlbTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRvcDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICB3aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IDUwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbn1cXG4ubW9kYWwgLnRleHQtZm9ybSB7XFxuICBwYWRkaW5nOiA5cHg7XFxuICBmb250LXNpemU6IDIycHg7XFxuICBib3JkZXItd2lkdGg6IDBweDtcXG4gIGJvcmRlci1jb2xvcjogI2VkMDAwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICBjb2xvcjogIzAwMDAwMDtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCA4cHggcmdiYSg2NiwgNjYsIDY2LCAwLjIpO1xcbiAgdGV4dC1zaGFkb3c6IDBweCAwcHggMHB4IHJnYmEoNjYsIDY2LCA2NiwgMC43NSk7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbn1cXG4ubW9kYWwgLmRlc2NyaXB0aW9uLWZvcm0ge1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIHJlc2l6ZTogbm9uZTtcXG59XFxuLm1vZGFsIC50aXRsZS1mb3JtIHtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbn1cXG4ubW9kYWwgLnByb2plY3QtZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGhlaWdodDogNTBweDtcXG59XFxuLm1vZGFsIC5wcm9qZWN0LWZvcm0gLnByb2plY3Qtc2VsZWN0IHtcXG4gIHBhZGRpbmc6IDlweDtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICBjb2xvcjogIzAwMDAwMDtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCA4cHggcmdiYSg2NiwgNjYsIDY2LCAwLjIpO1xcbiAgdGV4dC1zaGFkb3c6IDBweCAwcHggMHB4IHJnYmEoNjYsIDY2LCA2NiwgMC43NSk7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbn1cXG4ubW9kYWwgLmRhdGUtZm9ybSB7XFxuICBwYWRkaW5nOiA5cHg7XFxuICBmb250LXNpemU6IDIycHg7XFxuICBib3JkZXItd2lkdGg6IDBweDtcXG4gIGJvcmRlci1jb2xvcjogI2VkMDAwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICBjb2xvcjogIzAwMDAwMDtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCA4cHggcmdiYSg2NiwgNjYsIDY2LCAwLjIpO1xcbiAgdGV4dC1zaGFkb3c6IDBweCAwcHggMHB4IHJnYmEoNjYsIDY2LCA2NiwgMC43NSk7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbn1cXG4ubW9kYWwgLmltcG9ydGFudC1mb3JtIHtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIFNhZmFyaSAqL1xcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAvKiBJRSAxMCBhbmQgSUUgMTEgKi9cXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgIHVzZXItc2VsZWN0OiBub25lOyAvKiBTdGFuZGFyZCBzeW50YXggKi9cXG4gIHdpZHRoOiAyMTBweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjdyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubW9kYWwgLm5vdC1pbXBvcnRhbnQge1xcbiAgY29sb3I6ICNlZDAwMDA7XFxufVxcbi5tb2RhbCAuaW1wb3J0YW50IHtcXG4gIGNvbG9yOiAjMDJmMzJlO1xcbn1cXG4ubW9kYWwgLmNsb3NlLW1vZGFsIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTVweDtcXG4gIHJpZ2h0OiAxNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxufVxcbi5tb2RhbCAubGluZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlO1xcbn1cXG4ubW9kYWwgLmxpbmU6Zmlyc3QtY2hpbGQge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbn1cXG4ubW9kYWwgLmxpbmU6bGFzdC1jaGlsZCB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbn1cXG4ubW9kYWwgLmJ0biB7XFxuICBjb2xvcjogcmdiKDI1NCwgMjU0LCAyNTQpO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjEsIDc2LCA2MSk7XFxuICBwYWRkaW5nOiAwLjVyZW0gNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuLm1vZGFsIC5kZWxldGUtYnRuIHtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBtYXJnaW4tYm90dG9tOiAwLjNyZW07XFxufVxcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCxcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxuXFxub2wsIHVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmJsb2NrcXVvdGUsIHEge1xcbiAgcXVvdGVzOiBub25lO1xcbn1cXG5cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGNvbnRlbnQ6IG5vbmU7XFxufVxcblxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDtcXG59LyojIHNvdXJjZU1hcHBpbmdVUkw9c3R5bGUuY3NzLm1hcCAqL0BtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzAxcHgpIHtcXG4gIC5yZXNwb25zaXZlLW5hdiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufUBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gIC5uYXYtYmFyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gIC50YXNrLWVsIHtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgfVxcbiAgLmFkZC10YXNrLWVsIHtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgfVxcbiAgLm1haW4ge1xcbiAgICBncmlkLWNvbHVtbjogMS80O1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiLFwiPG5vIHNvdXJjZT5cIl0sXCJuYW1lc1wiOltdLFwi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QTtFQUNBLHVCQUFBO0VBRUEsK0JBQUE7QUMvRlI7QURtR007RUFDRSx3QkFBQTtBQ2pHUjtBRG9HTTtFQUNFLHlCQUFBO0FDbEdSO0FEeUdJO0VBQ0kseUJBM1pBO0VBNFpBLGdCQUFBO0VBQ0Esa0NBOVpBO0VBK1pBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDdkdSO0FEeUdJO0VBQ0ksYUFBQTtFQUNBLHFCQUFBO0FDdkdSO0FEa0tBOzs7Ozs7Ozs7Ozs7O0VBYUMsU0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtBQzVJRDs7QUQ4SUEsZ0RBQUE7QUFDQTs7RUFFQyxjQUFBO0FDM0lEOztBRDZJQTtFQUNDLGNBQUE7QUMxSUQ7O0FENElBO0VBQ0MsZ0JBQUE7QUN6SUQ7O0FEMklBO0VBQ0MsWUFBQTtBQ3hJRDs7QUQwSUE7O0VBRUMsV0FBQTtFQUNBLGFBQUE7QUN2SUQ7O0FEeUlBO0VBQ0MseUJBQUE7RUFDQSxpQkFBQTtBQ3RJRCxDQUFBLG9DQUFBLENDcllBO0VGb2JJO0lBQ0ksYUFBQTtFQ2hITjtBQTJERixDQ2hZQTtFRjRiSTtJQUNJLGFBQUE7RUNuSE47RURzSEU7SUFDSSxZQUFBO0VDcEhOO0VEc0hFO0lBQ0ksWUFBQTtFQ3BITjtFRHdIRTtJQUNJLGdCQUFBO0VDdEhOO0FBMERGXCIsXCJzb3VyY2VzQ29udGVudFwiOltudWxsLFwiYm9keSB7XFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxMGZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCAxZnIgMWZyO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGdyaWQtY29sdW1uOiAxLzM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIxLCA3NiwgNjEpO1xcbiAgcGFkZGluZzogMS43cmVtO1xcbiAgZm9udC1zaXplOiAyLjNyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5oZWFkZXIgLnJlc3BvbnNpdmUtbmF2IHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbn1cXG4uaGVhZGVyIC5yZXNwb25zaXZlLW5hdiA+ICoge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogNnB4O1xcbiAgbWFyZ2luLWJvdHRvbTogOXB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICB6LWluZGV4OiAxO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xcbiAgdHJhbnNpdGlvbjogMC40cztcXG59XFxuLmhlYWRlciAucmVzcG9uc2l2ZS1uYXYuaXMtYWN0aXZlIHNwYW46bnRoLWNoaWxkKDEpIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgLTJweCkgcm90YXRlKDQ1ZGVnKTtcXG59XFxuLmhlYWRlciAucmVzcG9uc2l2ZS1uYXYuaXMtYWN0aXZlIHNwYW46bnRoLWNoaWxkKDIpIHtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTVweCk7XFxufVxcbi5oZWFkZXIgLnJlc3BvbnNpdmUtbmF2LmlzLWFjdGl2ZSBzcGFuOm50aC1jaGlsZCgzKSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtM3B4LCAzcHgpIHJvdGF0ZSgtNDVkZWcpO1xcbn1cXG5cXG4ubW9iaWxlLW5hdiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubW9iaWxlLW5hdi5pcy1hY3RpdmUge1xcbiAgZ3JpZC1jb2x1bW46IDEvMztcXG4gIGdyaWQtcm93OiAyLzM7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDQsIDIzOCwgMjM4KTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC40NXJlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZSAwLjJzO1xcbiAgICAgICAgICBhbmltYXRpb246IGZhZGUgMC4ycztcXG59XFxuLm1vYmlsZS1uYXYuaXMtYWN0aXZlIC5uYXYtZWxlbWVudDpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubW9iaWxlLW5hdi5pcy1hY3RpdmUgLmxpbmtzIC5pZy1pbWcge1xcbiAgd2lkdGg6IDMwcHg7XFxufVxcbi5tb2JpbGUtbmF2LmlzLWFjdGl2ZSAubGlua3MgLmlnLWltZzpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xcbn1cXG4ubW9iaWxlLW5hdi5pcy1hY3RpdmUgLmxpbmtzIC5naXRodWItaW1nIHtcXG4gIHdpZHRoOiA2MHB4O1xcbn1cXG4ubW9iaWxlLW5hdi5pcy1hY3RpdmUgLmxpbmtzIC5naXRodWItaW1nOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlIHtcXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgfVxcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMSk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZSB7XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIH1cXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjEpO1xcbiAgfVxcbn1cXG4ubmF2LWJhciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ0LCAyMzgsIDIzOCk7XFxuICBmb250LXNpemU6IDEuMzVyZW07XFxuICBncmlkLWNvbHVtbjogMTtcXG4gIGdyaWQtcm93OiAyLzQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC41cmVtO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxNjBweDtcXG59XFxuLm5hdi1iYXIgLm5hdi1lbGVtZW50OmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5uYXYtYmFyIC5saW5rcyAuaWctaW1nIHtcXG4gIHdpZHRoOiAzMHB4O1xcbn1cXG4ubmF2LWJhciAubGlua3MgLmlnLWltZzpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xcbn1cXG4ubmF2LWJhciAubGlua3MgLmdpdGh1Yi1pbWcge1xcbiAgd2lkdGg6IDYwcHg7XFxufVxcbi5uYXYtYmFyIC5saW5rcyAuZ2l0aHViLWltZzpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xcbn1cXG5cXG4ubWFpbiB7XFxuICBncmlkLWNvbHVtbjogMi80O1xcbiAgZ3JpZC1yb3c6IDIvNDtcXG59XFxuXFxuLm1haW4uc2hyaW5rIHtcXG4gIGdyaWQtcm93OiAzLzQ7XFxuICBwYWRkaW5nLXRvcDogMnJlbTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBwYWRkaW5nOiAycmVtO1xcbn1cXG5cXG4udGFzay1lbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICB3aWR0aDogNDUwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ0LCAyMzgsIDIzOCk7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgcGFkZGluZzogMCAwLjdyZW07XFxufVxcbi50YXNrLWVsIC5pcy1kb25lIHtcXG4gIGhlaWdodDogMjVweDtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgbWFyZ2luOiAxcmVtO1xcbn1cXG4udGFzay1lbCAuc2hvdy1idG4sXFxuLnRhc2stZWwgLnJlY292ZXItYnRuIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgcGFkZGluZzogMC40cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5hZGQtdGFzay1lbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG4gIHdpZHRoOiA0NTBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDQsIDIzOCwgMjM4KTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBwYWRkaW5nOiAwIDAuN3JlbTtcXG59XFxuXFxuLnJlY292ZXItYnRuLFxcbi5uZXctYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjEsIDc2LCA2MSk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBwYWRkaW5nOiAwLjRyZW07XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLmJ0biB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5idG46aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG59XFxuXFxuLm1vZGFsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGdhcDogMS4zcmVtO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgbGVmdDogNTAlO1xcbiAgdG9wOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIGhlaWdodDogNTAlO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxufVxcbi5tb2RhbCAudGV4dC1mb3JtIHtcXG4gIHBhZGRpbmc6IDlweDtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG4gIGJvcmRlci13aWR0aDogMHB4O1xcbiAgYm9yZGVyLWNvbG9yOiAjZWQwMDAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gIGNvbG9yOiAjMDAwMDAwO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDhweCByZ2JhKDY2LCA2NiwgNjYsIDAuMik7XFxuICB0ZXh0LXNoYWRvdzogMHB4IDBweCAwcHggcmdiYSg2NiwgNjYsIDY2LCAwLjc1KTtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxufVxcbi5tb2RhbCAuZGVzY3JpcHRpb24tZm9ybSB7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgcmVzaXplOiBub25lO1xcbn1cXG4ubW9kYWwgLnRpdGxlLWZvcm0ge1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxufVxcbi5tb2RhbCAucHJvamVjdC1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbn1cXG4ubW9kYWwgLnByb2plY3QtZm9ybSAucHJvamVjdC1zZWxlY3Qge1xcbiAgcGFkZGluZzogOXB4O1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gIGNvbG9yOiAjMDAwMDAwO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDhweCByZ2JhKDY2LCA2NiwgNjYsIDAuMik7XFxuICB0ZXh0LXNoYWRvdzogMHB4IDBweCAwcHggcmdiYSg2NiwgNjYsIDY2LCAwLjc1KTtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxufVxcbi5tb2RhbCAuZGF0ZS1mb3JtIHtcXG4gIHBhZGRpbmc6IDlweDtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG4gIGJvcmRlci13aWR0aDogMHB4O1xcbiAgYm9yZGVyLWNvbG9yOiAjZWQwMDAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gIGNvbG9yOiAjMDAwMDAwO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDhweCByZ2JhKDY2LCA2NiwgNjYsIDAuMik7XFxuICB0ZXh0LXNoYWRvdzogMHB4IDBweCAwcHggcmdiYSg2NiwgNjYsIDY2LCAwLjc1KTtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxufVxcbi5tb2RhbCAuaW1wb3J0YW50LWZvcm0ge1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgLyogU2FmYXJpICovXFxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIElFIDEwIGFuZCBJRSAxMSAqL1xcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7IC8qIFN0YW5kYXJkIHN5bnRheCAqL1xcbiAgd2lkdGg6IDIxMHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuN3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5tb2RhbCAubm90LWltcG9ydGFudCB7XFxuICBjb2xvcjogI2VkMDAwMDtcXG59XFxuLm1vZGFsIC5pbXBvcnRhbnQge1xcbiAgY29sb3I6ICMwMmYzMmU7XFxufVxcbi5tb2RhbCAuY2xvc2UtbW9kYWwge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxNXB4O1xcbiAgcmlnaHQ6IDE1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMzBweDtcXG59XFxuLm1vZGFsIC5saW5lIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2U7XFxufVxcbi5tb2RhbCAubGluZTpmaXJzdC1jaGlsZCB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxufVxcbi5tb2RhbCAubGluZTpsYXN0LWNoaWxkIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxufVxcbi5tb2RhbCAuYnRuIHtcXG4gIGNvbG9yOiByZ2IoMjU0LCAyNTQsIDI1NCk7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMSwgNzYsIDYxKTtcXG4gIHBhZGRpbmc6IDAuNXJlbSA1cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG4ubW9kYWwgLmRlbGV0ZS1idG4ge1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIG1hcmdpbi1ib3R0b206IDAuM3JlbTtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MDFweCkge1xcbiAgLnJlc3BvbnNpdmUtbmF2IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xcbiAgLm5hdi1iYXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgLnRhc2stZWwge1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICB9XFxuICAuYWRkLXRhc2stZWwge1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICB9XFxuICAubWFpbiB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzQ7XFxuICB9XFxufVxcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCxcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxuXFxub2wsIHVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmJsb2NrcXVvdGUsIHEge1xcbiAgcXVvdGVzOiBub25lO1xcbn1cXG5cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGNvbnRlbnQ6IG5vbmU7XFxufVxcblxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDtcXG59LyojIHNvdXJjZU1hcHBpbmdVUkw9c3R5bGUuY3NzLm1hcCAqL1wiLG51bGxdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9ncm91cC1jc3MtbWVkaWEtcXVlcmllcy1sb2FkZXIvbGliL2luZGV4LmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL2dyb3VwLWNzcy1tZWRpYS1xdWVyaWVzLWxvYWRlci9saWIvaW5kZXguanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiXG5pbXBvcnQgeyBQcm9qZWN0LCBUYXNrLCBhZGRUb1Byb2plY3QsIGRlbGV0ZUZyb21Qcm9qZWN0IH0gZnJvbSAnLi9kYXRhLmpzJ1xuaW1wb3J0ICBkcmF3VGFzayAgZnJvbSAnLi9kcmF3aW5nLmpzJ1xuaW1wb3J0IHtkcmF3QWRkVGFza0VsfSBmcm9tICcuL2RyYXdpbmcuanMnXG5pbXBvcnQgeyByZWZyZXNoIH0gZnJvbSAnLi9nbG9iYWxGdW5jdGlvbnMuanMnXG5cbmNvbnN0IHAxID0gbmV3IFByb2plY3QoJ3Byb2pla3QxJywnb3BpcyBwcm9qZWt0dScsW10pXG5jb25zdCBwMiA9IG5ldyBQcm9qZWN0KCdwcm9qZWt0MicsJ29waXMgcHJvamVrdHUnLFtdKVxuY29uc3QgcDMgPSBuZXcgUHJvamVjdCgncHJvamVrdDMnLCdvcGlzIHByb2pla3R1JyxbXSlcblxuXG5mdW5jdGlvbiBkcmF3QWxsKCl7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJylcblxuICAgIFxuICAgIFxuICAgIFxuICAgIGNvbnRhaW5lci5hcHBlbmQoZHJhd0FkZFRhc2tFbCgpKVxuICAgIGZvcihsZXQgaT0wO2k8VGFzay50YXNrcy5sZW5ndGg7aSsrKXtcbiAgICAgICAgaWYoVGFzay50YXNrc1tpXS5pc0RvbmU9PWZhbHNlKXtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tFbCA9IGRyYXdUYXNrKFRhc2sudGFza3NbaV0pXG4gICAgICAgIFxuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZCh0YXNrRWwpXG4gICAgICAgIH1cbiAgICAgICAgLy9yZWZyZXNoKClcbiAgICAgICAgXG5cbiAgICB9XG5cblxuXG4gICAgcmV0dXJuIGNvbnRhaW5lclxufVxuXG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRBbGwoKXtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluXCIpXG5cbiAgICBjb25zdCBuYXZCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdi1iYXJcIilcbiAgICBcblxuICAgIGZvcihsZXQgaSA9IDA7aTxuYXZCYXIuY2hpbGRyZW4ubGVuZ3RoLTI7aSsrKXtcbiAgICAgICAgbmF2QmFyLmNoaWxkcmVuW2ldLmRhdGFzZXQuaXNhY3RpdmU9ZmFsc2VcbiAgICB9XG4gICBcbiAgICB2YXIgYXJyID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoIG5hdkJhci5jaGlsZHJlbiApXG4gICAgbGV0IHJlcyAgPSBhcnIuZmluZChpdGVtID0+IGl0ZW0uaW5uZXJUZXh0ID09ICdBbGwnKTtcbiAgICByZXMuZGF0YXNldC5pc2FjdGl2ZT10cnVlXG4gICAgXG5cblxuICAgIG1haW4udGV4dENvbnRlbnQ9JydcbiAgICBtYWluLmFwcGVuZENoaWxkKGRyYXdBbGwoKSlcbn0iLCJpbXBvcnQgeyBQcm9qZWN0LCBUYXNrLCBhZGRUb1Byb2plY3QsIGRlbGV0ZUZyb21Qcm9qZWN0IH0gZnJvbSAnLi9kYXRhLmpzJ1xuaW1wb3J0ICBkcmF3VGFzayAgZnJvbSAnLi9kcmF3aW5nLmpzJ1xuaW1wb3J0IHtkcmF3QWRkVGFza0VsfSBmcm9tICcuL2RyYXdpbmcuanMnXG5cblxuXG5mdW5jdGlvbiBkcmF3Q29tcGxldGVkKCl7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJylcblxuICAgIFxuICAgIFxuICAgIFxuICAgIFxuICAgIGZvcihsZXQgaT0wO2k8VGFzay50YXNrcy5sZW5ndGg7aSsrKXtcbiAgICAgICAgaWYoVGFzay50YXNrc1tpXS5pc0RvbmU9PXRydWUpe1xuICAgICAgICAgICAgY29uc3QgdGFza0VsID0gZHJhd1Rhc2soVGFzay50YXNrc1tpXSlcbiAgICAgICAgICAgIGNvbnN0IGlzRG9uZSA9IHRhc2tFbC5xdWVyeVNlbGVjdG9yKCcuaXMtZG9uZScpXG4gICAgICAgICAgICBpc0RvbmUuY2hlY2tlZD10cnVlXG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kKHRhc2tFbClcbiAgICAgICAgfVxuICAgICAgICBcblxuICAgIH1cblxuXG5cbiAgICByZXR1cm4gY29udGFpbmVyXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRDb21wbGV0ZWQoKXtcbiAgICBjb25zb2xlLmxvZyhcIkxPQUQgQ09NUExFVEVEXCIpXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpblwiKVxuXG4gICAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXYtYmFyXCIpXG4gICAgXG5cbiAgICBmb3IobGV0IGkgPSAwO2k8bmF2QmFyLmNoaWxkcmVuLmxlbmd0aC0yO2krKyl7XG4gICAgICAgIG5hdkJhci5jaGlsZHJlbltpXS5kYXRhc2V0LmlzYWN0aXZlPWZhbHNlXG4gICAgfVxuICAgXG4gICAgdmFyIGFyciA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKCBuYXZCYXIuY2hpbGRyZW4gKVxuICAgIGxldCByZXMgID0gYXJyLmZpbmQoaXRlbSA9PiBpdGVtLmlubmVyVGV4dCA9PSAnQ29tcGxldGVkJyk7XG4gICAgcmVzLmRhdGFzZXQuaXNhY3RpdmU9dHJ1ZVxuICAgIFxuXG5cbiAgICBtYWluLnRleHRDb250ZW50PScnXG4gICAgbWFpbi5hcHBlbmRDaGlsZChkcmF3Q29tcGxldGVkKCkpXG59IiwiLy9pbXBvcnQgeyAgZm9ybWF0IH0gZnJvbSAnZGF0ZS1mbnMnXG5cbmV4cG9ydCBjbGFzcyBQcm9qZWN0e1xuICAgIHN0YXRpYyBwcm9qZWN0cyA9IFtdXG4gICAgY29uc3RydWN0b3IodGl0bGUsZGVzY3JpcHRpb24sdGFza3Mpe1xuICAgICAgICB0aGlzLl90aXRsZSA9IHRpdGxlXG4gICAgICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25cbiAgICAgICAgdGhpcy5fdGFza3MgPSB0YXNrc1xuICAgICAgICBQcm9qZWN0LnByb2plY3RzLnB1c2godGhpcylcbiAgICB9XG5cbiAgICBnZXQgdGl0bGUoKXtyZXR1cm4gdGhpcy5fdGl0bGV9XG4gICAgZ2V0IGRlc2NyaXB0aW9uKCl7cmV0dXJuIHRoaXMuX2Rlc2NyaXB0aW9ufVxuICAgIGdldCB0YXNrcygpe3JldHVybiB0aGlzLl90YXNrc31cblxuXG4gICAgc2V0IHRpdGxlKHRpdGxlKXt0aGlzLl90aXRsZT10aXRsZX1cbiAgICBzZXQgZGVzY3JpcHRpb24oZGVzY3JpcHRpb24peyB0aGlzLl9kZXNjcmlwdGlvbj1kZXNjcmlwdGlvbn1cbiAgICBzZXQgdGFza3ModGFza3Mpe3RoaXMuX3Rhc2tzPXRhc2tzfVxuICAgIFxufVxuXG4vL09uZSB0YXNrIGNhbiBvbmx5IGJlbG9uZyB0byBvbmUgcHJvamVjdFxuZXhwb3J0IGNsYXNzIFRhc2t7XG4gICAgc3RhdGljIHRhc2tzID0gW11cbiAgICBzdGF0aWMgdHJhc2ggPSBbXVxuXG4gICAgY29uc3RydWN0b3IodGl0bGUsZGVzY3JpcHRpb24sZGF0ZSxpbXBvcnRhbnQscHJvamVjdCl7XG4gICAgICAgIHRoaXMuX3RpdGxlID0gdGl0bGVcbiAgICAgICAgdGhpcy5fZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblxuICAgICAgICB0aGlzLl9kYXRlID0gZGF0ZVxuICAgICAgICB0aGlzLl9pbXBvcnRhbnQgPSBpbXBvcnRhbnRcbiAgICAgICAgdGhpcy5fcHJvamVjdCA9IHByb2plY3RcbiAgICAgICAgdGhpcy5faXNEb25lID0gZmFsc2VcblxuICAgICAgICBUYXNrLnRhc2tzLnB1c2godGhpcylcbiAgICB9XG5cbiAgICBnZXQgdGl0bGUoKXsgcmV0dXJuIHRoaXMuX3RpdGxlfVxuICAgIGdldCBkZXNjcmlwdGlvbigpeyByZXR1cm4gdGhpcy5fZGVzY3JpcHRpb259XG4gICAgZ2V0IGRhdGUoKXsgcmV0dXJuIHRoaXMuX2RhdGV9XG4gICAgZ2V0IGltcG9ydGFudCgpeyByZXR1cm4gdGhpcy5faW1wb3J0YW50fVxuICAgIGdldCBwcm9qZWN0KCl7IHJldHVybiB0aGlzLl9wcm9qZWN0fVxuICAgIGdldCBpc0RvbmUoKXtyZXR1cm4gdGhpcy5faXNEb25lfVxuXG4gICAgc2V0IHRpdGxlKHRpdGxlKXt0aGlzLl90aXRsZT10aXRsZX1cbiAgICBzZXQgZGVzY3JpcHRpb24oZGVzY3JpcHRpb24peyB0aGlzLl9kZXNjcmlwdGlvbj1kZXNjcmlwdGlvbn1cbiAgICBzZXQgZGF0ZShkYXRlKXt0aGlzLl9kYXRlID0gZGF0ZX1cbiAgICBzZXQgaW1wb3J0YW50KGltcG9ydGFudCl7dGhpcy5faW1wb3J0YW50ID0gaW1wb3J0YW50fVxuICAgIHNldCBwcm9qZWN0KHByb2plY3QpeyB0aGlzLl9wcm9qZWN0PXByb2plY3R9XG4gICAgc2V0IGlzRG9uZShpc0RvbmUpe3RoaXMuX2lzRG9uZT1pc0RvbmV9XG5cbiAgICBcblxufVxuXG4vLz8/P1xuZXhwb3J0IGZ1bmN0aW9uIGFkZFRvUHJvamVjdCh0YXNrLHByb2plY3RUaXQpe1xuXG4gICAgdGFzay5wcm9qZWN0ID0gcHJvamVjdFRpdFxuICAgIGNvbnN0IHByb2plY3QgPSBQcm9qZWN0LnByb2plY3RzLmZpbmQoaXRlbSA9PiBpdGVtLnRpdGxlID09IHByb2plY3RUaXQpO1xuICAgIFxuICAgIHByb2plY3QudGFza3MucHVzaCh0YXNrLnRpdGxlKVxuXG4gICAgY29uc29sZS5sb2coXCJhZGRlZCBcIix0YXNrLnRpdGxlLFwidG8gXCIscHJvamVjdC50aXRsZSlcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlRnJvbVByb2plY3QodGFzayxwcm9qZWN0KXtcbiAgICBsZXQgdG9EZWwgPSB0YXNrLl9wcm9qZWN0XG4gICAgdGFzay5fcHJvamVjdD0nJ1xuICAgIHByb2plY3QuX3Rhc2tzID0gcHJvamVjdC5fdGFza3MuZmlsdGVyKHQgPT50IT09dGFzay50aXRsZSlcbiAgICBjb25zb2xlLmxvZyhcImRlbGV0ZWQgXCIsdG9EZWwsXCJmcm9tIFwiLHByb2plY3QudGl0bGUpXG59XG5cbiIsImltcG9ydCB7YWRkTW9kYWwsIHNob3dNb2RhbH0gZnJvbSAnLi9tb2RhbHMuanMnXG5pbXBvcnQge1Rhc2t9IGZyb20gJy4vZGF0YS5qcydcbmltcG9ydCBsb2FkVHJhc2ggZnJvbSAnLi90cmFzaC5qcyc7XG5pbXBvcnQgbG9hZENvbXBsZXRlZCBmcm9tICcuL2NvbXBsZXRlZC5qcyc7XG5pbXBvcnQgeyBpcyB9IGZyb20gJ2RhdGUtZm5zL2xvY2FsZSc7XG5pbXBvcnQgeyByZWZyZXNoIH0gZnJvbSAnLi9nbG9iYWxGdW5jdGlvbnMuanMnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRyYXdUYXNrKHRhc2spe1xuICAgIGNvbnN0IHRhc2tFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGFza0VsLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZWwnKVxuICAgICAgICBjb25zdCBpc0RvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICAgIGlzRG9uZS50eXBlID0gJ2NoZWNrYm94J1xuICAgICAgICBpc0RvbmUuY2xhc3NMaXN0LmFkZCgnaXMtZG9uZScpXG4gICAgICAgIGlmKHRhc2suaXNEb25lPT10cnVlKSBpc0RvbmUuY2hlY2tlZD10cnVlXG4gICAgICAgIHRhc2tFbC5hcHBlbmRDaGlsZChpc0RvbmUpXG5cbiAgICAgICAgaXNEb25lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCItLS0tLS0tXCIpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0YXNrKSBcbiAgICAgICAgICAgIGlmKHRhc2suaXNEb25lPT1mYWxzZSl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0YXNrLmlzRG9uZT09ZmFsc2VcIilcbiAgICAgICAgICAgICAgICB0YXNrLmlzRG9uZSA9IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYodGFzay5pc0RvbmU9PXRydWUpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGFzay5pc0RvbmU9PXRydWVcIilcbiAgICAgICAgICAgICAgICB0YXNrLmlzRG9uZSA9IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZWZyZXNoKClcblxuICAgICAgICAgICBjb25zb2xlLmxvZyh0YXNrKSBcbiAgICAgICAgICAgY29uc29sZS5sb2coXCItLS0tLS0tXCIpXG4gICAgICAgIH0pXG5cblxuICAgICAgICBjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHRhc2tOYW1lLmNsYXNzTGlzdC5hZGQoJ3Rhc2stdGl0bGUnKVxuICAgICAgICBcbiAgICAgICAgdGFza05hbWUudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlXG4gICAgICAgIHRhc2tFbC5hcHBlbmRDaGlsZCh0YXNrTmFtZSlcblxuICAgICAgICBjb25zdCB0YXNrRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHRhc2tEYXRlLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGF0ZScpXG4gICAgICAgIHRhc2tEYXRlLnRleHRDb250ZW50ID0gdGFzay5kYXRlXG4gICAgICAgIHRhc2tFbC5hcHBlbmRDaGlsZCh0YXNrRGF0ZSlcblxuICAgICAgICBjb25zdCBzaG93QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgc2hvd0J0bi5jbGFzc0xpc3QuYWRkKCdzaG93LWJ0bicpXG4gICAgICAgIHNob3dCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJylcbiAgICAgICAgc2hvd0J0bi50ZXh0Q29udGVudCA9ICdTSE9XJ1xuICAgICAgICB0YXNrRWwuYXBwZW5kQ2hpbGQoc2hvd0J0bilcblxuICAgICAgICBzaG93QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxkcmF3U2hvd01vZGFsKVxuXG5cblxuICAgIHJldHVybiB0YXNrRWxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRyYXdUYXNrSW5UcmFzaCh0YXNrKXtcbiAgICBjb25zdCB0YXNrRWwgPSBkcmF3VGFzayh0YXNrKVxuXG4gICAgdGFza0VsLnJlbW92ZUNoaWxkKHRhc2tFbC5xdWVyeVNlbGVjdG9yKCcuc2hvdy1idG4nKSlcbiAgICBcbiAgICBjb25zdCByZWNvdmVyQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgcmVjb3ZlckJ0bi5jbGFzc0xpc3QuYWRkKCdyZWNvdmVyLWJ0bicpXG4gICAgICAgIHJlY292ZXJCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJylcbiAgICAgICAgcmVjb3ZlckJ0bi5pbm5lclRleHQ9J1JlY292ZXInXG4gICAgICAgIHRhc2tFbC5hcHBlbmRDaGlsZChyZWNvdmVyQnRuKVxuXG4gICAgICAgIHJlY292ZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFRhc2sudHJhc2ggPSBUYXNrLnRyYXNoLmZpbHRlcih0PT50LnRpdGxlIT10YXNrLnRpdGxlKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFRhc2sudGFza3MucHVzaCh0YXNrKVxuICAgICAgICAgICBcbiAgICAgICAgICAgIHJlZnJlc2goKVxuICAgICAgICAgICAgXG4gICAgICAgIH0pXG5cblxuICAgIFxuICAgIHJldHVybiB0YXNrRWxcbn1cblxuXG5cblxuXG5cbmV4cG9ydCBmdW5jdGlvbiBkcmF3QWRkVGFza0VsKCl7XG4gICAgY29uc3QgdGFza0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0YXNrRWwuY2xhc3NMaXN0LmFkZCgnYWRkLXRhc2stZWwnKVxuICAgICAgICBjb25zdCBuZXdCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBuZXdCdG4uY2xhc3NMaXN0LmFkZCgnbmV3LWJ0bicpXG4gICAgICAgIG5ld0J0bi5jbGFzc0xpc3QuYWRkKCdidG4nKVxuICAgICAgICBuZXdCdG4udGV4dENvbnRlbnQ9XCJORVdcIlxuICAgICAgICB0YXNrRWwuYXBwZW5kQ2hpbGQobmV3QnRuKVxuXG4gICAgICAgIG5ld0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZHJhd0FkZE1vZGFsKVxuXG4gICAgcmV0dXJuIHRhc2tFbFxufVxuXG5mdW5jdGlvbiBkcmF3QWRkTW9kYWwoKXtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluXCIpXG4gICAgbWFpbi5hcHBlbmRDaGlsZChhZGRNb2RhbCgpKVxuICAgIFxufVxuXG5mdW5jdGlvbiBkcmF3U2hvd01vZGFsKGUpe1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW5cIilcbiAgICBsZXQgdGFza1RpdGxlID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5jaGlsZHJlblsxXS50ZXh0Q29udGVudFxuICAgIGxldCB0YXNrID0gVGFzay50YXNrcy5maW5kKHQgPT4gdC5fdGl0bGU9PXRhc2tUaXRsZSlcbiAgICBjb25zb2xlLmxvZyh0YXNrKVxuICAgIG1haW4uYXBwZW5kQ2hpbGQoc2hvd01vZGFsKHRhc2spKVxuXG5cbn0iLCJpbXBvcnQgbG9hZEFsbCBmcm9tIFwiLi9hbGxcIjtcbmltcG9ydCBsb2FkQ29tcGxldGVkIGZyb20gXCIuL2NvbXBsZXRlZFwiO1xuaW1wb3J0IGxvYWRUcmFzaCBmcm9tIFwiLi90cmFzaFwiO1xuXG5mdW5jdGlvbiBjdXJyZW50V2luZG93KCl7XG4gICAgXG4gICAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXYtYmFyXCIpXG4gICAgdmFyIGFyciA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKCBuYXZCYXIuY2hpbGRyZW4gKVxuICAgIFxuICAgIGxldCByZXMgID0gYXJyLmZpbmQoaXRlbSA9PiBpdGVtLmRhdGFzZXQuaXNhY3RpdmUgPT0gJ3RydWUnKS5pbm5lclRleHQ7XG4gICAgXG4gICAgY29uc29sZS5sb2coXCIjIyNjdXJyZW50IHdpZG5vdzogXCIrcmVzKVxuXG4gICAgcmV0dXJuIHJlc1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmcmVzaCgpe1xuICAgIGNvbnNvbGUubG9nKFwiIyMjcmVmcmVzaGluZzogXCIpXG4gICAgaWYoY3VycmVudFdpbmRvdygpPT0nQWxsJykgbG9hZEFsbCgpXG4gICAgaWYoY3VycmVudFdpbmRvdygpPT0nVHJhc2gnKSBsb2FkVHJhc2goKVxuICAgIGlmKGN1cnJlbnRXaW5kb3coKT09J0NvbXBsZXRlZCcpIGxvYWRDb21wbGV0ZWQoKVxufSIsImltcG9ydCB7IFByb2plY3QsIFRhc2ssIGFkZFRvUHJvamVjdCwgZGVsZXRlRnJvbVByb2plY3QgfSBmcm9tICcuL2RhdGEuanMnXG5pbXBvcnQgbG9hZEFsbCBmcm9tICcuL2FsbC5qcydcbmltcG9ydCBsb2FkQ29tcGxldGVkIGZyb20gJy4vY29tcGxldGVkLmpzJ1xuXG5cbmZ1bmN0aW9uIFgobW9kYWwpe1xuICAgIGNvbnN0IGNsb3NlTW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNsb3NlTW9kYWwuY2xhc3NMaXN0LmFkZCgnY2xvc2UtbW9kYWwnKVxuICAgIFxuICAgICAgICBjb25zdCBsWCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgICBjb25zdCByWCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgICBsWC5jbGFzc0xpc3QuYWRkKCdsaW5lJylcbiAgICAgICAgclguY2xhc3NMaXN0LmFkZCgnbGluZScpXG4gICAgICAgIGNsb3NlTW9kYWwuYXBwZW5kQ2hpbGQobFgpXG4gICAgICAgIGNsb3NlTW9kYWwuYXBwZW5kQ2hpbGQoclgpXG5cbiAgICAgICAgY2xvc2VNb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgICAgLy8gbW9kYWwuc3R5bGUuZGlzcGxheT0nbm9uZSdcbiAgICAgICAgICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW5cIilcbiAgICAgICAgICAgIG1haW4ucmVtb3ZlQ2hpbGQobW9kYWwpXG4gICAgICAgIH0pICBcbiAgICByZXR1cm4gY2xvc2VNb2RhbFxufVxuXG5cbmZ1bmN0aW9uIGN1cnJlbnRXaW5kb3coKXtcbiAgICBcbiAgICBjb25zdCBuYXZCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdi1iYXJcIilcbiAgICB2YXIgYXJyID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoIG5hdkJhci5jaGlsZHJlbiApXG4gICAgXG4gICAgbGV0IHJlcyAgPSBhcnIuZmluZChpdGVtID0+IGl0ZW0uZGF0YXNldC5pc2FjdGl2ZSA9PSAndHJ1ZScpLmlubmVyVGV4dDtcbiAgICBcblxuICAgIHJldHVybiByZXNcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZE1vZGFsKCl7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ21vZGFsJylcbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdhZGQtbW9kYWwnKVxuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXk9J2ZsZXgnXG4gICAgXG5cbiAgICBtb2RhbC5hcHBlbmRDaGlsZChYKG1vZGFsKSlcbiAgICAgICBcbiAgICAgICAgY29uc3QgdGl0bGVGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgdGl0bGVGb3JtLnR5cGUgPSAndGV4dCc7XG4gICAgICAgIHRpdGxlRm9ybS5wbGFjZWhvbGRlciA9ICdUaXRsZSc7XG4gICAgICAgIHRpdGxlRm9ybS5jbGFzc0xpc3QuYWRkKCd0aXRsZS1mb3JtJyk7XG4gICAgICAgIHRpdGxlRm9ybS5jbGFzc0xpc3QuYWRkKCd0ZXh0LWZvcm0nKTtcbiAgICAgICAgbW9kYWwuYXBwZW5kQ2hpbGQodGl0bGVGb3JtKTtcbiAgICBcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb25Gb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICAgICAgZGVzY3JpcHRpb25Gb3JtLnBsYWNlaG9sZGVyID0gJ0Rlc2NyaXB0aW9uJztcbiAgICAgICAgZGVzY3JpcHRpb25Gb3JtLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uLWZvcm0nKTtcbiAgICAgICAgZGVzY3JpcHRpb25Gb3JtLmNsYXNzTGlzdC5hZGQoJ3RleHQtZm9ybScpO1xuICAgICAgICBtb2RhbC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkZvcm0pO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgcHJvamVjdEZvcm0uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1mb3JtJylcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxuICAgICAgICAgICAgcHJvamVjdFNlbGVjdC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXNlbGVjdCcpXG4gICAgICAgICAgICBwcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0U2VsZWN0KVxuXG4gICAgICAgICAgICBjb25zdCBvcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgICAgICAgICAgb3B0LnZhbHVlPTBcbiAgICAgICAgICAgIG9wdC50ZXh0PSdub25lJ1xuICAgICAgICAgICAgcHJvamVjdFNlbGVjdC5hcHBlbmRDaGlsZChvcHQpXG5cbiAgICAgICAgICAgIGZvcihsZXQgaT0wO2k8UHJvamVjdC5wcm9qZWN0cy5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgICAgICBjb25zdCBvcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgICAgICAgICAgICAgIG9wdC52YWx1ZT1pKzFcbiAgICAgICAgICAgICAgICBvcHQudGV4dD1Qcm9qZWN0LnByb2plY3RzW2ldLnRpdGxlXG4gICAgICAgICAgICAgICAgcHJvamVjdFNlbGVjdC5hcHBlbmRDaGlsZChvcHQpXG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgbW9kYWwuYXBwZW5kQ2hpbGQocHJvamVjdEZvcm0pOyAgICAgICAgICAgIFxuXG4gICAgICAgIGNvbnN0IGRhdGVGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgZGF0ZUZvcm0udHlwZSA9ICdkYXRlJztcbiAgICAgICAgZGF0ZUZvcm0uY2xhc3NMaXN0LmFkZCgnZGF0ZS1mb3JtJyk7XG4gICAgICAgIG1vZGFsLmFwcGVuZENoaWxkKGRhdGVGb3JtKTtcbiAgICBcblxuICAgICAgICBcbiAgICAgICAgY29uc3QgaW1wb3J0YW50Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGltcG9ydGFudEZvcm0uY2xhc3NMaXN0LmFkZCgnaW1wb3J0YW50LWZvcm0nKVxuICAgICAgICBpbXBvcnRhbnRGb3JtLmNsYXNzTGlzdC5hZGQoJ25vdC1pbXBvcnRhbnQnKVxuICAgICAgICBpbXBvcnRhbnRGb3JtLnRleHRDb250ZW50ID0gJ25vdCBpbXBvcnRhbnQnXG4gICAgICAgIGltcG9ydGFudEZvcm0uZGF0YXNldC5pbXBvcnRhbnQ9ZmFsc2VcbiAgICAgICAgaW1wb3J0YW50Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgICAgIGltcG9ydGFudEZvcm0uY2xhc3NMaXN0LnRvZ2dsZSgnbm90LWltcG9ydGFudCcpXG4gICAgICAgICAgICBpbXBvcnRhbnRGb3JtLmNsYXNzTGlzdC50b2dnbGUoJ2ltcG9ydGFudCcpXG5cbiAgICAgICAgICAgIGlmKGltcG9ydGFudEZvcm0uY2xhc3NMaXN0LmNvbnRhaW5zKCdpbXBvcnRhbnQnKSl7XG4gICAgICAgICAgICAgICAgaW1wb3J0YW50Rm9ybS50ZXh0Q29udGVudCA9ICdpbXBvcnRhbnQnXG4gICAgICAgICAgICAgICAgaW1wb3J0YW50Rm9ybS5kYXRhc2V0LmltcG9ydGFudD10cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKGltcG9ydGFudEZvcm0uY2xhc3NMaXN0LmNvbnRhaW5zKCdub3QtaW1wb3J0YW50Jykpe1xuICAgICAgICAgICAgICAgIGltcG9ydGFudEZvcm0udGV4dENvbnRlbnQgPSAnbm90IGltcG9ydGFudCdcbiAgICAgICAgICAgICAgICBpbXBvcnRhbnRGb3JtLmRhdGFzZXQuaW1wb3J0YW50PWZhbHNlXG4gICAgICAgICAgICB9XG5cblxuICAgICAgICB9KVxuICAgICAgICBtb2RhbC5hcHBlbmRDaGlsZChpbXBvcnRhbnRGb3JtKVxuXG5cblxuICAgICAgICBjb25zdCBzdWJtaXRCdG49ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgc3VibWl0QnRuLmlubmVyVGV4dCA9ICdTVUJNSVQnXG4gICAgICAgIHN1Ym1pdEJ0bi5jbGFzc0xpc3QuYWRkKCdidG4nKVxuICAgICAgICBzdWJtaXRCdG4uY2xhc3NMaXN0LmFkZCgnc3VibWl0LWJ0bicpXG5cbiAgICAgICAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICAgICAgbGV0IHRpdGxlID0gdGl0bGVGb3JtLnZhbHVlXG4gICAgICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbkZvcm0udmFsdWVcbiAgICAgICAgICAgIGxldCBwcm9qZWN0ID0gcHJvamVjdFNlbGVjdC5vcHRpb25zW3Byb2plY3RTZWxlY3Quc2VsZWN0ZWRJbmRleF0udGV4dFxuICAgICAgICAgICAgbGV0IGltcG9ydGFudCA9IGltcG9ydGFudEZvcm0uZGF0YXNldC5pbXBvcnRhbnRcbiAgICAgICAgICAgIGxldCBkYXRlID0gZGF0ZUZvcm0udmFsdWVcblxuICAgICAgICAgICAgaWYocHJvamVjdD09J25vbmUnKXtcbiAgICAgICAgICAgICAgICBwcm9qZWN0PScnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZih0aXRsZT09Jycpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1bm5hbWVkJylcbiAgICAgICAgICAgICAgICB0aXRsZT0ndW5uYW1lZCcrJyAnK2NoZWNrVW5uYW1lZCgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB0YXNrID0gbmV3IFRhc2sodGl0bGUsZGVzY3JpcHRpb24sZGF0ZSxpbXBvcnRhbnQscHJvamVjdClcbiAgICAgICAgICAgIGlmKHByb2plY3QhPScnKXtcbiAgICAgICAgICAgICAgICBhZGRUb1Byb2plY3QodGFzayxwcm9qZWN0KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKGN1cnJlbnRXaW5kb3coKT09J0FsbCcpIGxvYWRBbGwoKVxuXG5cblxuICAgICAgICAgICAgY29uc29sZS5sb2codGFzaylcblxuICAgICAgICB9KVxuXG5cbiAgICAgICAgbW9kYWwuYXBwZW5kQ2hpbGQoc3VibWl0QnRuKVxuICAgIFxuICAgIFxuICAgXG5cblxuXG4gICAgcmV0dXJuIG1vZGFsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93TW9kYWwodGFzayl7XG4gICAgY29uc3QgbW9kYWwgPSBhZGRNb2RhbCgpXG4gICAgICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdkZWxldGUtYnRuJylcbiAgICAgICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicpXG4gICAgICAgIGRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9ICdERUxFVEUnXG4gICAgICAgIG1vZGFsLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bilcblxuICAgICAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnI3Rhc2sgdGl0bGU6Jyx0YXNrLnRpdGxlKVxuICAgICAgICAgICAgY29uc29sZS5sb2coJyN0YXNrczonLFRhc2sudGFza3MpXG4gICAgICAgICAgICBUYXNrLnRyYXNoLnB1c2godGFzaylcbiAgICAgICAgICAgIFRhc2sudGFza3MgPSBUYXNrLnRhc2tzLmZpbHRlcigodCk9PnQudGl0bGUhPXRhc2sudGl0bGUpXG4gICAgICAgICAgICByZWZyZXNoKClcbiAgICAgICAgfSlcblxuXG5cbiAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdhZGQtbW9kYWwnKVxuICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ2VkaXQtbW9kYWwnKVxuICAgICAgICBjb25zdCB0aXRsZUZvcm0gPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCcudGl0bGUtZm9ybScpXG4gICAgICAgIHRpdGxlRm9ybS52YWx1ZSA9IHRhc2sudGl0bGVcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uRm9ybSA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5kZXNjcmlwdGlvbi1mb3JtJylcbiAgICAgICAgZGVzY3JpcHRpb25Gb3JtLnZhbHVlID0gdGFzay5kZXNjcmlwdGlvblxuXG4gICAgICAgIGNvbnN0IHByb2plY3RTZWxlY3QgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1zZWxlY3QnKVxuXG4gICAgICAgIGxldCBpbmRleD0wXG4gICAgICAgIFxuICAgICAgICBpZih0YXNrLnByb2plY3QhPScnKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdQUk9KRUNUIEVYSVNUJylcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7aTw9UHJvamVjdC5wcm9qZWN0cy5sZW5ndGg7aSsrKXtcblxuICAgICAgICAgICAgICAgIGlmKHRhc2sucHJvamVjdD09cHJvamVjdFNlbGVjdC5vcHRpb25zW2ldLmlubmVyVGV4dCl7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpbmRleCA9IChwcm9qZWN0U2VsZWN0Lm9wdGlvbnNbaV0udmFsdWUpIFxuICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHByb2plY3RTZWxlY3Quc2VsZWN0ZWRJbmRleCA9IGluZGV4XG4gICAgICAgIFxuICAgICAgICBjb25zdCBkYXRlRm9ybSA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5kYXRlLWZvcm0nKVxuICAgICAgICBkYXRlRm9ybS52YWx1ZSA9IHRhc2suZGF0ZVxuICAgICAgICBcbiAgICAgICAgY29uc3QgaW1wb3J0YW50Rm9ybSA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5pbXBvcnRhbnQtZm9ybScpXG4gICAgICAgIGNvbnNvbGUubG9nKHRhc2suaW1wb3J0YW50KVxuICAgICAgICBjb25zdCBpbXAgPSB0YXNrLmltcG9ydGFudFxuICAgICAgICBcbiAgICAgICAgaWYoaW1wPT0ndHJ1ZScpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1RSVUVFRUVFJylcbiAgICAgICAgICAgIGltcG9ydGFudEZvcm0uZGF0YXNldC5pbXBvcnRhbnQ9J3RydWUnXG4gICAgICAgICAgICBpbXBvcnRhbnRGb3JtLmNsYXNzTGlzdC5hZGQoJ2ltcG9ydGFudCcpXG4gICAgICAgICAgICBpbXBvcnRhbnRGb3JtLnRleHRDb250ZW50ID0gJ2ltcG9ydGFudCdcbiAgICAgICAgICAgIGltcG9ydGFudEZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnbm90LWltcG9ydGFudCcpXG4gICAgICAgIH1cblxuICAgICAgICBcblxuXG4gICAgICAgIGNvbnN0IHN1Ym1pdEJ0biA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXQtYnRuJylcbiAgICAgICAgLy8qY2xvbmluZyBub2RlcyB0byByZW1vdmUgYWxsIGV2ZW50IGxpc3RlbmVycyBmcm9tIHN1Ym1pdCBidG5cbiAgICAgICAgY29uc3QgZWRpdFN1Ym1pdEJ0biA9IHN1Ym1pdEJ0bi5jbG9uZU5vZGUodHJ1ZSlcbiAgICAgICAgc3VibWl0QnRuLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKGVkaXRTdWJtaXRCdG4sc3VibWl0QnRuKVxuXG4gICAgICAgIGVkaXRTdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgICAgICBsZXQgdGl0bGUgPSB0aXRsZUZvcm0udmFsdWVcbiAgICAgICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uRm9ybS52YWx1ZVxuICAgICAgICAgICAgbGV0IHByb2plY3QgPSBwcm9qZWN0U2VsZWN0Lm9wdGlvbnNbcHJvamVjdFNlbGVjdC5zZWxlY3RlZEluZGV4XS50ZXh0XG4gICAgICAgICAgICBsZXQgaW1wb3J0YW50ID0gaW1wb3J0YW50Rm9ybS5kYXRhc2V0LmltcG9ydGFudFxuICAgICAgICAgICAgbGV0IGRhdGUgPSBkYXRlRm9ybS52YWx1ZVxuXG4gICAgICAgICAgICBpZihwcm9qZWN0PT0nbm9uZScpe1xuICAgICAgICAgICAgICAgIHByb2plY3Q9JydcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHRpdGxlPT0nJyl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3VubmFtZWQnKVxuICAgICAgICAgICAgICAgIHRpdGxlPSd1bm5hbWVkJysnICcrY2hlY2tVbm5hbWVkKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYocHJvamVjdCE9Jycpe1xuICAgICAgICAgICAgICAgIGFkZFRvUHJvamVjdCh0YXNrLHByb2plY3QpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRhc2sudGl0bGUgPSB0aXRsZVxuICAgICAgICAgICAgdGFzay5kZXNjcmlwdGlvbj1kZXNjcmlwdGlvblxuICAgICAgICAgICAgdGFzay5wcm9qZWN0PXByb2plY3RcbiAgICAgICAgICAgIHRhc2suaW1wb3J0YW50ID0gaW1wb3J0YW50XG4gICAgICAgICAgICB0YXNrLmRhdGU9ZGF0ZVxuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJlZnJlc2goKVxuXG5cblxuICAgICAgICAgICAgY29uc29sZS5sb2codGFzaylcblxuICAgICAgICB9KVxuXG5cblxuICAgIG1vZGFsLmFwcGVuZENoaWxkKFgobW9kYWwpKVxuXG5cblxuICAgIFxuXG4gICAgcmV0dXJuIG1vZGFsXG59XG5cbmZ1bmN0aW9uIHJlZnJlc2goKXtcbiAgICBpZihjdXJyZW50V2luZG93KCk9PSdBbGwnKSBsb2FkQWxsKClcbiAgICBpZihjdXJyZW50V2luZG93KCk9PSdDb21wbGV0ZWQnKSBsb2FkQ29tcGxldGVkKClcbn1cblxuXG5cbi8vIE5PVCBXT1JLSU5HIChBREQgVFJBU0ggRkVBVFVSRSAhICEgISApXG5mdW5jdGlvbiBjaGVja1VubmFtZWQoKXtcbiAgICBsZXQgdW5uPTBcbiAgICBjb25zb2xlLmxvZyhUYXNrLnRhc2tzKVxuICAgIGZvcihsZXQgaSA9IDA7aTxUYXNrLnRhc2tzLmxlbmd0aDtpKyspe1xuICAgICAgICBjb25zb2xlLmxvZyhUYXNrLnRhc2tzW2ldLnRpdGxlKVxuICAgICAgICBjb25zb2xlLmxvZygndW5uOicsdW5uKVxuICAgICAgICBpZihUYXNrLnRhc2tzW2ldLnRpdGxlLnNsaWNlKDAsNyk9PSd1bm5hbWVkJyl7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHVubisrXG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yKGxldCBpID0gMDsgaTxUYXNrLnRyYXNoLmxlbmd0aDtpKyspe1xuICAgICAgICBpZihUYXNrLnRyYXNoW2ldLnRpdGxlLnNsaWNlKDAsNyk9PSd1bm5hbWVkJyl7XG4gICAgICAgICAgICB1bm4rK1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB1bm5cbiAgICBcbn0iLCJpbXBvcnQgeyBQcm9qZWN0LCBUYXNrLCBhZGRUb1Byb2plY3QsIGRlbGV0ZUZyb21Qcm9qZWN0IH0gZnJvbSAnLi9kYXRhLmpzJ1xuaW1wb3J0ICB7ZHJhd1Rhc2tJblRyYXNofSAgZnJvbSAnLi9kcmF3aW5nLmpzJ1xuaW1wb3J0IHtkcmF3QWRkVGFza0VsfSBmcm9tICcuL2RyYXdpbmcuanMnXG5cblxuZnVuY3Rpb24gZHJhd1RyYXNoKCl7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJylcblxuICAgIFxuICAgIFxuICAgIFxuICAgIFxuICAgIGZvcihsZXQgaT0wO2k8VGFzay50cmFzaC5sZW5ndGg7aSsrKXtcbiAgICAgICAgY29uc3QgdGFza0VsID0gZHJhd1Rhc2tJblRyYXNoKFRhc2sudHJhc2hbaV0pXG4gICAgICAgIFxuICAgICAgICBjb250YWluZXIuYXBwZW5kKHRhc2tFbClcblxuICAgIH1cblxuXG5cbiAgICByZXR1cm4gY29udGFpbmVyXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZFRyYXNoKCl7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpblwiKVxuXG4gICAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXYtYmFyXCIpXG4gICAgXG5cbiAgICBmb3IobGV0IGkgPSAwO2k8bmF2QmFyLmNoaWxkcmVuLmxlbmd0aC0yO2krKyl7XG4gICAgICAgIG5hdkJhci5jaGlsZHJlbltpXS5kYXRhc2V0LmlzYWN0aXZlPWZhbHNlXG4gICAgfVxuICAgXG4gICAgdmFyIGFyciA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKCBuYXZCYXIuY2hpbGRyZW4gKVxuICAgIGxldCByZXMgID0gYXJyLmZpbmQoaXRlbSA9PiBpdGVtLmlubmVyVGV4dCA9PSAnVHJhc2gnKTtcbiAgICByZXMuZGF0YXNldC5pc2FjdGl2ZT10cnVlXG4gICAgXG5cblxuICAgIG1haW4udGV4dENvbnRlbnQ9JydcbiAgICBtYWluLmFwcGVuZENoaWxkKGRyYXdUcmFzaCgpKVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBsb2FkQWxsIGZyb20gJy4vYWxsLmpzJ1xuaW1wb3J0IGxvYWRUcmFzaCBmcm9tICcuL3RyYXNoLmpzJ1xuaW1wb3J0IGxvYWRDb21wbGV0ZWQgZnJvbSAnLi9jb21wbGV0ZWQuanMnXG5pbXBvcnQgZ2l0aHViSW1nIGZyb20gJy4vaW1hZ2VzL2dpdGh1YmxvZ28ucG5nJ1xuaW1wb3J0IGlnSW1nIGZyb20gJy4vaW1hZ2VzL2lnbG9nby5wbmcnXG5cblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKVxuXG5jb25zdCBHaXRodWJJbWcgPSBuZXcgSW1hZ2UoKVxuY29uc3QgSWdJbWcgPSBuZXcgSW1hZ2UoKVxuR2l0aHViSW1nLnNyYyA9IGdpdGh1YkltZ1xuSWdJbWcuc3JjID0gaWdJbWdcblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCl7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKVxuICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQ9XCJUbyBkbyBMaXN0XCJcblxuXG5cbiAgICAvL3JlcG9uc2l2ZSBuYXZiYXIvL1xuICAgIGNvbnN0IHJlcG9uc2l2ZU5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgcmVwb25zaXZlTmF2LmNsYXNzTGlzdC5hZGQoJ3Jlc3BvbnNpdmUtbmF2JylcbiAgICAgICAgICAgIGZvcihsZXQgaT0wO2k8MztpKyspe1xuICAgICAgICAgICAgICAgIGNvbnN0IGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICAgICAgICAgICAgICAvL2xpbmUuY2xhc3NMaXN0LmFkZCgnbGluZScpXG4gICAgICAgICAgICAgICAgcmVwb25zaXZlTmF2LmFwcGVuZENoaWxkKGxpbmUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgTmF2QmFyVG9DbG9uZSA9IGNyZWF0ZU5hdkJhcigpXG4gICAgICAgICAgICBjb25zdCBtb2JpbGVOYXYgPSBOYXZCYXJUb0Nsb25lLmNsb25lTm9kZSh0cnVlKVxuICAgICAgICAgICAgbW9iaWxlTmF2LmlkPVwibW9iaWxlLW5hdlwiXG4gICAgICAgICAgICBtb2JpbGVOYXYuY2xhc3NMaXN0LmFkZCgnbW9iaWxlLW5hdicpXG4gICAgICAgICAgICBtb2JpbGVOYXYuY2xhc3NMaXN0LnJlbW92ZShcIm5hdi1iYXJcIilcbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKG1vYmlsZU5hdilcblxuICAgICAgICAgICAgXG5cblxuICAgICAgICAgICAgXG5cblxuXG4gICAgICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQocmVwb25zaXZlTmF2KVxuXG5cblxuICAgIHJldHVybiBoZWFkZXJcbn1cblxuZnVuY3Rpb24gY3JlYXRlTmF2QmFyKCl7XG4gICAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBuYXZCYXIuY2xhc3NMaXN0LmFkZCgnbmF2LWJhcicpXG5cbiAgICAgICAgY29uc3QgbmF2QWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgbmF2QWxsLmNsYXNzTGlzdC5hZGQoJ25hdi1lbGVtZW50JylcbiAgICAgICAgbmF2QWxsLmRhdGFzZXQuaXNhY3RpdmU9ZmFsc2VcbiAgICAgICAgbmF2QmFyLmFwcGVuZENoaWxkKG5hdkFsbClcbiAgICAgICAgICAgIG5hdkFsbC50ZXh0Q29udGVudD0nQWxsJ1xuXG4gICAgICAgIGNvbnN0IG5hdlRvZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgbmF2VG9kYXkuY2xhc3NMaXN0LmFkZCgnbmF2LWVsZW1lbnQnKVxuICAgICAgICBuYXZUb2RheS5kYXRhc2V0LmlzYWN0aXZlPWZhbHNlXG4gICAgICAgIG5hdkJhci5hcHBlbmRDaGlsZChuYXZUb2RheSlcbiAgICAgICAgICAgIG5hdlRvZGF5LnRleHRDb250ZW50PSdUb2RheScgICAgXG5cbiAgICAgICAgY29uc3QgbmF2VGhpc1dlZWsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBuYXZUaGlzV2Vlay5jbGFzc0xpc3QuYWRkKCduYXYtZWxlbWVudCcpXG4gICAgICAgIG5hdlRoaXNXZWVrLmRhdGFzZXQuaXNhY3RpdmU9ZmFsc2VcbiAgICAgICAgbmF2QmFyLmFwcGVuZENoaWxkKG5hdlRoaXNXZWVrKVxuICAgICAgICAgICAgbmF2VGhpc1dlZWsudGV4dENvbnRlbnQ9J1RoaXMgd2VlaydcbiAgICAgICAgICAgIFxuICAgICAgICBjb25zdCBuYXZPdmVyZHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgbmF2T3ZlcmR1ZS5jbGFzc0xpc3QuYWRkKCduYXYtZWxlbWVudCcpXG4gICAgICAgIG5hdk92ZXJkdWUuZGF0YXNldC5pc2FjdGl2ZT1mYWxzZVxuICAgICAgICBuYXZCYXIuYXBwZW5kQ2hpbGQobmF2T3ZlcmR1ZSlcbiAgICAgICAgbmF2T3ZlcmR1ZS50ZXh0Q29udGVudD0nT3ZlcmR1ZSdcblxuICAgICAgICBjb25zdCBuYXZQcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIG5hdlByb2plY3RzLmNsYXNzTGlzdC5hZGQoJ25hdi1lbGVtZW50JylcbiAgICAgICAgbmF2UHJvamVjdHMuZGF0YXNldC5pc2FjdGl2ZT1mYWxzZVxuICAgICAgICBuYXZCYXIuYXBwZW5kQ2hpbGQobmF2UHJvamVjdHMpXG4gICAgICAgIG5hdlByb2plY3RzLnRleHRDb250ZW50PSdQcm9qZWN0cydcblxuICAgICAgICBjb25zdCBuYXZDb21wbGV0ZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBuYXZDb21wbGV0ZWQuY2xhc3NMaXN0LmFkZCgnbmF2LWVsZW1lbnQnKVxuICAgICAgICBuYXZDb21wbGV0ZWQuZGF0YXNldC5pc2FjdGl2ZT1mYWxzZVxuICAgICAgICBuYXZCYXIuYXBwZW5kQ2hpbGQobmF2Q29tcGxldGVkKVxuICAgICAgICBuYXZDb21wbGV0ZWQudGV4dENvbnRlbnQ9J0NvbXBsZXRlZCdcblxuXG4gICAgICAgIGNvbnN0IG5hdlRyYXNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgbmF2VHJhc2guY2xhc3NMaXN0LmFkZCgnbmF2LWVsZW1lbnQnKVxuICAgICAgICBuYXZUcmFzaC5kYXRhc2V0LmlzYWN0aXZlPWZhbHNlXG4gICAgICAgIG5hdkJhci5hcHBlbmRDaGlsZChuYXZUcmFzaClcbiAgICAgICAgbmF2VHJhc2gudGV4dENvbnRlbnQ9J1RyYXNoJ1xuXG4gICAgICAgIFxuXG5cbiAgICAgICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpXG4gICAgICAgIG5hdkJhci5hcHBlbmRDaGlsZChmb290ZXIpXG4gICAgICAgICAgICBjb25zdCBsaW5rcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICBuYXZCYXIuYXBwZW5kQ2hpbGQobGlua3MpXG4gICAgICAgICAgICBsaW5rcy5jbGFzc0xpc3QuYWRkKCdsaW5rcycpXG4gICAgICAgICAgICAgICAgbGlua3MuYXBwZW5kQ2hpbGQoR2l0aHViSW1nKVxuICAgICAgICAgICAgICAgIGxpbmtzLmFwcGVuZENoaWxkKElnSW1nKVxuICAgICAgICAgICAgICAgIEdpdGh1YkltZy5jbGFzc0xpc3QuYWRkKCdnaXRodWItaW1nJylcbiAgICAgICAgICAgICAgICBHaXRodWJJbWcuY2xhc3NMaXN0LmFkZCgnbGluaycpXG4gICAgICAgICAgICAgICAgSWdJbWcuY2xhc3NMaXN0LmFkZCgnaWctaW1nJylcbiAgICAgICAgICAgICAgICBJZ0ltZy5jbGFzc0xpc3QuYWRkKCdsaW5rJylcbiAgICAgICAgICAgICAgICBHaXRodWJJbWcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5vcGVuKFwiaHR0cHM6Ly9naXRodWIuY29tL010dHQ3L3Jlc3RhdXJhbnRwYWdlXCIsXCJfc2VsZlwiKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgSWdJbWcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5vcGVuKFwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9tdHQuanBlZy9cIixcIl9zZWxmXCIpXG4gICAgICAgICAgICAgICAgfSlcblxuXG4gICAgICAgIFxuXG4gICAgICAgICAgICAgICAgLy9hY3Rpb24gbGlzdGVuZXJzXG5cbiAgICAgICAgICAgICAgICBuYXZBbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgICAgICAgICAgICAgIGxvYWRBbGwoKVxuICAgICAgICAgICAgICAgIH0pXG5cblxuICAgICAgICAgICAgICAgIG5hdlRyYXNoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICAgICAgICAgICAgICBsb2FkVHJhc2goKVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICBuYXZDb21wbGV0ZWQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibGxsXCIpXG4gICAgICAgICAgICAgICAgICAgIGxvYWRDb21wbGV0ZWQoKVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgXG5cblxuXG4gICAgcmV0dXJuIG5hdkJhclxufVxuXG5mdW5jdGlvbiBjcmVhdGVNYWluKCl7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKFwibWFpblwiKVxuICAgIG1haW4uaWQ9XCJtYWluXCJcblxuXG4gICAgY29uc3QgcmVwb25zaXZlTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXNwb25zaXZlLW5hdlwiKVxuICAgIGNvbnN0IG1vYmlsZU5hdiA9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb2JpbGUtbmF2XCIpXG4gICAgcmVwb25zaXZlTmF2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJylcbiAgICAgICAgICAgICAgICBtb2JpbGVOYXYuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJylcbiAgICAgICAgICAgICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluXCIpXG4gICAgICAgICAgICAgICAgbWFpbi5jbGFzc0xpc3QudG9nZ2xlKCdzaHJpbmsnKVxuICAgICAgICAgICAgfSlcblxuXG4gICAgcmV0dXJuIG1haW5cblxufVxuXG5cblxuZnVuY3Rpb24gSW5pdGlhbGl6ZVdlYnNpdGUoKXtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTmF2QmFyKCkpXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVNYWluKCkpXG4gICAgXG59XG5cbkluaXRpYWxpemVXZWJzaXRlKClcbmxvYWRBbGwoKVxuXG5cbmNvbnNvbGUubG9nKCd3b3JraW5nIGZpbmUnKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==