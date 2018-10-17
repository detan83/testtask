import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GalleryComponent } from './gallery/gallery.component';
import { PhotoComponent } from './photo/photo.component';
import { PhotosService } from './photos.service';
import {NgRedux, NgReduxModule} from '@angular-redux/store';
import {IAppState, rootReducer} from './store';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    PhotoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgReduxModule
  ],
  providers: [PhotosService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, {photos: []});
  }
}
