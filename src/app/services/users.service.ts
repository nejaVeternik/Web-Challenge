import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsersList(): Observable<any> {
    return this.http.get('https://dummyjson.com/users');
  }

  getUser(user: string) {
    const url = `https://dummyjson.com/users/${user}`;
    return this.http.get(url);
  }
}
