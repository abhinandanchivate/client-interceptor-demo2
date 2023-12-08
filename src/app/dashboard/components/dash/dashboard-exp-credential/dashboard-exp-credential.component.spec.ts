import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardExpCredentialComponent } from './dashboard-exp-credential.component';

describe('DashboardExpCredentialComponent', () => {
  let component: DashboardExpCredentialComponent;
  let fixture: ComponentFixture<DashboardExpCredentialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardExpCredentialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardExpCredentialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
