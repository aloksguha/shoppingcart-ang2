import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartnumberComponent } from './cartnumber.component';

describe('CartnumberComponent', () => {
  let component: CartnumberComponent;
  let fixture: ComponentFixture<CartnumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartnumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartnumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
