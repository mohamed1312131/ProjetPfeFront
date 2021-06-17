import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toaster:ToastrService) { }
  showToast(message,type){
    this.toaster.success(message,type);
  }
}
