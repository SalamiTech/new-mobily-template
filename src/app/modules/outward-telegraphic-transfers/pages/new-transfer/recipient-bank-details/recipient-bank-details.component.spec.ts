import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipientBankDetailsComponent } from './recipient-bank-details.component';

describe('RecipientBankDetailsComponent', () => {
  let component: RecipientBankDetailsComponent;
  let fixture: ComponentFixture<RecipientBankDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipientBankDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipientBankDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
