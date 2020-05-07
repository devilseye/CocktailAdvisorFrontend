import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaPostPanelComponent } from './ca-post-panel/ca-post-panel.component';

@NgModule({
  declarations: [CaPostPanelComponent],
  imports: [
    CommonModule
  ],
  exports: [CaPostPanelComponent]
})
export class CaSharedModule { }
