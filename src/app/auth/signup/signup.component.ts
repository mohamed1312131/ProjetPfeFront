import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { NotificationService } from 'src/app/services/notification.service';
import { CustomValidationService } from 'src/app/validate/custom-validation.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  display = 'none';
  modalObject = {};
  errorMessage: string;
  signupForm: FormGroup;
  submitted : boolean;

  constructor(private router:Router,
    private fb: FormBuilder,
    private oauthService: AuthServiceService,
    private customValidator:CustomValidationService,
    private notifyService:NotificationService) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.compose([Validators.required , this.customValidator.patternValidator()])],
      confirmPassword: ['', [Validators.required]]
      }, {
        validator: this.customValidator.MatchPassword("password", "confirmPassword")
      }
    );


  }
  get signupFormControl() {
    return this.signupForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    let user = {
      name: this.signupForm.value.name,
      email: this.signupForm.value.email,
      password: this.signupForm.value.password
    }
    this.oauthService.userSignup(user).subscribe(
      response => {
        this.errorMessage = null;
        this.showModal();
        console.log(response);
        this.notifyService.showToast("register is successfully! please check your email to confirm", 'success');
      },
      error => {
        this.signupForm.reset();
        if(error.error.message) {
          this.errorMessage = error.error.message;
        } else {
          this.errorMessage = "Unknown error occured, try after some time..";
        }
      }
    )
  }
  showModal() {
    this.display = 'block';
    this.modalObject = {
      title: "SignUp Successful",
      body: `Thanks for signing in!.
            Account verification link is sent on your mail id
            ${this.signupForm.value.email}.
            Click on link to activate your account.`
    }
  }

}
