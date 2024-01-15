import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioHeroThreeComponent } from './portfolio-hero-three.component';

describe('PortfolioHeroThreeComponent', () => {
  let component: PortfolioHeroThreeComponent;
  let fixture: ComponentFixture<PortfolioHeroThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioHeroThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioHeroThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
