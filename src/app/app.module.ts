import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OurdircDirective } from './ourdirc.directive';
import { Dir2Directive } from './dir2.directive';
import { MultiPipe } from './multi.pipe';
import { UbuntuchildComponent } from './ubuntuchild.component';
import { UbuntuchildComponent2 } from './ubuntuchild2.component';

@NgModule({
  declarations: [
    AppComponent,
    OurdircDirective,
    Dir2Directive,
    MultiPipe,
    UbuntuchildComponent,
    UbuntuchildComponent2,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
