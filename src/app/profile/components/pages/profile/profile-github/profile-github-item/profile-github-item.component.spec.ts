import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileGithubItemComponent } from './profile-github-item.component';

describe('ProfileGithubItemComponent', () => {
  let component: ProfileGithubItemComponent;
  let fixture: ComponentFixture<ProfileGithubItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileGithubItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfileGithubItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
