import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  template: `
    <p>shop works! user choice {{ userchoice }}</p>

    <button (click)="purchase()">order</button>
  `,
  styles: [],
})
export class ShopComponent implements OnInit {
  public userchoice: string;
  constructor(private activeroute: ActivatedRoute, private router: Router) {
    // activeroute.params.subscribe((data) => {
    //   this.userchoice = data.id;
    // });

    activeroute.queryParams.subscribe((data) => {
      console.log(data);
      this.userchoice = data.id;
    });
  }
  purchase() {
    this.router.navigate(['payment']);
  }
  ngOnInit(): void {}
}
