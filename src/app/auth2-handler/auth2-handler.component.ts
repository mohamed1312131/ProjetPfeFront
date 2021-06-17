import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'auth2-handler',
  template: '<h1>Done!</h1>',

})
export class Auth2HandlerComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router,
    private loginService: AuthServiceService) { }

    ngOnInit() {
      let token: string = null;
      let error: string = null;
      this.route.queryParams.subscribe(params => {
          token = params['token'];
          error = params['error']
          if(error) {

              console.log(error)
              this.router.navigate(['login']);
          } else {
              this.loginService.setAuthToken('Bearer ' + token);

              this.router.navigate(['/']);
          }
      });
  }

}
