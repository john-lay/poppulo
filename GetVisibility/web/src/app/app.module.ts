import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ComplianceComponent } from "./shared/components/compliance/compliance.component";
import { ComplianceService } from "./shared/services/compliance.service";


@NgModule({
  declarations: [
      AppComponent,
      ComplianceComponent
  ],
  imports: [
      BrowserModule,
      HttpModule
  ],
  providers: [
      ComplianceService
  ],
  bootstrap: [
      AppComponent
  ]
})
export class AppModule { }
