import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaBarwareDetailsComponent } from './ca-barware-details/ca-barware-details.component';
import { CaSharedModule } from '../ca-shared/ca-shared.module';
import { CaBarwareRoutingModule } from './ca-barware-routing/ca-barware-routing.module';

@NgModule({
  declarations: [CaBarwareDetailsComponent],
  imports: [
    CommonModule,
    CaSharedModule,
    CaBarwareRoutingModule
  ],
  exports: [
    CaBarwareDetailsComponent
  ]
})
export class CaBarwareModule {
}
