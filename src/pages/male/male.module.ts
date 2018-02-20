import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MalePage } from './male';

@NgModule({
  declarations: [
    MalePage,
  ],
  imports: [
    IonicPageModule.forChild(MalePage),
  ],
})
export class MalePageModule {}
