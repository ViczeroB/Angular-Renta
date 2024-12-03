import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const APIURL ='https://rentacasaswebapi.onrender.com/api/v1/casa';

@Injectable({
  providedIn: 'root'
})
export class ApiCasaService {
  private _http = inject(HttpClient);

  constructor() { }
  getCasas(){
    return this._http.get(APIURL);
  }
  getCasa(id:number){
    return this._http.get(`${APIURL}/${id}`);
  }

  createCasa(casa :any){
    return this._http.post(APIURL,casa);
  }

  updateCasa(casa:any){
    return this._http.put(`${APIURL}/${casa.id}`,casa);
  }

  deleteCasa(id:number){
    return this._http.delete(`${APIURL}/${id}`);
  }
  
  getCasasByUserEmail(email: string): Observable<any[]> {
    return this._http.get<any[]>(`${APIURL}/user/${email}`);
}
}

