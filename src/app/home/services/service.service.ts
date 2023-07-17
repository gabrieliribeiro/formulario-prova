import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  public emitEvent = new EventEmitter;

  private lista: Array<string> = [];

  public getLista(): Array<any>{
    return this.lista;
  }

  public adiciona(veiculo:any):void{
    this.lista.push(veiculo);
    this.emitEvent.emit(this.lista.length);
  }

  public edita(veiculo:any):void{
    this.lista.push(veiculo);
    this.emitEvent.emit(this.lista.length);
  }

  constructor() { }
}
