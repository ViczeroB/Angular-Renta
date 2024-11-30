import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApiCasaService } from '../../services/api-casa.service';


@Component({
  selector: 'app-renta-princ',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './renta-princ.component.html',
  styleUrl: './renta-princ.component.css'
})
export class RentaPrincComponent {
  // propiedades = [
  //   { nombre: 'Casa en el Centro', habitaciones: 3, banos: 2, precio: 1 },
  //   { nombre: 'Casa en el Cerro', habitaciones: 3, banos: 2, precio: 1 },
  //   { nombre: 'Casa en Oaxaca', habitaciones: 3, banos: 2, precio: 1 },
  //   { nombre: 'Casa en el Centro', habitaciones: 3, banos: 2, precio: 1 },
  //   { nombre: 'Casa en el Cerro', habitaciones: 3, banos: 2, precio: 1 },
  // ];

  private casaService = inject(ApiCasaService);
  casas : any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.loadCasas();
    
  }
  loadCasas(){
    this.casaService.getCasas().subscribe((data:any)=>{
      this.casas = data;

  });

}
}
