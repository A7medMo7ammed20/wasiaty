import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioDetailsAreaComponent } from './portfolio-details-area.component';

describe('PortfolioDetailsAreaComponent', () => {
  let component: PortfolioDetailsAreaComponent;
  let fixture: ComponentFixture<PortfolioDetailsAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioDetailsAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioDetailsAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
