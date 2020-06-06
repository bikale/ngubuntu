import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MyserviceService {
  constructor(private http: HttpClient) {}

  getcourses() {
    return this.http.get('http://localhost:3000/api/course/courselist');
  }
}
