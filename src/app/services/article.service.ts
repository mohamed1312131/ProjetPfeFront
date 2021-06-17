import { HttpClient } from '@angular/common/http';
import { ContentChild, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Const } from '../const';
const baseUrl = 'http://localhost:8080/article';
const articleUrl = 'http://localhost:8080/article/getBy';
const articleUrl2 = 'http://localhost:8080/article/count-article';
const orderUrl = 'http://localhost:8080/data';
@Injectable({
  providedIn: 'root'
})

export class ArticleService {

  constructor(private http:HttpClient) { }

  /*getALL():Observable<String>{
    return this.http.get<String>(Const.API_BASE_URL + '/all');
  }*/

  getAllProducts(limitOfResults=10): Observable<any> {
    return this.http.get<any>(Const.API_BASE_URL + '/article/all',
    {
      params:{
        limit:limitOfResults.toString()
      }
    });
  }
  getPorductsts(obj):Observable<any>{
    return this.http.get<any>(Const.API_BASE_URL+ '/article/getLimited',obj);
  }
  getProductsByUserId(idUser:Number):Observable<any>{
    return this.http.get<any>(`${articleUrl}/${idUser}`);
  }
  CountArticleByUser(idUser:Number):Observable<Number>{
    return this.http.get<Number>(`${articleUrl2}/${idUser}`);
  }
  GetOrderByUserId(idUser:Number):Observable<any>{
    const url = `${orderUrl}/order/${idUser}`;
    return this.http.get<any>(url);
  }
  GetNonSelledArticleByUserId(idUser:Number):Observable<any>{
    const url = `${orderUrl}/non-order/${idUser}`;
    return this.http.get<any>(url);
  }
  GetSelledArticleByUserId(idUser:Number):Observable<any>{
    const url = `${baseUrl}/vendu/${idUser}`;
    return this.http.get<any>(url);
  }
  getOrderArticleByUserId(idUser:Number):Observable<any>{
    const url = `${baseUrl}/getByOrder/${idUser}`;
    return this.http.get<any>(url);
  }
  getBoosterArticle(limit:Number,offset:Number):Observable<any>{
    const url = `${orderUrl}/article-booster/${limit}/${offset}`;
    return this.http.get<any>(url);
  }
  getNonBoosterArticle(limit:Number,offset:Number):Observable<any>{
    const url = `${orderUrl}/non-booster-article/${limit}/${offset}`;
    return this.http.get<any>(url);
  }
  getUserByArticleId(id:Number):Observable<any>{
    const url = `${baseUrl}/articleByUser/${id}`;
    return this.http.get<any>(url);
  }
  findArticleById(id:number):Observable<any>{
    const url = `${baseUrl}/findArticle/${id}`;
    return this.http.get<any>(url);
  }
  findUserByArticleId(id:number):Observable<any>{
    const url = `${baseUrl}/findUserByArticle/${id}`;
    return this.http.get<any>(url);
  }
  checkFavorit(id:number,idArticle:number):Observable<boolean>{
    const url = `${orderUrl}/checkFavorit/${id}/${idArticle}`;
    return this.http.get<boolean>(url);
  }
  addToFavorit(id:number,idArticle:number):Observable<any>{

    return this.http.post(`${orderUrl}/addToFavorit/${id}/${idArticle}`,null);
  }
  deleteFavorit(id: number): Observable<any> {
    return this.http.delete(`${orderUrl}/deleteFavorite/${id}`);
  }
  getFavoritId(id:number,idArticle:number):Observable<number>{
    const url = `${orderUrl}/getFavoritId/${id}/${idArticle}`;
    return this.http.get<number>(url);
  }
  getMarque(id:number):Observable<any>{
    const url = `${baseUrl}/getMarqueByArticleId/${id}`;
    return this.http.get<any>(url);
  }
  getSimilaire(id:number):Observable<any>{
    const url = `${baseUrl}/getSimilaire/${id}`;
    return this.http.get<any>(url);
  }
  getDataByName(name:String):Observable<any>{
    const url = `${baseUrl}/findByName/${name}`;
    return this.http.get<any>(url);
  }
  getCategoryByArticleName(name:String):Observable<any>{
    const url = `${baseUrl}/getCategoryByArticleName/${name}`;
    return this.http.get<any>(url);
  }
  getMarqueByArticleName(name:String):Observable<any>{
    const url = `${baseUrl}/getMarqueByArticleName/${name}`;
    return this.http.get<any>(url);
  }
  filterByCategorie(name:String,id:number):Observable<any>{
    const url = `${baseUrl}/filterByCategorie/${name}/${id}`;
    return this.http.get<any>(url);
  }
  filterByMarque(name:String,id:number):Observable<any>{
    const url = `${baseUrl}/filterByMarque/${name}/${id}`;
    return this.http.get<any>(url);
  }
  countNotification(id:number):Observable<number>{
    const url = `${baseUrl}/CountNotification/${id}`;
    return this.http.get<number>(url);
  }
  ClearNotification(id:number):Observable<number>{
    const url = `${baseUrl}/clearNotif/${id}`;
    return this.http.get<number>(url);
  }
  deleteArticle(id:number){
    const url = `${orderUrl}/deleteArticleById/${id}`;
    return this.http.delete(url);
  }
  vendu(id:number){
    const url = `${orderUrl}/vendu/${id}`;
    return this.http.get(url);
  }
  order(idUser:number,idArticle:number){
    const url = `${baseUrl}/commander/${idUser}/${idArticle}`;
    return this.http.get(url);
  }
  getArticleVenduByUserId(id:number){
    const url = `${baseUrl}/getArticleVendu/${id}`;
    return this.http.get(url);
  }

  getNotificationByUserId(id:number):Observable<any>{
    const url = `${baseUrl}/getNotfication/${id}`;
    return this.http.get<any>(url);
  }
  getUserByNotifcation(id:number):Observable<any>{
    const url = `${baseUrl}/getUserNotfication/${id}`;
    return this.http.get<any>(url);
  }


}
