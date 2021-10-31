import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  NgForm,
} from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
import { TosterService } from 'src/app/services/toster.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  LoginForm: FormGroup;
  isSubmitted: boolean = false;
  logindatas:any;
  constructor(
    private formBuilder: FormBuilder,
    private employee: EmployeeService,
    private _router:Router,
    private toster:TosterService
  ) {
    this.LoginForm = this.formBuilder.group({
      email: new FormControl('', []),
      password: new FormControl('', []),
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    this.employee.loginApi(this.LoginForm.value).subscribe((res) => {
      console.log(res);
      this.logindatas=res;
      localStorage.setItem('token',this.logindatas.token)
      console.log(this.LoginForm.value)
      if(this.LoginForm.value.email=='admin@admin.com'){
        // localStorage.setItem('email',this.LoginForm.value.email)
        this._router.navigate(['/allemployee/asd']);
        this.toster.showSuccess('Admin Login success')
      }else{
      localStorage.setItem('email',this.LoginForm.value.email)
      this._router.navigate(['/userprofile']);
      this.toster.showSuccess('User Login success')

      }
    });
  }
}
