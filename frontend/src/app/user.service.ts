import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject,Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  httpClient = inject(HttpClient);

  data(url:string):Observable<any> {
    return this.httpClient.get(url)
  }

  // fantasy(url:string):Observable<any> {
  //   return this.httpClient.get(url)
  // }
  

 
  

  constructor() { }
}
