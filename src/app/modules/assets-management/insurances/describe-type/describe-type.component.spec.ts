import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescribeTypeComponent } from './describe-type.component';

describe('DescribeTypeComponent', () => {
  let component: DescribeTypeComponent;
  let fixture: ComponentFixture<DescribeTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DescribeTypeComponent]
    });
    fixture = TestBed.createComponent(DescribeTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
