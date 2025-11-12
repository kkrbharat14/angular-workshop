import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-exercise-three',
  imports: [ReactiveFormsModule],
  templateUrl: './exercise-three.html',
  styleUrl: './exercise-three.scss',
})
export class ExerciseThree implements OnInit {
  searchControl = new FormControl('');
  searchResults: any[] = [];

  private http = inject(HttpClient);

  ngOnInit(): void {
    // Implement Solution Here
    // searchControl has valueChanges observable that emits search terms
    // Call Api https://jsonplaceholder.typicode.com/users?name_like=${term}
    // wait for input to stop for 1000ms before making api call
    // ignore new term if same as previous term
    // update searchResults with api results
  }


}
