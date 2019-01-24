import { Component, OnInit } from '@angular/core';
import { NgbModal,NgbModalRef, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DialogAlertComponent } from './dialog-alert/dialog-alert.component';
import { FormModalComponent } from './form-modal/form-modal.component';
import { LoadingService } from './services/loading.service';


@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {

  // public loading = false;

  constructor(
    private modalService: NgbModal,   
    // private mensagem: ToastrService,
    private load: LoadingService,

  ) { }

  ngOnInit() {
   
  }

  teste(){
    console.log("ativou")
    this.load.loading = true;
    this.load.loading = false;
  }

  dialogAlert() {
    const modalRef = this.modalService.open(DialogAlertComponent);
    modalRef.componentInstance.titulo = 'Atenção';
    modalRef.componentInstance.corpo = 'Deseja realmente excluir esse contato?';
    modalRef.componentInstance.btnpositivo = 'SIM';
    modalRef.componentInstance.btnnegativo = 'NÃO';

    modalRef.result.then((result) => {
      if (result) {
        console.log("Confirmado")
      } else {
        console.log("Cancelado")
      }
    }).catch((error) => {
       console.log(error);
    });
  }

  openFormModal(c) {
    const modalRef = this.modalService.open(FormModalComponent, { size: 'lg' });
    if (c != undefined) {
      // modalRef.componentInstance.docente = c;
    }
    modalRef.result.then((result) => {
     console.log(result);
    //  this.carregaDados();
    }).catch((error) => {
     console.log(error);
      // this.load.loading = false;
    });
         }

}
