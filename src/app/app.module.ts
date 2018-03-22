import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

// Services
import { DestinationsService } from "./services/destinations.service";
import { PlansService } from "./services/plans.service";

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    DestinationsService,
    PlansService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
