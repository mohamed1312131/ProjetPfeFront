
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';


@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.css']
})
export class CommandesComponent implements OnInit {
  @ViewChild('imagenInputFile', {static: false}) imagenFile: ElementRef;
  images = [];
  imagen: File;
  imagenMin: File;
  imageList:any = [];
  a:any =[];
  myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });
  constructor(private imagenService: AdminService,
    private router: Router,) {

  }

  ngOnInit(): void {}

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
  onFileChange(event) {
    if (event.target.files && event.target.files[0]) {
        var filesAmount = event.target.files.length;
        for (let i = 0; i < filesAmount; i++) {
                var reader = new FileReader();
                this.onUpload(event.target.files[0]);
                reader.onload = (event:any) => {

                   this.images.push(event.target.result);

                   this.myForm.patchValue({
                      fileSource: this.images
                   });

                }

                reader.readAsDataURL(event.target.files[i]);
        }
    }
    console.log(this.imageList[0].id)


  }

  onUpload(x:File): void {

    this.imagenService.upload(x).subscribe(
      data => {
        this.a=data;
        this.imageList.push(this.a);

      },
      err => {
        alert(err.error.mensaje);

        this.reset();
      }
    );
  }

  reset(): void {
    this.imagen = null;
    this.imagenMin = null;
    this.imagenFile.nativeElement.value = '';
  }
}

