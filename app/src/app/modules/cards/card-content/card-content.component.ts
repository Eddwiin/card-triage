import { Component, Input } from '@angular/core';
import { CardApiResponse } from '@ct-core/models/card-api.model';

@Component({
  selector: 'ct-card-content',
  templateUrl: './card-content.component.html',
  styleUrls: ['./card-content.component.scss']
})
export class CardContentComponent {
  @Input() card!: CardApiResponse;
}
