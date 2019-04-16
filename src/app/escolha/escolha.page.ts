import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Carro } from '../modelos/Carro';
import { Acessorios } from '../itens/acessorios';


@Component({
  selector: 'app-escolha',
  templateUrl: './escolha.page.html',
  styleUrls: ['./escolha.page.scss'],
})
export class EscolhaPage implements OnInit {
  
 

private carro: Carro
public Acessorios: Acessorios[];

  constructor(private navCtrl: NavController,
    private activatedRoute: ActivatedRoute) { }  

    

  ngOnInit() {
this.activatedRoute.queryParams
.subscribe(params => {
  this.carro = <Carro>JSON.parse(params['carroSelecionado']);
  console.log('O carro que chegou na pagina de escolha é: ' + this.carro.nome);
});

this.Acessorios = [
  {nome: "Freio ABS", preco:800},
  {nome: "Ar-Condicionado", preco:1000},
  {nome: "MP3 Player", preco:500},
]


  }

  voltar() {
    this.navCtrl.back();
  }

}
