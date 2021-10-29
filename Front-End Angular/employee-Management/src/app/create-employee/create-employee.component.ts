import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators, FormControl, NgForm,} from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { TosterService } from '../services/toster.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css'],
})
export class CreateEmployeeComponent implements OnInit {
  registrationForm: FormGroup;
  isSubmitted: boolean = false;
  todayDate: number = Date.now();

  constructor(
    private formBuilder: FormBuilder,
    private employeeService:EmployeeService, private toster:TosterService                                        ) {
    this.registrationForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', []),
      address: new FormControl('', []),
      gender: new FormControl('', []),
      dob: new FormControl('', []),
      mobile: new FormControl('', [Validators.required]),
      alternateEmail: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      sslc: new FormControl('', []),
      sslcmonth: new FormControl('', []),
      sslcCgpa: new FormControl('', []),
      hsc: new FormControl('', []),
      hscmonth: new FormControl('', []),
      hscCgpa: new FormControl('', []),
      degree: new FormControl('', []),
      degreemonth: new FormControl('', []),
      degreeCgpa: new FormControl('', []),
      cmpName: new FormControl('', [Validators.required]),
      TotalExp: new FormControl('', [Validators.required]),
      Tech: new FormControl('', [Validators.required]),
      sslcStatus: new FormControl('', []),
      hscStatus: new FormControl('', []),
      degreeStatus: new FormControl('', []),
//sslcStatus
    });
  }

  ngOnInit() {
    // this.onRegistrationFormSubmit();
    this.registrationForm.get('sslc')?.disable();
    this.registrationForm.get('sslcmonth')?.disable();
    this.registrationForm.get('sslcCgpa')?.disable();

    this.registrationForm.get('degree')?.disable();
    this.registrationForm.get('degreemonth')?.disable();
    this.registrationForm.get('degreeCgpa')?.disable();

    this.registrationForm.get('hsc')?.disable();
    this.registrationForm.get('hscmonth')?.disable();
    this.registrationForm.get('hscCgpa')?.disable();
    

  

  }
  onRegistrationFormSubmit() {
    this.isSubmitted = true;
    if (this.registrationForm.valid) {
      this.employeeService.postEmployee(this.registrationForm.value).subscribe((result)=>{
        console.log(result)
        this.toster.showSuccess('Employee Created Successfully ')


      })
      // console.log('User Registration Form Submit', this.registrationForm.value);
    }else{
      this.toster.showError('Employee Not Created')
    }
  };

  onChange(event:any): void {  
    let newVal = event.target.value;
    if(newVal == 2){
    this.registrationForm.get('sslc')?.disable();
    this.registrationForm.get('sslcmonth')?.disable();
    this.registrationForm.get('sslcCgpa')?.disable();
    
     }
    if(newVal ==1){
      this.registrationForm.get('sslc')?.enable();
      this.registrationForm.get('sslcmonth')?.enable();
      this.registrationForm.get('sslcCgpa')?.enable();
   
     }
    
  } 

  onChange2(event:any): void {  
    let newVal = event.target.value;
    if(newVal == 2){
    this.registrationForm.get('degree')?.disable();
    this.registrationForm.get('degreemonth')?.disable();
    this.registrationForm.get('degreeCgpa')?.disable();
    
     }
    if(newVal ==1){
      this.registrationForm.get('degree')?.enable();
      this.registrationForm.get('degreemonth')?.enable();
      this.registrationForm.get('degreeCgpa')?.enable();
   
     }
    
  } 

  onChange3(event:any): void {  
    let newVal = event.target.value;
    if(newVal == 2){
    this.registrationForm.get('hsc')?.disable();
    this.registrationForm.get('hscmonth')?.disable();
    this.registrationForm.get('hscCgpa')?.disable();
    
     }
    if(newVal ==1){
      this.registrationForm.get('hsc')?.enable();
      this.registrationForm.get('hscmonth')?.enable();
      this.registrationForm.get('hscCgpa')?.enable();
   
     }
    
  } 
   

  
}
