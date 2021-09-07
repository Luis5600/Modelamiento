import { INICIOComponent } from './inicio/inicio.component';
import { Tema1Component } from './tema1/tema1.component';
import { Tema2Component } from './tema2/tema2.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tema3Component } from './tema3/tema3.component';
import { Tema4Component } from './tema4/tema4.component';
import { Tema5Component } from './tema5/tema5.component';
import { Tema6Component } from './tema6/tema6.component';
import { Tema7Component } from './tema7/tema7.component';
import { Tema8Component } from './tema8/tema8.component';
import { Tema9Component } from './tema9/tema9.component';
import { Tema10Component } from './tema10/tema10.component';



const routes: Routes = [
  {path: '', component: INICIOComponent},
  {path: 'Extraccion de Datos', component: Tema1Component},
  {path: 'Media, Mediana, Moda', component: Tema2Component},
  {path: 'Numeros aleatorios', component: Tema3Component},
  {path: 'Promedio movil', component: Tema4Component},
  {path: 'Suavizamiento', component: Tema5Component},
  {path: 'Regresion lineal', component: Tema6Component},
  {path: 'Regresion cuadratica', component: Tema7Component},
  {path: 'Montecarlo', component: Tema8Component},
  {path: 'Inventarios', component: Tema9Component},
  {path: 'Linea de espera', component: Tema10Component},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
