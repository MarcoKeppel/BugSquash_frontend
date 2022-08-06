import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { BackendService } from 'src/app/backend.service';

@Component({
  selector: 'app-dom-selector',
  templateUrl: './dom-selector.component.html',
  styleUrls: ['./dom-selector.component.scss'],
})
export class DomSelectorComponent implements OnInit, AfterViewInit {

  @Output() itemClick = new EventEmitter<any>();
  @Output() resultChanged = new EventEmitter<any>();

  @ViewChild('selection_iframe') selection_iframe: ElementRef<HTMLIFrameElement>;

  safeUrl;

  lastUrl: string;

  constructor(
    public backendService: BackendService,
    private domSanitizer: DomSanitizer,
  ) { }

  ngOnInit() {
    this.safeUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.backendService.websiteUrl);
  }

  ngAfterViewInit() {

    

    this.selection_iframe.nativeElement.onload = () => {

      console.log("iframe loaded");

      let f = this.selection_iframe.nativeElement;

      this.lastUrl = f.contentWindow.location.href;
      console.log("last url: " + this.lastUrl);
      this.resultChanged.emit(this.lastUrl);

      console.log(f.contentWindow.document.querySelectorAll("input, button, a"));

      for (let i of Array.from(f.contentWindow.document.querySelectorAll("input, button, a"))) {
        (i as HTMLElement).onclick = (e) => {
          let el = e.target as HTMLElement;
          console.log(el);
          console.dir(el.id);
          // let a = el;
          // let els = [];
          // while (a) {
          //     els.unshift(a);
          //     a = a.parentElement;
          // }
          // console.log(els)
          el.style.border = "2px solid red";

          this.itemClick.emit(el);
          return true;
        }
      }
    }
  }

  autoDetectInputs() {

    let f = this.selection_iframe.nativeElement;

    for (let i of Array.from(f.contentWindow.document.querySelector("form").querySelectorAll("input:not([type='hidden'])"))) {

      let el = i as HTMLElement;

      console.log(el);

      el.style.border = "2px solid red";
      this.itemClick.emit(el);
    }
  }

}
