import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioHeroFourComponent } from './portfolio-hero-four.component';

describe('PortfolioHeroFourComponent', () => {
  let component: PortfolioHeroFourComponent;
  let fixture: ComponentFixture<PortfolioHeroFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioHeroFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioHeroFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
