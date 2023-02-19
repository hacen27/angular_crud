import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateStudentComponent } from './create-student/create-student.component';
import { DeleteStudentComponent } from './delete-student/delete-student.component';
import { StudentListComponent } from './student-list/student-list.component';
// import { CreateStudentComponent } from './create-student/create-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';

const routes: Routes = [

  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: StudentListComponent },
  { path: 'list/create', component: CreateStudentComponent },
  { path: 'list/update/:id', component: UpdateStudentComponent },
  { path: 'list/delete/:id', component: DeleteStudentComponent }
];
  // { path: ''delete'', component: FooterComponent },


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
