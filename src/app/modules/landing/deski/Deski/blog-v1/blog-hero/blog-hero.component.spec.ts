import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogHeroComponent } from './blog-hero.component';

describe('BlogHeroComponent', () => {
  let component: BlogHeroComponent;
  let fixture: ComponentFixture<BlogHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogHeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
