import { Component, OnInit } from '@angular/core';
import { CardApiResponse } from '@ct-core/models/card-api.model';
import { CardService } from '@ct-core/services/card/card.service';
import { map, Observable, of, tap } from 'rxjs';
import { CardStatus } from '@ct-core/enum/card-status.enum';

@Component({
  selector: 'ct-cards-list-cotainer',
  templateUrl: './cards-list-container.component.html',
  styleUrls: ['./cards-list-container.component.scss']
})
export class CardsListContainerComponent implements OnInit {
  cardsList$: Observable<CardApiResponse[]> = of([])
  initalCardsList: CardApiResponse[] = [];
  CardStatus = CardStatus;

  constructor(private readonly cardService: CardService) { }

  ngOnInit(): void {
    this.cardsList$ = this.cardService.getCards().pipe(
      tap(cards => this.initalCardsList = [...cards])
    );
  }

  onSelectSearchEvent(event: string) {
    console.log("selec", event);
  }

  onInputSearchEvent(event: string) {
    console.log("input", event)
  }
}
