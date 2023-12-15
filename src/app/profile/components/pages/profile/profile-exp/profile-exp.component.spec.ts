import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileExpComponent } from './profile-exp.component';

describe('ProfileExpComponent', () => {
  let component: ProfileExpComponent;
  let fixture: ComponentFixture<ProfileExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileExpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfileExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
