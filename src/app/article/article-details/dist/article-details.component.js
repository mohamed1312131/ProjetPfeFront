"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ArticleDetailsComponent = void 0;
var core_1 = require("@angular/core");
var user_service_1 = require("src/app/services/users/user.service");
var ArticleDetailsComponent = /** @class */ (function () {
    function ArticleDetailsComponent(userService, authService, articleService, route) {
        this.userService = userService;
        this.authService = authService;
        this.articleService = articleService;
        this.route = route;
        this.article = [];
        this.userInfo = new user_service_1.User(121, 'Amit P', 'amit@gmail.com', '', true);
        this.user = [];
        this.readonly = true;
        this.similaire = [];
        this.otherImage = [];
    }
    ArticleDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params['id'];
        this.isLogged = this.authService.isUserLoggedIn();
        if (this.isLogged) {
            this.email = this.authService.getAuthMail();
            this.userService.getByEmail(this.email).subscribe(function (data) {
                _this.userInfo = data;
                _this.articleService.checkFavorit(_this.userInfo.id, _this.id).subscribe(function (d) {
                    _this.fav = d;
                    console.log(_this.fav);
                });
            });
        }
        this.articleService.findUserByArticleId(this.id).subscribe(function (data) {
            _this.user = data;
            if (_this.user.id == _this.userInfo.id) {
                _this.session = false;
            }
            else {
                _this.session = true;
            }
        });
        this.post = 0;
        console.log(this.userInfo.id);
        this.articleService.findArticleById(this.id).subscribe(function (data) {
            _this.article = data;
            for (var i = 1; i < _this.article.images.length; i++) {
                _this.otherImage.push(_this.article.images[i]);
            }
            _this.rate = _this.article.likes;
            console.log(_this.article);
        });
        this.articleService.getMarque(this.id).subscribe(function (m) {
            _this.marque = m.name;
        });
        this.articleService.getSimilaire(this.id).subscribe(function (s) {
            _this.similaire = s;
        });
    };
    ArticleDetailsComponent.prototype.addToFav = function () {
        var _this = this;
        if (this.isLogged) {
            this.userService.getByEmail(this.email).subscribe(function (x) {
                _this.userInfo = x;
                _this.articleService.addToFavorit(_this.userInfo.id, _this.id).subscribe(function (d) {
                    console.log(d);
                });
            });
            this.fav = false;
        }
    };
    ArticleDetailsComponent.prototype.deleteFavorit = function () {
        var _this = this;
        this.userService.getByEmail(this.email).subscribe(function (x) {
            _this.userInfo = x;
            _this.articleService.getFavoritId(_this.userInfo.id, _this.id).subscribe(function (d) {
                _this.favId = d;
                _this.articleService.deleteFavorit(_this.favId).subscribe(function (f) {
                });
                _this.fav = true;
            });
        });
    };
    ArticleDetailsComponent = __decorate([
        core_1.Component({
            selector: 'app-article-details',
            templateUrl: './article-details.component.html',
            styleUrls: ['./article-details.component.css']
        })
    ], ArticleDetailsComponent);
    return ArticleDetailsComponent;
}());
exports.ArticleDetailsComponent = ArticleDetailsComponent;
