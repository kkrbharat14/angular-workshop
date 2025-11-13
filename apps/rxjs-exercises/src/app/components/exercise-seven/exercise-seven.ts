import { Component } from '@angular/core';

@Component({
  selector: 'app-exercise-seven',
  imports: [],
  templateUrl: './exercise-seven.html',
  styleUrl: './exercise-seven.scss',
})
export class ExerciseSeven {

  // Create Temperature signal here , set initial value to 20

  // Create a Temperature message computed signal, 
  // that returns "It's cold!" if temperature < 10
  // that returns "It's hot!" if temperature > 25
  // otherwise "It's warm."

  // backgroundColor set using effect change it to blue if cold, red if hot, orange if warm


  increaseTemperature() {
    // Implement code to increase temperature
  }

  decreaseTemperature() {
    // Implement code to decrease temperature
  }

}
