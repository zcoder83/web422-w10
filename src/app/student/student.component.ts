import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

export class Student {
  constructor(
    public name: string,
    public email: string,
    public city: string,
    public street: string
  ){
    
  }
}

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  citys = ["Toronto", "London", "Gimhae"];

  student = new Student("Yeonkwan", "ddd@gmail.com", this.citys[0], "");

  student_submitted = new Student("", "", this.citys[0], "");

  constructor() { }
  showData() {
    return JSON.stringify(this.student);
  }
  onSubmit(f:NgForm) {
    this.student_submitted.name = f.value.name;
    this.student_submitted.email = f.value.email;
    this.student_submitted.city = f.value.address.city;
    this.student_submitted.street = f.value.address.street;
  }

  ngOnInit(): void {
  }

}
