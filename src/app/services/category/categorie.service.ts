import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Const } from 'src/app/const';

const baseUrl = 'http://localhost:8080/admin';
const baseUrl2 = 'http://localhost:8080/article';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(private http:HttpClient) {}
    getParentCategorie(): Observable<any> {
      return this.http.get<any>(Const.API_BASE_URL + '/admin/parent');
    }
    getSubCategorie(id:Number):Observable<any>{
      const url = `${baseUrl}/cat/${id}`;
      return this.http.get<any>(url);
    }
    getMarque():Observable<any>{
      const url = `${baseUrl}/getMarque`;
      return this.http.get<any>(url);
    }
    addMarque(marque:any):Observable<any>{
      return this.http.post<any>(`${baseUrl}/addMarque`,marque);
    }
    getAllSub(id:number):Observable<any>{
      return this.http.get<any>(`${baseUrl2}/getAllSubCategorie/${id}`);
    }
    addCategorie(id:number,cat:any):Observable<any>{
      return this.http.post<any>(`${baseUrl}/addCategorie/${id}`,cat);
    }




}
