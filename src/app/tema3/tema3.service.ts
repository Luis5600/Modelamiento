import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
providedIn: 'root',
})
export class Tema3Service {
constructor(private http: HttpClient) {}
upload(api: string): Observable<any> {
    // Create form data
    api = 'https://mundovirtual.cf/api/' + api;
    console.log(api);

    // Store form name as "file" with file data

    // Make http post request over api
    // with formData as req
    return this.http.get(api);
}
}