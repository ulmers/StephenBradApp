import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthRecFormComponent } from './health-rec-form.component';

describe('HealthRecFormComponent', () => {
  let component: HealthRecFormComponent;
  let fixture: ComponentFixture<HealthRecFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthRecFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthRecFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
