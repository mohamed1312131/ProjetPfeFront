import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { User, UserService } from 'src/app/services/users/user.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user:any;
  email:String;
  isLogged:boolean;
  userInfo:any = [];
  like:number;
  id:number;
  urlUser:any =[];
  same:Boolean = false;
  friends:any =[];
  friendOf:any = [];
  abonner:boolean;
  x:any = [];
  rate:number;
  readonly:boolean = false;
  rating:number = 2;
  image:any =[];
  constructor(private authService:AuthServiceService,private router:Router,private userService:UserService,private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.isLogged = this.authService.isUserLoggedIn();
    this.id=this.route.snapshot.params['id'];
    this.userService.getById(this.id).subscribe(
      data =>{
        this.urlUser=data;

        if (this.isLogged){
          this.email=this.authService.getAuthMail();
          this.userService.getByEmail(this.email).subscribe(
            d =>{
              this.userInfo = d;
              this.userService.getUserImage(this.userInfo.id).subscribe(
                x =>{
                  this.image=x;
                  console.log(this.image)
                }
              )
              if (this.userInfo.id==this.urlUser.id){
                this.readonly=true;
                this.same=true;
                this.userService.getFriends(this.userInfo.id).subscribe(
                  data =>{
                    this.friends=data;
                    console.log(this.friends);
                  }
                )
                this.userService.getFriendOf(this.userInfo.id).subscribe(
                  data =>{
                    this.friendOf=data;
                  }
                )
              }
              else{
                this.same=false;
                this.userService.checkSuivie(this.userInfo.id,this.id).subscribe(
                  x =>{
                    this.abonner=x;

                  }
                )
              }
            }
          )
        }
      }
    )
    this.userService.getRate(this.id).subscribe(
      data =>{
        this.rating=data;
        console.log(this.rating)
      }
    )
  }
goTo(id:number){

  this.router.navigate(['profile/',id]);
}
suivie(id:number){
  console.log(id);
  console.log(this.id);
  this.userService.getById(this.id).subscribe(
    data =>{
      this.userService.suivie(id,data).subscribe(
        d =>{
          this.abonner=true;
        }
      )
    }
  )


}
desabonner(id:number){
  this.userService.getById(this.id).subscribe(
    data =>{
      this.x = data;
      this.userService.desabonner(id,this.x.id).subscribe(
        d =>{
          this.abonner=false;
        }
      )
    }
  )

}
rateUser(id:number){

  this.userService.rateUser(this.rating,id).subscribe(
    data =>{
      console.log(this.rating)
    }
  )
}
}
