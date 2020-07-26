import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'ToDo App';
  name: string = 'Krishnakumar V';
  constructor() {
    //Runs when the component is initialized
    console.log('This constructor runs first');
    this.changeName('Krishna');
  }

  changeName(name: string): void {
    this.name = name;
  }
}
