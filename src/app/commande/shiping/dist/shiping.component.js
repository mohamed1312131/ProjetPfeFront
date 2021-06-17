"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ShipingComponent = void 0;
var core_1 = require("@angular/core");
var user_service_1 = require("src/app/services/users/user.service");
var ShipingComponent = /** @class */ (function () {
    function ShipingComponent(route, articleService, authService, userService) {
        this.route = route;
        this.articleService = articleService;
        this.authService = authService;
        this.userService = userService;
        this.article = [];
        this.userSeller = [];
        this.user = [];
        this.userInfo = new user_service_1.User(121, 'Amit P', 'amit@gmail.com', '', true);
    }
    ShipingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params['id'];
        this.articleService.findArticleById(this.id).subscribe(function (data) {
            _this.article = data;
            console.log(_this.article.prix);
            _this.total = _this.article.prix + 5;
            _this.final = _this.total + 1.49;
        });
        this.articleService.findUserByArticleId(this.id).subscribe(function (data) {
            _this.userSeller = data;
        });
        this.isLogged = this.authService.isUserLoggedIn();
        if (this.isLogged) {
            this.email = this.authService.getAuthMail();
            this.userService.getByEmail(this.email).subscribe(function (data) {
                _this.userInfo = data;
                _this.user = data;
                console.log(data);
            });
        }
    };
    ShipingComponent.prototype.onSubmit = function (id, idA) {
        this.userService.update2User(id, this.user).subscribe(function (d) {
            console.log(d);
        }, function (error) { return console.log(error); });
        this.articleService.order(id, idA).subscribe(function (data) {
        });
    };
    ShipingComponent = __decorate([
        core_1.Component({
            selector: 'app-shiping',
            templateUrl: './shiping.component.html',
            styleUrls: ['./shiping.component.css']
        })
    ], ShipingComponent);
    return ShipingComponent;
}());
exports.ShipingComponent = ShipingComponent;
