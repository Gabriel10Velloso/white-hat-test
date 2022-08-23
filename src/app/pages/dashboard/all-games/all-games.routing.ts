import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllGamesComponent } from './all-games.component';

// gdAreas="top-games best-games slots jackpots live black-jack roulette table poker other"

const routes: Routes = [
  {path: 'all-games', component: AllGamesComponent},
  {path: 'all-games1', component: AllGamesComponent},
  {path: 'all-games2', component: AllGamesComponent},
  {path: 'all-games3', component: AllGamesComponent},
  {path: 'all-games4', component: AllGamesComponent},
  {path: 'all-games5', component: AllGamesComponent},
  {path: 'all-games6', component: AllGamesComponent},
  {path: 'all-games7', component: AllGamesComponent},
  {path: 'all-games8', component: AllGamesComponent},
  {path: 'all-games9', component: AllGamesComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'all-games' },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AllGamesRoutingModule { }
