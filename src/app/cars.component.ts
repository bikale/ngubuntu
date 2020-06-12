import { Component, OnInit } from '@angular/core';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-cars',
  template: `
    <p>
      cars works!
    </p>
    <p *ngFor="let car of listOfcars">
      {{ car.brand }}
    </p>
  `,
  styles: [],
})
export class CarsComponent implements OnInit {
  token;
  public listOfcars: [];
  constructor(private service: MyserviceService) {}

  ngOnInit(): void {
    this.service.getToken().subscribe((res) => {
      this.token = res;
    });
    this.service.getCars().subscribe((res) => {
      this.listOfcars = res['data'];
      console.log(res);
    });
  }
}
