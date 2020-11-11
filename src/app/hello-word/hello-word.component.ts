import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-word',
  templateUrl: './hello-word.component.html',
  styleUrls: ['./hello-word.component.css']
})
export class HelloWordComponent implements OnInit {

  public nome: string;
  //nome = "muriel"; pode iniciar assim sem definir o tipo;

  constructor() { 
    this.nome = "Muriel"; 
  }
   
  ngOnInit(): void {
  
  
  }

  //public setNome() : void{}
  setNome(event){
    this.nome = "nome"; 
  }

}
