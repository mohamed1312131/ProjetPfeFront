"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductComponent = void 0;
var core_1 = require("@angular/core");
var user_service_1 = require("src/app/services/users/user.service");
var ProductComponent = /** @class */ (function () {
    function ProductComponent(authService, router, userService, produitService, route) {
        this.authService = authService;
        this.router = router;
        this.userService = userService;
        this.produitService = produitService;
        this.route = route;
        this.userInfo = new user_service_1.User(121, 'Amit P', 'amit@gmail.com', '', true);
        this.currentUser = [];
    }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params['id'];
        console.log(this.id);
        this.userService.getById(this.id).subscribe(function (d) {
            _this.userInfo = d;
            _this.isLogged = _this.authService.isUserLoggedIn();
            if (_this.isLogged) {
                _this.email = _this.authService.getAuthMail();
                _this.userService.getByEmail(_this.email).subscribe(function (data) {
                    _this.currentUser = data;
                    if (_this.currentUser.id == _this.id) {
                        _this.same = true;
                    }
                    else {
                        _this.same = false;
                    }
                    console.log(_this.same);
                });
            }
        });
        this.produitService.getProductsByUserId(this.id).subscribe(function (data) {
            _this.article = data;
            console.log(_this.article);
        });
    };
    ProductComponent.prototype.deleteArticle = function (id) {
        this.produitService.deleteArticle(id).subscribe(function (data) {
            console.log(data);
        });
    };
    ProductComponent.prototype.definirVendu = function (id) {
        this.produitService.vendu(id).subscribe(function (data) {
        });
    };
    ProductComponent = __decorate([
        core_1.Component({
            selector: 'app-product',
            templateUrl: './product.component.html',
            styleUrls: ['./product.component.css']
        })
    ], ProductComponent);
    return ProductComponent;
}());
exports.ProductComponent = ProductComponent;
