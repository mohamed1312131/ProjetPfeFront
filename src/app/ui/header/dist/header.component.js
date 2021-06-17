"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HeaderComponent = void 0;
var core_1 = require("@angular/core");
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(modalService, authService, router, userService, articleService, categoryService) {
        this.modalService = modalService;
        this.authService = authService;
        this.router = router;
        this.userService = userService;
        this.articleService = articleService;
        this.categoryService = categoryService;
        this.all = [];
        this.value = '';
        this.show = false;
        this.category = [];
        this.options = [];
        this.subCategorie = [];
        this.subCategorie2 = [];
        this.part1Sub = [];
        this.part2Sub = [];
        this.sub = false;
        this.allSub = [];
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.categoryService.getParentCategorie().subscribe(function (data) {
            _this.category = data;
        });
        this.isLogged = this.authService.isUserLoggedIn();
        if (this.isLogged) {
            this.email = this.authService.getAuthMail();
            this.userService.getByEmail(this.email).subscribe(function (data) {
                _this.user = data;
                _this.id = _this.user.id;
                _this.nom = _this.user.name;
                if (_this.nom == null) {
                    _this.nom = _this.user.email;
                    console.log(_this.nom);
                }
                if (_this.user.nomBoutique != null) {
                    _this.test = true;
                    _this.b = _this.user.nomBoutique;
                }
                else {
                    _this.test = false;
                }
                _this.articleService.countNotification(_this.id).subscribe(function (d) {
                    _this.notif = d;
                });
            });
        }
    };
    HeaderComponent.prototype.logOut = function () {
        this.reloadComponent();
        this.authService.removeToken();
        localStorage.clear();
    };
    HeaderComponent.prototype.reloadComponent = function () {
        var currentUrl = this.router.url;
        this.router.routeReuseStrategy.shouldReuseRoute = function () { return false; };
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([currentUrl]);
    };
    HeaderComponent.prototype.goTo = function (nom) {
        this.router.navigate(['/profile/{nom}']);
    };
    HeaderComponent.prototype.open = function (event) {
        var _this = this;
        if (event.target.value.length) {
            this.articleService.getDataByName(event.target.value).subscribe(function (d) {
                _this.all = d;
                _this.show = true;
            });
        }
        else {
            this.show = false;
        }
    };
    HeaderComponent.prototype.onSubmit = function (data) {
        this.router.navigate(['/result/{data}']);
    };
    HeaderComponent.prototype.clearNotif = function () {
        var _this = this;
        this.email = this.authService.getAuthMail();
        this.userService.getByEmail(this.email).subscribe(function (data) {
            _this.user = data;
            console.log(_this.user.id);
            _this.articleService.ClearNotification(_this.user.id).subscribe(function (d) {
                console.log(d);
            });
        });
        this.router.navigate(['/porte-monnaie']);
    };
    HeaderComponent.prototype._filter = function (value) {
        var filterValue = value.toLowerCase();
        console.log(this.options);
        return this.options.filter(function (option) { return option.toLowerCase().indexOf(filterValue) === 0; });
    };
    HeaderComponent.prototype.search = function (event) {
        var _this = this;
        this.articleService.getDataByName(event).subscribe(function (data) {
            _this.options = data;
            console.log(_this.options);
        });
    };
    HeaderComponent.prototype.getSubCategorie = function (id) {
        var _this = this;
        // delete this.subCategorie2;
        this.categoryService.getSubCategorie(id).subscribe(function (data) {
            _this.subCategorie = data;
            console.log(_this.subCategorie[0].subCategories[0].name);
            /* this.categoryService.getSubCategorie(this.subCategorie[0].id).subscribe(
               d =>{
                 this.subCategorie2=d;
                 console.log(this.subCategorie2);
               }
             )*/
            /*this.categoryService.getAllSub(id).subscribe(
              data =>{
                this.allSub=data;
              }
            )*/
        });
    };
    HeaderComponent.prototype.getSubCategorie2 = function (id) {
        var _this = this;
        delete this.subCategorie2;
        this.categoryService.getSubCategorie(id).subscribe(function (data) {
            _this.subCategorie2 = data;
        });
    };
    HeaderComponent.prototype.getAllSub = function (id) {
        var _this = this;
        this.categoryService.getAllSub(id).subscribe(function (data) {
            _this.allSub = data;
        });
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.css']
        })
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
