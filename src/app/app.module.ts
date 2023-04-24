import { NgModule } from '@angular/core';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { UploaderModule } from '@syncfusion/ej2-angular-inputs';

import { UploadsModule } from "@progress/kendo-angular-upload";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {  ReactiveFormsModule } from "@angular/forms";
import {FileSelectModule } from '@progress/kendo-angular-upload';
import { ModalComponent } from './modal/modal.component';
import { MainLoaderService } from './components/loaders/main-loader.service';
import { ApiService } from './services/api/api.service';
import { ResultsComponent } from './results/results.component';
import { SearchTableComponent } from './components/search/search-table/search-table.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ModalComponent,
    ResultsComponent,
    SearchTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    UploadsModule,
    BrowserAnimationsModule,
    ButtonsModule,
    FormsModule,
    ReactiveFormsModule,
    UploaderModule,
    FileSelectModule,
    NgbModule,
   
    
  ],
  
  providers: [
    ApiService,MainLoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
