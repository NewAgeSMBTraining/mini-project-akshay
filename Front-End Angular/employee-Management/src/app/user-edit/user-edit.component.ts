import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  NgForm,
} from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { TosterService } from '../services/toster.service';


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  EditEmployeeForm: FormGroup;
  selectedemployee: any = '';
  data: any = [];
  isSubmitted: boolean = false;

  employeeID_data: any = [];
  config_employee = {
    displayKey: 'name',
    search: true,
    clearOnSelection: true,
    placeholder: 'Select Employee',
    height: '250px',
  };
  empid: any;
  constructor(
    private employeeservice: EmployeeService,
    private toster:TosterService,
    private formBuilder: FormBuilder
  ) {
    this.EditEmployeeForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      _id: new FormControl('', []),
      email: new FormControl('', []),
      address: new FormControl('', []),
      gender: new FormControl('', []),
      dob: new FormControl('', []),
      mobile: new FormControl('', []),
      alternateEmail: new FormControl('', []),
      password: new FormControl('', []),
      sslc: new FormControl('', []),
      sslcmonth: new FormControl('', []),
      sslcCgpa: new FormControl('', []),
      hsc: new FormControl('', []),
      hscmonth: new FormControl('', []),
      hscCgpa: new FormControl('', []),
      degree: new FormControl('', []),
      degreemonth: new FormControl('', []),
      degreeCgpa: new FormControl('', []),
      cmpName: new FormControl('', []),
      TotalExp: new FormControl('', []),
      Tech: new FormControl('', []),
      sslcStatus: new FormControl('', []),
      hscStatus: new FormControl('', []),
      degreeStatus: new FormControl('', []),
      //sslcStatus
    });
  }

  ngOnInit(): void {
    this.listAllEmployee();
    this.EditEmployeeForm.get('email')?.disable();
  }

  listAllEmployee() {
    this.employeeID_data = [];
    this.employeeservice.getAllEmployee().subscribe((res) => {
      this.employeeID_data = res;
      console.log(res);
    });
  }

  listAllemployeeById(id: any) {
    this.employeeservice.getAllEmployeeById(id).subscribe((res) => {
      console.log(res);
      this.employeeID_data = res;
      // console.log(this.employeeID_data)

      this.EditEmployeeForm.patchValue({
        _id: this.employeeID_data._id,
        name: this.employeeID_data.name,
        email: this.employeeID_data.email,
        address: this.employeeID_data.address,
        gender: this.employeeID_data.gender,
        dob: this.employeeID_data.dob,
        mobile: this.employeeID_data.mobile,
        alternateEmail: this.employeeID_data.alternateEmail,
        password: this.employeeID_data.password,
        sslc: this.employeeID_data.sslc,
        sslcmonth: this.employeeID_data.sslcmonth,
        sslcCgpa: this.employeeID_data.sslcCgpa,
        hsc: this.employeeID_data.hsc,
        hscmonth: this.employeeID_data.hscmonth,
        hscCgpa: this.employeeID_data.hscCgpa,
        degree: this.employeeID_data.degree,
        degreemonth: this.employeeID_data.degreemonth,
        degreeCgpa: this.employeeID_data.degreeCgpa,
        cmpName: this.employeeID_data.cmpName,
        TotalExp: this.employeeID_data.TotalExp,
        Tech: this.employeeID_data.Tech,
        sslcStatus: this.employeeID_data.sslcStatus,
        hscStatus: this.employeeID_data.hscStatus,
        degreeStatus: this.employeeID_data.degreeStatus,
      });
    });
  }

  onChangeemp(e: any) {
    console.log(e.value._id);
    this.empid = e.value._id;
    this.listAllemployeeById(this.empid);
  }

  onUpdateFormSubmit() {
    this.isSubmitted = true;
    if (this.EditEmployeeForm.valid) {
      this.employeeservice
        .updateEmployeeById(this.EditEmployeeForm.value)
        .subscribe((result) => {
          console.log(result);
          this.toster.showSuccess('updated Succesfully')
          window.location.reload();
        });
    }
  }

}
