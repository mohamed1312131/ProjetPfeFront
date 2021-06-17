"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ChangerMdpComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var const_1 = require("../const");
var ChangerMdpComponent = /** @class */ (function () {
    function ChangerMdpComponent(router, fb, authService, customValidator) {
        this.router = router;
        this.fb = fb;
        this.authService = authService;
        this.customValidator = customValidator;
        this.isLoading = false;
        this.invalidLogin = false;
    }
    ChangerMdpComponent.prototype.ngOnInit = function () {
        this.resetPasswordForm = this.fb.group({
            password: ['', [forms_1.Validators.required, this.customValidator.patternValidator()]],
            confirmPassword: ['', [forms_1.Validators.required]]
        }, { validator: this.customValidator.MatchPassword("password", "confirmPassword") });
    };
    Object.defineProperty(ChangerMdpComponent.prototype, "resetPasswordFormControl", {
        get: function () {
            return this.resetPasswordForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    ChangerMdpComponent.prototype.resetPassword = function () {
        var _this = this;
        var body = {
            email: const_1.Const.email,
            password: this.resetPasswordForm.value.password
        };
        this.setPreRequestValues();
        this.authService.resetPassword(body).subscribe(function (response) {
            _this.handleResponse(response);
        }, function (error) {
            _this.handleError(error);
        });
    };
    ChangerMdpComponent.prototype.handleResponse = function (response) {
        this.successMsg = response.message;
        this.isLoading = false;
    };
    ChangerMdpComponent.prototype.handleError = function (error) {
        console.log(error);
        this.isLoading = false;
        if (error.error.message) {
            this.invalidLogin = true;
            this.errorMsg = error.error.message;
        }
        else
            this.errorMsg = 'unknown error. Try after some time';
    };
    ChangerMdpComponent.prototype.setPreRequestValues = function () {
        this.clearValues();
        this.isLoading = true;
    };
    ChangerMdpComponent.prototype.clearValues = function () {
        this.successMsg = null;
        this.errorMsg = null;
    };
    ChangerMdpComponent = __decorate([
        core_1.Component({
            selector: 'app-changer-mdp',
            templateUrl: './changer-mdp.component.html',
            styleUrls: ['./changer-mdp.component.css']
        })
    ], ChangerMdpComponent);
    return ChangerMdpComponent;
}());
exports.ChangerMdpComponent = ChangerMdpComponent;
