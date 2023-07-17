import { Component, OnInit } from '@angular/core';
import { Veiculo } from '../../models/veiculo';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-tabela-veiculos',
  templateUrl: './tabela-veiculos.component.html',
  styleUrls: ['./tabela-veiculos.component.scss']
})
export class TabelaVeiculosComponent implements OnInit {
  isTipo = true;
  public veiculoList: Array<Veiculo> = [];

  public selectedItem: Veiculo | null = null;
  public editingMode = false;

  constructor(private service: ServiceService){};

  ngOnInit(): void {
    this.veiculoList = this.service.getLista();
  }

  public deleteItem(event: number) {
    return this.veiculoList.splice(event, 1);
  }

  public editaItem(veiculo: Veiculo): void {
    this.selectedItem = veiculo;
  }   
  

  public validationInput(event: string, index: number) {
    if (!event.length) {
      const confirm = window.confirm('A tarefa esta vazia, deseja deletar?');
      if (confirm) {
        this.deleteItem(index);
      }
    }
  }
}
