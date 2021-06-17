"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ArticlesComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var ArticlesComponent = /** @class */ (function () {
    function ArticlesComponent(articleService, authService, userService) {
        this.articleService = articleService;
        this.authService = authService;
        this.userService = userService;
        this.articleBooster = [];
        this.articleNonBooster = [];
        this.userInfo = [];
        this.user = [];
        this.ctrl = new forms_1.FormControl(null, forms_1.Validators.required);
        this.throttle = 0;
        this.distance = 2;
        this.page = 10;
    }
    ArticlesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLogged = this.authService.isUserLoggedIn();
        if (this.isLogged) {
            this.email = this.authService.getAuthMail();
            this.userService.getByEmail(this.email).subscribe(function (data) {
                _this.userInfo = data;
            });
        }
        this.getDataArticle();
    };
    ArticlesComponent.prototype.getDataArticle = function () {
        var _this = this;
        var x = Math.floor(Math.random() * (10 - 1 + 1) + 1);
        var y = Math.floor(Math.random() * (10 - 1 + 1) + 1);
        this.articleService.getBoosterArticle(0, 10).subscribe(function (booster) {
            _this.articleBooster = booster;
            console.log(_this.articleBooster);
        });
    };
    ArticlesComponent.prototype.toggle = function () {
        if (this.ctrl.disabled) {
            this.ctrl.enable();
        }
        else {
            this.ctrl.disable();
        }
    };
    ArticlesComponent.prototype.rateing = function () {
        console.log(this.ctrl.value);
    };
    ArticlesComponent.prototype.onScroll = function () {
        var _this = this;
        this.articleService
            .getBoosterArticle(this.page, ++this.page).subscribe(function (data) {
            var _a;
            (_a = _this.articleBooster).push.apply(_a, data);
        });
    };
    ArticlesComponent = __decorate([
        core_1.Component({
            selector: 'app-articles',
            templateUrl: './articles.component.html',
            styleUrls: ['./articles.component.css']
        })
    ], ArticlesComponent);
    return ArticlesComponent;
}());
exports.ArticlesComponent = ArticlesComponent;
