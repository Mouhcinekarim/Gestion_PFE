import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPfeComponent } from './add-pfe.component';

describe('AddPfeComponent', () => {
  let component: AddPfeComponent;
  let fixture: ComponentFixture<AddPfeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPfeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPfeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
