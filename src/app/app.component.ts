import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PropertyApp';
  Parent: string = "Inparent";
  popsparent(){
    console.log("hello");
  }
}
