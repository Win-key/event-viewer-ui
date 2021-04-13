import { Component } from '@angular/core';
import { AlertService } from './service/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'event-viewer-ui';

  constructor(private route: Router, private alert : AlertService){}

  logout() {
    localStorage.removeItem('userData');
    this.alert.openSnackBar("Successfully logged out");
    this.route.navigate(['login']);
  }

  isLogin() : boolean {
    return localStorage.getItem('userData') != undefined;
  }
}
