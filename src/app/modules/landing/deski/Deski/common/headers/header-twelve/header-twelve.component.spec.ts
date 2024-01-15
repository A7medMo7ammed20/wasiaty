import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTwelveComponent } from './header-twelve.component';

describe('HeaderTwelveComponent', () => {
  let component: HeaderTwelveComponent;
  let fixture: ComponentFixture<HeaderTwelveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderTwelveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderTwelveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
