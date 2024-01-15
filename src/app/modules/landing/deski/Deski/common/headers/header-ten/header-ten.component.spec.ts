import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTenComponent } from './header-ten.component';

describe('HeaderTenComponent', () => {
  let component: HeaderTenComponent;
  let fixture: ComponentFixture<HeaderTenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderTenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderTenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
