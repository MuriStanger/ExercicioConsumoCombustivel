import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumoCombustivelComponent } from './consumo-combustivel.component';

describe('ConsumoCombustivelComponent', () => {
  let component: ConsumoCombustivelComponent;
  let fixture: ComponentFixture<ConsumoCombustivelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumoCombustivelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumoCombustivelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
