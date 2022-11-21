import { Component, OnDestroy, OnInit } from '@angular/core';
import { CardApiResponse } from '@ct-core/models/card-api.model';
import { CardService } from '@ct-core/services/card/card.service';
import { map, Observable, of, Subscription, tap } from 'rxjs';
import { CardStatus } from '@ct-core/enum/card-status.enum';
import { CardFilterModel } from '../card-filter/card-filter.component';
import { StatusChangedCardContent } from '../card-content/card-content.component';
import { Arrhythmias } from '@ct-core/enum/arrhythmias.enum';

@Component({
  selector: 'ct-cards-list-cotainer',
  templateUrl: './cards-list-container.component.html',
  styleUrls: ['./cards-list-container.component.scss']
})
export class CardsListContainerComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  CardStatus = CardStatus;
  initialCards: CardApiResponse[] = [];
  copyOfCards: CardApiResponse[] = [];

  constructor(private readonly cardService: CardService) { }

  ngOnInit(): void {
    this.subscriptions.push(
      this.cardService.getCards().pipe(
        map(cards => {
          this.initialCards = [...cards];
          this.copyOfCards = [...this.initialCards];
        })
      ).subscribe()
    );


  }

  onFilterEvent(search: CardFilterModel) {
    let cardsWithMatchingFilter: CardApiResponse[] = [];

    if (this.isUnknownSelectedFilter(search)) {
      return this.copyOfCards = [...this.initialCards];
    }

    this.initialCards.forEach((currentCard) => {
      if (search.filterType === 'select') {
        let cardWithArrhythmia = this.getSearchForArrhythmia(currentCard, search.value);
        cardsWithMatchingFilter = (cardWithArrhythmia) ? [...cardsWithMatchingFilter, cardWithArrhythmia] : cardsWithMatchingFilter;
      } else {
        let cardWithName = this.getSearchForInputName(currentCard, search.value);
        cardsWithMatchingFilter = (cardWithName) ? [...cardsWithMatchingFilter, cardWithName] : cardsWithMatchingFilter;
      }
    })

    return this.copyOfCards = [...cardsWithMatchingFilter];
  }


  onStatusChangedEvent(cardChanged: StatusChangedCardContent) {
    const cardWithStatusChanged = this.copyOfCards.find(currentCard => currentCard.id === cardChanged.id);

    if (cardWithStatusChanged) {
      cardWithStatusChanged.status = cardChanged.typeOfStatus;
      this.copyOfCards = this.copyOfCards.filter(currentCard => currentCard.id !== cardChanged.id);
      this.copyOfCards = [...this.copyOfCards, cardWithStatusChanged];
    }

  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe())
  }

  private isUnknownSelectedFilter(search: CardFilterModel) {
    if (search.filterType === 'select') {
      const isUnknownFilter = !Object.values(Arrhythmias).includes(search.value);
      return isUnknownFilter;
    }
    return false;
  }

  private getSearchForArrhythmia(card: CardApiResponse, searchArrhythmia: Arrhythmias) {
    const isFoundArrhythmia = card.arrhythmias.some(currentArrhythmia => currentArrhythmia === searchArrhythmia);
    return (isFoundArrhythmia) ? card : null;
  }

  private getSearchForInputName(card: CardApiResponse, searchName: string) {
    const isFoundName = card.patient_name.toLowerCase().includes(searchName.toLowerCase());
    return (isFoundName) ? card : null;
  }

}
