import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MyserviceService } from './myservice.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { RecentComponent } from './recent.component';
import { PaymentComponent } from './payment.component';
import { ChartComponent } from './chart.component';
import { NotfoundComponent } from './notfound.component';
import { OurpercentPipe } from './ourpercent.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecentComponent,
    PaymentComponent,
    ChartComponent,
    NotfoundComponent,
    OurpercentPipe,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'recent', component: RecentComponent },
      { path: 'payment', component: PaymentComponent },
      { path: 'chart', component: ChartComponent },
      { path: '404', component: NotfoundComponent },
      { path: '**', redirectTo: '404' },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
