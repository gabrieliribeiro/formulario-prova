export class Veiculo {
  marca: string;
  placa: string;
  ano: number;
  tipo: string;

  constructor(marca: string, placa: string, ano: number, tipo: string) {
    this.marca = marca;
    this.placa = placa;
    this.ano = ano;
    this.tipo = tipo;
  }
}
