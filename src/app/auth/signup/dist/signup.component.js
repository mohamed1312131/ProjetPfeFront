"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SignupComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var SignupComponent = /** @class */ (function () {
    function SignupComponent(router, fb, oauthService, customValidator) {
        this.router = router;
        this.fb = fb;
        this.oauthService = oauthService;
        this.customValidator = customValidator;
        this.display = 'none';
        this.modalObject = {};
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.signupForm = this.fb.group({
            name: ['', [forms_1.Validators.required, forms_1.Validators.maxLength(20), forms_1.Validators.minLength(4)]],
            email: ['', [forms_1.Validators.required, forms_1.Validators.email]],
            password: ['', forms_1.Validators.compose([forms_1.Validators.required, this.customValidator.patternValidator()])],
            confirmPassword: ['', [forms_1.Validators.required]]
        }, {
            validator: this.customValidator.MatchPassword("password", "confirmPassword")
        });
    };
    Object.defineProperty(SignupComponent.prototype, "signupFormControl", {
        get: function () {
            return this.signupForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    SignupComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        var user = {
            name: this.signupForm.value.name,
            email: this.signupForm.value.email,
            password: this.signupForm.value.password
        };
        this.oauthService.userSignup(user).subscribe(function (response) {
            _this.errorMessage = null;
            _this.showModal();
            console.log(response);
        }, function (error) {
            _this.signupForm.reset();
            if (error.error.message) {
                _this.errorMessage = error.error.message;
            }
            else {
                _this.errorMessage = "Unknown error occured, try after some time..";
            }
        });
    };
    SignupComponent.prototype.showModal = function () {
        this.display = 'block';
        this.modalObject = {
            title: "SignUp Successful",
            body: "Thanks for signing in!.\n            Account verification link is sent on your mail id\n            " + this.signupForm.value.email + ".\n            Click on link to activate your account."
        };
    };
    SignupComponent = __decorate([
        core_1.Component({
            selector: 'app-signup',
            templateUrl: './signup.component.html',
            styleUrls: ['./signup.component.css']
        })
    ], SignupComponent);
    return SignupComponent;
}());
exports.SignupComponent = SignupComponent;
