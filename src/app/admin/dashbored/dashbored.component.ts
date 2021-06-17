import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
@Component({
  selector: 'app-dashbored',
  templateUrl: './dashbored.component.html',
  styleUrls: ['./dashbored.component.css']
})
export class DashboredComponent implements OnInit {

  constructor(private router:Router) { }

  title = 'angularbootstrap';
   ngOnInit() {
                //Toggle Click Function
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
  }
  openCrre()
  {
    this.router.navigate(['admin/user-admin/admin-2019/addFormmateure']);
  }
  openaffecte()
  {
    this.router.navigate(['admin/user-admin/admin-2019/AffecteFormateure']);
  }

}
