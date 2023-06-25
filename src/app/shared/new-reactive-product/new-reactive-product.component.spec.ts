import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewReactiveProductComponent } from './new-reactive-product.component';

describe('NewReactiveProductComponent', () => {
  let component: NewReactiveProductComponent;
  let fixture: ComponentFixture<NewReactiveProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewReactiveProductComponent]
    });
    fixture = TestBed.createComponent(NewReactiveProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
