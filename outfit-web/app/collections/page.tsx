"use client";

import React from 'react';
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import SidebarFilters from "../../components/collections/SidebarFilters";
import ProductCard from "../../components/collections/ProductCard";

export default function CollectionsPage() {
  // Danh sách sản phẩm đầy đủ từ code của bạn
  const products = [
    { id: 1, name: "Minimalist Gray Shirt", price: 45.99, category: "Shirts", rating: 5, reviews: 125, creator: "Urban Threads" },
    { id: 2, name: "Classic Blue Denim", price: 79.99, category: "Pants", rating: 4, reviews: 89, creator: "Denim Studio" },
    { id: 3, name: "Vintage Mustard Hoodie", price: 65.99, category: "Hoodies", rating: 5, reviews: 234, creator: "Retro Vibes" },
    { id: 4, name: "Urban Cargo Pants", price: 55.00, category: "Pants", rating: 4, reviews: 45, creator: "Street Lab" },
    { id: 5, name: "Silk Evening Dress", price: 120.00, category: "Dresses", rating: 5, reviews: 12, creator: "Luxury Line" },
    { id: 6, name: "Basic White Tee", price: 25.99, category: "Shirts", rating: 5, reviews: 567, creator: "Urban Threads" },
    { id: 7, name: "Leather Jacket", price: 150.00, category: "Jackets", rating: 5, reviews: 42, creator: "Urban Threads" },
    { id: 8, name: "Beige Blazer", price: 89.00, category: "Blazers", rating: 4, reviews: 28, creator: "Studio Classic" },
    { id: 9, name: "Summer Skirt", price: 35.50, category: "Skirts", rating: 4, reviews: 110, creator: "Retro Vibes" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. Header luôn cố định ở trên */}
      <Header />
      
      {/* 2. Phần nội dung chính */}
      <main className="max-w-7xl mx-auto px-6 lg:px-12 py-10 w-full">
        
        {/* Tiêu đề và mô tả */}
        <div className="mb-10">
          <h1 className="text-4xl font-black text-gray-900 leading-tight uppercase tracking-tighter">
            Our Collections
          </h1>
          <p className="text-gray-500 mt-2 text-lg">
            Discover {products.length} unique outfits designed for your style.
          </p>
        </div>

        {/* Bố cục 2 cột */}
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Cột trái: Bộ lọc (Sidebar) */}
          <aside className="w-full lg:w-64 shrink-0">
            <div className="sticky top-28"> 
              <SidebarFilters />
            </div>
          </aside>

          {/* Cột phải: Danh sách sản phẩm (Grid) */}
          <section className="grow">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Thông báo nếu hết sản phẩm (Tùy chọn) */}
            {products.length === 0 && (
              <div className="text-center py-20">
                <p className="text-gray-400">No products found matching your filters.</p>
              </div>
            )}
          </section>
          
        </div>
      </main>

      {/* 3. Chân trang */}
      <Footer />
    </div>
  );
}