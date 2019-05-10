(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/seo/seo.module.ts":
/*!***********************************!*\
  !*** ./src/app/seo/seo.module.ts ***!
  \***********************************/
/*! exports provided: SeoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeoModule", function() { return SeoModule; });
var SeoModule = /** @class */ (function () {
    function SeoModule() {
    }
    return SeoModule;
}());



/***/ }),

/***/ "./src/app/seo/services/seo.service.ts":
/*!*********************************************!*\
  !*** ./src/app/seo/services/seo.service.ts ***!
  \*********************************************/
/*! exports provided: SeoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeoService", function() { return SeoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var SeoService = /** @class */ (function () {
    function SeoService(meta, titleService) {
        this.meta = meta;
        this.titleService = titleService;
    }
    SeoService.prototype.generateTags = function (config) {
        // default values
        config = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ title: 'Luna Platform Title [default]', description: 'Luna Platform Description [default]', image: '' }, config, { slug: 'slug-here' });
        this.titleService.setTitle(config.title + " | Luna Platform");
        this.meta.updateTag({ name: 'description', content: config.description });
        this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
        this.meta.updateTag({ name: 'twitter:site', content: '@propertyExchange' });
        this.meta.updateTag({ name: 'twitter:title', content: config.title + " | Luna Platform" });
        this.meta.updateTag({ name: 'twitter:description', content: config.description });
        this.meta.updateTag({ name: 'twitter:image', content: config.image || config.image });
        this.meta.updateTag({ property: 'og:type', content: 'article' });
        this.meta.updateTag({ property: 'og:site_name', content: 'Luna Platform' });
        this.meta.updateTag({ property: 'og:title', content: config.title + " | Luna Platform" });
        this.meta.updateTag({ property: 'og:description', content: config.description });
        this.meta.updateTag({ property: 'og:image', content: config.image || config.image });
        this.meta.updateTag({ property: 'og:url', content: "" });
    };
    return SeoService;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map