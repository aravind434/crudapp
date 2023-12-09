import { Component } from '@angular/core';

@Component({
  selector: 'app-crudopr',
  templateUrl: './crudopr.component.html',
  styleUrls: ['./crudopr.component.css']
})
export class CrudoprComponent {
  students:any[] = [];
  fname : string = '';
  lname : string = '';
  address : any = '';
  CI:any ;
  showAddStudentbtn:boolean = true;
  addStudent() {
    let studentdetails = {
      firstname : this.fname,
      lastname : this.lname,
      address : this.address

    }
    this.students.push(studentdetails);
  }

  //method creation to delete the perticular student object
  deleteStudent(index:number) {
    this.students.splice(index,1)

  }

  //method creation to edit the student details
  editStudent(index:number) {
    this.CI = index;
    this.showAddStudentbtn = false;
    this.fname = this.students[index].firstname;
    this.lname = this.students[index].lastname;
    this.address = this.students[index].address;
  }

  //method to update the student details
  updateStudent() {
    let updateStudent = {
      firstname : this.fname,
      lastname : this.lname,
      address : this.address
    }
    this.students[this.CI] = updateStudent;
    this.showAddStudentbtn = true;
  }

}
