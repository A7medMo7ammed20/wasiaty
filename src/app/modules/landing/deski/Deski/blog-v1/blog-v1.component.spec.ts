import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogV1Component } from './blog-v1.component';

describe('BlogV1Component', () => {
  let component: BlogV1Component;
  let fixture: ComponentFixture<BlogV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogV1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
