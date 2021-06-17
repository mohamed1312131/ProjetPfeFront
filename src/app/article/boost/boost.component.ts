import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-boost',
  templateUrl: './boost.component.html',
  styleUrls: ['./boost.component.css']
})
export class BoostComponent implements OnInit {
  price:number;
  days:number;
  selectedValue:boolean;
  id:number;
  constructor(private articleService:ArticleService,private route:ActivatedRoute) { }

  ngOnInit(): void {

  }
  getPrix(prix:number,day:number){
    this.price=prix;
    this.days=day;
    if (this.days==0){
    this.selectedValue=false;
    }
    else{
      this.selectedValue=true;
    }
    console.log(this.price);
    console.log(this.days);
  }
  chek(){
    console.log(this.price);
    console.log(this.days);
    console.log(this.selectedValue);
  }


}
