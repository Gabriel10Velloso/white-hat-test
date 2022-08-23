import { NgModule } from '@angular/core';
import { AllGamesComponent } from './all-games.component';
import { AllGamesRoutingModule } from './all-games.routing';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/components/components.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AllGamesComponent],
  imports: [
            CommonModule,
            RouterModule,
            AllGamesRoutingModule,
            ComponentsModule,
          ],
  exports: [AllGamesComponent],
})
export class AllGamesModule {}
