import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { BackendService } from '../backend.service';
import { ActionsListService } from './actions-list/actions-list.service';
import { NewRoutineComponent } from './new-routine/new-routine.component';

@Component({
  selector: 'app-routines',
  templateUrl: './routines.page.html',
  styleUrls: ['./routines.page.scss'],
})
export class RoutinesPage implements OnInit {

  constructor(
    private modalController: ModalController,
    public backendService: BackendService,
    private toastController: ToastController,
  ) { }

  ngOnInit() {
  }

  async onNewRoutineClick() {

    const modal = await this.modalController.create({
      component: NewRoutineComponent,
      cssClass: "fullscreen"
    });
    modal.present();
  }

  onRunAll() {

    for (let r of this.backendService.routines) {
      this.onRunTest(r.name);
    }
  }

  onRunTest(name: string) {

    for (let r of this.backendService.routines) {
      if (r.name === name) {
        this.backendService.runTest(name).subscribe((res) => {
          console.log(res);
          r.results = res;
          this.presentToast(true, name);
        }, err => {
          r.results = { result: false };
          this.presentToast(false, name);
        });
        return;
      }
    }
  }

  async presentToast(success: boolean, target: string) {
    
    if (success) {
      const toast = await this.toastController.create({
        message: 'Test ' + target + ' was successful.',
        duration: 3000,
        color: "success"
      });
      toast.present();
    }
    else {
      const toast = await this.toastController.create({
        message: 'Test ' + target + ' was not successful.',
        duration: 3000,
        color: "danger"
      });
      toast.present();
    }
  }

}
