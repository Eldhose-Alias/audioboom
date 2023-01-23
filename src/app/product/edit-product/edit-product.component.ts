import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {
  productId :any
  productdata :any
  constructor(private ar : ActivatedRoute , private ps : ProductserviceService , private router:Router){}

  ngOnInit(){
    this.ar.params.subscribe((data:any)=>{
      this.productId = data["id"]
    })
    this.ps.viewProduct(this.productId).subscribe((item:any)=>{
      this.productdata = item
    })
  }
  updateProduct(form:any){
    let updateproduct = { 
      id: form.value.id ,
      productName: form.value.productName ,
      categoryId: form.value.categoryId ,
      description: form.value.description ,
      price: form.value.price ,
      is_available: form.value.is_available ,
      productImg: form.value.productImg ,
      rating: form.value.rating ,
      review: form.value.review ,
      warranty: form.value.warranty 
     }

     this.ps.updateProduct(this.productId,this.productdata).subscribe((item:any)=>{
      alert("Updation Successfully Completed")
      this.router.navigateByUrl('product')
     })
  }


}
