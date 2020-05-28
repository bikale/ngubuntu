import { Component, OnInit, DoCheck } from '@angular/core';

import { UbuntuserviceService } from './ubuntuservice.service';
@Component({
  selector: 'ubuntuchild2',
  template: `
    <p *ngFor="let item of name">
      {{ item.name }}
    </p>
  `,
  styles: [],
})
export class UbuntuchildComponent2 implements OnInit {
  public name;
  constructor(private child2: UbuntuserviceService) {}

  ngOnInit(): void {
    this.name = this.child2.getdata();
  }
  // ngDoCheck() {
  //   this.name = this.child2.student;
  // }
}
