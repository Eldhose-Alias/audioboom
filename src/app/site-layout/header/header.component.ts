import { Component } from '@angular/core';
import { ProductserviceService } from 'src/app/product/productservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

   constructor(private ps:ProductserviceService){}
   
   searchterm : any

   ngOnInit(){
   }

   search(event:any){

    this.searchterm=event.target.value
    this.ps.search.next(this.searchterm)
   }

}
