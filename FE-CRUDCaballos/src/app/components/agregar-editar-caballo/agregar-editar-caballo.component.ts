import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Caballo } from '../../interfaces/caballo';
import { C } from '@angular/cdk/keycodes';
import { first } from 'rxjs';
import { CaballoService } from '../../services/caballo.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-agregar-editar-caballo',
  templateUrl: './agregar-editar-caballo.component.html',
  styleUrls: ['./agregar-editar-caballo.component.css']
})

export class AgregarEditarCaballoComponent implements OnInit{

  loading: boolean = false;
  form: FormGroup;
  id: number;
  caballin: string = 'Agregar'

  constructor(private fb: FormBuilder, private _caballoService: CaballoService,
    private _snackBar: MatSnackBar,
    private router: Router,
    private aRoute: ActivatedRoute
  ) {
    this.form = this.fb.group({
      nombre: ['', [Validators.required]],
      edad: ['', [Validators.required]],
      raza: ['', [Validators.required]],
      color: ['', [Validators.required]],
      peso: ['', [Validators.required]]
    });

    this.id = Number(this.aRoute.snapshot.paramMap.get('id'));
    console.log(this.id)

  }
  
  ngOnInit(): void {

    if(this.id != 0) {
      this.caballin = 'Editar';
      this.obtenerCaballo(this.id)
    }
  }

  obtenerCaballo(id: number) {
    this._caballoService.getCaballo(id).subscribe(data => {
      this.form.setValue({
        nombre: data.nombre,
        raza: data.raza,
        color: data.color,
        edad: data.edad,
        peso: data.peso
      })
      this.loading = false;
    })
  }


  agregarEditarCaballo() {
    /* const nombre = this.form.get('nombre')?.value; */

    // Armamos el objeto
    const caballo: Caballo = {
      nombre: this.form.value.nombre,
      raza: this.form.value.raza,
      color: this.form.value.color,
      edad: this.form.value.edad,
      peso: this.form.value.peso
    }

    if(this.id != 0) {
      caballo.id = this.id;
      this.editarCaballo(this.id, caballo);
    } else {
      this.agregarCaballo(caballo);
    }
  }
    
  editarCaballo(id: number, caballo: Caballo) {
    this._caballoService.updateCaballo(id, caballo).subscribe(() => {
      console.log();
      this.mensajeExito2();
      this.router.navigate(['/ListaDeCaballos']);
    })
  }

  
  agregarCaballo(caballo: Caballo) {
    this._caballoService.addCaballo(caballo).subscribe(data => {
      this.mensajeExito();
      this.router.navigate(['/ListaDeCaballos']);
    })
}


  mensajeExito() {
    this._snackBar.open('El caballo fue agregado con exito', '', {
      duration: 4000
    })
  }

  
  mensajeExito2() {
    this._snackBar.open('El caballo fue editado con exito', '', {
      duration: 4000
    })
  }



}