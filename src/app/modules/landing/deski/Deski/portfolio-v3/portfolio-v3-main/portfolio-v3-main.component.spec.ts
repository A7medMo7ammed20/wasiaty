import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioV3MainComponent } from './portfolio-v3-main.component';

describe('PortfolioV3MainComponent', () => {
  let component: PortfolioV3MainComponent;
  let fixture: ComponentFixture<PortfolioV3MainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioV3MainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioV3MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
