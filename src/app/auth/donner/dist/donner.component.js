"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DonnerComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var DonnerComponent = /** @class */ (function () {
    function DonnerComponent(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.isOptional = false;
        this.value = 'Clear me';
        this.form = {};
    }
    DonnerComponent.prototype.ngOnInit = function () {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', forms_1.Validators.required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ''
        });
    };
    DonnerComponent = __decorate([
        core_1.Component({
            selector: 'app-donner',
            templateUrl: './donner.component.html',
            styleUrls: ['./donner.component.css']
        })
    ], DonnerComponent);
    return DonnerComponent;
}());
exports.DonnerComponent = DonnerComponent;
