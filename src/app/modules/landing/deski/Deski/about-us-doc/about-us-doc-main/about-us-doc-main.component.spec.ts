import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsDocMainComponent } from './about-us-doc-main.component';

describe('AboutUsDocMainComponent', () => {
  let component: AboutUsDocMainComponent;
  let fixture: ComponentFixture<AboutUsDocMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutUsDocMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUsDocMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
