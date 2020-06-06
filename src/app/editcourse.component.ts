import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-editcourse',
  template: `
    <form [formGroup]="editForm" (ngSubmit)="onUpdateCourse()">
      <input type="text" formControlName="name" />
      <br />
      <input type="text" formControlName="code" />
      <button type="submit">Submit</button>
    </form>
  `,
  styles: [],
})
export class EditcourseComponent implements OnInit {
  public courseinfo;
  public editForm;
  constructor(private router: Router, private fb: FormBuilder) {
    this.courseinfo = this.router.getCurrentNavigation().extras.state.data;

    this.editForm = this.fb.group({
      name: [this.courseinfo.name],
      code: [this.courseinfo.code],
    });
  }

  onUpdateCourse() {
    console.log(this.editForm.value);
    console.log(this.courseinfo._id, 'idddddddd');
  }
  ngOnInit(): void {}
}
