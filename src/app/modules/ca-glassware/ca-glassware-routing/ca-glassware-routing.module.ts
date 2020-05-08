import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CaGlasswareDetailsComponent } from '../ca-glassware-details/ca-glassware-details.component';

const routes: Routes = [
  {
    path: '',
    component: CaGlasswareDetailsComponent
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CaGlasswareRoutingModule {
}
