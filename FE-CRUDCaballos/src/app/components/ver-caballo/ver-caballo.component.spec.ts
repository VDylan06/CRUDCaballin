import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerCaballoComponent } from './ver-caballo.component';

describe('VerCaballoComponent', () => {
  let component: VerCaballoComponent;
  let fixture: ComponentFixture<VerCaballoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VerCaballoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerCaballoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
