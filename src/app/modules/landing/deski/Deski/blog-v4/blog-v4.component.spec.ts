import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogV4Component } from './blog-v4.component';

describe('BlogV4Component', () => {
  let component: BlogV4Component;
  let fixture: ComponentFixture<BlogV4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogV4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogV4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
