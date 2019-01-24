import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxLoadingModule } from 'ngx-loading';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgendaComponent } from './agenda/agenda.component';
import { FormModalComponent } from './agenda/form-modal/form-modal.component';
import { DialogAlertComponent } from './agenda/dialog-alert/dialog-alert.component';
import { LoadingService } from './agenda/services/loading.service';




@NgModule({
  declarations: [
    AppComponent,
    AgendaComponent,
    FormModalComponent,
    DialogAlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgxLoadingModule,


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
