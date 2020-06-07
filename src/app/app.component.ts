import { Component, OnChanges, OnInit, DoCheck } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-root',
  template: `
    <h1>
      Ubuntu
    </h1>

    <mat-slider min="1" max="100" step="1" value="1"></mat-slider>
    <div *ngFor="let item of courses$">
      <p>name: {{ item.name }} || Code : {{ item.code }}</p>
      <p *ngFor="let key of item.topics">
        {{ key }}
      </p>
      <a [routerLink]="['editcourse']" [state]="{ data: item }">Edit </a>
    </div>

    <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit {
  public courses$ = [];
  constructor(private service: MyserviceService) {}

  ngOnInit(): void {
    this.service.getcourses().subscribe((courses) => {
      console.log(courses);
      this.courses$ = courses['data']; // courses.data
    });
  }
}
