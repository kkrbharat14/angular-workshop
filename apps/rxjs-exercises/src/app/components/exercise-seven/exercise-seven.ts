import { Component, computed, effect, signal} from '@angular/core';

@Component({
  selector: 'app-exercise-seven',
  imports: [],
  templateUrl: './exercise-seven.html',
  styleUrl: './exercise-seven.scss',
})
export class ExerciseSeven {
  // Create Temperature signal here , set initial value to 20
  temperature = signal(20);
  // Create a Temperature message computed signal, 
  // that returns "It's cold!" if temperature < 10
  // that returns "It's hot!" if temperature > 25
  // otherwise "It's warm."
  temperatureMessage = computed(() => {
    const t = this.temperature();
    if (t < 10) return '❄️ It’s cold!';
    if (t < 25) return '🌤️ It’s warm!';
    return '🔥 It’s hot!';
  });

  constructor() {
     // backgroundColor set using effect change it to blue if cold, red if hot, orange if warm
    effect(() => {
        const t = this.temperature();
        console.log(`Temperature changed to: ${t}°C`);
        document.body.style.backgroundColor =
            t < 10 ? '#bde0fe' : t < 25 ? '#ffd6a5' : '#ffadad';
    });
  }
  
  increaseTemperature() {
    this.temperature.update(t=> t+1);
  }

  decreaseTemperature() {
    this.temperature.update(t => t - 1);
  }

}
