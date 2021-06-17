import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { User, UserService } from 'src/app/services/users/user.service';

@Component({
  selector: 'app-boutique',
  templateUrl: './boutique.component.html',
  styleUrls: ['./boutique.component.css']
})
export class BoutiqueComponent implements OnInit {
  changed:boolean;
  user:any = [];
  email:String;
  isLogged:boolean;
  userInfo: User = new User(121, 'Amit P', 'amit@gmail.com', '', true);
  constructor(private authService:AuthServiceService,
              private userService:UserService) { }

  ngOnInit(): void {
    this.changed=false;
    this.isLogged = this.authService.isUserLoggedIn();
    if (this.isLogged){
      this.email=this.authService.getAuthMail();
      this.userService.getByEmail(this.email).subscribe(
        data =>{
          this.user= data;
          this.userInfo=data;


        }
      )
    }
  }
  onSubmit(id:Number){
    this.userService.upToBoutique(id,this.user).subscribe(
       d =>{

        this.changed=true;
      }
    , error => console.log(error));
  }

}
