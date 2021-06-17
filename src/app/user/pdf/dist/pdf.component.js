"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PdfComponent = void 0;
var core_1 = require("@angular/core");
var jspdf = require("jspdf");
var html2canvas_1 = require("html2canvas");
var PdfComponent = /** @class */ (function () {
    function PdfComponent(activeModal) {
        this.activeModal = activeModal;
        this.title = 'html-to-pdf';
    }
    PdfComponent.prototype.ngOnInit = function () {
    };
    PdfComponent.prototype.generatePDF = function () {
        var data = document.getElementById('contentToConvert');
        html2canvas_1["default"](data).then(function (canvas) {
            var imgWidth = 208;
            var imgHeight = canvas.height * imgWidth / canvas.width;
            var contentDataURL = canvas.toDataURL('image/png');
            var pdf = new jspdf.jsPDF('p', 'mm', 'a4');
            var position = 0;
            pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
            pdf.save('newPDF.pdf');
        });
    };
    __decorate([
        core_1.Input()
    ], PdfComponent.prototype, "name");
    PdfComponent = __decorate([
        core_1.Component({
            selector: 'app-pdf',
            templateUrl: './pdf.component.html',
            styleUrls: ['./pdf.component.css']
        })
    ], PdfComponent);
    return PdfComponent;
}());
exports.PdfComponent = PdfComponent;
