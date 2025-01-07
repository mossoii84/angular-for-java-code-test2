import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CommonHeaderModule } from './components/common-header/common-header.module';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DagsRunsService } from './services/dags-runs.service';
import {StoreModule} from "@ngrx/store";
import {appReducers} from "./store/reducers/app.reducers";
import {EffectsModule} from "@ngrx/effects";
import {DagsRunsEffects} from "./store/effects/dags-runs.effects";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([DagsRunsEffects]),
    StoreDevtoolsModule.instrument(),
    CommonHeaderModule,
    MatIconModule,
  ],
  providers: [DagsRunsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
