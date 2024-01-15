import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioV2MainComponent } from './portfolio-v2-main.component';

describe('PortfolioV2MainComponent', () => {
  let component: PortfolioV2MainComponent;
  let fixture: ComponentFixture<PortfolioV2MainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioV2MainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioV2MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
