import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Tema9Service } from './tema9.service';

@Component({
  selector: 'app-tema9',
  templateUrl: './tema9.component.html',
  styleUrls: ['./tema9.component.css']
})
export class Tema9Component {

  constructor(private fileUploadService: Tema9Service) { }
  datos: any = {
    precio: '',
    orderCosto: '',
    inventarioInicial: '',
    demandDist: '',
    demandP1: '',
    demandP2: '',
    demandP3: '',
    leadTimeDist: '',
    leadTimeP1: '',
    leadTimeP2: '',
    leadTimeP3: '',
    periodos: '',
  };
  loading: boolean = false; // Flag variable
  llegaronDatos: boolean = false;
  base: string = 'inventario';

  api: string = '';
  distribucionesDemanda: any = [
    { value: 'Constant', viewValue: 'Constante' },
    { value: 'Normal', viewValue: 'Normal' },
    { value: 'Triangular', viewValue: 'Triangular' },
  ];

  distribucionesTiempoEntrega: any = [
    { value: 'Constant', viewValue: 'Constante' },
    { value: 'Normal', viewValue: 'Normal' },
    { value: 'Triangular', viewValue: 'Triangular' },
  ];
  displayedColumns1: string[] = [];
  dataSource1 = new MatTableDataSource();
  @ViewChild(MatPaginator)
  paginator1!: MatPaginator;

  onUpload() {
    if (this.datos.demandDist == 'Constant') {
      this.datos.demandP2 = "0.0";
      this.datos.demandP3 = "0.0";
    }
    if (this.datos.demandDist == 'Normal') {
      this.datos.demandP3 = "0.0";
    }
    if (this.datos.leadTimeDist == 'Constant') {
      this.datos.leadTimeP2 = "0.0";
      this.datos.leadTimeP3 = "0.0";
    }
    if (this.datos.leadTimeDist == 'Normal') {
      this.datos.leadTimeP3 = "0.0";
    }
    this.api = `${this.base}/${this.datos.precio}/${this.datos.orderCosto}/${this.datos.inventarioInicial}/${this.datos.demandDist}/${this.datos.demandP1}/${this.datos.demandP2}/${this.datos.demandP3}/${this.datos.leadTimeDist}/${this.datos.leadTimeP1}/${this.datos.leadTimeP2}/${this.datos.leadTimeP3}/${this.datos.periodos}`;
    this.loading = !this.loading;
    this.fileUploadService
      .upload(`${this.api}`)
      .subscribe((respuesta: any) => {
        this.displayedColumns1 = [
          'INV_INICIAL',
          'INV_NETO_INICIAL',
          'DEMANDA',
          'INV_FINAL',
          'INV_FINAL_NETO',
          'VENTAS_PERDIDAS',
          'INV_PROMEDIO',
          'CANT_ORDENAR',
          'TIEMPO_LLEGADA'
        ];
        this.dataSource1.data = respuesta.tabla;
        this.dataSource1.paginator = this.paginator1;
        document.getElementById('hidden')!.style.display = 'block';
        this.llegaronDatos = true;
      });
  }


}