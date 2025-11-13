import { NgTemplateOutlet } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise-six',
  imports: [NgTemplateOutlet],
  templateUrl: './exercise-six.html',
  styleUrl: './exercise-six.scss',
})
export class ExerciseSix implements OnInit {

  // Set ready variable to true after 3 seconds, use setTimeout to simulate delay
  ready: boolean = false;

  ngOnInit(): void {
    setTimeout(() => {
      // set ready to true here
      this.ready = true;
    }, 3000);
  }

}
