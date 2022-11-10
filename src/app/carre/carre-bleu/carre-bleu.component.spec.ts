import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarreBleuComponent } from './carre-bleu.component';

describe('CarreBleuComponent', () => {
  let component: CarreBleuComponent;
  let fixture: ComponentFixture<CarreBleuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarreBleuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarreBleuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
