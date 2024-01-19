import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CRUDModule } from './CRUD/CRUD.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimengComponentsModule } from './shared/primeNg/primeNg.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CRUDModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    PrimengComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
