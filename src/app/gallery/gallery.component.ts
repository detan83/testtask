import { Component, OnInit } from '@angular/core';
import {PhotosService} from '../photos.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor(private photosService: PhotosService) { }

  ngOnInit() {
    this.photosService.list().subscribe(data => console.log(data));
  }

}
