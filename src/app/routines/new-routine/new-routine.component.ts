import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BackendService } from 'src/app/backend.service';
import { ActionsListService } from '../actions-list/actions-list.service';

@Component({
  selector: 'app-new-routine',
  templateUrl: './new-routine.component.html',
  styleUrls: ['./new-routine.component.scss'],
  providers: [ActionsListService],
})
export class NewRoutineComponent implements OnInit {

  testName: string;

  expectedResult: string;

  constructor(
    private actionsListService: ActionsListService,
    private backendService: BackendService,
    private modalController: ModalController,) { }

  ngOnInit() {
  }

  onItemClick(e) {
    console.dir(e);
    this.actionsListService.addAction(e);
  }

  onResultChanged(e) {

    console.log(e);
    this.expectedResult = e;
  }

  onSaveRoutineClick() {

    let interactions = [];

    for (let i of this.actionsListService.actionsList) {
      
      interactions.push({
        id: i.id,
        interaction_type: i.hasOwnProperty("type") ? (i.type.toLowerCase() === "submit" ? "click" : "fill") : "click",
        content: "TODO"
      });
    }

    console.log(interactions);

    this.backendService.addTest(this.backendService.websiteUrl, this.testName || "" + Date.now(), this.expectedResult, interactions).subscribe();

    //this.backendService.runTest(name).subscribe();

    this.modalController.dismiss();
  }

}
