"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CategorieComponent = void 0;
var core_1 = require("@angular/core");
var CategorieComponent = /** @class */ (function () {
    function CategorieComponent(categorieService) {
        this.categorieService = categorieService;
        this.panelOpenState = false;
        this.mainCategory = [];
        this.subCategory = [];
        this.subCategory2 = [];
        this.catego = {};
    }
    CategorieComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.categorieService.getParentCategorie().subscribe(function (data) {
            _this.mainCategory = data;
            console.log(_this.mainCategory);
        });
    };
    CategorieComponent.prototype.setStep = function ($event) {
        var _this = this;
        this.categorieService.getSubCategorie($event).subscribe(function (data) {
            _this.subCategory = data;
        });
    };
    CategorieComponent.prototype.getSub2 = function ($event) {
        var _this = this;
        this.categorieService.getSubCategorie($event).subscribe(function (data) {
            _this.subCategory2 = data;
            console.log(data);
        });
    };
    CategorieComponent.prototype.addCat = function (id) {
        console.log(this.catego);
        console.log(id);
        this.categorieService.addCategorie(id, this.catego).subscribe(function (data) {
            console.log(data);
        });
        this.ngOnInit();
    };
    CategorieComponent = __decorate([
        core_1.Component({
            selector: 'app-categorie',
            templateUrl: './categorie.component.html',
            styleUrls: ['./categorie.component.css']
        })
    ], CategorieComponent);
    return CategorieComponent;
}());
exports.CategorieComponent = CategorieComponent;
