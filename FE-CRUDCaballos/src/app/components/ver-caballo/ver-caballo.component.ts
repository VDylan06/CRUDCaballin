import { Component } from '@angular/core';
import { CaballoService } from '../../services/caballo.service';
import { ActivatedRoute } from '@angular/router';
import { first, Observable } from 'rxjs';
import { Caballo } from '../../interfaces/caballo';

@Component({
  selector: 'app-ver-caballo',
  templateUrl: './ver-caballo.component.html',
  styleUrl: './ver-caballo.component.css'
})
export class VerCaballoComponent {

  id: number; 
  caballo!: Caballo;


  caballo$!: Observable<Caballo>


  constructor (private _caballoService: CaballoService, private aRoute: ActivatedRoute) {
    this.id = Number(this.aRoute.snapshot.paramMap.get('id'));
  }


  ngOnInit(): void {
    this.obtenerCaballo();
    }

  obtenerCaballo() {
    this._caballoService.getCaballo(this.id).subscribe(data =>{
      this.caballo = data;
    })
  }
}
