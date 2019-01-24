import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgendaComponent } from './agenda/agenda.component';
import { FormModalComponent } from './agenda/form-modal/form-modal.component';
import { DialogAlertComponent } from './agenda/dialog-alert/dialog-alert.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'agenda',
    pathMatch: 'full'
  },
  {
    path: 'agenda',
    component: AgendaComponent,
    children: [
      { path: '', component: AgendaComponent }
    ]
  },
  {
    path: 'formmodal',
    component: FormModalComponent,
  },
  {
    path: 'dialogalert',
    component: DialogAlertComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
