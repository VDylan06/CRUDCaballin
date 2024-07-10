import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEditarCaballoComponent } from './agregar-editar-caballo.component';

describe('AgregarEditarCaballoComponent', () => {
  let component: AgregarEditarCaballoComponent;
  let fixture: ComponentFixture<AgregarEditarCaballoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgregarEditarCaballoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarEditarCaballoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
