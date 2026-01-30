"use client";

import React, { useState } from 'react';
import { Sidebar } from '@/components/main/product/sildebar';
import { ProductCard } from '@/components/main/product/product_all';

interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  image: string;
  tag?: string;
  category: string;
  color: string;
}

export default function ShopPage() {
  const [filters, setFilters] = useState({
    categories: ['all'],
    colors: ['all'],
    priceRanges: ['all']
  });
  const [searchQuery, setSearchQuery] = useState('');

  // Products data
  const allProducts: Product[] = [
    {
      id: 1,
      name: 'Oversized Grey T-Shirt',
      brand: 'by Urban Apparel',
      price: 54.95,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop',
      tag: 'Sale',
      category: 'tshirt',
      color: 'gray'
    },
    {
      id: 2,
      name: 'Classic Blue Denim',
      brand: 'by Denim World',
      price: 79.99,
      image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=500&fit=crop',
      tag: 'New',
      category: 'pants',
      color: 'blue'
    },
    {
      id: 3,
      name: 'Vintage Museum Hoodie',
      brand: 'by Retro Wear',
      price: 85.99,
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=500&fit=crop',
      tag: 'Trending',
      category: 'hoodie',
      color: 'cream'
    },
    {
      id: 4,
      name: 'Black Leather Jacket',
      brand: 'by Style Co.',
      price: 129.99,
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop',
      tag: 'New',
      category: 'jackets',
      color: 'black'
    },
    {
      id: 5,
      name: 'Summer Floral Dress',
      brand: 'by Bella Fashion',
      price: 68.50,
      image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop',
      tag: 'Sale',
      category: 'dresses',
      color: 'red'
    },
    {
      id: 6,
      name: 'White Sneakers',
      brand: 'by Street Kicks',
      price: 89.99,
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=500&fit=crop',
      tag: 'Trending',
      category: 'sneakers',
      color: 'white'
    },
    {
      id: 7,
      name: 'Casual Khaki Pants',
      brand: 'by Comfort Wear',
      price: 45.99,
      image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=500&fit=crop',
      category: 'pants',
      color: 'mustard'
    },
    {
      id: 8,
      name: 'Striped Cotton Shirt',
      brand: 'by Classic Style',
      price: 39.95,
      image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=500&fit=crop',
      tag: 'Sale',
      category: 'icons',
      color: 'blue'
    },
    {
      id: 9,
      name: 'Navy Blue Blazer',
      brand: 'by Executive Look',
      price: 149.99,
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=500&fit=crop',
      category: 'blazers',
      color: 'blue'
    }
  ];

  // Filter logic
  const filteredProducts = allProducts.filter(product => {
    // Search filter
    if (searchQuery) {
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch = 
        product.name.toLowerCase().includes(searchLower) ||
        product.brand.toLowerCase().includes(searchLower);
      if (!matchesSearch) return false;
    }

    // Category filter
    if (!filters.categories.includes('all')) {
      if (!filters.categories.includes(product.category)) {
        return false;
      }
    }

    // Color filter
    if (!filters.colors.includes('all')) {
      if (!filters.colors.includes(product.color)) {
        return false;
      }
    }

    // Price range filter
    if (!filters.priceRanges.includes('all')) {
      let matchesPrice = false;
      for (const range of filters.priceRanges) {
        if (range === '0-50' && product.price <= 50) {
          matchesPrice = true;
        } else if (range === '50-100' && product.price > 50 && product.price <= 100) {
          matchesPrice = true;
        }
      }
      if (!matchesPrice) return false;
    }

    return true;
  });

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar 
        filters={filters} 
        setFilters={setFilters} 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
      />
      
      <div className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Shop Our Collection</h1>
          <p className="text-gray-600">
            Browse {filteredProducts.length} outfit{filteredProducts.length !== 1 ? 's' : ''} from our talented creators
          </p>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found matching your filters.</p>
            <button
              onClick={() => {
                setFilters({
                  categories: ['all'],
                  colors: ['all'],
                  priceRanges: ['all']
                });
                setSearchQuery('');
              }}
              className="mt-4 px-6 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}