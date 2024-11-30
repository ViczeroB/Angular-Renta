import { Component, inject } from '@angular/core';
import { Form, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent {
  private fb = inject(FormBuilder);
  formRegister! :FormGroup;
  private authS = inject(AuthService);
  private router = inject(Router);
  constructor() {
    this.formRegister = this.fb.group({
      nombre: [''],
      email: [''],
      telefono: [''],
      password: [''],
    });
  }


  register(){
    console.log(this.formRegister.value);
    this.authS.registerUser(this.formRegister.value).subscribe({
      next:(res)=>{
        console.log(res);
        this.router.navigate(['/iniciar-sesion']);
    },
    error:(err)=>{
      console.log(err);
    }
  }
  );
  }


  onVolver() {
    this.router.navigate(['/principal']);
  }
}