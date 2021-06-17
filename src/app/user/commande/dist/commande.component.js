"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CommandeComponent = void 0;
var core_1 = require("@angular/core");
var user_service_1 = require("src/app/services/users/user.service");
var pdf_component_1 = require("../pdf/pdf.component");
var rec_component_1 = require("../rec/rec.component");
var CommandeComponent = /** @class */ (function () {
    function CommandeComponent(articleService, modalService, authService, router, userService) {
        this.articleService = articleService;
        this.modalService = modalService;
        this.authService = authService;
        this.router = router;
        this.userService = userService;
        this.userInfo = new user_service_1.User(121, 'Amit P', 'amit@gmail.com', '', true);
    }
    CommandeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.show = true;
        this.showFinished = false;
        this.isLogged = this.authService.isUserLoggedIn();
        if (this.isLogged) {
            this.email = this.authService.getAuthMail();
            this.userService.getByEmail(this.email).subscribe(function (data) {
                _this.userInfo = data;
                _this.articleService.GetOrderByUserId(_this.userInfo.id).subscribe(function (o) {
                    _this.order = o;
                    console.log(_this.order);
                });
                _this.articleService.getOrderArticleByUserId(_this.userInfo.id).subscribe(function (d) {
                    _this.article = d;
                    console.log(_this.article);
                });
            });
        }
    };
    CommandeComponent.prototype.open = function (id) {
        var modalRef = this.modalService.open(rec_component_1.RecComponent);
        modalRef.componentInstance.name = id;
    };
    CommandeComponent.prototype.openPdf = function (id) {
        var modalRef = this.modalService.open(pdf_component_1.PdfComponent, { size: 'lg' });
        modalRef.componentInstance.name = id;
    };
    CommandeComponent = __decorate([
        core_1.Component({
            selector: 'app-commande',
            templateUrl: './commande.component.html',
            styleUrls: ['./commande.component.css']
        })
    ], CommandeComponent);
    return CommandeComponent;
}());
exports.CommandeComponent = CommandeComponent;
