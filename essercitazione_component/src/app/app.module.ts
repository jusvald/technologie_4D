import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppSeondComponentComponent } from './app-seond-component/app-seond-component.component';
import { AppThirdComponentComponent } from './app-third-component/app-third-component.component';
import { AppFourthComponentComponent } from './app-third-component/app-fourth-component/app-fourth-component.component';

@NgModule({
  declarations: [
    AppComponent,
    AppSeondComponentComponent,
    AppThirdComponentComponent,
    AppFourthComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
