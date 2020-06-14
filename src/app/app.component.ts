import { Component, OnChanges, OnInit, DoCheck } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormControl,
  FormArray,
} from '@angular/forms';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-root',
  template: `
    <h1>
      Ubuntu
    </h1>
    <a [routerLink]="['']">Home</a> ||
    <a [routerLink]="['recent']">Recent</a> ||
    <a [routerLink]="['payment']">Payment</a>
    <router-outlet> </router-outlet>
  `,
})
export class AppComponent {}
