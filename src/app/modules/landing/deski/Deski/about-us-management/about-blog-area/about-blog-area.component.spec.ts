import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutBlogAreaComponent } from './about-blog-area.component';

describe('AboutBlogAreaComponent', () => {
  let component: AboutBlogAreaComponent;
  let fixture: ComponentFixture<AboutBlogAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutBlogAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutBlogAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
