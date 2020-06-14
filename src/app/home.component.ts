import { Component, OnInit } from '@angular/core';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-home',
  template: `
    <p>welcome back!{{ userDetail$.name }}</p>
    <p>balance : {{ userDetail$.balance }}</p>
    <p>expenses : {{ userDetail$.expenses }}</p>
    <p>lastpayment : {{ userDetail$.lastpayment }}</p>

    <!-- <pie [data]="userDetail$.chart"></pie> -->
  `,
  styles: [],
})
export class HomeComponent implements OnInit {
  userDetail$;

  constructor(private service: MyserviceService) {}

  ngOnInit(): void {
    this.service.getUserDetail().subscribe((data) => {
      this.userDetail$ = data;
    });
  }
}
