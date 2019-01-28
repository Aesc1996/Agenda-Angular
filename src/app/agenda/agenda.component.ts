import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbModalRef, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DialogAlertComponent } from './dialog-alert/dialog-alert.component';
import { FormModalComponent } from './form-modal/form-modal.component';
import { LoadingService } from './services/loading.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {

  novoId: any;

  contatos: any = [
    { id: 0, nome: 'Darth Vader', telefone: '1533730000' },
    { id: 1, nome: 'Leia Organa', telefone: '1533741111' },
    { id: 2, nome: 'Luke Skywalker', telefone: '1533792222' },
    { id: 3, nome: 'Han Solo', telefone: '1533733333' },
    { id: 4, nome: 'Obi-wan Kenobi', telefone: '1533764444' },
    { id: 5, nome: 'Chewbacca', telefone: '1533765555' }];

  constructor(
    private modalService: NgbModal,
    private mensagem: ToastrService,
    private load: LoadingService,

  ) { }

  ngOnInit() {
    this.novoId = this.contatos.reduce((oa, u) => Math.max(oa, u.id), 0);
  }

  dialogAlert(contato) {
    const modalRef = this.modalService.open(DialogAlertComponent);
    modalRef.componentInstance.titulo = 'Atenção';
    modalRef.componentInstance.corpo = 'Deseja realmente excluir esse contato?';
    modalRef.componentInstance.btnpositivo = 'SIM';
    modalRef.componentInstance.btnnegativo = 'NÃO';

    modalRef.result.then((result) => {
      this.load.loading = true;
      if (result) {
        const index: number = this.contatos.indexOf(contato);

        if (index !== -1) {
          this.contatos.splice(index, 1);
        }
        this.mensagem.success(" Sucesso ao excluir contato! ", 'Sucesso!');
      } 
      this.load.loading = false;
    }).catch((error) => {
      console.log(error);
    });
  }

  openFormModal(c) {
    const modalRef = this.modalService.open(FormModalComponent, { size: 'lg' });
    if (c != undefined) {
      modalRef.componentInstance.contato = c;
    }
    modalRef.result.then((result) => {
      this.load.loading = true;
      if (result.id == null) {
        this.mensagem.success(" Sucesso ao adiconar novo contato! ", 'Sucesso!');
        this.contatos.push({
          id: this.novoId + 1,
          nome: result.nome,
          telefone: result.telefone
        })
        this.novoId = this.novoId + 1;
        this.load.loading = false;
      }
      if (result.id == c.id) {
        this.mensagem.success(" Sucesso ao editar o contato! ", 'Sucesso!');
        this.load.loading = false;
      }
    }).catch((error) => {
      console.log(error);
    });
  }

}
