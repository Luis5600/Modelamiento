import { ComponentFixture, TestBed } from '@angular/core/testing';

import { INICIOComponent } from './inicio.component';

describe('INICIOComponent', () => {
  let component: INICIOComponent;
  let fixture: ComponentFixture<INICIOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ INICIOComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(INICIOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
