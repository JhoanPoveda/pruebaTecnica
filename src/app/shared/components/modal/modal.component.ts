import { Component, Input, OnInit } from '@angular/core';
import { IInvoices } from '../../Interfaces/IInvoces.interface';

@Component({
  selector: 'shared-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
@Input() public title? : string;
@Input() public selectedInvoice! : IInvoices;
  constructor() { }

  ngOnInit() {
  }

  guardarCambios(){
    this.selectedInvoice;
  }

}
