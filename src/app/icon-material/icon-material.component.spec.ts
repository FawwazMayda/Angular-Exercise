import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconMaterialComponent } from './icon-material.component';

describe('IconMaterialComponent', () => {
  let component: IconMaterialComponent;
  let fixture: ComponentFixture<IconMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});