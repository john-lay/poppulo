import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ShotListComponent } from './shared/components/shot-list/shot-list.component';
import { ShotComponent } from './shared/components/shot/shot.component';


@NgModule({
  declarations: [
      AppComponent,
      ShotListComponent,
      ShotComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }