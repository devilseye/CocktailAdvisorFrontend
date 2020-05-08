import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CaBarwareDetailsComponent } from '../ca-barware-details/ca-barware-details.component';

const routes: Routes = [
  {
    path: '',
    component: CaBarwareDetailsComponent
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CaBarwareRoutingModule {
}
