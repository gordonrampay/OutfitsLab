// components/main/homepage/Features.tsx
import {
  ExperimentOutlined,
  AppstoreAddOutlined,
  TeamOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";

const items = [
  {
    icon: <ExperimentOutlined className="text-xl text-emerald-600" />,
    title: "Thử Nghiệm Dễ Dàng",
    desc: "Tương tác mượt, thay chất liệu & phụ kiện theo thời gian thực.",
  },
  {
    icon: <AppstoreAddOutlined className="text-xl text-emerald-600" />,
    title: "Catalog Đa Dạng",
    desc: "Kho outfit phong phú từ seller độc lập đến thương hiệu lớn.",
  },
  {
    icon: <TeamOutlined className="text-xl text-emerald-600" />,
    title: "Cộng Đồng Seller",
    desc: "Chia sẻ preset, nhận phản hồi & phát triển shop nhanh.",
  },
  {
    icon: <ShoppingCartOutlined className="text-xl text-emerald-600" />,
    title: "E‑Commerce Tích Hợp",
    desc: "Thanh toán & vận chuyển đồng bộ với nền tảng của bạn.",
  },
];

export default function Features() {
  return (
    <section className="py-12">
      <h3 className="text-3xl md:text-4xl font-extrabold text-center">
        Tại Sao Chọn <span className="text-emerald-600">CustomOutfit3D</span>?
      </h3>

      {/* Flex wrap: 1 cột (mobile), 2 cột (sm), 4 cột (lg) */}
      <div className="mt-8 flex flex-wrap gap-4">
        {items.map((it, idx) => (
          <div
            key={idx}
            className="
              min-w-0
              basis-full
              sm:basis-[calc(50%-0.5rem)]
              lg:basis-[calc(25%-0.75rem)]
              p-5
            "
            style={{
              background: "rgba(255,255,255,.72)",
              backdropFilter: "saturate(150%) blur(12px)",
              boxShadow:
                "0 10px 30px rgba(0,0,0,.06), inset 0 1px 0 rgba(255,255,255,.6)",
              border: "1px solid rgba(255,255,255,.6)",
              borderRadius: 22,
            }}
          >
            <div className="w-10 h-10 rounded-full bg-white grid place-content-center shadow-inner">
              {it.icon}
            </div>
            <div className="mt-3 font-semibold">{it.title}</div>
            <div className="text-sm text-slate-600 mt-1">{it.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}