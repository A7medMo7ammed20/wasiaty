import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioV4MainComponent } from './portfolio-v4-main.component';

describe('PortfolioV4MainComponent', () => {
  let component: PortfolioV4MainComponent;
  let fixture: ComponentFixture<PortfolioV4MainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioV4MainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioV4MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
