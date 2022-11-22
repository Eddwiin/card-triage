import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CardStatus } from '@ct-core/enum/card-status.enum';
import { CardApiResponse } from '@ct-core/models/card-api.model';
import { CARDS_MOCK } from 'src/app/shared/mock/cards.mock';
import { SharedModule } from 'src/app/shared/shared.module';

import { CardContentComponent, StatusChangedCardContent } from './card-content.component';

describe('CardContentComponent', () => {
  let component: CardContentComponent;
  let fixture: ComponentFixture<CardContentComponent>;
  let mockCard: CardApiResponse;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardContentComponent],
      imports: [SharedModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CardContentComponent);
    component = fixture.componentInstance;
    mockCard = CARDS_MOCK[0]
    component.card = { ...mockCard };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe("When the card changes status", () => {
    it('should emit an event when card has been rejected', () => {
      const statusChangedEventSpy = spyOn(component.statusChangedEvent, 'emit');
      const btnRejectedEl = fixture.debugElement.queryAll(By.css('button'))[0];
      const expectedRes: StatusChangedCardContent = {
        id: mockCard.id,
        typeOfStatus: CardStatus.Rejected
      }
      btnRejectedEl.triggerEventHandler('click');

      expect(statusChangedEventSpy).toHaveBeenCalledOnceWith(expectedRes)
    });

    it('should emit an event when card has been done', () => {
      const statusChangedEventSpy = spyOn(component.statusChangedEvent, 'emit');
      const btnDoneEl = fixture.debugElement.queryAll(By.css('button'))[1];
      const expectedRes: StatusChangedCardContent = {
        id: mockCard.id,
        typeOfStatus: CardStatus.Done
      }
      btnDoneEl.triggerEventHandler('click');

      expect(statusChangedEventSpy).toHaveBeenCalledOnceWith(expectedRes)
    })
  })
});
