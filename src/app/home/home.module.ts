import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { InputAddVeiculosComponent } from './components/input-add-veiculos/input-add-veiculos.component';
import { TabelaVeiculosComponent } from './components/tabela-veiculos/tabela-veiculos.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    InputAddVeiculosComponent,
    TabelaVeiculosComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class HomeModule { }
