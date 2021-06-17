import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Const } from 'src/app/const';
export class User {
  constructor(public id: number,
              public name: string,
              public email: string,
              public imageUrl: string,
              public emailVerified: boolean) {}
}
const baseUrl = 'http://localhost:8080/data/user';
const baseUrl2 = 'http://localhost:8080/data';
const articleUrl = 'http://localhost:8080/article'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  getUserInfo() {
    return this.http.get<User>(Const.API_BASE_URL + '/user/me');
  }
  getByEmail(email:String):Observable<any> {
    return this.http.get(`${baseUrl}/${email}`);
  }
  updateUser(id:Number,user:any):Observable<any> {

    return this.http.put(`${baseUrl2}/update1/${id}`,user);
  }
  upToBoutique(id:Number,user:any):Observable<any> {

    return this.http.put(`${baseUrl2}/update-boutique/${id}`,user);
  }

  update2User(id:Number,user:any):Observable<any> {

    return this.http.put(`${baseUrl2}/update2/${id}`,user);
  }
  addArticle(id:number,cat:number,m:number,article:any):Observable<any>{
    return this.http.post<any>(`${articleUrl}/poster/${id}/${cat}/${m}`,article)
  }
  getByName(name:String):Observable<any> {
    return this.http.get(`${baseUrl2}/userByName/${name}`);
  }
  getById(id:number):Observable<any> {
    return this.http.get(`${baseUrl2}/userById/${id}`);
  }
  getFriends(id:number):Observable<any> {
    return this.http.get(`${baseUrl2}/getFriends/${id}`);
  }
  getFriendOf(id:number):Observable<any> {
    return this.http.get(`${baseUrl2}/getFriendOf/${id}`);
  }
  suivie(id:number,abonner:any):Observable<any>{
    return this.http.post(`${baseUrl2}/suivie/${id}`,abonner);
  }
  checkSuivie(id:number,abonner:number):Observable<boolean>{
    return this.http.get<boolean>(`${baseUrl2}/checkSuivie/${id}/${abonner}`);
  }
  desabonner(id:number,abonner:number):Observable<boolean>{
    return this.http.get<boolean>(`${baseUrl2}/desabonner/${id}/${abonner}`);
  }
  getRate(id:number):Observable<number>{
    return this.http.get<number>(`${baseUrl2}/getRate/${id}`);
  }
  rateUser(rate:number,id:number):Observable<number>{
    return this.http.get<number>(`${baseUrl2}/rate/${rate}/${id}`)
  }
  getUserImage(id:number):Observable<number>{
    return this.http.get<number>(`${baseUrl2}/getImageByUserId/${id}`);
  }
  addImageToUser(idU:number,idI:number):Observable<any>{
    return this.http.get<any>(`${baseUrl2}/addImageIdToUser/${idU}/${idI}`)
  }
  sendReclamation(id:number,reclamation:any):Observable<any>{
    return this.http.post<any>(`${baseUrl2}/sendReclamation/${id}`,reclamation)
  }
}

