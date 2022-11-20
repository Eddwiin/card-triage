import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsListContainerComponent } from './cards-list-container.component';

describe('CardsListContainerComponent', () => {
  let component: CardsListContainerComponent;
  let fixture: ComponentFixture<CardsListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsListContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
