import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterFourComponent } from './counter-four.component';

describe('CounterFourComponent', () => {
  let component: CounterFourComponent;
  let fixture: ComponentFixture<CounterFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
