import { ProductsService } from './../../core/services/products.service';
import { ProductI } from './../../core/services/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: [ './list.component.scss' ]
})
export class ListComponent implements OnInit {
  public productsList: ProductI[] = [];
  public selectedProductId: string | null = null;
  public showProductDetails: boolean = false;
  public searchProduct: string = "";
  public filteredProducts: ProductI[] = [];

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: ProductI[]) => {
      this.productsList = data;
      this.filteredProducts = data;
      this.filterProducts();
    })
  }

  public showDetails(productId: string): void {
    if (this.showProductDetails && this.selectedProductId === productId) {
      this.showProductDetails = false;
      this.selectedProductId = productId;
    } else {
      this.showProductDetails = true;
      this.selectedProductId = productId;
    }
  }

  public filterProducts(): void {
    this.filteredProducts = this.productsList.filter((product: ProductI) =>
      product.name.toLowerCase().includes(this.searchProduct.toLowerCase())
    );
  }

  public onSearchChange(): void {
    this.filterProducts();
  }
}