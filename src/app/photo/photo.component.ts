import { Component } from '@angular/core';
import {NgRedux} from '@angular-redux/store';
import {IAppState} from '../store';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent {
  constructor(private ngRedux: NgRedux<IAppState>) {
  }

  protected getSelectedPhoto(): string {
    let {photos, selectedPhotoId} = this.ngRedux.getState();
    return selectedPhotoId > 0 ? photos[photos.findIndex(photo => photo.id === selectedPhotoId)].url : '';
  }

  next     = () => this.ngRedux.dispatch({type: 'SHOW_NEXT_PHOTO'});
  previous = () => this.ngRedux.dispatch({type: 'SHOW_PREVIOUS_PHOTO'});
  close    = () => this.ngRedux.dispatch({type: 'CLOSE_PHOTO'});

}
