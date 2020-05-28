import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class MyserviceService implements CanActivate {
  canActivate() {
    return false;
  }
  // public userinfo = {
  //   results: [
  //     {
  //       gender: 'male',
  //       name: {
  //         first: 'Ricky',
  //         last: 'Grant',
  //       },
  //       location: {
  //         street: {
  //           number: 1681,
  //           name: 'Ranchview Dr',
  //         },
  //         city: 'Oklahoma City',
  //         state: 'Alabama',
  //         country: 'United States',
  //         postcode: 43719,
  //         coordinates: {
  //           latitude: '80.3503',
  //           longitude: '-75.9276',
  //         },
  //       },
  //       email: 'ricky.grant@example.com',
  //       dob: {
  //         date: '1961-11-14T03:17:43.329Z',
  //         age: 59,
  //       },
  //       phone: '(335)-827-7611',
  //       cell: '(411)-558-2011',
  //       picture: {
  //         large: 'https://randomuser.me/api/portraits/men/29.jpg',
  //         medium: 'https://randomuser.me/api/portraits/med/men/29.jpg',
  //         thumbnail: 'https://randomuser.me/api/portraits/thumb/men/29.jpg',
  //       },
  //       nat: 'US',
  //     },
  //   ],
  // };
  // getData(): Observable<any> {
  //   return new Observable((obs) => {
  //     obs.next(this.userinfo);
  //   });
  // }
  // getChachedData(): Observable<any> {
  //   return new Observable((obs) => {
  //     let mydata = localStorage.getItem('userinfo');
  //     obs.next(mydata);
  //   });
  // }
}
