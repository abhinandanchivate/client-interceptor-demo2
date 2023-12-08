import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardEduCredentialRowComponent } from './dashboard-edu-credential-row.component';

describe('DashboardEduCredentialRowComponent', () => {
  let component: DashboardEduCredentialRowComponent;
  let fixture: ComponentFixture<DashboardEduCredentialRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardEduCredentialRowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardEduCredentialRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
