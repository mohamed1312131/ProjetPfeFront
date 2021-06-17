import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AdminService } from 'src/app/admin/admin.service';
import { UserService } from 'src/app/services/users/user.service';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {
  @ViewChild('imagenInputFile', {static: false}) imagenFile: ElementRef;
  u:boolean = false;
  imagen: File;
  imagenMin: File;
  image:any = [];
  id:number;
  @Input() name;
  added:boolean = false;
  constructor(public activeModal: NgbActiveModal,private imagenService:AdminService,private userService:UserService,private route:Router) {}

  ngOnInit(): void {

  }
  onFileChange(event) {
    this.imagen = event.target.files[0];
    const fr = new FileReader();
    fr.onload = (evento: any) => {
      this.imagenMin = evento.target.result;
    };
    fr.readAsDataURL(this.imagen);
  }

  onUpload(): void {

    this.imagenService.upload(this.imagen).subscribe(
      data => {
        this.image=data;
        this.userService.addImageToUser(this.name,this.image.id).subscribe(
          d =>{
            console.log(d);

          }
        )
      },
      err => {
        alert(err.error.mensaje);

        this.reset();
      }
    );
    this.added=true;
  }

  reset(): void {
    this.imagen = null;
    this.imagenMin = null;
    this.imagenFile.nativeElement.value = '';
  }


}
