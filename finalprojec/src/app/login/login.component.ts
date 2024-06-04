import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  Validators,
  FormBuilder,
  FormsModule,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../shared/user.sevice';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });
  authService: any;
  constructor(
    private fb: FormBuilder,
    public auth: AuthService,
    private http: HttpClient,
    private router: Router,
    private userService: UserService
  ) {}

  get email() {
    return this.loginForm.controls['email'];
  }
  get password() {
    return this.loginForm.controls['password'];
  }

  login() {
    this.http.get<any>('http://localhost:3000/users').subscribe((res) => {
      const user = res.find((a: any) => {
        return (
          a.email === this.loginForm.value.email &&
          a.password === this.loginForm.value.password
        );
      });
      if (user) {
        this.userService.logedUser = user;
        alert('Login Success');
        console.log(user);
        this.loginForm.reset();
        this.router.navigateByUrl('dashboard');
      } else {
        alert('User not found!!');
      }
      (err: any) => {
        alert('error');
      };
    });
  }
}
