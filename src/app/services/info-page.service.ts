import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Infopage } from '../interfaces/infopage.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPageService {
  info: Infopage = {};
  cargada = false;
  equipo : any[] = [];

  constructor( private http: HttpClient) {
    //console.log('servicio de infopagina');
     this.cargarEquipo();
    this.cargarInfo();
   }


   private cargarInfo(){
    this.http.get('/assets/data/data-page.json')
    .subscribe( (resp: Infopage) => {
      this.cargada =true;
      this.info = resp;
     
    })
   }

      private cargarEquipo(){
        this.http.get('https://portfolio-8f92c.firebaseio.com/equipo.json')
        .subscribe( (resp: any[]) => {
          this.equipo = resp;
         
      })
    }
}

