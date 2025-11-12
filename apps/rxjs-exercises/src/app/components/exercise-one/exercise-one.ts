import { Component, inject, OnInit } from '@angular/core';
import { Post, User } from '../../services/http/http.interface';
import { HttpService } from '../../services/http/http.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-exercise-one',
  imports: [],
  templateUrl: './exercise-one.html',
  styleUrl: './exercise-one.scss',
  standalone: true,
})
export class ExerciseOne implements OnInit {

  users!: User[];
  posts!: Post[];

  private httpService: HttpService = inject(HttpService);

  ngOnInit(): void {
    // Implement code here
    forkJoin({
      users: this.httpService.getUsers(),
      posts: this.httpService.getPosts()
    }).subscribe({
      next: ({ users, posts }) => {
        this.users = users;
        this.posts = posts;
      }
    })
  }

}
