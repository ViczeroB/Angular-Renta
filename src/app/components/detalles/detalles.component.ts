import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ApiCasaService } from '../../services/api-casa.service';

@Component({
  selector: 'app-detalles',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent {

  private casaService = inject(ApiCasaService);
  casa: any = {};
  constructor() { }
  
  ngOnInit(): void {
    const id = window.location.href.split('/').pop();
    this.loadCasa(id);
  }

  loadCasa(id: any) {
    this.casaService.getCasa(id).subscribe((data: any) => {
      this.casa = data;
      console.log(data);
    });
  }

  propiedad = {
    ubicacion: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    precio: 2000000,
    imagen: 'https://propiedades.com/_next/image?url=https%3A%2F%2Fpropiedadescom.s3.amazonaws.com%2Ffiles%2Foriginal%2Fjardin-de-magnolias-jardines-del-valle-oaxaca-de-juarez-oaxaca-26831382-foto-01.jpg&w=2048&q=75'  // Reemplaza esto con la URL de tu imagen real
  };

  vendedor = {
    nombre: 'Juan Pérez',
    telefono: '(555) 123-4567',
    email: 'juan.perez@example.com',
    experiencia: '10 años en el mercado inmobiliario'
  };

  mostrarModal = false;

  toggleModal() {
    this.mostrarModal = !this.mostrarModal;
  }
}
