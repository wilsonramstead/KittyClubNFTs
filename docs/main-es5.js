function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _total_collection_total_collection_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./total-collection/total-collection.component */
    "./src/app/total-collection/total-collection.component.ts");
    /* harmony import */


    var _kitty1_kitty1_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./kitty1/kitty1.component */
    "./src/app/kitty1/kitty1.component.ts");
    /* harmony import */


    var _kitty2_kitty2_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./kitty2/kitty2.component */
    "./src/app/kitty2/kitty2.component.ts");
    /* harmony import */


    var _kitty3_kitty3_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./kitty3/kitty3.component */
    "./src/app/kitty3/kitty3.component.ts");
    /* harmony import */


    var _kitty4_kitty4_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./kitty4/kitty4.component */
    "./src/app/kitty4/kitty4.component.ts");
    /* harmony import */


    var _kitty5_kitty5_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./kitty5/kitty5.component */
    "./src/app/kitty5/kitty5.component.ts");
    /* harmony import */


    var _kitty6_kitty6_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./kitty6/kitty6.component */
    "./src/app/kitty6/kitty6.component.ts");
    /* harmony import */


    var _kitty7_kitty7_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./kitty7/kitty7.component */
    "./src/app/kitty7/kitty7.component.ts");
    /* harmony import */


    var _kitty8_kitty8_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./kitty8/kitty8.component */
    "./src/app/kitty8/kitty8.component.ts");
    /* harmony import */


    var _kitty9_kitty9_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./kitty9/kitty9.component */
    "./src/app/kitty9/kitty9.component.ts");
    /* harmony import */


    var _kitty10_kitty10_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./kitty10/kitty10.component */
    "./src/app/kitty10/kitty10.component.ts");
    /* harmony import */


    var _kitty11_kitty11_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./kitty11/kitty11.component */
    "./src/app/kitty11/kitty11.component.ts");
    /* harmony import */


    var _kitty12_kitty12_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./kitty12/kitty12.component */
    "./src/app/kitty12/kitty12.component.ts");

    var routes = [{
      path: 'home',
      component: _total_collection_total_collection_component__WEBPACK_IMPORTED_MODULE_2__["TotalCollectionComponent"]
    }, {
      path: 'nfts',
      children: [// { path: '', pathMatch: 'full', component: ListComponent,},
      {
        path: 'kitty1',
        component: _kitty1_kitty1_component__WEBPACK_IMPORTED_MODULE_3__["Kitty1Component"]
      }, {
        path: 'kitty2',
        component: _kitty2_kitty2_component__WEBPACK_IMPORTED_MODULE_4__["Kitty2Component"]
      }, {
        path: 'kitty3',
        component: _kitty3_kitty3_component__WEBPACK_IMPORTED_MODULE_5__["Kitty3Component"]
      }, {
        path: 'kitty4',
        component: _kitty4_kitty4_component__WEBPACK_IMPORTED_MODULE_6__["Kitty4Component"]
      }, {
        path: 'kitty5',
        component: _kitty5_kitty5_component__WEBPACK_IMPORTED_MODULE_7__["Kitty5Component"]
      }, {
        path: 'kitty6',
        component: _kitty6_kitty6_component__WEBPACK_IMPORTED_MODULE_8__["Kitty6Component"]
      }, {
        path: 'kitty7',
        component: _kitty7_kitty7_component__WEBPACK_IMPORTED_MODULE_9__["Kitty7Component"]
      }, {
        path: 'kitty8',
        component: _kitty8_kitty8_component__WEBPACK_IMPORTED_MODULE_10__["Kitty8Component"]
      }, {
        path: 'kitty9',
        component: _kitty9_kitty9_component__WEBPACK_IMPORTED_MODULE_11__["Kitty9Component"]
      }, {
        path: 'kitty10',
        component: _kitty10_kitty10_component__WEBPACK_IMPORTED_MODULE_12__["Kitty10Component"]
      }, {
        path: 'kitty11',
        component: _kitty11_kitty11_component__WEBPACK_IMPORTED_MODULE_13__["Kitty11Component"]
      }, {
        path: 'kitty12',
        component: _kitty12_kitty12_component__WEBPACK_IMPORTED_MODULE_14__["Kitty12Component"]
      }]
    }, {
      path: '**',
      redirectTo: '/home'
    }];

    var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    });

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/_createClass(function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'public';
    });

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 11,
      vars: 0,
      consts: [[1, "container-fluid", "p-3", "my-3"], [1, "header"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "KittyClub NFT Collection");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "The KittyClub is a collection of 50 unique Kitty NFTs \u2014 unique digital collectibles living on the Polygon blockchain. Join the Kitty Club family today!!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "20% of NFT sales will go towards charities supporting cat adoption and cat care, as well as animal abuse prevention.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: [".container-fluid[_ngcontent-%COMP%] {\n  min-height: 90vh;\n  border-top: 5px solid black;\n  border-bottom: 5px solid black;\n  background: rgba(211, 211, 211, 0.6);\n  overflow: auto;\n  word-wrap: break-word;\n  color: black;\n}\n\n@media screen and (max-width: 560px) {\n  .container-fluid[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aWxzb25yYW1zdGVhZC9EZXNrdG9wL25ld1Byb2plY3RzMjAyMS9raXR0eWNsdWIvcHVibGljL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQ0FBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFO0lBQ0UsZUFBQTtFQ0NGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlkIHtcbiAgbWluLWhlaWdodDogOTB2aDtcbiAgYm9yZGVyLXRvcDogNXB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgYmxhY2s7XG4gIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yOiAjZDNkM2QzLCAkYWxwaGE6IDAuNik7XG4gIG92ZXJmbG93OiBhdXRvO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTYwcHgpIHtcbiAgLmNvbnRhaW5lci1mbHVpZCB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICB9XG59XG4iLCIuY29udGFpbmVyLWZsdWlkIHtcbiAgbWluLWhlaWdodDogOTB2aDtcbiAgYm9yZGVyLXRvcDogNXB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgYmxhY2s7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjExLCAyMTEsIDIxMSwgMC42KTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NjBweCkge1xuICAuY29udGFpbmVyLWZsdWlkIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _kitty1_kitty1_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./kitty1/kitty1.component */
    "./src/app/kitty1/kitty1.component.ts");
    /* harmony import */


    var _total_collection_total_collection_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./total-collection/total-collection.component */
    "./src/app/total-collection/total-collection.component.ts");
    /* harmony import */


    var _kitty2_kitty2_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./kitty2/kitty2.component */
    "./src/app/kitty2/kitty2.component.ts");
    /* harmony import */


    var _kitty3_kitty3_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./kitty3/kitty3.component */
    "./src/app/kitty3/kitty3.component.ts");
    /* harmony import */


    var _kitty4_kitty4_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./kitty4/kitty4.component */
    "./src/app/kitty4/kitty4.component.ts");
    /* harmony import */


    var _kitty5_kitty5_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./kitty5/kitty5.component */
    "./src/app/kitty5/kitty5.component.ts");
    /* harmony import */


    var _kitty6_kitty6_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./kitty6/kitty6.component */
    "./src/app/kitty6/kitty6.component.ts");
    /* harmony import */


    var _kitty7_kitty7_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./kitty7/kitty7.component */
    "./src/app/kitty7/kitty7.component.ts");
    /* harmony import */


    var _kitty8_kitty8_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./kitty8/kitty8.component */
    "./src/app/kitty8/kitty8.component.ts");
    /* harmony import */


    var _kitty9_kitty9_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./kitty9/kitty9.component */
    "./src/app/kitty9/kitty9.component.ts");
    /* harmony import */


    var _kitty10_kitty10_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./kitty10/kitty10.component */
    "./src/app/kitty10/kitty10.component.ts");
    /* harmony import */


    var _kitty11_kitty11_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./kitty11/kitty11.component */
    "./src/app/kitty11/kitty11.component.ts");
    /* harmony import */


    var _kitty12_kitty12_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./kitty12/kitty12.component */
    "./src/app/kitty12/kitty12.component.ts");

    var AppModule = /*#__PURE__*/_createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _kitty1_kitty1_component__WEBPACK_IMPORTED_MODULE_4__["Kitty1Component"], _total_collection_total_collection_component__WEBPACK_IMPORTED_MODULE_5__["TotalCollectionComponent"], _kitty2_kitty2_component__WEBPACK_IMPORTED_MODULE_6__["Kitty2Component"], _kitty3_kitty3_component__WEBPACK_IMPORTED_MODULE_7__["Kitty3Component"], _kitty4_kitty4_component__WEBPACK_IMPORTED_MODULE_8__["Kitty4Component"], _kitty5_kitty5_component__WEBPACK_IMPORTED_MODULE_9__["Kitty5Component"], _kitty6_kitty6_component__WEBPACK_IMPORTED_MODULE_10__["Kitty6Component"], _kitty7_kitty7_component__WEBPACK_IMPORTED_MODULE_11__["Kitty7Component"], _kitty8_kitty8_component__WEBPACK_IMPORTED_MODULE_12__["Kitty8Component"], _kitty9_kitty9_component__WEBPACK_IMPORTED_MODULE_13__["Kitty9Component"], _kitty10_kitty10_component__WEBPACK_IMPORTED_MODULE_14__["Kitty10Component"], _kitty11_kitty11_component__WEBPACK_IMPORTED_MODULE_15__["Kitty11Component"], _kitty12_kitty12_component__WEBPACK_IMPORTED_MODULE_16__["Kitty12Component"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _kitty1_kitty1_component__WEBPACK_IMPORTED_MODULE_4__["Kitty1Component"], _total_collection_total_collection_component__WEBPACK_IMPORTED_MODULE_5__["TotalCollectionComponent"], _kitty2_kitty2_component__WEBPACK_IMPORTED_MODULE_6__["Kitty2Component"], _kitty3_kitty3_component__WEBPACK_IMPORTED_MODULE_7__["Kitty3Component"], _kitty4_kitty4_component__WEBPACK_IMPORTED_MODULE_8__["Kitty4Component"], _kitty5_kitty5_component__WEBPACK_IMPORTED_MODULE_9__["Kitty5Component"], _kitty6_kitty6_component__WEBPACK_IMPORTED_MODULE_10__["Kitty6Component"], _kitty7_kitty7_component__WEBPACK_IMPORTED_MODULE_11__["Kitty7Component"], _kitty8_kitty8_component__WEBPACK_IMPORTED_MODULE_12__["Kitty8Component"], _kitty9_kitty9_component__WEBPACK_IMPORTED_MODULE_13__["Kitty9Component"], _kitty10_kitty10_component__WEBPACK_IMPORTED_MODULE_14__["Kitty10Component"], _kitty11_kitty11_component__WEBPACK_IMPORTED_MODULE_15__["Kitty11Component"], _kitty12_kitty12_component__WEBPACK_IMPORTED_MODULE_16__["Kitty12Component"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/kitty1/kitty1.component.ts":
  /*!********************************************!*\
    !*** ./src/app/kitty1/kitty1.component.ts ***!
    \********************************************/

  /*! exports provided: Kitty1Component */

  /***/
  function srcAppKitty1Kitty1ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Kitty1Component", function () {
      return Kitty1Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/home"];
    };

    var Kitty1Component = /*#__PURE__*/function () {
      function Kitty1Component() {
        _classCallCheck(this, Kitty1Component);
      }

      _createClass(Kitty1Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Kitty1Component;
    }();

    Kitty1Component.ɵfac = function Kitty1Component_Factory(t) {
      return new (t || Kitty1Component)();
    };

    Kitty1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Kitty1Component,
      selectors: [["app-kitty1"]],
      decls: 31,
      vars: 2,
      consts: [[1, "btn", "btn-success", 3, "routerLink"], [1, "container"], [1, "left"], ["src", "https://lh3.googleusercontent.com/2Henk2N4t-6VI3so2I7AfiEnW_YmeJ0O4vIG6joHIaqY6CECPLUKyNheXgSzt2aYlTAbKPhfotninyg_FAbmSGXsblBiKFdzG3f15470vbvLqYZPXvzdEX2mOuSINA0_wvDr_l1EJQ=w2400", "alt", "Kitty1 NFT", 1, "nftImage"], [1, "right"], ["href", "https://polygonscan.com/address/0x2953399124f0cbb46d2cbacd8a89cf0599974963"], ["target", "_blank", "href", "https://lh3.googleusercontent.com/2Henk2N4t-6VI3so2I7AfiEnW_YmeJ0O4vIG6joHIaqY6CECPLUKyNheXgSzt2aYlTAbKPhfotninyg_FAbmSGXsblBiKFdzG3f15470vbvLqYZPXvzdEX2mOuSINA0_wvDr_l1EJQ=w2400"], ["target", "_blank", "href", "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/80366395629522486436785199915095687810879187654138836265477219824162838675457", 1, "btn", "btn-primary"]],
      template: function Kitty1Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Kitty #Buco");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Contract Address: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "0x2953399124f0cbb46d2cbacd8a89cf0599974963");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Token ID:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " 80366395629522486436785199915095687810879187654138836265477219824162838675457");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Blockchain:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Polygon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Direct NFT Image Link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "View in OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: [".nftImage[_ngcontent-%COMP%] {\n  border: 5px solid black;\n  padding: 10px;\n  background: rgba(201, 201, 201, 0.5);\n}\n\n.left[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  word-wrap: break-word;\n}\n\n@media screen and (max-width: 560px) {\n  .nftImage[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 10px;\n  }\n\n  .left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%] {\n    height: 100%;\n    max-width: 90%;\n    display: block;\n  }\n}\n\n@media screen and (min-width: 561px) {\n  .nftImage[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n\n  .left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%] {\n    height: 100%;\n    max-width: 50%;\n    display: inline-block;\n    vertical-align: top;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aWxzb25yYW1zdGVhZC9EZXNrdG9wL25ld1Byb2plY3RzMjAyMS9raXR0eWNsdWIvcHVibGljL3NyYy9hcHAva2l0dHkxL2tpdHR5MS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAva2l0dHkxL2tpdHR5MS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLG9DQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxrQkFBQTtBQ0VGOztBREFBO0VBQ0UscUJBQUE7QUNHRjs7QURBQTtFQUNFO0lBQ0UsV0FBQTtJQUNBLGdCQUFBO0VDR0Y7O0VEREE7O0lBRUUsWUFBQTtJQUNBLGNBQUE7SUFDQSxjQUFBO0VDSUY7QUFDRjs7QURGQTtFQUNFO0lBQ0UsVUFBQTtFQ0lGOztFREZBOztJQUVFLFlBQUE7SUFDQSxjQUFBO0lBQ0EscUJBQUE7SUFDQSxtQkFBQTtFQ0tGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9raXR0eTEva2l0dHkxLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5mdEltYWdlIHtcbiAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yOiAjYzljOWM5LCAkYWxwaGE6IDAuNSk7XG59XG4ubGVmdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5yaWdodCBwIHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NjBweCkge1xuICAubmZ0SW1hZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbiAgLmxlZnQsXG4gIC5yaWdodCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC13aWR0aDogOTAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NjFweCkge1xuICAubmZ0SW1hZ2Uge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbiAgLmxlZnQsXG4gIC5yaWdodCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC13aWR0aDogNTAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB9XG59XG4iLCIubmZ0SW1hZ2Uge1xuICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyMDEsIDIwMSwgMjAxLCAwLjUpO1xufVxuXG4ubGVmdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnJpZ2h0IHAge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2MHB4KSB7XG4gIC5uZnRJbWFnZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuXG4gIC5sZWZ0LFxuLnJpZ2h0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA5MCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU2MXB4KSB7XG4gIC5uZnRJbWFnZSB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxuXG4gIC5sZWZ0LFxuLnJpZ2h0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA1MCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Kitty1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-kitty1',
          templateUrl: './kitty1.component.html',
          styleUrls: ['./kitty1.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/kitty10/kitty10.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/kitty10/kitty10.component.ts ***!
    \**********************************************/

  /*! exports provided: Kitty10Component */

  /***/
  function srcAppKitty10Kitty10ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Kitty10Component", function () {
      return Kitty10Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/home"];
    };

    var Kitty10Component = /*#__PURE__*/function () {
      function Kitty10Component() {
        _classCallCheck(this, Kitty10Component);
      }

      _createClass(Kitty10Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Kitty10Component;
    }();

    Kitty10Component.ɵfac = function Kitty10Component_Factory(t) {
      return new (t || Kitty10Component)();
    };

    Kitty10Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Kitty10Component,
      selectors: [["app-kitty10"]],
      decls: 31,
      vars: 2,
      consts: [[1, "btn", "btn-success", 3, "routerLink"], [1, "container"], [1, "left"], ["src", "https://lh3.googleusercontent.com/VzzwueCkjCwxdSMG5eaR579MzT40nWZ_yAIpsrlo58HaV23-C9bJh-NV5_esngtai3uUB9DGKPLi0t-LIJA4QZJzrr-2y0iYKB1c1NRcA3QTNZ7ENEYIbahOLUyYcffZjpMvPQ80nA=w2400", "alt", "Kitty9 NFT", 1, "nftImage"], [1, "right"], ["href", "https://polygonscan.com/address/0x2953399124f0cbb46d2cbacd8a89cf0599974963"], ["target", "_blank", "href", "https://lh3.googleusercontent.com/VzzwueCkjCwxdSMG5eaR579MzT40nWZ_yAIpsrlo58HaV23-C9bJh-NV5_esngtai3uUB9DGKPLi0t-LIJA4QZJzrr-2y0iYKB1c1NRcA3QTNZ7ENEYIbahOLUyYcffZjpMvPQ80nA=w2400"], ["target", "_blank", "href", "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/80366395629522486436785199915095687810879187654138836265477219834058443325441", 1, "btn", "btn-primary"]],
      template: function Kitty10Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Kitty #9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Contract Address: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "0x2953399124f0cbb46d2cbacd8a89cf0599974963");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Token ID:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " 80366395629522486436785199915095687810879187654138836265477219834058443325441");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Blockchain:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Polygon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Direct NFT Image Link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "View in OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: [".nftImage[_ngcontent-%COMP%] {\n  border: 5px solid black;\n  padding: 10px;\n  background: rgba(201, 201, 201, 0.5);\n}\n\n.left[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  word-wrap: break-word;\n}\n\n@media screen and (max-width: 560px) {\n  .nftImage[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 10px;\n  }\n\n  .left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%] {\n    height: 100%;\n    max-width: 90%;\n    display: block;\n  }\n}\n\n@media screen and (min-width: 561px) {\n  .nftImage[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n\n  .left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%] {\n    height: 100%;\n    max-width: 50%;\n    display: inline-block;\n    vertical-align: top;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aWxzb25yYW1zdGVhZC9EZXNrdG9wL25ld1Byb2plY3RzMjAyMS9raXR0eWNsdWIvcHVibGljL3NyYy9hcHAva2l0dHkxMC9raXR0eTEwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9raXR0eTEwL2tpdHR5MTAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxvQ0FBQTtBQ0NGOztBRENBO0VBQ0Usa0JBQUE7QUNFRjs7QURBQTtFQUNFLHFCQUFBO0FDR0Y7O0FEQUE7RUFDRTtJQUNFLFdBQUE7SUFDQSxnQkFBQTtFQ0dGOztFRERBOztJQUVFLFlBQUE7SUFDQSxjQUFBO0lBQ0EsY0FBQTtFQ0lGO0FBQ0Y7O0FERkE7RUFDRTtJQUNFLFVBQUE7RUNJRjs7RURGQTs7SUFFRSxZQUFBO0lBQ0EsY0FBQTtJQUNBLHFCQUFBO0lBQ0EsbUJBQUE7RUNLRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAva2l0dHkxMC9raXR0eTEwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5mdEltYWdlIHtcbiAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yOiAjYzljOWM5LCAkYWxwaGE6IDAuNSk7XG59XG4ubGVmdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5yaWdodCBwIHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NjBweCkge1xuICAubmZ0SW1hZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbiAgLmxlZnQsXG4gIC5yaWdodCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC13aWR0aDogOTAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NjFweCkge1xuICAubmZ0SW1hZ2Uge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbiAgLmxlZnQsXG4gIC5yaWdodCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC13aWR0aDogNTAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB9XG59XG4iLCIubmZ0SW1hZ2Uge1xuICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyMDEsIDIwMSwgMjAxLCAwLjUpO1xufVxuXG4ubGVmdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnJpZ2h0IHAge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2MHB4KSB7XG4gIC5uZnRJbWFnZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuXG4gIC5sZWZ0LFxuLnJpZ2h0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA5MCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU2MXB4KSB7XG4gIC5uZnRJbWFnZSB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxuXG4gIC5sZWZ0LFxuLnJpZ2h0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA1MCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Kitty10Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-kitty10',
          templateUrl: './kitty10.component.html',
          styleUrls: ['./kitty10.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/kitty11/kitty11.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/kitty11/kitty11.component.ts ***!
    \**********************************************/

  /*! exports provided: Kitty11Component */

  /***/
  function srcAppKitty11Kitty11ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Kitty11Component", function () {
      return Kitty11Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/home"];
    };

    var Kitty11Component = /*#__PURE__*/function () {
      function Kitty11Component() {
        _classCallCheck(this, Kitty11Component);
      }

      _createClass(Kitty11Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Kitty11Component;
    }();

    Kitty11Component.ɵfac = function Kitty11Component_Factory(t) {
      return new (t || Kitty11Component)();
    };

    Kitty11Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Kitty11Component,
      selectors: [["app-kitty11"]],
      decls: 31,
      vars: 2,
      consts: [[1, "btn", "btn-success", 3, "routerLink"], [1, "container"], [1, "left"], ["src", "https://lh3.googleusercontent.com/TsT7IWS255CeXV0-JLVpyRN4f6O1GtuBxxgZ_rArkdZ6tIMJMK4lX0JwCZZrfJ16IgvBQlixE_DFtlNQeA9RDMjqma5qCzyF8ezuo7utk96amqdm0X9S7j7YcbjXpgAAtkaQdJ7LcA=w2400", "alt", "Kitty10 NFT", 1, "nftImage"], [1, "right"], ["href", "https://polygonscan.com/address/0x2953399124f0cbb46d2cbacd8a89cf0599974963"], ["target", "_blank", "href", "https://lh3.googleusercontent.com/TsT7IWS255CeXV0-JLVpyRN4f6O1GtuBxxgZ_rArkdZ6tIMJMK4lX0JwCZZrfJ16IgvBQlixE_DFtlNQeA9RDMjqma5qCzyF8ezuo7utk96amqdm0X9S7j7YcbjXpgAAtkaQdJ7LcA=w2400"], ["target", "_blank", "href", "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/80366395629522486436785199915095687810879187654138836265477219835157954953217", 1, "btn", "btn-primary"]],
      template: function Kitty11Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Kitty #10");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Contract Address: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "0x2953399124f0cbb46d2cbacd8a89cf0599974963");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Token ID:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " 80366395629522486436785199915095687810879187654138836265477219835157954953217");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Blockchain:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Polygon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Direct NFT Image Link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "View in OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: [".nftImage[_ngcontent-%COMP%] {\n  border: 5px solid black;\n  padding: 10px;\n  background: rgba(201, 201, 201, 0.5);\n}\n\n.left[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  word-wrap: break-word;\n}\n\n@media screen and (max-width: 560px) {\n  .nftImage[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 10px;\n  }\n\n  .left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%] {\n    height: 100%;\n    max-width: 90%;\n    display: block;\n  }\n}\n\n@media screen and (min-width: 561px) {\n  .nftImage[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n\n  .left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%] {\n    height: 100%;\n    max-width: 50%;\n    display: inline-block;\n    vertical-align: top;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aWxzb25yYW1zdGVhZC9EZXNrdG9wL25ld1Byb2plY3RzMjAyMS9raXR0eWNsdWIvcHVibGljL3NyYy9hcHAva2l0dHkxMS9raXR0eTExLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9raXR0eTExL2tpdHR5MTEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxvQ0FBQTtBQ0NGOztBRENBO0VBQ0Usa0JBQUE7QUNFRjs7QURBQTtFQUNFLHFCQUFBO0FDR0Y7O0FEQUE7RUFDRTtJQUNFLFdBQUE7SUFDQSxnQkFBQTtFQ0dGOztFRERBOztJQUVFLFlBQUE7SUFDQSxjQUFBO0lBQ0EsY0FBQTtFQ0lGO0FBQ0Y7O0FERkE7RUFDRTtJQUNFLFVBQUE7RUNJRjs7RURGQTs7SUFFRSxZQUFBO0lBQ0EsY0FBQTtJQUNBLHFCQUFBO0lBQ0EsbUJBQUE7RUNLRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAva2l0dHkxMS9raXR0eTExLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5mdEltYWdlIHtcbiAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yOiAjYzljOWM5LCAkYWxwaGE6IDAuNSk7XG59XG4ubGVmdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5yaWdodCBwIHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NjBweCkge1xuICAubmZ0SW1hZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbiAgLmxlZnQsXG4gIC5yaWdodCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC13aWR0aDogOTAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NjFweCkge1xuICAubmZ0SW1hZ2Uge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbiAgLmxlZnQsXG4gIC5yaWdodCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC13aWR0aDogNTAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB9XG59XG4iLCIubmZ0SW1hZ2Uge1xuICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyMDEsIDIwMSwgMjAxLCAwLjUpO1xufVxuXG4ubGVmdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnJpZ2h0IHAge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2MHB4KSB7XG4gIC5uZnRJbWFnZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuXG4gIC5sZWZ0LFxuLnJpZ2h0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA5MCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU2MXB4KSB7XG4gIC5uZnRJbWFnZSB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxuXG4gIC5sZWZ0LFxuLnJpZ2h0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA1MCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Kitty11Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-kitty11',
          templateUrl: './kitty11.component.html',
          styleUrls: ['./kitty11.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/kitty12/kitty12.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/kitty12/kitty12.component.ts ***!
    \**********************************************/

  /*! exports provided: Kitty12Component */

  /***/
  function srcAppKitty12Kitty12ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Kitty12Component", function () {
      return Kitty12Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/home"];
    };

    var Kitty12Component = /*#__PURE__*/function () {
      function Kitty12Component() {
        _classCallCheck(this, Kitty12Component);
      }

      _createClass(Kitty12Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Kitty12Component;
    }();

    Kitty12Component.ɵfac = function Kitty12Component_Factory(t) {
      return new (t || Kitty12Component)();
    };

    Kitty12Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Kitty12Component,
      selectors: [["app-kitty12"]],
      decls: 31,
      vars: 2,
      consts: [[1, "btn", "btn-success", 3, "routerLink"], [1, "container"], [1, "left"], ["src", "https://lh3.googleusercontent.com/N1HvyMZLbrFPC3MLLzLD5Xwaw9ozuZrhb6XyAuCK6UiolKyBltjGMjdOLzYtPKZDShKVEzZpIIhWdhVhXZMedEvV3-z5YtMsgQtRT9sVCG_EbEbtB-FFRLp-m1u4GJW92joBoIfUcA=w2400", "alt", "Kitty10 NFT", 1, "nftImage"], [1, "right"], ["href", "https://polygonscan.com/address/0x2953399124f0cbb46d2cbacd8a89cf0599974963"], ["target", "_blank", "href", "https://lh3.googleusercontent.com/N1HvyMZLbrFPC3MLLzLD5Xwaw9ozuZrhb6XyAuCK6UiolKyBltjGMjdOLzYtPKZDShKVEzZpIIhWdhVhXZMedEvV3-z5YtMsgQtRT9sVCG_EbEbtB-FFRLp-m1u4GJW92joBoIfUcA=w2400"], ["target", "_blank", "href", "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/80366395629522486436785199915095687810879187654138836265477219836257466580993", 1, "btn", "btn-primary"]],
      template: function Kitty12Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Kitty #11");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Contract Address: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "0x2953399124f0cbb46d2cbacd8a89cf0599974963");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Token ID:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " 80366395629522486436785199915095687810879187654138836265477219836257466580993");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Blockchain:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Polygon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Direct NFT Image Link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "View in OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: [".nftImage[_ngcontent-%COMP%] {\n  border: 5px solid black;\n  padding: 10px;\n  background: rgba(201, 201, 201, 0.5);\n}\n\n.left[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  word-wrap: break-word;\n}\n\n@media screen and (max-width: 560px) {\n  .nftImage[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 10px;\n  }\n\n  .left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%] {\n    height: 100%;\n    max-width: 90%;\n    display: block;\n  }\n}\n\n@media screen and (min-width: 561px) {\n  .nftImage[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n\n  .left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%] {\n    height: 100%;\n    max-width: 50%;\n    display: inline-block;\n    vertical-align: top;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aWxzb25yYW1zdGVhZC9EZXNrdG9wL25ld1Byb2plY3RzMjAyMS9raXR0eWNsdWIvcHVibGljL3NyYy9hcHAva2l0dHkxMi9raXR0eTEyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9raXR0eTEyL2tpdHR5MTIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxvQ0FBQTtBQ0NGOztBRENBO0VBQ0Usa0JBQUE7QUNFRjs7QURBQTtFQUNFLHFCQUFBO0FDR0Y7O0FEQUE7RUFDRTtJQUNFLFdBQUE7SUFDQSxnQkFBQTtFQ0dGOztFRERBOztJQUVFLFlBQUE7SUFDQSxjQUFBO0lBQ0EsY0FBQTtFQ0lGO0FBQ0Y7O0FERkE7RUFDRTtJQUNFLFVBQUE7RUNJRjs7RURGQTs7SUFFRSxZQUFBO0lBQ0EsY0FBQTtJQUNBLHFCQUFBO0lBQ0EsbUJBQUE7RUNLRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAva2l0dHkxMi9raXR0eTEyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5mdEltYWdlIHtcbiAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yOiAjYzljOWM5LCAkYWxwaGE6IDAuNSk7XG59XG4ubGVmdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5yaWdodCBwIHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NjBweCkge1xuICAubmZ0SW1hZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbiAgLmxlZnQsXG4gIC5yaWdodCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC13aWR0aDogOTAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NjFweCkge1xuICAubmZ0SW1hZ2Uge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbiAgLmxlZnQsXG4gIC5yaWdodCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC13aWR0aDogNTAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB9XG59XG4iLCIubmZ0SW1hZ2Uge1xuICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyMDEsIDIwMSwgMjAxLCAwLjUpO1xufVxuXG4ubGVmdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnJpZ2h0IHAge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2MHB4KSB7XG4gIC5uZnRJbWFnZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuXG4gIC5sZWZ0LFxuLnJpZ2h0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA5MCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU2MXB4KSB7XG4gIC5uZnRJbWFnZSB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxuXG4gIC5sZWZ0LFxuLnJpZ2h0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA1MCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Kitty12Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-kitty12',
          templateUrl: './kitty12.component.html',
          styleUrls: ['./kitty12.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/kitty2/kitty2.component.ts":
  /*!********************************************!*\
    !*** ./src/app/kitty2/kitty2.component.ts ***!
    \********************************************/

  /*! exports provided: Kitty2Component */

  /***/
  function srcAppKitty2Kitty2ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Kitty2Component", function () {
      return Kitty2Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/home"];
    };

    var Kitty2Component = /*#__PURE__*/function () {
      function Kitty2Component() {
        _classCallCheck(this, Kitty2Component);
      }

      _createClass(Kitty2Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Kitty2Component;
    }();

    Kitty2Component.ɵfac = function Kitty2Component_Factory(t) {
      return new (t || Kitty2Component)();
    };

    Kitty2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Kitty2Component,
      selectors: [["app-kitty2"]],
      decls: 31,
      vars: 2,
      consts: [[1, "btn", "btn-success", 3, "routerLink"], [1, "container"], [1, "left"], ["src", "https://lh3.googleusercontent.com/pw/AM-JKLUqsVsNcBtzOzrOrS9sG6u4uEJGeSR3OXkjIHCQFDFPQeGUFQNtlHhkeGnbRxRhk4f-cJc4LxKVKG6unDs7o531wrRColEJTt_n8_qP4sBW6pNQQaTTGCLA3QNZKQTt8x80R1xrYTylxK_3HKJpHCAO=w1770-h1772-no?authuser=0", "alt", "Kitty1 NFT", 1, "nftImage"], [1, "right"], ["href", "https://polygonscan.com/address/0x2953399124f0cbb46d2cbacd8a89cf0599974963"], ["target", "_blank", "href", "https://lh3.googleusercontent.com/pw/AM-JKLUqsVsNcBtzOzrOrS9sG6u4uEJGeSR3OXkjIHCQFDFPQeGUFQNtlHhkeGnbRxRhk4f-cJc4LxKVKG6unDs7o531wrRColEJTt_n8_qP4sBW6pNQQaTTGCLA3QNZKQTt8x80R1xrYTylxK_3HKJpHCAO=w1770-h1772-no?authuser=0"], ["target", "_blank", "href", "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/80366395629522486436785199915095687810879187654138836265477219825262350303233", 1, "btn", "btn-primary"]],
      template: function Kitty2Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Kitty #1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Contract Address: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "0x2953399124f0cbb46d2cbacd8a89cf0599974963");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Token ID:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " 80366395629522486436785199915095687810879187654138836265477219825262350303233");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Blockchain:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Polygon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Direct NFT Image Link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "View in OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: [".nftImage[_ngcontent-%COMP%] {\n  border: 5px solid black;\n  padding: 10px;\n  background: rgba(201, 201, 201, 0.5);\n}\n\n.left[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  word-wrap: break-word;\n}\n\n@media screen and (max-width: 560px) {\n  .nftImage[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 10px;\n  }\n\n  .left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%] {\n    height: 100%;\n    max-width: 90%;\n    display: block;\n  }\n}\n\n@media screen and (min-width: 561px) {\n  .nftImage[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n\n  .left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%] {\n    height: 100%;\n    max-width: 50%;\n    display: inline-block;\n    vertical-align: top;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aWxzb25yYW1zdGVhZC9EZXNrdG9wL25ld1Byb2plY3RzMjAyMS9raXR0eWNsdWIvcHVibGljL3NyYy9hcHAva2l0dHkyL2tpdHR5Mi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAva2l0dHkyL2tpdHR5Mi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLG9DQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxrQkFBQTtBQ0VGOztBREFBO0VBQ0UscUJBQUE7QUNHRjs7QURBQTtFQUNFO0lBQ0UsV0FBQTtJQUNBLGdCQUFBO0VDR0Y7O0VEREE7O0lBRUUsWUFBQTtJQUNBLGNBQUE7SUFDQSxjQUFBO0VDSUY7QUFDRjs7QURGQTtFQUNFO0lBQ0UsVUFBQTtFQ0lGOztFREZBOztJQUVFLFlBQUE7SUFDQSxjQUFBO0lBQ0EscUJBQUE7SUFDQSxtQkFBQTtFQ0tGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9raXR0eTIva2l0dHkyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5mdEltYWdlIHtcbiAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yOiAjYzljOWM5LCAkYWxwaGE6IDAuNSk7XG59XG4ubGVmdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5yaWdodCBwIHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NjBweCkge1xuICAubmZ0SW1hZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbiAgLmxlZnQsXG4gIC5yaWdodCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC13aWR0aDogOTAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NjFweCkge1xuICAubmZ0SW1hZ2Uge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbiAgLmxlZnQsXG4gIC5yaWdodCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC13aWR0aDogNTAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB9XG59XG4iLCIubmZ0SW1hZ2Uge1xuICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyMDEsIDIwMSwgMjAxLCAwLjUpO1xufVxuXG4ubGVmdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnJpZ2h0IHAge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2MHB4KSB7XG4gIC5uZnRJbWFnZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuXG4gIC5sZWZ0LFxuLnJpZ2h0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA5MCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU2MXB4KSB7XG4gIC5uZnRJbWFnZSB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxuXG4gIC5sZWZ0LFxuLnJpZ2h0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA1MCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Kitty2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-kitty2',
          templateUrl: './kitty2.component.html',
          styleUrls: ['./kitty2.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/kitty3/kitty3.component.ts":
  /*!********************************************!*\
    !*** ./src/app/kitty3/kitty3.component.ts ***!
    \********************************************/

  /*! exports provided: Kitty3Component */

  /***/
  function srcAppKitty3Kitty3ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Kitty3Component", function () {
      return Kitty3Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/home"];
    };

    var Kitty3Component = /*#__PURE__*/function () {
      function Kitty3Component() {
        _classCallCheck(this, Kitty3Component);
      }

      _createClass(Kitty3Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Kitty3Component;
    }();

    Kitty3Component.ɵfac = function Kitty3Component_Factory(t) {
      return new (t || Kitty3Component)();
    };

    Kitty3Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Kitty3Component,
      selectors: [["app-kitty3"]],
      decls: 31,
      vars: 2,
      consts: [[1, "btn", "btn-success", 3, "routerLink"], [1, "container"], [1, "left"], ["src", "https://lh3.googleusercontent.com/McL0a7Igd77NgRxMFtdqgzRoZH97tKrQ7_YEkwiCRqlvA5QwHhhmrd98UkNHDaPuye00AuTeO1_ovt0HXvuanXjmBXUF28IgfR9aDkCId17O94eQLUfYGdAR1be7wEwnIkEu9Bbt3A=w2400", "alt", "Kitty2 NFT", 1, "nftImage"], [1, "right"], ["href", "https://polygonscan.com/address/0x2953399124f0cbb46d2cbacd8a89cf0599974963"], ["target", "_blank", "href", "https://lh3.googleusercontent.com/McL0a7Igd77NgRxMFtdqgzRoZH97tKrQ7_YEkwiCRqlvA5QwHhhmrd98UkNHDaPuye00AuTeO1_ovt0HXvuanXjmBXUF28IgfR9aDkCId17O94eQLUfYGdAR1be7wEwnIkEu9Bbt3A=w2400"], ["target", "_blank", "href", "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/80366395629522486436785199915095687810879187654138836265477219826361861931009", 1, "btn", "btn-primary"]],
      template: function Kitty3Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Kitty #2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Contract Address: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "0x2953399124f0cbb46d2cbacd8a89cf0599974963");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Token ID:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " 80366395629522486436785199915095687810879187654138836265477219826361861931009");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Blockchain:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Polygon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Direct NFT Image Link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "View in OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: [".nftImage[_ngcontent-%COMP%] {\n  border: 5px solid black;\n  padding: 10px;\n  background: rgba(201, 201, 201, 0.5);\n}\n\n.left[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  word-wrap: break-word;\n}\n\n@media screen and (max-width: 560px) {\n  .nftImage[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 10px;\n  }\n\n  .left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%] {\n    height: 100%;\n    max-width: 90%;\n    display: block;\n  }\n}\n\n@media screen and (min-width: 561px) {\n  .nftImage[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n\n  .left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%] {\n    height: 100%;\n    max-width: 50%;\n    display: inline-block;\n    vertical-align: top;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aWxzb25yYW1zdGVhZC9EZXNrdG9wL25ld1Byb2plY3RzMjAyMS9raXR0eWNsdWIvcHVibGljL3NyYy9hcHAva2l0dHkzL2tpdHR5My5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAva2l0dHkzL2tpdHR5My5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLG9DQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxrQkFBQTtBQ0VGOztBREFBO0VBQ0UscUJBQUE7QUNHRjs7QURBQTtFQUNFO0lBQ0UsV0FBQTtJQUNBLGdCQUFBO0VDR0Y7O0VEREE7O0lBRUUsWUFBQTtJQUNBLGNBQUE7SUFDQSxjQUFBO0VDSUY7QUFDRjs7QURGQTtFQUNFO0lBQ0UsVUFBQTtFQ0lGOztFREZBOztJQUVFLFlBQUE7SUFDQSxjQUFBO0lBQ0EscUJBQUE7SUFDQSxtQkFBQTtFQ0tGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9raXR0eTMva2l0dHkzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5mdEltYWdlIHtcbiAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yOiAjYzljOWM5LCAkYWxwaGE6IDAuNSk7XG59XG4ubGVmdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5yaWdodCBwIHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NjBweCkge1xuICAubmZ0SW1hZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbiAgLmxlZnQsXG4gIC5yaWdodCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC13aWR0aDogOTAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NjFweCkge1xuICAubmZ0SW1hZ2Uge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbiAgLmxlZnQsXG4gIC5yaWdodCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC13aWR0aDogNTAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB9XG59XG4iLCIubmZ0SW1hZ2Uge1xuICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyMDEsIDIwMSwgMjAxLCAwLjUpO1xufVxuXG4ubGVmdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnJpZ2h0IHAge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2MHB4KSB7XG4gIC5uZnRJbWFnZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuXG4gIC5sZWZ0LFxuLnJpZ2h0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA5MCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU2MXB4KSB7XG4gIC5uZnRJbWFnZSB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxuXG4gIC5sZWZ0LFxuLnJpZ2h0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA1MCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Kitty3Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-kitty3',
          templateUrl: './kitty3.component.html',
          styleUrls: ['./kitty3.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/kitty4/kitty4.component.ts":
  /*!********************************************!*\
    !*** ./src/app/kitty4/kitty4.component.ts ***!
    \********************************************/

  /*! exports provided: Kitty4Component */

  /***/
  function srcAppKitty4Kitty4ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Kitty4Component", function () {
      return Kitty4Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/home"];
    };

    var Kitty4Component = /*#__PURE__*/function () {
      function Kitty4Component() {
        _classCallCheck(this, Kitty4Component);
      }

      _createClass(Kitty4Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Kitty4Component;
    }();

    Kitty4Component.ɵfac = function Kitty4Component_Factory(t) {
      return new (t || Kitty4Component)();
    };

    Kitty4Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Kitty4Component,
      selectors: [["app-kitty4"]],
      decls: 31,
      vars: 2,
      consts: [[1, "btn", "btn-success", 3, "routerLink"], [1, "container"], [1, "left"], ["src", "https://lh3.googleusercontent.com/j0AkEQNwhN9iMiLpKZCPhyD3_jRDkswhRLYBDm1fiBKI9_3xYpNdQJxpQEEtjDsbwNDkY0wxj0BnYF_lMKOx5AjhmrwndaKbz_09x91W9UWXl6L2_zzklEBXVo-PVonFUFnpVoGqTg=w2400", "alt", "Kitty3 NFT", 1, "nftImage"], [1, "right"], ["href", "https://polygonscan.com/address/0x2953399124f0cbb46d2cbacd8a89cf0599974963"], ["target", "_blank", "href", "https://lh3.googleusercontent.com/j0AkEQNwhN9iMiLpKZCPhyD3_jRDkswhRLYBDm1fiBKI9_3xYpNdQJxpQEEtjDsbwNDkY0wxj0BnYF_lMKOx5AjhmrwndaKbz_09x91W9UWXl6L2_zzklEBXVo-PVonFUFnpVoGqTg=w2400"], ["target", "_blank", "href", "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/80366395629522486436785199915095687810879187654138836265477219827461373558785", 1, "btn", "btn-primary"]],
      template: function Kitty4Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Kitty #3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Contract Address: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "0x2953399124f0cbb46d2cbacd8a89cf0599974963");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Token ID:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " 80366395629522486436785199915095687810879187654138836265477219827461373558785");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Blockchain:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Polygon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Direct NFT Image Link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "View in OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: [".nftImage[_ngcontent-%COMP%] {\n  border: 5px solid black;\n  padding: 10px;\n  background: rgba(201, 201, 201, 0.5);\n}\n\n.left[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  word-wrap: break-word;\n}\n\n@media screen and (max-width: 560px) {\n  .nftImage[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 10px;\n  }\n\n  .left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%] {\n    height: 100%;\n    max-width: 90%;\n    display: block;\n  }\n}\n\n@media screen and (min-width: 561px) {\n  .nftImage[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n\n  .left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%] {\n    height: 100%;\n    max-width: 50%;\n    display: inline-block;\n    vertical-align: top;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aWxzb25yYW1zdGVhZC9EZXNrdG9wL25ld1Byb2plY3RzMjAyMS9raXR0eWNsdWIvcHVibGljL3NyYy9hcHAva2l0dHk0L2tpdHR5NC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAva2l0dHk0L2tpdHR5NC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLG9DQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxrQkFBQTtBQ0VGOztBREFBO0VBQ0UscUJBQUE7QUNHRjs7QURBQTtFQUNFO0lBQ0UsV0FBQTtJQUNBLGdCQUFBO0VDR0Y7O0VEREE7O0lBRUUsWUFBQTtJQUNBLGNBQUE7SUFDQSxjQUFBO0VDSUY7QUFDRjs7QURGQTtFQUNFO0lBQ0UsVUFBQTtFQ0lGOztFREZBOztJQUVFLFlBQUE7SUFDQSxjQUFBO0lBQ0EscUJBQUE7SUFDQSxtQkFBQTtFQ0tGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9raXR0eTQva2l0dHk0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5mdEltYWdlIHtcbiAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yOiAjYzljOWM5LCAkYWxwaGE6IDAuNSk7XG59XG4ubGVmdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5yaWdodCBwIHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NjBweCkge1xuICAubmZ0SW1hZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbiAgLmxlZnQsXG4gIC5yaWdodCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC13aWR0aDogOTAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NjFweCkge1xuICAubmZ0SW1hZ2Uge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbiAgLmxlZnQsXG4gIC5yaWdodCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC13aWR0aDogNTAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB9XG59XG4iLCIubmZ0SW1hZ2Uge1xuICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyMDEsIDIwMSwgMjAxLCAwLjUpO1xufVxuXG4ubGVmdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnJpZ2h0IHAge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2MHB4KSB7XG4gIC5uZnRJbWFnZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuXG4gIC5sZWZ0LFxuLnJpZ2h0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA5MCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU2MXB4KSB7XG4gIC5uZnRJbWFnZSB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxuXG4gIC5sZWZ0LFxuLnJpZ2h0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA1MCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Kitty4Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-kitty4',
          templateUrl: './kitty4.component.html',
          styleUrls: ['./kitty4.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/kitty5/kitty5.component.ts":
  /*!********************************************!*\
    !*** ./src/app/kitty5/kitty5.component.ts ***!
    \********************************************/

  /*! exports provided: Kitty5Component */

  /***/
  function srcAppKitty5Kitty5ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Kitty5Component", function () {
      return Kitty5Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/home"];
    };

    var Kitty5Component = /*#__PURE__*/function () {
      function Kitty5Component() {
        _classCallCheck(this, Kitty5Component);
      }

      _createClass(Kitty5Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Kitty5Component;
    }();

    Kitty5Component.ɵfac = function Kitty5Component_Factory(t) {
      return new (t || Kitty5Component)();
    };

    Kitty5Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Kitty5Component,
      selectors: [["app-kitty5"]],
      decls: 31,
      vars: 2,
      consts: [[1, "btn", "btn-success", 3, "routerLink"], [1, "container"], [1, "left"], ["src", "https://lh3.googleusercontent.com/6xe_zomcrT5NtaaMcNp_km4_5hdB99r1ORRwfzOrnsvmaSEt1YZguwNqTw8A7L2kcd9kRywulcw36FmwKhXpEeRE1vh5-pUZYYYsnbMmzPBWr20-s44u_oKO-YjExXcRHRmHeSXmzg=w2400", "alt", "Kitty4 NFT", 1, "nftImage"], [1, "right"], ["href", "https://polygonscan.com/address/0x2953399124f0cbb46d2cbacd8a89cf0599974963"], ["target", "_blank", "href", "https://lh3.googleusercontent.com/6xe_zomcrT5NtaaMcNp_km4_5hdB99r1ORRwfzOrnsvmaSEt1YZguwNqTw8A7L2kcd9kRywulcw36FmwKhXpEeRE1vh5-pUZYYYsnbMmzPBWr20-s44u_oKO-YjExXcRHRmHeSXmzg=w2400"], ["target", "_blank", "href", "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/80366395629522486436785199915095687810879187654138836265477219828560885186561", 1, "btn", "btn-primary"]],
      template: function Kitty5Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Kitty #4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Contract Address: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "0x2953399124f0cbb46d2cbacd8a89cf0599974963");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Token ID:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " 80366395629522486436785199915095687810879187654138836265477219828560885186561");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Blockchain:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Polygon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Direct NFT Image Link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "View in OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: [".nftImage[_ngcontent-%COMP%] {\n  border: 5px solid black;\n  padding: 10px;\n  background: rgba(201, 201, 201, 0.5);\n}\n\n.left[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  word-wrap: break-word;\n}\n\n@media screen and (max-width: 560px) {\n  .nftImage[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 10px;\n  }\n\n  .left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%] {\n    height: 100%;\n    max-width: 90%;\n    display: block;\n  }\n}\n\n@media screen and (min-width: 561px) {\n  .nftImage[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n\n  .left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%] {\n    height: 100%;\n    max-width: 50%;\n    display: inline-block;\n    vertical-align: top;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aWxzb25yYW1zdGVhZC9EZXNrdG9wL25ld1Byb2plY3RzMjAyMS9raXR0eWNsdWIvcHVibGljL3NyYy9hcHAva2l0dHk1L2tpdHR5NS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAva2l0dHk1L2tpdHR5NS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLG9DQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxrQkFBQTtBQ0VGOztBREFBO0VBQ0UscUJBQUE7QUNHRjs7QURBQTtFQUNFO0lBQ0UsV0FBQTtJQUNBLGdCQUFBO0VDR0Y7O0VEREE7O0lBRUUsWUFBQTtJQUNBLGNBQUE7SUFDQSxjQUFBO0VDSUY7QUFDRjs7QURGQTtFQUNFO0lBQ0UsVUFBQTtFQ0lGOztFREZBOztJQUVFLFlBQUE7SUFDQSxjQUFBO0lBQ0EscUJBQUE7SUFDQSxtQkFBQTtFQ0tGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9raXR0eTUva2l0dHk1LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5mdEltYWdlIHtcbiAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yOiAjYzljOWM5LCAkYWxwaGE6IDAuNSk7XG59XG4ubGVmdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5yaWdodCBwIHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NjBweCkge1xuICAubmZ0SW1hZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbiAgLmxlZnQsXG4gIC5yaWdodCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC13aWR0aDogOTAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NjFweCkge1xuICAubmZ0SW1hZ2Uge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbiAgLmxlZnQsXG4gIC5yaWdodCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC13aWR0aDogNTAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB9XG59XG4iLCIubmZ0SW1hZ2Uge1xuICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyMDEsIDIwMSwgMjAxLCAwLjUpO1xufVxuXG4ubGVmdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnJpZ2h0IHAge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2MHB4KSB7XG4gIC5uZnRJbWFnZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuXG4gIC5sZWZ0LFxuLnJpZ2h0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA5MCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU2MXB4KSB7XG4gIC5uZnRJbWFnZSB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxuXG4gIC5sZWZ0LFxuLnJpZ2h0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA1MCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Kitty5Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-kitty5',
          templateUrl: './kitty5.component.html',
          styleUrls: ['./kitty5.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/kitty6/kitty6.component.ts":
  /*!********************************************!*\
    !*** ./src/app/kitty6/kitty6.component.ts ***!
    \********************************************/

  /*! exports provided: Kitty6Component */

  /***/
  function srcAppKitty6Kitty6ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Kitty6Component", function () {
      return Kitty6Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/home"];
    };

    var Kitty6Component = /*#__PURE__*/function () {
      function Kitty6Component() {
        _classCallCheck(this, Kitty6Component);
      }

      _createClass(Kitty6Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Kitty6Component;
    }();

    Kitty6Component.ɵfac = function Kitty6Component_Factory(t) {
      return new (t || Kitty6Component)();
    };

    Kitty6Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Kitty6Component,
      selectors: [["app-kitty6"]],
      decls: 31,
      vars: 2,
      consts: [[1, "btn", "btn-success", 3, "routerLink"], [1, "container"], [1, "left"], ["src", "https://lh3.googleusercontent.com/3-4cZWRMw8e4auSVqM1G-d5ohBws7RKsHYFJNY8kS0FmLDXIXjTpfSP41Qd9S7JPoJKFYz2lmHz5HIZ_1ItDdilaQF0VY6iop1zQcVpZ6RQQB5fNuKECmMCI5yUvln5-IhHs8Ak1kw=w2400", "alt", "Kitty5 NFT", 1, "nftImage"], [1, "right"], ["href", "https://polygonscan.com/address/0x2953399124f0cbb46d2cbacd8a89cf0599974963"], ["target", "_blank", "href", "https://lh3.googleusercontent.com/3-4cZWRMw8e4auSVqM1G-d5ohBws7RKsHYFJNY8kS0FmLDXIXjTpfSP41Qd9S7JPoJKFYz2lmHz5HIZ_1ItDdilaQF0VY6iop1zQcVpZ6RQQB5fNuKECmMCI5yUvln5-IhHs8Ak1kw=w2400"], ["target", "_blank", "href", "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/80366395629522486436785199915095687810879187654138836265477219829660396814337", 1, "btn", "btn-primary"]],
      template: function Kitty6Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Kitty #5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Contract Address: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "0x2953399124f0cbb46d2cbacd8a89cf0599974963");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Token ID:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " 80366395629522486436785199915095687810879187654138836265477219829660396814337");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Blockchain:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Polygon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Direct NFT Image Link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "View in OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: [".nftImage[_ngcontent-%COMP%] {\n  border: 5px solid black;\n  padding: 10px;\n  background: rgba(201, 201, 201, 0.5);\n}\n\n.left[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  word-wrap: break-word;\n}\n\n@media screen and (max-width: 560px) {\n  .nftImage[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 10px;\n  }\n\n  .left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%] {\n    height: 100%;\n    max-width: 90%;\n    display: block;\n  }\n}\n\n@media screen and (min-width: 561px) {\n  .nftImage[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n\n  .left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%] {\n    height: 100%;\n    max-width: 50%;\n    display: inline-block;\n    vertical-align: top;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aWxzb25yYW1zdGVhZC9EZXNrdG9wL25ld1Byb2plY3RzMjAyMS9raXR0eWNsdWIvcHVibGljL3NyYy9hcHAva2l0dHk2L2tpdHR5Ni5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAva2l0dHk2L2tpdHR5Ni5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLG9DQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxrQkFBQTtBQ0VGOztBREFBO0VBQ0UscUJBQUE7QUNHRjs7QURBQTtFQUNFO0lBQ0UsV0FBQTtJQUNBLGdCQUFBO0VDR0Y7O0VEREE7O0lBRUUsWUFBQTtJQUNBLGNBQUE7SUFDQSxjQUFBO0VDSUY7QUFDRjs7QURGQTtFQUNFO0lBQ0UsVUFBQTtFQ0lGOztFREZBOztJQUVFLFlBQUE7SUFDQSxjQUFBO0lBQ0EscUJBQUE7SUFDQSxtQkFBQTtFQ0tGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9raXR0eTYva2l0dHk2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5mdEltYWdlIHtcbiAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yOiAjYzljOWM5LCAkYWxwaGE6IDAuNSk7XG59XG4ubGVmdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5yaWdodCBwIHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NjBweCkge1xuICAubmZ0SW1hZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbiAgLmxlZnQsXG4gIC5yaWdodCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC13aWR0aDogOTAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NjFweCkge1xuICAubmZ0SW1hZ2Uge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbiAgLmxlZnQsXG4gIC5yaWdodCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC13aWR0aDogNTAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB9XG59XG4iLCIubmZ0SW1hZ2Uge1xuICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyMDEsIDIwMSwgMjAxLCAwLjUpO1xufVxuXG4ubGVmdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnJpZ2h0IHAge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2MHB4KSB7XG4gIC5uZnRJbWFnZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuXG4gIC5sZWZ0LFxuLnJpZ2h0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA5MCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU2MXB4KSB7XG4gIC5uZnRJbWFnZSB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxuXG4gIC5sZWZ0LFxuLnJpZ2h0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA1MCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Kitty6Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-kitty6',
          templateUrl: './kitty6.component.html',
          styleUrls: ['./kitty6.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/kitty7/kitty7.component.ts":
  /*!********************************************!*\
    !*** ./src/app/kitty7/kitty7.component.ts ***!
    \********************************************/

  /*! exports provided: Kitty7Component */

  /***/
  function srcAppKitty7Kitty7ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Kitty7Component", function () {
      return Kitty7Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/home"];
    };

    var Kitty7Component = /*#__PURE__*/function () {
      function Kitty7Component() {
        _classCallCheck(this, Kitty7Component);
      }

      _createClass(Kitty7Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Kitty7Component;
    }();

    Kitty7Component.ɵfac = function Kitty7Component_Factory(t) {
      return new (t || Kitty7Component)();
    };

    Kitty7Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Kitty7Component,
      selectors: [["app-kitty7"]],
      decls: 31,
      vars: 2,
      consts: [[1, "btn", "btn-success", 3, "routerLink"], [1, "container"], [1, "left"], ["src", "https://lh3.googleusercontent.com/DOz6Vnw03B0HXsgQ2iMK_SoQDf8I52DVeBR6Phqypu-K4nr73ybnaY1KGpnVtk-Sd35y_MJkNvIr-TCOIo9a7mpp75kLjX4yKP2YOX9OJUUVFWf_tlZIga1SQsu63UmdcydVaq3LZQ=w2400", "alt", "Kitty6 NFT", 1, "nftImage"], [1, "right"], ["href", "https://polygonscan.com/address/0x2953399124f0cbb46d2cbacd8a89cf0599974963"], ["target", "_blank", "href", "https://lh3.googleusercontent.com/DOz6Vnw03B0HXsgQ2iMK_SoQDf8I52DVeBR6Phqypu-K4nr73ybnaY1KGpnVtk-Sd35y_MJkNvIr-TCOIo9a7mpp75kLjX4yKP2YOX9OJUUVFWf_tlZIga1SQsu63UmdcydVaq3LZQ=w2400"], ["target", "_blank", "href", "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/80366395629522486436785199915095687810879187654138836265477219830759908442113", 1, "btn", "btn-primary"]],
      template: function Kitty7Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Kitty #6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Contract Address: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "0x2953399124f0cbb46d2cbacd8a89cf0599974963");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Token ID:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " 80366395629522486436785199915095687810879187654138836265477219830759908442113");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Blockchain:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Polygon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Direct NFT Image Link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "View in OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: [".nftImage[_ngcontent-%COMP%] {\n  border: 5px solid black;\n  padding: 10px;\n  background: rgba(201, 201, 201, 0.5);\n}\n\n.left[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  word-wrap: break-word;\n}\n\n@media screen and (max-width: 560px) {\n  .nftImage[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 10px;\n  }\n\n  .left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%] {\n    height: 100%;\n    max-width: 90%;\n    display: block;\n  }\n}\n\n@media screen and (min-width: 561px) {\n  .nftImage[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n\n  .left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%] {\n    height: 100%;\n    max-width: 50%;\n    display: inline-block;\n    vertical-align: top;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aWxzb25yYW1zdGVhZC9EZXNrdG9wL25ld1Byb2plY3RzMjAyMS9raXR0eWNsdWIvcHVibGljL3NyYy9hcHAva2l0dHk3L2tpdHR5Ny5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAva2l0dHk3L2tpdHR5Ny5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLG9DQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxrQkFBQTtBQ0VGOztBREFBO0VBQ0UscUJBQUE7QUNHRjs7QURBQTtFQUNFO0lBQ0UsV0FBQTtJQUNBLGdCQUFBO0VDR0Y7O0VEREE7O0lBRUUsWUFBQTtJQUNBLGNBQUE7SUFDQSxjQUFBO0VDSUY7QUFDRjs7QURGQTtFQUNFO0lBQ0UsVUFBQTtFQ0lGOztFREZBOztJQUVFLFlBQUE7SUFDQSxjQUFBO0lBQ0EscUJBQUE7SUFDQSxtQkFBQTtFQ0tGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9raXR0eTcva2l0dHk3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5mdEltYWdlIHtcbiAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yOiAjYzljOWM5LCAkYWxwaGE6IDAuNSk7XG59XG4ubGVmdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5yaWdodCBwIHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NjBweCkge1xuICAubmZ0SW1hZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbiAgLmxlZnQsXG4gIC5yaWdodCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC13aWR0aDogOTAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NjFweCkge1xuICAubmZ0SW1hZ2Uge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbiAgLmxlZnQsXG4gIC5yaWdodCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC13aWR0aDogNTAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB9XG59XG4iLCIubmZ0SW1hZ2Uge1xuICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyMDEsIDIwMSwgMjAxLCAwLjUpO1xufVxuXG4ubGVmdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnJpZ2h0IHAge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2MHB4KSB7XG4gIC5uZnRJbWFnZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuXG4gIC5sZWZ0LFxuLnJpZ2h0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA5MCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU2MXB4KSB7XG4gIC5uZnRJbWFnZSB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxuXG4gIC5sZWZ0LFxuLnJpZ2h0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA1MCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Kitty7Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-kitty7',
          templateUrl: './kitty7.component.html',
          styleUrls: ['./kitty7.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/kitty8/kitty8.component.ts":
  /*!********************************************!*\
    !*** ./src/app/kitty8/kitty8.component.ts ***!
    \********************************************/

  /*! exports provided: Kitty8Component */

  /***/
  function srcAppKitty8Kitty8ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Kitty8Component", function () {
      return Kitty8Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/home"];
    };

    var Kitty8Component = /*#__PURE__*/function () {
      function Kitty8Component() {
        _classCallCheck(this, Kitty8Component);
      }

      _createClass(Kitty8Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Kitty8Component;
    }();

    Kitty8Component.ɵfac = function Kitty8Component_Factory(t) {
      return new (t || Kitty8Component)();
    };

    Kitty8Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Kitty8Component,
      selectors: [["app-kitty8"]],
      decls: 31,
      vars: 2,
      consts: [[1, "btn", "btn-success", 3, "routerLink"], [1, "container"], [1, "left"], ["src", "https://lh3.googleusercontent.com/Y2iNs7Z2z7HRSBzqW_aC14jM6usK5pr-ku95FtsRkO9CVtz23lpvL0U_kgWdiz6kxpcSH6DgAFVpfOXVLmKhy4PqLgVTRDAIzP3sA5sDrc-0uGn2H6Z5rfMq0khsc-Rl7gLlxun5iQ=w2400", "alt", "Kitty7 NFT", 1, "nftImage"], [1, "right"], ["href", "https://polygonscan.com/address/0x2953399124f0cbb46d2cbacd8a89cf0599974963"], ["target", "_blank", "href", "https://lh3.googleusercontent.com/Y2iNs7Z2z7HRSBzqW_aC14jM6usK5pr-ku95FtsRkO9CVtz23lpvL0U_kgWdiz6kxpcSH6DgAFVpfOXVLmKhy4PqLgVTRDAIzP3sA5sDrc-0uGn2H6Z5rfMq0khsc-Rl7gLlxun5iQ=w2400"], ["target", "_blank", "href", "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/80366395629522486436785199915095687810879187654138836265477219831859420069889", 1, "btn", "btn-primary"]],
      template: function Kitty8Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Kitty #7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Contract Address: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "0x2953399124f0cbb46d2cbacd8a89cf0599974963");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Token ID:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " 80366395629522486436785199915095687810879187654138836265477219831859420069889");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Blockchain:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Polygon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Direct NFT Image Link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "View in OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: [".nftImage[_ngcontent-%COMP%] {\n  border: 5px solid black;\n  padding: 10px;\n  background: rgba(201, 201, 201, 0.5);\n}\n\n.left[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  word-wrap: break-word;\n}\n\n@media screen and (max-width: 560px) {\n  .nftImage[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 10px;\n  }\n\n  .left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%] {\n    height: 100%;\n    max-width: 90%;\n    display: block;\n  }\n}\n\n@media screen and (min-width: 561px) {\n  .nftImage[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n\n  .left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%] {\n    height: 100%;\n    max-width: 50%;\n    display: inline-block;\n    vertical-align: top;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aWxzb25yYW1zdGVhZC9EZXNrdG9wL25ld1Byb2plY3RzMjAyMS9raXR0eWNsdWIvcHVibGljL3NyYy9hcHAva2l0dHk4L2tpdHR5OC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAva2l0dHk4L2tpdHR5OC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLG9DQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxrQkFBQTtBQ0VGOztBREFBO0VBQ0UscUJBQUE7QUNHRjs7QURBQTtFQUNFO0lBQ0UsV0FBQTtJQUNBLGdCQUFBO0VDR0Y7O0VEREE7O0lBRUUsWUFBQTtJQUNBLGNBQUE7SUFDQSxjQUFBO0VDSUY7QUFDRjs7QURGQTtFQUNFO0lBQ0UsVUFBQTtFQ0lGOztFREZBOztJQUVFLFlBQUE7SUFDQSxjQUFBO0lBQ0EscUJBQUE7SUFDQSxtQkFBQTtFQ0tGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9raXR0eTgva2l0dHk4LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5mdEltYWdlIHtcbiAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yOiAjYzljOWM5LCAkYWxwaGE6IDAuNSk7XG59XG4ubGVmdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5yaWdodCBwIHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NjBweCkge1xuICAubmZ0SW1hZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbiAgLmxlZnQsXG4gIC5yaWdodCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC13aWR0aDogOTAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NjFweCkge1xuICAubmZ0SW1hZ2Uge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbiAgLmxlZnQsXG4gIC5yaWdodCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC13aWR0aDogNTAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB9XG59XG4iLCIubmZ0SW1hZ2Uge1xuICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyMDEsIDIwMSwgMjAxLCAwLjUpO1xufVxuXG4ubGVmdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnJpZ2h0IHAge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2MHB4KSB7XG4gIC5uZnRJbWFnZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuXG4gIC5sZWZ0LFxuLnJpZ2h0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA5MCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU2MXB4KSB7XG4gIC5uZnRJbWFnZSB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxuXG4gIC5sZWZ0LFxuLnJpZ2h0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA1MCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Kitty8Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-kitty8',
          templateUrl: './kitty8.component.html',
          styleUrls: ['./kitty8.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/kitty9/kitty9.component.ts":
  /*!********************************************!*\
    !*** ./src/app/kitty9/kitty9.component.ts ***!
    \********************************************/

  /*! exports provided: Kitty9Component */

  /***/
  function srcAppKitty9Kitty9ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Kitty9Component", function () {
      return Kitty9Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/home"];
    };

    var Kitty9Component = /*#__PURE__*/function () {
      function Kitty9Component() {
        _classCallCheck(this, Kitty9Component);
      }

      _createClass(Kitty9Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Kitty9Component;
    }();

    Kitty9Component.ɵfac = function Kitty9Component_Factory(t) {
      return new (t || Kitty9Component)();
    };

    Kitty9Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Kitty9Component,
      selectors: [["app-kitty9"]],
      decls: 31,
      vars: 2,
      consts: [[1, "btn", "btn-success", 3, "routerLink"], [1, "container"], [1, "left"], ["src", "https://lh3.googleusercontent.com/fBHB27P993aCO0Ou-AHZuY9QKyJ0G0w6HILdjvKwD-RDBdIIaZCLm0FvfioQ5mo9WrDF-0D_jPAZNQ56I0ZSEXIMSY1CyPv7EOhajahZ91X-DcsuhExeocsaYfwp2SfXe2agbUDHww=w2400", "alt", "Kitty8 NFT", 1, "nftImage"], [1, "right"], ["href", "https://polygonscan.com/address/0x2953399124f0cbb46d2cbacd8a89cf0599974963"], ["target", "_blank", "href", "https://lh3.googleusercontent.com/fBHB27P993aCO0Ou-AHZuY9QKyJ0G0w6HILdjvKwD-RDBdIIaZCLm0FvfioQ5mo9WrDF-0D_jPAZNQ56I0ZSEXIMSY1CyPv7EOhajahZ91X-DcsuhExeocsaYfwp2SfXe2agbUDHww=w2400"], ["target", "_blank", "href", "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/80366395629522486436785199915095687810879187654138836265477219832958931697665", 1, "btn", "btn-primary"]],
      template: function Kitty9Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Kitty #8");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Contract Address: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "0x2953399124f0cbb46d2cbacd8a89cf0599974963");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Token ID:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " 80366395629522486436785199915095687810879187654138836265477219832958931697665");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Blockchain:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Polygon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Direct NFT Image Link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "View in OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: [".nftImage[_ngcontent-%COMP%] {\n  border: 5px solid black;\n  padding: 10px;\n  background: rgba(201, 201, 201, 0.5);\n}\n\n.left[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  word-wrap: break-word;\n}\n\n@media screen and (max-width: 560px) {\n  .nftImage[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 10px;\n  }\n\n  .left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%] {\n    height: 100%;\n    max-width: 90%;\n    display: block;\n  }\n}\n\n@media screen and (min-width: 561px) {\n  .nftImage[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n\n  .left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%] {\n    height: 100%;\n    max-width: 50%;\n    display: inline-block;\n    vertical-align: top;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aWxzb25yYW1zdGVhZC9EZXNrdG9wL25ld1Byb2plY3RzMjAyMS9raXR0eWNsdWIvcHVibGljL3NyYy9hcHAva2l0dHk5L2tpdHR5OS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAva2l0dHk5L2tpdHR5OS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLG9DQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxrQkFBQTtBQ0VGOztBREFBO0VBQ0UscUJBQUE7QUNHRjs7QURBQTtFQUNFO0lBQ0UsV0FBQTtJQUNBLGdCQUFBO0VDR0Y7O0VEREE7O0lBRUUsWUFBQTtJQUNBLGNBQUE7SUFDQSxjQUFBO0VDSUY7QUFDRjs7QURGQTtFQUNFO0lBQ0UsVUFBQTtFQ0lGOztFREZBOztJQUVFLFlBQUE7SUFDQSxjQUFBO0lBQ0EscUJBQUE7SUFDQSxtQkFBQTtFQ0tGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9raXR0eTkva2l0dHk5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5mdEltYWdlIHtcbiAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yOiAjYzljOWM5LCAkYWxwaGE6IDAuNSk7XG59XG4ubGVmdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5yaWdodCBwIHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NjBweCkge1xuICAubmZ0SW1hZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbiAgLmxlZnQsXG4gIC5yaWdodCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC13aWR0aDogOTAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NjFweCkge1xuICAubmZ0SW1hZ2Uge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbiAgLmxlZnQsXG4gIC5yaWdodCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC13aWR0aDogNTAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB9XG59XG4iLCIubmZ0SW1hZ2Uge1xuICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyMDEsIDIwMSwgMjAxLCAwLjUpO1xufVxuXG4ubGVmdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnJpZ2h0IHAge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2MHB4KSB7XG4gIC5uZnRJbWFnZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuXG4gIC5sZWZ0LFxuLnJpZ2h0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA5MCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU2MXB4KSB7XG4gIC5uZnRJbWFnZSB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxuXG4gIC5sZWZ0LFxuLnJpZ2h0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA1MCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Kitty9Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-kitty9',
          templateUrl: './kitty9.component.html',
          styleUrls: ['./kitty9.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/total-collection/total-collection.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/total-collection/total-collection.component.ts ***!
    \****************************************************************/

  /*! exports provided: TotalCollectionComponent */

  /***/
  function srcAppTotalCollectionTotalCollectionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TotalCollectionComponent", function () {
      return TotalCollectionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/nfts/kitty1"];
    };

    var _c1 = function _c1() {
      return ["/nfts/kitty2"];
    };

    var _c2 = function _c2() {
      return ["/nfts/kitty3"];
    };

    var _c3 = function _c3() {
      return ["/nfts/kitty4"];
    };

    var _c4 = function _c4() {
      return ["/nfts/kitty5"];
    };

    var _c5 = function _c5() {
      return ["/nfts/kitty6"];
    };

    var _c6 = function _c6() {
      return ["/nfts/kitty7"];
    };

    var _c7 = function _c7() {
      return ["/nfts/kitty8"];
    };

    var _c8 = function _c8() {
      return ["/nfts/kitty9"];
    };

    var _c9 = function _c9() {
      return ["/nfts/kitty10"];
    };

    var _c10 = function _c10() {
      return ["/nfts/kitty11"];
    };

    var _c11 = function _c11() {
      return ["/nfts/kitty12"];
    };

    var TotalCollectionComponent = /*#__PURE__*/function () {
      function TotalCollectionComponent() {
        _classCallCheck(this, TotalCollectionComponent);
      }

      _createClass(TotalCollectionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TotalCollectionComponent;
    }();

    TotalCollectionComponent.ɵfac = function TotalCollectionComponent_Factory(t) {
      return new (t || TotalCollectionComponent)();
    };

    TotalCollectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TotalCollectionComponent,
      selectors: [["app-total-collection"]],
      decls: 250,
      vars: 48,
      consts: [[1, "desktopCollection"], [1, "row"], [1, "col-sm-2"], [1, "card"], ["src", "https://lh3.googleusercontent.com/6Euu4tcBCXwkm6qlvtMrGkL3Cfu4rR-3VnljMC4qD79DCnQlLfH1pjUCZ_7Z_YI-tCqol05g22zWn-PCIfdkmYkHvFOxfIpIMesie1wVdyd-n5ykq9n3LlD3FUI50Afn9Q7oFjWCqOJJT2hCdWHBItS2eNRCsWpMJQ0-iQef9w_PMJ1mA9hAdlZNigEOHoYSA7PW6MP-z9rbKrX6tXQXRlp1fwVBcEbd9KuGIBYIXy2d-UHIkofW1_yJdO0XCtBDVeHjg-l4tGOGe7Mxr_kYBhPvncgiXis-bZJSHFTYSiH5UwwkglZ19awpv7xBA2lYOY_Yg2OL3zyUfVNpmJwFII6vFzbkJxuA5xHuN-Q9fVPZ_0em4AX36XREKWMdh0ec3BNrL37uCz7K6leWuqpzDtCun4VzwCbuwmyIWtxs65fmvEhZMO2pFLCnlaqtR5BpE5O4PtLzjmAZbnSTTDGxJ4-xFXCb_fn1p7u9ZzW7HV3y7G97YXpeCqr2wKEVH82LPfKeJtMoxIGn7YCPW5NmqLgEWOISguXa8cZeDErDDirz_lj33Yw9D5bOw3UPLxfXAUpHCiCSNswCKtFulCHUb07--bxceOnWweWRH9skiZrS5KouBg6-YYauI5cJXJz1sZsX1E3-jbAO8IkKfVmdzOrbn62PYgK6mkSN3kM4x3voKvBBFIy3Yq5Y7loPOe-5WE44vtuacQlN05K7S4T4Y8K1=w1592-h1594-no?authuser=0", "alt", "Kitty1 NFT", 1, "card-img-top", 2, "width", "100%"], [1, "card-body"], [1, "card-title"], [1, "btn", "btn-success", 3, "routerLink"], ["target", "_blank", "href", "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/80366395629522486436785199915095687810879187654138836265477219824162838675457", 1, "btn", "btn-primary"], ["src", "https://lh3.googleusercontent.com/pw/AM-JKLUqsVsNcBtzOzrOrS9sG6u4uEJGeSR3OXkjIHCQFDFPQeGUFQNtlHhkeGnbRxRhk4f-cJc4LxKVKG6unDs7o531wrRColEJTt_n8_qP4sBW6pNQQaTTGCLA3QNZKQTt8x80R1xrYTylxK_3HKJpHCAO=w1770-h1772-no?authuser=0", "alt", "Card image cap", 1, "card-img-top", 2, "width", "100%"], ["target", "_blank", "href", "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/80366395629522486436785199915095687810879187654138836265477219825262350303233", 1, "btn", "btn-primary"], ["src", "https://lh3.googleusercontent.com/McL0a7Igd77NgRxMFtdqgzRoZH97tKrQ7_YEkwiCRqlvA5QwHhhmrd98UkNHDaPuye00AuTeO1_ovt0HXvuanXjmBXUF28IgfR9aDkCId17O94eQLUfYGdAR1be7wEwnIkEu9Bbt3A=w2400", "alt", "Card image cap", 1, "card-img-top", 2, "width", "100%"], ["target", "_blank", "href", "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/80366395629522486436785199915095687810879187654138836265477219826361861931009", 1, "btn", "btn-primary"], ["src", "https://lh3.googleusercontent.com/j0AkEQNwhN9iMiLpKZCPhyD3_jRDkswhRLYBDm1fiBKI9_3xYpNdQJxpQEEtjDsbwNDkY0wxj0BnYF_lMKOx5AjhmrwndaKbz_09x91W9UWXl6L2_zzklEBXVo-PVonFUFnpVoGqTg=w2400", "alt", "Card image cap", 1, "card-img-top", 2, "width", "100%"], ["target", "_blank", "href", "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/80366395629522486436785199915095687810879187654138836265477219827461373558785", 1, "btn", "btn-primary"], ["src", "https://lh3.googleusercontent.com/6xe_zomcrT5NtaaMcNp_km4_5hdB99r1ORRwfzOrnsvmaSEt1YZguwNqTw8A7L2kcd9kRywulcw36FmwKhXpEeRE1vh5-pUZYYYsnbMmzPBWr20-s44u_oKO-YjExXcRHRmHeSXmzg=w2400", "alt", "Card image cap", 1, "card-img-top", 2, "width", "100%"], ["target", "_blank", "href", "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/80366395629522486436785199915095687810879187654138836265477219828560885186561", 1, "btn", "btn-primary"], ["src", "https://lh3.googleusercontent.com/3-4cZWRMw8e4auSVqM1G-d5ohBws7RKsHYFJNY8kS0FmLDXIXjTpfSP41Qd9S7JPoJKFYz2lmHz5HIZ_1ItDdilaQF0VY6iop1zQcVpZ6RQQB5fNuKECmMCI5yUvln5-IhHs8Ak1kw=w2400", "alt", "Card image cap", 1, "card-img-top", 2, "width", "100%"], ["target", "_blank", "href", "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/80366395629522486436785199915095687810879187654138836265477219829660396814337", 1, "btn", "btn-primary"], ["src", "https://lh3.googleusercontent.com/DOz6Vnw03B0HXsgQ2iMK_SoQDf8I52DVeBR6Phqypu-K4nr73ybnaY1KGpnVtk-Sd35y_MJkNvIr-TCOIo9a7mpp75kLjX4yKP2YOX9OJUUVFWf_tlZIga1SQsu63UmdcydVaq3LZQ=w2400", "alt", "Card image cap", 1, "card-img-top", 2, "width", "100%"], ["target", "_blank", "href", "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/80366395629522486436785199915095687810879187654138836265477219830759908442113", 1, "btn", "btn-primary"], ["src", "https://lh3.googleusercontent.com/Y2iNs7Z2z7HRSBzqW_aC14jM6usK5pr-ku95FtsRkO9CVtz23lpvL0U_kgWdiz6kxpcSH6DgAFVpfOXVLmKhy4PqLgVTRDAIzP3sA5sDrc-0uGn2H6Z5rfMq0khsc-Rl7gLlxun5iQ=w2400", "alt", "Card image cap", 1, "card-img-top", 2, "width", "100%"], ["target", "_blank", "href", "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/80366395629522486436785199915095687810879187654138836265477219831859420069889", 1, "btn", "btn-primary"], ["src", "https://lh3.googleusercontent.com/fBHB27P993aCO0Ou-AHZuY9QKyJ0G0w6HILdjvKwD-RDBdIIaZCLm0FvfioQ5mo9WrDF-0D_jPAZNQ56I0ZSEXIMSY1CyPv7EOhajahZ91X-DcsuhExeocsaYfwp2SfXe2agbUDHww=w2400", "alt", "Card image cap", 1, "card-img-top", 2, "width", "100%"], ["target", "_blank", "href", "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/80366395629522486436785199915095687810879187654138836265477219832958931697665", 1, "btn", "btn-primary"], ["src", "https://lh3.googleusercontent.com/VzzwueCkjCwxdSMG5eaR579MzT40nWZ_yAIpsrlo58HaV23-C9bJh-NV5_esngtai3uUB9DGKPLi0t-LIJA4QZJzrr-2y0iYKB1c1NRcA3QTNZ7ENEYIbahOLUyYcffZjpMvPQ80nA=w2400", "alt", "Card image cap", 1, "card-img-top", 2, "width", "100%"], ["target", "_blank", "href", "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/80366395629522486436785199915095687810879187654138836265477219834058443325441", 1, "btn", "btn-primary"], ["src", "https://lh3.googleusercontent.com/TsT7IWS255CeXV0-JLVpyRN4f6O1GtuBxxgZ_rArkdZ6tIMJMK4lX0JwCZZrfJ16IgvBQlixE_DFtlNQeA9RDMjqma5qCzyF8ezuo7utk96amqdm0X9S7j7YcbjXpgAAtkaQdJ7LcA=w2400", "alt", "Card image cap", 1, "card-img-top", 2, "width", "100%"], ["target", "_blank", "href", "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/80366395629522486436785199915095687810879187654138836265477219835157954953217", 1, "btn", "btn-primary"], ["src", "https://lh3.googleusercontent.com/N1HvyMZLbrFPC3MLLzLD5Xwaw9ozuZrhb6XyAuCK6UiolKyBltjGMjdOLzYtPKZDShKVEzZpIIhWdhVhXZMedEvV3-z5YtMsgQtRT9sVCG_EbEbtB-FFRLp-m1u4GJW92joBoIfUcA=w2400", "alt", "Card image cap", 1, "card-img-top", 2, "width", "100%"], ["target", "_blank", "href", "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/80366395629522486436785199915095687810879187654138836265477219836257466580993", 1, "btn", "btn-primary"], [1, "mobileCollection"], [1, "col-xs-6"], ["src", "https://lh3.googleusercontent.com/2Henk2N4t-6VI3so2I7AfiEnW_YmeJ0O4vIG6joHIaqY6CECPLUKyNheXgSzt2aYlTAbKPhfotninyg_FAbmSGXsblBiKFdzG3f15470vbvLqYZPXvzdEX2mOuSINA0_wvDr_l1EJQ=w2400", "alt", "Kitty1 NFT", 1, "card-img-top", 2, "width", "100%"]],
      template: function TotalCollectionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "KittyClub #Buco");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Kitty #1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Kitty #2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Kitty #3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Kitty #4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Kitty #5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Kitty #6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Kitty #7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "img", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Kitty #8");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "img", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Kitty #9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "img", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Kitty #10");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "a", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "img", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Kitty #11");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "img", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "KittyClub #Buco");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Kitty #1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Kitty #2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Kitty #3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](169, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "Kitty #4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "Kitty #5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](190, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "Kitty #6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](200, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "Kitty #7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](211, "img", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "Kitty #8");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](221, "img", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "Kitty #9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, "OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](232, "img", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "Kitty #10");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "a", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, "OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](242, "img", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, "Kitty #11");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, "OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](24, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](25, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](26, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](27, _c3));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](28, _c4));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](29, _c5));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](30, _c6));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](31, _c7));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](32, _c8));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](33, _c9));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](34, _c10));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](35, _c11));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](36, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](37, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](38, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](39, _c3));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](40, _c4));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](41, _c5));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](42, _c6));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](43, _c7));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](44, _c8));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](45, _c9));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](46, _c10));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](47, _c11));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: [".row[_ngcontent-%COMP%] {\n  margin-bottom: 3rem;\n}\n\n.btn[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.card[_ngcontent-%COMP%] {\n  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.068), 0 6.7px 5.3px rgba(0, 0, 0, 0.096), 0 12.5px 10px rgba(0, 0, 0, 0.12), 0 22.3px 17.9px rgba(0, 0, 0, 0.144), 0 41.8px 33.4px rgba(0, 0, 0, 0.172), 0 100px 80px rgba(0, 0, 0, 0.24);\n}\n\n.card[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n@media screen and (max-width: 560px) {\n  .desktopCollection[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .card[_ngcontent-%COMP%] {\n    width: 14rem;\n  }\n}\n\n@media screen and (min-width: 561px) {\n  .mobileCollection[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .card[_ngcontent-%COMP%] {\n    width: 18rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aWxzb25yYW1zdGVhZC9EZXNrdG9wL25ld1Byb2plY3RzMjAyMS9raXR0eWNsdWIvcHVibGljL3NyYy9hcHAvdG90YWwtY29sbGVjdGlvbi90b3RhbC1jb2xsZWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90b3RhbC1jb2xsZWN0aW9uL3RvdGFsLWNvbGxlY3Rpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBQ0UsbU9BQUE7QUNDRjs7QURJRTtFQUNFLGtCQUFBO0FDRko7O0FETUE7RUFDRTtJQUNFLGFBQUE7RUNIRjs7RURLQTtJQUNFLFlBQUE7RUNGRjtBQUNGOztBRElBO0VBQ0U7SUFDRSxhQUFBO0VDRkY7O0VESUE7SUFDRSxZQUFBO0VDREY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3RvdGFsLWNvbGxlY3Rpb24vdG90YWwtY29sbGVjdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3cge1xuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xufVxuXG4uYnRuIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jYXJkIHtcbiAgYm94LXNoYWRvdzogMCAyLjhweCAyLjJweCByZ2JhKDAsIDAsIDAsIDAuMDY4KSxcbiAgICAwIDYuN3B4IDUuM3B4IHJnYmEoMCwgMCwgMCwgMC4wOTYpLCAwIDEyLjVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xMiksXG4gICAgMCAyMi4zcHggMTcuOXB4IHJnYmEoMCwgMCwgMCwgMC4xNDQpLCAwIDQxLjhweCAzMy40cHggcmdiYSgwLCAwLCAwLCAwLjE3MiksXG4gICAgMCAxMDBweCA4MHB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XG5cbiAgaDUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NjBweCkge1xuICAuZGVza3RvcENvbGxlY3Rpb24ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLmNhcmQge1xuICAgIHdpZHRoOiAxNHJlbTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTYxcHgpIHtcbiAgLm1vYmlsZUNvbGxlY3Rpb24ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLmNhcmQge1xuICAgIHdpZHRoOiAxOHJlbTtcbiAgfVxufVxuIiwiLnJvdyB7XG4gIG1hcmdpbi1ib3R0b206IDNyZW07XG59XG5cbi5idG4ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNhcmQge1xuICBib3gtc2hhZG93OiAwIDIuOHB4IDIuMnB4IHJnYmEoMCwgMCwgMCwgMC4wNjgpLCAwIDYuN3B4IDUuM3B4IHJnYmEoMCwgMCwgMCwgMC4wOTYpLCAwIDEyLjVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMjIuM3B4IDE3LjlweCByZ2JhKDAsIDAsIDAsIDAuMTQ0KSwgMCA0MS44cHggMzMuNHB4IHJnYmEoMCwgMCwgMCwgMC4xNzIpLCAwIDEwMHB4IDgwcHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcbn1cbi5jYXJkIGg1IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NjBweCkge1xuICAuZGVza3RvcENvbGxlY3Rpb24ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAuY2FyZCB7XG4gICAgd2lkdGg6IDE0cmVtO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NjFweCkge1xuICAubW9iaWxlQ29sbGVjdGlvbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5jYXJkIHtcbiAgICB3aWR0aDogMThyZW07XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TotalCollectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-total-collection',
          templateUrl: './total-collection.component.html',
          styleUrls: ['./total-collection.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/wilsonramstead/Desktop/newProjects2021/kittyclub/public/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map