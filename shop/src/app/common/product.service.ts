import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { FbResponse,resposne } from './interfaces';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }

  create(product:any){
    return this.http.post(`${environment.fbDbURL}/products.json`,product)
    .pipe(
      map((res: any) => {
        return{
          ...product,
          id: res.name,
          date: new Date(product.date)
        }
      })
    )
  }

  getAll() {
    return this.http.get(`${environment.fbDbURL}/products.json`)
    .pipe( map ( res => {
      return Object.keys(res)
      .map( key => ({
        ...res[key],
        id: key,
        date: new Date(res[key].date)
      }))
    }))
  }

}
