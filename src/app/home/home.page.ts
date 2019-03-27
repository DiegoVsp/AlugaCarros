import { CarrosService } from './../providers/carros.service';
import { Component, OnInit } from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import { Carro } from '../modelos/carro';
import { LoadingController, AlertController, NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  public carros: Carro[];

  constructor(private loadingCt: LoadingController,
              private alertCtrl: AlertController,
              private carrosService: CarrosService,
              private navCtrl: NavController) { }


  async ngOnInit() {
    const loading = await this.loadingCt.create({
      message:'Aguarde enquanto os carros são carregados...'
    });

    await loading.present();

    this.carrosService.lista()
    .subscribe(
      (carros) => {
        this.carros = carros;
      },
      async (err: HttpErrorResponse) => {
        console.log('Deu erro ' + err.status);
        const al = await this.alertCtrl.create({
          header: 'Erro!',
          message: 'Erro ao listar carros',
          buttons: [{text: 'OK'}]
        });

        await al.present();
      }
    ).add(
      () => {
        loading.dismiss();
      }
    );

  }
  selecionaCarro(Carro: Carro){
    console.log('Carro selecionado: ${Carro.nome}');
    
    let extras: NavigationExtras = {
      queryParams:{
        CarrosService: JSON.stringify(Carro),
      }
    }

    this.navCtrl.navigateForward(['escolha'], extras);
  }

}
