import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarreOrangeComponent } from './carre-orange.component';

describe('CarreOrangeComponent', () => {
  let component: CarreOrangeComponent;
  let fixture: ComponentFixture<CarreOrangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarreOrangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarreOrangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
