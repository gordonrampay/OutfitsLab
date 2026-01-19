import { Shirt, Box, Users, ShoppingBag } from 'lucide-react';

const data = [
  { icon: <Shirt />, title: "Trải Nghiệm 3D", desc: "Xem trang phục ở mọi góc độ chân thực." },
  { icon: <Box />, title: "Cá Nhân Hóa", desc: "Tự do thay đổi màu sắc, chất liệu." },
  { icon: <Users />, title: "Cộng Đồng", desc: "Kết nối với hàng ngàn nhà thiết kế." },
  { icon: <ShoppingBag />, title: "Mua Sắm", desc: "Đặt hàng ngay mẫu bạn vừa tạo." },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-10">
        <h2 className="text-center text-4xl font-bold mb-16">Tại Sao Chọn <span className="text-secondary-teal">CustomOutfit3D</span>?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.map((item, i) => (
            <div key={i} className="p-8 border border-gray-100 rounded-[30px] hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-soft-bg rounded-2xl flex items-center justify-center mb-6 text-primary-gold group-hover:bg-primary-gold group-hover:text-white transition-colors">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold mb-2">{item.title}</h4>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}