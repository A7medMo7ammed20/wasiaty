import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioV3AreaComponent } from './portfolio-v3-area.component';

describe('PortfolioV3AreaComponent', () => {
  let component: PortfolioV3AreaComponent;
  let fixture: ComponentFixture<PortfolioV3AreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioV3AreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioV3AreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
