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
  invocesSeleted? : IInvoices | null;
  title = '';

  isEdit = false;

  meansPayment! : any[];
  states! : any[];

  newData = [
    {
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
    this.meansPayment = this.invoicesServices.getPayment();
    this.states = this.invoicesServices.getStates();
  }
  seleccionarInvoice(invoice: IInvoices): void {
    this.invocesSeleted = { ...invoice }; // Hacemos una copia para evitar modificar directamente el objeto original
  }

  showModalEdit(invoice : IInvoices){
    this.seleccionarInvoice(invoice);
    this.emitInvoce?.emit(invoice);
    this.isEdit = true;
    this.title = "Editar factura"
  }
  createInvoice(){
    this.isEdit = true;
    this.title = "Nueva factura"
  }

  onSave(newData : any){
    this.invoicesServices.saveInvoicesData(this.newData)
  }
}
