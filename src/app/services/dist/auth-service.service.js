"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AuthServiceService = exports.TOKEN = void 0;
var core_1 = require("@angular/core");
var const_1 = require("../const");
var operators_1 = require("rxjs/operators");
exports.TOKEN = 'token';
var AuthServiceService = /** @class */ (function () {
    function AuthServiceService(http) {
        this.http = http;
    }
    AuthServiceService.prototype.basicJwtAuthLogin = function (user) {
        return this.http.post(const_1.Const.API_BASE_URL + '/auth/login', user).pipe(operators_1.map(function (data) {
            localStorage.setItem(exports.TOKEN, "Bearer " + data.accessToken);
            return data;
        }));
    };
    AuthServiceService.prototype.userSignup = function (user) {
        return this.http.post(const_1.Const.API_BASE_URL + '/auth/signup', user);
    };
    AuthServiceService.prototype.getVerificationLink = function (email) {
        return this.http.post(const_1.Const.API_BASE_URL + '/auth/send-email', email);
    };
    AuthServiceService.prototype.getOtp = function (body) {
        return this.http.post(const_1.Const.API_BASE_URL + '/auth/generate-otp', body);
    };
    AuthServiceService.prototype.submitOtp = function (body) {
        return this.http.post(const_1.Const.API_BASE_URL + '/auth/validate-otp', body);
    };
    AuthServiceService.prototype.resetPassword = function (body) {
        return this.http.post(const_1.Const.API_BASE_URL + '/auth/reset-password', body);
    };
    AuthServiceService.prototype.getAuthToken = function () {
        if (localStorage.getItem(exports.TOKEN))
            return localStorage.getItem(exports.TOKEN);
    };
    AuthServiceService.prototype.setAuthToken = function (token) {
        localStorage.setItem(exports.TOKEN, token);
    };
    AuthServiceService.prototype.isUserLoggedIn = function () {
        var token = localStorage.getItem(exports.TOKEN);
        if (token === null || token.includes('undefined'))
            return false;
        else
            return true;
    };
    AuthServiceService.prototype.removeToken = function () {
        localStorage.removeItem(exports.TOKEN);
    };
    AuthServiceService.prototype.getAuthMail = function () {
        return localStorage.getItem("email");
    };
    AuthServiceService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], AuthServiceService);
    return AuthServiceService;
}());
exports.AuthServiceService = AuthServiceService;
