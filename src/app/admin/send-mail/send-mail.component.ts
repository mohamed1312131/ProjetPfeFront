import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/services/users/user.service';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-send-mail',
  templateUrl: './send-mail.component.html',
  styleUrls: ['./send-mail.component.css']
})
export class SendMailComponent implements OnInit {
  reclamation:any ={};
  d:any = [];
  @Input() name;
  sended:boolean = false;

  constructor(public activeModal: NgbActiveModal,private adminService:AdminService) {}

  ngOnInit(): void {
  }

  onSubmit(){

    this.adminService.sendMail(this.name,this.reclamation).subscribe(
      data =>{
        this.d=data;
        console.log(data);
      }
    )
    this.sended=true;
  }

}
