import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActionsListService } from './actions-list.service';

@Component({
  selector: 'app-actions-list',
  templateUrl: './actions-list.component.html',
  styleUrls: ['./actions-list.component.scss'],
})
export class ActionsListComponent implements OnInit {

  actionsList = [];

  subscription: Subscription;

  constructor(
    private actionsListService: ActionsListService,
    private cdr: ChangeDetectorRef) {
    
    this.subscription = actionsListService.actionAdded.subscribe(
      action => {
        if (this.actionsListService.actionsList.indexOf(action) === -1) {
          this.actionsListService.actionsList.push(action);
          this.cdr.detectChanges();
        }
    });
  }

  ngOnInit() {}

}
