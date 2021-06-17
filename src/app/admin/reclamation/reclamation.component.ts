import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AdminService } from '../admin.service';
import { SendMailComponent } from '../send-mail/send-mail.component';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']
})
export class ReclamationComponent implements OnInit {
  reclamation:any = [];
  constructor(private adminService:AdminService,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.adminService.getListReclamation().subscribe(
      data =>{
        this.reclamation=data;
        console.log(this.reclamation)

      }
    )

  }


  open(id:number) {
    const modalRef = this.modalService.open(SendMailComponent);
    modalRef.componentInstance.name = id;
  }








}
