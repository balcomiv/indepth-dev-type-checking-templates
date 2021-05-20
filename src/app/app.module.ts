import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StrictNullStrictTemplatesComponent } from './strict-null-strict-templates/strict-null-strict-templates.component';
import { StrictPropInitComponent } from './strict-prop-init/strict-prop-init.component';
import { StrictNullInputComponent } from './strict-null-input/strict-null-input.component';

@NgModule({
  declarations: [
    AppComponent,
    StrictNullStrictTemplatesComponent,
    StrictPropInitComponent,
    StrictNullInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
