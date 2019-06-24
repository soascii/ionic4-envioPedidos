import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { mapPage } from './map.page';

describe('mapPage', () => {
  let component: mapPage;
  let fixture: ComponentFixture<mapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ mapPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(mapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
