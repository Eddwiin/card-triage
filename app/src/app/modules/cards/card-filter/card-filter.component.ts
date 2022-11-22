import { Component, EventEmitter, Output } from '@angular/core';
import { Arrhythmias } from '@ct-core/enum/arrhythmias.enum';

export interface CardFilterModel {
  filterType: 'select' | 'input';
  value: Arrhythmias | string;
}

@Component({
  selector: 'ct-card-filter',
  templateUrl: './card-filter.component.html',
})
export class CardFilterComponent {
  arrhythmiasEnum = Arrhythmias
  arrhythmias = [
    Arrhythmias.AFib,
    Arrhythmias.AVBlock,
    Arrhythmias.PSVC,
    Arrhythmias.PVC,
    Arrhythmias.Pause
  ];

  @Output() filterEvent = new EventEmitter<CardFilterModel>();

  onFilterEvent(event: any, filterType: 'select' | 'input') {
    this.filterEvent.emit({
      filterType: filterType,
      value: event.target.value
    });
  }

}
