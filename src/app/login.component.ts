import { Component, OnInit } from '@angular/core';
import { MyserviceService } from './myservice.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  template: `
    <form [formGroup]="loginform" (ngSubmit)="onLogin()">
      <p>Email</p>
      <input type="email" formControlName="email" />

      <p>password</p>
      <input type="password" formControlName="password" />

      <button type="submit">Login</button>
    </form>
  `,
  styles: [],
})
export class LoginComponent implements OnInit {
  public courses$ = [];
  loginform;
  token;
  constructor(
    private service: MyserviceService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.loginform = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onLogin() {
    this.service
      .loginAuth(this.loginform.value.email, this.loginform.value.password)
      .subscribe((res) => {
        if (res['token']) {
          // if the user authenticated
          this.service.setToken(res['token']);
          this.router.navigate(['cars']);
        }
      });
  }

  ngOnInit(): void {
    this.service.getToken().subscribe((data) => {
      this.token = data;
    });
  }
}
