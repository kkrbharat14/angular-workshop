import { Component, inject, OnInit } from '@angular/core';
import { User } from '../../services/http/http.interface';
import { HttpService } from '../../services/http/http.service';

@Component({
  selector: 'app-exercise-two',
  imports: [],
  templateUrl: './exercise-two.html',
  styleUrl: './exercise-two.scss',
})
export class ExerciseTwo implements OnInit {
  users!: User[];
  
  private httpService: HttpService = inject(HttpService);

  ngOnInit(): void {
    // First Time Users are loaded here
  }

  clearUsers() {
    this.users = [];
  }

  loadUsers() {
    // Implement code for caching here
  }

}
