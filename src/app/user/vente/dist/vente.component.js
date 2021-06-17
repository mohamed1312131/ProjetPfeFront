"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.VenteComponent = void 0;
var core_1 = require("@angular/core");
var user_service_1 = require("src/app/services/users/user.service");
var VenteComponent = /** @class */ (function () {
    function VenteComponent(articleService, authService, router, userService) {
        this.articleService = articleService;
        this.authService = authService;
        this.router = router;
        this.userService = userService;
        this.userInfo = new user_service_1.User(121, 'Amit P', 'amit@gmail.com', '', true);
        this.article = [];
    }
    VenteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLogged = this.authService.isUserLoggedIn();
        if (this.isLogged) {
            this.email = this.authService.getAuthMail();
            this.userService.getByEmail(this.email).subscribe(function (data) {
                _this.userInfo = data;
                _this.articleService.getArticleVenduByUserId(_this.userInfo.id).subscribe(function (d) {
                    console.log(d);
                    _this.article = d;
                });
            });
        }
    };
    VenteComponent = __decorate([
        core_1.Component({
            selector: 'app-vente',
            templateUrl: './vente.component.html',
            styleUrls: ['./vente.component.css']
        })
    ], VenteComponent);
    return VenteComponent;
}());
exports.VenteComponent = VenteComponent;
