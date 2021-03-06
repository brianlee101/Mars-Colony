import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  Mars Colony 
  <a routerLink="register">Register page</a>
  <a routerLink="encounters">Encounter page</a>
  <a routerLink="report">Report page</a>
  <a routerLink="notfound">Not Found page</a>
  <router-outlet></router-outlet>
              `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
}