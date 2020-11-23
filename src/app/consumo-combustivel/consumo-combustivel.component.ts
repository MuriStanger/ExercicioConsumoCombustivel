import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consumo-combustivel',
  templateUrl: './consumo-combustivel.component.html',
  styleUrls: ['./consumo-combustivel.component.css']
})
export class ConsumoCombustivelComponent implements OnInit {

  litro: number;
  distancia: number;

  calculo: number;

  constructor() {      
    this.litro = 0;
    this.distancia = 0;
    this.calculo = 0;
  }

  realizaCalculo():void{
    this.calculo = this.distancia / this.litro;
  }
   

  ngOnInit(): void {
  }

}
