import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  profileData:any=[]

  constructor(private authservice:AuthService) { }

  ngOnInit(): void {
    this.getprofile()

    const email =localStorage.getItem('id')
  }


getprofile(){
  this.authservice.getprofile().subscribe((res)=>{
    console.log(res)
    this.profileData=res
    console.log(this.profileData.user)

  })
  
}


}
