import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: 'white-hat',
    component: DashboardComponent,
    children: [
      {
        path: '1',
        loadChildren: () =>
          import('./best-games/best-games.module').then(
            (m) => m.BestGamesModule
          ),
      },
      {
        path: '2',
        loadChildren: () =>
          import('./all-games/all-games.module').then(
            (m) => m.AllGamesModule
          ),
      },
    ],
  },

  { path: '**', pathMatch: 'full', redirectTo: '/white-hat/1/best-games' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
