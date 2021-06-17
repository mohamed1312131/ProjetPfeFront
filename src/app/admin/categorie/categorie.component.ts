import { Component, OnInit } from '@angular/core';
import { CategorieService } from 'src/app/services/category/categorie.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {
  panelOpenState = false;
  mainCategory:any = [];
  subCategory:any = [];
  subCategory2:any = [];
  catego:any = {};
  constructor(private categorieService:CategorieService) { }

  ngOnInit(): void {
    this.categorieService.getParentCategorie().subscribe(
      data =>{
        this.mainCategory=data;
        console.log(this.mainCategory)
      }
    )
  }
  setStep($event) {
    this.categorieService.getSubCategorie($event).subscribe(
      data =>{
        this.subCategory=data;
      }
    )
   }
   getSub2($event){
     this.categorieService.getSubCategorie($event).subscribe(
       data =>{
         this.subCategory2=data;
         console.log(data);
       }
     )
   }
   addCat(id:number){
    console.log(this.catego)
    console.log(id)
     this.categorieService.addCategorie(id,this.catego).subscribe(
       data =>{
         console.log(data);

       }
     )
     this.ngOnInit();
   }

}
