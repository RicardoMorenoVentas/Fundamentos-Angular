import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HtmlComponent } from './html/html.component';
import { TypescriptComponent } from './typescript/typescript.component';
import { OneWayBindingComponent } from './one-way-binding/one-way-binding.component';
import { InterpolacionComponent } from './interpolacion/interpolacion.component';

@NgModule({
  declarations: [
    AppComponent,
    HtmlComponent,
    TypescriptComponent,
    OneWayBindingComponent,
    InterpolacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
