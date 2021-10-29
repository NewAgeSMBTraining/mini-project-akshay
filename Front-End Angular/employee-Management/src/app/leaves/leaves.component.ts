import { Component, OnInit } from '@angular/core';
import { LeavesService } from '../services/leaves.service';
import { FormGroup, FormBuilder,Validators, FormControl, NgForm,} from '@angular/forms';
import { TosterService } from '../services/toster.service';

@Component({
  selector: 'app-leaves',
  templateUrl: './leaves.component.html',
  styleUrls: ['./leaves.component.css']
})
export class LeavesComponent implements OnInit {
  LeaveUpdateForm: FormGroup;
  isSubmitted: boolean = false;
  leaveId:any;
 

  
  public leavesdata:any=[]

  LeaveID_data: any = [];
  config_leave= {
    displayKey: '_id',
    search: true,
    clearOnSelection: true,
    placeholder: 'Select Employee',
    height: '250px',
  }



  settings = {
    columns: {
      _id: {
        title: 'Request Id'
      },
      subject: {
        title: 'Subject'
      },
      leaveType: {
        title: 'Type'
      },
      reason: {
        title: 'Reason'
      },
      fromDate: {
        title: 'From Date'
      },
      toDate: {
        title: 'To Date'
      },
      LeaveStatus:{
        type:'html',
        title:'status',
        hight:'10px',

        valuePrepareFunction: (value: any, row: any) => {
          const status = value?.toUpperCase();
          var unKnownStatus: boolean = true;
        
          
          if (status == 'PENDING FOR APROVAL') { return '<span class="text-secondary font-weight-bold"><span class="border border-secondary class p-1 class rounded " >PENDING FOR APROVAL </span></span>'; unKnownStatus = false }
          if (status == 'ON PROGRESS') { return '<span class="text-primary font-weight-bold"> <span class="border border-primary class p-1 class rounded"> ON PROGRESS </span> </span>'; unKnownStatus = false }
          if (status == 'PENDING') { return '<span class="text-warning font-weight-bold"> <span class="border border-warning class p-1 class rounded">PENDING </span></span>'; unKnownStatus = false }
          if (status == 'REJECTED') { return '<span class="text-danger font-weight-bold"> <span class="border border-danger class p-1 class rounded">REJECTED </span></span>'; unKnownStatus = false }
          if (status == 'APROVED') { return '<span class="text-success font-weight-bold"><span class="border border-success class p-1 class rounded"> APROVED </span></span>'; unKnownStatus = false }          
          //Incase Status is something not metioend aboe, then below code will be executed
          return '<span class="text-secondary font-weight-bold">' + status + '</span>'
          
        }
      }
    },

    actions: {
      position: 'right',
      add: false,
      delete: false,
      edit: false,
     
    }
  };

  constructor(private leavesService:LeavesService, private formBuilder: FormBuilder, private toster:TosterService) { 
    this.LeaveUpdateForm = this.formBuilder.group({
      _id: new FormControl('', []),
      LeaveStatus: new FormControl('', [])
    })
  }

  ngOnInit(): void {
  this.getAllLeavesData()
  }


  getAllLeavesData(){
    this.leavesdata=[];
    this.leavesService.getAllLeaves().subscribe((res)=>{
      this.leavesdata=res;
      this.LeaveUpdateForm.patchValue({
        _id: this.leavesdata._id,
        // name: this.employeeID_data.name,
        LeaveStatus: this.leavesdata.LeaveStatus,
      
      });

      console.log(res)
    },(error)=>{
      console.log('Error is',error)
    })

  }

  onChangeLeave(e:any){
    console.log(e.value._id);
    this.leaveId = e.value._id;
    // this.listAllemployeeById(this.empid);
  }

  onSubmit(){
    this.isSubmitted = true;
    this.LeaveUpdateForm.value._id=this.leaveId
    if (this.LeaveUpdateForm.valid) {
      this.leavesService
        .updateLeaveStatusById(this.LeaveUpdateForm.value)
        .subscribe((result) => {
          console.log(result);
          this.toster.showSuccess('Status Updated')
          window.location.reload();
        });
    }

  }

}
