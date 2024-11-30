import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Form, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2'
import { ApiCasaService } from '../../services/api-casa.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule,ReactiveFormsModule],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  private fb =inject(FormBuilder);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private casaService = inject(ApiCasaService);
  private UsuarioService = inject(AuthService);

  form!:FormGroup;  

  casas: any  =[] =[];
  constructor() {
    this.form = this.fb.group({
      usuarioId :['',Validators.required],
      direccion:['',Validators.required],
      descripcion:['',Validators.required],
      precio:['',Validators.required],
      imagen:['',Validators.required],
    });
  }

  ngOnInit(): void {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      this.form.patchValue({
        usuarioId: user.id, 
      });
    } else {
      console.error('Usuario no encontrado o no ha iniciado sesión.');
    }
  }
  save() {
    if (this.form.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor completa todos los campos correctamente.',
      });
      return;
    }
  
    const casa = this.form.value;
  
    this.casaService.createCasa(casa).subscribe({
      next: (resp) => {
        Swal.fire({
          icon: 'success',
          title: 'Casa registrada',
          text: 'La casa se registró exitosamente.',
        });
        this.form.reset();
      },
      error: (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Error al registrar',
          text: 'Hubo un problema al registrar la casa. Inténtalo nuevamente.',
        });
        console.error('Error al registrar la casa:', error);
      },
    });
  }
  

  }




