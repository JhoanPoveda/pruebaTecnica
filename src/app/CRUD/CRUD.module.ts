import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrimengComponentsModule } from '../shared/primeNg/primeNg.module';
import { InvocesService } from '../shared/services/invoces.service';
import { SharedModule } from './../shared/shared.module';
import { TablaComponent } from './components/tabla/tabla.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PrimengComponentsModule
  ],
  declarations:[
    HomePageComponent,
    TablaComponent
  ],
  exports: [
    HomePageComponent,
    TablaComponent
  ],
  providers: [InvocesService],
})
export class CRUDModule { }
