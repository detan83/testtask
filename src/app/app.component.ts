import { Component } from '@angular/core';
import {select} from '@angular-redux/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @select() selectedPhotoId;

  title = 'TestTask';
}
