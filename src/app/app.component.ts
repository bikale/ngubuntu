import { Component, OnChanges, OnInit, DoCheck } from '@angular/core';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-root',
  template: `
    <h1>
      Ubuntu SPA Banking
    </h1>
    <a [routerLink]="['']">Home</a> ||
    <a [routerLink]="['recent']">Recent Activity</a> ||
    <a [routerLink]="['payment']">Make Payment</a> ||
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {}
