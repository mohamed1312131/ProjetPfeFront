import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { User, UserService } from 'src/app/services/users/user.service';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {
  user:any;
  email:String;
  isLogged:boolean;
  userInfo: User = new User(121, 'Amit P', 'amit@gmail.com', '', true);
  count:Number;
  id:number;
  constructor(private authService:AuthServiceService,
    private router:Router,
    private userService:UserService,
    private articleService:ArticleService,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.isLogged = this.authService.isUserLoggedIn();
    if (this.isLogged){
      this.email=this.authService.getAuthMail();
      this.userService.getByEmail(this.email).subscribe(
        data =>{
          this.userInfo= data;
          this.articleService.CountArticleByUser(this.id).subscribe(
            c =>{
              this.count=c;

            }
          )


        }
      )
    }
  }


}
