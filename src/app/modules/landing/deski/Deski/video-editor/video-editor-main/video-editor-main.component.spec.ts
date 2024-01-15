import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoEditorMainComponent } from './video-editor-main.component';

describe('VideoEditorMainComponent', () => {
  let component: VideoEditorMainComponent;
  let fixture: ComponentFixture<VideoEditorMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoEditorMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoEditorMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
