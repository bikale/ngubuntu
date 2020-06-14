import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { MyserviceService } from './myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-makepayment',
  template: `
    <form [formGroup]="payform" (ngSubmit)="onSubmit()">
      Amount: <input type="number" formControlName="amount" /><br />
      Bank ACN <input type="text" formControlName="bankaccnum" /><br />
      Date: <input type="date" formControlName="date" /><br />

      <button type="submit" [disabled]="payform.invalid">Pay</button>
    </form>
  `,
  styles: [],
})
export class MakepaymentComponent implements OnInit {
  public payform;
  constructor(
    private formbuilder: FormBuilder,
    private service: MyserviceService,
    private router: Router
  ) {
    this.payform = formbuilder.group({
      amount: ['', Validators.required],
      bankaccnum: ['', [Validators.required, this.checkAccountNumber]],
      date: ['', Validators.required],
    });
  }
  onSubmit() {
    console.log(this.payform.value);

    this.router.navigate(['', 'thankyou']);
  }

  checkAccountNumber = (control: FormControl) => {
    let data;
    this.service.checkAccountNum(control.value).subscribe((res) => {
      data = res;
    });

    if (data.valid == true) {
      return null;
    } else {
      return { valid: false };
    }
  };

  ngOnInit(): void {}
}
