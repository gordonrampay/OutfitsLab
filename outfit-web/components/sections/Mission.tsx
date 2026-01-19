export default function Mission() {
  return (
    <section className="max-w-7xl mx-auto px-10 py-24 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
      <div className="space-y-6">
        <p className="text-primary-gold font-bold text-sm uppercase tracking-widest">Sứ mệnh & Mục tiêu</p>
        <h2 className="text-4xl font-extrabold leading-tight">Sứ Mệnh <br /><span className="text-primary-gold">Của Chúng Tôi</span></h2>
        <p className="text-gray-500 leading-relaxed">
          CustomOutfit3D cam kết mang đến trải nghiệm thử đồ ảo vui vẻ,
          giúp bạn khám phá và kết hợp các mẫu thời trang sẵn có từ nhiều
          seller, để tìm ra outfit lý tưởng mà không rời khỏi căn nhà. Chúng
          tôi tin rằng thời trang là sự sáng tạo từ những thứ đơn giản!

        </p>
        
        <div className="space-y-4 pt-6">
          <div className="flex items-start gap-4 p-4 rounded-2xl bg-white shadow-sm border border-gray-50">
            <div>
              <h4 className="font-bold">"Thử trước, yêu sau - Đó là CustomOutfit3D!"</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white p-10 rounded-[40px] shadow-xl aspect-square flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🎨</div>
          <p className="text-primary-gold font-bold">Sáng Tạo Không Giới Hạn</p>
          <p >Từ những thứ đơn giản</p>
        </div>
      </div>
    </section>
  );
}