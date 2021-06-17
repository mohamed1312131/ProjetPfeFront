import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { User, UserService } from 'src/app/services/users/user.service';

@Component({
  selector: 'app-earnings',
  templateUrl: './earnings.component.html',
  styleUrls: ['./earnings.component.css']
})
export class EarningsComponent implements OnInit {
  user: User = new User(1, "amit", "amit@gmail.com", "", true);
  onParentLoaded: boolean = false;
  notif:any =[];
  userNotif:any = [];
  constructor(private userService: UserService,private articleService:ArticleService) { }

  ngOnInit() {
     this.userService.getUserInfo().subscribe(response => {
        this.user = response;
         this.onParentLoaded = true;
        this.articleService.getNotificationByUserId(this.user.id).subscribe(
          data =>{
            this.notif=data;
            console.log(this.notif)
            for(let i = 0;i<this.notif.length;i++){
              this.articleService.getUserByNotifcation(this.notif[i].article.id).subscribe(
                d =>{
                  
                  this.userNotif.push(d);
                }
              )
            }

            //this.articleService.getUserByNotifcation(this.notif.article.id)
          }
        )
     },
      error => { console.log(error) }
    )
     console.log(this.userNotif)
  }

}
