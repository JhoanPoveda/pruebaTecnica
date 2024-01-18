import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-searchBox',
  templateUrl: './searchBox.component.html',
})
export class SearchBoxComponent   {
  @Input() public placeholder : string = '';

  @Output() public onValue = new EventEmitter<string>();

  emitValue(value: string):void{
    this.onValue.emit(value);
  }
}
