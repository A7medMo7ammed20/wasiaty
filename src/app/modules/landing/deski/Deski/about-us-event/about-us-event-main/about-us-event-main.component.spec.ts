import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsEventMainComponent } from './about-us-event-main.component';

describe('AboutUsEventMainComponent', () => {
  let component: AboutUsEventMainComponent;
  let fixture: ComponentFixture<AboutUsEventMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutUsEventMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUsEventMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
