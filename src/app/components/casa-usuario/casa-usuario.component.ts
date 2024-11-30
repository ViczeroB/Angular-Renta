import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ApiCasaService } from '../../services/api-casa.service';
import { UserServiceService } from '../../services/user-service.service';

@Component({
  selector: 'app-casa-usuario',
  standalone: true,
  imports: [],
  templateUrl: './casa-usuario.component.html',
  styleUrl: './casa-usuario.component.css'
})
export class CasaUsuarioComponent {
  // propiedades = [
  //   { nombre: 'Casa en el Centro', habitaciones: 3, banos: 2, precio: 1 },
  //   { nombre: 'Casa en el Cerro', habitaciones: 3, banos: 2, precio: 1 },
  //   { nombre: 'Casa en Oaxaca', habitaciones: 3, banos: 2, precio: 1 },
  //   { nombre: 'Casa en el Centro', habitaciones: 3, banos: 2, precio: 1 },
  //   { nombre: 'Casa en el Cerro', habitaciones: 3, banos: 2, precio: 1 },
  // ];

  private casaService = inject(ApiCasaService);
  private userService = inject(UserServiceService);
  private _router =inject(Router);

  casas : any[] = [];
  constructor() { }
  
  ngOnInit(): void {
    this.loadCasas();
    
  }
  loadCasas(){
    const user = this.userService.getUser(); // Obtener usuario logueado
    if (user && user.id) {
      this.casaService.getCasasByUserId(user.id).subscribe({
        next: (data: any[]) => {
          this.casas = data;
          console.log('Casas del usuario:', data);
        },
        error: (err) => {
          console.error('Error al cargar casas del usuario:', err);
        },
      });
    } else {
      console.error('Usuario no logueado');
    }
}
goToDetalles(id:any){
  this._router.navigate([`/detalles/${id}`]);
}
}
