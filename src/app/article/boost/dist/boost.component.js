"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BoostComponent = void 0;
var core_1 = require("@angular/core");
var BoostComponent = /** @class */ (function () {
    function BoostComponent(articleService, route) {
        this.articleService = articleService;
        this.route = route;
    }
    BoostComponent.prototype.ngOnInit = function () {
    };
    BoostComponent.prototype.getPrix = function (prix, day) {
        this.price = prix;
        this.days = day;
        if (this.days == 0) {
            this.selectedValue = false;
        }
        else {
            this.selectedValue = true;
        }
        console.log(this.price);
        console.log(this.days);
    };
    BoostComponent.prototype.chek = function () {
        console.log(this.price);
        console.log(this.days);
        console.log(this.selectedValue);
    };
    BoostComponent = __decorate([
        core_1.Component({
            selector: 'app-boost',
            templateUrl: './boost.component.html',
            styleUrls: ['./boost.component.css']
        })
    ], BoostComponent);
    return BoostComponent;
}());
exports.BoostComponent = BoostComponent;
