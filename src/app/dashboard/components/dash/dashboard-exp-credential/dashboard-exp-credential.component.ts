import { JsonPipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DashboardExpCredentialRowComponent } from '../dashboard-exp-credential-row/dashboard-exp-credential-row.component';

@Component({
  selector: 'app-dashboard-exp-credential',
  standalone: true,
  imports: [JsonPipe, DashboardExpCredentialRowComponent],
  templateUrl: './dashboard-exp-credential.component.html',
  styleUrl: './dashboard-exp-credential.component.css',
})
export class DashboardExpCredentialComponent {
  @Input() // it will inform to that this component requires the data from parent.
  exp: any[] = [];
  @Output()
  emitter: EventEmitter<any> = new EventEmitter();

  deleteExp(id: string) {
    console.log('id value from exp credentials' + id);
    this.emitter.emit(id);
  }
}
