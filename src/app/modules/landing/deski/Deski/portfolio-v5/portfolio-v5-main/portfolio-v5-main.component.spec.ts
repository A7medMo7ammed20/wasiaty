import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioV5MainComponent } from './portfolio-v5-main.component';

describe('PortfolioV5MainComponent', () => {
  let component: PortfolioV5MainComponent;
  let fixture: ComponentFixture<PortfolioV5MainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioV5MainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioV5MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
