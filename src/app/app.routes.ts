import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './components/principal/principal.component';
import { RegistroComponent } from './components/registro/registro.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { RentaPrincComponent } from './components/renta-princ/renta-princ.component';
import { DetallesComponent } from './components/detalles/detalles.component';
import { AdminComponent } from './components/admin/admin.component';
import { CasaUsuarioComponent } from './components/casa-usuario/casa-usuario.component';

export const routes: Routes = [
    { path: '', redirectTo: '/principal', pathMatch: 'full' },
    { path: 'principal', component: PrincipalComponent },
    { path: 'registro', component: RegistroComponent },
    { path: 'iniciar-sesion', component: IniciarSesionComponent },
    { path: 'renta-princ', component: RentaPrincComponent},
    { path: 'detalles', component: DetallesComponent},
    { path: 'admin', component: AdminComponent },
    {path: 'casasUsuario',component:CasaUsuarioComponent},
    {path: 'detalles/:id', component: DetallesComponent}
];