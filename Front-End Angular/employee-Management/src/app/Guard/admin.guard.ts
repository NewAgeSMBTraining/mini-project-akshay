import { Injectable } from '@angular/core';
import {  CanActivate, Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private employeeService:EmployeeService, private router:Router){}

  canActivate():boolean{
 if(this.employeeService.adminEmail){
   return true
   
 }else{
   this.router.navigate(['/login'])
   return false
 }
  };

  
  
}
