"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UpdateDetailsComponent = void 0;
var core_1 = require("@angular/core");
var user_service_1 = require("src/app/services/users/user.service");
var UpdateDetailsComponent = /** @class */ (function () {
    function UpdateDetailsComponent(authService, userService) {
        this.authService = authService;
        this.userService = userService;
        this.user = [];
        this.userInfo = new user_service_1.User(121, 'Amit P', 'amit@gmail.com', '', true);
    }
    UpdateDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.changed = false;
        this.isLogged = this.authService.isUserLoggedIn();
        if (this.isLogged) {
            this.email = this.authService.getAuthMail();
            this.userService.getByEmail(this.email).subscribe(function (data) {
                _this.user = data;
                _this.userInfo = data;
            });
        }
    };
    UpdateDetailsComponent.prototype.onSubmit = function (id) {
        var _this = this;
        this.userService.update2User(id, this.user).subscribe(function (d) {
            _this.changed = true;
        }, function (error) { return console.log(error); });
    };
    UpdateDetailsComponent = __decorate([
        core_1.Component({
            selector: 'app-update-details',
            templateUrl: './update-details.component.html',
            styleUrls: ['./update-details.component.css']
        })
    ], UpdateDetailsComponent);
    return UpdateDetailsComponent;
}());
exports.UpdateDetailsComponent = UpdateDetailsComponent;
