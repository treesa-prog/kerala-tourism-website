import { Component } from '@angular/core';
import { Card } from '../card/card';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'app-product',
  imports: [ProductCard],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {}
