import { Component, Input } from '@angular/core';
import {Komunikat} from "./komunikat";

@Component({
  selector: 'komunikat',
  templateUrl: './komunikat.component.html',
  styleUrls: [ './komunikat.component.css' ]
})
export class KomunikatComponent  {
  @Input() komunikat: Komunikat;
}
