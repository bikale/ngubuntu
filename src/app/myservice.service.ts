import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MyserviceService {
  constructor(private http: HttpClient) {}
  private token: null;
  loginAuth(email, password) {
    return this.http.post('http://localhost:3000/login', {
      email: email,
      password: password,
    });
  }

  getToken() {
    return of(this.token);
  }

  setToken(usertoken) {
    this.token = usertoken;
  }

  getCars() {
    return this.http.get('http://localhost:3000/cars', {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    });
  }
}
