import { Component, signal } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component'
import { CommonModule } from '@angular/common';
import { Product } from '../../../shared/models/product.model';
import { HeaderComponent } from "../../../shared/components/header/header.component";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  products = signal<Product[]>([]);
  cart = signal<Product[]>([]);

  constructor(){
    const initProducts: Product[] = [
      {
        id: Date.now(),
        title: 'Prod-01',
        price: 100,
        image: 'https://picsum.photos/640/640?r=23',
        createdAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Prod-02',
        price: 100,
        image: 'https://picsum.photos/640/640?r=24',
        createdAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Prod-03',
        price: 100,
        image: 'https://picsum.photos/640/640?r=25',
        createdAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Prod-04',
        price: 100,
        image: 'https://picsum.photos/640/640?r=26',
        createdAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Prod-05',
        price: 100,
        image: 'https://picsum.photos/640/640?r=27',
        createdAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Prod-06',
        price: 100,
        image: 'https://picsum.photos/640/640?r=28',
        createdAt: new Date().toISOString()
      }
    ];
    this.products.set(initProducts);
  }

  addToCart (product: Product) {
    this.cart.update(prevState => [...prevState, product])
  }
}
