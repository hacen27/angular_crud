// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-delete-student',
//   templateUrl: './delete-student.component.html',
//   styleUrls: ['./delete-student.component.css']
// })
// export class DeleteStudentComponent {

// }
import { Component, OnInit ,NgZone} from '@angular/core';
import { StudentService } from '../student.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-delete-student',
  template: `
  <br><br>
  <button (click)="onDelete()" class="btn btn-danger" center>Delete</button>
  `
  // templateUrl: './delete-student.component.html',
  // styleUrls: ['./delete-student.component.css']
})
export class DeleteStudentComponent implements OnInit {
  studentId!: number;

  constructor(
    private ngZone: NgZone,
    private router:Router,
    private studentService: StudentService,
     private route: ActivatedRoute) { }

  ngOnInit() {
    // this.studentId = +this.route.snapshot.paramMap.get('id');
    this.studentId = +this.route.snapshot.paramMap.get('id')!;
  }

  onDelete() {
    this.studentService.deleteStudent(this.studentId)
    .subscribe({
      next:()=>{
        alert('Student deleted successfully');
          this.ngZone.run(() =>this.router.navigateByUrl(''));
          
      },
      error:(error)=>{
        console.log(error);
        this.ngZone.run(() =>this.router.navigateByUrl(''));
      }
    })
  }
}

