import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BS4_BREAKPOINTS, CustomBreakPointsProvider,} from './service/custom-breakpoints.service';

@NgModule({
  declarations: [],
  imports: [
    FlexLayoutModule.withConfig({ disableDefaultBps: true }, BS4_BREAKPOINTS),
  ],
  exports: [
    FlexLayoutModule
  ],
  providers: [
    CustomBreakPointsProvider
  ],
})
export class SharedModule {}
