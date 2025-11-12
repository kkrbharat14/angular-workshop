import { Component, inject } from '@angular/core';
import { MockService } from '../../services/mock/mock.service';
import { LoggedInUser } from '../../services/mock/mock.interface';

@Component({
  selector: 'app-exercise-four',
  imports: [],
  templateUrl: './exercise-four.html',
  styleUrl: './exercise-four.scss',
})
export class ExerciseFour {

  private mockService: MockService = inject(MockService);
  loggedInUser: LoggedInUser | undefined;
  hasError: boolean = false;

  loadLoggedInUser() {
    this.hasError = false;
    // Implement code here
    // Call mockService.getLoggedInUser()
    // Handle error and retry until success
    // Log each attempt to console is already done in service
    // On success, set this.loggedInUser
    // On failure after retries, set this.hasError = true
  }

}
