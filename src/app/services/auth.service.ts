import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
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


  constructor() { }
  registerUser(body:{name:string,email:string,telefono:string,password:string}){
    return this._http.post(APIURL,body);
  }

  loginUser(body:{email:string,password:string}):Observable<any>{
    return this._http.post(`${APIURL3}/login`,body);
  }

  // setToken(token: string): void {
  //   this.token = token;
  //   localStorage.setItem('token', token); // También puedes usar localStorage para persistencia
  // }

  // getToken(): string | null {
  //   if (!this.token) {
  //     this.token = localStorage.getItem('token');
  //   }
  //   return this.token;
  // }
  // getProtectedData(): Observable<any> {
  //   const headers = new HttpHeaders({
  //     Authorization: `Bearer ${this.getToken()}`, // Incluye el token en el encabezado
  //   });

  //   return this._http.get(`${this.APIURL2}/protected`, { headers });
  // }

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
    return user ? JSON.parse(user) : null; // Verifica si el contenido es válido JSON
  } catch (error) {
    console.error('Error al analizar el JSON de usuario:', error);
    return null; // Si falla, retorna null
  }
  }

  logout(): void {
    localStorage.removeItem('user');
  }
  
}

