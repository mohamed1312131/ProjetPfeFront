"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SidemenuComponent = void 0;
var core_1 = require("@angular/core");
var user_service_1 = require("src/app/services/users/user.service");
var SidemenuComponent = /** @class */ (function () {
    function SidemenuComponent(authService, router, userService, articleService, route) {
        this.authService = authService;
        this.router = router;
        this.userService = userService;
        this.articleService = articleService;
        this.route = route;
        this.userInfo = new user_service_1.User(121, 'Amit P', 'amit@gmail.com', '', true);
    }
    SidemenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params['id'];
        this.isLogged = this.authService.isUserLoggedIn();
        if (this.isLogged) {
            this.email = this.authService.getAuthMail();
            this.userService.getByEmail(this.email).subscribe(function (data) {
                _this.userInfo = data;
                _this.articleService.CountArticleByUser(_this.id).subscribe(function (c) {
                    _this.count = c;
                });
            });
        }
    };
    SidemenuComponent = __decorate([
        core_1.Component({
            selector: 'app-sidemenu',
            templateUrl: './sidemenu.component.html',
            styleUrls: ['./sidemenu.component.css']
        })
    ], SidemenuComponent);
    return SidemenuComponent;
}());
exports.SidemenuComponent = SidemenuComponent;
