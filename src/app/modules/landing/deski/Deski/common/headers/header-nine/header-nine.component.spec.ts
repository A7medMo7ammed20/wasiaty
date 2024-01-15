import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderNineComponent } from './header-nine.component';

describe('HeaderNineComponent', () => {
  let component: HeaderNineComponent;
  let fixture: ComponentFixture<HeaderNineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderNineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
