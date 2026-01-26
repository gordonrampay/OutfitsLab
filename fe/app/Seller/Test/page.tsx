{/* Avatar */}
            <div className="shrink-0 relative">
              <div className="w-28 h-28 rounded-2xl overflow-hidden border border-gray-200">
                <img 
                  src={shop.avatar_url} 
                  alt={shop.shop_name} 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>

            {/* Shop Info */}
            <div className="flex-1 w-full">
              <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                <div>
                  {/* Shop Name (Lấy từ Mock Data) */}
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{shop.shop_name}</h1>
                  
                  {/* Rating & Location (KHÔNG CÓ TRONG MOCK DATA -> Ghi cứng text) */}
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <div className="flex text-[#d19f42]">
                        {[1, 2, 3, 4, 5].map((star) => (
                           <StarIcon key={star} filled={true} />
                        ))}
                      </div>
                      <span className="font-bold text-gray-900 ml-1">4.8</span>
                      <span className="text-gray-400">(324 reviews)</span>
                    </div>
                    <span className="hidden md:inline">•</span>
                    <span className="font-medium text-gray-700">5,420 followers</span>
                    <span className="hidden md:inline">•</span>
                    <div className="flex items-center gap-1">
                      <MapPinIcon />
                      <span>Los Angeles, CA</span>
                    </div>
                  </div>

                  {/* Description (Lấy từ Mock Data) */}
                  <p className="text-gray-600 leading-relaxed mb-4 max-w-2xl">
                    {shop.description}
                  </p>

                  {/* Tags (KHÔNG CÓ TRONG MOCK DATA -> Ghi cứng text) */}
                  <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-[#fff4e6] text-[#d19f42] text-xs font-bold rounded-full">Minimalist Fashion</span>
                      <span className="px-3 py-1 bg-[#fff4e6] text-[#d19f42] text-xs font-bold rounded-full">Sustainable Materials</span>
                      <span className="px-3 py-1 bg-[#fff4e6] text-[#d19f42] text-xs font-bold rounded-full">Custom Designs</span>
                  </div>
                </div>

                {/* Action Buttons (UI Only) */}
                <div className="flex gap-3 w-full md:w-auto mt-4 md:mt-0">
                  <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-2.5 rounded-full border-2 border-[#d19f42] text-[#d19f42] font-bold hover:bg-[#fff9f0] transition-colors">
                    <HeartIcon className="w-5 h-5" />
                    Favorite
                  </button>
                  <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-2.5 rounded-full border-2 border-[#d19f42] text-[#d19f42] font-bold hover:bg-[#fff9f0] transition-colors">
                    <MessageIcon className="w-5 h-5" />
                    Contact
                  </button>
                </div>
              </div>
            </div>