import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  adminEmail:any='ab@ab'

  constructor(private http:HttpClient) { }

  getAllEmployee(){
    return this.http.get('http://localhost:3000/index/api/users')
  }

  postEmployee(data: any) {
    console.log(data);
    return this.http.post('http://localhost:3000/index/api/users', data);
  }

  getAllEmployeeById(id:any){
    console.log(id);
    const token=localStorage.getItem('jwt')
    return this.http.get(`http://localhost:3000/index/api/users/?id=${id}`);
  }

 

  updateEmployeeById(EditEmployeeForm:any){
    return this.http.put(`http://localhost:3000/index/api/users/${EditEmployeeForm._id}`,EditEmployeeForm);
  }
  
  
  loginApi(data: any) {
    console.log(data);
    return this.http.post('http://localhost:3000/index/login', data);
  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }

  // loggedInAdmin(){
  //   return !!this.adminEmail


  //   return


     
  // }

}
