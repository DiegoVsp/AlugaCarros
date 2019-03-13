import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { carro } from '../modelos/carro';

@Injectable({
  providedIn: 'root'
})
export class CarrosService {

  constructor(private http:HttpClient) { }

  lista(){
    return this.http.get<carro[]>('http://localhost:8080/api/carro/listaTodos');
  }
}
