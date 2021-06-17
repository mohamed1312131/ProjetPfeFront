import { Component, OnInit , Inject, ViewChild, ElementRef} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators} from '@angular/forms'
import { CategorieService } from 'src/app/services/category/categorie.service';
import { UserService } from 'src/app/services/users/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/admin/admin.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class AddComponent implements OnInit {
  @ViewChild('imagenInputFile', {static: false}) imagenFile: ElementRef;
  images = [];
  imagen: File;
  imagenMin: File;
  imageList:any = [];
  a:any =[];
  myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });
 parentCategory:any = [];
 selectedValue: number;
 subCategory1:any = [];
 selectedValue2:number;
 selectedValue3:number;
 subCategory2:any = [];
 categorie1:boolean;
 categorie2:boolean;
 etat:String;
 selectedMarque:number;
 marque:any = [];
 article:any ={};
 id:number;
  idArticle:number;
  dataArticle:any =[];
etats = [
  {value: 'Bon etat', viewValue: 'Bon etat'},
  {value: 'Correct', viewValue: 'Correct'},
  {value: 'Neuf', viewValue: 'Neuf'},
  {value: 'Neuf avec facture', viewValue: 'Neuf avec facture'},
  {value: 'Trés bonne etat', viewValue: 'Trés bonne etat'}
]
selectedEtat:String;
  constructor(private router:Router,private route:ActivatedRoute,private http: HttpClient,private categoryService:CategorieService,private userService:UserService,private imagenService: AdminService) { }


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.categoryService.getParentCategorie().subscribe(
      data =>{
        this.parentCategory=data;

      }
      )
      this.categoryService.getMarque().subscribe(
        mar =>{
          this.marque=mar;
        }
      )
      console.log(this.article.image)

  }
  getSubCategory(){

      this.categoryService.getSubCategorie(this.selectedValue).subscribe(
        sub =>{
          this.subCategory1=sub;

        }
      )

  }
  getSubCategory2(){

    this.categoryService.getSubCategorie(this.selectedValue2).subscribe(
      sub =>{
        this.subCategory2=sub;

      }
    )

}

  get f(){
    return this.myForm.controls;
  }
  getCategory(){

  }
  add(){
    this.etats
  }
  onFileChange(event) {
    if (event.target.files && event.target.files[0]) {
        var filesAmount = event.target.files.length;
        for (let i = 0; i < filesAmount; i++) {
                var reader = new FileReader();
                this.onUpload(event.target.files[0]);
                reader.onload = (event:any) => {

                   this.images.push(event.target.result);

                   this.myForm.patchValue({
                      fileSource: this.images
                   });

                }

                reader.readAsDataURL(event.target.files[i]);
        }
    }
    console.log(this.imageList)


  }

  onUpload(x:File): void {

    this.imagenService.upload(x).subscribe(
      data => {
        console.log(data)
        this.a=data;
        this.imageList.push(this.a);

      },
      err => {
        alert(err.error.mensaje);

        this.reset();
      }
    );
  }

  reset(): void {
    this.imagen = null;
    this.imagenMin = null;
    this.imagenFile.nativeElement.value = '';
  }

  onSubmit(){

    this.userService.addArticle(this.id,this.selectedValue3,this.selectedMarque,this.article).subscribe(
      data =>{
        this.dataArticle=data;
        for(let i=0;i<this.imageList.length;i++){
          this.imagenService.addImageToArticle(this.dataArticle.id,this.imageList[i].id).subscribe(
            data =>{
              console.log(data);
            }
          )
        }
        this.router.navigate(['booster',this.id]);     },
      error => console.log(error)
    );


}
}
