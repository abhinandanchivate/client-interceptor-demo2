import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard-action',
  standalone: true,
  imports: [RouterModule, JsonPipe],
  templateUrl: './dashboard-action.component.html',
  styleUrl: './dashboard-action.component.css',
})
export class DashboardActionComponent {
  profile: any = JSON.parse(localStorage.getItem('profile') || '');
  profileId: string = this.profile._id;
  path: string = `/edit-profile/${this.profileId}`;
}
// how to inform the profile component the req is for edit not for create.
