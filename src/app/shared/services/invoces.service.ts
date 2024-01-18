import { Injectable } from '@angular/core';
import { invoicesMock } from 'src/app/Mocks/invoces.mock';
import { IInvoices } from '../Interfaces/IInvoces.interface';
@Injectable({
  providedIn: 'root'
})
export class InvocesService {
  private localStorageKey = 'invoicesData';

  // Obtener datos de localStorage o utilizar datos mock si no hay datos almacenados
  private data: IInvoices[] = JSON.parse(localStorage.getItem(this.localStorageKey) ?? 'null' ) || invoicesMock;

  public getInvoicesData(): IInvoices[] {
    console.log(this.data);
    return this.data;
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

}
