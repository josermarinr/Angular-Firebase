import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos : Producto[] = [];
  filtred : Producto[] = [];

  constructor(private http: HttpClient) { 

    this.cargarProductos();
  }

  private cargarProductos(){
   
    return new Promise( (resolve, rejects)=>{

    this.http.get('https://portfolio-8f92c.firebaseio.com/productos_idx.json')
        .subscribe( (resp: Producto[]) => {
            this.productos = resp;
            setTimeout( ()=>{
              this.cargando= false;
            },2000);
            resolve();
      });
   })
    
  }

  getProducto (id: string){
    return this.http.get(`https://portfolio-8f92c.firebaseio.com/productos/${id}.json`)
  }

  buscarProducto(term: string){

      if(this.productos.length ===0){
        //cargar productos
          this.cargarProductos().then( () =>{
            //ejecutar despues de tener productos
            //aplicar filtro
            this.filtrarProductos(term);
          })
      }else{
        //aplicar el filtro
            this.filtrarProductos(term);
      }

  }

  private filtrarProductos(term: string){
   // console.log(this.productos);
    this.filtred = []
    //todo en minuscila
    term = term.toLocaleLowerCase();
    this.productos.forEach( prod =>{
      const tituloLower = prod.titulo.toLocaleLowerCase();
      if( prod.categoria.indexOf( term) >= 0|| prod.titulo.indexOf( term)){
        this.filtred.push( prod);
      }

    })
  }

}
