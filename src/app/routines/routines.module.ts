import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoutinesPageRoutingModule } from './routines-routing.module';

import { RoutinesPage } from './routines.page';
import { DomSelectorComponent } from './dom-selector/dom-selector.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoutinesPageRoutingModule,
  ],
  declarations: [
    RoutinesPage,
    DomSelectorComponent,
  ]
})
export class RoutinesPageModule {}
