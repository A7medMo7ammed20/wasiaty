import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioV1AreaComponent } from './portfolio-v1-area.component';

describe('PortfolioV1AreaComponent', () => {
  let component: PortfolioV1AreaComponent;
  let fixture: ComponentFixture<PortfolioV1AreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioV1AreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioV1AreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
