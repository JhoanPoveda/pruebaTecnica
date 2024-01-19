import { Component, Input, OnInit, Output } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IInvoices } from '../../Interfaces/IInvoces.interface';

@Component({
  selector: 'shared-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
@Input() public title? : string;
@Input() public selectedInvoice! : IInvoices;
@Output() public emitInvoiceForm = new EmailValidator;
@Input() public meansPayment? : any[];
@Input() public states? : any[];

paymentSeled! : string;

selectedInvoiceForm!: FormGroup;
public invoiceData!: IInvoices;

  constructor(private readonly fb: FormBuilder) { }

  ngOnInit() {
    this.selectedInvoiceForm = this.instancesForm();
  }

  public instancesForm(): FormGroup {
    let newFormInstance = this.fb.group({
      commerceCode: [this.selectedInvoice.commerce.code || '', [Validators.required]],
      commerceName: [this.selectedInvoice.commerce.name || '', [Validators.required]],
      commerceNit: [this.selectedInvoice.commerce.nit || '', [Validators.required]],
      commerceAddress: [this.selectedInvoice.commerce.address || '', [Validators.required]],
      transCode: [this.selectedInvoice.trans.code || '', [Validators.required]],
      transMeansPayment: [this.selectedInvoice.trans.meansPayment?.code || '', [Validators.required]],
      transState: [this.selectedInvoice.trans.state.code || '', [Validators.required]],
      transTotal: [this.selectedInvoice.trans.total || '', [Validators.required]],
      transDate: [this.selectedInvoice.trans.date || '', [Validators.required]],
      userId: [this.selectedInvoice.user.id || '', [Validators.required]],
      userName: [this.selectedInvoice.user.name || '', [Validators.required]],
      userMail: [this.selectedInvoice.user.mail || '', [Validators.required]],
    })
    return newFormInstance;
  }

  guardarCambios(){
    this.selectedInvoice;
  }

}
