import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './components/modal/modal.component';
import { SearchBoxComponent } from './components/searchBox/searchBox.component';
import { InvocesService } from './services/invoces.service';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [InvocesService],
  declarations:[SearchBoxComponent, ModalComponent],
  exports:[SearchBoxComponent, ModalComponent]
})
export class SharedModule { }
