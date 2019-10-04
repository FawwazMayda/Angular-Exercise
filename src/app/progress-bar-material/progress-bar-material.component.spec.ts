import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressBarMaterialComponent } from './progress-bar-material.component';

describe('ProgressBarMaterialComponent', () => {
  let component: ProgressBarMaterialComponent;
  let fixture: ComponentFixture<ProgressBarMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressBarMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressBarMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
