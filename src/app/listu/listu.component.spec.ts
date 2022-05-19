import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListuComponent } from './listu.component';

describe('ListuComponent', () => {
  let component: ListuComponent;
  let fixture: ComponentFixture<ListuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
