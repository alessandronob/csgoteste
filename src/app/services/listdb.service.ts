import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json;charset=utf-8'})
};

@Injectable({
  providedIn: 'root'
})
export class ListdbService {
  private URL_API:string = "http://localhost:3000/skins";


  constructor(private http: HttpClient) { }

  // função (método) terá um retorno do tipo Observable
  getList(param:string):Observable<any> {
    const url = `${this.URL_API}/${param}`;
    return this.http.get<any>(url).pipe(
      tap(_ => console.log(`O parametro requisitado foi: ${param} pela URL: ${url}`)),
      catchError(this.handleError<any>(`Falha no getMovies parametro = ${param}`))
    );
  }

  // método privado para exibir o erro
  private handleError<T>(Operator = 'operation', result?: T) {
    return (error: any):Observable<T> => {
      console.error(error); // log do erro na console

      // mantem o app rodando por ter retornado o obj vazio
      return of(result as T);
    };
  }
}