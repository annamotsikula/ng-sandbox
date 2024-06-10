import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Auth } from '../../helpers/interfaces/auth.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {
  private _authService = inject(AuthService);
  private _router = inject(Router);
  authForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required]),
    rememberUser: new FormControl(false)
  })


  onSignIn() {
    if (this.authForm.valid) {
      const { email, password, rememberUser } = this.authForm.value as Auth
      const success = this._authService.logIn({ email, password, rememberUser });
      if(success) this._router.navigate(['/main'])

    }
  }
}
