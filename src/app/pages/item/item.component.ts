import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductDescription } from '../../interfaces/product-description.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto:ProductDescription;
  id:string;
  constructor(private route:ActivatedRoute, 
              public productoService: ProductosService) { }

  ngOnInit(): void {

    this.route.params
    .subscribe( param => {
      //console.log(param['id']);
      this.productoService.getProducto(param['id'])
          .subscribe( (producto: ProductDescription) =>{
            this.id=param['id'];
            this.producto = producto;
            

          })

    })
  }

}
