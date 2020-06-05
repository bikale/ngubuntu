import { Component, OnChanges, OnInit, DoCheck } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
    <h1>
      Ubuntu
    </h1>

    <form [formGroup]="myform" (ngSubmit)="onsubmit()">
      <input formControlName="name" /> <br />
      <input formControlName="email" />
      <p *ngIf="myform.get('email').invalid">invalid email</p>
      <br />
      <textarea formControlName="message" #msg></textarea><br />
      <p>{{ 100 - messageCounter }}</p>
      <!-- <input [formControl]="myform.get('email')" /> -->

      <span>{{ 100 - msg.value.length }}</span>
      <button type="submit" [disabled]="myform.invalid">submit</button>
    </form>

    <!-- <a [routerLink]="['courslist']">DisplayCourses</a>
    <router-outlet> </router-outlet> -->
  `,
})
export class AppComponent implements OnInit {
  public myform;
  public messageCounter = 0;
  constructor(private fb: FormBuilder) {
    this.myform = fb.group({
      name: [
        'mr x',
        Validators.compose([Validators.required, this.nameValidator]),
      ],
      email: [
        'example@gmail.com',
        Validators.compose([Validators.email, Validators.required]),
      ],
      message: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(100),
          this.charCounter,
        ]),
      ],
    });
  }
  nameValidator(control: FormControl) {
    if (control.value.trim().includes(' ')) {
      return null;
    }
    return { invalid: true };
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    //

    this.myform.patchValue({ message: 'amex@gmail.com' });
  }

  charCounter = (control: FormControl) => {
    console.log(control.value.length);
    this.messageCounter = control.value.length;
    return null;
  };
  onsubmit() {
    console.log(this.myform.value);
  }
}
