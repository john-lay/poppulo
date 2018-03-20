import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ShotListComponent } from './shared/components/shot-list/shot-list.component';
import { ShotComponent } from './shared/components/shot/shot.component';

import { ShotService } from './shared/services/shot.service';


@NgModule({
  declarations: [
      AppComponent,
      ShotListComponent,
      ShotComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ShotService],
  bootstrap: [AppComponent]
})

export class AppModule { }