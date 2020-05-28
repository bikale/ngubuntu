import { Component, OnChanges, OnInit, DoCheck } from '@angular/core';
import { RecursiveAstVisitor } from '@angular/compiler/src/output/output_ast';
import { Observable } from 'rxjs';

import { UbuntuserviceService } from './ubuntuservice.service';

@Component({
  selector: 'app-root',
  template: `
    <ubuntuchild1></ubuntuchild1>
    <ubuntuchild2></ubuntuchild2>
    <!-- <p ourdirc [visible]="true" size="5">
      our directive
    </p>
    <input dir2  /> -->
    <!-- <p>{{ name | multi: 4 }}</p>
    <p>{{ myPromise | async }}</p>
    <p>{{ myobs | async }}</p> -->
    <!-- <p *ngFor="let item of myvar">{{ item.name }}</p>
    <button (click)="create()">addstudent</button> -->
  `,
})
export class AppComponent {
  public myvar;

  // constructor(private amare: UbuntuserviceService) {}

  // ngOnInit(): void {
  //   this.myvar = this.amare.student;
  //   console.log(this.myvar);
  // }

  // create() {
  //   this.amare.addstudent('dani');
  // }

  // public name = 'someone';
  // public display = true;
  // public students = ['mrx', 'mry', 'mrz'];
  // public myPromise = new Promise((resolve) => {
  //   setTimeout(() => {
  //     resolve('resolved');
  //   }, 2000);
  // });
  // public myobs = Observable.create(function (obs) {
  //   setTimeout(() => {
  //     obs.next('return from observable');
  //   }, 3000);
  // });
  // toggle() {
  //   this.display = !this.display;
  // }
}
