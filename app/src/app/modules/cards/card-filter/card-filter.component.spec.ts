import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Arrhythmias } from '@ct-core/enum/arrhythmias.enum';

import { CardFilterComponent, CardFilterModel } from './card-filter.component';

describe('CardFilterComponent', () => {
  let component: CardFilterComponent;
  let fixture: ComponentFixture<CardFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardFilterComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CardFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe("When the user uses a filter", () => {
    it('should emit an event when user types on the input', () => {
      const filterEventSpy = spyOn(component.filterEvent, 'emit');
      const inputEl = fixture.debugElement.query(By.css('#card-input-filter'));
      const value = "input123";
      const expectedRes: CardFilterModel = {
        filterType: 'input',
        value
      }

      inputEl.triggerEventHandler('keyup', { target: { value } })

      expect(filterEventSpy).toHaveBeenCalledOnceWith(expectedRes)
    });

    it('should emit an event when user uses select', () => {
      const filterEventSpy = spyOn(component.filterEvent, 'emit');
      const selectEl = fixture.debugElement.query(By.css('#card-select-filter'));
      const value = Arrhythmias.AFib;
      const expectedRes: CardFilterModel = {
        filterType: 'select',
        value
      }

      selectEl.triggerEventHandler('change', { target: { value } });

      expect(filterEventSpy).toHaveBeenCalledOnceWith(expectedRes)
    })
  });
});
