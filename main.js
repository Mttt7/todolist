(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(81),a=t.n(r),o=t(645),i=t.n(o)()(a());i.push([n.id,'#content {\n  font-family: "Poppins", sans-serif;\n  height: 100vh;\n  display: grid;\n  grid-template-columns: 1fr 10fr;\n  grid-template-rows: 100px 1fr;\n}\n\n.header {\n  grid-column: 1/3;\n  background-color: rgb(221, 76, 61);\n  padding: 1.7rem;\n  font-size: 2.3rem;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n}\n.header .responsive-nav {\n  margin-left: auto;\n  margin-top: 5px;\n}\n.header .responsive-nav > * {\n  display: block;\n  width: 50px;\n  height: 6px;\n  margin-bottom: 9px;\n  position: relative;\n  background-color: white;\n  border-radius: 6px;\n  z-index: 1;\n  transform-origin: 0 0;\n  transition: 0.4s;\n}\n.header .responsive-nav.is-active span:nth-child(1) {\n  transform: translate(0px, -2px) rotate(45deg);\n}\n.header .responsive-nav.is-active span:nth-child(2) {\n  opacity: 0;\n  transform: translateX(15px);\n}\n.header .responsive-nav.is-active span:nth-child(3) {\n  transform: translate(-3px, 3px) rotate(-45deg);\n}\n\n.nav-bar {\n  background-color: rgb(244, 238, 238);\n  font-size: 1.35rem;\n  grid-column: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  padding: 1rem;\n  height: 100%;\n  width: 160px;\n}\n.nav-bar .nav-element:hover {\n  transform: scale(1.05);\n  cursor: pointer;\n}\n.nav-bar .links .ig-img {\n  width: 30px;\n}\n.nav-bar .links .ig-img:hover {\n  cursor: pointer;\n  transform: scale(1.03);\n}\n.nav-bar .links .github-img {\n  width: 60px;\n}\n.nav-bar .links .github-img:hover {\n  cursor: pointer;\n  transform: scale(1.03);\n}\n\n.main {\n  grid-column: 2/3;\n}\n\n@media only screen and (min-width: 701px) {\n  .responsive-nav {\n    display: none;\n  }\n}\n@media only screen and (max-width: 700px) {\n  .nav-bar {\n    display: none;\n  }\n}\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: "";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}',""]);const s=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,a,o){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);r&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var o={},i=[],s=0;s<n.length;s++){var c=n[s],d=r.base?c[0]+r.base:c[0],l=o[d]||0,p="".concat(d," ").concat(l);o[d]=l+1;var u=t(p),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var f=a(m,r);r.byIndex=s,e.splice(s,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var o=r(n=n||[],a=a||{});return function(n){n=n||[];for(var i=0;i<o.length;i++){var s=t(o[i]);e[s].references--}for(var c=r(n,a),d=0;d<o.length;d++){var l=t(o[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}o=c}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={id:r,exports:{}};return n[r](o,o.exports,t),o.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),a=t.n(r),o=t(569),i=t.n(o),s=t(565),c=t.n(s),d=t(216),l=t.n(d),p=t(589),u=t.n(p),m=t(426),f={};f.styleTagTransform=u(),f.setAttributes=c(),f.insert=i().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=l(),e()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const h=t.p+"3431e8f4c131607d5da5.png",v=t.p+"82b7427cf5bb2f702053.png",g=new Image,b=new Image;g.src=h,b.src=v;const y=document.querySelector("#content");y.appendChild(function(){const n=document.createElement("div");n.classList.add("header"),n.textContent="To do List";const e=document.createElement("div");e.classList.add("responsive-nav");for(let n=0;n<3;n++){const n=document.createElement("span");e.appendChild(n)}return e.addEventListener("click",(function(){this.classList.toggle("is-active")})),n.appendChild(e),n}()),y.appendChild(function(){const n=document.createElement("div");n.classList.add("nav-bar");const e=document.createElement("div");e.classList.add("nav-element"),n.appendChild(e),e.textContent="All";const t=document.createElement("div");t.classList.add("nav-element"),n.appendChild(t),t.textContent="Today";const r=document.createElement("div");r.classList.add("nav-element"),n.appendChild(r),r.textContent="This week";const a=document.createElement("div");a.classList.add("nav-element"),n.appendChild(a),a.textContent="Overdue";const o=document.createElement("div");o.classList.add("nav-element"),n.appendChild(o),o.textContent="Projects";const i=document.createElement("div");i.classList.add("nav-element"),n.appendChild(i),i.textContent="Trash";const s=document.createElement("div");s.classList.add("footer"),n.appendChild(s);const c=document.createElement("div");return n.appendChild(c),c.classList.add("links"),c.appendChild(g),c.appendChild(b),g.classList.add("github-img"),g.classList.add("link"),b.classList.add("ig-img"),b.classList.add("link"),g.addEventListener("click",(()=>{window.open("https://github.com/Mttt7/restaurantpage","_self")})),b.addEventListener("click",(()=>{window.open("https://www.instagram.com/mtt.jpeg/","_self")})),n}()),console.log("working fine")})()})();