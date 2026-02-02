// components/main/homepage/Mission.tsx
import { BulbOutlined, CheckCircleOutlined, SafetyOutlined } from "@ant-design/icons";

export default function Mission() {
  const items = [
    {
      icon: <CheckCircleOutlined className="text-emerald-600 mt-1" />,
      title: "Hợp gu",
      desc: "Đề xuất outfit dựa trên sở thích & số đo của bạn.",
    },
    {
      icon: <BulbOutlined className="text-emerald-600 mt-1" />,
      title: "Sáng tạo",
      desc: "Tuỳ biến màu, vải, phụ kiện theo thời gian thực.",
    },
    {
      icon: <SafetyOutlined className="text-emerald-600 mt-1" />,
      title: "Riêng tư",
      desc: "Dữ liệu avatar được bảo vệ và mã hoá.",
    },
  ];

  return (
    <section className="py-10 md:py-14">
      {/* flex dọc -> ngang; tránh bó cục bằng min-w-0 và basis-1/2 */}
      <div className="flex flex-col md:flex-row items-start gap-y-8 md:gap-y-0 md:gap-x-8">
        {/* Left: nội dung chữ */}
        <div className="min-w-0 basis-full md:basis-1/2">
          <div className="text-xs text-slate-500 mb-3">Sứ mệnh &amp; Mục tiêu</div>

          <h2 className="text-3xl md:text-4xl font-extrabold">
            Sứ Mệnh <span className="text-emerald-600">Của Chúng Tôi</span>
          </h2>

          <p className="mt-4 text-slate-600">
            CustomOutfit3D mang đến trải nghiệm thử đồ ảo vượt trội, giúp bạn hình dung outfit phù hợp với
            cá tính và nhu cầu trong vài giây. Chúng tôi tin rằng thời trang số phải thú vị và đơn giản!
          </p>

          {/* Quote dạng glass card – inline style, không cần CSS global */}
          <blockquote
            className="mt-4 text-slate-700"
            style={{
              background: "rgba(255,255,255,.72)",
              backdropFilter: "saturate(150%) blur(12px)",
              boxShadow: "0 10px 30px rgba(0,0,0,.06), inset 0 1px 0 rgba(255,255,255,.6)",
              border: "1px solid rgba(255,255,255,.6)",
              borderRadius: 22,
              padding: 16,
            }}
          >
            “Thử trước, yêu sau — đó là CustomOutfit3D!”
          </blockquote>

          {/* Bullets */}
          <div className="mt-6 space-y-3">
            {items.map((it, i) => (
              <div key={i} className="flex items-start gap-3">
                {it.icon}
                <div>
                  <div className="font-medium">{it.title}</div>
                  <div className="text-slate-600 text-sm">{it.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: card minh hoạ */}
        <div className="min-w-0 basis-full md:basis-1/2">
          <div
            className="h-[420px] grid place-content-center"
            style={{
              background: "rgba(255,255,255,.72)",
              backdropFilter: "saturate(150%) blur(12px)",
              boxShadow: "0 10px 30px rgba(0,0,0,.06), inset 0 1px 0 rgba(255,255,255,.6)",
              border: "1px solid rgba(255,255,255,.6)",
              borderRadius: 22,
            }}
          >
            <div className="w-20 h-20 rounded-full bg-emerald-100 grid place-content-center shadow-inner text-2xl">
              🎨
            </div>
            <div className="text-slate-400 text-sm mt-4 text-center">Sáng Tạo Thời Trang</div>
          </div>
        </div>
      </div>
    </section>
  );
}