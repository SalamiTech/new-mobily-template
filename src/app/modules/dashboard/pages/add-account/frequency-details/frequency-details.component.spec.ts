import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrequencyDetailsComponent } from './frequency-details.component';

describe('FrequencyDetailsComponent', () => {
  let component: FrequencyDetailsComponent;
  let fixture: ComponentFixture<FrequencyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrequencyDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrequencyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
