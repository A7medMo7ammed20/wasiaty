import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteTakingMainComponent } from './note-taking-main.component';

describe('NoteTakingMainComponent', () => {
  let component: NoteTakingMainComponent;
  let fixture: ComponentFixture<NoteTakingMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteTakingMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteTakingMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
