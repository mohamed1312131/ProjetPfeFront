import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Const } from 'src/app/const';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { NotificationService } from 'src/app/services/notification.service';
import { CustomValidationService } from 'src/app/validate/custom-validation.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  verifyEmailForm : FormGroup;
  otpForm:FormGroup;
  resetPasswordForm:FormGroup;
  userEmail: string;
  displayForm: boolean = false;
  isOtpVerified: boolean = false;
  successMsg: string;
  errorMsg: string;
  isLoading: boolean = false;
  invalidLogin:boolean = false;
  invalidToken:boolean = false;
  constructor(private router:Router,
              private fb:FormBuilder,
              private authService:AuthServiceService,
              private customValidator:CustomValidationService,
              private  notifyService:NotificationService) { }

  ngOnInit(): void {
    this.verifyEmailForm = this.fb.group({
      email : ['', [Validators.email, Validators.required]]
    })
    this.otpForm = this.fb.group({
      otpNo : ['', [Validators.required, CustomValidationService.checkLimit(100000, 999999)]]
    })
    this.resetPasswordForm = this.fb.group({
      password: ['', [Validators.required, this.customValidator.patternValidator()]],
      confirmPassword: ['', [Validators.required]]
    }, { validator: this.customValidator.MatchPassword("password", "confirmPassword") })
  }
  get verifyEmailFormControl() {
    return this.verifyEmailForm.controls;
  }

  get otpFormControl() {
    return this.otpForm.controls;
  }

  get resetPasswordFormControl() {
    return this.resetPasswordForm.controls;
  }
  onSubmit() {
    this.clearValues();

      this.authService.getOtp(this.verifyEmailForm.value).subscribe(
        response => {
          this.handleResponse(response);
          this.displayForm = true;

          this.userEmail = this.verifyEmailForm.value.email;
          this.notifyService.showToast("verification code à était envoyer ", 'success');
        },
        error => {

          this.handleError(error);
        }
      )

  }
  onOTPSubmit() {
    let body = {
      email: this.userEmail,
      otpNo: this.otpForm.value.otpNo
    }
    this.setPreRequestValues();
    this.authService.submitOtp(body).subscribe(
      response => {
        this.handleResponse(response);
        this.isOtpVerified = true;
        Const.email=this.userEmail;
        this.router.navigate(['/reset']);

      },
      error => {
        this.invalidToken = true;
        this.handleError(error);
      }
    )
  }
  resetPassword() {
    let body = {
      email: this.userEmail,
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

  clearValues() {
    this.successMsg = null;
    this.errorMsg = null;
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
}
