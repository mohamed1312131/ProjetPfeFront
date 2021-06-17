import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Const } from '../const';
import { AuthServiceService } from '../services/auth-service.service';
import { CustomValidationService } from '../validate/custom-validation.service';

@Component({
  selector: 'app-changer-mdp',
  templateUrl: './changer-mdp.component.html',
  styleUrls: ['./changer-mdp.component.css']
})
export class ChangerMdpComponent implements OnInit {
  successMsg: string;
  errorMsg: string;
  isLoading: boolean = false;
  resetPasswordForm:FormGroup;
  invalidLogin:boolean = false;
  userEmail: string;
  constructor(private router:Router,
    private fb:FormBuilder,
    private authService:AuthServiceService,
    private customValidator:CustomValidationService) { }

  ngOnInit(): void {
    this.resetPasswordForm = this.fb.group({
      password: ['', [Validators.required, this.customValidator.patternValidator()]],
      confirmPassword: ['', [Validators.required]]
    }, { validator: this.customValidator.MatchPassword("password", "confirmPassword") })
  }
  get resetPasswordFormControl() {
    return this.resetPasswordForm.controls;
  }
  resetPassword() {
    let body = {
      email: Const.email,
      password: this.resetPasswordForm.value.password
    }
    this.setPreRequestValues();
    this.authService.resetPassword(body).subscribe(
      response => {
        this.handleResponse(response);
      },
      error => {
        this.handleError(error);
      }
    )
  }
  handleResponse(response) {
    this.successMsg = response.message
    this.isLoading = false;
  }
  handleError(error) {
    console.log(error)
    this.isLoading = false;
    if(error.error.message){
      this.invalidLogin=true;
      this.errorMsg = error.error.message;
    }else
      this.errorMsg = 'unknown error. Try after some time'
  }
  setPreRequestValues() {
    this.clearValues();
    this.isLoading = true;

  }
  clearValues() {
    this.successMsg = null;
    this.errorMsg = null;
  }
}
