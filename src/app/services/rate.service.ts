import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient  } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

const URL_API = "http://localhost:3000/skins";
const httpOptions ={
  headers: new HttpHeaders({ 'Content-Type': 'application/json;charset=utf-8'})
};
@Injectable({
  providedIn: 'root'
})
export class RateService {

  constructor(private http: HttpClient) { }

  getRate(param:string = ""): any{
    return this.http.get<any>(` ${URL_API}${param}`, httpOptions).pipe(
      catchError(this.handleError<any>('Falha ao recuperar os avaliações'))
    );
  }

  addRate(rate):Observable<any>{
    return this.http.post(URL_API, rate, httpOptions).pipe(
      catchError(this.handleError<any>('Falha ao registrar as avaliações'))
    );
  }

  updateRate(rate):Observable<any>{
    return this.http.put(`${URL_API}/${rate.id}`,rate ,httpOptions ).pipe(
      catchError(this.handleError<any>('Falha ao atualizar as avaliações'))
    );
  }


  private handleError<T>(Operator = 'operation', result?: T){         
    return (error:any):Observable<T> => {
      console.error(error);

      return of(result as T);
    };
  }
}
