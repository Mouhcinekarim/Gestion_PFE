import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPfeV2Component } from './list-pfe-v2.component';

describe('ListPfeV2Component', () => {
  let component: ListPfeV2Component;
  let fixture: ComponentFixture<ListPfeV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPfeV2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPfeV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
