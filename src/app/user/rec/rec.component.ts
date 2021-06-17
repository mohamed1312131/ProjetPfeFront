import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/services/users/user.service';

@Component({
  selector: 'app-rec',
  templateUrl: './rec.component.html',
  styleUrls: ['./rec.component.css']
})
export class RecComponent implements OnInit {
  reclamation:any ={};
  @Input() name;
  sended:boolean = false;

  constructor(public activeModal: NgbActiveModal,private userService:UserService) {}

  ngOnInit(): void {
  }

  onSubmit(){

    this.userService.sendReclamation(this.name,this.reclamation).subscribe(
      data =>{

        console.log(data);
      }
    )
    this.sended=true;
  }
}
