import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [CommonModule, RouterModule,],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})

export class PrincipalComponent {
  // cards: any[] = [];
  // constructor(private router: Router) {}

  // navigateToRegistro() {
  //   this.router.navigate(['/registro']);
  // }
}



