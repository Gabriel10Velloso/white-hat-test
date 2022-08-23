import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/components/components.module';
import { BestGamesRoutingModule } from './best-games.routing';
import { BestGamesComponent } from './best-games.component';



@NgModule({
  declarations: [
    BestGamesComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    BestGamesRoutingModule
  ],
  exports:[
    BestGamesComponent
  ]
})
export class BestGamesModule { }
