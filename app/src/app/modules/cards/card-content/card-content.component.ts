import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardStatus } from '@ct-core/enum/card-status.enum';
import { CardApiResponse } from '@ct-core/models/card-api.model';

export interface StatusChangedCardContent {
  id: number;
  typeOfStatus: CardStatus.Done | CardStatus.Rejected
}
@Component({
  selector: 'ct-card-content',
  templateUrl: './card-content.component.html',
  styleUrls: ['./card-content.component.scss']
})
export class CardContentComponent {
  @Input() card!: CardApiResponse;
  CardStatus = CardStatus;

  @Output() statusChangedEvent = new EventEmitter<StatusChangedCardContent>();

  onRejected() {
    this.statusChangedEvent.emit({
      id: this.card.id,
      typeOfStatus: CardStatus.Rejected
    })
  }

  onDone() {
    this.statusChangedEvent.emit({
      id: this.card.id,
      typeOfStatus: CardStatus.Done
    })
  }
}
