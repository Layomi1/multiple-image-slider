import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PrevDirective } from './prev.directive';
import { NextDirective } from './next.directive';

@NgModule({
  declarations: [AppComponent, PrevDirective, NextDirective],
  imports: [BrowserModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
