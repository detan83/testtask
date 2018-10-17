import { Component } from '@angular/core';
import {NgRedux} from '@angular-redux/store';
import {IAppState} from '../store';
import {fromEvent, Observable} from 'rxjs';
import {debounceTime, filter, first, share, take} from 'rxjs/operators';
import {bind} from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent {
  private subsctiption;
  constructor(private ngRedux: NgRedux<IAppState>) {
    this.subsctiption = this.bindToKeyboard().pipe(filter(() => !!this.ngRedux.getState().selectedPhotoId))
      .subscribe(e => {
        const keyCode = e.keyCode;
        if (keyCode === 37) {
          this.previous();
        }
        else if (keyCode === 39) {
          this.next();

        }

      });
  }

  private bindToKeyboard() {
    const obs$ = fromEvent(document, "keydown");
    return obs$;
  }

  protected getSelectedPhoto(): string {
    let {photos, selectedPhotoId} = this.ngRedux.getState();
    return selectedPhotoId > 0 ? photos[photos.findIndex(photo => photo.id === selectedPhotoId)].url : '';
  }

  next     = () => this.ngRedux.dispatch({type: 'SHOW_NEXT_PHOTO'});
  previous = () => this.ngRedux.dispatch({type: 'SHOW_PREVIOUS_PHOTO'});
  close    = () => {
    this.ngRedux.dispatch({type: 'CLOSE_PHOTO'});
    this.subsctiption.unsubscribe();

  }

}
