import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderThirteenComponent } from './header-thirteen.component';

describe('HeaderThirteenComponent', () => {
  let component: HeaderThirteenComponent;
  let fixture: ComponentFixture<HeaderThirteenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderThirteenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderThirteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
