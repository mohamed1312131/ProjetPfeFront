"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NewModuleModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var form_field_1 = require("@angular/material/form-field");
var donner_component_1 = require("./donner.component");
var NewModuleModule = /** @class */ (function () {
    function NewModuleModule() {
    }
    NewModuleModule = __decorate([
        core_1.NgModule({
            declarations: [],
            imports: [
                common_1.CommonModule,
                form_field_1.MatFormFieldModule
            ],
            bootstrap: [donner_component_1.DonnerComponent]
        })
    ], NewModuleModule);
    return NewModuleModule;
}());
exports.NewModuleModule = NewModuleModule;
