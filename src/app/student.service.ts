// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class StudentService {

//   constructor() { }
// }
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private getUrl = 'http://localhost:8080/api_java/rest/myresource';
  private postUrl = 'http://localhost:8080/api_java/rest/myresource/create';
  private putUrl = 'http://localhost:8080/api_java/rest/myresource/update';
  private delUrl = 'http://localhost:8080/api_java/rest/myresource/delete';
  private getidUrl='http://localhost:8080/api_java/rest/myresource/id';

  constructor(private http: HttpClient) { }

  // Function to get all students
  getAllStudents(): Observable<any> {
    return this.http.get<any>(`${this.getUrl}`);
  }

  // Function to get a student by id
  getStudent(id: number): Observable<any> {
    return this.http.get<any>(`${this.getidUrl}/${id}`);
  }

  // Function to create a new student
  createStudent(student: any): Observable<any> {
    return this.http.post<any>(`${this.postUrl}`, student);
  }

  // Function to update a student
  updateStudent(id: number, student: any): Observable<any> {
    return this.http.put<any>(`${this.putUrl}/${id}`, student);
  }

  // Function to delete a student
  deleteStudent(id: number): Observable<any> {
    return this.http.delete<any>(`${this.delUrl}/${id}`);
  }
}
