import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule} from '@angular/material/input';
import { MatTreeModule } from '@angular/material/tree';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatMenuModule } from '@angular/material/menu';
import { Tema1Component } from './tema1/tema1.component';
import { Tema2Component } from './tema2/tema2.component';
import { INICIOComponent } from './inicio/inicio.component';
import { Tema3Component } from './tema3/tema3.component';
import { Tema4Component } from './tema4/tema4.component';
import { Tema5Component } from './tema5/tema5.component';
import { Tema6Component } from './tema6/tema6.component';
import { Tema7Component } from './tema7/tema7.component';
import { Tema8Component } from './tema8/tema8.component';
import { Tema9Component } from './tema9/tema9.component';
import { Tema10Component } from './tema10/tema10.component'

@NgModule({
  declarations: [
    AppComponent,
    Tema1Component,
    Tema2Component,
    INICIOComponent,
    Tema3Component,
    Tema4Component,
    Tema5Component,
    Tema6Component,
    Tema7Component,
    Tema8Component,
    Tema9Component,
    Tema10Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatTableModule,
    MatSelectModule,
    MatCardModule,
    HttpClientModule,
    MatProgressBarModule,
    MatMenuModule,
    MatInputModule,
    MatPaginatorModule,
    MatTreeModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
