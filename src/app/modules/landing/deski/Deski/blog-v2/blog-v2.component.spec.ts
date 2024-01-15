import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogV2Component } from './blog-v2.component';

describe('BlogV2Component', () => {
  let component: BlogV2Component;
  let fixture: ComponentFixture<BlogV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogV2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
