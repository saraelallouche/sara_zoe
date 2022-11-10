import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarreJauneComponent } from './carre-jaune.component';

describe('CarreJauneComponent', () => {
  let component: CarreJauneComponent;
  let fixture: ComponentFixture<CarreJauneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarreJauneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarreJauneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
