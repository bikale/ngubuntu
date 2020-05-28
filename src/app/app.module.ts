import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MyserviceService } from './myservice.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { AboutusComponent } from './aboutus.component';
import { AccountComponent } from './account.component';
import { ShopComponent } from './shop.component';
import { PaymentComponent } from './payment.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    AccountComponent,
    ShopComponent,
    PaymentComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutusComponent },
      {
        path: 'account',
        component: AccountComponent,
        canActivate: [MyserviceService],
      },
      // { path: 'shop/:id', component: ShopComponent },
      { path: 'shop', component: ShopComponent },
      { path: 'payment', component: PaymentComponent },
      { path: '**', redirectTo: 'about', pathMatch: 'full' },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
