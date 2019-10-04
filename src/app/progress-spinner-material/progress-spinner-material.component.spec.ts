import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressSpinnerMaterialComponent } from './progress-spinner-material.component';

describe('ProgressSpinnerMaterialComponent', () => {
  let component: ProgressSpinnerMaterialComponent;
  let fixture: ComponentFixture<ProgressSpinnerMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressSpinnerMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressSpinnerMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
