import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './layouts/home/home.component';
import { CardComponent } from './components/card/card.component';
import { CommonModule } from '@angular/common';
import { CustomBtnDirective } from './directives/custom-btn.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    CustomBtnDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
