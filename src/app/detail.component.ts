import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-detail',
  template: `
    <h1>transaction Detail</h1>

    <p>description: {{ transactionDetail.description }}</p>
    <p>catagory: {{ transactionDetail.catagory }}</p>
    <p>amount: {{ transactionDetail.amount }}</p>
    <p>status: {{ transactionDetail.status }}</p>

    <!-- <map data="{{ transactionDetail.location }}"> </map> -->
  `,
  styles: [],
})
export class DetailComponent implements OnInit {
  id;
  transactionDetail;
  constructor(
    private route: ActivatedRoute,
    private service: MyserviceService
  ) {
    this.route.params.subscribe((data) => {
      this.id = data['id'];

      this.service.transactionDetail(this.id).subscribe((data) => {
        this.transactionDetail = data;
      });
    });
  }

  ngOnInit(): void {}
}
