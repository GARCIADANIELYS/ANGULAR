import { Component } from '@angular/core';
import { ProductI } from './../../core/services/product';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.scss']
})
export class ProductsFormComponent {
  public products: ProductI[] = [];

  public imageUrl: string = "";
  public name: string = "";
  public price?: number;
  public reference?: number;
  public material: string = "";
  public id?: number;

  public createNewProduct(event: Event) {
    event.preventDefault();
    const newProduct: ProductI = {
      name: this.name,
      material: this.material,
      reference: this.reference !== undefined ? this.reference : 0,
      image: this.imageUrl,
      id: this.id !== undefined ? this.id : 0,
      price: this.price !== undefined ? this.price : 0
    };

    this.products.push(newProduct);

    console.log("New product created:", newProduct);
    console.log("All products:", this.products);
  }
}
