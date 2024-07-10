import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoCaballoComponent } from './listado-caballo.component';

describe('ListadoCaballoComponent', () => {
  let component: ListadoCaballoComponent;
  let fixture: ComponentFixture<ListadoCaballoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListadoCaballoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoCaballoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
