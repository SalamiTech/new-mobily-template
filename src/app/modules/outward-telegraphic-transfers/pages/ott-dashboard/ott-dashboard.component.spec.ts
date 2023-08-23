import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OttDashboardComponent } from './ott-dashboard.component';

describe('OttDashboardComponent', () => {
  let component: OttDashboardComponent;
  let fixture: ComponentFixture<OttDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OttDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OttDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
