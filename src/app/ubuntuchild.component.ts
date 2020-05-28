import { Component, OnInit, DoCheck } from '@angular/core';

import { UbuntuserviceService } from './ubuntuservice.service';

@Component({
  selector: 'ubuntuchild1',
  template: `
    <p *ngFor="let item of name">
      {{ item.name }}
    </p>
    <button (click)="changeName()">change</button>
  `,
  styles: [],
})
export class UbuntuchildComponent implements OnInit {
  public name;
  constructor(private child1: UbuntuserviceService) {}

  ngOnInit(): void {
    this.name = this.child1.getdata();
  }

  changeName() {
    this.child1.nameChanger();
  }
}
