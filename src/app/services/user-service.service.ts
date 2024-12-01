import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private user: any = null;
  constructor() { 
        // Si hay datos en localStorage, los cargamos al inicializar el servicio
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
          this.user = JSON.parse(storedUser);
        }
  }
  
  getUser(){
    return this.user;
  }

  setUser(user:any){
    this.user = user;
    localStorage.setItem('user', JSON.stringify(user));
  }

  clearUser() {
    this.user = null;
    localStorage.removeItem('user');
  }

  updateUserField(field: string, value: any) {
    if (this.user) {
      this.user[field] = value;
      localStorage.setItem('user', JSON.stringify(this.user));
    }
  }
}
