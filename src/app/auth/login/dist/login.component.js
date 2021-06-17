"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoginComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var const_1 = require("src/app/const");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, authService, fb, notifyService) {
        this.router = router;
        this.authService = authService;
        this.fb = fb;
        this.notifyService = notifyService;
        this.invalidLogin = false;
        this.rememberMe = false;
        this.display = 'none';
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.fb.group({
            email: ['', [forms_1.Validators.required, forms_1.Validators.email]],
            password: ['', forms_1.Validators.required]
        });
        if (localStorage.getItem("email") && localStorage.getItem("password")) {
            this.loginForm.patchValue({
                email: localStorage.getItem("email"),
                password: localStorage.getItem("password")
            });
        }
    };
    Object.defineProperty(LoginComponent.prototype, "loginFormControl", {
        get: function () {
            return this.loginForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        var user = this.loginForm.value;
        this.authService.basicJwtAuthLogin(user).subscribe(function (response) {
            console.log(response);
            _this.notifyService.showToast("logged in successfully!", 'success');
            _this.invalidLogin = false;
            _this.saveCredentials();
            // console.log(this.authService.isUserLoggedIn());
            //console.log(this.authService.getAuthToken());
            _this.router.navigate(['/']);
        }, function (error) {
            _this.invalidLogin = true;
            if (error.error.message) {
                _this.errorMessage = error.error.message;
            }
            else {
                _this.errorMessage = "Unknown error occured, try after some time..";
            }
        });
    };
    LoginComponent.prototype.saveCredentials = function () {
        if (this.rememberMe) {
            localStorage.setItem("email", this.loginForm.value.email);
            localStorage.setItem("password", this.loginForm.value.password);
        }
    };
    LoginComponent.prototype.reloadPage = function () {
        window.location.reload();
    };
    LoginComponent.prototype.reloadComponent = function () {
        var currentUrl = this.router.url;
        this.router.routeReuseStrategy.shouldReuseRoute = function () { return false; };
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([currentUrl]);
    };
    LoginComponent.prototype.getLoginPage = function (provider) {
        switch (provider) {
            case 'facebook': return const_1.Const.FACEBOOK_AUTH_URI;
            case 'google': return const_1.Const.GOOGLE_AUTH_URI;
        }
    };
    LoginComponent.prototype.toggleValue = function (event) {
        if (event.target.checked) {
            this.rememberMe = true;
        }
        console.log(this.rememberMe);
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
