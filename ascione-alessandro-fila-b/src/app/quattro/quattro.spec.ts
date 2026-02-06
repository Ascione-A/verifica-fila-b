import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Quattro } from './quattro';

describe('Quattro', () => {
  let component: Quattro;
  let fixture: ComponentFixture<Quattro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Quattro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Quattro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
