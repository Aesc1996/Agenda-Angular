import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dialog-alert',
  templateUrl: './dialog-alert.component.html',
  styleUrls: ['./dialog-alert.component.css']
})
export class DialogAlertComponent implements OnInit {

  escolha: boolean 
  
  @Input()
  titulo:any
  corpo:any
  btnpositivo:any
  btnnegativo:any

  constructor(
    public activeModal: NgbActiveModal,
  ) { }

  ngOnInit() {
    this.escolha =  false;
  }

  confirma() {
    this.escolha =  true;
    this.activeModal.close(this.escolha);
  }

  cancela() {
    this.activeModal.close(this.escolha);
  }
    


}
