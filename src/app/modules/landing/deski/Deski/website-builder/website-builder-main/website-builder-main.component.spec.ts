import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteBuilderMainComponent } from './website-builder-main.component';

describe('WebsiteBuilderMainComponent', () => {
  let component: WebsiteBuilderMainComponent;
  let fixture: ComponentFixture<WebsiteBuilderMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebsiteBuilderMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsiteBuilderMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
