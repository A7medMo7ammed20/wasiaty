import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseEndowmentComponent } from './choose-endowment.component';

describe('createTypeComponent', () => {
  let component: ChooseEndowmentComponent;
  let fixture: ComponentFixture<ChooseEndowmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ChooseEndowmentComponent]
    });
    fixture = TestBed.createComponent(ChooseEndowmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
