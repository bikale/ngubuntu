import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-editcourse',
  template: `
    <form [formGroup]="editForm" (ngSubmit)="onUpdateCourse()">
      <input type="text" formControlName="name" />
      <br />
      <input type="text" formControlName="code" />

      <button mat-raised-button color="primary">Submit</button>
    </form>
  `,
  styles: [],
})
export class EditcourseComponent implements OnInit {
  public courseinfo;
  public editForm;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private service: MyserviceService
  ) {
    this.courseinfo = this.router.getCurrentNavigation().extras.state.data;

    this.editForm = this.fb.group({
      name: [this.courseinfo.name],
      code: [this.courseinfo.code],
    });
  }

  onUpdateCourse() {
    this.service
      .updateCourse(this.editForm.value, this.courseinfo._id)
      .subscribe((data) => {
        setTimeout(() => {
          this.router.navigateByUrl('');
        }, 2000);
      });
  }
  ngOnInit(): void {}
}
