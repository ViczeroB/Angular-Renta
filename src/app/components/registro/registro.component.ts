import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  constructor(private router: Router) {}

  onSubmit() {
    console.log('Formulario enviado');
    // Aquí iría la lógica de registro
    this.router.navigate(['/iniciar-sesion']);
  }

  onVolver() {
    this.router.navigate(['/principal']);
  }
}