import React from 'react';

const reviews = [
  {
    name: "Minh Anh",
    role: "Khách hàng",
    content: "Trải nghiệm thiết kế 3D rất mượt mà, tôi có thể thấy được bộ đồ trước khi đặt hàng thật.",
    stars: 5
  },
  {
    name: "Sơn Tùng",
    role: "Khách hàng",
    content: "Giao diện rất dễ sử dụng ngay cả với người không rành về công nghệ như tôi.",
    stars: 5
  },
  {
    name: "Lan Vy",
    role: "Nhà thiết kế",
    content: "Đây là nền tảng tuyệt vời để tôi giới thiệu các mẫu thiết kế mới nhất của mình.",
    stars: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#FFF9F1]/50">
      <div className="max-w-7xl mx-auto px-10 text-center">
        <h2 className="text-3xl font-bold mb-12">Người Dùng Nói Gì Về <span className="text-primary-gold">CustomOutfit3D</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {reviews.map((rev, index) => (
            <div key={index} className="bg-white p-8 rounded-[30px] shadow-sm border border-gray-100 space-y-4 hover:shadow-md transition-shadow">
              {/* Stars */}
              <div className="flex text-yellow-400 text-sm">
                {[...Array(rev.stars)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              
              <p className="text-gray-600 italic text-sm leading-relaxed">"{rev.content}"</p>
              
              <div className="flex items-center gap-4 pt-4">
                <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden">
                  <div className="w-full h-full bg-primary-gold/20 flex items-center justify-center font-bold text-primary-gold text-xs">
                    {rev.name[0]}
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-sm">{rev.name}</h4>
                  <p className="text-[11px] text-gray-400 uppercase tracking-tighter">{rev.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}