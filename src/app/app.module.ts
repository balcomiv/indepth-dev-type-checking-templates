import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NestedComponent } from './strict-null-input/nested.component';
import { StrictNullInputComponent } from './strict-null-input/strict-null-input.component';
import { StrictNullStrictTemplatesComponent } from './strict-null-strict-templates/strict-null-strict-templates.component';
import { StrictPropInitComponent } from './strict-prop-init/strict-prop-init.component';

@NgModule({
  declarations: [
    AppComponent,
    StrictNullStrictTemplatesComponent,
    StrictPropInitComponent,
    StrictNullInputComponent,
    NestedComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
