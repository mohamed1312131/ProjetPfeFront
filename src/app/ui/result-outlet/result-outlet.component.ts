import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-result-outlet',
  templateUrl: './result-outlet.component.html',
  styleUrls: ['./result-outlet.component.css']
})
export class ResultOutletComponent implements OnInit {
  ctrl = new FormControl(null, Validators.required);
  constructor() { }

  ngOnInit(): void {
  }
  rateing(){
    console.log(this.ctrl.value);
  }
}
