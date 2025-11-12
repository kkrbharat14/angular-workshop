import { Component, inject } from '@angular/core';
import { MockService } from '../../services/mock/mock.service';
import { delay, interval, switchMap, take, takeWhile, timer } from 'rxjs';

@Component({
  selector: 'app-exercise-five',
  imports: [],
  templateUrl: './exercise-five.html',
  styleUrl: './exercise-five.scss',
})
export class ExerciseFive {

  maxPolling = 10;

  completed: boolean = false;

  private mockService = inject(MockService);

  doCreditCheck() {
    // Implement Code here
    // Call mockService.doCreditCheck()
    // Log each attempt to console is already done in service
    // Continue calling until the result's 'completed' property is true

    interval(1000).pipe(
      take(this.maxPolling),
      switchMap(() => this.mockService.doCreditCheck()),
      takeWhile(result => !result.completed, true)
    ).subscribe({
      next: (result) => {
        this.completed = result.completed;
      }
    });
    // Bonus: Stop polling after maxPolling attempts
  }
  }
