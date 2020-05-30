import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chart',
  template: `
    <p *ngFor="let item of userChart">
      category : {{ item.category }} percentage :{{
        item.percentage | ourpercent: '%':'#'
      }}
    </p>
  `,
  styles: [],
})
export class ChartComponent implements OnInit {
  public userChart: [];
  constructor(private router: Router) {
    this.userChart = this.router.getCurrentNavigation().extras.state.data;
    console.log(this.userChart);
  }

  ngOnInit(): void {}
}
