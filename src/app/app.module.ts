import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxLoadingModule } from 'ngx-loading';
import {NgxMaskModule} from 'ngx-mask';
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgendaComponent } from './agenda/agenda.component';
import { FormModalComponent } from './agenda/form-modal/form-modal.component';
import { DialogAlertComponent } from './agenda/dialog-alert/dialog-alert.component';
import { LoadingService } from './agenda/services/loading.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    AgendaComponent,
    FormModalComponent,
    DialogAlertComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgxLoadingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxMaskModule.forRoot(),
    ToastrModule.forRoot(),
    BrowserAnimationsModule,  
    CommonModule 

  ],
  exports: [
    DialogAlertComponent
  ],
  providers: [
    LoadingService
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
