import { Heart, Expand } from "lucide-react";

export default function ProductCard({ product }: { product: any }) {
  return (
    <div className="group bg-white border border-gray-100 rounded-[32px] overflow-hidden hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-500">
      {/* Image Section */}
      <div className="relative aspect-4/5 bg-[#F3F4F6]">
        <span className="absolute top-5 left-5 z-10 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black text-gray-500 uppercase tracking-tighter shadow-sm">
          {product.category}
        </span>
        
        <button className="absolute top-5 right-5 z-10 p-2.5 bg-white rounded-full shadow-sm text-gray-400 hover:text-red-500 transition-colors">
          <Heart size={18} />
        </button>

        <div className="w-full h-full flex items-center justify-center bg-gray-200">
             <span className="text-gray-400 font-medium italic text-sm">Product Preview</span>
        </div>
      </div>

      {/* Info Section */}
      <div className="p-6 space-y-4">
        <div className="space-y-1">
          <h3 className="font-bold text-gray-900 text-lg leading-tight group-hover:text-primary-gold transition-colors">
            {product.name}
          </h3>
          <div className="flex items-center gap-1.5">
            <span className="text-yellow-400 text-xs flex">★★★★★</span>
            <span className="text-[11px] text-gray-400 font-medium">({product.reviews})</span>
          </div>
          <p className="text-[12px] text-gray-400">by <span className="underline decoration-gray-200">{product.creator}</span></p>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-black text-gray-900">${product.price}</span>
        </div>

        <div className="flex gap-2 pt-2">
          <button className="grow py-3.5 bg-[#FF6B9D] text-white text-[13px] font-black rounded-2xl hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-lg shadow-pink-200 active:scale-95">
            <Expand size={16} /> Try-on Now!
          </button>
          <button className="p-3.5 border-2 border-gray-100 rounded-2xl text-gray-400 hover:border-primary-gold hover:text-primary-gold transition-all active:scale-90">
            <Heart size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}