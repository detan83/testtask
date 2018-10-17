import { Component, OnInit } from '@angular/core';
import {PhotosService} from '../photos.service';
import {IAppState} from '../store';
import {NgRedux, select} from '@angular-redux/store';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  @select() photos;

  constructor(private ngRedux: NgRedux<IAppState>, private photosService: PhotosService) {
  }

  ngOnInit() {

    this.ngRedux.dispatch({type: 'FETCH_GALLERY_REQUEST'});

    this.photosService.list().subscribe(data => {
      this.ngRedux.dispatch({type: 'FETCH_GALLERY_SUCCESS', photos: data});
    });
  }

}
