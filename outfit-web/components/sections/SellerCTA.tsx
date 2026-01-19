export default function SellerCTA() {
  return (
    <section className="py-20 max-w-7xl mx-auto px-10">
      <div className="bg-white rounded-[50px] p-16 text-center shadow-xl border border-gray-50 relative overflow-hidden">
        {/* Nội dung chính */}
        <div className="relative z-10 max-w-2xl mx-auto space-y-6">
          <p className="text-secondary-teal font-bold uppercase tracking-widest text-xs">Cơ hội phối hợp mới</p>
          <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">
            Trở Thành <span className="text-primary-gold">Seller</span> Ngay Hôm Nay!
          </h2>
          <p className="text-gray-500 text-sm">
            Mở gian hàng cá nhân, triển khai mẫu 3D độc quyền của bạn và tiếp cận hàng ngàn khách hàng tiềm năng chỉ trong vài phút.
          </p>
          
          <div className="flex justify-center gap-4 pt-4">
            <button className="px-10 py-3 bg-primary-gold text-white font-bold rounded-full hover:scale-105 transition shadow-lg text-sm">
              Đăng ký tại đây
            </button>
            <button className="px-10 py-3 border border-secondary-teal text-secondary-teal font-bold rounded-full hover:bg-secondary-teal/5 transition text-sm">
              Hướng dẫn bán hàng
            </button>
          </div>
        </div>

        {/* Các chỉ số thống kê ở dưới */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20 pt-12 border-t border-gray-100">
          <div>
            <p className="text-3xl font-black text-gray-800">15k+</p>
            <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">Sellers đã tham gia</p>
          </div>
          <div>
            <p className="text-3xl font-black text-gray-800">$2M+</p>
            <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">Tổng doanh thu</p>
          </div>
          <div>
            <p className="text-3xl font-black text-gray-800">98%</p>
            <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">Mức độ hài lòng</p>
          </div>
        </div>
      </div>
    </section>
  );
}