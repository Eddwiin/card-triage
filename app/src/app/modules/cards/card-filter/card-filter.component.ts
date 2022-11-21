import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Arrhythmias } from '@ct-core/enum/arrhythmias.enum';

export interface CardFilterModel {
  filterType: 'select' | 'input';
  value: Arrhythmias;
}

@Component({
  selector: 'ct-card-filter',
  templateUrl: './card-filter.component.html',
  styleUrls: ['./card-filter.component.scss']
})
export class CardFilterComponent implements OnInit {
  arrhythmiasEnum = Arrhythmias
  arrhythmias = [
    Arrhythmias.AFib,
    Arrhythmias.AVBlock,
    Arrhythmias.PSVC,
    Arrhythmias.PVC,
    Arrhythmias.Pause
  ];

  @Output() filterEvent = new EventEmitter<CardFilterModel>();

  ngOnInit() { }

  onInputEvent(event: any) {
    this.filterEvent.emit({
      filterType: 'input',
      value: event.target.value
    });
  }

  onSelectEvent(event: any) {
    this.filterEvent.emit({
      filterType: 'select',
      value: event.target.value
    });
  }

}
