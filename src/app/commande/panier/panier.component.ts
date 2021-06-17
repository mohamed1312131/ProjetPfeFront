import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  id:number;
  article:any = [];
  user:any = [];
  total:number;
  constructor(private route:ActivatedRoute,private articleService:ArticleService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.articleService.findArticleById(this.id).subscribe(
      data =>{
        this.article=data;
        this.total=this.article.prix+5.4;
      }
    )
    this.articleService.findUserByArticleId(this.id).subscribe(
      data =>{
        this.user = data;
      }
    )

  }

}
