import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LeavesService {

  constructor(private http:HttpClient) { }

  getAllLeaves(){
    return this.http.get('http://localhost:3000/leaves/api/allleaves')
  }

  postLeave(data: any) {
    console.log(data);
    return this.http.post('http://localhost:3000/leaves/api/addLeave', data);
  }

  updateLeaveStatusById(LeaveUpdateForm:any){
    console.log(LeaveUpdateForm)
    return this.http.put(`http://localhost:3000/leaves/api/updateLeave/${LeaveUpdateForm._id}`,LeaveUpdateForm)

  }
}
