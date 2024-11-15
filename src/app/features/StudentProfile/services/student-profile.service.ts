import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddStudentProfileRequest } from '../models/add-student-profile-request.model';
import { StudentProfile } from '../models/student-profile.model';

@Injectable({
  providedIn: 'root'
})
export class StudentProfileService {

  constructor(private http: HttpClient) { }

  addStudentProfile(model: AddStudentProfileRequest): Observable<void> {
    return this.http.post<void>(`https://localhost:44317/api/StudentProfile/profile`, model)
  }

  getAllStudentProfiles(): Observable<StudentProfile[]> {
    return this.http.get<StudentProfile[]>(`https://localhost:44317/api/StudentProfile/students`)
  }
}
