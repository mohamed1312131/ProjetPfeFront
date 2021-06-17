import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { User, UserService } from 'src/app/services/users/user.service';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {
  rate:number;
  article:any = [];
  id:number;
  isLogged:boolean;
  email:string;
  userInfo: User = new User(121, 'Amit P', 'amit@gmail.com', '', true);
  post:number;
  user:any = [];
  session:boolean;
  readonly = true;
  fav:boolean;
  favId:number;
  marque:String;
  similaire:any = [];
  otherImage:any =[]
  constructor(private userService:UserService,private authService:AuthServiceService,private articleService:ArticleService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.isLogged = this.authService.isUserLoggedIn();
    if (this.isLogged){
      this.email=this.authService.getAuthMail();
      this.userService.getByEmail(this.email).subscribe(
        data =>{
          this.userInfo= data;
          this.articleService.checkFavorit(this.userInfo.id,this.id).subscribe(
            d => {
             this.fav=d;
             console.log(this.fav);
            }
          )

        }
      )
    }
    this.articleService.findUserByArticleId(this.id).subscribe(
      data =>{
        this.user = data;
        if (this.user.id == this.userInfo.id){
          this.session=false;
        }
        else{
          this.session=true;
        }
      }
    )

    this.post=0;
    console.log(this.userInfo.id);
    this.articleService.findArticleById(this.id).subscribe(
      data => {
        this.article=data;
        for(let i = 1;i<this.article.images.length;i++){
          this.otherImage.push(this.article.images[i]);

        }

        this.rate=this.article.likes;

        console.log(this.article);
      }
    )
    this.articleService.getMarque(this.id).subscribe(
      m =>{
        this.marque = m.name;
      }
    )
    this.articleService.getSimilaire(this.id).subscribe(
      s =>{
        this.similaire=s;
      }
    )
  }
  addToFav(){
    if (this.isLogged){
        this.userService.getByEmail(this.email).subscribe(
          x =>{
            this.userInfo=x;
            this.articleService.addToFavorit(this.userInfo.id,this.id).subscribe(
              d => {
              console.log(d);
              }
            )
          })


      this.fav=false;
    }

  }
  deleteFavorit(){
    this.userService.getByEmail(this.email).subscribe(
      x =>{
        this.userInfo=x;
        this.articleService.getFavoritId(this.userInfo.id,this.id).subscribe(
          d => {
            this.favId=d;
          this.articleService.deleteFavorit(this.favId).subscribe(
            f =>{

            }
          )
          this.fav=true;
          }
        )
      })
  }

}
