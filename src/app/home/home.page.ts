import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonInput } from '@ionic/angular';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  websiteUrl: string;

  constructor(
    private router: Router,
    private backendService: BackendService,
  ) {}

  onEnterClick() {

    console.log(this.websiteUrl);
    
    if (!this.websiteUrl.startsWith("http://") && !this.websiteUrl.startsWith("https://")) {
      this.websiteUrl = "http://" + this.websiteUrl;
    }
    
    this.backendService.websiteUrl = this.websiteUrl;
    console.log(this.backendService.websiteUrl);
    this.router.navigate(['/', 'routines']);
  }

}
