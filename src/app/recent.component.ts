import { Component, OnInit, Input } from '@angular/core';
import { MyserviceService } from './myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recent',
  template: `
    <h1>
      Pending Status
    </h1>
    <p *ngFor="let item of pendingStatus">
      description: {{ item.description }} catagory: {{ item.catagory }} amount:
      {{ item.amount }} status: {{ item.status }}
      <a [routerLink]="[item._id]">Detail</a>
      <!-- <button (click)="navigateToDetail(item._id)">detail</button> -->
    </p>

    <h1>
      Approved Status
    </h1>
    <p *ngFor="let item of approvedStatus">
      description: {{ item.description }} catagory: {{ item.catagory }} amount:
      {{ item.amount }} status: {{ item.status }}
      <a [routerLink]="[item._id]">Detail</a>
      <!-- <button (click)="navigateToDetail(item._id)">detail</button> -->
    </p>
    <router-outlet> </router-outlet>
  `,

  styles: [],
})
export class RecentComponent implements OnInit {
  // @Input() name;
  pendingStatus: any[];
  approvedStatus: any[];
  constructor(private service: MyserviceService, private router: Router) {}

  ngOnInit(): void {
    this.service.getTransaction().subscribe((data) => {
      console.log(data);

      this.pendingStatus = data.pending;
      this.approvedStatus = data.approved;
    });
  }
  navigateToDetail(id) {
    this.router.navigate(['']);
  }
}
