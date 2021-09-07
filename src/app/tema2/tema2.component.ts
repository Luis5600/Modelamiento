import { Component, OnInit } from '@angular/core';
import { Tema2Service } from '../tema2/tema2.service';

@Component({
  selector: 'app-tema2',
  templateUrl: './tema2.component.html',
  styleUrls: ['./tema2.component.css'],
})
export class Tema2Component implements OnInit {
  constructor(private fileUploadService: Tema2Service) {}
  ngOnInit(): void {}
  fileName = '';
  file: File | null = null; // Variable to store file
  llegaronDatos: boolean = false;
  nombreColumna: string = '';
  api: string = '';
  base: string = 'mmm';

  media: string = '';
  mediana: string = '';
  moda: string = '';

  onChangeColumna(nombreColumna: any) {
    this.nombreColumna = nombreColumna.target.value;
    this.api = this.base + '/' + this.nombreColumna;
  }
  onChange(files: any) {
    this.file = files[0];
    if (this.file) {
      this.fileName = this.file.name;
    } else {
      this.fileName = 'Suba un archivo';
    }
  }
  onUpload() {
    this.fileUploadService
      .upload(this.file!, `${this.api}`)
      .subscribe((respuesta: any) => {
        this.llegaronDatos = true;
        this.media = respuesta.media;
        this.mediana = respuesta.mediana;
        this.moda = respuesta.moda;
      });
  }
}
