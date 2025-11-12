import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import {  BehaviorSubject, map, Observable, share, shareReplay } from 'rxjs';
import { Post, User } from './http.interface';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private httpClient = inject(HttpClient);

  // Approach 1 Use behavior subject to cache users
  private usersSubject = new BehaviorSubject<User[]>([]);

  // Approach 2 Use shareReplay in getUsersUsingShareReplay method
  private users$: Observable<User[]> = this.httpClient.get<User[]>('https://jsonplaceholder.typicode.com/users').pipe(
    shareReplay(1)
  );


  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>('https://jsonplaceholder.typicode.com/users').pipe(
      map(users => {
        this.usersSubject.next(users);
        return users;
      })
    );
  }

  getCachedUsers(): Observable<User[]> {
    return this.usersSubject.asObservable();
  }

  getPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

  getUsersUsingShareReplay(): Observable<User[]> {
    return this.users$;
  }
}
