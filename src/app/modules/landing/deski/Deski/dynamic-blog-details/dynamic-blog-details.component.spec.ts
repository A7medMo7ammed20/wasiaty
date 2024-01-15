import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicBlogDetailsComponent } from './dynamic-blog-details.component';

describe('DynamicBlogDetailsComponent', () => {
  let component: DynamicBlogDetailsComponent;
  let fixture: ComponentFixture<DynamicBlogDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicBlogDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicBlogDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
