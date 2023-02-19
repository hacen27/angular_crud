// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-student-list',
//   templateUrl: './student-list.component.html',
//   styleUrls: ['./student-list.component.css']
// })
// export class StudentListComponent {

// }
import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  // template: `
  // <table>
  //   <thead>
  //     <tr>
  //       <th>Name</th>
  //       <th>Email</th>
  //       <th>Phone</th>
  //       <th>Actions</th>
  //     </tr>
  //   </thead>
  //   <tbody>
  //     <tr *ngFor="let student of students">
  //       <td>{{student.name}}</td>
  //       <td>{{student.email}}</td>
  //       <td>{{student.phone}}</td>
  //       <td>
  //         <a [routerLink]="['/update', student.id]">Edit</a>
  //         <a [routerLink]="['/delete', student.id]">Delete</a>
  //       </td>
  //     </tr>
  //   </tbody>
  // </table>
  // `
  templateUrl: './student-list.component.html',
 styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students!: any[];

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.studentService.getAllStudents()
      .subscribe(students => {
        this.students = students;
      });
  }
}

