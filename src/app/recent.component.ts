import { Component, OnInit } from '@angular/core';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-recent',
  template: `
    <h1>
      Pending Transaction
    </h1>
    <hr />

    <!-- <p *ngFor="let item of pendingTransaction | filter: 'pending'"> -->
    <p *ngFor="let item of userTransaction | filter: 'pending'">
      data: {{ item.data }} | description: {{ item.description }} catagory:
      {{ item.catagory }} amount: {{ item.amount }} status: {{ item.status }}
    </p>

    <hr />
    <h1>
      Approved Transaction
    </h1>

    <!-- <p *ngFor="let item of approvedTransaction | filter: 'approved'"> -->
    <p *ngFor="let item of userTransaction | filter: 'approved'">
      data: {{ item.data }} | description: {{ item.description }} catagory:
      {{ item.catagory }} amount: {{ item.amount }} status: {{ item.status }}
    </p>
  `,
  styles: [],
})
export class RecentComponent implements OnInit {
  public userTransaction: [];
  public approvedTransaction: [];
  public pendingTransaction: [];
  constructor(private service: MyserviceService) {}

  ngOnInit(): void {
    this.service.getRecentTransactions().subscribe((data) => {
      this.userTransaction = data;
      // this.approvedTransaction = data.filter(
      //   (item) => item.status == 'approved'
      // );
      // this.pendingTransaction = data.filter((item) => item.status == 'pending');
    });
  }
}
