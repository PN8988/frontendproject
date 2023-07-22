import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppliedInternshipComponent } from './applied-internship.component';

describe('AppliedInternshipComponent', () => {
  let component: AppliedInternshipComponent;
  let fixture: ComponentFixture<AppliedInternshipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppliedInternshipComponent]
    });
    fixture = TestBed.createComponent(AppliedInternshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
