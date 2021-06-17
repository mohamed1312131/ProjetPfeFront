import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { User, UserService } from 'src/app/services/users/user.service';

@Component({
  selector: 'app-shiping',
  templateUrl: './shiping.component.html',
  styleUrls: ['./shiping.component.css']
})
export class ShipingComponent implements OnInit {
  changed:boolean;
  id:number;
  article:any = [];
  userSeller:any = [];
  total:number;
  user:any =[];
  userInfo: User = new User(121, 'Amit P', 'amit@gmail.com', '', true);
  isLogged:boolean;
  email:String;
  final:number;
  constructor(private route:ActivatedRoute,private articleService:ArticleService,private authService:AuthServiceService,private userService:UserService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.articleService.findArticleById(this.id).subscribe(
      data =>{
        this.article=data;
        console.log(this.article.prix)
        this.total=this.article.prix+5;
        this.final=this.total+1.49;
      }
    )
    this.articleService.findUserByArticleId(this.id).subscribe(
      data =>{
        this.userSeller = data;
      }
    )
    this.isLogged = this.authService.isUserLoggedIn();
    if (this.isLogged){
      this.email=this.authService.getAuthMail();
      this.userService.getByEmail(this.email).subscribe(
        data =>{
          this.userInfo=data;
          this.user=data;
          console.log(data);
        }
      )
    }

  }
  onSubmit(id:number,idA:number){
    this.userService.update2User(id,this.user).subscribe(
      d =>{
         console.log(d);
     }
   , error => console.log(error));
   this.articleService.order(id,idA).subscribe(
     data =>{
     }
   )
 }



}
