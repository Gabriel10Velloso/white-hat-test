import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { LoaderComponent } from './loader/loader.component';
import { MaterialModule } from './material.module';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
      HeaderComponent,
      NotFoundComponent,
      LoaderComponent
    ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    SharedModule
  ],
  exports: [
    HeaderComponent,
    NotFoundComponent,
    LoaderComponent,
    MaterialModule,
    SharedModule
  ],
  providers: [],
})
export class ComponentsModule {}
