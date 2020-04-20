import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Q1Counter';
  countValue : number=0;
  IncreaseCounter()
  {
    this.countValue++;
  }
  ResetCounter()
  {
    this.countValue = 0;
  }

}
