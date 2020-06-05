import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MyserviceService {
  public courseList = ['angular', 'react', 'nodejs'];

  constructor() {}

  getlist() {
    return of(this.courseList);
  }
}
