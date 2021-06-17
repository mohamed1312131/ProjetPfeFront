import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ArticleService } from 'src/app/services/article.service';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { UserService } from 'src/app/services/users/user.service';
import {PaginatePipe, PaginationService} from 'ng2-pagination';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
isLogged:boolean = false;
email:String;
user:any = [];
nonBoosterArticle: any =[];

article:any = [];
throttle = 0;
  distance = 2;
  page = 5;
  constructor(private authService:AuthServiceService,
              private userService:UserService,
              private articleService:ArticleService) { }

  ngOnInit(): void {
    this.articleService.getNonBoosterArticle(0,this.page).subscribe(data => {
        this.article = data;
        console.log(data);
      });
    this.isLogged = this.authService.isUserLoggedIn();
    if (this.isLogged){
      this.email=this.authService.getAuthMail();
      this.userService.getByEmail(this.email).subscribe(
        data =>{
          this.user= data;
          
          
      }

      )

  }

}

/*async getArticle(){
  await this.articleService.getNonBoosterArticle(0,10).subscribe({next:(data)=>{
    this.nonBoosterArticle=data;
    console.log(data);

  },error:(err)=>{
alert("ther is a error ")
  }})

}*/

onScroll(): void {

  this.articleService
    .getNonBoosterArticle(this.page,++this.page)
    .subscribe(data => {
      this.article.push(...data);
      console.log(this.article);
    });

}

}
