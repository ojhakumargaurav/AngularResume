import { Component, Input } from '@angular/core';
import { DetailsModel } from '../models/Details/details-model';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  constructor() {
  }
  @Input() Details?: DetailsModel = undefined;

}
