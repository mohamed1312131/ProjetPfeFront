"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CategorieService = void 0;
var core_1 = require("@angular/core");
var const_1 = require("src/app/const");
var baseUrl = 'http://localhost:8080/admin';
var baseUrl2 = 'http://localhost:8080/article';
var CategorieService = /** @class */ (function () {
    function CategorieService(http) {
        this.http = http;
    }
    CategorieService.prototype.getParentCategorie = function () {
        return this.http.get(const_1.Const.API_BASE_URL + '/admin/parent');
    };
    CategorieService.prototype.getSubCategorie = function (id) {
        var url = baseUrl + "/cat/" + id;
        return this.http.get(url);
    };
    CategorieService.prototype.getMarque = function () {
        var url = baseUrl + "/getMarque";
        return this.http.get(url);
    };
    CategorieService.prototype.addMarque = function (marque) {
        return this.http.post(baseUrl + "/addMarque", marque);
    };
    CategorieService.prototype.getAllSub = function (id) {
        return this.http.get(baseUrl2 + "/getAllSubCategorie/" + id);
    };
    CategorieService.prototype.addCategorie = function (id, cat) {
        return this.http.post(baseUrl + "/addCategorie/" + id, cat);
    };
    CategorieService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], CategorieService);
    return CategorieService;
}());
exports.CategorieService = CategorieService;
