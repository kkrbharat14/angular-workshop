import { Route } from '@angular/router';
import { ExerciseOne } from './components/exercise-one/exercise-one';
import { ExerciseTwo } from './components/exercise-two/exercise-two';
import { ExerciseThree } from './components/exercise-three/exercise-three';
import { ExerciseFour } from './components/exercise-four/exercise-four';
import { ExerciseFive } from './components/exercise-five/exercise-five';
import { ExerciseSix } from './components/exercise-six/exercise-six';
import { ExerciseSeven } from './components/exercise-seven/exercise-seven';
import { ExerciseEight } from './components/exercise-eight/exercise-eight';

export const appRoutes: Route[] = [
    {
        path: 'exercise-one',
        component: ExerciseOne, 
    },
    {
        path: 'exercise-two',
        component: ExerciseTwo, 
    },
    {
        path: 'exercise-three',
        component: ExerciseThree, 
    },
    {
        path: 'exercise-four',
        component: ExerciseFour, 
    },
    {
        path: 'exercise-five',
        component: ExerciseFive, 
    },
    {
        path: 'exercise-six',
        component: ExerciseSix, 
    },
    {
        path: 'exercise-seven',
        component: ExerciseSeven, 
    },
    {
        path: 'exercise-eight',
        component: ExerciseEight, 
    }
];
