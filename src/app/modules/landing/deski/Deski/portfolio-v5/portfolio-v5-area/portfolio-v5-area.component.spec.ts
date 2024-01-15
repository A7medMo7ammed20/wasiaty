import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioV5AreaComponent } from './portfolio-v5-area.component';

describe('PortfolioV5AreaComponent', () => {
  let component: PortfolioV5AreaComponent;
  let fixture: ComponentFixture<PortfolioV5AreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioV5AreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioV5AreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
