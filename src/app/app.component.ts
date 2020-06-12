import { Component, OnChanges, OnInit, DoCheck } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-root',
  template: `
    <h1>
      Ubuntu
    </h1>

    <router-outlet></router-outlet>
  `,
})
export class AppComponent {}
