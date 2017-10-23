webpackJsonp([5],{

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(20)(
  /* script */
  __webpack_require__(243),
  /* template */
  __webpack_require__(303),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_AppVersion__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_AppVersion___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_AppVersion__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: { AppVersion: __WEBPACK_IMPORTED_MODULE_0__components_AppVersion___default.a },
  methods: {
    setMenuMobileIsOpened: function setMenuMobileIsOpened() {
      this.$store.commit('setMenuMobileIsOpened', !this.$store.state.menuMobileIsOpened);
    }
  }
});

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__package_json__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__package_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__package_json__);
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return { packageJson: __WEBPACK_IMPORTED_MODULE_0__package_json___default.a };
  }
});

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_AppNavigation__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_AppNavigation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_AppNavigation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_AppFooter__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_AppFooter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_AppFooter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_AppFooterSocket__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_AppFooterSocket___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_AppFooterSocket__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_AppTopBar__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_AppTopBar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_AppTopBar__);
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  components: { AppNavigation: __WEBPACK_IMPORTED_MODULE_0__components_AppNavigation___default.a, AppFooter: __WEBPACK_IMPORTED_MODULE_1__components_AppFooter___default.a, AppFooterSocket: __WEBPACK_IMPORTED_MODULE_2__components_AppFooterSocket___default.a, AppTopBar: __WEBPACK_IMPORTED_MODULE_3__components_AppTopBar___default.a }
});

/***/ }),

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(51)(true);
// imports


// module
exports.push([module.i, ".footer[data-v-03acf5ed]{background:#eee}", "", {"version":3,"sources":["/Users/jeanfei/web/projects/demos/contenta_vue_nuxt/components/AppFooter.vue"],"names":[],"mappings":"AACA,yBACE,eAAgB,CACjB","file":"AppFooter.vue","sourcesContent":["\n.footer[data-v-03acf5ed] {\n  background: #EEE\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 252:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(51)(true);
// imports


// module
exports.push([module.i, "@media screen and (max-width:999px){.navbar-end[data-v-694338e6]{padding:.5rem 1rem}.navbar-menu[data-v-694338e6]{display:block;overflow:hidden;max-height:0;padding:0 1rem;-webkit-transition:max-height .2s;-o-transition:max-height .2s;transition:max-height .2s}.navbar-menu.is-active[data-v-694338e6]{max-height:100vh;-webkit-transition:max-height .5s;-o-transition:max-height .5s;transition:max-height .5s}}.nuxt-link-exact-active[data-v-694338e6]{color:#363636}", "", {"version":3,"sources":["/Users/jeanfei/web/projects/demos/contenta_vue_nuxt/components/AppNavigation.vue"],"names":[],"mappings":"AAiDA,oCACA,6BACI,kBAAoB,CACvB,AACD,8BACI,cAAe,AACf,gBAAiB,AACjB,aAAgB,AAChB,eAAmB,AACnB,kCAAmC,AACnC,6BAA8B,AAC9B,yBAA4B,CAC/B,AACD,wCACI,iBAAkB,AAClB,kCAAmC,AACnC,6BAA8B,AAC9B,yBAA4B,CAC/B,CACA,AACD,yCACE,aAAe,CAChB","file":"AppNavigation.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* Create slide animation on mobile */\n@media screen and (max-width: 999px) {\n.navbar-end[data-v-694338e6] {\n    padding:0.5rem 1rem;\n}\n.navbar-menu[data-v-694338e6] {\n    display: block;\n    overflow: hidden;\n    max-height: 0px;\n    padding: 0rem 1rem;\n    -webkit-transition:max-height 0.2s;\n    -o-transition:max-height 0.2s;\n    transition: max-height 0.2s;\n}\n.navbar-menu.is-active[data-v-694338e6] {\n    max-height: 100vh;\n    -webkit-transition:max-height 0.5s;\n    -o-transition:max-height 0.5s;\n    transition: max-height 0.5s;\n}\n}\n.nuxt-link-exact-active[data-v-694338e6] {\n  color: #363636;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(51)(true);
// imports


// module
exports.push([module.i, ".app-top-bar[data-v-6bc75d50]{padding:.5rem 0;background:#f5f5f5}.level-item[data-v-6bc75d50]{padding:0 .75rem}", "", {"version":3,"sources":["/Users/jeanfei/web/projects/demos/contenta_vue_nuxt/components/AppTopBar.vue"],"names":[],"mappings":"AACA,8BACE,gBAAkB,AAClB,kBAAsB,CACvB,AACD,6BACE,gBAAqB,CACtB","file":"AppTopBar.vue","sourcesContent":["\n.app-top-bar[data-v-6bc75d50] {\n  padding: 0.5rem 0;\n  background: whitesmoke\n}\n.level-item[data-v-6bc75d50] {\n  padding: 0rem 0.75rem\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 255:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(51)(true);
// imports


// module
exports.push([module.i, ".socket[data-v-74b12780]{padding:2rem 0;background:#f5f5f5}", "", {"version":3,"sources":["/Users/jeanfei/web/projects/demos/contenta_vue_nuxt/components/AppFooterSocket.vue"],"names":[],"mappings":"AACA,yBACE,eAAe,AACf,kBAAuB,CACxB","file":"AppFooterSocket.vue","sourcesContent":["\n.socket[data-v-74b12780] {\n  padding:2rem 0;\n  background: whitesmoke;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 261:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(306)
}
var Component = __webpack_require__(20)(
  /* script */
  null,
  /* template */
  __webpack_require__(279),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-03acf5ed",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 262:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(310)
}
var Component = __webpack_require__(20)(
  /* script */
  null,
  /* template */
  __webpack_require__(300),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-74b12780",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 263:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(307)
}
var Component = __webpack_require__(20)(
  /* script */
  __webpack_require__(229),
  /* template */
  __webpack_require__(295),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-694338e6",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 264:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(309)
}
var Component = __webpack_require__(20)(
  /* script */
  null,
  /* template */
  __webpack_require__(297),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-6bc75d50",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 265:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(20)(
  /* script */
  __webpack_require__(230),
  /* template */
  __webpack_require__(291),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 279:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('footer', {
    staticClass: "footer"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "columns"
  }, [_c('div', {
    staticClass: "column"
  }, [_vm._v("\n        Umami publication example footer content\n      ")]), _c('div', {
    staticClass: "column"
  }, [_c('ul', [_c('li', [_c('nuxt-link', {
    attrs: {
      "to": "/contact"
    }
  }, [_vm._v("Get in touch")])], 1), _c('li', [_vm._v("About the Umami Drupal Theme")])])])])])])
},staticRenderFns: []}

/***/ }),

/***/ 291:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('small', {
    staticClass: "app-version"
  }, [_vm._v(" " + _vm._s(_vm.packageJson.version) + " ")])])
},staticRenderFns: []}

/***/ }),

/***/ 295:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('nav', {
    staticClass: "navbar"
  }, [_c('div', {
    staticClass: "navbar-brand"
  }, [_c('span', {
    staticClass: "navbar-item"
  }, [_vm._v("\n        UMAMI food magazine\n        "), _c('br'), _c('AppVersion')], 1), _c('div', {
    staticClass: "navbar-burger",
    class: {
      'is-active': this.$store.state.menuMobileIsOpened
    },
    attrs: {
      "data-target": "app-menu"
    },
    on: {
      "click": _vm.setMenuMobileIsOpened
    }
  }, [_c('span'), _c('span'), _c('span')])]), _c('div', {
    staticClass: "navbar-menu",
    class: {
      'is-active': this.$store.state.menuMobileIsOpened
    },
    attrs: {
      "id": "app-menu"
    }
  }, [_c('div', {
    staticClass: "navbar-end"
  }, [_c('nuxt-link', {
    staticClass: "navbar-item",
    attrs: {
      "to": "/"
    }
  }, [_vm._v(" Home ")]), _c('nuxt-link', {
    staticClass: "navbar-item",
    attrs: {
      "to": "/recipes"
    }
  }, [_vm._v(" Recipes ")]), _c('a', {
    staticClass: "navbar-item",
    attrs: {
      "href": "https://github.com/contentacms/contenta_vue_nuxt"
    }
  }, [_vm._v(" Github ")]), _c('a', {
    staticClass: "navbar-item",
    attrs: {
      "href": "http://www.contentacms.org/"
    }
  }, [_vm._v(" ContentaCMS website ")])], 1)])])])
},staticRenderFns: []}

/***/ }),

/***/ 297:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "app-top-bar is-hidden-mobile"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('nav', {
    staticClass: "level"
  }, [_c('div', {
    staticClass: "level-left"
  }, [_c('div', {
    staticClass: "level-item"
  }, [_vm._v("\n          Search\n        ")])]), _c('div', {
    staticClass: "level-right"
  }, [_c('div', {
    staticClass: "level-item"
  }, [_vm._v("Login")])])])])])
}]}

/***/ }),

/***/ 300:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "socket"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('p', [_c('strong', [_vm._v("Umami magazine & Umami publications")]), _vm._v(" is a fictionnal magazine and publisher for illustrative purposes only.\n    ")]), _c('div', [_vm._v("\n      Icons made by\n      "), _c('a', {
    attrs: {
      "href": "http://www.flaticon.com/authors/pixel-perfect",
      "title": "Pixel perfect"
    }
  }, [_vm._v("Pixel perfect")]), _vm._v(" from\n      "), _c('a', {
    attrs: {
      "href": "http://www.flaticon.com",
      "title": "Flaticon"
    }
  }, [_vm._v("www.flaticon.com")]), _vm._v(" is licensed by\n      "), _c('a', {
    attrs: {
      "href": "http://creativecommons.org/licenses/by/3.0/",
      "title": "Creative Commons BY 3.0",
      "target": "_blank"
    }
  }, [_vm._v("CC 3.0 BY")])])])])
}]}

/***/ }),

/***/ 303:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('AppNavigation'), _c('nuxt'), _c('AppFooterSocket')], 1)
},staticRenderFns: []}

/***/ }),

/***/ 306:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(251);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(52)("d3c8c432", content, true);

/***/ }),

/***/ 307:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(252);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(52)("5cf43c5a", content, true);

/***/ }),

/***/ 309:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(254);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(52)("dfae004a", content, true);

/***/ }),

/***/ 310:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(255);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(52)("d7e1576c", content, true);

/***/ }),

/***/ 312:
/***/ (function(module, exports) {

module.exports = {
	"name": "contenta_vue_nuxt",
	"version": "0.8.3",
	"description": "Nuxt.js client for Contenta CMS",
	"author": "yann <yann@yineo.fr>",
	"private": true,
	"dependencies": {
		"axios": "0.16.2",
		"d8-subrequests": "0.0.5",
		"jsonapi-parse": "1.2.0",
		"nuxt": "1.0.0-alpha.5",
		"vue-lazyload": "1.0.6",
		"waterwheel": "1.3.5"
	},
	"scripts": {
		"dev": "node_modules/.bin/nuxt",
		"build": "node_modules/.bin/nuxt build",
		"analyse": "node_modules/.bin/nuxt build --analyse",
		"start": "node_modules/.bin/nuxt start",
		"generate": "node_modules/.bin/nuxt generate",
		"lint": "eslint --ext .js,.vue --ignore-path .gitignore .",
		"test": "karma start test/unit/karma.conf.js",
		"precommit": "npm run test"
	},
	"devDependencies": {
		"babel-eslint": "^7.1.1",
		"cross-env": "^4.0.0",
		"eslint": "^3.15.0",
		"eslint-config-standard": "^6.2.1",
		"eslint-loader": "^1.6.1",
		"eslint-plugin-html": "^2.0.0",
		"eslint-plugin-promise": "^3.4.1",
		"eslint-plugin-standard": "^2.0.1",
		"jasmine-core": "^2.6.4",
		"karma": "^1.7.0",
		"karma-chrome-launcher": "^2.2.0",
		"karma-jasmine": "^1.1.0",
		"karma-webpack": "^2.0.4",
		"push-dir": "^0.4.1"
	}
};

/***/ })

});