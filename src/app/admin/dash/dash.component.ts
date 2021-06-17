import { Component, OnInit } from '@angular/core';

import { AdminService } from '../admin.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit  {
  orders:any = [];
 constructor(private adminService:AdminService) {}

  ngOnInit() {
    this.adminService.getOrders().subscribe(
      data =>{
        this.orders=data;
        console.log(data);
      }
    )

  }





}
