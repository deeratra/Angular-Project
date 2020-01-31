import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ipl';

  animal = [
    {
      name:'bee',
      work: 'cee'
    },
    {
      name:'tiger',
      work:'eat'
    }
  ]

  awesomeMethod(event)
  {
    console.log(event,'H from parent')
  }
}
