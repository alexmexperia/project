import { Component, OnInit } from '@angular/core';
import { ProductService } from '../common/product.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.less']
})
export class MainPageComponent implements OnInit {

  products$ 

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.products$ = this.productService.getAll()
  }

}
