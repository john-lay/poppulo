// angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

// app modules
import { AppRoutingModule, routableComponents } from './app-routing.module';

// app components
import { AppComponent } from './app.component';
import { ShotListComponent } from './shared/components/shot-list/shot-list.component';
import { ShotComponent } from './shared/components/shot/shot.component';
import { PlaceholderComponent } from './shared/components/placeholder/placeholder.component';

// app services
import { ShotService } from './shared/services/shot.service';
import { PlaceholderService } from './shared/services/placeholder.service';

@NgModule({
  declarations: [
      AppComponent,
      ShotListComponent,
      ShotComponent,
      routableComponents,
      PlaceholderComponent
  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      HttpModule
  ],
  providers: [
      ShotService,
      PlaceholderService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }