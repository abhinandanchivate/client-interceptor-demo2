import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardEduCredentialComponent } from './dashboard-edu-credential.component';

describe('DashboardEduCredentialComponent', () => {
  let component: DashboardEduCredentialComponent;
  let fixture: ComponentFixture<DashboardEduCredentialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardEduCredentialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardEduCredentialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
