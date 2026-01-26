'use client'

import Link from 'next/link'
import { useState } from 'react'
import { MOCK_SHOPS, MOCK_ITEMS } from '../MockData'

export default function FeaturedSellersPage() {
  // State giả cho thanh search và filter
  const [activeFilter, setActiveFilter] = useState('All Sellers')

  const categories = [
    "All Sellers", "Minimalist Fashion", "Vintage & Retro", 
    "Denim & Casual", "Knitwear", "Business Casual", "Summer & Beach Wear"
  ]

  return (
    <div className="bg-[#fffbf5] text-lg font-sans">
      
      {/* --- HEADER SECTION --- */}
      <div className="bg-[#fff7ec] border-2 border-[#ffe9cc] mb-10">
        <div className="max-w-310 mx-auto py-8 md:py-15">
          <h1 className="text-4xl font-bold mb-4">Featured Sellers</h1>
          <p className="text-gray-600">Discover amazing designs from talented creators around the world</p>
        </div>
      </div>

      {/* --- FILTER & SEARCH SECTION --- */}
      <div className="max-w-310 mx-auto mb-12">
        {/* Search Input */}
        <div className="mb-6">    
          <input 
            type="text" 
            placeholder="Search sellers..." 
            className="w-full h-14 pl-10 rounded-2xl border-2 border-[#ffe9cc] bg-white focus:outline-none focus:ring-2 focus:ring-[#d19f42] placeholder-gray-400"
          />
        </div>

        {/* Filter Pills */}
        <p className="text-sm mb-2">Filter by Specialty:</p>
        <div className="flex flex-wrap items-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-3 rounded-full text-xs font-bold transition-all
                ${activeFilter === cat 
                  ? 'bg-[#d19f42] text-white shadow-md' 
                  : 'bg-[#ffe9cc]/50 text-gray-600 hover:bg-[#ffe9cc]'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* --- SELLERS GRID --- */}
      <div className="max-w-310 mx-auto pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {MOCK_SHOPS.map((shop, index) => {
            // 1. Tính toán số lượng sản phẩm từ Mock Items
            const productCount = MOCK_ITEMS.filter(i => i.shop_id === shop.id).length
            
            // 2. Tạo dữ liệu giả cho các trường thiếu (UI Only)
            // Vì Mock Data chưa có rating, location, specialty nên ta gán tạm theo index để demo
            const extraData = getExtraShopData(index)

            return (
              <div key={shop.id} className="bg-white rounded-3xl border-3 border-[#ffe9cc] hover:shadow-xl overflow-hidden flex flex-col">
                
                {/* Header Background */}
                <div className={`h-24 w-full bg-linear-to-tl from-[#d5e9e9] to-[#f4ebd9]`}></div>

                <div className="px-6 pb-6 flex flex-col items-center -mt-12 text-center">
                  
                  {/* Avatar */}
                  <div className="w-24 h-24 rounded-full border-4 border-white shadow-md overflow-hidden bg-gray-100">
                    <img src={shop.avatar_url} alt={shop.shop_name} className="w-full h-full object-cover" />
                  </div>

                  {/* Shop Name */}
                  <h3 className="mt-4 text-xl font-bold ">{shop.shop_name}</h3>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mt-1 text-sm">
                    <div className="flex text-[#d19f42]">
                      {[1, 2, 3, 4, 5].map(star => (
                         <StarIcon key={star} filled={star <= Math.floor(extraData.rating)} />
                      ))}
                    </div>
                    <span className="">{extraData.rating}</span>
                    <span className="text-gray-500">({extraData.reviews} reviews)</span>
                  </div>

                  {/* Specialty Tag */}
                  <span className="mt-3 ml-1 px-3 py-2 bg-[#fff4e6] text-[#d19f42] text-[10px] uppercase font-bold rounded-full">
                    {extraData.specialty}
                  </span>

                  {/* Description */}
                  <p className="mt-4 text-sm text-gray-500 line-clamp-2 px-2 h-10">
                    {shop.description}
                  </p>

                  <div className="w-full h-px bg-[#ffe9cc] my-5"></div>

                  {/* Stats Row */}
                  <div className="w-full flex justify-between px-10">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-[#d19f42]">{productCount}</p>
                      <p className="text-xs text-gray-600 font-medium">Products</p>
                    </div>
                    <div className="text-center">
                       <div className="flex flex-col items-center justify-center h-full">
                          <MapPinIcon className="w-5 h-5 mb-1" />
                          <p className="text-xs text-gray-600 font-medium">{extraData.location}</p>
                       </div>
                    </div>
                  </div>
                  <div className="w-full h-px bg-[#ffe9cc] my-5"></div>

                  {/* Visit Button */}
                  <Link href={`/Seller/ShopProfile?id=${shop.id}`} className="w-full">
                    <button className="w-full py-3 rounded-full bg-[#d19f42] text-white font-bold text-sm hover:bg-[#b88b39] transition-colors flex items-center justify-center gap-2">
                      Visit Store
                      <ExternalLinkIcon className="w-4 h-4" />
                    </button>
                  </Link>

                </div>
              </div>
            )
          })}

        </div>
      </div>

      {/* --- CTA FOOTER --- */}
      <div className="bg-[#fff9f0] py-20 px-4 text-center border-t border-[#ffe9cc]">
         <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">Ready to Showcase Your Designs?</h2>
            <p className="text-gray-600 mb-8">
              Join our thriving community of creators and reach thousands of fashion enthusiasts worldwide.
            </p>
            <button className="px-8 py-4 bg-[#d19f42] text-white font-bold text-lg rounded-full hover:bg-[#b88b39] transition-colors shadow-lg shadow-[#d19f42]/30">
              Become a Seller
            </button>
         </div>
      </div>

    </div>
  )
}


// --- HELPER FUNCTIONS & ICONS ---

// Hàm tạo dữ liệu giả cho UI đẹp (vì Mock Data thiếu)
function getExtraShopData(index: number) {
  const data = [
    { rating: 3.8, reviews: 324, location: 'Los Angeles, CA', specialty: 'Minimalist Fashion' },
    { rating: 4.9, reviews: 567, location: 'New York, NY', specialty: 'Vintage & Retro' },
    { rating: 2.6, reviews: 189, location: 'Austin, TX', specialty: 'Denim & Casual' },
    { rating: 0.7, reviews: 412, location: 'Portland, OR', specialty: 'Knitwear' },
    { rating: 1.9, reviews: 256, location: 'Chicago, IL', specialty: 'Business Casual' },
  ]
  // Lấy data theo index, nếu hết thì lấy cái đầu tiên
  return data[index % data.length]
}

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth={filled ? 0 : 2} className="w-4 h-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.545.044.757.74.34 1.146l-4.252 4.145a.563.563 0 00-.154.498l1.31 5.372c.16.654-.535 1.159-1.028.875L12 18.067l-4.708 2.615c-.493.284-1.187-.22-1.028-.875l1.31-5.372a.563.563 0 00-.154-.498L2.736 10.543c-.417-.406-.205-1.102.34-1.146l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    </svg>
  )
}

function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={className || "w-4 h-4"}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  )
}

function ExternalLinkIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={className || "w-4 h-4"}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
    </svg>
  )
}