import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterThreeComponent } from './counter-three.component';

describe('CounterThreeComponent', () => {
  let component: CounterThreeComponent;
  let fixture: ComponentFixture<CounterThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
