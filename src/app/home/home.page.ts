import { Component, OnInit } from '@angular/core';
import { Carro } from '../modelos/carro';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  
  public carros: Carro[];

  ngOnInit(): void {
    this.carros = [
      {
        nome:"Fusca",
        preco: 1000
      },
      {
        nome:"Gol",
        preco: 2000
      },
      {
        nome:"Ferrari",
        preco: 2000
      },
      {
        nome:"teste",
        preco: 5000
      },

      {
        nome:"Astra",
        preco: 3000
      },

    ]
    
  }
}
