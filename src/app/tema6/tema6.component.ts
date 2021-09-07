import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Tema6Service } from './tema6.service';

@Component({
  selector: 'app-tema6',
  templateUrl: './tema6.component.html',
  styleUrls: ['./tema6.component.css'],
})
export class Tema6Component {
  constructor(private fileUploadService: Tema6Service) {}

  fileName = '';
  file: File | null = null; // Variable to store file
  loading: boolean = false; // Flag variable
  llegaronDatos: boolean = false;
  base: string = 'regresionlineal';
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
        this.displayedColumns = ['Datos x', 'Datos y', 'Regresión Lineal'];
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
