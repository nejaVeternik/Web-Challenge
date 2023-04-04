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

  limitAndSkipUsers(limit: string, skip: string, select: string) {
    const url = `https://dummyjson.com/users?limit=${limit}&skip=${skip}&select=${select}`;
    return this.http.get(url);
  }

  searchUsers(searchQuery: string) {
    const url = `https://dummyjson.com/users/search?q=${searchQuery}`;
    return this.http.get(url);
  }

  filterUsers(gender: any) {
    const url = `https://dummyjson.com/users/filter?key=gender&value=${gender.gender}`;
    return this.http.get(url);
  }

  addUser(postData: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post('https://dummyjson.com/users/add', postData, httpOptions)
  }
}
