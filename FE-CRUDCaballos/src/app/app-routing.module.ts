import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//componentes


import { ListadoCaballoComponent } from './components/listado-caballo/listado-caballo.component';
import { AgregarEditarCaballoComponent } from './components/agregar-editar-caballo/agregar-editar-caballo.component';
import { VerCaballoComponent } from './components/ver-caballo/ver-caballo.component';


const routes: Routes = [

  { path: '', redirectTo: 'ListaDeCaballos', pathMatch: 'full'},
  { path: 'ListaDeCaballos', component: ListadoCaballoComponent },
  { path: 'AgregarCaballos', component: AgregarEditarCaballoComponent  },
  { path: 'VerCaballos/:id', component: VerCaballoComponent},
  { path: 'EditarCaballos/:id', component: AgregarEditarCaballoComponent},
  { path: '**', redirectTo: 'ListaDeCaballos', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
