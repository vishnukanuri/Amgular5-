import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent } from './app.component';
import { AddressComponent } from './address/address.component';
import { RetriveDataComponent } from './retrive-data/retrive-data.component';

import * as $ from 'jquery';


@NgModule({
  declarations: [
    AppComponent,
    AddressComponent,
    RetriveDataComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ModalModule.forRoot(),
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
