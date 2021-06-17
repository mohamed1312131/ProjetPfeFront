"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CommandesComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var CommandesComponent = /** @class */ (function () {
    function CommandesComponent(imagenService, router) {
        this.imagenService = imagenService;
        this.router = router;
        this.images = [];
        this.imageList = [];
        this.a = [];
        this.myForm = new forms_1.FormGroup({
            name: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(3)]),
            file: new forms_1.FormControl('', [forms_1.Validators.required]),
            fileSource: new forms_1.FormControl('', [forms_1.Validators.required])
        });
    }
    CommandesComponent.prototype.ngOnInit = function () { };
    /*onFileChange(event) {
      this.imagen = event.target.files[0];
      var filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        const fr = new FileReader();
  
        fr.onload = (evento: any) => {
          this.images.push(event.target.result);
          this.imagenMin = evento.target.result;
        };
  
        fr.readAsDataURL(event.target.files[i]);
    }
  
    }*/
    CommandesComponent.prototype.onFileChange = function (event) {
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
        console.log(this.imageList[0].id);
    };
    CommandesComponent.prototype.onUpload = function (x) {
        var _this = this;
        this.imagenService.upload(x).subscribe(function (data) {
            _this.a = data;
            _this.imageList.push(_this.a);
        }, function (err) {
            alert(err.error.mensaje);
            _this.reset();
        });
    };
    CommandesComponent.prototype.reset = function () {
        this.imagen = null;
        this.imagenMin = null;
        this.imagenFile.nativeElement.value = '';
    };
    __decorate([
        core_1.ViewChild('imagenInputFile', { static: false })
    ], CommandesComponent.prototype, "imagenFile");
    CommandesComponent = __decorate([
        core_1.Component({
            selector: 'app-commandes',
            templateUrl: './commandes.component.html',
            styleUrls: ['./commandes.component.css']
        })
    ], CommandesComponent);
    return CommandesComponent;
}());
exports.CommandesComponent = CommandesComponent;
