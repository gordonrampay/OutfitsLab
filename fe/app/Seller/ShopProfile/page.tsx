'use client'

import { useState, useEffect } from 'react'
import { notFound, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { MOCK_SHOPS, MOCK_ITEMS} from '../MockData' 


export default function ShopProfilePage() {
  // 1. Lấy ID từ URL
  const searchParams = useSearchParams()
  const idFromUrl = searchParams.get('id') // Lấy giá trị của ?id=...

  // 3. Convert sang số. Nếu không có id thì mặc định là 0 hoặc return lỗi
  const shopId = idFromUrl ? Number(idFromUrl) : 0

  const shop = MOCK_SHOPS.find((s) => s.id === shopId)

  // Nếu shopId = 0 hoặc không tìm thấy shop
  if (!shopId || !shop) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Không tìm thấy Shop ID hợp lệ. Vui lòng quay lại trang danh sách.</p>
        <Link href="/Seller/SellersList" className="ml-4 text-blue-500 underline">Quay lại</Link>
      </div>
    )
  }

  // 4. Lọc sản phẩm thuộc về shop này
  const shopProducts = MOCK_ITEMS.filter((item) => item.shop_id === shopId)

  return (
    <div className="bg-[#fffbf5] text-lg font-sans">
      {/* --- HEADER SECTION --- */}
      <div className="bg-white border-b-2 border-[#ffe9cc]">
        <img src="/ShopBackground.png" alt="ShopBackground" className="w-full h-30 md:h-55 object-cover" />
        <div className="max-w-310 mx-auto py-8 md:py-15">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Avatar */} 
            <div className="flex items-end">
              <div className="w-40 h-40 rounded-2xl border-4 border-gray-100 shadow-xl overflow-hidden">
                <img 
                  src={shop.avatar_url} 
                  alt={shop.shop_name} 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>

            {/* Shop Info */}
            <div className=" w-full">
              <div className="flex flex-col items-start">
                  {/* Shop Name */}
                  <h1 className="text-4xl font-bold mb-2">{shop.shop_name}</h1>
                  
                  {/* Rating & Location */}
                  <div className="flex flex-wrap items-center gap-3 text-gray-500 mb-6">
                    <div className="flex items-center">
                      <div className="flex text-[#d19f42]">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <StarIcon
                          key={star}
                          filled={star <= Math.floor(4.3)}
                        />
                      ))}
                      </div>
                      <span className="ml-1">4.3</span>
                      <span className="ml-1">(324 reviews)</span>
                    </div>
                    <span className="hidden md:inline">•</span>
                    <span className="">5,420 followers</span>
                    <span className="hidden md:inline">•</span>
                    <div className="flex items-center">
                      <MapPinIcon />
                      <span>Los Angeles, CA</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-justify mb-5 max-w-2xl">
                    {shop.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                      <span className="px-3 py-1 bg-[#fff4e6] text-[#d19f42] text-sm rounded-full">Minimalist Fashion</span>
                      <span className="px-3 py-1 bg-[#fff4e6] text-[#d19f42] text-sm rounded-full">Sustainable Materials</span>
                      <span className="px-3 py-1 bg-[#fff4e6] text-[#d19f42] text-sm rounded-full">Custom Designs</span>
                  </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-end w-full md:w-auto mt-4 md:mt-0">
              <div className="flex flex-col gap-3 w-full">
                <button className="cursor-pointer flex items-center justify-center text-xl gap-2 px-8 py-2 rounded-full border-3 border-[#d19f42] text-[#d19f42] font-semibold hover:bg-[#fff9f0]">
                  <HeartIcon className="w-6 h-6 text-black" />
                  Favorite
                </button>

                <button className="cursor-pointer flex items-center justify-center text-xl gap-2 px-8 py-2 rounded-full border-3 text-white bg-[#d19f42] font-semibold hover:bg-[#c28e2d]">
                  <MessageIcon className="w-6 h-6 text-black" />
                  Contact
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="max-w-310 mx-auto mt-15 pb-35">
        
        {/* --- ABOUT SECTION --- */}
        <div className="bg-[#fff4e6] rounded-2xl p-6 md:p-8 mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-9">About</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              {/* Member Since */}
              <p className="text-3xl font-semibold mb-5">Member Since</p>
              <p className="text-gray-600">Since 2020</p>
            </div>
            <div>
              {/* Location */}
              <p className="text-3xl font-semibold mb-5">Location</p>
              <p className="text-gray-600">Los Angeles, CA</p>
            </div>
            <div>
              {/* Response Rate */}
              <p className="text-3xl font-semibold mb-5">Response Rate</p>
              <p className="text-gray-600">98% within 24 hours</p>
            </div>
          </div>
        </div>

        {/* --- FEATURED PRODUCTS SECTION --- */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div>
               <h2 className="text-4xl font-bold">Featured Products</h2>
               {/* Số lượng items */}
               <p className="text-gray-500 mt-4">{shopProducts.length} items available</p>
            </div>
            <div className="flex gap-4">
            <button className="cursor-pointer flex items-center justify-center text-xl gap-2 px-6 py-2 rounded-full border-3 bg-white border-[#d19f42] text-[#d19f42] font-semibold hover:bg-[#fff9f0]">
               <ShareIcon className="w-6 h-6 text-black" />
               View All
            </button>
            <button className="cursor-pointer flex items-center justify-center text-xl gap-2 px-6 py-2 rounded-full border-3 bg-white border-[#d19f42] text-[#d19f42] font-semibold hover:bg-[#fff9f0]">
               <ShareIcon className="w-6 h-6 text-black" />
               Share Store
            </button>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {shopProducts.slice(0, 6).map((item) => (
              <div key={item.id} className="bg-white rounded-b-xl border-3 border-[#ffe9cc] hover:shadow-xl">
                
                {/* Image Container */}
                <div className="relative h-64 bg-gray-100">
                  <img 
                    src={item.image_url}
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Category Tag */}
                  <span className="absolute top-3 left-3 bg-white px-3 py-1 rounded-full text-xs">
                    {item.type} 
                  </span>

                  {/* Favorite Button */}
                  <button className="cursor-pointer absolute top-3 right-3 p-2 bg-white backdrop-blur-sm rounded-full shadow-sm hover:bg-gray-200">
                     <HeartIcon className="w-5 h-5" />
                  </button>
                </div>

                {/* Info */}
                <div className="p-5">
                  {/* Item Name */}
                  <h3 className="font-semibold line-clamp-1">{item.name}</h3>
                  
                  {/* Product Rating */}
                  <div className="flex items-center text-xs gap-1 mb-2">
                    <div className="flex text-[#d19f42]">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg key={star} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={(star <= Math.floor(4.3)) ? "currentColor" : "none"} stroke="currentColor" strokeWidth={(star <= Math.floor(4.3)) ? 0 : 2} className="w-3 h-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.545.044.757.74.34 1.146l-4.252 4.145a.563.563 0 00-.154.498l1.31 5.372c.16.654-.535 1.159-1.028.875L12 18.067l-4.708 2.615c-.493.284-1.187-.22-1.028-.875l1.31-5.372a.563.563 0 00-.154-.498L2.736 10.543c-.417-.406-.205-1.102.34-1.146l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                          </svg> 
                        ))}
                    </div>
                    <span className="text-gray-400">( 124 )</span>
                  </div>

                  <p className="text-xs text-gray-500 mb-3">by {shop.shop_name}</p>
                  
                  {/* Price (Format VND) */}
                  <div className="text-[#d19f42] font-bold">
                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.price)}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Empty State */}
          {shopProducts.length === 0 && (
            <div className="text-center py-20 bg-white rounded-xl border border-dashed border-gray-300">
                <p className="text-gray-500">Shop này chưa đăng bán sản phẩm nào.</p>
            </div>
          )}
        </div>

      </div>
      
      <div className="flex flex-col justify-center items-center border-y-2 border-[#ffe9cc] bg-[#fff6ea] p-15">
          <h2 className="text-3xl font-bold mb-5">Have Question?</h2>
          <p className="text-gray-500 mb-7">Get in touch with {shop.shop_name} directly for custom orders or inquiries.</p>
          <div className="flex gap-15">
            <button className="cursor-pointer flex items-center justify-center bg-[#d19f42] gap-2 w-50 py-4 rounded-full border-3 border-[#d19f42] text-white font-semibold hover:bg-[#c28e2d]">
              Send Message
            </button>
            <button className="cursor-pointer flex items-center justify-center bg-white gap-2 w-50 py-4 rounded-full border-3 border-[#d19f42] text-[#d19f42] font-semibold hover:bg-[#fff9f0]">
              View Store Policies
            </button>
          </div>
      </div>
      
    </div>
  )
}

// --- SVG COMPONENTS ---

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth={filled ? 0 : 2} className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.545.044.757.74.34 1.146l-4.252 4.145a.563.563 0 00-.154.498l1.31 5.372c.16.654-.535 1.159-1.028.875L12 18.067l-4.708 2.615c-.493.284-1.187-.22-1.028-.875l1.31-5.372a.563.563 0 00-.154-.498L2.736 10.543c-.417-.406-.205-1.102.34-1.146l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    </svg>
  )
}

function MapPinIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  )
}

function HeartIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={className || "w-6 h-6"}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
  )
}

function MessageIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={className || "w-6 h-6"}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
    </svg>
  )
}

function ShareIcon({ className }: { className?: string }) {
   return (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={className || "w-6 h-6"}>
         <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
      </svg>
   )
}