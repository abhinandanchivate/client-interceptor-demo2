import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileEduComponent } from './profile-edu.component';

describe('ProfileEduComponent', () => {
  let component: ProfileEduComponent;
  let fixture: ComponentFixture<ProfileEduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileEduComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfileEduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
