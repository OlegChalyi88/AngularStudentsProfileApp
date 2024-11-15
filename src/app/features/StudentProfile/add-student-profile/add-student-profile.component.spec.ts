import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStudentProfileComponent } from './add-student-profile.component';

describe('AddStudentProfileComponent', () => {
  let component: AddStudentProfileComponent;
  let fixture: ComponentFixture<AddStudentProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddStudentProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddStudentProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
