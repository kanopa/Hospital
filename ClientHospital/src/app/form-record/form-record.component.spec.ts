import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRecordComponent } from './form-record.component';

describe('FormRecordComponent', () => {
  let component: FormRecordComponent;
  let fixture: ComponentFixture<FormRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
