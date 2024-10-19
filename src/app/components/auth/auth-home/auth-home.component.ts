import { Component } from '@angular/core';

@Component({
  selector: 'app-auth-home',
  templateUrl: './auth-home.component.html',
  styleUrl: './auth-home.component.css',
})
export class AuthHomeComponent {
  isLoggin = true;
  textAction = '¿No tienes cuenta? Registrate aquí';

  constructor() {}

  setComponent() {
    this.isLoggin = !this.isLoggin;
    if (!this.isLoggin) {
      this.textAction = 'Volver al login';
    } else {
      this.textAction = '¿No tienes cuenta? Registrate aquí';
    }
  }
}
