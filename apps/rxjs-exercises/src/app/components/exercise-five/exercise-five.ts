import { Component, inject } from '@angular/core';
import { MockService } from '../../services/mock/mock.service';

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

    
    
    // Bonus: Stop polling after maxPolling attempts
  }
  }
