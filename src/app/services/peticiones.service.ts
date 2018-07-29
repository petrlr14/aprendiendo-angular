import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';/*pata poder trabajar con las peticiones y modificar headers*/
import { Observable } from 'rxjs'


@Injectable()
export class PeticionesService {

  public url: string;

  constructor(
    public http: HttpClient
  ) {
    this.url = 'https://reqres.in';
  }

  getUser(index): Observable<any> {
    return this.http.get(this.url + '/api/users/' + index);/*solo con esto se hace la peticion*/
  }

  addUser(user): Observable<any> {
    /* para mandar un json se pasa el objeto por stringify*/
    let json = JSON.stringify(user);
    /* debemos ademas crear cabeceras para la peticion */
    let header = new HttpHeaders()
      .set('Content-Type','application/json');
    return this.http.post(this.url+'/api/users', json, {headers:header});
  }

}
