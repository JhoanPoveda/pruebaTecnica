import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IInvoices } from 'src/app/shared/Interfaces/IInvoces.interface';
import { InvocesService } from 'src/app/shared/services/invoces.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  @Output() emitInvoce? = new EventEmitter()
  invoices? : any = [];
  selectedInvoice!: any;
  invocesSeleted? : IInvoices | null;
  title = '';
  isDelete = false

  isEdit = false;

  meansPayment! : any[];
  states! : any[];

  newData = [
    {
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
  ]

  constructor(
    private invoicesServices : InvocesService  ) {}

  ngOnInit() {
    this.invoices = this.invoicesServices.getInvoicesData();
    console.log(this.invoices)
    this.meansPayment = this.invoicesServices.getPayment();
    this.states = this.invoicesServices.getStates();
  }

  showModalEdit(invoice : IInvoices){
    console.log(invoice);
    this.emitInvoce?.emit(invoice);
    this.isEdit = true;
    this.title = "Editar factura"
  }
  createInvoice(){
    this.isEdit = true;
    this.title = "Nueva factura"
  }

  showInvoice(invoice : IInvoices){
    let id = invoice.id
    console.log(invoice, id);
    this.isEdit = false;
    this.isDelete = false;
    this.title = `Factura ${{id}}`;
    this.selectedInvoice = invoice
  }

  deleteInvoice(invoice : IInvoices){
    this.isEdit = false;
    this.isDelete = true;
    this.title = `Eliminar factura`;
    this.selectedInvoice = invoice
  }


  onSave(newData : any){
    this.invoicesServices.saveInvoicesData(this.newData)
  }
}
