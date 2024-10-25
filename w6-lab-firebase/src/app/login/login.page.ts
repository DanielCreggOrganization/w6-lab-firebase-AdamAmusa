import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import {
  mailOutline,
  lockClosedOutline,
  eyeOutline,
  eyeOffOutline,
  logInOutline,
  personAddOutline
} from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule
  ],
})
export class LoginPage {
  private auth = inject(AuthService);
  private router = inject(Router);
  private fb = inject(FormBuilder);

  userAuthForm: FormGroup;

  constructor() {
    addIcons({
      mailOutline,
      lockClosedOutline,
      eyeOutline,
      eyeOffOutline,
      logInOutline,
      personAddOutline
    });

    this.userAuthForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  async handleRegistration() {
    if (this.userAuthForm.valid) {
      await this.auth.registerUser(this.userAuthForm.value);
      await this.router.navigateByUrl('/home', { replaceUrl: true });
    }
  }

  async handleAuthentication() {
    if (this.userAuthForm.valid) {
      await this.auth.authenticateUser(this.userAuthForm.value);
      await this.router.navigateByUrl('/home', { replaceUrl: true });
    }
  }

  async handlePasswordReset() {
    const email = this.userAuthForm.get('email')?.value;
    if (email && this.userAuthForm.get('email')?.valid) {
      await this.auth.resetPassword(email);
    }
  }
}