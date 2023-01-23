import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {    
   //  eathilanu filter        enth vechett anu                     
  //  apply cheyan pone     //  filter cheyende     propertyname
  transform( value: any[] , filterString:string ,propName:string   ): any {

    const result :any = []

    if(!value || filterString=="" || propName==""){
      return value
    }

    // calling each product from product.module.ts

    value.forEach((item:any)=>{
      if(item[propName].trim().toLowerCase().includes(filterString.toLowerCase())){
        result.push(item)
      }
    })

    return result
  }

}
