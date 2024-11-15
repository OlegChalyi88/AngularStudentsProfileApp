import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentProfileListComponent } from './student-profile-list.component';

describe('StudentProfileListComponent', () => {
  let component: StudentProfileListComponent;
  let fixture: ComponentFixture<StudentProfileListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentProfileListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentProfileListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
