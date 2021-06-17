"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PanierComponent = void 0;
var core_1 = require("@angular/core");
var PanierComponent = /** @class */ (function () {
    function PanierComponent(route, articleService) {
        this.route = route;
        this.articleService = articleService;
        this.article = [];
        this.user = [];
    }
    PanierComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params['id'];
        this.articleService.findArticleById(this.id).subscribe(function (data) {
            _this.article = data;
            _this.total = _this.article.prix + 5.4;
        });
        this.articleService.findUserByArticleId(this.id).subscribe(function (data) {
            _this.user = data;
        });
    };
    PanierComponent = __decorate([
        core_1.Component({
            selector: 'app-panier',
            templateUrl: './panier.component.html',
            styleUrls: ['./panier.component.css']
        })
    ], PanierComponent);
    return PanierComponent;
}());
exports.PanierComponent = PanierComponent;
