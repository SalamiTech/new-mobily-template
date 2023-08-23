import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipientInformationComponent } from './recipient-information.component';

describe('RecipientInformationComponent', () => {
  let component: RecipientInformationComponent;
  let fixture: ComponentFixture<RecipientInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipientInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipientInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
