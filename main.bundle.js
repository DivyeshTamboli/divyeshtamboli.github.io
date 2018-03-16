webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "li:hover {\n    cursor: pointer;\n}\n\n.header{\n    background-color: black;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" href=\"#\">\n    Innovify Demo\n  </a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav ml-auto\">\n      <li [routerLinkActive]=\"['active']\" *ngIf=\"authService.userLoggedIn()\">\n        <a class=\"nav-link\" [routerLink]=\"['/home']\">Home\n          <span class=\"sr-only\">(current)</span>\n        </a>\n      </li>\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\" *ngIf=\"!authService.userLoggedIn()\">\n        <a class=\"nav-link\" [routerLink]=\"['/signin']\">Signin</a>\n      </li>\n\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\" *ngIf=\"!authService.userLoggedIn()\">\n        <a class=\"nav-link\" [routerLink]=\"['/signup']\">Signup</a>\n      </li>\n\n      <li class=\"nav-item\" (click)=\"logout()\" [routerLinkActive]=\"['active']\" *ngIf=\"authService.userLoggedIn()\">\n        <a class=\"nav-link\" >Logout</a>\n      </li>\n    </ul>\n\n  </div>\n</nav>\n<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_services_auth_service__ = __webpack_require__("../../../../../src/common/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.title = 'app';
    }
    AppComponent.prototype.logout = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()({
            title: 'Logged out successfully',
            type: 'success',
            showCancelButton: false,
            showConfirmButton: false,
            timer: 1000
        }).then(function (data) {
            _this.authService.logout();
            _this.router.navigate(['/signin']);
        }).catch();
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__common_services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_component_footer_footer_component__ = __webpack_require__("../../../../../src/common/component/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__signin_signin_component__ = __webpack_require__("../../../../../src/app/signin/signin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__signup_signup_component__ = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing_module__ = __webpack_require__("../../../../../src/app/app.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__common_services_auth_service__ = __webpack_require__("../../../../../src/common/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__common_services_authguard__ = __webpack_require__("../../../../../src/common/services/authguard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__common_fake_fake_backend__ = __webpack_require__("../../../../../src/common/fake/fake-backend.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__common_fake_jwt_interceptor__ = __webpack_require__("../../../../../src/common/fake/jwt-interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__common_component_header_header_component__ = __webpack_require__("../../../../../src/common/component/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ng2_img_cropper_index__ = __webpack_require__("../../../../ng2-img-cropper/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_7__signin_signin_component__["a" /* SigninComponent */],
                __WEBPACK_IMPORTED_MODULE_8__signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_0__common_component_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_16__common_component_header_header_component__["a" /* HeaderComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_9__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_17_ng2_img_cropper_index__["b" /* ImageCropperModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_10__common_services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_12__common_services_authguard__["a" /* AuthGuard */], {
                    provide: __WEBPACK_IMPORTED_MODULE_14__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_15__common_fake_jwt_interceptor__["a" /* JwtInterceptor */],
                    multi: true
                }, __WEBPACK_IMPORTED_MODULE_13__common_fake_fake_backend__["a" /* fakeBackendProvider */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export appRoutes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_services_authguard__ = __webpack_require__("../../../../../src/common/services/authguard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signin_signin_component__ = __webpack_require__("../../../../../src/app/signin/signin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup_component__ = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var appRoutes = [
    { path: '', redirectTo: 'signin', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__common_services_authguard__["a" /* AuthGuard */]] },
    { path: 'signin', component: __WEBPACK_IMPORTED_MODULE_2__signin_signin_component__["a" /* SigninComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_4__signup_signup_component__["a" /* SignupComponent */] },
    { path: '**', redirectTo: '' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* RouterModule */].forRoot(appRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".col-centered{\n    float: none;\n    margin: 0 auto;\n}\n.text-centered {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n}\n.header{\n    color : #808080;\n    margin-left:10%;\n    margin-top:70px;\n}\n.lefttitletext{\n   \n    margin-left: 5px;\n    \n    \n}\ndiv p{ margin-bottom: 8px !important;\n\n\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n            <h5 class=\"lefttitletext text-center\"> Welcome, {{user.firstName}} {{user.lastName}}</h5>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-md-2 col-left\">\n            <div class=\"text-left\">\n            <br>\n                <img data-toggle=\"modal\" class=\"img-thumbnail img-responsive center-block\" *ngIf=\"user.avatar\" [src]=\"user.avatar\">\n            </div>\n            \n        </div>\n        <div class=\"col-md-6 text-left\" >\n            <br>\n            <p><b>Name:</b>{{user.firstName}} {{user.lastName}}</p>\n                <p>\n                    <b>Email :</b> {{user?.email}}\n                </p>\n    \n                <p>\n                    <b>Mobile :</b> {{user?.mobile}}\n                </p>\n    \n                <p>\n                    <b>Date Of Birth :</b> {{user?.dateOfBirth}}\n                </p>\n                <p>\n                    <b>Address :</b> {{user?.address}}\n                </p>\n               \n    \n            </div>\n        \n    </div>\n    \n    <div class=\"row\">\n        \n        \n    </div>\n     \n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.user = JSON.parse(localStorage.getItem('currentUser'));
        console.log(this.user);
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/signin/signin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".col-centered{\n    float: none;\n    margin: 0 auto;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signin/signin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <br>\n  <br>\n  <div class=\"row \">\n    <div class=\"col-md-3 col-md-offset-4 col-centered\">\n      <form novalidate [formGroup]=\"loginForm\" (ngSubmit)=\"submit()\">\n\n        <div class=\"form-group\">\n          <label for=\"lastName\">Email</label>\n          <input formControlName=\"email\" type=\"email\" class=\"form-control\">\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"mobile\">Password</label>\n          <input formControlName=\"password\" type=\"password\"  class=\"form-control\">\n        </div>\n\n\n\n        <div class=\"text-center\">\n          <button type=\"button\" class=\"btn btn-dark btn-block\" type=\"submit\">Login</button>\n          \n        </div>\n        <div class=\"text-center\">\n         Don't have an account? <a [routerLink]=\"['/signup']\">Signup</a> \n          </div>\n        <br>\n        <div class=\"text-left\">\n          \n        </div>\n        <br>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/signin/signin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_models_user_model__ = __webpack_require__("../../../../../src/common/models/user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_services_auth_service__ = __webpack_require__("../../../../../src/common/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SigninComponent = /** @class */ (function () {
    function SigninComponent(fb, authService, router) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
    }
    SigninComponent.prototype.ngOnInit = function () {
        this.loginForm = this.fb.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]
        });
    };
    SigninComponent.prototype.submit = function () {
        var _this = this;
        var user = new __WEBPACK_IMPORTED_MODULE_2__common_models_user_model__["a" /* User */](this.loginForm.value.email, this.loginForm.value.password);
        this.authService.login(user).subscribe(function (result) {
            __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()({
                title: 'Logged in successfully',
                type: 'success',
                showCancelButton: false,
                showConfirmButton: false,
                timer: 1000
            }).then(function (data) {
                _this.router.navigate(['/home']);
            }).catch();
        }, function (error) {
            __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()({
                title: 'Invalid Credentials !',
                type: 'error',
                showCancelButton: false,
                showConfirmButton: false,
                timer: 1000
            }).then().catch();
        });
    };
    SigninComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-signin',
            template: __webpack_require__("../../../../../src/app/signin/signin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/signin/signin.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__common_services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "../../../../../src/app/signup/signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".col-centered{\n    float: none;\n    margin: 0 auto;\n}\n\n.err-msg{\ncolor:#FF4500;\nfont-size: 14px;\n}\n\nlabel {\n    font-size: 16px;\n    color:rgb(0, 0, 0);\n}\n\nimg:hover{\n    cursor: pointer;\n}\n\n.text-centered {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n}\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Modal -->\n<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Choose your Profile picture</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div>\n          <img-cropper [image]=\"data\" [settings]=\"cropperSettings\"></img-cropper>\n          <br>\n          <img *ngIf=\"data.image\" [src]=\"data.image\" [width]=\"cropperSettings.croppedWidth\" [height]=\"cropperSettings.croppedHeight\">\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"addImage()\">Crop</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"container\">\n  <br>\n  <br>\n  <div class=\"row\">\n    <div class=\"col-md-8 col-md-offset-2 col-centered\">\n      <form novalidate [formGroup]=\"signUpForm\" (ngSubmit)=\"submit()\">\n\n        <div class=\"text-center\">\n          <img *ngIf=\"!data.image\" src=\"./assets/dummyavatar.png\" class=\"img-thumbnail img-responsive center-block\" alt=\"Cinque Terre\" data-toggle=\"modal\"\n            data-target=\"#exampleModal\">\n          <img data-toggle=\"modal\" data-target=\"#exampleModal\" class=\"img-thumbnail img-responsive center-block\" *ngIf=\"data.image\"\n            [src]=\"data.image\" [width]=\"cropperSettings.croppedWidth\" [height]=\"cropperSettings.croppedHeight\">\n        </div>\n        <br>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label for=\"firstName\">First Name</label>\n              <input formControlName=\"firstName\" type=\"text\" class=\"form-control\">\n              <p class=\"err-msg\" *ngIf=\"signUpForm.controls.firstName.hasError('required') && !signUpForm.controls.firstName.pristine\">Empty First Name is not acceptable!</p>\n              <p class=\"err-msg\" *ngIf=\"signUpForm.controls.firstName.hasError('maxlength')\">First name can not be greater than 30 characters !</p>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label for=\"lastName\">Last Name</label>\n              <input formControlName=\"lastName\" type=\"text\" class=\"form-control has-error\">\n              <p class=\"err-msg\" *ngIf=\"signUpForm.controls.lastName.hasError('required') && !signUpForm.controls.lastName.pristine\">Empty Last name is not acceptable !</p>\n              <p class=\"err-msg\" *ngIf=\"signUpForm.controls.lastName.hasError('maxlength')\">Last name can not be greater than 30 characters !</p>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label for=\"mobile\">Mobile</label>\n              <input formControlName=\"mobile\" type=\"tel\" minlength=\"10\" maxlength=\"10\" class=\"form-control\">\n              <p class=\"err-msg\" *ngIf=\"signUpForm.controls.mobile.hasError('required') && signUpForm.controls.mobile.dirty\">Empty Mobile number is not acceptable!</p>\n              <p class=\"err-msg\" *ngIf=\"signUpForm.controls.mobile.hasError('minlength')\">Mobile number should be of 10 digits!</p>\n            </div>\n          </div>\n\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label for=\"mobile\">Date Of Birth</label>\n              <input formControlName=\"dateOfBirth\" type=\"date\" class=\"form-control\">\n              <p class=\"err-msg\" *ngIf=\"signUpForm.controls.dateOfBirth.hasError('required') && !signUpForm.controls.dateOfBirth.pristine\">Empty Date of birth is not acceptable !</p>\n              <p class=\"err-msg\" *ngIf=\"signUpForm.controls.dateOfBirth.hasError('validDate')\">Date of Birth must not be greater than the current date !</p>\n            </div>\n          </div>\n\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"mobile\">Address</label>\n          <textarea formControlName=\"address\" rows=\"4\" class=\"form-control\" aria-label=\"With textarea\" id=\"address\"></textarea>\n          <p class=\"err-msg\" *ngIf=\"signUpForm.controls.address.hasError('required') && !signUpForm.controls.address.pristine\">Empty Address is not acceptable !</p>\n        </div>\n        <div class=\"form-group has-error\">\n          <label for=\"lastName\">Email</label>\n          <input formControlName=\"email\" type=\"email\" class=\"form-control\">\n          <p class=\"err-msg\" *ngIf=\"signUpForm.controls.email.hasError('email') && !signUpForm.controls.email.pristine\">Not a valid Email-id!</p>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"lastName\">Password</label>\n          <input formControlName=\"password\" type=\"password\" class=\"form-control\">\n          <p class=\"err-msg\" *ngIf=\"signUpForm.controls.password.hasError('required') && !signUpForm.controls.password.pristine\">Empty Password is not acceptable !</p>\n        </div>\n\n        <div class=\"text-center\">\n          <button type=\"button\" class=\"btn btn-dark btn-block\" type=\"submit\">Signup</button>\n        </div>\n        <br>\n        <div class=\"text-center\">\n          Already have an account?<a [routerLink]=\"['/signin']\"> Login</a>\n        </div>\n        <br>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_services_auth_service__ = __webpack_require__("../../../../../src/common/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_models_user_model__ = __webpack_require__("../../../../../src/common/models/user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_img_cropper__ = __webpack_require__("../../../../ng2-img-cropper/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SignupComponent = /** @class */ (function () {
    function SignupComponent(fb, authService, router) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.cropperSettings = new __WEBPACK_IMPORTED_MODULE_5_ng2_img_cropper__["a" /* CropperSettings */]();
        this.cropperSettings.width = 100;
        this.cropperSettings.height = 100;
        this.cropperSettings.croppedWidth = 200;
        this.cropperSettings.croppedHeight = 200;
        this.cropperSettings.canvasWidth = 400;
        this.cropperSettings.canvasHeight = 300;
        this.data = {};
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.signUpForm = this.fb.group({
            firstName: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].maxLength(30)]],
            lastName: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].maxLength(30)]],
            email: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].email]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required]],
            mobile: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].minLength(10)]],
            dateOfBirth: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required, this.validateBirthDate]],
            address: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required]
        });
    };
    SignupComponent.prototype.submit = function () {
        var _this = this;
        console.log(this.signUpForm);
        if (!this.signUpForm.valid) {
            this.signUpForm.get('firstName').markAsDirty();
            this.signUpForm.get('lastName').markAsDirty();
            this.signUpForm.get('email').markAsDirty();
            this.signUpForm.get('password').markAsDirty();
            this.signUpForm.get('mobile').markAsDirty();
            this.signUpForm.get('dateOfBirth').markAsDirty();
            this.signUpForm.get('address').markAsDirty();
        }
        else {
            var formValue = this.signUpForm.value;
            var user = new __WEBPACK_IMPORTED_MODULE_4__common_models_user_model__["a" /* User */](formValue.email, formValue.password, formValue.firstName, formValue.lastName, formValue.mobile, formValue.dateOfBirth, formValue.address, this.data.image);
            this.authService.signup(user).subscribe(function (result) {
                __WEBPACK_IMPORTED_MODULE_6_sweetalert2___default()({
                    title: 'You have signed up successfully',
                    type: 'success',
                    showCancelButton: false,
                    showConfirmButton: false,
                    timer: 1000
                }).then(function (data) {
                    _this.router.navigate(['/signin']);
                }).catch();
            }, function (error) {
                __WEBPACK_IMPORTED_MODULE_6_sweetalert2___default()({
                    title: 'Email is already taken !',
                    type: 'error',
                    showCancelButton: false,
                    showConfirmButton: false,
                    timer: 1000
                }).then(function (data) {
                }).catch();
            });
        }
    };
    SignupComponent.prototype.addImage = function () {
    };
    SignupComponent.prototype.validateBirthDate = function (control) {
        // if (!control.value && control.value === "") {
        //   return { validDate: true };
        // }
        var selectedDate = new Date(control.value);
        var todayDate = new Date();
        if (selectedDate > todayDate) {
            return { validDate: true };
        }
        return null;
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
            selector: 'app-signup',
            template: __webpack_require__("../../../../../src/app/signup/signup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1__common_services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "../../../../../src/common/component/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#footer {\n    bottom: 0;\n    width: 100%;\n    height: 2rem;\n    background-color: rgb(187, 191, 197);\n    bottom: 0;\n    width: 100%;\n   \n    \n    \n  }\n\n  .footerbg{\n    bottom: 0;\n    width: 100%;\n    background-color: rgb(228, 228, 228);\n\n}\n\n  .card {\n    -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n    max-width: 300px;\n    margin: auto;\n    text-align: center;\n    font-family: arial;\n  }\n\n  .title {\n    color: grey;\n    font-size: 18px;\n  }\n\n  button {\n    border: none;\n    outline: 0;\n    display: inline-block;\n    padding: 8px;\n    color: white;\n    background-color: #000;\n    text-align: center;\n    cursor: pointer;\n    width: 100%;\n    font-size: 18px;\n  }\n\n  a {\n    text-decoration: none;\n    font-size: 22px;\n    color: black;\n  }\n\n  button:hover, a:hover {\n    opacity: 0.7;\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/common/component/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer footerbg\">\n\n    \n\n    <!--Footer Links-->\n    <div class=\"container mt-5 mb-4 text-center text-md-left\">\n        <div class=\"row mt-3\">\n\n            <!--First column-->\n            \n\n            <div class=\"col-md-4 col-lg-6 col-xl-6 dark-grey-text\">\n                <h6 class=\"title font-bold dark-grey-text\"style=\"margin-top: 30px; color: black;\">\n                    <strong >Common Footer</strong>\n                </h6>\n                <hr class=\"teal accent-3 mb-4 mt-0 d-inline-block mx-auto\" style=\"width: 60px;\">\n                <p>\n                    <i class=\"fa fa-home mr-3\"></i> Innovify Prahlad Nagar, Ahmedabad, Gujarat 380015</p>\n                <p>\n                    <i class=\"fa fa-envelope mr-3\"></i><a href=\"mailto:info@innovify.com\"> info@innovify.com</a></p>\n                <p>\n                    <i class=\"fa fa-phone mr-3\"></i><a href=\"call:+91-9601403426\"> +91-9601403426</a></p>\n                \n            </div>\n            <!--/.Fourth column-->\n\n        </div>\n    </div>\n   \n    <div id=\"footer\">\n        <div class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n            <!--Grid row-->\n            <p class=\"text-light\">© All Copyright reserved with <a href=\"http://www.innovify.com/\" class=\"text-light\" style=\"font-size: 18px;\" target=\"_blank\">Innovify </a> - Designed By <a href=\"http://www.divyeshtamboli.com/\" class=\"text-light\" style=\"font-size: 18px;\" target=\"_blank\">Divyesh Tamboli</a></p>\n           \n              \n        </div>\n    </div>\n</footer>"

/***/ }),

/***/ "../../../../../src/common/component/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/common/component/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/common/component/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/common/component/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "li:hover {\n    cursor: pointer;\n}\n\n.header{\n\n    padding: 5px 5px 5px 5px;\n    background-color: rgb(228, 228, 228);\n\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/common/component/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n    <h1>Common Header</h1>\n    <p>Innovify is a digital innovation & product management company. Offering a wide range of expertise, Innovify has become a valued partner to its clients by going beyond the typical scope of application development. Providing a full range digital service with sector specialists using an Agile & Lean philosophy; Innovify not only builds products, but grows and transforms businesses as well.</p>\n  </div>"

/***/ }),

/***/ "../../../../../src/common/component/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router) {
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/common/component/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/common/component/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/common/fake/fake-backend.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export FakeBackendInterceptor */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fakeBackendProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_delay__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/delay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_materialize__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/materialize.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_dematerialize__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/dematerialize.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var FakeBackendInterceptor = /** @class */ (function () {
    function FakeBackendInterceptor() {
    }
    FakeBackendInterceptor.prototype.intercept = function (request, next) {
        // array in local storage for registered users
        var users = JSON.parse(localStorage.getItem('users')) || [];
        // wrap in delayed observable to simulate server api call
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].of(null).mergeMap(function () {
            // authenticate
            if (request.url.endsWith('/api/authenticate') && request.method === 'POST') {
                // find if any user matches login credentials
                var filteredUsers = users.filter(function (user) {
                    return user.email === request.body.email && user.password === request.body.password;
                });
                if (filteredUsers.length) {
                    // if login details are valid return 200 OK with user details and fake jwt token
                    var user = filteredUsers[0];
                    var body = {
                        id: user.id,
                        email: user.email,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        mobile: user.mobile,
                        dateOfBirth: user.dateOfBirth,
                        address: user.address,
                        avatar: user.avatar,
                        token: 'fake-jwt-token'
                    };
                    return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].of(new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpResponse */]({ status: 200, body: body }));
                }
                else {
                    // else return 400 bad request
                    return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw('Email or password is incorrect');
                }
            }
            // get users
            if (request.url.endsWith('/api/users') && request.method === 'GET') {
                // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].of(new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpResponse */]({ status: 200, body: users }));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw('Unauthorised');
                }
            }
            // get user by id
            if (request.url.match(/\/api\/users\/\d+$/) && request.method === 'GET') {
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    // find user by id in users array
                    var urlParts = request.url.split('/');
                    var id_1 = parseInt(urlParts[urlParts.length - 1]);
                    var matchedUsers = users.filter(function (user) { return user.id === id_1; });
                    var user = matchedUsers.length ? matchedUsers[0] : null;
                    return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].of(new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpResponse */]({ status: 200, body: user }));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw('Unauthorised');
                }
            }
            // create user
            if (request.url.endsWith('/api/users') && request.method === 'POST') {
                // get new user object from post body
                var newUser_1 = request.body;
                // validation
                var duplicateUser = users.filter(function (user) { return user.email === newUser_1.email; }).length;
                if (duplicateUser) {
                    return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw('Email "' + newUser_1.email + '" is already taken');
                }
                // save new user
                newUser_1.id = users.length + 1;
                users.push(newUser_1);
                localStorage.setItem('users', JSON.stringify(users));
                // respond 200 OK
                console.log('respond 200');
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].of(new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpResponse */]({ status: 200 }));
            }
            // delete user
            if (request.url.match(/\/api\/users\/\d+$/) && request.method === 'DELETE') {
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    // find user by id in users array
                    var urlParts = request.url.split('/');
                    var id = parseInt(urlParts[urlParts.length - 1]);
                    for (var i = 0; i < users.length; i++) {
                        var user = users[i];
                        if (user.id === id) {
                            // delete user
                            users.splice(i, 1);
                            localStorage.setItem('users', JSON.stringify(users));
                            break;
                        }
                    }
                    // respond 200 OK
                    return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].of(new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpResponse */]({ status: 200 }));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw('Unauthorised');
                }
            }
            // pass through any requests not handled above
            return next.handle(request);
        })
            .materialize()
            .delay(500)
            .dematerialize();
    };
    FakeBackendInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], FakeBackendInterceptor);
    return FakeBackendInterceptor;
}());

var fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
    useClass: FakeBackendInterceptor,
    multi: true
};


/***/ }),

/***/ "../../../../../src/common/fake/jwt-interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JwtInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor() {
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        // add authorization header with jwt token if available
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + currentUser.token
                }
            });
        }
        return next.handle(request);
    };
    JwtInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], JwtInterceptor);
    return JwtInterceptor;
}());



/***/ }),

/***/ "../../../../../src/common/models/user.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    function User(email, password, firstName, lastName, mobile, dateOfBirth, address, avatar) {
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.mobile = mobile;
        this.dateOfBirth = dateOfBirth;
        this.address = address;
        this.avatar = avatar;
    }
    return User;
}());



/***/ }),

/***/ "../../../../../src/common/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = /** @class */ (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this.isLoggedIn = false;
    }
    AuthService.prototype.userLoggedIn = function () {
        return this.isLoggedIn;
    };
    AuthService.prototype.login = function (user) {
        var _this = this;
        return this.http.post('/api/authenticate', { email: user.email, password: user.password })
            .map(function (user) {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                _this.isLoggedIn = true;
            }
            return user;
        });
    };
    AuthService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.isLoggedIn = false;
        this.router.navigate(['/signin']);
    };
    AuthService.prototype.signup = function (user) {
        return this.http.post('/api/users', user)
            .map(function (response) {
            console.log(response);
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["a" /* Observable */].throw(error); });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/common/services/authguard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_service__ = __webpack_require__("../../../../../src/common/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (localStorage.getItem('currentUser')) {
            return true;
        }
        this.router.navigate(['/signin']);
        return false;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map