import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Arrhythmias } from '@ct-core/enum/arrhythmias.enum';

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

  @Output() inputSearchEvent = new EventEmitter<string>();
  @Output() selectSearchEvent = new EventEmitter<string>();

  ngOnInit() { }

  onInputEvent(event: any) {
    this.inputSearchEvent.emit(event.target.value);
  }

  onSelectEvent(event: any) {
    this.selectSearchEvent.emit(event.target.value);
  }

}
