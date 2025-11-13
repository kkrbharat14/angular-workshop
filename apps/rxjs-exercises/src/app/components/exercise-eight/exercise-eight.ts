import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { interval, map } from 'rxjs';

@Component({
  selector: 'app-exercise-eight',
  imports: [AsyncPipe],
  templateUrl: './exercise-eight.html',
  styleUrl: './exercise-eight.scss',
})
export class ExerciseEight {

  
  time$ = interval(1000).pipe(
    map(() => new Date().toLocaleTimeString())
  );

  // Convert  Observable time$ to use toSignal() for reactivity and use it in template for 
  // displaying current time
  time = toSignal(this.time$);

}
