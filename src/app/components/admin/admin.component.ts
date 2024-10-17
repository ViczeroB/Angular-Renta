import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2'

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

  alertapublicarCasa() {
    Swal.fire({
      title: 'Casa publicada',
      text: 'La casa ha sido publicada exitosamente',
      icon: 'success',
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#1e3a5f'
    });
  }

  alertaactualizarUsuario() {
    Swal.fire({
      title: 'Usuario actualizado',
      text: 'Los datos del usuario han sido actualizados exitosamente',
      icon: 'success',
      confirmButtonText: 'Aceptar',
      // cambiar color del boton de aceptar
      confirmButtonColor: '#1e3a5f'

    });
  }

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
