import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const baseUrl = 'http://localhost:8080/admin';
const baseUrl2 = 'http://localhost:8080/article';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }
  getOrders():Observable<any>{
    return this.http.get<any>(`${baseUrl}/getOrders`);
  }
  getUsers(id:number):Observable<any>{
    return this.http.get<any>(`${baseUrl}/getUsers/${id}`);
  }
  public upload(imagen: File): Observable<any> {
    const formData = new FormData();
    formData.append('multipartFile', imagen);
    return this.http.post<any>(`${baseUrl}/upload`, formData);
  }
  addImageToArticle(idA:number,idI:number):Observable<any>{
    return this.http.get<any>(`${baseUrl2}/addImageIdToArticle/${idA}/${idI}`);
  }
  getListReclamation():Observable<any>{
    return this.http.get<any>(`${baseUrl}/getReclamation`)
  }
  sendMail(id:number,reclamation:any):Observable<any>{
    return this.http.post<any>(`${baseUrl}/sendReclamation/${id}`,reclamation)
  }
}
