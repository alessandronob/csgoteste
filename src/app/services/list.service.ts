import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {tap} from 'rxjs/operators';
import { Observable, observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
}


@Injectable({
  providedIn: 'root'
})


export class ListService {

  private URL_API:string = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  getSkins():Observable<any>{
    return this.http.get(`${this.URL_API}/skins`,httpOptions);
  }
  
  getSkinsId(id):Observable<any>{
    return this.http.get(`${this.URL_API}/skins/${id}`,httpOptions);
  }

  buscaSkins(param:string){
    const url = `${this.URL_API}/skins/${param}`;
    return this.http.get<any>(url).pipe(
      tap(_=>console.log(`O parametro requisitado foi ${param}`))
    )
  }
 }