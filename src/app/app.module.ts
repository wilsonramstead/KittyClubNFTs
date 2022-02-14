import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Kitty1Component } from './kitty1/kitty1.component';
import { TotalCollectionComponent } from './total-collection/total-collection.component';
import { Kitty2Component } from './kitty2/kitty2.component';
import { Kitty3Component } from './kitty3/kitty3.component';
import { Kitty4Component } from './kitty4/kitty4.component';
import { Kitty5Component } from './kitty5/kitty5.component';
import { Kitty6Component } from './kitty6/kitty6.component';
import { Kitty7Component } from './kitty7/kitty7.component';
import { Kitty8Component } from './kitty8/kitty8.component';
import { Kitty9Component } from './kitty9/kitty9.component';
import { Kitty10Component } from './kitty10/kitty10.component';
import { Kitty11Component } from './kitty11/kitty11.component';
import { Kitty12Component } from './kitty12/kitty12.component';

@NgModule({
  declarations: [
    AppComponent,
    Kitty1Component,
    TotalCollectionComponent,
    Kitty2Component,
    Kitty3Component,
    Kitty4Component,
    Kitty5Component,
    Kitty6Component,
    Kitty7Component,
    Kitty8Component,
    Kitty9Component,
    Kitty10Component,
    Kitty11Component,
    Kitty12Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
