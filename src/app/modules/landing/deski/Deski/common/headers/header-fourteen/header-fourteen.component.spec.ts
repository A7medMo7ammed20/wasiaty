import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderFourteenComponent } from './header-fourteen.component';

describe('HeaderFourteenComponent', () => {
  let component: HeaderFourteenComponent;
  let fixture: ComponentFixture<HeaderFourteenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderFourteenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderFourteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
