import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioHeroTwoComponent } from './portfolio-hero-two.component';

describe('PortfolioHeroTwoComponent', () => {
  let component: PortfolioHeroTwoComponent;
  let fixture: ComponentFixture<PortfolioHeroTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioHeroTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioHeroTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
