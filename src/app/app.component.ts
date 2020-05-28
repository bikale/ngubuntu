import { Component, OnChanges, OnInit, DoCheck } from '@angular/core';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-root',
  template: `
    <h1>
      This is the my SPA
    </h1>
    <a [routerLink]="['home']"> Home </a><br />
    <a [routerLink]="['about']"> About </a><br />
    <a [routerLink]="['account']"> Account </a><br />

    <div *ngFor="let item of productlist">
      <!-- <a [routerLink]="['shop', item.id]">{{ item.name }} </a><br /> -->

      <a [routerLink]="['shop']" [queryParams]="{ id: 'getch' }"
        >{{ item.name }} </a
      ><br />
    </div>

    <router-outlet> </router-outlet>

    <h2>this is my footer</h2>
  `,
})
export class AppComponent {
  productlist = [
    { id: 1, name: 'nike' },
    { id: 3, name: 'adiddas' },
    { id: 2, name: 'puma' },
  ];

  // ngOnInit(): void {
  //   // this.subscription = this.service.getData().subscribe((data) => {
  //   //   localStorage.setItem('userinfo', JSON.stringify(data));
  //   // });
  //   this.service.getChachedData().subscribe((data) => {
  //     this.userdata = JSON.parse(data).results;
  //     console.log(this.userdata);
  //   });
  // }
}
