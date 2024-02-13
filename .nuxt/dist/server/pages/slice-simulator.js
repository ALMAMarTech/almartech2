exports.ids = [4];
exports.modules = {

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(30);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(10).default
module.exports.__inject__ = function (context) {
  add("55cb6cec", content, true, context)
};

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0666a323_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0666a323_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0666a323_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0666a323_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0666a323_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(9);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/slice-simulator.vue?vue&type=template&id=32796324
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('SliceSimulator', {
    scopedSlots: _vm._u([{
      key: "default",
      fn: function ({
        slices
      }) {
        return [_c('SliceZone', {
          attrs: {
            "slices": slices,
            "components": _vm.components
          }
        })];
      }
    }])
  });
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/slice-simulator.vue?vue&type=template&id=32796324

// EXTERNAL MODULE: external "@slicemachine/adapter-nuxt2/dist/simulator.cjs"
var simulator_cjs_ = __webpack_require__(22);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./slices/TestimonialSlide/index.vue?vue&type=template&id=0666a323&scoped=true
var TestimonialSlidevue_type_template_id_0666a323_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "banner"
  }, [_vm._ssrNode("<img src=\"/path/to/banner.jpg\" alt=\"Banner Image\" data-v-0666a323> <h2 data-v-0666a323>¡Bienvenido a mi sitio web!</h2> <p data-v-0666a323>Descubre más sobre nuestros productos y servicios.</p>")]);
};
var TestimonialSlidevue_type_template_id_0666a323_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./slices/TestimonialSlide/index.vue?vue&type=template&id=0666a323&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./slices/TestimonialSlide/index.vue?vue&type=script&lang=js
/* harmony default export */ var TestimonialSlidevue_type_script_lang_js = ({
  // No se necesitan props para este componente estático
});
// CONCATENATED MODULE: ./slices/TestimonialSlide/index.vue?vue&type=script&lang=js
 /* harmony default export */ var slices_TestimonialSlidevue_type_script_lang_js = (TestimonialSlidevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./slices/TestimonialSlide/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(29)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  slices_TestimonialSlidevue_type_script_lang_js,
  TestimonialSlidevue_type_template_id_0666a323_scoped_true_render,
  TestimonialSlidevue_type_template_id_0666a323_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "0666a323",
  "4bed1be4"
  
)

/* harmony default export */ var TestimonialSlide = (component.exports);
// CONCATENATED MODULE: ./slices/index.js
// This file is generated by Prismic local builder. Update with care!


// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/slice-simulator.vue?vue&type=script&lang=js


/* harmony default export */ var slice_simulatorvue_type_script_lang_js = ({
  components: {
    SliceSimulator: simulator_cjs_["SliceSimulator"]
  },
  data() {
    return {
      components: /* Cannot get final name for export "components" in "./slices/index.js" (known exports: , known reexports: TestimonialSlide) */ undefined
    };
  }
});
// CONCATENATED MODULE: ./pages/slice-simulator.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_slice_simulatorvue_type_script_lang_js = (slice_simulatorvue_type_script_lang_js); 
// CONCATENATED MODULE: ./pages/slice-simulator.vue





/* normalize component */

var slice_simulator_component = Object(componentNormalizer["a" /* default */])(
  pages_slice_simulatorvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "42ba0152"
  
)

/* harmony default export */ var slice_simulator = __webpack_exports__["default"] = (slice_simulator_component.exports);

/***/ })

};;
//# sourceMappingURL=slice-simulator.js.map