import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExerciseSeven } from './exercise-seven';

describe('ExerciseSeven', () => {
  let component: ExerciseSeven;
  let fixture: ComponentFixture<ExerciseSeven>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExerciseSeven],
    }).compileComponents();

    fixture = TestBed.createComponent(ExerciseSeven);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
