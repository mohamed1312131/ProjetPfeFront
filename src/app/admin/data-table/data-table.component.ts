import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  users: any =[];
  constructor(private adminService:AdminService,private router:Router) { }

  ngOnInit(): void {
    this.adminService.getUsers(6).subscribe(
      data =>{
        this.users = data;
      }
    )
  }
  goTo(id:number){

    this.router.navigate(['profile/',id]);
  }
}
