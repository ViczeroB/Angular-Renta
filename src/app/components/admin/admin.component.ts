import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  nuevaCasa = {
    ubicacion: '',
    descripcion: '',
    precio: null,
    imagen: '',
    vendedor: {
      nombre: '',
      telefono: '',
      email: '',
      experiencia: ''
    }
  };

  usuario = {
    nombre: 'Admin Usuario',
    email: 'admin@example.com',
    telefono: '(555) 123-4567',
    contrasenaActual: '',
    nuevaContrasena: '',
    confirmarContrasena: ''
  };

  publicarCasa() {
    console.log('Casa publicada:', this.nuevaCasa);
    // Aquí iría la lógica para publicar la casa
    this.nuevaCasa = {
      ubicacion: '',
      descripcion: '',
      precio: null,
      imagen: '',
      vendedor: {
        nombre: '',
        telefono: '',
        email: '',
        experiencia: ''
      }
    };
  }

  actualizarUsuario() {
    console.log('Datos de usuario actualizados:', this.usuario);
    // Aquí iría la lógica para actualizar los datos del usuario
    this.usuario.contrasenaActual = '';
    this.usuario.nuevaContrasena = '';
    this.usuario.confirmarContrasena = '';
  }
}
