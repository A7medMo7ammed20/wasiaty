import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIntangibleComponent } from './add-intangible.component';

describe('AddIntangibleComponent', () => {
  let component: AddIntangibleComponent;
  let fixture: ComponentFixture<AddIntangibleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AddIntangibleComponent]
    });
    fixture = TestBed.createComponent(AddIntangibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
