"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserService = exports.User = void 0;
var core_1 = require("@angular/core");
var const_1 = require("src/app/const");
var User = /** @class */ (function () {
    function User(id, name, email, imageUrl, emailVerified) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.imageUrl = imageUrl;
        this.emailVerified = emailVerified;
    }
    return User;
}());
exports.User = User;
var baseUrl = 'http://localhost:8080/data/user';
var baseUrl2 = 'http://localhost:8080/data';
var articleUrl = 'http://localhost:8080/article';
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getUserInfo = function () {
        return this.http.get(const_1.Const.API_BASE_URL + '/user/me');
    };
    UserService.prototype.getByEmail = function (email) {
        return this.http.get(baseUrl + "/" + email);
    };
    UserService.prototype.updateUser = function (id, user) {
        return this.http.put(baseUrl2 + "/update1/" + id, user);
    };
    UserService.prototype.upToBoutique = function (id, user) {
        return this.http.put(baseUrl2 + "/update-boutique/" + id, user);
    };
    UserService.prototype.update2User = function (id, user) {
        return this.http.put(baseUrl2 + "/update2/" + id, user);
    };
    UserService.prototype.addArticle = function (id, cat, m, article) {
        return this.http.post(articleUrl + "/poster/" + id + "/" + cat + "/" + m, article);
    };
    UserService.prototype.getByName = function (name) {
        return this.http.get(baseUrl2 + "/userByName/" + name);
    };
    UserService.prototype.getById = function (id) {
        return this.http.get(baseUrl2 + "/userById/" + id);
    };
    UserService.prototype.getFriends = function (id) {
        return this.http.get(baseUrl2 + "/getFriends/" + id);
    };
    UserService.prototype.getFriendOf = function (id) {
        return this.http.get(baseUrl2 + "/getFriendOf/" + id);
    };
    UserService.prototype.suivie = function (id, abonner) {
        return this.http.post(baseUrl2 + "/suivie/" + id, abonner);
    };
    UserService.prototype.checkSuivie = function (id, abonner) {
        return this.http.get(baseUrl2 + "/checkSuivie/" + id + "/" + abonner);
    };
    UserService.prototype.desabonner = function (id, abonner) {
        return this.http.get(baseUrl2 + "/desabonner/" + id + "/" + abonner);
    };
    UserService.prototype.getRate = function (id) {
        return this.http.get(baseUrl2 + "/getRate/" + id);
    };
    UserService.prototype.rateUser = function (rate, id) {
        return this.http.get(baseUrl2 + "/rate/" + rate + "/" + id);
    };
    UserService.prototype.getUserImage = function (id) {
        return this.http.get(baseUrl2 + "/getImageByUserId/" + id);
    };
    UserService.prototype.addImageToUser = function (idU, idI) {
        return this.http.get(baseUrl2 + "/addImageIdToUser/" + idU + "/" + idI);
    };
    UserService.prototype.sendReclamation = function (id, reclamation) {
        return this.http.post(baseUrl2 + "/sendReclamation/" + id, reclamation);
    };
    UserService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
