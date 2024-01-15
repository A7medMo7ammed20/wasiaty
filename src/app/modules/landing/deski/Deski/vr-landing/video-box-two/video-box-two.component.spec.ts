import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoBoxTwoComponent } from './video-box-two.component';

describe('VideoBoxTwoComponent', () => {
  let component: VideoBoxTwoComponent;
  let fixture: ComponentFixture<VideoBoxTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoBoxTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoBoxTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
