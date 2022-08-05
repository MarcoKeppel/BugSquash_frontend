import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActionsListService } from './actions-list/actions-list.service';

@Component({
  selector: 'app-routines',
  templateUrl: './routines.page.html',
  styleUrls: ['./routines.page.scss'],
  providers: [ActionsListService],
})
export class RoutinesPage implements OnInit {

  elements: HTMLElement[] = [ ];

  constructor(private actionsListService: ActionsListService) { }

  ngOnInit() {
  }

  onItemClick(e) {
    console.dir(e);
    if (this.elements.indexOf(e) === -1) {
      //this.elements = this.elements.concat(e);
      this.actionsListService.addAction(e);
    }
  }

}
