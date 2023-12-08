import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../../services/dashboard.service';
import { ProfileService } from '../../../../profile/services/profile.service';
import { JsonPipe } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HttpClientModule, RouterModule, JsonPipe],
  providers: [HttpClient, DashboardService, ProfileService],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  userDetails: any = {};
  err: any = {};
  constructor(
    private dashboardService: DashboardService,
    private profileService: ProfileService
  ) {}
  // the initialization of the dashboard component , immediately we are expecting the rest call should be done.?
  ngOnInit(): void {
    //handling the initialization of the dashboard component
    this.dashboardService.getUserDetails().subscribe((res) => {
      this.userDetails = res;
      console.log(this.userDetails);
    });
    this.profileService.getProfile().subscribe(
      (res) => {},
      (err) => {
        console.log(err.error);
        this.err = err.error;
      }
    );
  }
  // /api/auth : get method : to get user details..
}
