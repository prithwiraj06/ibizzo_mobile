import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-started',
  templateUrl: 'get-started.page.html',
  styleUrls: ['get-started.page.scss'],
})
export class GetStartedPage {

  constructor(private _router: Router) { }
  
  navigateToSignupPage() {
    this._router.navigate(['/signu-up'])
  }
}
