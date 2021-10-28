import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }


  postEmployee(data: any):Observable<any> {
    console.log(`im the server`)
    console.log(data);
    return this.http.post('http://localhost:3000/index/login', data);
  }

  getprofile(){
    
    return this.http.get(`http://localhost:3000/index/getauser/${localStorage.getItem('email')}` )
  }



}
