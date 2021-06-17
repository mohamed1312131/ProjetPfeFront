import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { CategorieService } from 'src/app/services/category/categorie.service';
import { UserService } from 'src/app/services/users/user.service';

import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CategorieComponent } from 'src/app/admin/categorie/categorie.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogged:boolean;
  user:any;
  email:String;
  nom:String;
  b:String;
  test:boolean;
  id:number;
  all:any =[];
value='';
  data:String;
show = false;
notif:number;
louay:String;
category:any =[];
options: any = [];
subCategorie:any =[];
subCategorie2:any = [];
part1Sub:any =[];
part2Sub:any = [];
sub: boolean = false;
allSub:any = [];

  constructor(private modalService: NgbModal,private authService:AuthServiceService,private router:Router,private userService:UserService,private articleService:ArticleService,private categoryService:CategorieService) { }

  ngOnInit(): void {

    this.categoryService.getParentCategorie().subscribe(
      data =>{
        this.category=data;
      }
    )
    this.isLogged = this.authService.isUserLoggedIn();
    if (this.isLogged){
      this.email=this.authService.getAuthMail();
      this.userService.getByEmail(this.email).subscribe(
        data =>{
          this.user= data;
          this.id=this.user.id;
          this.nom=this.user.name;
          if (this.nom == null){
            this.nom=this.user.email;
            console.log(this.nom)
          }

          if(this.user.nomBoutique != null){
            this.test=true;
            this.b=this.user.nomBoutique;
          }
          else{
            this.test=false;
          }
          this.articleService.countNotification(this.id).subscribe(
            d =>{
              this.notif=d;
            }
          )
        }

      )
    }




  }

  logOut():void{
    this.reloadComponent();
    this.authService.removeToken();
    localStorage.clear();

  }
  reloadComponent() {
    let currentUrl = this.router.url;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([currentUrl]);
    }
    goTo(nom){
      this.router.navigate(['/profile/{nom}'])
    }


open(event:any){
  if (event.target.value.length){

  this.articleService.getDataByName(event.target.value).subscribe(
    d => {
      this.all=d;
      this.show=true;

    }
  )

  }
  else{
    this.show=false;
  }
  }
  onSubmit(data){
    this.router.navigate(['/result/{data}']);
  }
  clearNotif(){
    this.email=this.authService.getAuthMail();
      this.userService.getByEmail(this.email).subscribe(
        data =>{
          this.user=data;
          console.log(this.user.id);
          this.articleService.ClearNotification(this.user.id).subscribe(
            d =>{
              console.log(d);
            }
          )
        }
      )
      this.router.navigate(['/porte-monnaie']);
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    console.log(this.options);
    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }
  search(event){

    this.articleService.getDataByName(event).subscribe(
      data =>{
        this.options=data;
        console.log(this.options);
      }
    )
  }
getSubCategorie(id:number){
 // delete this.subCategorie2;
  this.categoryService.getSubCategorie(id).subscribe(
    data =>{
      this.subCategorie=data;
      console.log(this.subCategorie[0].subCategories[0].name)
     /* this.categoryService.getSubCategorie(this.subCategorie[0].id).subscribe(
        d =>{
          this.subCategorie2=d;
          console.log(this.subCategorie2);
        }
      )*/
      /*this.categoryService.getAllSub(id).subscribe(
        data =>{
          this.allSub=data;
        }
      )*/
    }
  )
}
getSubCategorie2(id:number){
  delete this.subCategorie2
  this.categoryService.getSubCategorie(id).subscribe(
    data =>{
      this.subCategorie2=data;
    }
  )
}
getAllSub(id:number){
  this.categoryService.getAllSub(id).subscribe(
    data =>{
      this.allSub=data;
    }
  )
}


}
