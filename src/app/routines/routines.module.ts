import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoutinesPageRoutingModule } from './routines-routing.module';

import { RoutinesPage } from './routines.page';
import { DomSelectorComponent } from './dom-selector/dom-selector.component';
import { ActionsListComponent } from './actions-list/actions-list.component';
import { ActionComponent } from './actions-list/action/action.component';
import { NewRoutineComponent } from './new-routine/new-routine.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoutinesPageRoutingModule,
  ],
  declarations: [
    RoutinesPage,
    NewRoutineComponent,
    DomSelectorComponent,
    ActionsListComponent,
    ActionComponent,
  ]
})
export class RoutinesPageModule {}
