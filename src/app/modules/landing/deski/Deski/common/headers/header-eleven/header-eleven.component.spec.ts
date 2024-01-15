import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderElevenComponent } from './header-eleven.component';

describe('HeaderElevenComponent', () => {
  let component: HeaderElevenComponent;
  let fixture: ComponentFixture<HeaderElevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderElevenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderElevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
