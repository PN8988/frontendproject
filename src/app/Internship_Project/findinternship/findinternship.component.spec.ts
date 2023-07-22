import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindinternshipComponent } from './findinternship.component';

describe('FindinternshipComponent', () => {
  let component: FindinternshipComponent;
  let fixture: ComponentFixture<FindinternshipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FindinternshipComponent]
    });
    fixture = TestBed.createComponent(FindinternshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
