import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaSharedModule } from '../ca-shared/ca-shared.module';
import { CaGlasswareDetailsComponent } from './ca-glassware-details/ca-glassware-details.component';
import { CaGlasswareRoutingModule } from './ca-glassware-routing/ca-glassware-routing.module';

@NgModule({
  declarations: [CaGlasswareDetailsComponent],
  imports: [
    CommonModule,
    CaSharedModule,
    CaGlasswareRoutingModule
  ],
  exports: [
    CaGlasswareDetailsComponent
  ]
})
export class CaGlasswareModule {
}
