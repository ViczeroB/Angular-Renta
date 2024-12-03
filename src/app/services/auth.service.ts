import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


                   
const APIURL ='https://rentacasaswebapi.onrender.com/api/v1/usuario';
const APIURL3 ='https://rentacasaswebapi.onrender.com/api/v1/usuarioL';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private APIURL2 ='https://rentacasaswebapi.onrender.com/api/v1/usuarioL';
  private _http = inject(HttpClient);
  private token :string | null = null;
  private router = inject(Router);


  constructor() { }
  registerUser(body:{name:string,email:string,telefono:string,password:string}){
    return this._http.post(APIURL,body);
  }

  loginUser(body:{email:string,password:string}):Observable<any>{
    return this._http.post(`${APIURL3}/login`,body);
  }

  setUserData(user: any): void {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      console.warn('Datos de usuario inválidos, no se pueden guardar.');
    }
  }

  getUserData(): any {
  const user = localStorage.getItem('user');
  try {
    return user ? JSON.parse(user) : null; 
  } catch (error) {
    console.error('Error al analizar el JSON de usuario:', error);
    return null; 
  }
  }

  logout(): void {
    localStorage.removeItem('user');
    this.router.navigate(['/principal']);
  }
  
  updateUser(userId: string, data: any) {
    return this._http.put(`${APIURL}/${userId}`, data); 
  
}

}

