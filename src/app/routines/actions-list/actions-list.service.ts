import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class ActionsListService {

  actionAdded = new Subject<any>();
  actionRemoved = new Subject<any>();

  addAction(action) {
    this.actionAdded.next(action);
  }

  removeAction(action) {
    this.actionRemoved.next(action);
  }

  constructor() { }
}
