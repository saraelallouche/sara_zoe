import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarreVertComponent } from './carre-vert.component';

describe('CarreVertComponent', () => {
  let component: CarreVertComponent;
  let fixture: ComponentFixture<CarreVertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarreVertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarreVertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
