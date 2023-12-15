import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dashboard-exp-credential-row',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-exp-credential-row.component.html',
  styleUrl: './dashboard-exp-credential-row.component.css',
})
export class DashboardExpCredentialRowComponent {
  @Input()
  e: any = {};
  @Output()
  expId: EventEmitter<string> = new EventEmitter();

  deleteExp(id: string) {
    console.log('inside hte deleteExp' + id);
    this.expId.emit(id);
  }
}
