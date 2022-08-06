import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { ActionsListService } from './actions-list/actions-list.service';

@Component({
  selector: 'app-routines',
  templateUrl: './routines.page.html',
  styleUrls: ['./routines.page.scss'],
  providers: [ActionsListService],
})
export class RoutinesPage implements OnInit {

  constructor(
    private actionsListService: ActionsListService,
    private backendService: BackendService,) { }

  ngOnInit() {
  }

  onItemClick(e) {
    console.dir(e);
    this.actionsListService.addAction(e);
  }

  onSaveRoutineClick() {

    let interactions = [];

    for (let i of this.actionsListService.actionsList) {
      
      interactions.push({
        id: i.id,
        interaction_type: i.type.toLowerCase() === "submit" ? "click" : "fill",
        content: "TODO"
      });
    }

    console.log(interactions);

    let name = "" + Date.now();

    this.backendService.addTest("hackathon.bz.it/secure/login", name, "hackathon.bz.it/secure/user", interactions).subscribe();

    this.backendService.runTest(name).subscribe();
  }

}
