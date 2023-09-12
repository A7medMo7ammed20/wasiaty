import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntangableAssetsComponent } from './intangable-assets.component';

describe('IntangableAssetsComponent', () => {
  let component: IntangableAssetsComponent;
  let fixture: ComponentFixture<IntangableAssetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IntangableAssetsComponent]
    });
    fixture = TestBed.createComponent(IntangableAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
