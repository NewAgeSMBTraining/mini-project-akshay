import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { SelectDropDownModule } from 'ngx-select-dropdown'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { LeavesComponent } from './leaves/leaves.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { AddLeaveRequestComponent } from './add-leave-request/add-leave-request.component';
import { LoginComponent } from './core/login/login.component';
import { AdminsidebarComponent } from './adminsidebar/adminsidebar.component';
import { UserSidebarComponent } from './user-sidebar/user-sidebar.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { AuthGuard } from './Guard/auth.guard';
import { EmployeeService } from './services/employee.service';
import { LeavesService } from './services/leaves.service';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';



@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    LeavesComponent,
    CreateEmployeeComponent,
    EditEmployeeComponent,
    AddLeaveRequestComponent,
    LoginComponent,
    AdminsidebarComponent,
    UserSidebarComponent,
    UserProfileComponent,
    UserEditComponent,
    ForgotPasswordComponent,
    
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    Ng2SmartTableModule,
    SelectDropDownModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    ToastrModule.forRoot()
  ],
  providers: [AuthGuard,EmployeeService,LeavesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
