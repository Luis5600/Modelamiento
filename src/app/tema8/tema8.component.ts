import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Tema8Service } from './tema8.service';

@Component({
  selector: 'app-tema8',
  templateUrl: './tema8.component.html',
  styleUrls: ['./tema8.component.css'],
})
export class Tema8Component {
  constructor(private fileUploadService: Tema8Service) {}
  fileName = '';
  file: File | null = null; // Variable to store file
  loading: boolean = false; // Flag variable
  llegaronDatos: boolean = false;
  base: string = 'montecarlo';
  nombreX: string = '';
  nombreY: string = '';
  nombreProbabilidades: string = '';
  cantidadSimulaciones: string = '';
  api: string = '';
  rutaImg: string = '';

  displayedColumns1: string[] = [];
  dataSource1 = new MatTableDataSource();
  @ViewChild(MatPaginator)
  paginator1!: MatPaginator;

  displayedColumns2: string[] = [];
  dataSource2 = new MatTableDataSource();
  @ViewChild(MatPaginator)
  paginator2!: MatPaginator;
  onChange(files: any) {
    this.file = files[0];
    if (this.file) {
      this.fileName = this.file.name;
    } else {
      this.fileName = 'Suba un archivo';
    }
  }
  onUpload() {
    this.api = `${this.base}/${this.nombreX}/${this.nombreY}/${this.nombreProbabilidades}/${this.cantidadSimulaciones}`;
    this.loading = !this.loading;
    this.fileUploadService
      .upload(this.file!, `${this.api}`)
      .subscribe((respuesta: any) => {
        this.displayedColumns1 = [
          this.nombreX,
          this.nombreY,
          this.nombreProbabilidades,
          'FDP',
          'Min',
          'Max',
        ];
        this.displayedColumns2 = ['position', 'Suma de las simulaciones'];
        this.dataSource1.data = respuesta.tablaX2;
        this.dataSource2.data = respuesta.sumaSimulaciones;
        this.dataSource1.paginator = this.paginator1;
        this.dataSource2.paginator = this.paginator2;
        document.getElementById('hidden')!.style.display = 'block';
        this.rutaImg = 'https://mundovirtual.cf/images/' + respuesta.grafico;
        this.llegaronDatos = true;
      });
  }

  onChangeX(nombreX: any) {
    this.nombreX = nombreX.target.value;
  }
  onChangeY(nombreY: any) {
    this.nombreY = nombreY.target.value;
  }
  onChangeProbabilidades(nombreProbabilidades: any) {
    this.nombreProbabilidades = nombreProbabilidades.target.value;
  }
  onChangeSimulaciones(cantidadSimulaciones: any) {
    this.cantidadSimulaciones = cantidadSimulaciones.target.value;
  }
}
