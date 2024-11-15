import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AddStudentProfileRequest } from '../models/add-student-profile-request.model';
import { StudentProfileService } from '../services/student-profile.service';

@Component({
  selector: 'app-add-student-profile',
  templateUrl: './add-student-profile.component.html',
  styleUrls: ['./add-student-profile.component.css'],
})
export class AddStudentProfileComponent implements OnDestroy {
  model: AddStudentProfileRequest;
  private addStudentProfileSubscription?: Subscription;

  constructor(private studentProfileService: StudentProfileService) {
    this.model = {
      firstName: '',
      lastName: '',
      studentLogin: '',
      studentCardNumber: '',
      description: '',
      age: 0,
      dateOfBirth: new Date(),
    };
  }

  onFormSubmit() {
    this.addStudentProfileSubscription = this.studentProfileService
      .addStudentProfile(this.model)
      .subscribe({
        next: (response) => {
          console.log('This was successful!');
        },
      });
  }

  ngOnDestroy(): void {
    this.addStudentProfileSubscription?.unsubscribe();
  }
}
