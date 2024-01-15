import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioV2AreaComponent } from './portfolio-v2-area.component';

describe('PortfolioV2AreaComponent', () => {
  let component: PortfolioV2AreaComponent;
  let fixture: ComponentFixture<PortfolioV2AreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioV2AreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioV2AreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
