"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UsersComponent = void 0;
var core_1 = require("@angular/core");
var UsersComponent = /** @class */ (function () {
    function UsersComponent(authService, router, userService, route) {
        this.authService = authService;
        this.router = router;
        this.userService = userService;
        this.route = route;
        this.userInfo = [];
        this.urlUser = [];
        this.same = false;
        this.friends = [];
        this.friendOf = [];
        this.x = [];
        this.readonly = false;
        this.rating = 2;
        this.image = [];
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLogged = this.authService.isUserLoggedIn();
        this.id = this.route.snapshot.params['id'];
        this.userService.getById(this.id).subscribe(function (data) {
            _this.urlUser = data;
            if (_this.isLogged) {
                _this.email = _this.authService.getAuthMail();
                _this.userService.getByEmail(_this.email).subscribe(function (d) {
                    _this.userInfo = d;
                    _this.userService.getUserImage(_this.userInfo.id).subscribe(function (x) {
                        _this.image = x;
                        console.log(_this.image);
                    });
                    if (_this.userInfo.id == _this.urlUser.id) {
                        _this.readonly = true;
                        _this.same = true;
                        _this.userService.getFriends(_this.userInfo.id).subscribe(function (data) {
                            _this.friends = data;
                            console.log(_this.friends);
                        });
                        _this.userService.getFriendOf(_this.userInfo.id).subscribe(function (data) {
                            _this.friendOf = data;
                        });
                    }
                    else {
                        _this.same = false;
                        _this.userService.checkSuivie(_this.userInfo.id, _this.id).subscribe(function (x) {
                            _this.abonner = x;
                        });
                    }
                });
            }
        });
        this.userService.getRate(this.id).subscribe(function (data) {
            _this.rating = data;
            console.log(_this.rating);
        });
    };
    UsersComponent.prototype.goTo = function (id) {
        this.router.navigate(['profile/', id]);
    };
    UsersComponent.prototype.suivie = function (id) {
        var _this = this;
        console.log(id);
        console.log(this.id);
        this.userService.getById(this.id).subscribe(function (data) {
            _this.userService.suivie(id, data).subscribe(function (d) {
                _this.abonner = true;
            });
        });
    };
    UsersComponent.prototype.desabonner = function (id) {
        var _this = this;
        this.userService.getById(this.id).subscribe(function (data) {
            _this.x = data;
            _this.userService.desabonner(id, _this.x.id).subscribe(function (d) {
                _this.abonner = false;
            });
        });
    };
    UsersComponent.prototype.rateUser = function (id) {
        var _this = this;
        this.userService.rateUser(this.rating, id).subscribe(function (data) {
            console.log(_this.rating);
        });
    };
    UsersComponent = __decorate([
        core_1.Component({
            selector: 'app-users',
            templateUrl: './users.component.html',
            styleUrls: ['./users.component.css']
        })
    ], UsersComponent);
    return UsersComponent;
}());
exports.UsersComponent = UsersComponent;
