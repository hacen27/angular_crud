
import { AfterViewInit, Component, OnInit,NgZone } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../student.service';
import { ActivatedRoute ,Router} from '@angular/router';

@Component({
  selector: 'app-update-student',
  // template: `
  // <form [formControl]="studentForm" (ngSubmit)="onSubmit()">
  //   <input type="text" formControlName="name" placeholder="Name">
  //   <input type="text" formControlName="email" placeholder="Email">
  //   <input type="text" formControlName="phone" placeholder="Phone">
  //   <button type="submit">Update</button>
  // </form>
  // `
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit,AfterViewInit {
  studentForm!: FormGroup;
  // studentForm= new FormGroup('');
  studentId!: number;

  constructor(
    private router:Router,
    private ngZone: NgZone,
    public formBuilder: FormBuilder,
    public studentService: StudentService,
     public route: ActivatedRoute) {

     }
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
ngOnInit(){
    this.studentId = +this.route.snapshot.paramMap.get('id')!;
    this.studentService.getStudent(this.studentId)
                .subscribe(student => {
                  console.log(student)
                 this.studentForm = this.formBuilder.group({

    name: [student.name, Validators.required],
    email: [student.email, [Validators.required, Validators.email]],
    phone: [student.phone, Validators.required]
  });
});

  }

  onSubmit() {
    if (this.studentForm.valid) {
      this.studentService.updateStudent(this.studentId, this.studentForm.value).subscribe({
        next:()=>{
          alert('Student updated successfully');
            this.ngZone.run(() =>this.router.navigateByUrl(''));
            this.studentForm.reset();
        },
        error:(error)=>{
          console.log(error);
        }
      })

    }
    else{
      alert('form invalid')
      this.ngZone.run(() =>this.router.navigateByUrl(''));

    }
  }
}




