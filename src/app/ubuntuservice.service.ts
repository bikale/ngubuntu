import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UbuntuserviceService {
  public student = [{ name: 'xxxxxxxxx' }, { name: 'bikale' }];

  nameChanger() {
    this.student = [...this.student, { name: 'ddddd' }];
  }
  getdata() {
    return this.student;
  }
}
