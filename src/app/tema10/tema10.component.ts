import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Tema10Service } from './tema10.service';

@Component({
  selector: 'app-tema10',
  templateUrl: './tema10.component.html',
  styleUrls: ['./tema10.component.css'],
})
export class Tema10Component {
  constructor(private fileUploadService: Tema10Service) { }
  datos: any = {
    lambda: '',
    nu: '',

  };
  loading: boolean = false; // Flag variable
  llegaronDatos: boolean = false;
  base: string = 'lineaEspera';

  api: string = '';
  grafica: string = '';
  displayedColumns1: string[] = [];
  displayedColumns2: string[] = [];
  dataSource1 = new MatTableDataSource();
  @ViewChild(MatPaginator)
  paginator1!: MatPaginator;

  dataSource2 = new MatTableDataSource();
  @ViewChild(MatPaginator)
  paginator2!: MatPaginator;

  categorias: any = ['count', 'mean', 'std', 'min', '25%', '50%', '75%', 'max']

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
    this.api = `${this.base}/${this.datos.lambda}/${this.datos.nu}`
    this.loading = !this.loading;
    this.fileUploadService
      .upload(`${this.api}`)
      .subscribe((respuesta: any) => {
        this.displayedColumns1 = [
          'A_LLEGADA',
          'A_SERVICIO',
          'TIE_LLEGADA',
          'TIE_SERVICIO',
          'TIE_EXACTO_LLEGADA',
          'TIE_INI_SERVICIO',
          'TIE_FIN_SERVICIO',
          'TIE_ESPERA',
          'TIE_EN_SISTEMA'
        ];
        this.displayedColumns2 = [
          'CATEGORIAS',
          'A_LLEGADA',
          'A_SERVICIO',
          'TIE_LLEGADA',
          'TIE_SERVICIO',
          'TIE_EXACTO_LLEGADA',
          'TIE_INI_SERVICIO',
          'TIE_FIN_SERVICIO',
          'TIE_ESPERA',
          'TIE_EN_SISTEMA'
        ];
        this.dataSource1.data = respuesta.tabla;
        this.dataSource1.paginator = this.paginator1;

        this.dataSource2.data = respuesta.tablaDescribe;
        this.dataSource2.paginator = this.paginator2;

        this.grafica = 'https://mundovirtual.cf/images/' + respuesta.grafico;

        console.log(respuesta.tablaDescribe);
        document.getElementById('hidden')!.style.display = 'block';
        this.llegaronDatos = true;
      });
  }
}
