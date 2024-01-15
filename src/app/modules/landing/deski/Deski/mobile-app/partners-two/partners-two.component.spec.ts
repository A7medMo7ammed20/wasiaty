import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnersTwoComponent } from './partners-two.component';

describe('PartnersTwoComponent', () => {
  let component: PartnersTwoComponent;
  let fixture: ComponentFixture<PartnersTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnersTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnersTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
