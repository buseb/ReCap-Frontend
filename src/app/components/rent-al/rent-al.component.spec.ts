import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentAlComponent } from './rent-al.component';

describe('RentAlComponent', () => {
  let component: RentAlComponent;
  let fixture: ComponentFixture<RentAlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentAlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentAlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
