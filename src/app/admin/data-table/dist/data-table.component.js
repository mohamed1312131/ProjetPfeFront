"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DataTableComponent = void 0;
var core_1 = require("@angular/core");
var DataTableComponent = /** @class */ (function () {
    function DataTableComponent(adminService, router) {
        this.adminService = adminService;
        this.router = router;
        this.users = [];
    }
    DataTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.adminService.getUsers(6).subscribe(function (data) {
            _this.users = data;
        });
    };
    DataTableComponent.prototype.goTo = function (id) {
        this.router.navigate(['profile/', id]);
    };
    DataTableComponent = __decorate([
        core_1.Component({
            selector: 'app-data-table',
            templateUrl: './data-table.component.html',
            styleUrls: ['./data-table.component.css']
        })
    ], DataTableComponent);
    return DataTableComponent;
}());
exports.DataTableComponent = DataTableComponent;
