"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UploadImageComponent = void 0;
var core_1 = require("@angular/core");
var UploadImageComponent = /** @class */ (function () {
    function UploadImageComponent(activeModal, imagenService, userService, route) {
        this.activeModal = activeModal;
        this.imagenService = imagenService;
        this.userService = userService;
        this.route = route;
        this.u = false;
        this.image = [];
        this.added = false;
    }
    UploadImageComponent.prototype.ngOnInit = function () {
    };
    UploadImageComponent.prototype.onFileChange = function (event) {
        var _this = this;
        this.imagen = event.target.files[0];
        var fr = new FileReader();
        fr.onload = function (evento) {
            _this.imagenMin = evento.target.result;
        };
        fr.readAsDataURL(this.imagen);
    };
    UploadImageComponent.prototype.onUpload = function () {
        var _this = this;
        this.imagenService.upload(this.imagen).subscribe(function (data) {
            _this.image = data;
            _this.userService.addImageToUser(_this.name, _this.image.id).subscribe(function (d) {
                console.log(d);
            });
        }, function (err) {
            alert(err.error.mensaje);
            _this.reset();
        });
        this.added = true;
    };
    UploadImageComponent.prototype.reset = function () {
        this.imagen = null;
        this.imagenMin = null;
        this.imagenFile.nativeElement.value = '';
    };
    __decorate([
        core_1.ViewChild('imagenInputFile', { static: false })
    ], UploadImageComponent.prototype, "imagenFile");
    __decorate([
        core_1.Input()
    ], UploadImageComponent.prototype, "name");
    UploadImageComponent = __decorate([
        core_1.Component({
            selector: 'app-upload-image',
            templateUrl: './upload-image.component.html',
            styleUrls: ['./upload-image.component.css']
        })
    ], UploadImageComponent);
    return UploadImageComponent;
}());
exports.UploadImageComponent = UploadImageComponent;
