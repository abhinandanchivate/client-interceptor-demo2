import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProfileService } from '../../../services/profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-profile',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-profile.component.html',
  styleUrl: './create-profile.component.css',
})
export class CreateProfileComponent {
  profile: any = {};

  constructor(private profileService: ProfileService, private router: Router) {}

  submitCreateProfile() {
    this.profileService.createProfile(this.profile).subscribe(
      (res) => {
        // 1st gettign the profile details
        console.log(res);
        localStorage.setItem('profile', JSON.stringify(res));
        // navigating user to dashboard.
        this.router.navigate(['/dashboard']);
      },
      (err) => {
        console.log(JSON.stringify(err));
      }
    );
  }
}
