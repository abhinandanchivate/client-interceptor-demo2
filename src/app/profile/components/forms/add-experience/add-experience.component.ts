import { Component } from '@angular/core';
import { ProfileService } from '../../../services/profile.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-experience',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-experience.component.html',
  styleUrl: './add-experience.component.css',
})
export class AddExperienceComponent {
  experience: any = {};
  constructor(private profileService: ProfileService, private router: Router) {}

  addExperienceSubmit() {
    console.log(JSON.stringify(this.experience));
    this.profileService.addExperience(this.experience).subscribe(
      (res) => {
        console.log(JSON.stringify(res));
        this.router.navigate(['/dashboard']);
      },
      (err) => {}
    );
  }
}
