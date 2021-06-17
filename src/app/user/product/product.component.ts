import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ArticleService } from 'src/app/services/article.service';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { User, UserService } from 'src/app/services/users/user.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  userInfo: User = new User(121, 'Amit P', 'amit@gmail.com', '', true);
  id:number;
  isLogged:boolean;
  email:String;
  article:any;
  currentUser:any =[];
  same:boolean;
  constructor(private authService:AuthServiceService,
    private router:Router,
    private userService:UserService,
    private produitService:ArticleService,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id)
    this.userService.getById(this.id).subscribe(
      d =>{
        this.userInfo=d;
        this.isLogged = this.authService.isUserLoggedIn();
        if (this.isLogged){
          this.email=this.authService.getAuthMail();
          this.userService.getByEmail(this.email).subscribe(
            data =>{
              this.currentUser=data;
              if (this.currentUser.id == this.id){
                this.same=true;
              }
              else{
                this.same=false;
              }
              console.log(this.same);
            }
            )
        }
      }
    )

    this.produitService.getProductsByUserId(this.id).subscribe(
      data =>{
        this.article=data;
        console.log(this.article)
      }
    )
  }

  deleteArticle(id:number){
    this.produitService.deleteArticle(id).subscribe(
      data =>{
        console.log(data);
      }
    )
  }
  definirVendu(id:number){
    this.produitService.vendu(id).subscribe(
      data =>{

      }
    )
  }




}

