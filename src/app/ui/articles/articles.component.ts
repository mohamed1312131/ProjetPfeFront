import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { StarRatingComponent } from 'ng-starrating';

import { ArticleService } from 'src/app/services/article.service';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { UserService } from 'src/app/services/users/user.service';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  articleBooster:any = [];
  articleNonBooster:any = [];
  isLogged:boolean;
  email:String;
  userInfo:any = [];
  user:any = [];
  name:String;
  ctrl = new FormControl(null, Validators.required);
  throttle = 0;
  distance = 2;
  page = 10;
  constructor(private articleService:ArticleService,private authService:AuthServiceService,private userService:UserService) { }

  ngOnInit(): void {
    this.isLogged = this.authService.isUserLoggedIn();
    if (this.isLogged){
      this.email=this.authService.getAuthMail();
      this.userService.getByEmail(this.email).subscribe(
        data =>{
          this.userInfo= data;

        }
      )

    }
    this.getDataArticle();

  }

  getDataArticle(){
    let x = Math.floor(Math.random() * (10 - 1 + 1) + 1);
    let y = Math.floor(Math.random() * (10 - 1 + 1) + 1);
    this.articleService.getBoosterArticle(0,10).subscribe(
      booster =>{
        this.articleBooster=booster;
        console.log(this.articleBooster);
       }
    )

  }
  toggle() {
    if (this.ctrl.disabled) {
      this.ctrl.enable();
    } else {
      this.ctrl.disable();
    }
  }
  rateing(){
    console.log(this.ctrl.value);
  }
  onScroll(): void {

    this.articleService
      .getBoosterArticle(this.page,++this.page).subscribe(data => {
        this.articleBooster.push(...data);
      });
  }
}





