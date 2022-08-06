import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dom-selector',
  templateUrl: './dom-selector.component.html',
  styleUrls: ['./dom-selector.component.scss'],
})
export class DomSelectorComponent implements OnInit, AfterViewInit {

  @Output() itemClick = new EventEmitter<any>();

  @ViewChild('selection_iframe') selection_iframe: ElementRef<HTMLIFrameElement>;

  constructor() { }

  ngOnInit() {}

  ngAfterViewInit() {

    this.selection_iframe.nativeElement.onload = () => {

      console.log("iframe loaded");

      let f = this.selection_iframe.nativeElement;

      let inputs = f.contentWindow.document.getElementsByTagName("input");console.log(inputs);
      for (let i of Array.from(inputs)) {
        i.onclick = (e) => {
          let el = e.target as HTMLElement;
          console.log(el);
          console.dir(el.id);
          el.style.border = "2px solid red";

          this.itemClick.emit(el);
          // return false;
        }
      }
    }
  }

}
