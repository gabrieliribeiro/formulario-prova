import { Component } from '@angular/core';
import { Veiculo } from '../../models/veiculo';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-input-add-veiculos',
  templateUrl: './input-add-veiculos.component.html',
  styleUrls: ['./input-add-veiculos.component.scss'],
})
export class InputAddVeiculosComponent {
  public veiculo: Veiculo = new Veiculo('', '', 0, '');

  constructor(private service: ServiceService) {}

  public addVeiculo(): void {
    this.service.adiciona(this.veiculo);
    this.veiculo = new Veiculo('', '', 0, '');
    console.log(this.veiculo);
  }
}
