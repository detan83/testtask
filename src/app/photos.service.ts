import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  private readonly URL = "https://jsonplaceholder.typicode.com/photos?albumId=3";

  constructor(protected httpClient: HttpClient, ) {}

  public list(): Observable<any> {
    return this.httpClient.get<any>(this.URL);
  }
}
