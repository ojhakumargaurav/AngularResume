import { Component, Input } from '@angular/core';
import { EmploymentModel } from '../models/employment/employment-model';

@Component({
  selector: 'app-employment-history',
  templateUrl: './employment-history.component.html',
  styleUrls: ['./employment-history.component.scss']
})
export class EmploymentHistoryComponent {
  @Input() employer?: EmploymentModel = undefined

}
