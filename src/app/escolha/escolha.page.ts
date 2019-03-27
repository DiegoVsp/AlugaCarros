import { carro } from './../modelos/carro';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-escolha',
  templateUrl: './escolha.page.html',
  styleUrls: ['./escolha.page.scss'],
})
export class EscolhaPage implements OnInit {

  constructor(private navCtrl: NavController,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
this.activatedRoute.queryParams.
subscribe(params =>)

let carro = <carro>JSON.parse(params['carroSelecionado']);

console.log("O carro que chegou na pagina de escolha é: " + carro.nome);


  }

  voltar() {
    this.navCtrl.back();
  }
}
