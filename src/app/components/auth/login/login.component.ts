import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm = this.fb.group({
    user: ['', [Validators.required, Validators.minLength(3)]],
    pass: ['', [Validators.required, Validators.minLength(3)]],
  });

  constructor(private router: Router, private fb: FormBuilder) {}

  onSubmitLogin() {
    this.loginForm.markAllAsTouched();

    if (this.loginForm.valid) {
      this.router.navigate(['/']);
    }
  }
}
