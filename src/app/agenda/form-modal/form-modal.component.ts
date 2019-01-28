import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.css']
})
export class FormModalComponent implements OnInit {

  @Input()
  contato: any;
  formContato: FormGroup;
  editar: boolean = true;

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private mensagem: ToastrService,
  ) {
  }

  ngOnInit() {
    if (this.contato == undefined) {
      this.contato = new Input
      this.editar = false;
    }
    this.createForm();
  }

  createForm() {
    this.formContato = this.formBuilder.group({
      id: [this.contato.id],
      nome: [this.contato.nome, [Validators.required, this.noWhitespaceValidator]],
      telefone: [this.contato.telefone, [Validators.required, Validators.minLength(10)]]
    });
  }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }

  submitForm() {
    let {nome, telefone} = this.formContato.controls
    if (!this.formContato.valid) {
      if (!nome.valid) {
        this.mensagem.error(" Campo nome obrigatório! ", 'Erro!!!');
      }
      if (!telefone.valid) {
        this.mensagem.error(" Campo telefone inválido! ", 'Erro!!!');
      }  
    }
    else{
    this.contato.id = this.formContato.value.id;
    this.contato.nome = this.formContato.value.nome;
    this.contato.telefone = this.formContato.value.telefone;
    this.activeModal.close(this.contato);
    }
  }

  public noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
}

}
