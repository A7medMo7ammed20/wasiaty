import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqHeroAreaComponent } from './faq-hero-area.component';

describe('FaqHeroAreaComponent', () => {
  let component: FaqHeroAreaComponent;
  let fixture: ComponentFixture<FaqHeroAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaqHeroAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqHeroAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
