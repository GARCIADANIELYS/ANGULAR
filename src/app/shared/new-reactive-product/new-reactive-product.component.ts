import { ProductI } from './../../core/services/product';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-new-reactive-product',
  templateUrl: './new-reactive-product.component.html',
  styleUrls: [ './new-reactive-product.component.scss' ]
})

export class NewReactiveProductComponent implements OnInit {
  public reactiveProdForm?: FormGroup;
  public newProducts: ProductI[] = [];
  public selectedProductIndex: number = -1;
  public index: number =0;

  public constructor(private formBuilder: FormBuilder) { }

  public ngOnInit(): void {
    this.reactiveProdForm = this.formBuilder.group({
      name: new FormControl('', [ Validators.required ]),
      material: new FormControl('', [ Validators.required ]),
      reference: new FormControl('', [ Validators.required, Validators.maxLength(5) ]),
      image: new FormControl('', [ Validators.required ]),
      id: new FormControl(),
      price: new FormControl('', [ Validators.required ]),
    });

    this.reactiveProdForm.get('id')?.setValue(null);

    const savedProducts = localStorage.getItem('newProducts');
    if (savedProducts) {
      this.newProducts = JSON.parse(savedProducts);
    }
  }

  public newProduct() {
    if (this.reactiveProdForm?.valid) {
      const product: ProductI = {
        name: this.reactiveProdForm?.value.name,
        material: this.reactiveProdForm.value.material,
        reference: this.reactiveProdForm.value.reference,
        image: this.reactiveProdForm.value.image,
        id: this.reactiveProdForm.value.id,
        price: this.reactiveProdForm.value.price
      };

      this.newProducts.push(product);
      this.reactiveProdForm?.reset();

      localStorage.setItem('newProducts', JSON.stringify(this.newProducts));
    }
  }

  public deleteProduct(index: number) {
    this.newProducts.splice(index, 1);
    localStorage.setItem('newProducts', JSON.stringify(this.newProducts));
  }

  public editProduct(index: number) {
    this.selectedProductIndex = index;
    const selectedProduct = this.newProducts[ index ];

    this.reactiveProdForm?.patchValue({
      name: selectedProduct.name,
      material: selectedProduct.material,
      reference: selectedProduct.reference,
      image: selectedProduct.image,
      id: selectedProduct.id,
      price: selectedProduct.price
    });
  }

  public updateProduct() {
    if (this.selectedProductIndex >= 0 && this.reactiveProdForm?.valid) {
      const updatedProduct: ProductI = {
        name: this.reactiveProdForm?.value.name,
        material: this.reactiveProdForm.value.material,
        reference: this.reactiveProdForm.value.reference,
        image: this.reactiveProdForm.value.image,
        id: this.reactiveProdForm.value.id,
        price: this.reactiveProdForm.value.price
      };

      this.newProducts[ this.selectedProductIndex ] = updatedProduct;
      this.reactiveProdForm?.reset();
      this.selectedProductIndex = -1;

      localStorage.setItem('newProducts', JSON.stringify(this.newProducts));
    }
  }
}