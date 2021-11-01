import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators, FormControl, NgForm,} from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { TosterService } from '../services/toster.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  EditEmployeeForm: FormGroup;
  isSubmitted: boolean = false;


  constructor(private employeeService:EmployeeService,
    private toster:TosterService,
    private formBuilder: FormBuilder,
    private _router:Router) {
      this.EditEmployeeForm = this.formBuilder.group({
        _id: new FormControl('', []),
        password: new FormControl('', []),
             });
     }

  ngOnInit(): void {
  }


  onUpdateFormSubmit() {
    this.isSubmitted = true;
    if (this.EditEmployeeForm.valid) {
      this.employeeService
        .updateEmployeeById(this.EditEmployeeForm.value)
        .subscribe((result) => {
          console.log(result);
          this.toster.showSuccess('updated Succesfully')
          this._router.navigate(['/login']);
          // window.location.reload();
          

        });
    }
  }

}
