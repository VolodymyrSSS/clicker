import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontgamepageComponent } from './components/frontgamepage/frontgamepage.component';
import { GamefieldComponent } from './components/gamefield/gamefield.component';

const routes: Routes = [
  { path:'', component: FrontgamepageComponent },
  { path:'clicker', component: GamefieldComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
