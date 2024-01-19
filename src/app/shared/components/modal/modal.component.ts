import { Component, Input, OnInit, Output } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IInvoices } from '../../Interfaces/IInvoces.interface';
import { InvocesService } from '../../services/invoces.service';

@Component({
  selector: 'shared-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
@Input() public title? : string;
@Input() public selectedInvoice? : IInvoices;
@Output() public emitInvoiceForm = new EmailValidator;
@Input() public meansPayment? : any[];
@Input() public states? : any[];
@Input() public newInvoice = false;
@Input() public isDelete = false;

paymentSeled! : string;

data = {
  id: 11,
  commerce: {
    code: 1,
    name: 'Comercio de ropa',
    nit: '1452',
    address: 'Calle 30 # 67-89'
  },
  trans: {
    code: 12,
    meansPayment: { code: 32, description: 'Tarjeta de crédito' },
    state: { code: 1, description: 'Aprobado' },
    total: 10,
    date: '10/1/2024'
  },
  user: {
    id: 101010,
    name: 'Stiven Rojas',
    mail: 'stiven@yomail.com'
  }
}
invoiceSelected!: any;

selectedInvoiceForm!: FormGroup;

public invoiceData!: IInvoices;

  constructor(private readonly fb: FormBuilder, private invocesService : InvocesService) { }

  ngOnInit() {
    this.selectedInvoiceForm = this.createInvoiceForm();
    console.log(this.selectedInvoice)
    // this.selectedInvoiceForm = this.createForm();

    this.invocesService.selectedInovice.subscribe((invoice) =>{
      this.invoiceSelected = invoice;
      // this.updateForm();
    })
  }

  createInvoiceForm(): FormGroup {
    return this.fb.group({
      // Define los controles aquí según tus necesidades
      commerce: this.fb.group({
        code: [null, [Validators.required]],
        name: [null, [Validators.required, Validators.maxLength(30)]],
        nit: [null, [Validators.required]],
        address: [null, [Validators.required, Validators.maxLength(50)]],
      }),
      trans: this.fb.group({
        code: [null, [Validators.required]],
        meansPayment: [null, [Validators.required]],
        state: [null, [Validators.required]],
        total: [null, [Validators.required]],
        date: [null, [Validators.required, Validators.maxLength(50)]],
      }),
      user: this.fb.group({
        id: [null, [Validators.required]],
        name: [null, [Validators.required, Validators.maxLength(30)]],
        mail: [null, [Validators.required]],
      }),
    });
  }

  addNewInvoice() {
    const newInvoice = {
      id: Date.now(),
      ...this.selectedInvoiceForm.value,
    };

    // Guarda el nuevo registro usando el servicio
    this.invocesService.saveNewInvoice(newInvoice);

    // Puedes restablecer el formulario después de agregar el nuevo registro si es necesario
    this.selectedInvoiceForm.reset();
  }

  // private updateForm(): void {
  //   this.selectedInvoiceForm.setValue({
  //     commerceCode: this.invoiceSelected?.commerce?.code || '',
  //     commerceName: this.invoiceSelected?.commerce?.name || '',
  //     commerceNit: this.invoiceSelected?.commerce?.nit || '',
  //     commerceAddress: this.invoiceSelected?.commerce?.address || '',
  //     transCode: this.invoiceSelected?.trans?.code || '',
  //     transMeansPayment: this.invoiceSelected?.trans?.meansPayment?.code || '',
  //     transState: this.invoiceSelected?.trans?.state?.code || '',
  //     transTotal: this.invoiceSelected?.trans?.total || '',
  //     transDate: this.invoiceSelected?.trans?.date || '',
  //     userId: this.invoiceSelected?.user?.id || '',
  //     userName: this.invoiceSelected?.user?.name || '',
  //     userMail: this.invoiceSelected?.user?.mail || '',
  //   });
  // }

  guardarCambios(){
    console.log('Guardar cambios:', this.selectedInvoiceForm.value);
  }

  removeInvoce(id : any) {
  this.invocesService.removeInvoice(id);
  }

  goBack(){
    this.selectedInvoice = undefined;
  }

}
