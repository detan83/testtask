import { Component } from '@angular/core';
import {NgRedux, select} from '@angular-redux/store';
import {IAppState} from '../store';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent {
  @select() selectedPhotoId;

  constructor(private ngRedux: NgRedux<IAppState>) {
  }

}
