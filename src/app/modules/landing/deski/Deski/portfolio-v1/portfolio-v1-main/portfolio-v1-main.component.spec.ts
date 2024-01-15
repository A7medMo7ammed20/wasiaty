import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioV1MainComponent } from './portfolio-v1-main.component';

describe('PortfolioV1MainComponent', () => {
  let component: PortfolioV1MainComponent;
  let fixture: ComponentFixture<PortfolioV1MainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioV1MainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioV1MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
