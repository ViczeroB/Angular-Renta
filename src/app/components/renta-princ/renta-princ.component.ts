import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ApiCasaService } from '../../services/api-casa.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-renta-princ',
  standalone: true,
  imports: [RouterModule, CommonModule,FormsModule],
  templateUrl: './renta-princ.component.html',
  styleUrl: './renta-princ.component.css'
})
export class RentaPrincComponent {
  casas : any[] = [];
  filteredCasas: any[] = []; // Propiedades filtradas
  searchQuery: string = ''; // Texto de búsqueda

  private casaService = inject(ApiCasaService);
  constructor() { }
  private _router =inject(Router)
  ngOnInit(): void {
    this.loadCasas();
    
  }
  loadCasas(){
    this.casaService.getCasas().subscribe((data:any)=>{
      this.casas = data;
      this.filteredCasas = this.casas;
      console.log(data);
  });

}
goToDetalles(id:any){
  this._router.navigate([`/detalles/${id}`]);
}

filtrarPropiedades(): void {
  const query = this.searchQuery.toLowerCase();
  this.filteredCasas = this.casas.filter(casa =>
    casa.direccion.toLowerCase().includes(query) ||
    casa.descripcion.toLowerCase().includes(query) ||
    casa.precio.toString().includes(query)
  );
}

}
