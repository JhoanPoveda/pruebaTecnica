import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { invoicesMock, meansPaymentMock, statesMock } from 'src/app/Mocks/invoces.mock';
import { IInvoices } from '../Interfaces/IInvoces.interface';
@Injectable({
  providedIn: 'root'
})
export class InvocesService {
  currentInvoice = new BehaviorSubject<IInvoices | null>(null);
  selectedInovice = this.currentInvoice.asObservable();



  private localStorageKey = 'invoicesData';
  private localStoragePayment = 'payment';
  private localStorageStates = 'states';

  // Obtener datos de localStorage o utilizar datos mock si no hay datos almacenados
  private data: IInvoices[] = JSON.parse(localStorage.getItem(this.localStorageKey) ?? 'null' ) || invoicesMock;

  private payment: any[] = JSON.parse(localStorage.getItem(this.localStoragePayment) ?? 'null' ) || meansPaymentMock;

  private states: any[] = JSON.parse(localStorage.getItem(this.localStorageStates) ?? 'null' ) || statesMock;

  public getInvoicesData(): IInvoices[] {
    console.log(this.data);
    localStorage.setItem(this.localStoragePayment, JSON.stringify(this.payment));
    localStorage.setItem(this.localStorageStates, JSON.stringify(this.states));
    return this.data;
  }

  public getPayment() : any[]{
    return this.payment;
  }

  public getStates() : any[]{
    return this.states;
  }

  // Guardar datos en localStorage
  public saveInvoicesData(data: IInvoices[]): void {
    data = this.data;
    localStorage.setItem(this.localStorageKey, JSON.stringify(data));
  }

  // Restablecer datos a los mock originales y limpiar localStorage
  public resetInvoicesData(): void {
    this.data = invoicesMock;
    localStorage.removeItem(this.localStorageKey);
  }


  selectInvoice(invoice: IInvoices) {
    this.currentInvoice.next(invoice);
  }

  removeInvoice(id : number) : void {
    this.data = this.data.filter((invoice) => invoice.id !== id);
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.data));
  }

  saveNewInvoice(newInvoice: any): void {
    // Obtén la lista actual de facturas del localStorage
    const invoices = JSON.parse(localStorage.getItem(this.localStorageKey) || '[]');

    // Agrega el nuevo registro
    invoices.push(newInvoice);

    // Guarda la lista actualizada en el localStorage
    localStorage.setItem(this.localStorageKey, JSON.stringify(invoices));
  }
}
