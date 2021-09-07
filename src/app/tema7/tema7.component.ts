import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Tema7Service } from './tema7.service';

@Component({
  selector: 'app-tema7',
  templateUrl: './tema7.component.html',
  styleUrls: ['./tema7.component.css'],
})
export class Tema7Component {
  constructor(private fileUploadService: Tema7Service) {}

  fileName = '';
  file: File | null = null; // Variable to store file
  loading: boolean = false; // Flag variable
  llegaronDatos: boolean = false;
  base: string = 'regresioncuadratica';
  nombreX: string = '';
  nombreY: string = '';
  api: string = '';
  displayedColumns: string[] = [];
  valoresP: string = '';
  rutaImg: string = '';

  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  onChange(files: any) {
    this.file = files[0];
    if (this.file) {
      this.fileName = this.file.name;
    } else {
      this.fileName = 'Suba un archivo';
    }
  }
  onUpload() {
    this.api = `${this.base}/${this.nombreY}`;
    this.loading = !this.loading;
    this.fileUploadService
      .upload(this.file!, `${this.api}`)
      .subscribe((respuesta: any) => {
        this.displayedColumns = ['Datos x', 'Datos y', 'Regresión Cuadrática'];
        console.log(respuesta.dataframe);
        this.valoresP = respuesta.valores;
        this.dataSource.data = respuesta.dataframe;
        this.dataSource.paginator = this.paginator;
        document.getElementById('hidden')!.style.display = 'block';
        this.rutaImg = 'https://mundovirtual.cf/images/' + respuesta.grafica;
        this.llegaronDatos = true;
      });
  }

  onChangeX(nombreX: any) {
    this.nombreX = nombreX.target.value;
  }
  onChangeY(nombreY: any) {
    this.nombreY = nombreY.target.value;
  }
}
