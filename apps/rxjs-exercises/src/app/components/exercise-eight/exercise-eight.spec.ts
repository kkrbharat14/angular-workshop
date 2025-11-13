import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExerciseEight } from './exercise-eight';

describe('ExerciseEight', () => {
  let component: ExerciseEight;
  let fixture: ComponentFixture<ExerciseEight>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExerciseEight],
    }).compileComponents();

    fixture = TestBed.createComponent(ExerciseEight);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
