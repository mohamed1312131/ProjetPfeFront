import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ArticleService } from 'src/app/services/article.service';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { User, UserService } from 'src/app/services/users/user.service';
import { PdfComponent } from '../pdf/pdf.component';
import { RecComponent } from '../rec/rec.component';


@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {
  user:any;
  email:String;
  isLogged:boolean;
  userInfo: User = new User(121, 'Amit P', 'amit@gmail.com', '', true);
  article:any;
  order:any;
  selled:any;
  showFinished:boolean;
  show:boolean;
  constructor(private articleService:ArticleService,private modalService: NgbModal,private authService:AuthServiceService,private router:Router,private userService:UserService) { }

  ngOnInit(): void {
    this.show=true;
    this.showFinished=false;
    this.isLogged = this.authService.isUserLoggedIn();
    if (this.isLogged){
      this.email=this.authService.getAuthMail();
      this.userService.getByEmail(this.email).subscribe(
        data =>{
          this.userInfo= data;
          this.articleService.GetOrderByUserId(this.userInfo.id).subscribe(
            o =>{
              this.order=o;
              console.log(this.order);
            }
          )
          this.articleService.getOrderArticleByUserId(this.userInfo.id).subscribe(
            d => {
              this.article=d;
              console.log(this.article);
            }
          )

        }
      )
    }
  }
  open(id:number){
    const modalRef = this.modalService.open(RecComponent);
    modalRef.componentInstance.name = id;
  }

  openPdf(id:number){
    const modalRef = this.modalService.open(PdfComponent,{ size: 'lg' });
    modalRef.componentInstance.name = id;
  }
}
