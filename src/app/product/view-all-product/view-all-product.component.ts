import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-view-all-product',
  templateUrl: './view-all-product.component.html',
  styleUrls: ['./view-all-product.component.css']
})
export class ViewAllProductComponent implements OnInit {

  productList:any
  filterproducts:any
  searchkey:any

constructor(private ps: ProductserviceService) {

}

ngOnInit(){
  this.ps.viewAllproducts().subscribe((data:any)=>{
  this.productList=data  

  })

//acceesing data from behavior subject

    this.ps.search.subscribe((data:any)=>{
    this.searchkey=data
  })


}

filter(category:any){
    this.filterproducts=this.productList.filter((item:any)=>{
    if(item.categoryId==category || category==''){
      return item
    }
})
}

}
