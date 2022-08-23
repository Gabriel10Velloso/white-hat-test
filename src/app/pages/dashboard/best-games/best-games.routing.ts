import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BestGamesComponent } from './best-games.component';

// gdAreas="top-games best-games slots jackpots live black-jack roulette table poker other"

const routes: Routes = [
  {path: 'best-games', component: BestGamesComponent, data: { title: "best-games", categories: ['top'] }},
  {path: 'new-games', component: BestGamesComponent, data: { title: "new-games", categories: ['new'] }},
  {path: 'slots', component: BestGamesComponent, data: { title: "slots", categories: ['slots'] }},
  {path: 'jackpots', component: BestGamesComponent, data: { title: "jackpots", categories: ['jackpots'] }},
  {path: 'live', component: BestGamesComponent, data: { title: "live", categories: ['live'] }},
  {path: 'black-jack', component: BestGamesComponent, data: { title: "black-jack", categories: ['blackjack'] }},
  {path: 'roulette', component: BestGamesComponent, data: { title: "roulette", categories: ['roulette'] }},
  {path: 'table', component: BestGamesComponent, data: { title: "table", categories: ['table'] }},
  {path: 'poker', component: BestGamesComponent, data: { title: "poker", categories: ['poker'] }},
  {path: 'other', component: BestGamesComponent, data: { title: "other", categories: ['ball', 'virtual', 'fun']  }},
  { path: '**', pathMatch: 'full', redirectTo: 'best-games' },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BestGamesRoutingModule { }
