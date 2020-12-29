import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontgamepageComponent } from './components/frontgamepage/frontgamepage.component';
import { GamefieldComponent } from './components/gamefield/gamefield.component';
import { SecondsComponent } from './components/seconds/seconds.component';
import { ClicksComponent } from './components/clicks/clicks.component';
import { RecordsComponent } from './components/records/records.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontgamepageComponent,
    GamefieldComponent,
    SecondsComponent,
    ClicksComponent,
    RecordsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
