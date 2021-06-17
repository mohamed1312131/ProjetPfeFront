"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DashboredComponent = void 0;
var core_1 = require("@angular/core");
var $ = require("jquery");
var DashboredComponent = /** @class */ (function () {
    function DashboredComponent(router) {
        this.router = router;
        this.title = 'angularbootstrap';
    }
    DashboredComponent.prototype.ngOnInit = function () {
        //Toggle Click Function
        $("#menu-toggle").click(function (e) {
            e.preventDefault();
            $("#wrapper").toggleClass("toggled");
        });
    };
    DashboredComponent.prototype.openCrre = function () {
        this.router.navigate(['admin/user-admin/admin-2019/addFormmateure']);
    };
    DashboredComponent.prototype.openaffecte = function () {
        this.router.navigate(['admin/user-admin/admin-2019/AffecteFormateure']);
    };
    DashboredComponent = __decorate([
        core_1.Component({
            selector: 'app-dashbored',
            templateUrl: './dashbored.component.html',
            styleUrls: ['./dashbored.component.css']
        })
    ], DashboredComponent);
    return DashboredComponent;
}());
exports.DashboredComponent = DashboredComponent;
