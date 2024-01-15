import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogV3Component } from './blog-v3.component';

describe('BlogV3Component', () => {
  let component: BlogV3Component;
  let fixture: ComponentFixture<BlogV3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogV3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogV3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
