import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  // behavior subject nte class ne store cheyan
   search = new BehaviorSubject("")

  constructor(private httpclient : HttpClient) { }

  // http req creation to view all products

  viewAllproducts(){
   return this.httpclient.get("http://localhost:3000/products")
  }
  // req creation for add product

  addProduct(newProduct:any){
    return this.httpclient.post("http://localhost:3000/products",newProduct)
  }

  // to add single product data

  viewProduct(id:any){
    // 'param ayit id call cheythu'

    return this.httpclient.get("http://localhost:3000/products/"+id)

  }
  //  deleting product

  deleteProduct(id:any){
    return this.httpclient.delete("http://localhost:3000/products/"+id)
  }
  
  // edit product

  updateProduct(id:any , data:any){
    return this.httpclient.put("http://localhost:3000/products/"+id , data )
  }

}
