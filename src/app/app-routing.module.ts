import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentProfileComponent } from './features/StudentProfile/add-student-profile/add-student-profile.component';
import { StudentProfileListComponent } from './features/StudentProfile/student-profile-list/student-profile-list.component';

const routes: Routes = [
  {
    path: 'studentProfiles/studentProfileList',
    component: StudentProfileListComponent
  },
  {
    path: 'studentProfiles/studentProfileList/add',
    component: AddStudentProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
