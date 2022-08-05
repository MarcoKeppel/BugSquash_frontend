import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routines',
  templateUrl: './routines.page.html',
  styleUrls: ['./routines.page.scss'],
})
export class RoutinesPage implements OnInit {

  elements: HTMLElement[] = [ ];

  constructor() { }

  ngOnInit() {
  }

  onItemClick(e) {
    console.dir(e);
    if (this.elements.indexOf(e) === -1) {
      this.elements.push(e);
    }
  }

}
