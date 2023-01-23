import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent {
  constructor(private ar:ActivatedRoute , private ps:ProductserviceService){ }

  prodid:any
  productdata: any

  ngOnInit(){

    this.ar.params.subscribe((data:any)=>{
      this.prodid = data["id"]
    })

    this.ps.viewProduct(this.prodid).subscribe((item:any)=>{
      this.productdata = item
    })

  }
}
