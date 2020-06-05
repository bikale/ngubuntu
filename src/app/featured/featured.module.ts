import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './child.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ChildComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ChildComponent }]),
  ],
  exports: [ChildComponent],
})
export class FeaturedModule {}
