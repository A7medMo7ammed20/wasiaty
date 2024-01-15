import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioV4AreaComponent } from './portfolio-v4-area.component';

describe('PortfolioV4AreaComponent', () => {
  let component: PortfolioV4AreaComponent;
  let fixture: ComponentFixture<PortfolioV4AreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioV4AreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioV4AreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
