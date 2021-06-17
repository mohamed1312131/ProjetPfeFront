"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ForgetPasswordComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var const_1 = require("src/app/const");
var custom_validation_service_1 = require("src/app/validate/custom-validation.service");
var ForgetPasswordComponent = /** @class */ (function () {
    function ForgetPasswordComponent(router, fb, authService, customValidator, notifyService) {
        this.router = router;
        this.fb = fb;
        this.authService = authService;
        this.customValidator = customValidator;
        this.notifyService = notifyService;
        this.displayForm = false;
        this.isOtpVerified = false;
        this.isLoading = false;
        this.invalidLogin = false;
        this.invalidToken = false;
    }
    ForgetPasswordComponent.prototype.ngOnInit = function () {
        this.verifyEmailForm = this.fb.group({
            email: ['', [forms_1.Validators.email, forms_1.Validators.required]]
        });
        this.otpForm = this.fb.group({
            otpNo: ['', [forms_1.Validators.required, custom_validation_service_1.CustomValidationService.checkLimit(100000, 999999)]]
        });
        this.resetPasswordForm = this.fb.group({
            password: ['', [forms_1.Validators.required, this.customValidator.patternValidator()]],
            confirmPassword: ['', [forms_1.Validators.required]]
        }, { validator: this.customValidator.MatchPassword("password", "confirmPassword") });
    };
    Object.defineProperty(ForgetPasswordComponent.prototype, "verifyEmailFormControl", {
        get: function () {
            return this.verifyEmailForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ForgetPasswordComponent.prototype, "otpFormControl", {
        get: function () {
            return this.otpForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ForgetPasswordComponent.prototype, "resetPasswordFormControl", {
        get: function () {
            return this.resetPasswordForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    ForgetPasswordComponent.prototype.onSubmit = function () {
        var _this = this;
        this.clearValues();
        this.authService.getOtp(this.verifyEmailForm.value).subscribe(function (response) {
            _this.handleResponse(response);
            _this.displayForm = true;
            _this.userEmail = _this.verifyEmailForm.value.email;
            _this.notifyService.showToast("verification code à était envoyer ", 'success');
        }, function (error) {
            _this.handleError(error);
        });
    };
    ForgetPasswordComponent.prototype.onOTPSubmit = function () {
        var _this = this;
        var body = {
            email: this.userEmail,
            otpNo: this.otpForm.value.otpNo
        };
        this.setPreRequestValues();
        this.authService.submitOtp(body).subscribe(function (response) {
            _this.handleResponse(response);
            _this.isOtpVerified = true;
            const_1.Const.email = _this.userEmail;
            _this.router.navigate(['/reset']);
        }, function (error) {
            _this.invalidToken = true;
            _this.handleError(error);
        });
    };
    ForgetPasswordComponent.prototype.resetPassword = function () {
        var _this = this;
        var body = {
            email: this.userEmail,
            password: this.resetPasswordForm.value.password
        };
        this.setPreRequestValues();
        this.authService.resetPassword(body).subscribe(function (response) {
            _this.handleResponse(response);
        }, function (error) {
            _this.handleError(error);
        });
    };
    ForgetPasswordComponent.prototype.clearValues = function () {
        this.successMsg = null;
        this.errorMsg = null;
    };
    ForgetPasswordComponent.prototype.handleResponse = function (response) {
        this.successMsg = response.message;
        this.isLoading = false;
    };
    ForgetPasswordComponent.prototype.handleError = function (error) {
        console.log(error);
        this.isLoading = false;
        if (error.error.message) {
            this.invalidLogin = true;
            this.errorMsg = error.error.message;
        }
        else
            this.errorMsg = 'unknown error. Try after some time';
    };
    ForgetPasswordComponent.prototype.setPreRequestValues = function () {
        this.clearValues();
        this.isLoading = true;
    };
    ForgetPasswordComponent = __decorate([
        core_1.Component({
            selector: 'app-forget-password',
            templateUrl: './forget-password.component.html',
            styleUrls: ['./forget-password.component.css']
        })
    ], ForgetPasswordComponent);
    return ForgetPasswordComponent;
}());
exports.ForgetPasswordComponent = ForgetPasswordComponent;
