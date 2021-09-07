import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Tema7Service {
  constructor(private http: HttpClient) {}
  upload(file: File, api: string): Observable<any> {
    // Create form data
    const formData = new FormData();
    api = 'https://mundovirtual.cf/api/' + api;

    console.log(file);

    // Store form name as "file" with file data
    formData.append('datos', file, file.name);

    // Make http post request over api
    // with formData as req
    return this.http.post(api, formData);
  }
}
