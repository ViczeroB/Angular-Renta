import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import Swal from 'sweetalert2';
import { ApiCasaService } from '../../services/api-casa.service';
import { AuthService } from '../../services/auth.service';
import { UserServiceService } from '../../services/user-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-casa-edit',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule,ReactiveFormsModule],
  templateUrl: './casa-edit.component.html',
  styleUrl: './casa-edit.component.css'
})
export class CasaEditComponent {
  private casaService = inject(ApiCasaService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private fb = inject(FormBuilder);

  casaForm: FormGroup;
  casaId: number = 0;

  constructor() {
    this.casaForm = this.fb.group({
      direccion: ['', Validators.required],
      descripcion: ['', Validators.required],
      precio: ['', [Validators.required, Validators.min(0)]],
      imagen :['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.casaId = Number(this.route.snapshot.paramMap.get('id'));
    this.cargarCasa(this.casaId);
  }

  cargarCasa(id: number): void {
    this.casaService.getCasa(id).subscribe({
      next: (data: any) => {
        this.casaForm.patchValue(data);
      },
      error: (err) => {
        console.error('Error al cargar los datos de la casa:', err);
      },
    });
  }

  guardarCambios(): void {
    if (this.casaForm.valid) {
      const casaEditada = { id: this.casaId, ...this.casaForm.value };
      this.casaService.updateCasa(casaEditada).subscribe({
        next: () => {
          console.log('Casa actualizada');
          this.router.navigate(['/casasUsuario']); // Redirigir a la lista
        },
        error: (err) => {
          console.error('Error al actualizar la casa:', err);
        },
      });
    }
  }
  Cancelar(){
    this.router.navigate(['/casasUsuario']);
  }
}