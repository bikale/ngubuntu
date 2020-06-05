import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-child',
  template: `
    <p *ngFor="let list of listOfcourse$ | async">
      {{ list }}
    </p>
  `,
  styles: [],
})
export class ChildComponent implements OnInit {
  listOfcourse$;
  constructor(private service: MyserviceService) {}

  ngOnInit(): void {
    this.listOfcourse$ = this.service.getlist();
  }
}
