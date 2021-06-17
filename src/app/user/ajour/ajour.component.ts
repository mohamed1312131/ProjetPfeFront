import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AdminService } from 'src/app/admin/admin.service';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { User, UserService } from 'src/app/services/users/user.service';
import { UploadImageComponent } from '../upload-image/upload-image.component';

@Component({
  selector: 'app-ajour',
  templateUrl: './ajour.component.html',
  styleUrls: ['./ajour.component.css']
})
export class AjourComponent implements OnInit {
  @ViewChild('imagenInputFile', {static: false}) imagenFile: ElementRef;
  u:boolean = false;
  imagen: File;
  imagenMin: File;
  user:any = [];
  email:String;
  isLogged:boolean;
  userInfo: any = []
  changed:boolean;
  image:any =[];
  userImage:any=[];
  last:number
  constructor(private authService:AuthServiceService,private router:Router,private userService:UserService,private imagenService:AdminService,private modalService: NgbModal) { }


  ngOnInit(): void {
    this.changed=false;
    this.isLogged = this.authService.isUserLoggedIn();
    if (this.isLogged){
      this.email=this.authService.getAuthMail();
      this.userService.getByEmail(this.email).subscribe(
        data =>{
          this.user= data;
          this.userInfo=data;
          this.last=this.userInfo.images.length-1;
          console.log(this.userInfo.images[this.last])
          /*this.userService.getUserImage(this.user.id).subscribe(
            data=>{
              this.userImage=data;

            }
          )*/


        }
      )
    }
  }

  onSubmit(id:Number){

    this.userService.updateUser(id,this.user).subscribe(
       d =>{

        this.changed=true;
      }
    , error => console.log(error));
  }
  open() {
    this.userService.getByEmail(this.email).subscribe(
      data =>{
        this.user= data;
        const modalRef = this.modalService.open(UploadImageComponent);
        modalRef.componentInstance.name = this.user.id;
      })

  }
  up(){
    this.u=true;
  }



}
