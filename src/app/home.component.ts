import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-home',
  template: `
    <h2>Welcome back {{ userDetail.name }}</h2>
    <hr />
    <p>Your current balance : {{ userDetail.balance | currency }}</p>
    <p>Total Expenses :{{ userDetail.expenses | currency }}</p>
    <p>Last Payment :{{ userDetail.lastpayment | date }}</p>
    <a [routerLink]="['chart']" [state]="{ data: userDetail.chart }"
      >Show Chart</a
    >
  `,
  styles: [],
})
export class HomeComponent implements OnInit {
  public userDetail;

  constructor(private service: MyserviceService) {}
  ngOnInit(): void {
    this.service.getUserDetail().subscribe((data) => {
      this.userDetail = data;
    });
  }
}
