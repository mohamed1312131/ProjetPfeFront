"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AddComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var AddComponent = /** @class */ (function () {
    function AddComponent(router, route, http, categoryService, userService, imagenService) {
        this.router = router;
        this.route = route;
        this.http = http;
        this.categoryService = categoryService;
        this.userService = userService;
        this.imagenService = imagenService;
        this.images = [];
        this.imageList = [];
        this.a = [];
        this.myForm = new forms_1.FormGroup({
            name: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(3)]),
            file: new forms_1.FormControl('', [forms_1.Validators.required]),
            fileSource: new forms_1.FormControl('', [forms_1.Validators.required])
        });
        this.parentCategory = [];
        this.subCategory1 = [];
        this.subCategory2 = [];
        this.marque = [];
        this.article = {};
        this.dataArticle = [];
        this.etats = [
            { value: 'Bon etat', viewValue: 'Bon etat' },
            { value: 'Correct', viewValue: 'Correct' },
            { value: 'Neuf', viewValue: 'Neuf' },
            { value: 'Neuf avec facture', viewValue: 'Neuf avec facture' },
            { value: 'Trés bonne etat', viewValue: 'Trés bonne etat' }
        ];
    }
    AddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params['id'];
        this.categoryService.getParentCategorie().subscribe(function (data) {
            _this.parentCategory = data;
        });
        this.categoryService.getMarque().subscribe(function (mar) {
            _this.marque = mar;
        });
        console.log(this.article.image);
    };
    AddComponent.prototype.getSubCategory = function () {
        var _this = this;
        this.categoryService.getSubCategorie(this.selectedValue).subscribe(function (sub) {
            _this.subCategory1 = sub;
        });
    };
    AddComponent.prototype.getSubCategory2 = function () {
        var _this = this;
        this.categoryService.getSubCategorie(this.selectedValue2).subscribe(function (sub) {
            _this.subCategory2 = sub;
        });
    };
    Object.defineProperty(AddComponent.prototype, "f", {
        get: function () {
            return this.myForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    AddComponent.prototype.getCategory = function () {
    };
    AddComponent.prototype.add = function () {
        this.etats;
    };
    AddComponent.prototype.onFileChange = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var filesAmount = event.target.files.length;
            for (var i = 0; i < filesAmount; i++) {
                var reader = new FileReader();
                this.onUpload(event.target.files[0]);
                reader.onload = function (event) {
                    _this.images.push(event.target.result);
                    _this.myForm.patchValue({
                        fileSource: _this.images
                    });
                };
                reader.readAsDataURL(event.target.files[i]);
            }
        }
        console.log(this.imageList);
    };
    AddComponent.prototype.onUpload = function (x) {
        var _this = this;
        this.imagenService.upload(x).subscribe(function (data) {
            console.log(data);
            _this.a = data;
            _this.imageList.push(_this.a);
        }, function (err) {
            alert(err.error.mensaje);
            _this.reset();
        });
    };
    AddComponent.prototype.reset = function () {
        this.imagen = null;
        this.imagenMin = null;
        this.imagenFile.nativeElement.value = '';
    };
    AddComponent.prototype.onSubmit = function () {
        var _this = this;
        this.userService.addArticle(this.id, this.selectedValue3, this.selectedMarque, this.article).subscribe(function (data) {
            _this.dataArticle = data;
            for (var i = 0; i < _this.imageList.length; i++) {
                _this.imagenService.addImageToArticle(_this.dataArticle.id, _this.imageList[i].id).subscribe(function (data) {
                    console.log(data);
                });
            }
            _this.router.navigate(['booster', _this.id]);
        }, function (error) { return console.log(error); });
    };
    __decorate([
        core_1.ViewChild('imagenInputFile', { static: false })
    ], AddComponent.prototype, "imagenFile");
    AddComponent = __decorate([
        core_1.Component({
            selector: 'app-add',
            templateUrl: './add.component.html',
            styleUrls: ['./add.component.css']
        })
    ], AddComponent);
    return AddComponent;
}());
exports.AddComponent = AddComponent;
