import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { EmployeeService } from '../services/employee.service';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
    // public EmployeeData:any;
    data: any = [];

  settings = {
    columns: {
      _id: {
        title: 'ID',
        hide:true
      },
      name: {
        title: 'name',
        
      },
      email: {
        title: 'email'
      },
      alternateEmail: {
        title: 'Alternative Email'
      },
      gender: {
        title: 'Gender'
      },
      TotalExp: {
        title: 'Total Experience'
      },
      Tech: {
        title: 'Technology'
      },
      mobile: {
        title: 'Mobile'
      },
      hsc: {
        title: 'Hsc'
      },
      sslc: {
        title: 'sslc'
      },
    },

    actions: {
      position: 'right',
      add: false,
      
      // delete: false,
      // edit: false,
     
    }
  };


  constructor(private employeeService:EmployeeService) { }
  public EmployeeData:any=[];
 

  ngOnInit(): void {
    this.getAllEmployeeData()
  }

  getAllEmployeeData(){
    this.EmployeeData=[];
    this.employeeService.getAllEmployee().subscribe((res)=>{
      this.EmployeeData=res;
      console.log(res)
      // console.log("hellow")
    },(error)=>{
      console.log('Error is',error)
    })

  }

}
