import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>{{title}}</h1>
              <p> On Click <input (keyup)="changeTitle($event)"></p>
              <button (click)="updateTitle()">Change the title </button>
              <p>You've Clicked the button {{clickCount}}
              `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mars Colony Works!';
  clickCount = 0;
  newTitle = this.title;
  changeTitle(e) {
    if (!e) {
      this.newTitle = 'you clicked'
      this.clickCount++;
    } else {
      this.newTitle = e.target.value;
    }
  }

  updateTitle() {
    this.title = this.newTitle; 
  }
}