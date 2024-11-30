import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-iniciar-sesion',
  standalone: true,
  imports: [RouterModule, FormsModule,ReactiveFormsModule],
  templateUrl: './iniciar-sesion.component.html',
  styleUrl: './iniciar-sesion.component.css'
})
export class IniciarSesionComponent {
  formLogin!: FormGroup;
  private fb = inject(FormBuilder);
  private authS = inject(AuthService);
  private _router = inject(Router);
  constructor() {
    this.formLogin = this.fb.group({
      email: [''],
      password: ['']  
    });
  }

   login(){
   console.log(this.formLogin.value);
     this.authS.loginUser(this.formLogin.value).subscribe({
       next: (res) => {
         this._router.navigate(['/renta-princ']);
     },
     error: (err) => {
       console.log(err);
       }
     }
   )
 }
// login() {
//   console.log(this.formLogin.value);
//   this.authS.loginUser(this.formLogin.value).subscribe({
//     next: (res) => {
//       if (res && res.user) { // Asegúrate de que `res.user` existe y contiene los datos esperados
//         localStorage.setItem('user', JSON.stringify(res.user)); // Guarda los datos del usuario
//         this._router.navigate(['/renta-princ']);
//       } else {
//         console.warn('Datos de usuario faltantes en la respuesta del backend');
//       }
//     },
//     error: (err) => {
//       console.error('Error al iniciar sesión:', err);
//     }
//   });
// }


}
