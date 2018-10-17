import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {NgRedux} from '@angular-redux/store';
import {IAppState} from './store';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  private readonly URL = "https://jsonplaceholder.typicode.com/photos?albumId=3";

  constructor(protected httpClient: HttpClient, private  ngRedux: NgRedux<IAppState>) {}

  public list(): Observable<any> {
    return this.httpClient.get<any>(this.URL);
  }
}
