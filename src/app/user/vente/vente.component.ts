import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { User, UserService } from 'src/app/services/users/user.service';

@Component({
  selector: 'app-vente',
  templateUrl: './vente.component.html',
  styleUrls: ['./vente.component.css']
})
export class VenteComponent implements OnInit {
  user:any;
  email:String;
  isLogged:boolean;
  userInfo: User = new User(121, 'Amit P', 'amit@gmail.com', '', true);
  article:any =[];
  constructor(private articleService:ArticleService,private authService:AuthServiceService,private router:Router,private userService:UserService) { }

  ngOnInit(): void {
    this.isLogged = this.authService.isUserLoggedIn();
    if (this.isLogged){
      this.email=this.authService.getAuthMail();
      this.userService.getByEmail(this.email).subscribe(
        data =>{
          this.userInfo= data;
          this.articleService.getArticleVenduByUserId(this.userInfo.id).subscribe(
            d =>{
              console.log(d);

              this.article=d;
            }
          )

        }
      )
    }
  }

}
