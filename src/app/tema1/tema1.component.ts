import { Component, Input, OnInit } from '@angular/core';
import { Tema1Service } from './tema1.service';


@Component({
  selector: 'app-tema1',
  templateUrl: './tema1.component.html',
  styleUrls: ['./tema1.component.css'],
})
export class Tema1Component implements OnInit {
  constructor(private fileUploadService: Tema1Service) {}
  fileName = '';
  file: File | null = null; // Variable to store file
  loading: boolean = false; // Flag variable
  llegaronDatos: boolean = false;
  datosImg: string = '';
  graficaImg: string = '';

  onChange(files: any) {
    this.file = files[0];
    if (this.file) {
      this.fileName = this.file.name;
    }
  }
  onUpload() {
    this.loading = !this.loading;
    this.fileUploadService
      .upload(this.file!, `${this.api}`)
      .subscribe((respuesta: any) => {
        this.llegaronDatos = true;
        this.datosImg = 'https://mundovirtual.cf/images/' + respuesta.datos;
        this.graficaImg =
          'https://mundovirtual.cf/images/' + respuesta.grafica;
      });
  }
  ngOnInit(): void {}
  base: string = 'tema1';
  nombreX: string = '';
  nombreY: string = '';
  api: string = '';
  onChangeX(nombreX: any) {
    this.nombreX = nombreX.target.value;
    this.api = this.base + '/' + nombreX.target.value + '/' + this.nombreY;
  }
  onChangeY(nombreY: any) {
    this.nombreY = nombreY.target.value;
    this.api = this.base + '/' + this.nombreX + '/' + nombreY.target.value;
  }
}
