import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  name:String;
  article: any = [];
  category: any = [];
  marque:any = [];
  public maydata:any=[];
  catId:number;
  marqueId:number;
  @ViewChild(NgForm) form: NgForm;
  tempArr: any = { "brands": [] };
  disable:true;
  d:any = [];
  constructor(private route:ActivatedRoute,private articleService:ArticleService) {


  }

  ngOnInit(): void {

    this.name = this.route.snapshot.params['data'];
    this.fntestdali(this.name);
    this.fnnew();
    this.articleService.getDataByName(this.name).subscribe(
      data => {
        this.article=data;
       });
    this.articleService.getCategoryByArticleName(this.name).subscribe(
      data =>{
        this.category=data;


        });
    this.articleService.getMarqueByArticleName(this.name).subscribe(
      data =>{
        this.marque=data;
      });

  }

onCheckboxChange(e) {

    if(e.target.checked){
     this.getProduct(e.target.value,0)
    }
    else{
      this.getProduct(0,0);
    }
  }
  onCheckboxChange2(e) {

    if(e.target.checked){
      this.marqueId=e.target.value;
    }
    else{
      this.getProduct(0,0);
    }
  }
  getProduct(idc:number,idm:number){

    if (idc != 0 && idm == 0){

      this.articleService.filterByCategorie(this.name,idc).subscribe(
        data =>{
          this.article=data;

        }
      )
    }
    else if (idm != 0 && idc ==0){
      this.articleService.filterByMarque(this.name,idm).subscribe(
        data =>{
          this.article=data;

        }
      )
    }
    else if (idm == 0 && idm == 0){
      this.ngOnInit();
    }
    else{
      this.articleService.getDataByName(this.name).subscribe(
        data =>{
          this.article=data;

        }
      )


    }

  }
  async fntestdali(x:String)
  {
    await this.articleService.getDataByName(x).subscribe({
      next:(data)=>{
        this.maydata=data;

      }
      ,error:(err)=>{

      }})



  }


   fnnew()
  {

     console.log(JSON.stringify(this.maydata));

  }
  fngetdata(f:NgForm)
  {
    // const {cat1,cat2}=f.value;
    // console.log(cat1,cat2);
    this.form.statusChanges.subscribe(() => {
      console.log("Is form dirty yet: " + this.form.dirty);
    })
  }
}
