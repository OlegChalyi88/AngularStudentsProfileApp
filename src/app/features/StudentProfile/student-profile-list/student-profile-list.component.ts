import { Component, OnInit } from '@angular/core';
import { StudentProfile } from '../models/student-profile.model';
import { StudentProfileService } from '../services/student-profile.service';

@Component({
  selector: 'app-student-profile-list',
  templateUrl: './student-profile-list.component.html',
  styleUrls: ['./student-profile-list.component.css']
})
export class StudentProfileListComponent implements OnInit {

  studentProfiles?: StudentProfile[];

  constructor(private studentProfileService: StudentProfileService) { }

  ngOnInit(): void {
    this.studentProfileService.getAllStudentProfiles()
    .subscribe({
      next: (response) => {
        this.studentProfiles = response;
      }
    });
  }

}
