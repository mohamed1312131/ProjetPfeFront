"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AccueilComponent = void 0;
var core_1 = require("@angular/core");
var AccueilComponent = /** @class */ (function () {
    function AccueilComponent(authService, userService, articleService) {
        this.authService = authService;
        this.userService = userService;
        this.articleService = articleService;
        this.isLogged = false;
        this.user = [];
        this.nonBoosterArticle = [];
        this.article = [];
        this.throttle = 0;
        this.distance = 2;
        this.page = 5;
    }
    AccueilComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.articleService.getNonBoosterArticle(0, this.page).subscribe(function (data) {
            _this.article = data;
            console.log(data);
        });
        this.isLogged = this.authService.isUserLoggedIn();
        if (this.isLogged) {
            this.email = this.authService.getAuthMail();
            this.userService.getByEmail(this.email).subscribe(function (data) {
                _this.user = data;
            });
        }
    };
    /*async getArticle(){
      await this.articleService.getNonBoosterArticle(0,10).subscribe({next:(data)=>{
        this.nonBoosterArticle=data;
        console.log(data);
    
      },error:(err)=>{
    alert("ther is a error ")
      }})
    
    }*/
    AccueilComponent.prototype.onScroll = function () {
        var _this = this;
        this.articleService
            .getNonBoosterArticle(this.page, ++this.page)
            .subscribe(function (data) {
            var _a;
            (_a = _this.article).push.apply(_a, data);
            console.log(_this.article);
        });
    };
    AccueilComponent = __decorate([
        core_1.Component({
            selector: 'app-accueil',
            templateUrl: './accueil.component.html',
            styleUrls: ['./accueil.component.css']
        })
    ], AccueilComponent);
    return AccueilComponent;
}());
exports.AccueilComponent = AccueilComponent;
