"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AdminService = void 0;
var core_1 = require("@angular/core");
var baseUrl = 'http://localhost:8080/admin';
var baseUrl2 = 'http://localhost:8080/article';
var AdminService = /** @class */ (function () {
    function AdminService(http) {
        this.http = http;
    }
    AdminService.prototype.getOrders = function () {
        return this.http.get(baseUrl + "/getOrders");
    };
    AdminService.prototype.getUsers = function (id) {
        return this.http.get(baseUrl + "/getUsers/" + id);
    };
    AdminService.prototype.upload = function (imagen) {
        var formData = new FormData();
        formData.append('multipartFile', imagen);
        return this.http.post(baseUrl + "/upload", formData);
    };
    AdminService.prototype.addImageToArticle = function (idA, idI) {
        return this.http.get(baseUrl2 + "/addImageIdToArticle/" + idA + "/" + idI);
    };
    AdminService.prototype.getListReclamation = function () {
        return this.http.get(baseUrl + "/getReclamation");
    };
    AdminService.prototype.sendMail = function (id, reclamation) {
        return this.http.post(baseUrl + "/sendReclamation/" + id, reclamation);
    };
    AdminService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], AdminService);
    return AdminService;
}());
exports.AdminService = AdminService;
