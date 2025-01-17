import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { UserListComponent } from './user-list/user-list.component'; // Import UserListComponent
import { RouterModule } from '@angular/router';
import { AdminEventListComponent } from './admin-event-list/admin-event-list.component';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    UserListComponent,   // Add UserListComponent here if you have created it
    AdminEventListComponent,  // Add EventListComponent here if you have created it
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [AdminDashboardComponent]
})
export class AdminDashboardModule { }
