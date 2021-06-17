"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AjourComponent = void 0;
var core_1 = require("@angular/core");
var upload_image_component_1 = require("../upload-image/upload-image.component");
var AjourComponent = /** @class */ (function () {
    function AjourComponent(authService, router, userService, imagenService, modalService) {
        this.authService = authService;
        this.router = router;
        this.userService = userService;
        this.imagenService = imagenService;
        this.modalService = modalService;
        this.u = false;
        this.user = [];
        this.userInfo = [];
        this.image = [];
        this.userImage = [];
    }
    AjourComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.changed = false;
        this.isLogged = this.authService.isUserLoggedIn();
        if (this.isLogged) {
            this.email = this.authService.getAuthMail();
            this.userService.getByEmail(this.email).subscribe(function (data) {
                _this.user = data;
                _this.userInfo = data;
                _this.last = _this.userInfo.images.length - 1;
                console.log(_this.userInfo.images[_this.last]);
                /*this.userService.getUserImage(this.user.id).subscribe(
                  data=>{
                    this.userImage=data;
      
                  }
                )*/
            });
        }
    };
    AjourComponent.prototype.onSubmit = function (id) {
        var _this = this;
        this.userService.updateUser(id, this.user).subscribe(function (d) {
            _this.changed = true;
        }, function (error) { return console.log(error); });
    };
    AjourComponent.prototype.open = function () {
        var _this = this;
        this.userService.getByEmail(this.email).subscribe(function (data) {
            _this.user = data;
            var modalRef = _this.modalService.open(upload_image_component_1.UploadImageComponent);
            modalRef.componentInstance.name = _this.user.id;
        });
    };
    AjourComponent.prototype.up = function () {
        this.u = true;
    };
    __decorate([
        core_1.ViewChild('imagenInputFile', { static: false })
    ], AjourComponent.prototype, "imagenFile");
    AjourComponent = __decorate([
        core_1.Component({
            selector: 'app-ajour',
            templateUrl: './ajour.component.html',
            styleUrls: ['./ajour.component.css']
        })
    ], AjourComponent);
    return AjourComponent;
}());
exports.AjourComponent = AjourComponent;
