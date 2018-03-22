import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { AppComponent } from './app.component';

// Services
import { DestinationsService } from './services/destinations.service';
import { PlansService } from './services/plans.service';

// Components

import { HomeComponent } from './home/home.component';
@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, { useHash: false }),
  ],
  declarations: [
    AppComponent,
    HomeComponent
  ],
  providers: [
    DestinationsService,
    PlansService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
