import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routableComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShotListComponent } from './shared/components/shot-list/shot-list.component';
import { ShotComponent } from './shared/components/shot/shot.component';

import { ShotService } from './shared/services/shot.service';


@NgModule({
  declarations: [
      AppComponent,
      ShotListComponent,
      ShotComponent,
      routableComponents
  ],
  imports: [
      BrowserModule,
      AppRoutingModule
  ],
  providers: [ShotService],
  bootstrap: [AppComponent]
})

export class AppModule { }