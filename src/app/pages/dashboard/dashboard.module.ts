import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/components/components.module';
import { DashboardRoutingModule } from './dashboard.routing';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
            CommonModule,
            ComponentsModule,
            DashboardRoutingModule
          ],

  exports: [DashboardComponent],
})
export class DashboardModule {}
