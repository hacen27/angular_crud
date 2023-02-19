
import { Component, OnInit,NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-student',
  // template: `
  // <form [formGroup]="studentForm" (ngSubmit)="onSubmit()">
  //   <input type="text" formControlName="name" placeholder="Name">
  //   <input type="text" formControlName="email" placeholder="Email">
  //   <input type="text" formControlName="phone" placeholder="Phone">
  //   <button type="submit">Create</button>
  // </form>
  // `
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
  studentForm!: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private studentService: StudentService,
    private ngZone: NgZone,) { }

  ngOnInit() {
    this.studentForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.studentForm.valid) {
      this.studentService.createStudent(this.studentForm.value)
      .subscribe({
        next:()=>{
          alert('Student created successfully');
            this.ngZone.run(() =>this.router.navigateByUrl(''));
            this.studentForm.reset();
        },
        error:(error)=>{
          console.log(error);
          this.ngZone.run(() =>this.router.navigateByUrl(''));
        }
      })

    }
    else{ alert('forme invalid');}
  }


}


