"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ArticleService = void 0;
var core_1 = require("@angular/core");
var const_1 = require("../const");
var baseUrl = 'http://localhost:8080/article';
var articleUrl = 'http://localhost:8080/article/getBy';
var articleUrl2 = 'http://localhost:8080/article/count-article';
var orderUrl = 'http://localhost:8080/data';
var ArticleService = /** @class */ (function () {
    function ArticleService(http) {
        this.http = http;
    }
    /*getALL():Observable<String>{
      return this.http.get<String>(Const.API_BASE_URL + '/all');
    }*/
    ArticleService.prototype.getAllProducts = function (limitOfResults) {
        if (limitOfResults === void 0) { limitOfResults = 10; }
        return this.http.get(const_1.Const.API_BASE_URL + '/article/all', {
            params: {
                limit: limitOfResults.toString()
            }
        });
    };
    ArticleService.prototype.getPorductsts = function (obj) {
        return this.http.get(const_1.Const.API_BASE_URL + '/article/getLimited', obj);
    };
    ArticleService.prototype.getProductsByUserId = function (idUser) {
        return this.http.get(articleUrl + "/" + idUser);
    };
    ArticleService.prototype.CountArticleByUser = function (idUser) {
        return this.http.get(articleUrl2 + "/" + idUser);
    };
    ArticleService.prototype.GetOrderByUserId = function (idUser) {
        var url = orderUrl + "/order/" + idUser;
        return this.http.get(url);
    };
    ArticleService.prototype.GetNonSelledArticleByUserId = function (idUser) {
        var url = orderUrl + "/non-order/" + idUser;
        return this.http.get(url);
    };
    ArticleService.prototype.GetSelledArticleByUserId = function (idUser) {
        var url = baseUrl + "/vendu/" + idUser;
        return this.http.get(url);
    };
    ArticleService.prototype.getOrderArticleByUserId = function (idUser) {
        var url = baseUrl + "/getByOrder/" + idUser;
        return this.http.get(url);
    };
    ArticleService.prototype.getBoosterArticle = function (limit, offset) {
        var url = orderUrl + "/article-booster/" + limit + "/" + offset;
        return this.http.get(url);
    };
    ArticleService.prototype.getNonBoosterArticle = function (limit, offset) {
        var url = orderUrl + "/non-booster-article/" + limit + "/" + offset;
        return this.http.get(url);
    };
    ArticleService.prototype.getUserByArticleId = function (id) {
        var url = baseUrl + "/articleByUser/" + id;
        return this.http.get(url);
    };
    ArticleService.prototype.findArticleById = function (id) {
        var url = baseUrl + "/findArticle/" + id;
        return this.http.get(url);
    };
    ArticleService.prototype.findUserByArticleId = function (id) {
        var url = baseUrl + "/findUserByArticle/" + id;
        return this.http.get(url);
    };
    ArticleService.prototype.checkFavorit = function (id, idArticle) {
        var url = orderUrl + "/checkFavorit/" + id + "/" + idArticle;
        return this.http.get(url);
    };
    ArticleService.prototype.addToFavorit = function (id, idArticle) {
        return this.http.post(orderUrl + "/addToFavorit/" + id + "/" + idArticle, null);
    };
    ArticleService.prototype.deleteFavorit = function (id) {
        return this.http["delete"](orderUrl + "/deleteFavorite/" + id);
    };
    ArticleService.prototype.getFavoritId = function (id, idArticle) {
        var url = orderUrl + "/getFavoritId/" + id + "/" + idArticle;
        return this.http.get(url);
    };
    ArticleService.prototype.getMarque = function (id) {
        var url = baseUrl + "/getMarqueByArticleId/" + id;
        return this.http.get(url);
    };
    ArticleService.prototype.getSimilaire = function (id) {
        var url = baseUrl + "/getSimilaire/" + id;
        return this.http.get(url);
    };
    ArticleService.prototype.getDataByName = function (name) {
        var url = baseUrl + "/findByName/" + name;
        return this.http.get(url);
    };
    ArticleService.prototype.getCategoryByArticleName = function (name) {
        var url = baseUrl + "/getCategoryByArticleName/" + name;
        return this.http.get(url);
    };
    ArticleService.prototype.getMarqueByArticleName = function (name) {
        var url = baseUrl + "/getMarqueByArticleName/" + name;
        return this.http.get(url);
    };
    ArticleService.prototype.filterByCategorie = function (name, id) {
        var url = baseUrl + "/filterByCategorie/" + name + "/" + id;
        return this.http.get(url);
    };
    ArticleService.prototype.filterByMarque = function (name, id) {
        var url = baseUrl + "/filterByMarque/" + name + "/" + id;
        return this.http.get(url);
    };
    ArticleService.prototype.countNotification = function (id) {
        var url = baseUrl + "/CountNotification/" + id;
        return this.http.get(url);
    };
    ArticleService.prototype.ClearNotification = function (id) {
        var url = baseUrl + "/clearNotif/" + id;
        return this.http.get(url);
    };
    ArticleService.prototype.deleteArticle = function (id) {
        var url = orderUrl + "/deleteArticleById/" + id;
        return this.http["delete"](url);
    };
    ArticleService.prototype.vendu = function (id) {
        var url = orderUrl + "/vendu/" + id;
        return this.http.get(url);
    };
    ArticleService.prototype.order = function (idUser, idArticle) {
        var url = baseUrl + "/commander/" + idUser + "/" + idArticle;
        return this.http.get(url);
    };
    ArticleService.prototype.getArticleVenduByUserId = function (id) {
        var url = baseUrl + "/getArticleVendu/" + id;
        return this.http.get(url);
    };
    ArticleService.prototype.getNotificationByUserId = function (id) {
        var url = baseUrl + "/getNotfication/" + id;
        return this.http.get(url);
    };
    ArticleService.prototype.getUserByNotifcation = function (id) {
        var url = baseUrl + "/getUserNotfication/" + id;
        return this.http.get(url);
    };
    ArticleService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ArticleService);
    return ArticleService;
}());
exports.ArticleService = ArticleService;
