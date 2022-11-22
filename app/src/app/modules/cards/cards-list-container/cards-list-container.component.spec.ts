import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Arrhythmias } from '@ct-core/enum/arrhythmias.enum';
import { CardStatus } from '@ct-core/enum/card-status.enum';
import { CardApiResponse } from '@ct-core/models/card-api.model';
import { CardService } from '@ct-core/services/card/card.service';
import { Observable, of } from 'rxjs';
import { CARDS_MOCK } from 'src/app/shared/mock/cards.mock';
import { SharedModule } from 'src/app/shared/shared.module';
import { CardFilterModel } from '../card-filter/card-filter.component';
import { CardsModule } from '../cards.module';

import { CardsListContainerComponent } from './cards-list-container.component';

describe('CardsListContainerComponent', () => {
  let component: CardsListContainerComponent;
  let fixture: ComponentFixture<CardsListContainerComponent>;
  let cardService: CardService;
  let getCardsSpy: jasmine.Spy<() => Observable<CardApiResponse[]>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardsListContainerComponent],
      imports: [CardsModule, SharedModule]
    })
      .compileComponents();

    cardService = TestBed.inject(CardService);
    getCardsSpy = spyOn(cardService, 'getCards').and.returnValue(of(CARDS_MOCK));
    fixture = TestBed.createComponent(CardsListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load cards', () => {
    expect(getCardsSpy).toHaveBeenCalled();
  });

  describe('onFilterEvent', () => {
    let cardFilterEl: DebugElement;

    beforeEach(() => {
      cardFilterEl = fixture.debugElement.query(By.css('ct-card-filter'));
    })

    it("should assign initialCards to copyOfCards when it's an unknown select filter", () => {
      const search: CardFilterModel = {
        filterType: 'select',
        value: '--'
      }
      cardFilterEl.triggerEventHandler('filterEvent', search);

      expect(component.copyOfCards).toEqual(component.initialCards)
    });

    it('should add cards with the corresponding arrhythmia', () => {
      const value = Arrhythmias.PVC;
      const search: CardFilterModel = {
        filterType: 'select',
        value
      }
      let expectedRes: CardApiResponse[] = [];

      component.initialCards.forEach((currentCard) => {
        const isFoundArrhythmia = currentCard.arrhythmias.some(arrhythmia => arrhythmia === value);
        (isFoundArrhythmia) ? expectedRes = [...expectedRes, currentCard] : null
      });

      cardFilterEl.triggerEventHandler('filterEvent', search);
      expect(component.copyOfCards).toEqual(expectedRes);
    });

    it('should add cards with the corresponding name', () => {
      const value = "Bo";
      const search: CardFilterModel = {
        filterType: 'input',
        value
      }
      let expectedRes: CardApiResponse[] = [];

      component.initialCards.forEach((currentCard) => {
        const isFoundName = currentCard.patient_name.includes(value);
        (isFoundName) ? expectedRes = [...expectedRes, currentCard] : null
      });

      cardFilterEl.triggerEventHandler('filterEvent', search);
      expect(component.copyOfCards).toEqual(expectedRes);
    });
  });


  describe('onStatusChangedEvent', () => {
    let cardContentEl: DebugElement;

    beforeEach(() => {
      component.copyOfCards[0] = { ...component.copyOfCards[0], status: CardStatus.Pending }
      cardContentEl = fixture.debugElement.query(By.css('ct-card-content'));
    })

    it('should change the status of the card', () => {
      const search = {
        id: component.copyOfCards[0].id,
        typeOfStatus: CardStatus.Done
      }
      const lastIndexOfCopyCards = component.copyOfCards.length - 1;

      cardContentEl.triggerEventHandler('statusChangedEvent', search);
      expect(component.copyOfCards[lastIndexOfCopyCards].status).toBe(CardStatus.Done);
    })
  })
});
