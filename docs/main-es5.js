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
    /* harmony import */


    var _kitty13_kitty13_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./kitty13/kitty13.component */
    "./src/app/kitty13/kitty13.component.ts");
    /* harmony import */


    var _kitty14_kitty14_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./kitty14/kitty14.component */
    "./src/app/kitty14/kitty14.component.ts");
    /* harmony import */


    var _kitty15_kitty15_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./kitty15/kitty15.component */
    "./src/app/kitty15/kitty15.component.ts");
    /* harmony import */


    var _kitty16_kitty16_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./kitty16/kitty16.component */
    "./src/app/kitty16/kitty16.component.ts");
    /* harmony import */


    var _kitty17_kitty17_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./kitty17/kitty17.component */
    "./src/app/kitty17/kitty17.component.ts");
    /* harmony import */


    var _kitty18_kitty18_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./kitty18/kitty18.component */
    "./src/app/kitty18/kitty18.component.ts");
    /* harmony import */


    var _kitty19_kitty19_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./kitty19/kitty19.component */
    "./src/app/kitty19/kitty19.component.ts");
    /* harmony import */


    var _kitty20_kitty20_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./kitty20/kitty20.component */
    "./src/app/kitty20/kitty20.component.ts");
    /* harmony import */


    var _kitty21_kitty21_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./kitty21/kitty21.component */
    "./src/app/kitty21/kitty21.component.ts");
    /* harmony import */


    var _kitty22_kitty22_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./kitty22/kitty22.component */
    "./src/app/kitty22/kitty22.component.ts");
    /* harmony import */


    var _kitty23_kitty23_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./kitty23/kitty23.component */
    "./src/app/kitty23/kitty23.component.ts");
    /* harmony import */


    var _kitty24_kitty24_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./kitty24/kitty24.component */
    "./src/app/kitty24/kitty24.component.ts");
    /* harmony import */


    var _kitty25_kitty25_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./kitty25/kitty25.component */
    "./src/app/kitty25/kitty25.component.ts");
    /* harmony import */


    var _kitty26_kitty26_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./kitty26/kitty26.component */
    "./src/app/kitty26/kitty26.component.ts");

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
      }, {
        path: 'kitty13',
        component: _kitty13_kitty13_component__WEBPACK_IMPORTED_MODULE_15__["Kitty13Component"]
      }, {
        path: 'kitty14',
        component: _kitty14_kitty14_component__WEBPACK_IMPORTED_MODULE_16__["Kitty14Component"]
      }, {
        path: 'kitty15',
        component: _kitty15_kitty15_component__WEBPACK_IMPORTED_MODULE_17__["Kitty15Component"]
      }, {
        path: 'kitty16',
        component: _kitty16_kitty16_component__WEBPACK_IMPORTED_MODULE_18__["Kitty16Component"]
      }, {
        path: 'kitty17',
        component: _kitty17_kitty17_component__WEBPACK_IMPORTED_MODULE_19__["Kitty17Component"]
      }, {
        path: 'kitty18',
        component: _kitty18_kitty18_component__WEBPACK_IMPORTED_MODULE_20__["Kitty18Component"]
      }, {
        path: 'kitty19',
        component: _kitty19_kitty19_component__WEBPACK_IMPORTED_MODULE_21__["Kitty19Component"]
      }, {
        path: 'kitty20',
        component: _kitty20_kitty20_component__WEBPACK_IMPORTED_MODULE_22__["Kitty20Component"]
      }, {
        path: 'kitty21',
        component: _kitty21_kitty21_component__WEBPACK_IMPORTED_MODULE_23__["Kitty21Component"]
      }, {
        path: 'kitty22',
        component: _kitty22_kitty22_component__WEBPACK_IMPORTED_MODULE_24__["Kitty22Component"]
      }, {
        path: 'kitty23',
        component: _kitty23_kitty23_component__WEBPACK_IMPORTED_MODULE_25__["Kitty23Component"]
      }, {
        path: 'kitty24',
        component: _kitty24_kitty24_component__WEBPACK_IMPORTED_MODULE_26__["Kitty24Component"]
      }, {
        path: 'kitty25',
        component: _kitty25_kitty25_component__WEBPACK_IMPORTED_MODULE_27__["Kitty25Component"]
      }, {
        path: 'kitty26',
        component: _kitty26_kitty26_component__WEBPACK_IMPORTED_MODULE_28__["Kitty26Component"]
      }]
    }, {
      path: '**',
      redirectTo: '/home'
    }];

    var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    });

    AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppRoutingModule, [{
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

    AppComponent.??fac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 11,
      vars: 0,
      consts: [[1, "container-fluid", "p-3", "my-3"], [1, "header"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "KittyClub NFT Collection");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "The KittyClub is a collection of 50 unique Kitty NFTs \u2014 unique digital collectibles living on the Polygon blockchain. Join the Kitty Club family today!!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "20% of NFT sales will go towards charities supporting cat adoption and cat care, as well as animal abuse prevention.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: [".container-fluid[_ngcontent-%COMP%] {\n  min-height: 90vh;\n  border-top: 5px solid black;\n  border-bottom: 5px solid black;\n  background: rgba(211, 211, 211, 0.6);\n  overflow: auto;\n  word-wrap: break-word;\n  color: black;\n  padding-bottom: 60px;\n}\n\n@media screen and (max-width: 560px) {\n  .container-fluid[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aWxzb25yYW1zdGVhZC9EZXNrdG9wL25ld1Byb2plY3RzMjAyMS9raXR0eWNsdWIvcHVibGljL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQ0FBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQ0NGOztBREVBO0VBQ0U7SUFDRSxlQUFBO0VDQ0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItZmx1aWQge1xuICBtaW4taGVpZ2h0OiA5MHZoO1xuICBib3JkZXItdG9wOiA1cHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCBibGFjaztcbiAgYmFja2dyb3VuZDogcmdiYSgkY29sb3I6ICNkM2QzZDMsICRhbHBoYTogMC42KTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nLWJvdHRvbTogNjBweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTYwcHgpIHtcbiAgLmNvbnRhaW5lci1mbHVpZCB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICB9XG59XG4iLCIuY29udGFpbmVyLWZsdWlkIHtcbiAgbWluLWhlaWdodDogOTB2aDtcbiAgYm9yZGVyLXRvcDogNXB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgYmxhY2s7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjExLCAyMTEsIDIxMSwgMC42KTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nLWJvdHRvbTogNjBweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTYwcHgpIHtcbiAgLmNvbnRhaW5lci1mbHVpZCB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppComponent, [{
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
    /* harmony import */


    var _kitty13_kitty13_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./kitty13/kitty13.component */
    "./src/app/kitty13/kitty13.component.ts");
    /* harmony import */


    var _kitty14_kitty14_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./kitty14/kitty14.component */
    "./src/app/kitty14/kitty14.component.ts");
    /* harmony import */


    var _kitty15_kitty15_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./kitty15/kitty15.component */
    "./src/app/kitty15/kitty15.component.ts");
    /* harmony import */


    var _kitty16_kitty16_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./kitty16/kitty16.component */
    "./src/app/kitty16/kitty16.component.ts");
    /* harmony import */


    var _kitty17_kitty17_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./kitty17/kitty17.component */
    "./src/app/kitty17/kitty17.component.ts");
    /* harmony import */


    var _kitty18_kitty18_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./kitty18/kitty18.component */
    "./src/app/kitty18/kitty18.component.ts");
    /* harmony import */


    var _kitty19_kitty19_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./kitty19/kitty19.component */
    "./src/app/kitty19/kitty19.component.ts");
    /* harmony import */


    var _kitty20_kitty20_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./kitty20/kitty20.component */
    "./src/app/kitty20/kitty20.component.ts");
    /* harmony import */


    var _kitty21_kitty21_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./kitty21/kitty21.component */
    "./src/app/kitty21/kitty21.component.ts");
    /* harmony import */


    var _kitty22_kitty22_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./kitty22/kitty22.component */
    "./src/app/kitty22/kitty22.component.ts");
    /* harmony import */


    var _kitty23_kitty23_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./kitty23/kitty23.component */
    "./src/app/kitty23/kitty23.component.ts");
    /* harmony import */


    var _kitty24_kitty24_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./kitty24/kitty24.component */
    "./src/app/kitty24/kitty24.component.ts");
    /* harmony import */


    var _kitty25_kitty25_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./kitty25/kitty25.component */
    "./src/app/kitty25/kitty25.component.ts");
    /* harmony import */


    var _kitty26_kitty26_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./kitty26/kitty26.component */
    "./src/app/kitty26/kitty26.component.ts");

    var AppModule = /*#__PURE__*/_createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });

    AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _kitty1_kitty1_component__WEBPACK_IMPORTED_MODULE_4__["Kitty1Component"], _total_collection_total_collection_component__WEBPACK_IMPORTED_MODULE_5__["TotalCollectionComponent"], _kitty2_kitty2_component__WEBPACK_IMPORTED_MODULE_6__["Kitty2Component"], _kitty3_kitty3_component__WEBPACK_IMPORTED_MODULE_7__["Kitty3Component"], _kitty4_kitty4_component__WEBPACK_IMPORTED_MODULE_8__["Kitty4Component"], _kitty5_kitty5_component__WEBPACK_IMPORTED_MODULE_9__["Kitty5Component"], _kitty6_kitty6_component__WEBPACK_IMPORTED_MODULE_10__["Kitty6Component"], _kitty7_kitty7_component__WEBPACK_IMPORTED_MODULE_11__["Kitty7Component"], _kitty8_kitty8_component__WEBPACK_IMPORTED_MODULE_12__["Kitty8Component"], _kitty9_kitty9_component__WEBPACK_IMPORTED_MODULE_13__["Kitty9Component"], _kitty10_kitty10_component__WEBPACK_IMPORTED_MODULE_14__["Kitty10Component"], _kitty11_kitty11_component__WEBPACK_IMPORTED_MODULE_15__["Kitty11Component"], _kitty12_kitty12_component__WEBPACK_IMPORTED_MODULE_16__["Kitty12Component"], _kitty13_kitty13_component__WEBPACK_IMPORTED_MODULE_17__["Kitty13Component"], _kitty14_kitty14_component__WEBPACK_IMPORTED_MODULE_18__["Kitty14Component"], _kitty15_kitty15_component__WEBPACK_IMPORTED_MODULE_19__["Kitty15Component"], _kitty16_kitty16_component__WEBPACK_IMPORTED_MODULE_20__["Kitty16Component"], _kitty17_kitty17_component__WEBPACK_IMPORTED_MODULE_21__["Kitty17Component"], _kitty18_kitty18_component__WEBPACK_IMPORTED_MODULE_22__["Kitty18Component"], _kitty19_kitty19_component__WEBPACK_IMPORTED_MODULE_23__["Kitty19Component"], _kitty20_kitty20_component__WEBPACK_IMPORTED_MODULE_24__["Kitty20Component"], _kitty21_kitty21_component__WEBPACK_IMPORTED_MODULE_25__["Kitty21Component"], _kitty22_kitty22_component__WEBPACK_IMPORTED_MODULE_26__["Kitty22Component"], _kitty23_kitty23_component__WEBPACK_IMPORTED_MODULE_27__["Kitty23Component"], _kitty24_kitty24_component__WEBPACK_IMPORTED_MODULE_28__["Kitty24Component"], _kitty25_kitty25_component__WEBPACK_IMPORTED_MODULE_29__["Kitty25Component"], _kitty26_kitty26_component__WEBPACK_IMPORTED_MODULE_30__["Kitty26Component"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _kitty1_kitty1_component__WEBPACK_IMPORTED_MODULE_4__["Kitty1Component"], _total_collection_total_collection_component__WEBPACK_IMPORTED_MODULE_5__["TotalCollectionComponent"], _kitty2_kitty2_component__WEBPACK_IMPORTED_MODULE_6__["Kitty2Component"], _kitty3_kitty3_component__WEBPACK_IMPORTED_MODULE_7__["Kitty3Component"], _kitty4_kitty4_component__WEBPACK_IMPORTED_MODULE_8__["Kitty4Component"], _kitty5_kitty5_component__WEBPACK_IMPORTED_MODULE_9__["Kitty5Component"], _kitty6_kitty6_component__WEBPACK_IMPORTED_MODULE_10__["Kitty6Component"], _kitty7_kitty7_component__WEBPACK_IMPORTED_MODULE_11__["Kitty7Component"], _kitty8_kitty8_component__WEBPACK_IMPORTED_MODULE_12__["Kitty8Component"], _kitty9_kitty9_component__WEBPACK_IMPORTED_MODULE_13__["Kitty9Component"], _kitty10_kitty10_component__WEBPACK_IMPORTED_MODULE_14__["Kitty10Component"], _kitty11_kitty11_component__WEBPACK_IMPORTED_MODULE_15__["Kitty11Component"], _kitty12_kitty12_component__WEBPACK_IMPORTED_MODULE_16__["Kitty12Component"], _kitty13_kitty13_component__WEBPACK_IMPORTED_MODULE_17__["Kitty13Component"], _kitty14_kitty14_component__WEBPACK_IMPORTED_MODULE_18__["Kitty14Component"], _kitty15_kitty15_component__WEBPACK_IMPORTED_MODULE_19__["Kitty15Component"], _kitty16_kitty16_component__WEBPACK_IMPORTED_MODULE_20__["Kitty16Component"], _kitty17_kitty17_component__WEBPACK_IMPORTED_MODULE_21__["Kitty17Component"], _kitty18_kitty18_component__WEBPACK_IMPORTED_MODULE_22__["Kitty18Component"], _kitty19_kitty19_component__WEBPACK_IMPORTED_MODULE_23__["Kitty19Component"], _kitty20_kitty20_component__WEBPACK_IMPORTED_MODULE_24__["Kitty20Component"], _kitty21_kitty21_component__WEBPACK_IMPORTED_MODULE_25__["Kitty21Component"], _kitty22_kitty22_component__WEBPACK_IMPORTED_MODULE_26__["Kitty22Component"], _kitty23_kitty23_component__WEBPACK_IMPORTED_MODULE_27__["Kitty23Component"], _kitty24_kitty24_component__WEBPACK_IMPORTED_MODULE_28__["Kitty24Component"], _kitty25_kitty25_component__WEBPACK_IMPORTED_MODULE_29__["Kitty25Component"], _kitty26_kitty26_component__WEBPACK_IMPORTED_MODULE_30__["Kitty26Component"]],
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
      return ["/"];
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

    Kitty1Component.??fac = function Kitty1Component_Factory(t) {
      return new (t || Kitty1Component)();
    };

    Kitty1Component.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: Kitty1Component,
      selectors: [["app-kitty1"]],
      decls: 31,
      vars: 2,
      consts: [[1, "btn", "btn-success", 3, "routerLink"], [1, "container"], [1, "left"], ["src", "https://lh3.googleusercontent.com/9ShmIQZHmlG3DdMNHV8OdHkVNxp9TdGWlXtVHMTyz5lon90QB3MSHhKKQA8HsOyEwSiR6vJu4qNNuYvxaK1mU2ey5gLY95qBOXMgtq08rgn9jB7CffOIpgcSCSMGx0K0lH3J6eYV1g=w2400", "alt", "Kitty1 NFT", 1, "nftImage"], [1, "right"], ["href", "https://polygonscan.com/address/0x2953399124f0cbb46d2cbacd8a89cf0599974963"], ["target", "_blank", "href", "https://lh3.googleusercontent.com/9ShmIQZHmlG3DdMNHV8OdHkVNxp9TdGWlXtVHMTyz5lon90QB3MSHhKKQA8HsOyEwSiR6vJu4qNNuYvxaK1mU2ey5gLY95qBOXMgtq08rgn9jB7CffOIpgcSCSMGx0K0lH3J6eYV1g=w2400"], ["target", "_blank", "href", "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/80366395629522486436785199915095687810879187654138836265477219824162838675457", 1, "btn", "btn-primary"]],
      template: function Kitty1Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " Kitty #Buco");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Contract Address: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "0x2953399124f0cbb46d2cbacd8a89cf0599974963");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Token ID:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, " 80366395629522486436785199915095687810879187654138836265477219824162838675457");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Blockchain:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, " Polygon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Direct NFT Image Link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "View in OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](1, _c0));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: [".nftImage[_ngcontent-%COMP%] {\n  border: 5px solid black;\n  padding: 10px;\n  background: rgba(201, 201, 201, 0.5);\n}\n\n.left[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  word-wrap: break-word;\n}\n\n@media screen and (max-width: 560px) {\n  .nftImage[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 10px;\n  }\n\n  .left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%] {\n    height: 100%;\n    max-width: 90%;\n    display: block;\n  }\n}\n\n@media screen and (min-width: 561px) {\n  .nftImage[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n\n  .left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%] {\n    height: 100%;\n    max-width: 50%;\n    display: inline-block;\n    vertical-align: top;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aWxzb25yYW1zdGVhZC9EZXNrdG9wL25ld1Byb2plY3RzMjAyMS9raXR0eWNsdWIvcHVibGljL3NyYy9hcHAva2l0dHkxL2tpdHR5MS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAva2l0dHkxL2tpdHR5MS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLG9DQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxrQkFBQTtBQ0VGOztBREFBO0VBQ0UscUJBQUE7QUNHRjs7QURBQTtFQUNFO0lBQ0UsV0FBQTtJQUNBLGdCQUFBO0VDR0Y7O0VEREE7O0lBRUUsWUFBQTtJQUNBLGNBQUE7SUFDQSxjQUFBO0VDSUY7QUFDRjs7QURGQTtFQUNFO0lBQ0UsVUFBQTtFQ0lGOztFREZBOztJQUVFLFlBQUE7SUFDQSxjQUFBO0lBQ0EscUJBQUE7SUFDQSxtQkFBQTtFQ0tGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9raXR0eTEva2l0dHkxLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5mdEltYWdlIHtcbiAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yOiAjYzljOWM5LCAkYWxwaGE6IDAuNSk7XG59XG4ubGVmdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5yaWdodCBwIHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NjBweCkge1xuICAubmZ0SW1hZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbiAgLmxlZnQsXG4gIC5yaWdodCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC13aWR0aDogOTAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NjFweCkge1xuICAubmZ0SW1hZ2Uge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbiAgLmxlZnQsXG4gIC5yaWdodCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC13aWR0aDogNTAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB9XG59XG4iLCIubmZ0SW1hZ2Uge1xuICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyMDEsIDIwMSwgMjAxLCAwLjUpO1xufVxuXG4ubGVmdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnJpZ2h0IHAge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2MHB4KSB7XG4gIC5uZnRJbWFnZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuXG4gIC5sZWZ0LFxuLnJpZ2h0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA5MCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU2MXB4KSB7XG4gIC5uZnRJbWFnZSB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxuXG4gIC5sZWZ0LFxuLnJpZ2h0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA1MCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](Kitty1Component, [{
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
      return ["/"];
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

    Kitty10Component.??fac = function Kitty10Component_Factory(t) {
      return new (t || Kitty10Component)();
    };

    Kitty10Component.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: Kitty10Component,
      selectors: [["app-kitty10"]],
      decls: 31,
      vars: 2,
      consts: [[1, "btn", "btn-success", 3, "routerLink"], [1, "container"], [1, "left"], ["src", "https://lh3.googleusercontent.com/VzzwueCkjCwxdSMG5eaR579MzT40nWZ_yAIpsrlo58HaV23-C9bJh-NV5_esngtai3uUB9DGKPLi0t-LIJA4QZJzrr-2y0iYKB1c1NRcA3QTNZ7ENEYIbahOLUyYcffZjpMvPQ80nA=w2400", "alt", "Kitty9 NFT", 1, "nftImage"], [1, "right"], ["href", "https://polygonscan.com/address/0x2953399124f0cbb46d2cbacd8a89cf0599974963"], ["target", "_blank", "href", "https://lh3.googleusercontent.com/VzzwueCkjCwxdSMG5eaR579MzT40nWZ_yAIpsrlo58HaV23-C9bJh-NV5_esngtai3uUB9DGKPLi0t-LIJA4QZJzrr-2y0iYKB1c1NRcA3QTNZ7ENEYIbahOLUyYcffZjpMvPQ80nA=w2400"], ["target", "_blank", "href", "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/80366395629522486436785199915095687810879187654138836265477219834058443325441", 1, "btn", "btn-primary"]],
      template: function Kitty10Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " Kitty #9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Contract Address: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "0x2953399124f0cbb46d2cbacd8a89cf0599974963");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Token ID:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, " 80366395629522486436785199915095687810879187654138836265477219834058443325441");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Blockchain:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, " Polygon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Direct NFT Image Link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "View in OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](1, _c0));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: [".nftImage[_ngcontent-%COMP%] {\n  border: 5px solid black;\n  padding: 10px;\n  background: rgba(201, 201, 201, 0.5);\n}\n\n.left[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  word-wrap: break-word;\n}\n\n@media screen and (max-width: 560px) {\n  .nftImage[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 10px;\n  }\n\n  .left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%] {\n    height: 100%;\n    max-width: 90%;\n    display: block;\n  }\n}\n\n@media screen and (min-width: 561px) {\n  .nftImage[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n\n  .left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%] {\n    height: 100%;\n    max-width: 50%;\n    display: inline-block;\n    vertical-align: top;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aWxzb25yYW1zdGVhZC9EZXNrdG9wL25ld1Byb2plY3RzMjAyMS9raXR0eWNsdWIvcHVibGljL3NyYy9hcHAva2l0dHkxMC9raXR0eTEwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9raXR0eTEwL2tpdHR5MTAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxvQ0FBQTtBQ0NGOztBRENBO0VBQ0Usa0JBQUE7QUNFRjs7QURBQTtFQUNFLHFCQUFBO0FDR0Y7O0FEQUE7RUFDRTtJQUNFLFdBQUE7SUFDQSxnQkFBQTtFQ0dGOztFRERBOztJQUVFLFlBQUE7SUFDQSxjQUFBO0lBQ0EsY0FBQTtFQ0lGO0FBQ0Y7O0FERkE7RUFDRTtJQUNFLFVBQUE7RUNJRjs7RURGQTs7SUFFRSxZQUFBO0lBQ0EsY0FBQTtJQUNBLHFCQUFBO0lBQ0EsbUJBQUE7RUNLRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAva2l0dHkxMC9raXR0eTEwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5mdEltYWdlIHtcbiAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yOiAjYzljOWM5LCAkYWxwaGE6IDAuNSk7XG59XG4ubGVmdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5yaWdodCBwIHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NjBweCkge1xuICAubmZ0SW1hZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbiAgLmxlZnQsXG4gIC5yaWdodCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC13aWR0aDogOTAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NjFweCkge1xuICAubmZ0SW1hZ2Uge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbiAgLmxlZnQsXG4gIC5yaWdodCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC13aWR0aDogNTAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB9XG59XG4iLCIubmZ0SW1hZ2Uge1xuICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyMDEsIDIwMSwgMjAxLCAwLjUpO1xufVxuXG4ubGVmdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnJpZ2h0IHAge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2MHB4KSB7XG4gIC5uZnRJbWFnZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuXG4gIC5sZWZ0LFxuLnJpZ2h0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA5MCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU2MXB4KSB7XG4gIC5uZnRJbWFnZSB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxuXG4gIC5sZWZ0LFxuLnJpZ2h0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA1MCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](Kitty10Component, [{
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
      return ["/"];
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

    Kitty11Component.??fac = function Kitty11Component_Factory(t) {
      return new (t || Kitty11Component)();
    };

    Kitty11Component.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: Kitty11Component,
      selectors: [["app-kitty11"]],
      decls: 31,
      vars: 2,
      consts: [[1, "btn", "btn-success", 3, "routerLink"], [1, "container"], [1, "left"], ["src", "https://lh3.googleusercontent.com/TsT7IWS255CeXV0-JLVpyRN4f6O1GtuBxxgZ_rArkdZ6tIMJMK4lX0JwCZZrfJ16IgvBQlixE_DFtlNQeA9RDMjqma5qCzyF8ezuo7utk96amqdm0X9S7j7YcbjXpgAAtkaQdJ7LcA=w2400", "alt", "Kitty10 NFT", 1, "nftImage"], [1, "right"], ["href", "https://polygonscan.com/address/0x2953399124f0cbb46d2cbacd8a89cf0599974963"], ["target", "_blank", "href", "https://lh3.googleusercontent.com/TsT7IWS255CeXV0-JLVpyRN4f6O1GtuBxxgZ_rArkdZ6tIMJMK4lX0JwCZZrfJ16IgvBQlixE_DFtlNQeA9RDMjqma5qCzyF8ezuo7utk96amqdm0X9S7j7YcbjXpgAAtkaQdJ7LcA=w2400"], ["target", "_blank", "href", "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/80366395629522486436785199915095687810879187654138836265477219835157954953217", 1, "btn", "btn-primary"]],
      template: function Kitty11Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " Kitty #10");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Contract Address: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "0x2953399124f0cbb46d2cbacd8a89cf0599974963");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Token ID:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, " 80366395629522486436785199915095687810879187654138836265477219835157954953217");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Blockchain:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, " Polygon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Direct NFT Image Link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "View in OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](1, _c0));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: [".nftImage[_ngcontent-%COMP%] {\n  border: 5px solid black;\n  padding: 10px;\n  background: rgba(201, 201, 201, 0.5);\n}\n\n.left[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  word-wrap: break-word;\n}\n\n@media screen and (max-width: 560px) {\n  .nftImage[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 10px;\n  }\n\n  .left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%] {\n    height: 100%;\n    max-width: 90%;\n    display: block;\n  }\n}\n\n@media screen and (min-width: 561px) {\n  .nftImage[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n\n  .left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%] {\n    height: 100%;\n    max-width: 50%;\n    display: inline-block;\n    vertical-align: top;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aWxzb25yYW1zdGVhZC9EZXNrdG9wL25ld1Byb2plY3RzMjAyMS9raXR0eWNsdWIvcHVibGljL3NyYy9hcHAva2l0dHkxMS9raXR0eTExLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9raXR0eTExL2tpdHR5MTEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxvQ0FBQTtBQ0NGOztBRENBO0VBQ0Usa0JBQUE7QUNFRjs7QURBQTtFQUNFLHFCQUFBO0FDR0Y7O0FEQUE7RUFDRTtJQUNFLFdBQUE7SUFDQSxnQkFBQTtFQ0dGOztFRERBOztJQUVFLFlBQUE7SUFDQSxjQUFBO0lBQ0EsY0FBQTtFQ0lGO0FBQ0Y7O0FERkE7RUFDRTtJQUNFLFVBQUE7RUNJRjs7RURGQTs7SUFFRSxZQUFBO0lBQ0EsY0FBQTtJQUNBLHFCQUFBO0lBQ0EsbUJBQUE7RUNLRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAva2l0dHkxMS9raXR0eTExLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5mdEltYWdlIHtcbiAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yOiAjYzljOWM5LCAkYWxwaGE6IDAuNSk7XG59XG4ubGVmdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5yaWdodCBwIHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NjBweCkge1xuICAubmZ0SW1hZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbiAgLmxlZnQsXG4gIC5yaWdodCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC13aWR0aDogOTAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NjFweCkge1xuICAubmZ0SW1hZ2Uge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbiAgLmxlZnQsXG4gIC5yaWdodCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC13aWR0aDogNTAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB9XG59XG4iLCIubmZ0SW1hZ2Uge1xuICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyMDEsIDIwMSwgMjAxLCAwLjUpO1xufVxuXG4ubGVmdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnJpZ2h0IHAge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2MHB4KSB7XG4gIC5uZnRJbWFnZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuXG4gIC5sZWZ0LFxuLnJpZ2h0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA5MCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU2MXB4KSB7XG4gIC5uZnRJbWFnZSB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxuXG4gIC5sZWZ0LFxuLnJpZ2h0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA1MCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](Kitty11Component, [{
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
      return ["/"];
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

    Kitty12Component.??fac = function Kitty12Component_Factory(t) {
      return new (t || Kitty12Component)();
    };

    Kitty12Component.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: Kitty12Component,
      selectors: [["app-kitty12"]],
      decls: 31,
      vars: 2,
      consts: [[1, "btn", "btn-success", 3, "routerLink"], [1, "container"], [1, "left"], ["src", "https://lh3.googleusercontent.com/N1HvyMZLbrFPC3MLLzLD5Xwaw9ozuZrhb6XyAuCK6UiolKyBltjGMjdOLzYtPKZDShKVEzZpIIhWdhVhXZMedEvV3-z5YtMsgQtRT9sVCG_EbEbtB-FFRLp-m1u4GJW92joBoIfUcA=w2400", "alt", "Kitty10 NFT", 1, "nftImage"], [1, "right"], ["href", "https://polygonscan.com/address/0x2953399124f0cbb46d2cbacd8a89cf0599974963"], ["target", "_blank", "href", "https://lh3.googleusercontent.com/N1HvyMZLbrFPC3MLLzLD5Xwaw9ozuZrhb6XyAuCK6UiolKyBltjGMjdOLzYtPKZDShKVEzZpIIhWdhVhXZMedEvV3-z5YtMsgQtRT9sVCG_EbEbtB-FFRLp-m1u4GJW92joBoIfUcA=w2400"], ["target", "_blank", "href", "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/80366395629522486436785199915095687810879187654138836265477219836257466580993", 1, "btn", "btn-primary"]],
      template: function Kitty12Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " Kitty #11");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Contract Address: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "0x2953399124f0cbb46d2cbacd8a89cf0599974963");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Token ID:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, " 80366395629522486436785199915095687810879187654138836265477219836257466580993");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Blockchain:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, " Polygon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Direct NFT Image Link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "View in OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](1, _c0));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: [".nftImage[_ngcontent-%COMP%] {\n  border: 5px solid black;\n  padding: 10px;\n  background: rgba(201, 201, 201, 0.5);\n}\n\n.left[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  word-wrap: break-word;\n}\n\n@media screen and (max-width: 560px) {\n  .nftImage[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 10px;\n  }\n\n  .left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%] {\n    height: 100%;\n    max-width: 90%;\n    display: block;\n  }\n}\n\n@media screen and (min-width: 561px) {\n  .nftImage[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n\n  .left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%] {\n    height: 100%;\n    max-width: 50%;\n    display: inline-block;\n    vertical-align: top;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aWxzb25yYW1zdGVhZC9EZXNrdG9wL25ld1Byb2plY3RzMjAyMS9raXR0eWNsdWIvcHVibGljL3NyYy9hcHAva2l0dHkxMi9raXR0eTEyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9raXR0eTEyL2tpdHR5MTIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxvQ0FBQTtBQ0NGOztBRENBO0VBQ0Usa0JBQUE7QUNFRjs7QURBQTtFQUNFLHFCQUFBO0FDR0Y7O0FEQUE7RUFDRTtJQUNFLFdBQUE7SUFDQSxnQkFBQTtFQ0dGOztFRERBOztJQUVFLFlBQUE7SUFDQSxjQUFBO0lBQ0EsY0FBQTtFQ0lGO0FBQ0Y7O0FERkE7RUFDRTtJQUNFLFVBQUE7RUNJRjs7RURGQTs7SUFFRSxZQUFBO0lBQ0EsY0FBQTtJQUNBLHFCQUFBO0lBQ0EsbUJBQUE7RUNLRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAva2l0dHkxMi9raXR0eTEyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5mdEltYWdlIHtcbiAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yOiAjYzljOWM5LCAkYWxwaGE6IDAuNSk7XG59XG4ubGVmdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5yaWdodCBwIHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NjBweCkge1xuICAubmZ0SW1hZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbiAgLmxlZnQsXG4gIC5yaWdodCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC13aWR0aDogOTAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NjFweCkge1xuICAubmZ0SW1hZ2Uge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbiAgLmxlZnQsXG4gIC5yaWdodCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC13aWR0aDogNTAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB9XG59XG4iLCIubmZ0SW1hZ2Uge1xuICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyMDEsIDIwMSwgMjAxLCAwLjUpO1xufVxuXG4ubGVmdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnJpZ2h0IHAge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2MHB4KSB7XG4gIC5uZnRJbWFnZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuXG4gIC5sZWZ0LFxuLnJpZ2h0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA5MCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU2MXB4KSB7XG4gIC5uZnRJbWFnZSB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxuXG4gIC5sZWZ0LFxuLnJpZ2h0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA1MCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](Kitty12Component, [{
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
  "./src/app/kitty13/kitty13.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/kitty13/kitty13.component.ts ***!
    \**********************************************/

  /*! exports provided: Kitty13Component */

  /***/
  function srcAppKitty13Kitty13ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Kitty13Component", function () {
      return Kitty13Component;
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
      return ["/"];
    };

    var Kitty13Component = /*#__PURE__*/function () {
      function Kitty13Component() {
        _classCallCheck(this, Kitty13Component);
      }

      _createClass(Kitty13Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Kitty13Component;
    }();

    Kitty13Component.??fac = function Kitty13Component_Factory(t) {
      return new (t || Kitty13Component)();
    };

    Kitty13Component.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: Kitty13Component,
      selectors: [["app-kitty13"]],
      decls: 31,
      vars: 2,
      consts: [[1, "btn", "btn-success", 3, "routerLink"], [1, "container"], [1, "left"], ["src", "https://lh3.googleusercontent.com/dowd0px8G3o2ltjHRzwIWXOpc9HuKjmG9ab0mTjGFWICgJ_xZEGaspWmMrm4RM6fsdvQy4Tzn0a4LHu4S0fwEEehtQtJ1urKZln-cjrfA-2bGC15RP_PN02gDf_C7kAv28y9ypVWtQ=w2400", "alt", "Kitty10 NFT", 1, "nftImage"], [1, "right"], ["href", "https://polygonscan.com/address/0x2953399124f0cbb46d2cbacd8a89cf0599974963"], ["target", "_blank", "href", "https://lh3.googleusercontent.com/dowd0px8G3o2ltjHRzwIWXOpc9HuKjmG9ab0mTjGFWICgJ_xZEGaspWmMrm4RM6fsdvQy4Tzn0a4LHu4S0fwEEehtQtJ1urKZln-cjrfA-2bGC15RP_PN02gDf_C7kAv28y9ypVWtQ=w2400"], ["target", "_blank", "href", "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/80366395629522486436785199915095687810879187654138836265477219837356978208769", 1, "btn", "btn-primary"]],
      template: function Kitty13Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " Kitty #12");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Contract Address: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "0x2953399124f0cbb46d2cbacd8a89cf0599974963");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Token ID:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, " 80366395629522486436785199915095687810879187654138836265477219837356978208769");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Blockchain:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, " Polygon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Direct NFT Image Link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "View in OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](1, _c0));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: [".nftImage[_ngcontent-%COMP%] {\n  border: 5px solid black;\n  padding: 10px;\n  background: rgba(201, 201, 201, 0.5);\n}\n\n.left[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  word-wrap: break-word;\n}\n\n@media screen and (max-width: 560px) {\n  .nftImage[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 10px;\n  }\n\n  .left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%] {\n    height: 100%;\n    max-width: 90%;\n    display: block;\n  }\n}\n\n@media screen and (min-width: 561px) {\n  .nftImage[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n\n  .left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%] {\n    height: 100%;\n    max-width: 50%;\n    display: inline-block;\n    vertical-align: top;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aWxzb25yYW1zdGVhZC9EZXNrdG9wL25ld1Byb2plY3RzMjAyMS9raXR0eWNsdWIvcHVibGljL3NyYy9hcHAva2l0dHkxMy9raXR0eTEzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9raXR0eTEzL2tpdHR5MTMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxvQ0FBQTtBQ0NGOztBRENBO0VBQ0Usa0JBQUE7QUNFRjs7QURBQTtFQUNFLHFCQUFBO0FDR0Y7O0FEQUE7RUFDRTtJQUNFLFdBQUE7SUFDQSxnQkFBQTtFQ0dGOztFRERBOztJQUVFLFlBQUE7SUFDQSxjQUFBO0lBQ0EsY0FBQTtFQ0lGO0FBQ0Y7O0FERkE7RUFDRTtJQUNFLFVBQUE7RUNJRjs7RURGQTs7SUFFRSxZQUFBO0lBQ0EsY0FBQTtJQUNBLHFCQUFBO0lBQ0EsbUJBQUE7RUNLRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAva2l0dHkxMy9raXR0eTEzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5mdEltYWdlIHtcbiAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yOiAjYzljOWM5LCAkYWxwaGE6IDAuNSk7XG59XG4ubGVmdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5yaWdodCBwIHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NjBweCkge1xuICAubmZ0SW1hZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbiAgLmxlZnQsXG4gIC5yaWdodCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC13aWR0aDogOTAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NjFweCkge1xuICAubmZ0SW1hZ2Uge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbiAgLmxlZnQsXG4gIC5yaWdodCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC13aWR0aDogNTAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB9XG59XG4iLCIubmZ0SW1hZ2Uge1xuICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyMDEsIDIwMSwgMjAxLCAwLjUpO1xufVxuXG4ubGVmdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnJpZ2h0IHAge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2MHB4KSB7XG4gIC5uZnRJbWFnZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuXG4gIC5sZWZ0LFxuLnJpZ2h0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA5MCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU2MXB4KSB7XG4gIC5uZnRJbWFnZSB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxuXG4gIC5sZWZ0LFxuLnJpZ2h0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA1MCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](Kitty13Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-kitty13',
          templateUrl: './kitty13.component.html',
          styleUrls: ['./kitty13.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/kitty14/kitty14.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/kitty14/kitty14.component.ts ***!
    \**********************************************/

  /*! exports provided: Kitty14Component */

  /***/
  function srcAppKitty14Kitty14ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Kitty14Component", function () {
      return Kitty14Component;
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
      return ["/"];
    };

    var Kitty14Component = /*#__PURE__*/function () {
      function Kitty14Component() {
        _classCallCheck(this, Kitty14Component);
      }

      _createClass(Kitty14Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Kitty14Component;
    }();

    Kitty14Component.??fac = function Kitty14Component_Factory(t) {
      return new (t || Kitty14Component)();
    };

    Kitty14Component.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: Kitty14Component,
      selectors: [["app-kitty14"]],
      decls: 31,
      vars: 2,
      consts: [[1, "btn", "btn-success", 3, "routerLink"], [1, "container"], [1, "left"], ["src", "https://lh3.googleusercontent.com/9y7D3rfXgMNkld6fjN4e3OQwRXy7zQ5wuP94LEGNkoLeTEf-G6lDWihVNJ7M3wExx3rCSZ1X1tkMOdGMfATW-ZYEMK4o9H9ncbJf44TDcInmlmUf3yVBKmgOCbCVwCvLm8XF-85oXA=w2400", "alt", "Kitty13 NFT", 1, "nftImage"], [1, "right"], ["href", "https://polygonscan.com/address/0x2953399124f0cbb46d2cbacd8a89cf0599974963"], ["target", "_blank", "href", "https://lh3.googleusercontent.com/9y7D3rfXgMNkld6fjN4e3OQwRXy7zQ5wuP94LEGNkoLeTEf-G6lDWihVNJ7M3wExx3rCSZ1X1tkMOdGMfATW-ZYEMK4o9H9ncbJf44TDcInmlmUf3yVBKmgOCbCVwCvLm8XF-85oXA=w2400"], ["target", "_blank", "href", "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/80366395629522486436785199915095687810879187654138836265477219838456489836545", 1, "btn", "btn-primary"]],
      template: function Kitty14Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " Kitty #12");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Contract Address: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "0x2953399124f0cbb46d2cbacd8a89cf0599974963");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Token ID:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, " 80366395629522486436785199915095687810879187654138836265477219838456489836545");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Blockchain:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, " Polygon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Direct NFT Image Link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "View in OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](1, _c0));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: [".nftImage[_ngcontent-%COMP%] {\n  border: 5px solid black;\n  padding: 10px;\n  background: rgba(201, 201, 201, 0.5);\n}\n\n.left[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  word-wrap: break-word;\n}\n\n@media screen and (max-width: 560px) {\n  .nftImage[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 10px;\n  }\n\n  .left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%] {\n    height: 100%;\n    max-width: 90%;\n    display: block;\n  }\n}\n\n@media screen and (min-width: 561px) {\n  .nftImage[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n\n  .left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%] {\n    height: 100%;\n    max-width: 50%;\n    display: inline-block;\n    vertical-align: top;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aWxzb25yYW1zdGVhZC9EZXNrdG9wL25ld1Byb2plY3RzMjAyMS9raXR0eWNsdWIvcHVibGljL3NyYy9hcHAva2l0dHkxNC9raXR0eTE0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9raXR0eTE0L2tpdHR5MTQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxvQ0FBQTtBQ0NGOztBRENBO0VBQ0Usa0JBQUE7QUNFRjs7QURBQTtFQUNFLHFCQUFBO0FDR0Y7O0FEQUE7RUFDRTtJQUNFLFdBQUE7SUFDQSxnQkFBQTtFQ0dGOztFRERBOztJQUVFLFlBQUE7SUFDQSxjQUFBO0lBQ0EsY0FBQTtFQ0lGO0FBQ0Y7O0FERkE7RUFDRTtJQUNFLFVBQUE7RUNJRjs7RURGQTs7SUFFRSxZQUFBO0lBQ0EsY0FBQTtJQUNBLHFCQUFBO0lBQ0EsbUJBQUE7RUNLRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAva2l0dHkxNC9raXR0eTE0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5mdEltYWdlIHtcbiAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yOiAjYzljOWM5LCAkYWxwaGE6IDAuNSk7XG59XG4ubGVmdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5yaWdodCBwIHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NjBweCkge1xuICAubmZ0SW1hZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbiAgLmxlZnQsXG4gIC5yaWdodCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC13aWR0aDogOTAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NjFweCkge1xuICAubmZ0SW1hZ2Uge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbiAgLmxlZnQsXG4gIC5yaWdodCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC13aWR0aDogNTAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB9XG59XG4iLCIubmZ0SW1hZ2Uge1xuICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyMDEsIDIwMSwgMjAxLCAwLjUpO1xufVxuXG4ubGVmdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnJpZ2h0IHAge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2MHB4KSB7XG4gIC5uZnRJbWFnZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuXG4gIC5sZWZ0LFxuLnJpZ2h0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA5MCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU2MXB4KSB7XG4gIC5uZnRJbWFnZSB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxuXG4gIC5sZWZ0LFxuLnJpZ2h0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA1MCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](Kitty14Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-kitty14',
          templateUrl: './kitty14.component.html',
          styleUrls: ['./kitty14.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/kitty15/kitty15.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/kitty15/kitty15.component.ts ***!
    \**********************************************/

  /*! exports provided: Kitty15Component */

  /***/
  function srcAppKitty15Kitty15ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Kitty15Component", function () {
      return Kitty15Component;
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
      return ["/"];
    };

    var Kitty15Component = /*#__PURE__*/function () {
      function Kitty15Component() {
        _classCallCheck(this, Kitty15Component);
      }

      _createClass(Kitty15Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Kitty15Component;
    }();

    Kitty15Component.??fac = function Kitty15Component_Factory(t) {
      return new (t || Kitty15Component)();
    };

    Kitty15Component.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: Kitty15Component,
      selectors: [["app-kitty15"]],
      decls: 31,
      vars: 2,
      consts: [[1, "btn", "btn-success", 3, "routerLink"], [1, "container"], [1, "left"], ["src", "https://lh3.googleusercontent.com/oVna6Hn9WxWMBiU0oKe89W253EdgucVN_vkC997xM-Uegpc1XisMFiXV-5aIm7ZO9qNRh-RLZdaLDhrchuf6YES2ljzG9oTMs5UgLqvEY4d3Y5OV-btNQQgQWo5zaYBlQKK4BB9sYQ=w2400", "alt", "Kitty14 NFT", 1, "nftImage"], [1, "right"], ["href", "https://polygonscan.com/address/0x2953399124f0cbb46d2cbacd8a89cf0599974963"], ["target", "_blank", "href", "https://lh3.googleusercontent.com/oVna6Hn9WxWMBiU0oKe89W253EdgucVN_vkC997xM-Uegpc1XisMFiXV-5aIm7ZO9qNRh-RLZdaLDhrchuf6YES2ljzG9oTMs5UgLqvEY4d3Y5OV-btNQQgQWo5zaYBlQKK4BB9sYQ=w2400"], ["target", "_blank", "href", "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/80366395629522486436785199915095687810879187654138836265477219839556001464321", 1, "btn", "btn-primary"]],
      template: function Kitty15Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " Kitty #14");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Contract Address: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "0x2953399124f0cbb46d2cbacd8a89cf0599974963");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Token ID:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, " 80366395629522486436785199915095687810879187654138836265477219839556001464321");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Blockchain:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, " Polygon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Direct NFT Image Link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "View in OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](1, _c0));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: [".nftImage[_ngcontent-%COMP%] {\n  border: 5px solid black;\n  padding: 10px;\n  background: rgba(201, 201, 201, 0.5);\n}\n\n.left[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  word-wrap: break-word;\n}\n\n@media screen and (max-width: 560px) {\n  .nftImage[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 10px;\n  }\n\n  .left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%] {\n    height: 100%;\n    max-width: 90%;\n    display: block;\n  }\n}\n\n@media screen and (min-width: 561px) {\n  .nftImage[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n\n  .left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%] {\n    height: 100%;\n    max-width: 50%;\n    display: inline-block;\n    vertical-align: top;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aWxzb25yYW1zdGVhZC9EZXNrdG9wL25ld1Byb2plY3RzMjAyMS9raXR0eWNsdWIvcHVibGljL3NyYy9hcHAva2l0dHkxNS9raXR0eTE1LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9raXR0eTE1L2tpdHR5MTUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxvQ0FBQTtBQ0NGOztBRENBO0VBQ0Usa0JBQUE7QUNFRjs7QURBQTtFQUNFLHFCQUFBO0FDR0Y7O0FEQUE7RUFDRTtJQUNFLFdBQUE7SUFDQSxnQkFBQTtFQ0dGOztFRERBOztJQUVFLFlBQUE7SUFDQSxjQUFBO0lBQ0EsY0FBQTtFQ0lGO0FBQ0Y7O0FERkE7RUFDRTtJQUNFLFVBQUE7RUNJRjs7RURGQTs7SUFFRSxZQUFBO0lBQ0EsY0FBQTtJQUNBLHFCQUFBO0lBQ0EsbUJBQUE7RUNLRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAva2l0dHkxNS9raXR0eTE1LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5mdEltYWdlIHtcbiAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yOiAjYzljOWM5LCAkYWxwaGE6IDAuNSk7XG59XG4ubGVmdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5yaWdodCBwIHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NjBweCkge1xuICAubmZ0SW1hZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbiAgLmxlZnQsXG4gIC5yaWdodCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC13aWR0aDogOTAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NjFweCkge1xuICAubmZ0SW1hZ2Uge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbiAgLmxlZnQsXG4gIC5yaWdodCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC13aWR0aDogNTAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB9XG59XG4iLCIubmZ0SW1hZ2Uge1xuICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyMDEsIDIwMSwgMjAxLCAwLjUpO1xufVxuXG4ubGVmdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnJpZ2h0IHAge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2MHB4KSB7XG4gIC5uZnRJbWFnZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuXG4gIC5sZWZ0LFxuLnJpZ2h0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA5MCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU2MXB4KSB7XG4gIC5uZnRJbWFnZSB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxuXG4gIC5sZWZ0LFxuLnJpZ2h0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA1MCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](Kitty15Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-kitty15',
          templateUrl: './kitty15.component.html',
          styleUrls: ['./kitty15.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/kitty16/kitty16.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/kitty16/kitty16.component.ts ***!
    \**********************************************/

  /*! exports provided: Kitty16Component */

  /***/
  function srcAppKitty16Kitty16ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Kitty16Component", function () {
      return Kitty16Component;
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
      return ["/"];
    };

    var Kitty16Component = /*#__PURE__*/function () {
      function Kitty16Component() {
        _classCallCheck(this, Kitty16Component);
      }

      _createClass(Kitty16Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Kitty16Component;
    }();

    Kitty16Component.??fac = function Kitty16Component_Factory(t) {
      return new (t || Kitty16Component)();
    };

    Kitty16Component.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: Kitty16Component,
      selectors: [["app-kitty16"]],
      decls: 31,
      vars: 2,
      consts: [[1, "btn", "btn-success", 3, "routerLink"], [1, "container"], [1, "left"], ["src", "https://lh3.googleusercontent.com/2pVz6xkRODdOx08Tc0vyw3OQE14Td5GRjzzpTuB81XudUIWG1UXwtvHhDfWVMQX3pUm6A_4JgFOumM5uHGf7hbxYo9tfigArpuZXroYSwavB4XYKJv5S_yx2EQb0Q0sTZ19BTDGvvg=w2400", "alt", "Kitty15 NFT", 1, "nftImage"], [1, "right"], ["href", "https://polygonscan.com/address/0x2953399124f0cbb46d2cbacd8a89cf0599974963"], ["target", "_blank", "href", "https://lh3.googleusercontent.com/2pVz6xkRODdOx08Tc0vyw3OQE14Td5GRjzzpTuB81XudUIWG1UXwtvHhDfWVMQX3pUm6A_4JgFOumM5uHGf7hbxYo9tfigArpuZXroYSwavB4XYKJv5S_yx2EQb0Q0sTZ19BTDGvvg=w2400"], ["target", "_blank", "href", "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/80366395629522486436785199915095687810879187654138836265477219840655513092097", 1, "btn", "btn-primary"]],
      template: function Kitty16Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " Kitty #15");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Contract Address: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "0x2953399124f0cbb46d2cbacd8a89cf0599974963");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Token ID:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, " 80366395629522486436785199915095687810879187654138836265477219840655513092097");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Blockchain:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, " Polygon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Direct NFT Image Link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "View in OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](1, _c0));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: [".nftImage[_ngcontent-%COMP%] {\n  border: 5px solid black;\n  padding: 10px;\n  background: rgba(201, 201, 201, 0.5);\n}\n\n.left[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  word-wrap: break-word;\n}\n\n@media screen and (max-width: 560px) {\n  .nftImage[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 10px;\n  }\n\n  .left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%] {\n    height: 100%;\n    max-width: 90%;\n    display: block;\n  }\n}\n\n@media screen and (min-width: 561px) {\n  .nftImage[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n\n  .left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%] {\n    height: 100%;\n    max-width: 50%;\n    display: inline-block;\n    vertical-align: top;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aWxzb25yYW1zdGVhZC9EZXNrdG9wL25ld1Byb2plY3RzMjAyMS9raXR0eWNsdWIvcHVibGljL3NyYy9hcHAva2l0dHkxNi9raXR0eTE2LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9raXR0eTE2L2tpdHR5MTYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxvQ0FBQTtBQ0NGOztBRENBO0VBQ0Usa0JBQUE7QUNFRjs7QURBQTtFQUNFLHFCQUFBO0FDR0Y7O0FEQUE7RUFDRTtJQUNFLFdBQUE7SUFDQSxnQkFBQTtFQ0dGOztFRERBOztJQUVFLFlBQUE7SUFDQSxjQUFBO0lBQ0EsY0FBQTtFQ0lGO0FBQ0Y7O0FERkE7RUFDRTtJQUNFLFVBQUE7RUNJRjs7RURGQTs7SUFFRSxZQUFBO0lBQ0EsY0FBQTtJQUNBLHFCQUFBO0lBQ0EsbUJBQUE7RUNLRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAva2l0dHkxNi9raXR0eTE2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5mdEltYWdlIHtcbiAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yOiAjYzljOWM5LCAkYWxwaGE6IDAuNSk7XG59XG4ubGVmdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5yaWdodCBwIHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NjBweCkge1xuICAubmZ0SW1hZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbiAgLmxlZnQsXG4gIC5yaWdodCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC13aWR0aDogOTAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NjFweCkge1xuICAubmZ0SW1hZ2Uge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbiAgLmxlZnQsXG4gIC5yaWdodCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC13aWR0aDogNTAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB9XG59XG4iLCIubmZ0SW1hZ2Uge1xuICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyMDEsIDIwMSwgMjAxLCAwLjUpO1xufVxuXG4ubGVmdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnJpZ2h0IHAge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2MHB4KSB7XG4gIC5uZnRJbWFnZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuXG4gIC5sZWZ0LFxuLnJpZ2h0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA5MCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU2MXB4KSB7XG4gIC5uZnRJbWFnZSB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxuXG4gIC5sZWZ0LFxuLnJpZ2h0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA1MCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](Kitty16Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-kitty16',
          templateUrl: './kitty16.component.html',
          styleUrls: ['./kitty16.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/kitty17/kitty17.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/kitty17/kitty17.component.ts ***!
    \**********************************************/

  /*! exports provided: Kitty17Component */

  /***/
  function srcAppKitty17Kitty17ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Kitty17Component", function () {
      return Kitty17Component;
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
      return ["/"];
    };

    var Kitty17Component = /*#__PURE__*/function () {
      function Kitty17Component() {
        _classCallCheck(this, Kitty17Component);
      }

      _createClass(Kitty17Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Kitty17Component;
    }();

    Kitty17Component.??fac = function Kitty17Component_Factory(t) {
      return new (t || Kitty17Component)();
    };

    Kitty17Component.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: Kitty17Component,
      selectors: [["app-kitty17"]],
      decls: 31,
      vars: 2,
      consts: [[1, "btn", "btn-success", 3, "routerLink"], [1, "container"], [1, "left"], ["src", "https://lh3.googleusercontent.com/vJrw3-sXuALWqjCFG9WRKhp7DbQhidRFxbSpZXdIBpTgOwkn9NorCyLKA8hWgEpSbWozhuZIuOxbjvlWaKDVWfgVhOo1-8_6Zvl2H35vjMDJbE3zgIYMTeG9ffAHdECcNOslouuRhQ=w2400", "alt", "Kitty16 NFT", 1, "nftImage"], [1, "right"], ["href", "https://polygonscan.com/address/0x2953399124f0cbb46d2cbacd8a89cf0599974963"], ["target", "_blank", "href", "https://lh3.googleusercontent.com/vJrw3-sXuALWqjCFG9WRKhp7DbQhidRFxbSpZXdIBpTgOwkn9NorCyLKA8hWgEpSbWozhuZIuOxbjvlWaKDVWfgVhOo1-8_6Zvl2H35vjMDJbE3zgIYMTeG9ffAHdECcNOslouuRhQ=w2400"], ["target", "_blank", "href", "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/80366395629522486436785199915095687810879187654138836265477219841755024719873", 1, "btn", "btn-primary"]],
      template: function Kitty17Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " Kitty #16");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Contract Address: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "0x2953399124f0cbb46d2cbacd8a89cf0599974963");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Token ID:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, " 80366395629522486436785199915095687810879187654138836265477219841755024719873");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Blockchain:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, " Polygon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Direct NFT Image Link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "View in OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](1, _c0));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: [".nftImage[_ngcontent-%COMP%] {\n  border: 5px solid black;\n  padding: 10px;\n  background: rgba(201, 201, 201, 0.5);\n}\n\n.left[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  word-wrap: break-word;\n}\n\n@media screen and (max-width: 560px) {\n  .nftImage[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 10px;\n  }\n\n  .left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%] {\n    height: 100%;\n    max-width: 90%;\n    display: block;\n  }\n}\n\n@media screen and (min-width: 561px) {\n  .nftImage[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n\n  .left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%] {\n    height: 100%;\n    max-width: 50%;\n    display: inline-block;\n    vertical-align: top;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aWxzb25yYW1zdGVhZC9EZXNrdG9wL25ld1Byb2plY3RzMjAyMS9raXR0eWNsdWIvcHVibGljL3NyYy9hcHAva2l0dHkxNy9raXR0eTE3LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9raXR0eTE3L2tpdHR5MTcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxvQ0FBQTtBQ0NGOztBRENBO0VBQ0Usa0JBQUE7QUNFRjs7QURBQTtFQUNFLHFCQUFBO0FDR0Y7O0FEQUE7RUFDRTtJQUNFLFdBQUE7SUFDQSxnQkFBQTtFQ0dGOztFRERBOztJQUVFLFlBQUE7SUFDQSxjQUFBO0lBQ0EsY0FBQTtFQ0lGO0FBQ0Y7O0FERkE7RUFDRTtJQUNFLFVBQUE7RUNJRjs7RURGQTs7SUFFRSxZQUFBO0lBQ0EsY0FBQTtJQUNBLHFCQUFBO0lBQ0EsbUJBQUE7RUNLRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAva2l0dHkxNy9raXR0eTE3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5mdEltYWdlIHtcbiAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yOiAjYzljOWM5LCAkYWxwaGE6IDAuNSk7XG59XG4ubGVmdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5yaWdodCBwIHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NjBweCkge1xuICAubmZ0SW1hZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbiAgLmxlZnQsXG4gIC5yaWdodCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC13aWR0aDogOTAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NjFweCkge1xuICAubmZ0SW1hZ2Uge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbiAgLmxlZnQsXG4gIC5yaWdodCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC13aWR0aDogNTAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB9XG59XG4iLCIubmZ0SW1hZ2Uge1xuICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyMDEsIDIwMSwgMjAxLCAwLjUpO1xufVxuXG4ubGVmdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnJpZ2h0IHAge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2MHB4KSB7XG4gIC5uZnRJbWFnZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuXG4gIC5sZWZ0LFxuLnJpZ2h0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA5MCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU2MXB4KSB7XG4gIC5uZnRJbWFnZSB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxuXG4gIC5sZWZ0LFxuLnJpZ2h0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA1MCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](Kitty17Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-kitty17',
          templateUrl: './kitty17.component.html',
          styleUrls: ['./kitty17.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/kitty18/kitty18.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/kitty18/kitty18.component.ts ***!
    \**********************************************/

  /*! exports provided: Kitty18Component */

  /***/
  function srcAppKitty18Kitty18ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Kitty18Component", function () {
      return Kitty18Component;
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
      return ["/"];
    };

    var Kitty18Component = /*#__PURE__*/function () {
      function Kitty18Component() {
        _classCallCheck(this, Kitty18Component);
      }

      _createClass(Kitty18Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Kitty18Component;
    }();

    Kitty18Component.??fac = function Kitty18Component_Factory(t) {
      return new (t || Kitty18Component)();
    };

    Kitty18Component.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: Kitty18Component,
      selectors: [["app-kitty18"]],
      decls: 31,
      vars: 2,
      consts: [[1, "btn", "btn-success", 3, "routerLink"], [1, "container"], [1, "left"], ["src", "https://lh3.googleusercontent.com/zI9tCVyqZ3K9ht8wDqISF23fLqGADmG_vabEhlLPAB92vuH3OlA1zKwO87VOAkL3dW4OBeMRSkKSnjn_-kX5-Vl1kqlaCNoZIRkShFVzpAH5cXvk4gXYys7Y6sxOBABpbJIpuw_ktA=w2400", "alt", "Kitty17 NFT", 1, "nftImage"], [1, "right"], ["href", "https://polygonscan.com/address/0x2953399124f0cbb46d2cbacd8a89cf0599974963"], ["target", "_blank", "href", "https://lh3.googleusercontent.com/zI9tCVyqZ3K9ht8wDqISF23fLqGADmG_vabEhlLPAB92vuH3OlA1zKwO87VOAkL3dW4OBeMRSkKSnjn_-kX5-Vl1kqlaCNoZIRkShFVzpAH5cXvk4gXYys7Y6sxOBABpbJIpuw_ktA=w2400"], ["target", "_blank", "href", "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/80366395629522486436785199915095687810879187654138836265477219842854536347649", 1, "btn", "btn-primary"]],
      template: function Kitty18Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " Kitty #17");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Contract Address: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "0x2953399124f0cbb46d2cbacd8a89cf0599974963");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Token ID:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, " 80366395629522486436785199915095687810879187654138836265477219842854536347649");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Blockchain:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, " Polygon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Direct NFT Image Link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "View in OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](1, _c0));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: [".nftImage[_ngcontent-%COMP%] {\n  border: 5px solid black;\n  padding: 10px;\n  background: rgba(201, 201, 201, 0.5);\n}\n\n.left[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  word-wrap: break-word;\n}\n\n@media screen and (max-width: 560px) {\n  .nftImage[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 10px;\n  }\n\n  .left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%] {\n    height: 100%;\n    max-width: 90%;\n    display: block;\n  }\n}\n\n@media screen and (min-width: 561px) {\n  .nftImage[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n\n  .left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%] {\n    height: 100%;\n    max-width: 50%;\n    display: inline-block;\n    vertical-align: top;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aWxzb25yYW1zdGVhZC9EZXNrdG9wL25ld1Byb2plY3RzMjAyMS9raXR0eWNsdWIvcHVibGljL3NyYy9hcHAva2l0dHkxOC9raXR0eTE4LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9raXR0eTE4L2tpdHR5MTguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxvQ0FBQTtBQ0NGOztBRENBO0VBQ0Usa0JBQUE7QUNFRjs7QURBQTtFQUNFLHFCQUFBO0FDR0Y7O0FEQUE7RUFDRTtJQUNFLFdBQUE7SUFDQSxnQkFBQTtFQ0dGOztFRERBOztJQUVFLFlBQUE7SUFDQSxjQUFBO0lBQ0EsY0FBQTtFQ0lGO0FBQ0Y7O0FERkE7RUFDRTtJQUNFLFVBQUE7RUNJRjs7RURGQTs7SUFFRSxZQUFBO0lBQ0EsY0FBQTtJQUNBLHFCQUFBO0lBQ0EsbUJBQUE7RUNLRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAva2l0dHkxOC9raXR0eTE4LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5mdEltYWdlIHtcbiAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yOiAjYzljOWM5LCAkYWxwaGE6IDAuNSk7XG59XG4ubGVmdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5yaWdodCBwIHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NjBweCkge1xuICAubmZ0SW1hZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbiAgLmxlZnQsXG4gIC5yaWdodCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC13aWR0aDogOTAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NjFweCkge1xuICAubmZ0SW1hZ2Uge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbiAgLmxlZnQsXG4gIC5yaWdodCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC13aWR0aDogNTAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB9XG59XG4iLCIubmZ0SW1hZ2Uge1xuICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyMDEsIDIwMSwgMjAxLCAwLjUpO1xufVxuXG4ubGVmdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnJpZ2h0IHAge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2MHB4KSB7XG4gIC5uZnRJbWFnZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuXG4gIC5sZWZ0LFxuLnJpZ2h0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA5MCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU2MXB4KSB7XG4gIC5uZnRJbWFnZSB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxuXG4gIC5sZWZ0LFxuLnJpZ2h0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA1MCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](Kitty18Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-kitty18',
          templateUrl: './kitty18.component.html',
          styleUrls: ['./kitty18.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/kitty19/kitty19.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/kitty19/kitty19.component.ts ***!
    \**********************************************/

  /*! exports provided: Kitty19Component */

  /***/
  function srcAppKitty19Kitty19ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Kitty19Component", function () {
      return Kitty19Component;
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
      return ["/"];
    };

    var Kitty19Component = /*#__PURE__*/function () {
      function Kitty19Component() {
        _classCallCheck(this, Kitty19Component);
      }

      _createClass(Kitty19Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Kitty19Component;
    }();

    Kitty19Component.??fac = function Kitty19Component_Factory(t) {
      return new (t || Kitty19Component)();
    };

    Kitty19Component.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: Kitty19Component,
      selectors: [["app-kitty19"]],
      decls: 31,
      vars: 2,
      consts: [[1, "btn", "btn-success", 3, "routerLink"], [1, "container"], [1, "left"], ["src", "https://lh3.googleusercontent.com/WGT8e7MdChlTmute99dLfhhtfSc5almDce0CM8KaeSde07qD8W-h5wJOtl3nnI2O8J7uKOUZXjSnO9reLgND5zFzhNRMpTcQbMrPCFwxr937-1vxx7Aqyrr2y2A_j_sdp9BMkI5MeQ=w2400", "alt", "Kitty18 NFT", 1, "nftImage"], [1, "right"], ["href", "https://polygonscan.com/address/0x2953399124f0cbb46d2cbacd8a89cf0599974963"], ["target", "_blank", "href", "https://lh3.googleusercontent.com/WGT8e7MdChlTmute99dLfhhtfSc5almDce0CM8KaeSde07qD8W-h5wJOtl3nnI2O8J7uKOUZXjSnO9reLgND5zFzhNRMpTcQbMrPCFwxr937-1vxx7Aqyrr2y2A_j_sdp9BMkI5MeQ=w2400"], ["target", "_blank", "href", "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/80366395629522486436785199915095687810879187654138836265477219843954047975425", 1, "btn", "btn-primary"]],
      template: function Kitty19Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " Kitty #18");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Contract Address: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "0x2953399124f0cbb46d2cbacd8a89cf0599974963");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Token ID:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, " 80366395629522486436785199915095687810879187654138836265477219842854536347649");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Blockchain:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, " Polygon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Direct NFT Image Link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "View in OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](1, _c0));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: [".nftImage[_ngcontent-%COMP%] {\n  border: 5px solid black;\n  padding: 10px;\n  background: rgba(201, 201, 201, 0.5);\n}\n\n.left[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  word-wrap: break-word;\n}\n\n@media screen and (max-width: 560px) {\n  .nftImage[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 10px;\n  }\n\n  .left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%] {\n    height: 100%;\n    max-width: 90%;\n    display: block;\n  }\n}\n\n@media screen and (min-width: 561px) {\n  .nftImage[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n\n  .left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%] {\n    height: 100%;\n    max-width: 50%;\n    display: inline-block;\n    vertical-align: top;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aWxzb25yYW1zdGVhZC9EZXNrdG9wL25ld1Byb2plY3RzMjAyMS9raXR0eWNsdWIvcHVibGljL3NyYy9hcHAva2l0dHkxOS9raXR0eTE5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9raXR0eTE5L2tpdHR5MTkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxvQ0FBQTtBQ0NGOztBRENBO0VBQ0Usa0JBQUE7QUNFRjs7QURBQTtFQUNFLHFCQUFBO0FDR0Y7O0FEQUE7RUFDRTtJQUNFLFdBQUE7SUFDQSxnQkFBQTtFQ0dGOztFRERBOztJQUVFLFlBQUE7SUFDQSxjQUFBO0lBQ0EsY0FBQTtFQ0lGO0FBQ0Y7O0FERkE7RUFDRTtJQUNFLFVBQUE7RUNJRjs7RURGQTs7SUFFRSxZQUFBO0lBQ0EsY0FBQTtJQUNBLHFCQUFBO0lBQ0EsbUJBQUE7RUNLRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAva2l0dHkxOS9raXR0eTE5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5mdEltYWdlIHtcbiAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yOiAjYzljOWM5LCAkYWxwaGE6IDAuNSk7XG59XG4ubGVmdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5yaWdodCBwIHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NjBweCkge1xuICAubmZ0SW1hZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbiAgLmxlZnQsXG4gIC5yaWdodCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC13aWR0aDogOTAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NjFweCkge1xuICAubmZ0SW1hZ2Uge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbiAgLmxlZnQsXG4gIC5yaWdodCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC13aWR0aDogNTAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB9XG59XG4iLCIubmZ0SW1hZ2Uge1xuICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyMDEsIDIwMSwgMjAxLCAwLjUpO1xufVxuXG4ubGVmdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnJpZ2h0IHAge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2MHB4KSB7XG4gIC5uZnRJbWFnZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuXG4gIC5sZWZ0LFxuLnJpZ2h0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA5MCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU2MXB4KSB7XG4gIC5uZnRJbWFnZSB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxuXG4gIC5sZWZ0LFxuLnJpZ2h0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA1MCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](Kitty19Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-kitty19',
          templateUrl: './kitty19.component.html',
          styleUrls: ['./kitty19.component.scss']
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
      return ["/"];
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

    Kitty2Component.??fac = function Kitty2Component_Factory(t) {
      return new (t || Kitty2Component)();
    };

    Kitty2Component.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: Kitty2Component,
      selectors: [["app-kitty2"]],
      decls: 31,
      vars: 2,
      consts: [[1, "btn", "btn-success", 3, "routerLink"], [1, "container"], [1, "left"], ["src", "https://lh3.googleusercontent.com/BKKonPpX1q0FxvaYOOBS1-e8SLmdJOMv7KnGqWvbwqNAbmRO7O8vmlZ5OiA7kfwuVAbAMDw_Z_a2EFcfdblwxDJzAZx5AeJg13ND3_BVoEOEplPyHwZJfCp20vM1tCjtLNb2-eOmSw=w2400", "alt", "Kitty1 NFT", 1, "nftImage"], [1, "right"], ["href", "https://polygonscan.com/address/0x2953399124f0cbb46d2cbacd8a89cf0599974963"], ["target", "_blank", "href", "https://lh3.googleusercontent.com/BKKonPpX1q0FxvaYOOBS1-e8SLmdJOMv7KnGqWvbwqNAbmRO7O8vmlZ5OiA7kfwuVAbAMDw_Z_a2EFcfdblwxDJzAZx5AeJg13ND3_BVoEOEplPyHwZJfCp20vM1tCjtLNb2-eOmSw=w2400"], ["target", "_blank", "href", "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/80366395629522486436785199915095687810879187654138836265477219825262350303233", 1, "btn", "btn-primary"]],
      template: function Kitty2Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " Kitty #1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Contract Address: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "0x2953399124f0cbb46d2cbacd8a89cf0599974963");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Token ID:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, " 80366395629522486436785199915095687810879187654138836265477219825262350303233");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Blockchain:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, " Polygon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Direct NFT Image Link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "View in OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](1, _c0));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: [".nftImage[_ngcontent-%COMP%] {\n  border: 5px solid black;\n  padding: 10px;\n  background: rgba(201, 201, 201, 0.5);\n}\n\n.left[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  word-wrap: break-word;\n}\n\n@media screen and (max-width: 560px) {\n  .nftImage[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 10px;\n  }\n\n  .left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%] {\n    height: 100%;\n    max-width: 90%;\n    display: block;\n  }\n}\n\n@media screen and (min-width: 561px) {\n  .nftImage[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n\n  .left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%] {\n    height: 100%;\n    max-width: 50%;\n    display: inline-block;\n    vertical-align: top;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aWxzb25yYW1zdGVhZC9EZXNrdG9wL25ld1Byb2plY3RzMjAyMS9raXR0eWNsdWIvcHVibGljL3NyYy9hcHAva2l0dHkyL2tpdHR5Mi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAva2l0dHkyL2tpdHR5Mi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLG9DQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxrQkFBQTtBQ0VGOztBREFBO0VBQ0UscUJBQUE7QUNHRjs7QURBQTtFQUNFO0lBQ0UsV0FBQTtJQUNBLGdCQUFBO0VDR0Y7O0VEREE7O0lBRUUsWUFBQTtJQUNBLGNBQUE7SUFDQSxjQUFBO0VDSUY7QUFDRjs7QURGQTtFQUNFO0lBQ0UsVUFBQTtFQ0lGOztFREZBOztJQUVFLFlBQUE7SUFDQSxjQUFBO0lBQ0EscUJBQUE7SUFDQSxtQkFBQTtFQ0tGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9raXR0eTIva2l0dHkyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5mdEltYWdlIHtcbiAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yOiAjYzljOWM5LCAkYWxwaGE6IDAuNSk7XG59XG4ubGVmdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5yaWdodCBwIHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NjBweCkge1xuICAubmZ0SW1hZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbiAgLmxlZnQsXG4gIC5yaWdodCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC13aWR0aDogOTAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NjFweCkge1xuICAubmZ0SW1hZ2Uge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbiAgLmxlZnQsXG4gIC5yaWdodCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC13aWR0aDogNTAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB9XG59XG4iLCIubmZ0SW1hZ2Uge1xuICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyMDEsIDIwMSwgMjAxLCAwLjUpO1xufVxuXG4ubGVmdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnJpZ2h0IHAge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2MHB4KSB7XG4gIC5uZnRJbWFnZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuXG4gIC5sZWZ0LFxuLnJpZ2h0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA5MCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU2MXB4KSB7XG4gIC5uZnRJbWFnZSB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxuXG4gIC5sZWZ0LFxuLnJpZ2h0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA1MCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](Kitty2Component, [{
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
  "./src/app/kitty20/kitty20.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/kitty20/kitty20.component.ts ***!
    \**********************************************/

  /*! exports provided: Kitty20Component */

  /***/
  function srcAppKitty20Kitty20ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Kitty20Component", function () {
      return Kitty20Component;
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
      return ["/"];
    };

    var Kitty20Component = /*#__PURE__*/function () {
      function Kitty20Component() {
        _classCallCheck(this, Kitty20Component);
      }

      _createClass(Kitty20Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Kitty20Component;
    }();

    Kitty20Component.??fac = function Kitty20Component_Factory(t) {
      return new (t || Kitty20Component)();
    };

    Kitty20Component.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: Kitty20Component,
      selectors: [["app-kitty20"]],
      decls: 31,
      vars: 2,
      consts: [[1, "btn", "btn-success", 3, "routerLink"], [1, "container"], [1, "left"], ["src", "https://lh3.googleusercontent.com/iqws-tVQmKPT4-tnnK9jCSUOYrP4rRCBG7H-zJbvgUI9tAIajgW1KvjaBsXDe4N-X8ozgHpYSwYUL53Zk-fwnCsn2JSM5016nut0faCPUswIdAZuc9LhTd_tjOiQOg7hcaaa0MBm7Q=w2400", "alt", "Kitty19 NFT", 1, "nftImage"], [1, "right"], ["href", "https://polygonscan.com/address/0x2953399124f0cbb46d2cbacd8a89cf0599974963"], ["target", "_blank", "href", "https://lh3.googleusercontent.com/iqws-tVQmKPT4-tnnK9jCSUOYrP4rRCBG7H-zJbvgUI9tAIajgW1KvjaBsXDe4N-X8ozgHpYSwYUL53Zk-fwnCsn2JSM5016nut0faCPUswIdAZuc9LhTd_tjOiQOg7hcaaa0MBm7Q=w2400"], ["target", "_blank", "href", "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/80366395629522486436785199915095687810879187654138836265477219845053559603201", 1, "btn", "btn-primary"]],
      template: function Kitty20Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " Kitty #19");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Contract Address: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "0x2953399124f0cbb46d2cbacd8a89cf0599974963");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Token ID:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, " 80366395629522486436785199915095687810879187654138836265477219845053559603201");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Blockchain:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, " Polygon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Direct NFT Image Link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "View in OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](1, _c0));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: [".nftImage[_ngcontent-%COMP%] {\n  border: 5px solid black;\n  padding: 10px;\n  background: rgba(201, 201, 201, 0.5);\n}\n\n.left[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  word-wrap: break-word;\n}\n\n@media screen and (max-width: 560px) {\n  .nftImage[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 10px;\n  }\n\n  .left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%] {\n    height: 100%;\n    max-width: 90%;\n    display: block;\n  }\n}\n\n@media screen and (min-width: 561px) {\n  .nftImage[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n\n  .left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%] {\n    height: 100%;\n    max-width: 50%;\n    display: inline-block;\n    vertical-align: top;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aWxzb25yYW1zdGVhZC9EZXNrdG9wL25ld1Byb2plY3RzMjAyMS9raXR0eWNsdWIvcHVibGljL3NyYy9hcHAva2l0dHkyMC9raXR0eTIwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9raXR0eTIwL2tpdHR5MjAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxvQ0FBQTtBQ0NGOztBRENBO0VBQ0Usa0JBQUE7QUNFRjs7QURBQTtFQUNFLHFCQUFBO0FDR0Y7O0FEQUE7RUFDRTtJQUNFLFdBQUE7SUFDQSxnQkFBQTtFQ0dGOztFRERBOztJQUVFLFlBQUE7SUFDQSxjQUFBO0lBQ0EsY0FBQTtFQ0lGO0FBQ0Y7O0FERkE7RUFDRTtJQUNFLFVBQUE7RUNJRjs7RURGQTs7SUFFRSxZQUFBO0lBQ0EsY0FBQTtJQUNBLHFCQUFBO0lBQ0EsbUJBQUE7RUNLRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAva2l0dHkyMC9raXR0eTIwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5mdEltYWdlIHtcbiAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yOiAjYzljOWM5LCAkYWxwaGE6IDAuNSk7XG59XG4ubGVmdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5yaWdodCBwIHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NjBweCkge1xuICAubmZ0SW1hZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbiAgLmxlZnQsXG4gIC5yaWdodCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC13aWR0aDogOTAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NjFweCkge1xuICAubmZ0SW1hZ2Uge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbiAgLmxlZnQsXG4gIC5yaWdodCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC13aWR0aDogNTAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB9XG59XG4iLCIubmZ0SW1hZ2Uge1xuICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyMDEsIDIwMSwgMjAxLCAwLjUpO1xufVxuXG4ubGVmdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnJpZ2h0IHAge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2MHB4KSB7XG4gIC5uZnRJbWFnZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuXG4gIC5sZWZ0LFxuLnJpZ2h0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA5MCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU2MXB4KSB7XG4gIC5uZnRJbWFnZSB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxuXG4gIC5sZWZ0LFxuLnJpZ2h0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA1MCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](Kitty20Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-kitty20',
          templateUrl: './kitty20.component.html',
          styleUrls: ['./kitty20.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/kitty21/kitty21.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/kitty21/kitty21.component.ts ***!
    \**********************************************/

  /*! exports provided: Kitty21Component */

  /***/
  function srcAppKitty21Kitty21ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Kitty21Component", function () {
      return Kitty21Component;
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
      return ["/"];
    };

    var Kitty21Component = /*#__PURE__*/function () {
      function Kitty21Component() {
        _classCallCheck(this, Kitty21Component);
      }

      _createClass(Kitty21Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Kitty21Component;
    }();

    Kitty21Component.??fac = function Kitty21Component_Factory(t) {
      return new (t || Kitty21Component)();
    };

    Kitty21Component.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: Kitty21Component,
      selectors: [["app-kitty21"]],
      decls: 31,
      vars: 2,
      consts: [[1, "btn", "btn-success", 3, "routerLink"], [1, "container"], [1, "left"], ["src", "https://lh3.googleusercontent.com/g4Oduz2I5JviCcULsFAWnwOot3d-hg4yhQ5wdVSm6UaQNrHzkET18MocJNnfzeGZypGFOvkQs6Y4Ifgz9a43IG3FIAt4ax3YSO8W4s0XueXCVJ_oWzPm_opG14AsETwv-BeteelhdQ=w2400", "alt", "Kitty20 NFT", 1, "nftImage"], [1, "right"], ["href", "https://polygonscan.com/address/0x2953399124f0cbb46d2cbacd8a89cf0599974963"], ["target", "_blank", "href", "https://lh3.googleusercontent.com/g4Oduz2I5JviCcULsFAWnwOot3d-hg4yhQ5wdVSm6UaQNrHzkET18MocJNnfzeGZypGFOvkQs6Y4Ifgz9a43IG3FIAt4ax3YSO8W4s0XueXCVJ_oWzPm_opG14AsETwv-BeteelhdQ=w2400"], ["target", "_blank", "href", "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/80366395629522486436785199915095687810879187654138836265477219846153071230977", 1, "btn", "btn-primary"]],
      template: function Kitty21Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " Kitty #20");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Contract Address: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "0x2953399124f0cbb46d2cbacd8a89cf0599974963");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Token ID:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, " 80366395629522486436785199915095687810879187654138836265477219845053559603201");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Blockchain:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, " Polygon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Direct NFT Image Link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "View in OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](1, _c0));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: [".nftImage[_ngcontent-%COMP%] {\n  border: 5px solid black;\n  padding: 10px;\n  background: rgba(201, 201, 201, 0.5);\n}\n\n.left[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  word-wrap: break-word;\n}\n\n@media screen and (max-width: 560px) {\n  .nftImage[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 10px;\n  }\n\n  .left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%] {\n    height: 100%;\n    max-width: 90%;\n    display: block;\n  }\n}\n\n@media screen and (min-width: 561px) {\n  .nftImage[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n\n  .left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%] {\n    height: 100%;\n    max-width: 50%;\n    display: inline-block;\n    vertical-align: top;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aWxzb25yYW1zdGVhZC9EZXNrdG9wL25ld1Byb2plY3RzMjAyMS9raXR0eWNsdWIvcHVibGljL3NyYy9hcHAva2l0dHkyMS9raXR0eTIxLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9raXR0eTIxL2tpdHR5MjEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxvQ0FBQTtBQ0NGOztBRENBO0VBQ0Usa0JBQUE7QUNFRjs7QURBQTtFQUNFLHFCQUFBO0FDR0Y7O0FEQUE7RUFDRTtJQUNFLFdBQUE7SUFDQSxnQkFBQTtFQ0dGOztFRERBOztJQUVFLFlBQUE7SUFDQSxjQUFBO0lBQ0EsY0FBQTtFQ0lGO0FBQ0Y7O0FERkE7RUFDRTtJQUNFLFVBQUE7RUNJRjs7RURGQTs7SUFFRSxZQUFBO0lBQ0EsY0FBQTtJQUNBLHFCQUFBO0lBQ0EsbUJBQUE7RUNLRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAva2l0dHkyMS9raXR0eTIxLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5mdEltYWdlIHtcbiAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yOiAjYzljOWM5LCAkYWxwaGE6IDAuNSk7XG59XG4ubGVmdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5yaWdodCBwIHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NjBweCkge1xuICAubmZ0SW1hZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbiAgLmxlZnQsXG4gIC5yaWdodCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC13aWR0aDogOTAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NjFweCkge1xuICAubmZ0SW1hZ2Uge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbiAgLmxlZnQsXG4gIC5yaWdodCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC13aWR0aDogNTAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB9XG59XG4iLCIubmZ0SW1hZ2Uge1xuICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyMDEsIDIwMSwgMjAxLCAwLjUpO1xufVxuXG4ubGVmdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnJpZ2h0IHAge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2MHB4KSB7XG4gIC5uZnRJbWFnZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuXG4gIC5sZWZ0LFxuLnJpZ2h0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA5MCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU2MXB4KSB7XG4gIC5uZnRJbWFnZSB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxuXG4gIC5sZWZ0LFxuLnJpZ2h0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA1MCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](Kitty21Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-kitty21',
          templateUrl: './kitty21.component.html',
          styleUrls: ['./kitty21.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/kitty22/kitty22.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/kitty22/kitty22.component.ts ***!
    \**********************************************/

  /*! exports provided: Kitty22Component */

  /***/
  function srcAppKitty22Kitty22ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Kitty22Component", function () {
      return Kitty22Component;
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
      return ["/"];
    };

    var Kitty22Component = /*#__PURE__*/function () {
      function Kitty22Component() {
        _classCallCheck(this, Kitty22Component);
      }

      _createClass(Kitty22Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Kitty22Component;
    }();

    Kitty22Component.??fac = function Kitty22Component_Factory(t) {
      return new (t || Kitty22Component)();
    };

    Kitty22Component.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: Kitty22Component,
      selectors: [["app-kitty22"]],
      decls: 31,
      vars: 2,
      consts: [[1, "btn", "btn-success", 3, "routerLink"], [1, "container"], [1, "left"], ["src", "https://lh3.googleusercontent.com/t_a1uV-FcwIyqYVJka7RdCENkpHXvV0N888hON8TzE7HHIuqbpU2kiJEadEtGsj3p3wkc6oYvW3rZnzcxblChrNXO8Mc_hO9Uc5jlLtfj6h14mAGVvuW5UkeBNOPGRvvFZkJMI5YAw=w2400", "alt", "Kitty21 NFT", 1, "nftImage"], [1, "right"], ["href", "https://polygonscan.com/address/0x2953399124f0cbb46d2cbacd8a89cf0599974963"], ["target", "_blank", "href", "https://lh3.googleusercontent.com/t_a1uV-FcwIyqYVJka7RdCENkpHXvV0N888hON8TzE7HHIuqbpU2kiJEadEtGsj3p3wkc6oYvW3rZnzcxblChrNXO8Mc_hO9Uc5jlLtfj6h14mAGVvuW5UkeBNOPGRvvFZkJMI5YAw=w2400"], ["target", "_blank", "href", "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/80366395629522486436785199915095687810879187654138836265477219847252582858753", 1, "btn", "btn-primary"]],
      template: function Kitty22Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " Kitty #21");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Contract Address: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "0x2953399124f0cbb46d2cbacd8a89cf0599974963");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Token ID:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, " 80366395629522486436785199915095687810879187654138836265477219847252582858753");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Blockchain:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, " Polygon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Direct NFT Image Link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "View in OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](1, _c0));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: [".nftImage[_ngcontent-%COMP%] {\n  border: 5px solid black;\n  padding: 10px;\n  background: rgba(201, 201, 201, 0.5);\n}\n\n.left[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  word-wrap: break-word;\n}\n\n@media screen and (max-width: 560px) {\n  .nftImage[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 10px;\n  }\n\n  .left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%] {\n    height: 100%;\n    max-width: 90%;\n    display: block;\n  }\n}\n\n@media screen and (min-width: 561px) {\n  .nftImage[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n\n  .left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%] {\n    height: 100%;\n    max-width: 50%;\n    display: inline-block;\n    vertical-align: top;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aWxzb25yYW1zdGVhZC9EZXNrdG9wL25ld1Byb2plY3RzMjAyMS9raXR0eWNsdWIvcHVibGljL3NyYy9hcHAva2l0dHkyMi9raXR0eTIyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9raXR0eTIyL2tpdHR5MjIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxvQ0FBQTtBQ0NGOztBRENBO0VBQ0Usa0JBQUE7QUNFRjs7QURBQTtFQUNFLHFCQUFBO0FDR0Y7O0FEQUE7RUFDRTtJQUNFLFdBQUE7SUFDQSxnQkFBQTtFQ0dGOztFRERBOztJQUVFLFlBQUE7SUFDQSxjQUFBO0lBQ0EsY0FBQTtFQ0lGO0FBQ0Y7O0FERkE7RUFDRTtJQUNFLFVBQUE7RUNJRjs7RURGQTs7SUFFRSxZQUFBO0lBQ0EsY0FBQTtJQUNBLHFCQUFBO0lBQ0EsbUJBQUE7RUNLRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAva2l0dHkyMi9raXR0eTIyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5mdEltYWdlIHtcbiAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yOiAjYzljOWM5LCAkYWxwaGE6IDAuNSk7XG59XG4ubGVmdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5yaWdodCBwIHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NjBweCkge1xuICAubmZ0SW1hZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbiAgLmxlZnQsXG4gIC5yaWdodCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC13aWR0aDogOTAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NjFweCkge1xuICAubmZ0SW1hZ2Uge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbiAgLmxlZnQsXG4gIC5yaWdodCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC13aWR0aDogNTAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB9XG59XG4iLCIubmZ0SW1hZ2Uge1xuICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyMDEsIDIwMSwgMjAxLCAwLjUpO1xufVxuXG4ubGVmdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnJpZ2h0IHAge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2MHB4KSB7XG4gIC5uZnRJbWFnZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuXG4gIC5sZWZ0LFxuLnJpZ2h0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA5MCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU2MXB4KSB7XG4gIC5uZnRJbWFnZSB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxuXG4gIC5sZWZ0LFxuLnJpZ2h0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA1MCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](Kitty22Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-kitty22',
          templateUrl: './kitty22.component.html',
          styleUrls: ['./kitty22.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/kitty23/kitty23.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/kitty23/kitty23.component.ts ***!
    \**********************************************/

  /*! exports provided: Kitty23Component */

  /***/
  function srcAppKitty23Kitty23ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Kitty23Component", function () {
      return Kitty23Component;
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
      return ["/"];
    };

    var Kitty23Component = /*#__PURE__*/function () {
      function Kitty23Component() {
        _classCallCheck(this, Kitty23Component);
      }

      _createClass(Kitty23Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Kitty23Component;
    }();

    Kitty23Component.??fac = function Kitty23Component_Factory(t) {
      return new (t || Kitty23Component)();
    };

    Kitty23Component.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: Kitty23Component,
      selectors: [["app-kitty23"]],
      decls: 31,
      vars: 2,
      consts: [[1, "btn", "btn-success", 3, "routerLink"], [1, "container"], [1, "left"], ["src", "https://lh3.googleusercontent.com/yPRRPUtWqJactOE1pavNtfDsh0Q-aeVfi1723Pv17XqvEWVY-TUk3FmUJKrHWwWHjEHYSZi-PkeVdJkKekVVPj_OKgPmYF_fFSI8UmxaUapMd1P7cdchuJv67ZQUFjlbYxjCR-gapQ=w2400", "alt", "Kitty22 NFT", 1, "nftImage"], [1, "right"], ["href", "https://polygonscan.com/address/0x2953399124f0cbb46d2cbacd8a89cf0599974963"], ["target", "_blank", "href", "https://lh3.googleusercontent.com/yPRRPUtWqJactOE1pavNtfDsh0Q-aeVfi1723Pv17XqvEWVY-TUk3FmUJKrHWwWHjEHYSZi-PkeVdJkKekVVPj_OKgPmYF_fFSI8UmxaUapMd1P7cdchuJv67ZQUFjlbYxjCR-gapQ=w2400"], ["target", "_blank", "href", "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/80366395629522486436785199915095687810879187654138836265477219848352094486529", 1, "btn", "btn-primary"]],
      template: function Kitty23Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " Kitty #22");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Contract Address: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "0x2953399124f0cbb46d2cbacd8a89cf0599974963");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Token ID:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, " 80366395629522486436785199915095687810879187654138836265477219848352094486529");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Blockchain:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, " Polygon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Direct NFT Image Link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "View in OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](1, _c0));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: [".nftImage[_ngcontent-%COMP%] {\n  border: 5px solid black;\n  padding: 10px;\n  background: rgba(201, 201, 201, 0.5);\n}\n\n.left[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  word-wrap: break-word;\n}\n\n@media screen and (max-width: 560px) {\n  .nftImage[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 10px;\n  }\n\n  .left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%] {\n    height: 100%;\n    max-width: 90%;\n    display: block;\n  }\n}\n\n@media screen and (min-width: 561px) {\n  .nftImage[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n\n  .left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%] {\n    height: 100%;\n    max-width: 50%;\n    display: inline-block;\n    vertical-align: top;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aWxzb25yYW1zdGVhZC9EZXNrdG9wL25ld1Byb2plY3RzMjAyMS9raXR0eWNsdWIvcHVibGljL3NyYy9hcHAva2l0dHkyMy9raXR0eTIzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9raXR0eTIzL2tpdHR5MjMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxvQ0FBQTtBQ0NGOztBRENBO0VBQ0Usa0JBQUE7QUNFRjs7QURBQTtFQUNFLHFCQUFBO0FDR0Y7O0FEQUE7RUFDRTtJQUNFLFdBQUE7SUFDQSxnQkFBQTtFQ0dGOztFRERBOztJQUVFLFlBQUE7SUFDQSxjQUFBO0lBQ0EsY0FBQTtFQ0lGO0FBQ0Y7O0FERkE7RUFDRTtJQUNFLFVBQUE7RUNJRjs7RURGQTs7SUFFRSxZQUFBO0lBQ0EsY0FBQTtJQUNBLHFCQUFBO0lBQ0EsbUJBQUE7RUNLRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAva2l0dHkyMy9raXR0eTIzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5mdEltYWdlIHtcbiAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yOiAjYzljOWM5LCAkYWxwaGE6IDAuNSk7XG59XG4ubGVmdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5yaWdodCBwIHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NjBweCkge1xuICAubmZ0SW1hZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbiAgLmxlZnQsXG4gIC5yaWdodCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC13aWR0aDogOTAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NjFweCkge1xuICAubmZ0SW1hZ2Uge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbiAgLmxlZnQsXG4gIC5yaWdodCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC13aWR0aDogNTAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB9XG59XG4iLCIubmZ0SW1hZ2Uge1xuICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyMDEsIDIwMSwgMjAxLCAwLjUpO1xufVxuXG4ubGVmdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnJpZ2h0IHAge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2MHB4KSB7XG4gIC5uZnRJbWFnZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuXG4gIC5sZWZ0LFxuLnJpZ2h0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA5MCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU2MXB4KSB7XG4gIC5uZnRJbWFnZSB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxuXG4gIC5sZWZ0LFxuLnJpZ2h0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA1MCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](Kitty23Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-kitty23',
          templateUrl: './kitty23.component.html',
          styleUrls: ['./kitty23.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/kitty24/kitty24.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/kitty24/kitty24.component.ts ***!
    \**********************************************/

  /*! exports provided: Kitty24Component */

  /***/
  function srcAppKitty24Kitty24ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Kitty24Component", function () {
      return Kitty24Component;
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
      return ["/"];
    };

    var Kitty24Component = /*#__PURE__*/function () {
      function Kitty24Component() {
        _classCallCheck(this, Kitty24Component);
      }

      _createClass(Kitty24Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Kitty24Component;
    }();

    Kitty24Component.??fac = function Kitty24Component_Factory(t) {
      return new (t || Kitty24Component)();
    };

    Kitty24Component.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: Kitty24Component,
      selectors: [["app-kitty24"]],
      decls: 31,
      vars: 2,
      consts: [[1, "btn", "btn-success", 3, "routerLink"], [1, "container"], [1, "left"], ["src", "https://lh3.googleusercontent.com/CloSNnjLPs2j3aEgk9IZUcGbxnLb33Bm0LCnXjirIe4GBtp_lTMzwArMQWYlPJ1rkTztpUbWJs7jRqdL-QUbHVxIJNPLh3WdphwybnVmm117VjiMBU-dTfmPRoDZoEeTVTYYsmbzkg=w2400", "alt", "Kitty23 NFT", 1, "nftImage"], [1, "right"], ["href", "https://polygonscan.com/address/0x2953399124f0cbb46d2cbacd8a89cf0599974963"], ["target", "_blank", "href", "https://lh3.googleusercontent.com/CloSNnjLPs2j3aEgk9IZUcGbxnLb33Bm0LCnXjirIe4GBtp_lTMzwArMQWYlPJ1rkTztpUbWJs7jRqdL-QUbHVxIJNPLh3WdphwybnVmm117VjiMBU-dTfmPRoDZoEeTVTYYsmbzkg=w2400"], ["target", "_blank", "href", "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/80366395629522486436785199915095687810879187654138836265477219849451606114305", 1, "btn", "btn-primary"]],
      template: function Kitty24Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " Kitty #23");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Contract Address: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "0x2953399124f0cbb46d2cbacd8a89cf0599974963");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Token ID:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, " 80366395629522486436785199915095687810879187654138836265477219849451606114305");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Blockchain:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, " Polygon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Direct NFT Image Link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "View in OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](1, _c0));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: [".nftImage[_ngcontent-%COMP%] {\n  border: 5px solid black;\n  padding: 10px;\n  background: rgba(201, 201, 201, 0.5);\n}\n\n.left[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  word-wrap: break-word;\n}\n\n@media screen and (max-width: 560px) {\n  .nftImage[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 10px;\n  }\n\n  .left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%] {\n    height: 100%;\n    max-width: 90%;\n    display: block;\n  }\n}\n\n@media screen and (min-width: 561px) {\n  .nftImage[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n\n  .left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%] {\n    height: 100%;\n    max-width: 50%;\n    display: inline-block;\n    vertical-align: top;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aWxzb25yYW1zdGVhZC9EZXNrdG9wL25ld1Byb2plY3RzMjAyMS9raXR0eWNsdWIvcHVibGljL3NyYy9hcHAva2l0dHkyNC9raXR0eTI0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9raXR0eTI0L2tpdHR5MjQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxvQ0FBQTtBQ0NGOztBRENBO0VBQ0Usa0JBQUE7QUNFRjs7QURBQTtFQUNFLHFCQUFBO0FDR0Y7O0FEQUE7RUFDRTtJQUNFLFdBQUE7SUFDQSxnQkFBQTtFQ0dGOztFRERBOztJQUVFLFlBQUE7SUFDQSxjQUFBO0lBQ0EsY0FBQTtFQ0lGO0FBQ0Y7O0FERkE7RUFDRTtJQUNFLFVBQUE7RUNJRjs7RURGQTs7SUFFRSxZQUFBO0lBQ0EsY0FBQTtJQUNBLHFCQUFBO0lBQ0EsbUJBQUE7RUNLRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAva2l0dHkyNC9raXR0eTI0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5mdEltYWdlIHtcbiAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yOiAjYzljOWM5LCAkYWxwaGE6IDAuNSk7XG59XG4ubGVmdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5yaWdodCBwIHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NjBweCkge1xuICAubmZ0SW1hZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbiAgLmxlZnQsXG4gIC5yaWdodCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC13aWR0aDogOTAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NjFweCkge1xuICAubmZ0SW1hZ2Uge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbiAgLmxlZnQsXG4gIC5yaWdodCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC13aWR0aDogNTAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB9XG59XG4iLCIubmZ0SW1hZ2Uge1xuICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyMDEsIDIwMSwgMjAxLCAwLjUpO1xufVxuXG4ubGVmdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnJpZ2h0IHAge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2MHB4KSB7XG4gIC5uZnRJbWFnZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuXG4gIC5sZWZ0LFxuLnJpZ2h0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA5MCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU2MXB4KSB7XG4gIC5uZnRJbWFnZSB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxuXG4gIC5sZWZ0LFxuLnJpZ2h0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA1MCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](Kitty24Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-kitty24',
          templateUrl: './kitty24.component.html',
          styleUrls: ['./kitty24.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/kitty25/kitty25.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/kitty25/kitty25.component.ts ***!
    \**********************************************/

  /*! exports provided: Kitty25Component */

  /***/
  function srcAppKitty25Kitty25ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Kitty25Component", function () {
      return Kitty25Component;
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
      return ["/"];
    };

    var Kitty25Component = /*#__PURE__*/function () {
      function Kitty25Component() {
        _classCallCheck(this, Kitty25Component);
      }

      _createClass(Kitty25Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Kitty25Component;
    }();

    Kitty25Component.??fac = function Kitty25Component_Factory(t) {
      return new (t || Kitty25Component)();
    };

    Kitty25Component.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: Kitty25Component,
      selectors: [["app-kitty25"]],
      decls: 31,
      vars: 2,
      consts: [[1, "btn", "btn-success", 3, "routerLink"], [1, "container"], [1, "left"], ["src", "https://lh3.googleusercontent.com/J3XAHK-SfZ-vfLHEb3jhY4tjBEaPttbT39mixSIt2OWKXo09c8o5zn3GGXbYOJx0F8ojMp_wVwav4DvGAOI5UNLqhqVsXFx6u2d_2LQaP5G8lAX5SZBUKYgwXSS7jMvFJR_OjDO6iA=w2400", "alt", "Kitty24 NFT", 1, "nftImage"], [1, "right"], ["href", "https://polygonscan.com/address/0x2953399124f0cbb46d2cbacd8a89cf0599974963"], ["target", "_blank", "href", "https://lh3.googleusercontent.com/J3XAHK-SfZ-vfLHEb3jhY4tjBEaPttbT39mixSIt2OWKXo09c8o5zn3GGXbYOJx0F8ojMp_wVwav4DvGAOI5UNLqhqVsXFx6u2d_2LQaP5G8lAX5SZBUKYgwXSS7jMvFJR_OjDO6iA=w2400"], ["target", "_blank", "href", "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/80366395629522486436785199915095687810879187654138836265477219850551117742081", 1, "btn", "btn-primary"]],
      template: function Kitty25Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " Kitty #24");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Contract Address: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "0x2953399124f0cbb46d2cbacd8a89cf0599974963");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Token ID:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, " 80366395629522486436785199915095687810879187654138836265477219850551117742081");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Blockchain:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, " Polygon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Direct NFT Image Link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "View in OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](1, _c0));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: [".nftImage[_ngcontent-%COMP%] {\n  border: 5px solid black;\n  padding: 10px;\n  background: rgba(201, 201, 201, 0.5);\n}\n\n.left[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  word-wrap: break-word;\n}\n\n@media screen and (max-width: 560px) {\n  .nftImage[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 10px;\n  }\n\n  .left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%] {\n    height: 100%;\n    max-width: 90%;\n    display: block;\n  }\n}\n\n@media screen and (min-width: 561px) {\n  .nftImage[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n\n  .left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%] {\n    height: 100%;\n    max-width: 50%;\n    display: inline-block;\n    vertical-align: top;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aWxzb25yYW1zdGVhZC9EZXNrdG9wL25ld1Byb2plY3RzMjAyMS9raXR0eWNsdWIvcHVibGljL3NyYy9hcHAva2l0dHkyNS9raXR0eTI1LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9raXR0eTI1L2tpdHR5MjUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxvQ0FBQTtBQ0NGOztBRENBO0VBQ0Usa0JBQUE7QUNFRjs7QURBQTtFQUNFLHFCQUFBO0FDR0Y7O0FEQUE7RUFDRTtJQUNFLFdBQUE7SUFDQSxnQkFBQTtFQ0dGOztFRERBOztJQUVFLFlBQUE7SUFDQSxjQUFBO0lBQ0EsY0FBQTtFQ0lGO0FBQ0Y7O0FERkE7RUFDRTtJQUNFLFVBQUE7RUNJRjs7RURGQTs7SUFFRSxZQUFBO0lBQ0EsY0FBQTtJQUNBLHFCQUFBO0lBQ0EsbUJBQUE7RUNLRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAva2l0dHkyNS9raXR0eTI1LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5mdEltYWdlIHtcbiAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yOiAjYzljOWM5LCAkYWxwaGE6IDAuNSk7XG59XG4ubGVmdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5yaWdodCBwIHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NjBweCkge1xuICAubmZ0SW1hZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbiAgLmxlZnQsXG4gIC5yaWdodCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC13aWR0aDogOTAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NjFweCkge1xuICAubmZ0SW1hZ2Uge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbiAgLmxlZnQsXG4gIC5yaWdodCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC13aWR0aDogNTAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB9XG59XG4iLCIubmZ0SW1hZ2Uge1xuICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyMDEsIDIwMSwgMjAxLCAwLjUpO1xufVxuXG4ubGVmdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnJpZ2h0IHAge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2MHB4KSB7XG4gIC5uZnRJbWFnZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuXG4gIC5sZWZ0LFxuLnJpZ2h0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA5MCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU2MXB4KSB7XG4gIC5uZnRJbWFnZSB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxuXG4gIC5sZWZ0LFxuLnJpZ2h0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA1MCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](Kitty25Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-kitty25',
          templateUrl: './kitty25.component.html',
          styleUrls: ['./kitty25.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/kitty26/kitty26.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/kitty26/kitty26.component.ts ***!
    \**********************************************/

  /*! exports provided: Kitty26Component */

  /***/
  function srcAppKitty26Kitty26ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Kitty26Component", function () {
      return Kitty26Component;
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
      return ["/"];
    };

    var Kitty26Component = /*#__PURE__*/function () {
      function Kitty26Component() {
        _classCallCheck(this, Kitty26Component);
      }

      _createClass(Kitty26Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Kitty26Component;
    }();

    Kitty26Component.??fac = function Kitty26Component_Factory(t) {
      return new (t || Kitty26Component)();
    };

    Kitty26Component.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: Kitty26Component,
      selectors: [["app-kitty26"]],
      decls: 31,
      vars: 2,
      consts: [[1, "btn", "btn-success", 3, "routerLink"], [1, "container"], [1, "left"], ["src", "https://lh3.googleusercontent.com/gRWasApciLN_b5rzGuoG4cEGBRCWTPM0zlJ3PjA-c9fdGNTmV2hPzYiQEv1QTJxx5ZjmOhJPXczLxyklu2LOJTOAsn7rEnW_M0pTOpC7sMI8jCtEE7xX1tqVbYL1oBU2dTyAMimqeA=w2400", "alt", "Kitty25 NFT", 1, "nftImage"], [1, "right"], ["href", "https://polygonscan.com/address/0x2953399124f0cbb46d2cbacd8a89cf0599974963"], ["target", "_blank", "href", "https://lh3.googleusercontent.com/gRWasApciLN_b5rzGuoG4cEGBRCWTPM0zlJ3PjA-c9fdGNTmV2hPzYiQEv1QTJxx5ZjmOhJPXczLxyklu2LOJTOAsn7rEnW_M0pTOpC7sMI8jCtEE7xX1tqVbYL1oBU2dTyAMimqeA=w2400"], ["target", "_blank", "href", "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/80366395629522486436785199915095687810879187654138836265477219851650629369857", 1, "btn", "btn-primary"]],
      template: function Kitty26Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " Kitty #25");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Contract Address: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "0x2953399124f0cbb46d2cbacd8a89cf0599974963");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Token ID:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, " 80366395629522486436785199915095687810879187654138836265477219851650629369857");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Blockchain:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, " Polygon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Direct NFT Image Link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "View in OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](1, _c0));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: [".nftImage[_ngcontent-%COMP%] {\n  border: 5px solid black;\n  padding: 10px;\n  background: rgba(201, 201, 201, 0.5);\n}\n\n.left[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  word-wrap: break-word;\n}\n\n@media screen and (max-width: 560px) {\n  .nftImage[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 10px;\n  }\n\n  .left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%] {\n    height: 100%;\n    max-width: 90%;\n    display: block;\n  }\n}\n\n@media screen and (min-width: 561px) {\n  .nftImage[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n\n  .left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%] {\n    height: 100%;\n    max-width: 50%;\n    display: inline-block;\n    vertical-align: top;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aWxzb25yYW1zdGVhZC9EZXNrdG9wL25ld1Byb2plY3RzMjAyMS9raXR0eWNsdWIvcHVibGljL3NyYy9hcHAva2l0dHkyNi9raXR0eTI2LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9raXR0eTI2L2tpdHR5MjYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxvQ0FBQTtBQ0NGOztBRENBO0VBQ0Usa0JBQUE7QUNFRjs7QURBQTtFQUNFLHFCQUFBO0FDR0Y7O0FEQUE7RUFDRTtJQUNFLFdBQUE7SUFDQSxnQkFBQTtFQ0dGOztFRERBOztJQUVFLFlBQUE7SUFDQSxjQUFBO0lBQ0EsY0FBQTtFQ0lGO0FBQ0Y7O0FERkE7RUFDRTtJQUNFLFVBQUE7RUNJRjs7RURGQTs7SUFFRSxZQUFBO0lBQ0EsY0FBQTtJQUNBLHFCQUFBO0lBQ0EsbUJBQUE7RUNLRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAva2l0dHkyNi9raXR0eTI2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5mdEltYWdlIHtcbiAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yOiAjYzljOWM5LCAkYWxwaGE6IDAuNSk7XG59XG4ubGVmdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5yaWdodCBwIHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NjBweCkge1xuICAubmZ0SW1hZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbiAgLmxlZnQsXG4gIC5yaWdodCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC13aWR0aDogOTAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NjFweCkge1xuICAubmZ0SW1hZ2Uge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbiAgLmxlZnQsXG4gIC5yaWdodCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC13aWR0aDogNTAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB9XG59XG4iLCIubmZ0SW1hZ2Uge1xuICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyMDEsIDIwMSwgMjAxLCAwLjUpO1xufVxuXG4ubGVmdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnJpZ2h0IHAge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2MHB4KSB7XG4gIC5uZnRJbWFnZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuXG4gIC5sZWZ0LFxuLnJpZ2h0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA5MCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU2MXB4KSB7XG4gIC5uZnRJbWFnZSB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxuXG4gIC5sZWZ0LFxuLnJpZ2h0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA1MCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](Kitty26Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-kitty26',
          templateUrl: './kitty26.component.html',
          styleUrls: ['./kitty26.component.scss']
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
      return ["/"];
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

    Kitty3Component.??fac = function Kitty3Component_Factory(t) {
      return new (t || Kitty3Component)();
    };

    Kitty3Component.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: Kitty3Component,
      selectors: [["app-kitty3"]],
      decls: 31,
      vars: 2,
      consts: [[1, "btn", "btn-success", 3, "routerLink"], [1, "container"], [1, "left"], ["src", "https://lh3.googleusercontent.com/McL0a7Igd77NgRxMFtdqgzRoZH97tKrQ7_YEkwiCRqlvA5QwHhhmrd98UkNHDaPuye00AuTeO1_ovt0HXvuanXjmBXUF28IgfR9aDkCId17O94eQLUfYGdAR1be7wEwnIkEu9Bbt3A=w2400", "alt", "Kitty2 NFT", 1, "nftImage"], [1, "right"], ["href", "https://polygonscan.com/address/0x2953399124f0cbb46d2cbacd8a89cf0599974963"], ["target", "_blank", "href", "https://lh3.googleusercontent.com/McL0a7Igd77NgRxMFtdqgzRoZH97tKrQ7_YEkwiCRqlvA5QwHhhmrd98UkNHDaPuye00AuTeO1_ovt0HXvuanXjmBXUF28IgfR9aDkCId17O94eQLUfYGdAR1be7wEwnIkEu9Bbt3A=w2400"], ["target", "_blank", "href", "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/80366395629522486436785199915095687810879187654138836265477219826361861931009", 1, "btn", "btn-primary"]],
      template: function Kitty3Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " Kitty #2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Contract Address: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "0x2953399124f0cbb46d2cbacd8a89cf0599974963");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Token ID:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, " 80366395629522486436785199915095687810879187654138836265477219826361861931009");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Blockchain:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, " Polygon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Direct NFT Image Link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "View in OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](1, _c0));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: [".nftImage[_ngcontent-%COMP%] {\n  border: 5px solid black;\n  padding: 10px;\n  background: rgba(201, 201, 201, 0.5);\n}\n\n.left[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  word-wrap: break-word;\n}\n\n@media screen and (max-width: 560px) {\n  .nftImage[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 10px;\n  }\n\n  .left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%] {\n    height: 100%;\n    max-width: 90%;\n    display: block;\n  }\n}\n\n@media screen and (min-width: 561px) {\n  .nftImage[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n\n  .left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%] {\n    height: 100%;\n    max-width: 50%;\n    display: inline-block;\n    vertical-align: top;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aWxzb25yYW1zdGVhZC9EZXNrdG9wL25ld1Byb2plY3RzMjAyMS9raXR0eWNsdWIvcHVibGljL3NyYy9hcHAva2l0dHkzL2tpdHR5My5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAva2l0dHkzL2tpdHR5My5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLG9DQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxrQkFBQTtBQ0VGOztBREFBO0VBQ0UscUJBQUE7QUNHRjs7QURBQTtFQUNFO0lBQ0UsV0FBQTtJQUNBLGdCQUFBO0VDR0Y7O0VEREE7O0lBRUUsWUFBQTtJQUNBLGNBQUE7SUFDQSxjQUFBO0VDSUY7QUFDRjs7QURGQTtFQUNFO0lBQ0UsVUFBQTtFQ0lGOztFREZBOztJQUVFLFlBQUE7SUFDQSxjQUFBO0lBQ0EscUJBQUE7SUFDQSxtQkFBQTtFQ0tGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9raXR0eTMva2l0dHkzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5mdEltYWdlIHtcbiAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yOiAjYzljOWM5LCAkYWxwaGE6IDAuNSk7XG59XG4ubGVmdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5yaWdodCBwIHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NjBweCkge1xuICAubmZ0SW1hZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbiAgLmxlZnQsXG4gIC5yaWdodCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC13aWR0aDogOTAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NjFweCkge1xuICAubmZ0SW1hZ2Uge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbiAgLmxlZnQsXG4gIC5yaWdodCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC13aWR0aDogNTAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB9XG59XG4iLCIubmZ0SW1hZ2Uge1xuICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyMDEsIDIwMSwgMjAxLCAwLjUpO1xufVxuXG4ubGVmdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnJpZ2h0IHAge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2MHB4KSB7XG4gIC5uZnRJbWFnZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuXG4gIC5sZWZ0LFxuLnJpZ2h0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA5MCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU2MXB4KSB7XG4gIC5uZnRJbWFnZSB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxuXG4gIC5sZWZ0LFxuLnJpZ2h0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA1MCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](Kitty3Component, [{
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
      return ["/"];
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

    Kitty4Component.??fac = function Kitty4Component_Factory(t) {
      return new (t || Kitty4Component)();
    };

    Kitty4Component.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: Kitty4Component,
      selectors: [["app-kitty4"]],
      decls: 31,
      vars: 2,
      consts: [[1, "btn", "btn-success", 3, "routerLink"], [1, "container"], [1, "left"], ["src", "https://lh3.googleusercontent.com/j0AkEQNwhN9iMiLpKZCPhyD3_jRDkswhRLYBDm1fiBKI9_3xYpNdQJxpQEEtjDsbwNDkY0wxj0BnYF_lMKOx5AjhmrwndaKbz_09x91W9UWXl6L2_zzklEBXVo-PVonFUFnpVoGqTg=w2400", "alt", "Kitty3 NFT", 1, "nftImage"], [1, "right"], ["href", "https://polygonscan.com/address/0x2953399124f0cbb46d2cbacd8a89cf0599974963"], ["target", "_blank", "href", "https://lh3.googleusercontent.com/j0AkEQNwhN9iMiLpKZCPhyD3_jRDkswhRLYBDm1fiBKI9_3xYpNdQJxpQEEtjDsbwNDkY0wxj0BnYF_lMKOx5AjhmrwndaKbz_09x91W9UWXl6L2_zzklEBXVo-PVonFUFnpVoGqTg=w2400"], ["target", "_blank", "href", "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/80366395629522486436785199915095687810879187654138836265477219827461373558785", 1, "btn", "btn-primary"]],
      template: function Kitty4Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " Kitty #3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Contract Address: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "0x2953399124f0cbb46d2cbacd8a89cf0599974963");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Token ID:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, " 80366395629522486436785199915095687810879187654138836265477219827461373558785");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Blockchain:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, " Polygon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Direct NFT Image Link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "View in OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](1, _c0));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: [".nftImage[_ngcontent-%COMP%] {\n  border: 5px solid black;\n  padding: 10px;\n  background: rgba(201, 201, 201, 0.5);\n}\n\n.left[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  word-wrap: break-word;\n}\n\n@media screen and (max-width: 560px) {\n  .nftImage[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 10px;\n  }\n\n  .left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%] {\n    height: 100%;\n    max-width: 90%;\n    display: block;\n  }\n}\n\n@media screen and (min-width: 561px) {\n  .nftImage[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n\n  .left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%] {\n    height: 100%;\n    max-width: 50%;\n    display: inline-block;\n    vertical-align: top;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aWxzb25yYW1zdGVhZC9EZXNrdG9wL25ld1Byb2plY3RzMjAyMS9raXR0eWNsdWIvcHVibGljL3NyYy9hcHAva2l0dHk0L2tpdHR5NC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAva2l0dHk0L2tpdHR5NC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLG9DQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxrQkFBQTtBQ0VGOztBREFBO0VBQ0UscUJBQUE7QUNHRjs7QURBQTtFQUNFO0lBQ0UsV0FBQTtJQUNBLGdCQUFBO0VDR0Y7O0VEREE7O0lBRUUsWUFBQTtJQUNBLGNBQUE7SUFDQSxjQUFBO0VDSUY7QUFDRjs7QURGQTtFQUNFO0lBQ0UsVUFBQTtFQ0lGOztFREZBOztJQUVFLFlBQUE7SUFDQSxjQUFBO0lBQ0EscUJBQUE7SUFDQSxtQkFBQTtFQ0tGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9raXR0eTQva2l0dHk0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5mdEltYWdlIHtcbiAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yOiAjYzljOWM5LCAkYWxwaGE6IDAuNSk7XG59XG4ubGVmdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5yaWdodCBwIHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NjBweCkge1xuICAubmZ0SW1hZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbiAgLmxlZnQsXG4gIC5yaWdodCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC13aWR0aDogOTAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NjFweCkge1xuICAubmZ0SW1hZ2Uge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbiAgLmxlZnQsXG4gIC5yaWdodCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC13aWR0aDogNTAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB9XG59XG4iLCIubmZ0SW1hZ2Uge1xuICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyMDEsIDIwMSwgMjAxLCAwLjUpO1xufVxuXG4ubGVmdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnJpZ2h0IHAge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2MHB4KSB7XG4gIC5uZnRJbWFnZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuXG4gIC5sZWZ0LFxuLnJpZ2h0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA5MCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU2MXB4KSB7XG4gIC5uZnRJbWFnZSB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxuXG4gIC5sZWZ0LFxuLnJpZ2h0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA1MCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](Kitty4Component, [{
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
      return ["/"];
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

    Kitty5Component.??fac = function Kitty5Component_Factory(t) {
      return new (t || Kitty5Component)();
    };

    Kitty5Component.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: Kitty5Component,
      selectors: [["app-kitty5"]],
      decls: 31,
      vars: 2,
      consts: [[1, "btn", "btn-success", 3, "routerLink"], [1, "container"], [1, "left"], ["src", "https://lh3.googleusercontent.com/6xe_zomcrT5NtaaMcNp_km4_5hdB99r1ORRwfzOrnsvmaSEt1YZguwNqTw8A7L2kcd9kRywulcw36FmwKhXpEeRE1vh5-pUZYYYsnbMmzPBWr20-s44u_oKO-YjExXcRHRmHeSXmzg=w2400", "alt", "Kitty4 NFT", 1, "nftImage"], [1, "right"], ["href", "https://polygonscan.com/address/0x2953399124f0cbb46d2cbacd8a89cf0599974963"], ["target", "_blank", "href", "https://lh3.googleusercontent.com/6xe_zomcrT5NtaaMcNp_km4_5hdB99r1ORRwfzOrnsvmaSEt1YZguwNqTw8A7L2kcd9kRywulcw36FmwKhXpEeRE1vh5-pUZYYYsnbMmzPBWr20-s44u_oKO-YjExXcRHRmHeSXmzg=w2400"], ["target", "_blank", "href", "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/80366395629522486436785199915095687810879187654138836265477219828560885186561", 1, "btn", "btn-primary"]],
      template: function Kitty5Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " Kitty #4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Contract Address: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "0x2953399124f0cbb46d2cbacd8a89cf0599974963");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Token ID:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, " 80366395629522486436785199915095687810879187654138836265477219828560885186561");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Blockchain:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, " Polygon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Direct NFT Image Link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "View in OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](1, _c0));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: [".nftImage[_ngcontent-%COMP%] {\n  border: 5px solid black;\n  padding: 10px;\n  background: rgba(201, 201, 201, 0.5);\n}\n\n.left[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  word-wrap: break-word;\n}\n\n@media screen and (max-width: 560px) {\n  .nftImage[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 10px;\n  }\n\n  .left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%] {\n    height: 100%;\n    max-width: 90%;\n    display: block;\n  }\n}\n\n@media screen and (min-width: 561px) {\n  .nftImage[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n\n  .left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%] {\n    height: 100%;\n    max-width: 50%;\n    display: inline-block;\n    vertical-align: top;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aWxzb25yYW1zdGVhZC9EZXNrdG9wL25ld1Byb2plY3RzMjAyMS9raXR0eWNsdWIvcHVibGljL3NyYy9hcHAva2l0dHk1L2tpdHR5NS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAva2l0dHk1L2tpdHR5NS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLG9DQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxrQkFBQTtBQ0VGOztBREFBO0VBQ0UscUJBQUE7QUNHRjs7QURBQTtFQUNFO0lBQ0UsV0FBQTtJQUNBLGdCQUFBO0VDR0Y7O0VEREE7O0lBRUUsWUFBQTtJQUNBLGNBQUE7SUFDQSxjQUFBO0VDSUY7QUFDRjs7QURGQTtFQUNFO0lBQ0UsVUFBQTtFQ0lGOztFREZBOztJQUVFLFlBQUE7SUFDQSxjQUFBO0lBQ0EscUJBQUE7SUFDQSxtQkFBQTtFQ0tGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9raXR0eTUva2l0dHk1LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5mdEltYWdlIHtcbiAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yOiAjYzljOWM5LCAkYWxwaGE6IDAuNSk7XG59XG4ubGVmdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5yaWdodCBwIHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NjBweCkge1xuICAubmZ0SW1hZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbiAgLmxlZnQsXG4gIC5yaWdodCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC13aWR0aDogOTAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NjFweCkge1xuICAubmZ0SW1hZ2Uge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbiAgLmxlZnQsXG4gIC5yaWdodCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC13aWR0aDogNTAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB9XG59XG4iLCIubmZ0SW1hZ2Uge1xuICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyMDEsIDIwMSwgMjAxLCAwLjUpO1xufVxuXG4ubGVmdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnJpZ2h0IHAge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2MHB4KSB7XG4gIC5uZnRJbWFnZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuXG4gIC5sZWZ0LFxuLnJpZ2h0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA5MCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU2MXB4KSB7XG4gIC5uZnRJbWFnZSB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxuXG4gIC5sZWZ0LFxuLnJpZ2h0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA1MCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](Kitty5Component, [{
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
      return ["/"];
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

    Kitty6Component.??fac = function Kitty6Component_Factory(t) {
      return new (t || Kitty6Component)();
    };

    Kitty6Component.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: Kitty6Component,
      selectors: [["app-kitty6"]],
      decls: 31,
      vars: 2,
      consts: [[1, "btn", "btn-success", 3, "routerLink"], [1, "container"], [1, "left"], ["src", "https://lh3.googleusercontent.com/3-4cZWRMw8e4auSVqM1G-d5ohBws7RKsHYFJNY8kS0FmLDXIXjTpfSP41Qd9S7JPoJKFYz2lmHz5HIZ_1ItDdilaQF0VY6iop1zQcVpZ6RQQB5fNuKECmMCI5yUvln5-IhHs8Ak1kw=w2400", "alt", "Kitty5 NFT", 1, "nftImage"], [1, "right"], ["href", "https://polygonscan.com/address/0x2953399124f0cbb46d2cbacd8a89cf0599974963"], ["target", "_blank", "href", "https://lh3.googleusercontent.com/3-4cZWRMw8e4auSVqM1G-d5ohBws7RKsHYFJNY8kS0FmLDXIXjTpfSP41Qd9S7JPoJKFYz2lmHz5HIZ_1ItDdilaQF0VY6iop1zQcVpZ6RQQB5fNuKECmMCI5yUvln5-IhHs8Ak1kw=w2400"], ["target", "_blank", "href", "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/80366395629522486436785199915095687810879187654138836265477219829660396814337", 1, "btn", "btn-primary"]],
      template: function Kitty6Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " Kitty #5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Contract Address: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "0x2953399124f0cbb46d2cbacd8a89cf0599974963");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Token ID:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, " 80366395629522486436785199915095687810879187654138836265477219829660396814337");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Blockchain:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, " Polygon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Direct NFT Image Link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "View in OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](1, _c0));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: [".nftImage[_ngcontent-%COMP%] {\n  border: 5px solid black;\n  padding: 10px;\n  background: rgba(201, 201, 201, 0.5);\n}\n\n.left[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  word-wrap: break-word;\n}\n\n@media screen and (max-width: 560px) {\n  .nftImage[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 10px;\n  }\n\n  .left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%] {\n    height: 100%;\n    max-width: 90%;\n    display: block;\n  }\n}\n\n@media screen and (min-width: 561px) {\n  .nftImage[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n\n  .left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%] {\n    height: 100%;\n    max-width: 50%;\n    display: inline-block;\n    vertical-align: top;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aWxzb25yYW1zdGVhZC9EZXNrdG9wL25ld1Byb2plY3RzMjAyMS9raXR0eWNsdWIvcHVibGljL3NyYy9hcHAva2l0dHk2L2tpdHR5Ni5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAva2l0dHk2L2tpdHR5Ni5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLG9DQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxrQkFBQTtBQ0VGOztBREFBO0VBQ0UscUJBQUE7QUNHRjs7QURBQTtFQUNFO0lBQ0UsV0FBQTtJQUNBLGdCQUFBO0VDR0Y7O0VEREE7O0lBRUUsWUFBQTtJQUNBLGNBQUE7SUFDQSxjQUFBO0VDSUY7QUFDRjs7QURGQTtFQUNFO0lBQ0UsVUFBQTtFQ0lGOztFREZBOztJQUVFLFlBQUE7SUFDQSxjQUFBO0lBQ0EscUJBQUE7SUFDQSxtQkFBQTtFQ0tGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9raXR0eTYva2l0dHk2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5mdEltYWdlIHtcbiAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yOiAjYzljOWM5LCAkYWxwaGE6IDAuNSk7XG59XG4ubGVmdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5yaWdodCBwIHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NjBweCkge1xuICAubmZ0SW1hZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbiAgLmxlZnQsXG4gIC5yaWdodCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC13aWR0aDogOTAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NjFweCkge1xuICAubmZ0SW1hZ2Uge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbiAgLmxlZnQsXG4gIC5yaWdodCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC13aWR0aDogNTAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB9XG59XG4iLCIubmZ0SW1hZ2Uge1xuICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyMDEsIDIwMSwgMjAxLCAwLjUpO1xufVxuXG4ubGVmdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnJpZ2h0IHAge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2MHB4KSB7XG4gIC5uZnRJbWFnZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuXG4gIC5sZWZ0LFxuLnJpZ2h0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA5MCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU2MXB4KSB7XG4gIC5uZnRJbWFnZSB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxuXG4gIC5sZWZ0LFxuLnJpZ2h0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA1MCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](Kitty6Component, [{
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
      return ["/"];
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

    Kitty7Component.??fac = function Kitty7Component_Factory(t) {
      return new (t || Kitty7Component)();
    };

    Kitty7Component.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: Kitty7Component,
      selectors: [["app-kitty7"]],
      decls: 31,
      vars: 2,
      consts: [[1, "btn", "btn-success", 3, "routerLink"], [1, "container"], [1, "left"], ["src", "https://lh3.googleusercontent.com/DOz6Vnw03B0HXsgQ2iMK_SoQDf8I52DVeBR6Phqypu-K4nr73ybnaY1KGpnVtk-Sd35y_MJkNvIr-TCOIo9a7mpp75kLjX4yKP2YOX9OJUUVFWf_tlZIga1SQsu63UmdcydVaq3LZQ=w2400", "alt", "Kitty6 NFT", 1, "nftImage"], [1, "right"], ["href", "https://polygonscan.com/address/0x2953399124f0cbb46d2cbacd8a89cf0599974963"], ["target", "_blank", "href", "https://lh3.googleusercontent.com/DOz6Vnw03B0HXsgQ2iMK_SoQDf8I52DVeBR6Phqypu-K4nr73ybnaY1KGpnVtk-Sd35y_MJkNvIr-TCOIo9a7mpp75kLjX4yKP2YOX9OJUUVFWf_tlZIga1SQsu63UmdcydVaq3LZQ=w2400"], ["target", "_blank", "href", "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/80366395629522486436785199915095687810879187654138836265477219830759908442113", 1, "btn", "btn-primary"]],
      template: function Kitty7Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " Kitty #6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Contract Address: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "0x2953399124f0cbb46d2cbacd8a89cf0599974963");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Token ID:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, " 80366395629522486436785199915095687810879187654138836265477219830759908442113");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Blockchain:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, " Polygon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Direct NFT Image Link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "View in OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](1, _c0));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: [".nftImage[_ngcontent-%COMP%] {\n  border: 5px solid black;\n  padding: 10px;\n  background: rgba(201, 201, 201, 0.5);\n}\n\n.left[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  word-wrap: break-word;\n}\n\n@media screen and (max-width: 560px) {\n  .nftImage[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 10px;\n  }\n\n  .left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%] {\n    height: 100%;\n    max-width: 90%;\n    display: block;\n  }\n}\n\n@media screen and (min-width: 561px) {\n  .nftImage[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n\n  .left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%] {\n    height: 100%;\n    max-width: 50%;\n    display: inline-block;\n    vertical-align: top;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aWxzb25yYW1zdGVhZC9EZXNrdG9wL25ld1Byb2plY3RzMjAyMS9raXR0eWNsdWIvcHVibGljL3NyYy9hcHAva2l0dHk3L2tpdHR5Ny5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAva2l0dHk3L2tpdHR5Ny5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLG9DQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxrQkFBQTtBQ0VGOztBREFBO0VBQ0UscUJBQUE7QUNHRjs7QURBQTtFQUNFO0lBQ0UsV0FBQTtJQUNBLGdCQUFBO0VDR0Y7O0VEREE7O0lBRUUsWUFBQTtJQUNBLGNBQUE7SUFDQSxjQUFBO0VDSUY7QUFDRjs7QURGQTtFQUNFO0lBQ0UsVUFBQTtFQ0lGOztFREZBOztJQUVFLFlBQUE7SUFDQSxjQUFBO0lBQ0EscUJBQUE7SUFDQSxtQkFBQTtFQ0tGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9raXR0eTcva2l0dHk3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5mdEltYWdlIHtcbiAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yOiAjYzljOWM5LCAkYWxwaGE6IDAuNSk7XG59XG4ubGVmdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5yaWdodCBwIHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NjBweCkge1xuICAubmZ0SW1hZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbiAgLmxlZnQsXG4gIC5yaWdodCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC13aWR0aDogOTAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NjFweCkge1xuICAubmZ0SW1hZ2Uge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbiAgLmxlZnQsXG4gIC5yaWdodCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC13aWR0aDogNTAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB9XG59XG4iLCIubmZ0SW1hZ2Uge1xuICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyMDEsIDIwMSwgMjAxLCAwLjUpO1xufVxuXG4ubGVmdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnJpZ2h0IHAge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2MHB4KSB7XG4gIC5uZnRJbWFnZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuXG4gIC5sZWZ0LFxuLnJpZ2h0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA5MCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU2MXB4KSB7XG4gIC5uZnRJbWFnZSB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxuXG4gIC5sZWZ0LFxuLnJpZ2h0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA1MCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](Kitty7Component, [{
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
      return ["/"];
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

    Kitty8Component.??fac = function Kitty8Component_Factory(t) {
      return new (t || Kitty8Component)();
    };

    Kitty8Component.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: Kitty8Component,
      selectors: [["app-kitty8"]],
      decls: 31,
      vars: 2,
      consts: [[1, "btn", "btn-success", 3, "routerLink"], [1, "container"], [1, "left"], ["src", "https://lh3.googleusercontent.com/Y2iNs7Z2z7HRSBzqW_aC14jM6usK5pr-ku95FtsRkO9CVtz23lpvL0U_kgWdiz6kxpcSH6DgAFVpfOXVLmKhy4PqLgVTRDAIzP3sA5sDrc-0uGn2H6Z5rfMq0khsc-Rl7gLlxun5iQ=w2400", "alt", "Kitty7 NFT", 1, "nftImage"], [1, "right"], ["href", "https://polygonscan.com/address/0x2953399124f0cbb46d2cbacd8a89cf0599974963"], ["target", "_blank", "href", "https://lh3.googleusercontent.com/Y2iNs7Z2z7HRSBzqW_aC14jM6usK5pr-ku95FtsRkO9CVtz23lpvL0U_kgWdiz6kxpcSH6DgAFVpfOXVLmKhy4PqLgVTRDAIzP3sA5sDrc-0uGn2H6Z5rfMq0khsc-Rl7gLlxun5iQ=w2400"], ["target", "_blank", "href", "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/80366395629522486436785199915095687810879187654138836265477219831859420069889", 1, "btn", "btn-primary"]],
      template: function Kitty8Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " Kitty #7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Contract Address: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "0x2953399124f0cbb46d2cbacd8a89cf0599974963");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Token ID:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, " 80366395629522486436785199915095687810879187654138836265477219831859420069889");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Blockchain:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, " Polygon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Direct NFT Image Link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "View in OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](1, _c0));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: [".nftImage[_ngcontent-%COMP%] {\n  border: 5px solid black;\n  padding: 10px;\n  background: rgba(201, 201, 201, 0.5);\n}\n\n.left[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  word-wrap: break-word;\n}\n\n@media screen and (max-width: 560px) {\n  .nftImage[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 10px;\n  }\n\n  .left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%] {\n    height: 100%;\n    max-width: 90%;\n    display: block;\n  }\n}\n\n@media screen and (min-width: 561px) {\n  .nftImage[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n\n  .left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%] {\n    height: 100%;\n    max-width: 50%;\n    display: inline-block;\n    vertical-align: top;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aWxzb25yYW1zdGVhZC9EZXNrdG9wL25ld1Byb2plY3RzMjAyMS9raXR0eWNsdWIvcHVibGljL3NyYy9hcHAva2l0dHk4L2tpdHR5OC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAva2l0dHk4L2tpdHR5OC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLG9DQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxrQkFBQTtBQ0VGOztBREFBO0VBQ0UscUJBQUE7QUNHRjs7QURBQTtFQUNFO0lBQ0UsV0FBQTtJQUNBLGdCQUFBO0VDR0Y7O0VEREE7O0lBRUUsWUFBQTtJQUNBLGNBQUE7SUFDQSxjQUFBO0VDSUY7QUFDRjs7QURGQTtFQUNFO0lBQ0UsVUFBQTtFQ0lGOztFREZBOztJQUVFLFlBQUE7SUFDQSxjQUFBO0lBQ0EscUJBQUE7SUFDQSxtQkFBQTtFQ0tGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9raXR0eTgva2l0dHk4LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5mdEltYWdlIHtcbiAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yOiAjYzljOWM5LCAkYWxwaGE6IDAuNSk7XG59XG4ubGVmdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5yaWdodCBwIHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NjBweCkge1xuICAubmZ0SW1hZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbiAgLmxlZnQsXG4gIC5yaWdodCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC13aWR0aDogOTAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NjFweCkge1xuICAubmZ0SW1hZ2Uge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbiAgLmxlZnQsXG4gIC5yaWdodCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC13aWR0aDogNTAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB9XG59XG4iLCIubmZ0SW1hZ2Uge1xuICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyMDEsIDIwMSwgMjAxLCAwLjUpO1xufVxuXG4ubGVmdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnJpZ2h0IHAge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2MHB4KSB7XG4gIC5uZnRJbWFnZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuXG4gIC5sZWZ0LFxuLnJpZ2h0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA5MCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU2MXB4KSB7XG4gIC5uZnRJbWFnZSB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxuXG4gIC5sZWZ0LFxuLnJpZ2h0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA1MCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](Kitty8Component, [{
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
      return ["/"];
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

    Kitty9Component.??fac = function Kitty9Component_Factory(t) {
      return new (t || Kitty9Component)();
    };

    Kitty9Component.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: Kitty9Component,
      selectors: [["app-kitty9"]],
      decls: 31,
      vars: 2,
      consts: [[1, "btn", "btn-success", 3, "routerLink"], [1, "container"], [1, "left"], ["src", "https://lh3.googleusercontent.com/fBHB27P993aCO0Ou-AHZuY9QKyJ0G0w6HILdjvKwD-RDBdIIaZCLm0FvfioQ5mo9WrDF-0D_jPAZNQ56I0ZSEXIMSY1CyPv7EOhajahZ91X-DcsuhExeocsaYfwp2SfXe2agbUDHww=w2400", "alt", "Kitty8 NFT", 1, "nftImage"], [1, "right"], ["href", "https://polygonscan.com/address/0x2953399124f0cbb46d2cbacd8a89cf0599974963"], ["target", "_blank", "href", "https://lh3.googleusercontent.com/fBHB27P993aCO0Ou-AHZuY9QKyJ0G0w6HILdjvKwD-RDBdIIaZCLm0FvfioQ5mo9WrDF-0D_jPAZNQ56I0ZSEXIMSY1CyPv7EOhajahZ91X-DcsuhExeocsaYfwp2SfXe2agbUDHww=w2400"], ["target", "_blank", "href", "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/80366395629522486436785199915095687810879187654138836265477219832958931697665", 1, "btn", "btn-primary"]],
      template: function Kitty9Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " Kitty #8");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Contract Address: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "0x2953399124f0cbb46d2cbacd8a89cf0599974963");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Token ID:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, " 80366395629522486436785199915095687810879187654138836265477219832958931697665");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Blockchain:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, " Polygon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Direct NFT Image Link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "View in OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](1, _c0));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: [".nftImage[_ngcontent-%COMP%] {\n  border: 5px solid black;\n  padding: 10px;\n  background: rgba(201, 201, 201, 0.5);\n}\n\n.left[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  word-wrap: break-word;\n}\n\n@media screen and (max-width: 560px) {\n  .nftImage[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 10px;\n  }\n\n  .left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%] {\n    height: 100%;\n    max-width: 90%;\n    display: block;\n  }\n}\n\n@media screen and (min-width: 561px) {\n  .nftImage[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n\n  .left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%] {\n    height: 100%;\n    max-width: 50%;\n    display: inline-block;\n    vertical-align: top;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aWxzb25yYW1zdGVhZC9EZXNrdG9wL25ld1Byb2plY3RzMjAyMS9raXR0eWNsdWIvcHVibGljL3NyYy9hcHAva2l0dHk5L2tpdHR5OS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAva2l0dHk5L2tpdHR5OS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLG9DQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxrQkFBQTtBQ0VGOztBREFBO0VBQ0UscUJBQUE7QUNHRjs7QURBQTtFQUNFO0lBQ0UsV0FBQTtJQUNBLGdCQUFBO0VDR0Y7O0VEREE7O0lBRUUsWUFBQTtJQUNBLGNBQUE7SUFDQSxjQUFBO0VDSUY7QUFDRjs7QURGQTtFQUNFO0lBQ0UsVUFBQTtFQ0lGOztFREZBOztJQUVFLFlBQUE7SUFDQSxjQUFBO0lBQ0EscUJBQUE7SUFDQSxtQkFBQTtFQ0tGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9raXR0eTkva2l0dHk5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5mdEltYWdlIHtcbiAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yOiAjYzljOWM5LCAkYWxwaGE6IDAuNSk7XG59XG4ubGVmdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5yaWdodCBwIHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NjBweCkge1xuICAubmZ0SW1hZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbiAgLmxlZnQsXG4gIC5yaWdodCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC13aWR0aDogOTAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NjFweCkge1xuICAubmZ0SW1hZ2Uge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbiAgLmxlZnQsXG4gIC5yaWdodCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC13aWR0aDogNTAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB9XG59XG4iLCIubmZ0SW1hZ2Uge1xuICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyMDEsIDIwMSwgMjAxLCAwLjUpO1xufVxuXG4ubGVmdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnJpZ2h0IHAge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2MHB4KSB7XG4gIC5uZnRJbWFnZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuXG4gIC5sZWZ0LFxuLnJpZ2h0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA5MCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU2MXB4KSB7XG4gIC5uZnRJbWFnZSB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxuXG4gIC5sZWZ0LFxuLnJpZ2h0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA1MCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](Kitty9Component, [{
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

    var _c12 = function _c12() {
      return ["/nfts/kitty13"];
    };

    var _c13 = function _c13() {
      return ["/nfts/kitty14"];
    };

    var _c14 = function _c14() {
      return ["/nfts/kitty15"];
    };

    var _c15 = function _c15() {
      return ["/nfts/kitty16"];
    };

    var _c16 = function _c16() {
      return ["/nfts/kitty17"];
    };

    var _c17 = function _c17() {
      return ["/nfts/kitty18"];
    };

    var _c18 = function _c18() {
      return ["/nfts/kitty19"];
    };

    var _c19 = function _c19() {
      return ["/nfts/kitty20"];
    };

    var _c20 = function _c20() {
      return ["/nfts/kitty21"];
    };

    var _c21 = function _c21() {
      return ["/nfts/kitty22"];
    };

    var _c22 = function _c22() {
      return ["/nfts/kitty23"];
    };

    var _c23 = function _c23() {
      return ["/nfts/kitty24"];
    };

    var _c24 = function _c24() {
      return ["/nfts/kitty25"];
    };

    var _c25 = function _c25() {
      return ["/nfts/kitty26"];
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

    TotalCollectionComponent.??fac = function TotalCollectionComponent_Factory(t) {
      return new (t || TotalCollectionComponent)();
    };

    TotalCollectionComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: TotalCollectionComponent,
      selectors: [["app-total-collection"]],
      decls: 539,
      vars: 104,
      consts: [[1, "desktopCollection"], [1, "row"], [1, "col-sm-2"], [1, "card"], ["src", "https://lh3.googleusercontent.com/9ShmIQZHmlG3DdMNHV8OdHkVNxp9TdGWlXtVHMTyz5lon90QB3MSHhKKQA8HsOyEwSiR6vJu4qNNuYvxaK1mU2ey5gLY95qBOXMgtq08rgn9jB7CffOIpgcSCSMGx0K0lH3J6eYV1g=w2400", "alt", "Kitty1 NFT", 1, "card-img-top", 2, "width", "100%"], [1, "card-body"], [1, "card-title"], [1, "btn", "btn-success", 3, "routerLink"], ["target", "_blank", "href", "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/80366395629522486436785199915095687810879187654138836265477219824162838675457", 1, "btn", "btn-primary"], ["src", "https://lh3.googleusercontent.com/BKKonPpX1q0FxvaYOOBS1-e8SLmdJOMv7KnGqWvbwqNAbmRO7O8vmlZ5OiA7kfwuVAbAMDw_Z_a2EFcfdblwxDJzAZx5AeJg13ND3_BVoEOEplPyHwZJfCp20vM1tCjtLNb2-eOmSw=w2400", "alt", "Card image cap", 1, "card-img-top", 2, "width", "100%"], ["target", "_blank", "href", "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/80366395629522486436785199915095687810879187654138836265477219825262350303233", 1, "btn", "btn-primary"], ["src", "https://lh3.googleusercontent.com/McL0a7Igd77NgRxMFtdqgzRoZH97tKrQ7_YEkwiCRqlvA5QwHhhmrd98UkNHDaPuye00AuTeO1_ovt0HXvuanXjmBXUF28IgfR9aDkCId17O94eQLUfYGdAR1be7wEwnIkEu9Bbt3A=w2400", "alt", "Card image cap", 1, "card-img-top", 2, "width", "100%"], ["target", "_blank", "href", "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/80366395629522486436785199915095687810879187654138836265477219826361861931009", 1, "btn", "btn-primary"], ["src", "https://lh3.googleusercontent.com/j0AkEQNwhN9iMiLpKZCPhyD3_jRDkswhRLYBDm1fiBKI9_3xYpNdQJxpQEEtjDsbwNDkY0wxj0BnYF_lMKOx5AjhmrwndaKbz_09x91W9UWXl6L2_zzklEBXVo-PVonFUFnpVoGqTg=w2400", "alt", "Card image cap", 1, "card-img-top", 2, "width", "100%"], ["target", "_blank", "href", "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/80366395629522486436785199915095687810879187654138836265477219827461373558785", 1, "btn", "btn-primary"], ["src", "https://lh3.googleusercontent.com/6xe_zomcrT5NtaaMcNp_km4_5hdB99r1ORRwfzOrnsvmaSEt1YZguwNqTw8A7L2kcd9kRywulcw36FmwKhXpEeRE1vh5-pUZYYYsnbMmzPBWr20-s44u_oKO-YjExXcRHRmHeSXmzg=w2400", "alt", "Card image cap", 1, "card-img-top", 2, "width", "100%"], ["target", "_blank", "href", "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/80366395629522486436785199915095687810879187654138836265477219828560885186561", 1, "btn", "btn-primary"], ["src", "https://lh3.googleusercontent.com/3-4cZWRMw8e4auSVqM1G-d5ohBws7RKsHYFJNY8kS0FmLDXIXjTpfSP41Qd9S7JPoJKFYz2lmHz5HIZ_1ItDdilaQF0VY6iop1zQcVpZ6RQQB5fNuKECmMCI5yUvln5-IhHs8Ak1kw=w2400", "alt", "Card image cap", 1, "card-img-top", 2, "width", "100%"], ["target", "_blank", "href", "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/80366395629522486436785199915095687810879187654138836265477219829660396814337", 1, "btn", "btn-primary"], ["src", "https://lh3.googleusercontent.com/DOz6Vnw03B0HXsgQ2iMK_SoQDf8I52DVeBR6Phqypu-K4nr73ybnaY1KGpnVtk-Sd35y_MJkNvIr-TCOIo9a7mpp75kLjX4yKP2YOX9OJUUVFWf_tlZIga1SQsu63UmdcydVaq3LZQ=w2400", "alt", "Card image cap", 1, "card-img-top", 2, "width", "100%"], ["target", "_blank", "href", "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/80366395629522486436785199915095687810879187654138836265477219830759908442113", 1, "btn", "btn-primary"], ["src", "https://lh3.googleusercontent.com/Y2iNs7Z2z7HRSBzqW_aC14jM6usK5pr-ku95FtsRkO9CVtz23lpvL0U_kgWdiz6kxpcSH6DgAFVpfOXVLmKhy4PqLgVTRDAIzP3sA5sDrc-0uGn2H6Z5rfMq0khsc-Rl7gLlxun5iQ=w2400", "alt", "Card image cap", 1, "card-img-top", 2, "width", "100%"], ["target", "_blank", "href", "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/80366395629522486436785199915095687810879187654138836265477219831859420069889", 1, "btn", "btn-primary"], ["src", "https://lh3.googleusercontent.com/fBHB27P993aCO0Ou-AHZuY9QKyJ0G0w6HILdjvKwD-RDBdIIaZCLm0FvfioQ5mo9WrDF-0D_jPAZNQ56I0ZSEXIMSY1CyPv7EOhajahZ91X-DcsuhExeocsaYfwp2SfXe2agbUDHww=w2400", "alt", "Card image cap", 1, "card-img-top", 2, "width", "100%"], ["target", "_blank", "href", "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/80366395629522486436785199915095687810879187654138836265477219832958931697665", 1, "btn", "btn-primary"], ["src", "https://lh3.googleusercontent.com/VzzwueCkjCwxdSMG5eaR579MzT40nWZ_yAIpsrlo58HaV23-C9bJh-NV5_esngtai3uUB9DGKPLi0t-LIJA4QZJzrr-2y0iYKB1c1NRcA3QTNZ7ENEYIbahOLUyYcffZjpMvPQ80nA=w2400", "alt", "Card image cap", 1, "card-img-top", 2, "width", "100%"], ["target", "_blank", "href", "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/80366395629522486436785199915095687810879187654138836265477219834058443325441", 1, "btn", "btn-primary"], ["src", "https://lh3.googleusercontent.com/TsT7IWS255CeXV0-JLVpyRN4f6O1GtuBxxgZ_rArkdZ6tIMJMK4lX0JwCZZrfJ16IgvBQlixE_DFtlNQeA9RDMjqma5qCzyF8ezuo7utk96amqdm0X9S7j7YcbjXpgAAtkaQdJ7LcA=w2400", "alt", "Card image cap", 1, "card-img-top", 2, "width", "100%"], ["target", "_blank", "href", "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/80366395629522486436785199915095687810879187654138836265477219835157954953217", 1, "btn", "btn-primary"], ["src", "https://lh3.googleusercontent.com/N1HvyMZLbrFPC3MLLzLD5Xwaw9ozuZrhb6XyAuCK6UiolKyBltjGMjdOLzYtPKZDShKVEzZpIIhWdhVhXZMedEvV3-z5YtMsgQtRT9sVCG_EbEbtB-FFRLp-m1u4GJW92joBoIfUcA=w2400", "alt", "Card image cap", 1, "card-img-top", 2, "width", "100%"], ["target", "_blank", "href", "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/80366395629522486436785199915095687810879187654138836265477219836257466580993", 1, "btn", "btn-primary"], ["src", "https://lh3.googleusercontent.com/dowd0px8G3o2ltjHRzwIWXOpc9HuKjmG9ab0mTjGFWICgJ_xZEGaspWmMrm4RM6fsdvQy4Tzn0a4LHu4S0fwEEehtQtJ1urKZln-cjrfA-2bGC15RP_PN02gDf_C7kAv28y9ypVWtQ=w2400", "alt", "Card image cap", 1, "card-img-top", 2, "width", "100%"], ["target", "_blank", "href", "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/80366395629522486436785199915095687810879187654138836265477219837356978208769", 1, "btn", "btn-primary"], ["src", "https://lh3.googleusercontent.com/9y7D3rfXgMNkld6fjN4e3OQwRXy7zQ5wuP94LEGNkoLeTEf-G6lDWihVNJ7M3wExx3rCSZ1X1tkMOdGMfATW-ZYEMK4o9H9ncbJf44TDcInmlmUf3yVBKmgOCbCVwCvLm8XF-85oXA=w2400", "alt", "Card image cap", 1, "card-img-top", 2, "width", "100%"], ["target", "_blank", "href", "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/80366395629522486436785199915095687810879187654138836265477219838456489836545", 1, "btn", "btn-primary"], ["src", "https://lh3.googleusercontent.com/oVna6Hn9WxWMBiU0oKe89W253EdgucVN_vkC997xM-Uegpc1XisMFiXV-5aIm7ZO9qNRh-RLZdaLDhrchuf6YES2ljzG9oTMs5UgLqvEY4d3Y5OV-btNQQgQWo5zaYBlQKK4BB9sYQ=w2400", "alt", "Card image cap", 1, "card-img-top", 2, "width", "100%"], ["target", "_blank", "href", "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/80366395629522486436785199915095687810879187654138836265477219839556001464321", 1, "btn", "btn-primary"], ["src", "https://lh3.googleusercontent.com/2pVz6xkRODdOx08Tc0vyw3OQE14Td5GRjzzpTuB81XudUIWG1UXwtvHhDfWVMQX3pUm6A_4JgFOumM5uHGf7hbxYo9tfigArpuZXroYSwavB4XYKJv5S_yx2EQb0Q0sTZ19BTDGvvg=w2400", "alt", "Card image cap", 1, "card-img-top", 2, "width", "100%"], ["target", "_blank", "href", "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/80366395629522486436785199915095687810879187654138836265477219840655513092097", 1, "btn", "btn-primary"], ["src", "https://lh3.googleusercontent.com/vJrw3-sXuALWqjCFG9WRKhp7DbQhidRFxbSpZXdIBpTgOwkn9NorCyLKA8hWgEpSbWozhuZIuOxbjvlWaKDVWfgVhOo1-8_6Zvl2H35vjMDJbE3zgIYMTeG9ffAHdECcNOslouuRhQ=w2400", "alt", "Card image cap", 1, "card-img-top", 2, "width", "100%"], ["target", "_blank", "href", "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/80366395629522486436785199915095687810879187654138836265477219841755024719873", 1, "btn", "btn-primary"], ["src", "https://lh3.googleusercontent.com/zI9tCVyqZ3K9ht8wDqISF23fLqGADmG_vabEhlLPAB92vuH3OlA1zKwO87VOAkL3dW4OBeMRSkKSnjn_-kX5-Vl1kqlaCNoZIRkShFVzpAH5cXvk4gXYys7Y6sxOBABpbJIpuw_ktA=w2400", "alt", "Card image cap", 1, "card-img-top", 2, "width", "100%"], ["target", "_blank", "href", "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/80366395629522486436785199915095687810879187654138836265477219842854536347649", 1, "btn", "btn-primary"], ["src", "https://lh3.googleusercontent.com/WGT8e7MdChlTmute99dLfhhtfSc5almDce0CM8KaeSde07qD8W-h5wJOtl3nnI2O8J7uKOUZXjSnO9reLgND5zFzhNRMpTcQbMrPCFwxr937-1vxx7Aqyrr2y2A_j_sdp9BMkI5MeQ=w2400", "alt", "Card image cap", 1, "card-img-top", 2, "width", "100%"], ["target", "_blank", "href", "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/80366395629522486436785199915095687810879187654138836265477219843954047975425", 1, "btn", "btn-primary"], ["src", "https://lh3.googleusercontent.com/iqws-tVQmKPT4-tnnK9jCSUOYrP4rRCBG7H-zJbvgUI9tAIajgW1KvjaBsXDe4N-X8ozgHpYSwYUL53Zk-fwnCsn2JSM5016nut0faCPUswIdAZuc9LhTd_tjOiQOg7hcaaa0MBm7Q=w2400", "alt", "Card image cap", 1, "card-img-top", 2, "width", "100%"], ["target", "_blank", "href", "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/80366395629522486436785199915095687810879187654138836265477219845053559603201", 1, "btn", "btn-primary"], ["src", "https://lh3.googleusercontent.com/g4Oduz2I5JviCcULsFAWnwOot3d-hg4yhQ5wdVSm6UaQNrHzkET18MocJNnfzeGZypGFOvkQs6Y4Ifgz9a43IG3FIAt4ax3YSO8W4s0XueXCVJ_oWzPm_opG14AsETwv-BeteelhdQ=w2400", "alt", "Card image cap", 1, "card-img-top", 2, "width", "100%"], ["target", "_blank", "href", "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/80366395629522486436785199915095687810879187654138836265477219846153071230977", 1, "btn", "btn-primary"], ["src", "https://lh3.googleusercontent.com/t_a1uV-FcwIyqYVJka7RdCENkpHXvV0N888hON8TzE7HHIuqbpU2kiJEadEtGsj3p3wkc6oYvW3rZnzcxblChrNXO8Mc_hO9Uc5jlLtfj6h14mAGVvuW5UkeBNOPGRvvFZkJMI5YAw=w2400", "alt", "Card image cap", 1, "card-img-top", 2, "width", "100%"], ["target", "_blank", "href", "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/80366395629522486436785199915095687810879187654138836265477219847252582858753", 1, "btn", "btn-primary"], ["src", "https://lh3.googleusercontent.com/yPRRPUtWqJactOE1pavNtfDsh0Q-aeVfi1723Pv17XqvEWVY-TUk3FmUJKrHWwWHjEHYSZi-PkeVdJkKekVVPj_OKgPmYF_fFSI8UmxaUapMd1P7cdchuJv67ZQUFjlbYxjCR-gapQ=w2400", "alt", "Card image cap", 1, "card-img-top", 2, "width", "100%"], ["target", "_blank", "href", "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/80366395629522486436785199915095687810879187654138836265477219848352094486529", 1, "btn", "btn-primary"], ["src", "https://lh3.googleusercontent.com/CloSNnjLPs2j3aEgk9IZUcGbxnLb33Bm0LCnXjirIe4GBtp_lTMzwArMQWYlPJ1rkTztpUbWJs7jRqdL-QUbHVxIJNPLh3WdphwybnVmm117VjiMBU-dTfmPRoDZoEeTVTYYsmbzkg=w2400", "alt", "Card image cap", 1, "card-img-top", 2, "width", "100%"], ["target", "_blank", "href", "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/80366395629522486436785199915095687810879187654138836265477219849451606114305", 1, "btn", "btn-primary"], ["src", "https://lh3.googleusercontent.com/J3XAHK-SfZ-vfLHEb3jhY4tjBEaPttbT39mixSIt2OWKXo09c8o5zn3GGXbYOJx0F8ojMp_wVwav4DvGAOI5UNLqhqVsXFx6u2d_2LQaP5G8lAX5SZBUKYgwXSS7jMvFJR_OjDO6iA=w2400", "alt", "Card image cap", 1, "card-img-top", 2, "width", "100%"], ["target", "_blank", "href", "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/80366395629522486436785199915095687810879187654138836265477219850551117742081", 1, "btn", "btn-primary"], ["src", "https://lh3.googleusercontent.com/gRWasApciLN_b5rzGuoG4cEGBRCWTPM0zlJ3PjA-c9fdGNTmV2hPzYiQEv1QTJxx5ZjmOhJPXczLxyklu2LOJTOAsn7rEnW_M0pTOpC7sMI8jCtEE7xX1tqVbYL1oBU2dTyAMimqeA=w2400", "alt", "Card image cap", 1, "card-img-top", 2, "width", "100%"], ["target", "_blank", "href", "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/80366395629522486436785199915095687810879187654138836265477219851650629369857", 1, "btn", "btn-primary"], [1, "mobileCollection"], [1, "col-xs-6"]],
      template: function TotalCollectionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "KittyClub #Buco");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Kitty #1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Kitty #2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](34, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Kitty #3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](44, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "Kitty #4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](54, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "Kitty #5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](65, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "Kitty #6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, "OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](75, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](78, "Kitty #7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, "OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](85, "img", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](88, "Kitty #8");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](92, "OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](95, "img", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](98, "Kitty #9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](100, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](102, "OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](105, "img", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](108, "Kitty #10");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](110, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "a", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](112, "OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](115, "img", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](118, "Kitty #11");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](120, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](122, "OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](126, "img", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](129, "Kitty #12");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](131, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "a", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](133, "OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](136, "img", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](139, "Kitty #13");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](141, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "a", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](143, "OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](145, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](146, "img", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](147, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](149, "Kitty #14");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](150, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](151, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "a", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](153, "OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](155, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](156, "img", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](158, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](159, "Kitty #15");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](160, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](161, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](162, "a", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](163, "OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](164, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](165, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](166, "img", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](167, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](168, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](169, "Kitty #16");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](170, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](171, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](172, "a", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](173, "OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](174, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](175, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](176, "img", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](177, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](178, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](179, "Kitty #17");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](180, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](181, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](182, "a", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](183, "OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](184, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](185, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](186, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](187, "img", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](188, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](189, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](190, "Kitty #18");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](191, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](192, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](193, "a", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](194, "OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](195, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](196, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](197, "img", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](198, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](199, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](200, "Kitty #19");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](201, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](202, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](203, "a", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](204, "OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](205, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](206, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](207, "img", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](208, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](209, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](210, "Kitty #20");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](211, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](212, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](213, "a", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](214, "OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](215, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](216, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](217, "img", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](218, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](219, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](220, "Kitty #21");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](221, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](222, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](223, "a", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](224, "OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](225, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](226, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](227, "img", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](228, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](229, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](230, "Kitty #22");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](231, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](232, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](233, "a", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](234, "OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](235, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](236, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](237, "img", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](238, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](239, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](240, "Kitty #23");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](241, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](242, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](243, "a", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](244, "OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](245, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](246, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](247, "img", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](248, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](249, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](250, "Kitty #24");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](251, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](252, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](253, "a", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](254, "OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](255, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](256, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](257, "img", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](258, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](259, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](260, "Kitty #25");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](261, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](262, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](263, "a", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](264, "OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](265, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](266, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](267, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](268, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](269, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](270, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](271, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](272, "KittyClub #Buco");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](273, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](274, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](275, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](276, "OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](277, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](278, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](279, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](280, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](281, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](282, "Kitty #1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](283, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](284, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](285, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](286, "OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](287, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](288, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](289, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](290, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](291, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](292, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](293, "Kitty #2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](294, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](295, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](296, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](297, "OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](298, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](299, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](300, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](301, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](302, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](303, "Kitty #3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](304, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](305, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](306, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](307, "OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](308, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](309, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](310, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](311, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](312, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](313, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](314, "Kitty #4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](315, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](316, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](317, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](318, "OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](319, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](320, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](321, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](322, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](323, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](324, "Kitty #5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](325, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](326, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](327, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](328, "OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](329, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](330, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](331, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](332, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](333, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](334, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](335, "Kitty #6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](336, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](337, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](338, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](339, "OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](340, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](341, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](342, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](343, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](344, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](345, "Kitty #7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](346, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](347, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](348, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](349, "OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](350, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](351, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](352, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](353, "img", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](354, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](355, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](356, "Kitty #8");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](357, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](358, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](359, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](360, "OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](361, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](362, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](363, "img", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](364, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](365, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](366, "Kitty #9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](367, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](368, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](369, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](370, "OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](371, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](372, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](373, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](374, "img", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](375, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](376, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](377, "Kitty #10");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](378, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](379, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](380, "a", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](381, "OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](382, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](383, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](384, "img", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](385, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](386, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](387, "Kitty #11");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](388, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](389, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](390, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](391, "OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](392, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](393, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](394, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](395, "img", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](396, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](397, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](398, "Kitty #12");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](399, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](400, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](401, "a", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](402, "OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](403, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](404, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](405, "img", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](406, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](407, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](408, "Kitty #13");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](409, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](410, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](411, "a", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](412, "OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](413, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](414, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](415, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](416, "img", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](417, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](418, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](419, "Kitty #14");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](420, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](421, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](422, "a", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](423, "OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](424, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](425, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](426, "img", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](427, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](428, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](429, "Kitty #15");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](430, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](431, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](432, "a", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](433, "OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](434, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](435, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](436, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](437, "img", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](438, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](439, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](440, "Kitty #16");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](441, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](442, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](443, "a", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](444, "OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](445, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](446, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](447, "img", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](448, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](449, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](450, "Kitty #17");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](451, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](452, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](453, "a", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](454, "OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](455, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](456, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](457, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](458, "img", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](459, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](460, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](461, "Kitty #18");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](462, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](463, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](464, "a", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](465, "OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](466, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](467, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](468, "img", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](469, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](470, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](471, "Kitty #19");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](472, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](473, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](474, "a", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](475, "OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](476, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](477, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](478, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](479, "img", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](480, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](481, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](482, "Kitty #20");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](483, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](484, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](485, "a", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](486, "OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](487, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](488, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](489, "img", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](490, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](491, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](492, "Kitty #21");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](493, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](494, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](495, "a", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](496, "OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](497, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](498, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](499, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](500, "img", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](501, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](502, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](503, "Kitty #22");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](504, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](505, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](506, "a", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](507, "OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](508, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](509, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](510, "img", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](511, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](512, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](513, "Kitty #23");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](514, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](515, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](516, "a", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](517, "OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](518, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](519, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](520, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](521, "img", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](522, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](523, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](524, "Kitty #24");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](525, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](526, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](527, "a", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](528, "OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](529, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](530, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](531, "img", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](532, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](533, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](534, "Kitty #25");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](535, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](536, "NFT Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](537, "a", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](538, "OpenSea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](52, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](53, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](54, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](55, _c3));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](56, _c4));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](57, _c5));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](58, _c6));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](59, _c7));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](60, _c8));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](61, _c9));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](62, _c10));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](63, _c11));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](64, _c12));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](65, _c13));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](66, _c14));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](67, _c15));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](68, _c16));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](69, _c17));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](70, _c18));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](71, _c19));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](72, _c20));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](73, _c21));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](74, _c22));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](75, _c23));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](76, _c24));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](77, _c25));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](78, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](79, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](80, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](81, _c3));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](82, _c4));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](83, _c5));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](84, _c6));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](85, _c7));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](86, _c8));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](87, _c9));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](88, _c10));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](89, _c11));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](90, _c12));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](91, _c13));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](92, _c14));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](93, _c15));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](94, _c16));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](95, _c17));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](96, _c18));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](97, _c19));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](98, _c20));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](99, _c21));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](100, _c22));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](101, _c23));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](102, _c24));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](103, _c25));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: [".row[_ngcontent-%COMP%] {\n  margin-bottom: 3rem;\n}\n\n.btn[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.card[_ngcontent-%COMP%] {\n  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.068), 0 6.7px 5.3px rgba(0, 0, 0, 0.096), 0 12.5px 10px rgba(0, 0, 0, 0.12), 0 22.3px 17.9px rgba(0, 0, 0, 0.144), 0 41.8px 33.4px rgba(0, 0, 0, 0.172), 0 100px 80px rgba(0, 0, 0, 0.24);\n}\n\n.card[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n@media screen and (max-width: 560px) {\n  .desktopCollection[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .card[_ngcontent-%COMP%] {\n    width: 14rem;\n  }\n}\n\n@media screen and (min-width: 561px) {\n  .mobileCollection[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .card[_ngcontent-%COMP%] {\n    width: 18rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aWxzb25yYW1zdGVhZC9EZXNrdG9wL25ld1Byb2plY3RzMjAyMS9raXR0eWNsdWIvcHVibGljL3NyYy9hcHAvdG90YWwtY29sbGVjdGlvbi90b3RhbC1jb2xsZWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90b3RhbC1jb2xsZWN0aW9uL3RvdGFsLWNvbGxlY3Rpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBQ0UsbU9BQUE7QUNDRjs7QURJRTtFQUNFLGtCQUFBO0FDRko7O0FETUE7RUFDRTtJQUNFLGFBQUE7RUNIRjs7RURLQTtJQUNFLFlBQUE7RUNGRjtBQUNGOztBRElBO0VBQ0U7SUFDRSxhQUFBO0VDRkY7O0VESUE7SUFDRSxZQUFBO0VDREY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3RvdGFsLWNvbGxlY3Rpb24vdG90YWwtY29sbGVjdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3cge1xuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xufVxuXG4uYnRuIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jYXJkIHtcbiAgYm94LXNoYWRvdzogMCAyLjhweCAyLjJweCByZ2JhKDAsIDAsIDAsIDAuMDY4KSxcbiAgICAwIDYuN3B4IDUuM3B4IHJnYmEoMCwgMCwgMCwgMC4wOTYpLCAwIDEyLjVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xMiksXG4gICAgMCAyMi4zcHggMTcuOXB4IHJnYmEoMCwgMCwgMCwgMC4xNDQpLCAwIDQxLjhweCAzMy40cHggcmdiYSgwLCAwLCAwLCAwLjE3MiksXG4gICAgMCAxMDBweCA4MHB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XG5cbiAgaDUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NjBweCkge1xuICAuZGVza3RvcENvbGxlY3Rpb24ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLmNhcmQge1xuICAgIHdpZHRoOiAxNHJlbTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTYxcHgpIHtcbiAgLm1vYmlsZUNvbGxlY3Rpb24ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLmNhcmQge1xuICAgIHdpZHRoOiAxOHJlbTtcbiAgfVxufVxuIiwiLnJvdyB7XG4gIG1hcmdpbi1ib3R0b206IDNyZW07XG59XG5cbi5idG4ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNhcmQge1xuICBib3gtc2hhZG93OiAwIDIuOHB4IDIuMnB4IHJnYmEoMCwgMCwgMCwgMC4wNjgpLCAwIDYuN3B4IDUuM3B4IHJnYmEoMCwgMCwgMCwgMC4wOTYpLCAwIDEyLjVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMjIuM3B4IDE3LjlweCByZ2JhKDAsIDAsIDAsIDAuMTQ0KSwgMCA0MS44cHggMzMuNHB4IHJnYmEoMCwgMCwgMCwgMC4xNzIpLCAwIDEwMHB4IDgwcHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcbn1cbi5jYXJkIGg1IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NjBweCkge1xuICAuZGVza3RvcENvbGxlY3Rpb24ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAuY2FyZCB7XG4gICAgd2lkdGg6IDE0cmVtO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NjFweCkge1xuICAubW9iaWxlQ29sbGVjdGlvbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5jYXJkIHtcbiAgICB3aWR0aDogMThyZW07XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](TotalCollectionComponent, [{
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