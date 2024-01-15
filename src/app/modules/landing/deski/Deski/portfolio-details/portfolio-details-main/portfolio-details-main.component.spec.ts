import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioDetailsMainComponent } from './portfolio-details-main.component';

describe('PortfolioDetailsMainComponent', () => {
  let component: PortfolioDetailsMainComponent;
  let fixture: ComponentFixture<PortfolioDetailsMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioDetailsMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioDetailsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
