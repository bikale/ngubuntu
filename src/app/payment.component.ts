import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  template: `
    <p>
      Place your order
    </p>
    <input />
    <button (click)="placeorder()">buy</button>
  `,
  styles: [],
})
export class PaymentComponent implements OnInit {
  constructor(private router: Router) {}
  placeorder() {
    this.router.navigate(['home']);
  }

  ngOnInit(): void {}
}
