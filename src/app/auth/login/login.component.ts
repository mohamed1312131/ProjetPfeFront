import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Const } from 'src/app/const';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { NotificationService } from 'src/app/services/notification.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage: string
  invalidLogin: boolean = false;
  loginForm: FormGroup
  rememberMe: boolean = false;
  display = 'none'


  constructor(private router:Router,
              private authService:AuthServiceService,
              private fb:FormBuilder,
              private notifyService:NotificationService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
    if(localStorage.getItem("email") && localStorage.getItem("password")){
      this.loginForm.patchValue({
        email: localStorage.getItem("email"),
        password: localStorage.getItem("password")
      })
    }

  }
  get loginFormControl() {
    return this.loginForm.controls;
  }
  onSubmit() {
    let user = this.loginForm.value;
    this.authService.basicJwtAuthLogin(user).subscribe(
      response => {
        console.log(response)
        this.notifyService.showToast("logged in successfully!", 'success');
        this.invalidLogin = false;
        this.saveCredentials();
       // console.log(this.authService.isUserLoggedIn());
      //console.log(this.authService.getAuthToken());

        this.router.navigate(['/']);

      },
      error => {
        this.invalidLogin = true;
        if(error.error.message) {
          this.errorMessage = error.error.message;
        } else {
          this.errorMessage = "Unknown error occured, try after some time..";
        }
      }
    )
  }
  saveCredentials() {

      localStorage.setItem("email", this.loginForm.value.email)
      localStorage.setItem("password", this.loginForm.value.password)


  }
  reloadPage(): void {
    window.location.reload();
  }
  reloadComponent() {
    let currentUrl = this.router.url;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([currentUrl]);
    }
  getLoginPage(provider: string): string {
      switch (provider) {
        case 'facebook':return Const.FACEBOOK_AUTH_URI;
        case 'google':return Const.GOOGLE_AUTH_URI;
      }

    }
  toggleValue(event) {
      if(event.target.checked) {
        this.rememberMe = true;
      }
      console.log(this.rememberMe);
    }


}
