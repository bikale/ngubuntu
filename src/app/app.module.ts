import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FeaturedModule } from './featured/featured.module';
import { ChildComponent } from './featured/child.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,

    RouterModule.forRoot([
      {
        path: 'courslist',
        loadChildren: () =>
          import('./featured/featured.module').then(
            (module) => module.FeaturedModule
          ),
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
