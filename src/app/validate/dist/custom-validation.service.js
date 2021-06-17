"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CustomValidationService = void 0;
var core_1 = require("@angular/core");
var CustomValidationService = /** @class */ (function () {
    function CustomValidationService() {
    }
    CustomValidationService.prototype.patternValidator = function () {
        return function (control) {
            if (!control.value) {
                return null;
            }
            var regex = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$');
            var valid = regex.test(control.value);
            return valid ? null : { invalidPassword: true };
        };
    };
    CustomValidationService.checkLimit = function (min, max) {
        return function (c) {
            if (c.value && (isNaN(c.value) || c.value < min || c.value > max)) {
                return { 'range': true };
            }
            return null;
        };
    };
    // Matches password and confirm password fields
    CustomValidationService.prototype.MatchPassword = function (password, confirmPassword) {
        return function (formGroup) {
            var passwordControl = formGroup.controls[password];
            var confirmPasswordControl = formGroup.controls[confirmPassword];
            if (!passwordControl || !confirmPasswordControl) {
                return null;
            }
            if (confirmPasswordControl.errors && !confirmPasswordControl.errors.passwordMismatch) {
                return null;
            }
            if (passwordControl.value !== confirmPasswordControl.value) {
                confirmPasswordControl.setErrors({ passwordMismatch: true });
            }
            else {
                confirmPasswordControl.setErrors(null);
            }
        };
    };
    CustomValidationService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], CustomValidationService);
    return CustomValidationService;
}());
exports.CustomValidationService = CustomValidationService;
