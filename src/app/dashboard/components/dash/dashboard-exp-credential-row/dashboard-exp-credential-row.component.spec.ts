import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardExpCredentialRowComponent } from './dashboard-exp-credential-row.component';

describe('DashboardExpCredentialRowComponent', () => {
  let component: DashboardExpCredentialRowComponent;
  let fixture: ComponentFixture<DashboardExpCredentialRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardExpCredentialRowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardExpCredentialRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
