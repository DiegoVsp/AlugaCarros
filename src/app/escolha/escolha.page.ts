import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Carro } from '../modelos/Carro';


@Component({
  selector: 'app-escolha',
  templateUrl: './escolha.page.html',
  styleUrls: ['./escolha.page.scss'],
})
export class EscolhaPage implements OnInit {
  
  public toggle:boolean = true;

private carro: Carro

  constructor(private navCtrl: NavController,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
this.activatedRoute.queryParams
.subscribe(params => {
  this.carro = <Carro>JSON.parse(params['carroSelecionado']);
  console.log('O carro que chegou na pagina de escolha é: ' + this.carro.nome);
});
  }

  voltar() {
    this.navCtrl.back();
  }

}
