/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LightclassicComponent } from './light.component';

describe('LightclassicComponent', () => {
  let component: LightclassicComponent;
  let fixture: ComponentFixture<LightclassicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightclassicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightclassicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
