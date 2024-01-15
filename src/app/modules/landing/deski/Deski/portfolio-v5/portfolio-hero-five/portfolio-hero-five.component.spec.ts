import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioHeroFiveComponent } from './portfolio-hero-five.component';

describe('PortfolioHeroFiveComponent', () => {
  let component: PortfolioHeroFiveComponent;
  let fixture: ComponentFixture<PortfolioHeroFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioHeroFiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioHeroFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
