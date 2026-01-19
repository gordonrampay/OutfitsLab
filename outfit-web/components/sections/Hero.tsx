import React from 'react';

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      
      {/* CỘT TRÁI: NỘI DUNG CHỮ */}
      <div className="space-y-6">
        {/* Nhãn nhỏ phía trên */}
        <div className="flex items-center gap-2">
          <span className="w-8 h-0.5 bg-primary-gold"></span>
          <p className="text-primary-gold font-medium text-sm uppercase tracking-widest">
            Dịch vụ may mặc hiện đại
          </p>
        </div>

        {/* Tiêu đề chính */}
        <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight">
          Khám Phá Outfit <br />
          <span className="text-secondary-teal">Hoàn Hảo</span> <br />
          <span className="text-gray-800 text-3xl lg:text-4xl font-semibold">Với CustomOutfit3D</span>
        </h1>

        {/* Mô tả */}
        <p className="text-gray-500 text-lg max-w-lg leading-relaxed">
          Thử nghiệm và mix các mẫu thời trang sẵn có trên avatar 
          3D của bạn để tạo phong cách riêng - dễ dàng , vui vẻ
          và miễn phí!
        </p>

        {/* Nút bấm (CTA) */}
        <div className="flex flex-wrap gap-4 pt-4">
          <button className="px-8 py-4 bg-primary-gold text-white font-bold rounded-full shadow-lg shadow-gold-primary/20 hover:scale-105 transition-transform">
            Bắt Đầu Outfit →
          </button>
          <button className="px-8 py-4 border-2 border-secondary-teal text-secondary-teal font-bold rounded-full hover:bg-secondary-teal/5 transition-colors">
            Khám Phá Catalog
          </button>
        </div>

        {/* Chỉ số (Stats) */}
        <div className="flex gap-10 pt-8 border-t border-gray-100">
          <div>
            <h4 className="text-2xl font-bold text-secondary-teal">10k+</h4>
            <p className="text-gray-400 text-sm">Thiết kế mẫu</p>
          </div>
          <div>
            <h4 className="text-2xl font-bold text-secondary-teal">500+</h4>
            <p className="text-gray-400 text-sm">Thương hiệu</p>
          </div>
          <div>
            <h4 className="text-2xl font-bold text-secondary-teal">90k+</h4>
            <p className="text-gray-400 text-sm">Khách hàng tin dùng</p>
          </div>
        </div>
      </div>

      {/* CỘT PHẢI: KHUNG HÌNH 3D */}
      <div className="relative">
        {/* Khung nền trang trí */}
        <div className="absolute inset-0 bg-primary-gold/10 rounded-[60px] blur-3xl -z-10 transform rotate-6"></div>
        
        {/* Thẻ Card chính */}
        <div className="bg-white p-6 rounded-[40px] shadow-2xl border border-white relative overflow-hidden group">
          <div className="aspect-4/5 bg-linear-to-tr from-[#f3f4f6] to-[#e5e7eb] rounded-[30px] flex items-center justify-center relative overflow-hidden">
            {/* Giả lập hình ảnh 3D (Bạn có thể thay bằng thẻ <img> thực tế) */}
            <div className="w-48 h-48 bg-white/50 rounded-full blur-2xl absolute animate-pulse"></div>
            <div className="relative text-center">
               <div className="w-40 h-60 bg-gray-300 rounded-lg shadow-inner mb-4 flex items-center justify-center">
                  <span className="text-gray-400">3D OUTFIT IMAGE</span>
               </div>
            </div>

            {/* Nút nhỏ góc phải */}
            <button className="absolute top-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary-gold hover:text-white transition-colors">
              ↗
            </button>
          </div>

          {/* Thông tin sản phẩm bên dưới ảnh */}
          <div className="mt-6 flex justify-between items-end px-2">
            <div>
              <p className="text-gray-400 text-xs uppercase tracking-tighter">New Collection</p>
              <h3 className="text-xl font-bold text-gray-800">Váy Lụa Thiết Kế</h3>
            </div>
            <div className="flex gap-2">
              <span className="w-3 h-3 rounded-full bg-blue-400"></span>
              <span className="w-3 h-3 rounded-full bg-primary-gold"></span>
              <span className="w-3 h-3 rounded-full bg-secondary-teal"></span>
            </div>
          </div>
        </div>

        {/* Widget nhỏ trang trí lơ lửng (Floating Widget) */}
        <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce">
          <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center">✓</div>
          <div>
            <p className="text-xs text-gray-400">Chất lượng cao</p>
            <p className="text-sm font-bold tracking-tight text-gray-800">Vải lụa 100%</p>
          </div>
        </div>
      </div>

    </section>
  );
}