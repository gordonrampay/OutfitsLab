import React from 'react';
import { Search, ShoppingBag } from 'lucide-react';
import Link from 'next/link'; // Quan trọng nhất: Phải dùng Link thay cho <a>

export default function Header() {
  return (
    <header className="flex justify-between items-center px-8 lg:px-12 py-4 bg-white/90 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-100">
      {/* 1. Logo */}
      <a href="/" className="flex items-center text-2xl font-black tracking-tight">
        <span className="text-[#4F46E5] italic">Outfits</span>
        <span className="text-[#EC4899] italic">Lab</span>
      </a>

      {/* 2. Navigation: Dùng Link để chuyển trang không load lại */}
      <nav className="hidden xl:flex gap-8 text-gray-500 font-medium text-[14px]">
        <a href="/" className="hover:text-primary-gold transition">
          Home
        </a>
        
        <a href="/collections" className="relative hover:text-primary-gold transition group">
          Collections
          {/* Thanh gạch chân khi hover */}
          <span className="absolute bottom-0 left-0 w-full h-px bg-primary-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </a>

        <a href="#" className="hover:text-primary-gold transition">
          Custom Room
        </a>
        
        <a href="#" className="hover:text-primary-gold transition">
          Shop
        </a>
        
        <a href="#" className="hover:text-primary-gold transition">
          Community
        </a>
        
        <a href="#" className="hover:text-primary-gold transition">
          About
        </a>
        
        <a href="#" className="text-gray-800 font-bold hover:text-primary-gold transition">
          Become Seller
        </a>
      </nav>

      {/* 3. Icons & Buttons */}
      <div className="flex items-center gap-5">
        <div className="flex gap-4 text-gray-400">
          <Search size={20} className="cursor-pointer hover:text-black transition-colors" />
          <ShoppingBag size={20} className="cursor-pointer hover:text-black transition-colors" />
        </div>
        
        <div className="flex items-center gap-3">
          <button className="px-6 py-2 text-[14px] font-semibold text-gray-800 border border-gray-200 rounded-full hover:bg-gray-50 hover:border-gray-300 transition-all">
            Sign up
          </button>
          <button className="px-6 py-2 text-[14px] font-bold text-white bg-primary-gold rounded-full hover:opacity-90 transition-all shadow-sm">
            Sign in
          </button>
        </div>
      </div>
    </header>
  );
}