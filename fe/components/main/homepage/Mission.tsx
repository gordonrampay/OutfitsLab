// components/main/homepage/Mission.tsx
"use client";
import { BulbOutlined, CheckCircleOutlined, SafetyOutlined } from "@ant-design/icons";

export default function Mission() {
  const items = [
    {
      icon: <CheckCircleOutlined className="text-emerald-600" />,
      title: "Hợp gu",
      desc: "Đề xuất outfit dựa trên sở thích & số đo của bạn.",
    },
    {
      icon: <BulbOutlined className="text-emerald-600" />,
      title: "Sáng tạo",
      desc: "Tuỳ biến màu, vải, phụ kiện theo thời gian thực.",
    },
    {
      icon: <SafetyOutlined className="text-emerald-600" />,
      title: "Riêng tư",
      desc: "Dữ liệu avatar được bảo vệ và mã hoá.",
    },
  ];

  return (
    <section className="w-full py-16 md:py-20">
      {/* Grid với khoảng cách rộng hơn */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
        
        {/* Left: nội dung chữ - TO HƠN */}
        <div className="flex flex-col justify-center space-y-6">
          {/* Label */}
          <div>
            <span 
              className="inline-block px-4 py-2 text-sm font-semibold text-emerald-700 uppercase tracking-wide"
              style={{
                background: "rgba(16, 185, 129, 0.1)",
                borderRadius: 20,
              }}
            >
              Sứ mệnh &amp; Mục tiêu
            </span>
          </div>

          {/* Heading - TO HƠN */}
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            <span className="text-slate-900">Sứ Mệnh</span>{" "}
            <span className="text-emerald-600">Của Chúng Tôi</span>
          </h2>

          {/* Description - TO HƠN VỚI MÀU ĐẬM HƠN */}
          <p className="text-slate-700 text-xl leading-relaxed font-medium">
            CustomOutfit3D mang đến trải nghiệm thử đồ ảo vượt trội, giúp bạn hình dung outfit phù hợp với
            cá tính và nhu cầu trong vài giây. Chúng tôi tin rằng thời trang số phải thú vị và đơn giản!
          </p>

          {/* Quote với màu đậm hơn và gradient */}
          <blockquote
            className="text-slate-800 text-lg font-semibold italic pl-6 border-l-4 border-emerald-500 py-3"
            style={{
              background: "linear-gradient(to right, rgba(16, 185, 129, 0.08), transparent)",
              borderRadius: "0 12px 12px 0",
            }}
          >
            Thử trước, yêu sau — đó là CustomOutfit3D!
          </blockquote>

          {/* Bullets - TO VÀ ĐẬM HƠN */}
          <div className="space-y-5 pt-2">
            {items.map((it, i) => (
              <div 
                key={i} 
                className="flex items-start gap-4 p-4 rounded-2xl transition-all hover:bg-white/50 cursor-pointer"
              >
                <div className=" bg-emerald-300 w-10 h-10 rounded-full flex items-center justify-center text-2xl text-black shadow-sm">
                  {it.icon}
                </div>
                <div>
                  <div className="font-bold text-xl text-slate-900 mb-1">{it.title}</div>
                  <div className="text-slate-600 text-base leading-relaxed">{it.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div
            className="w-full max-w-md h-[480px] grid place-content-center transition-all hover:scale-105"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,.85) 0%, rgba(240,253,244,.7) 100%)",
              backdropFilter: "saturate(150%) blur(16px)",
              boxShadow: "0 20px 60px rgba(0,0,0,.08), inset 0 1px 0 rgba(255,255,255,.8)",
              border: "2px solid rgba(16, 185, 129,.15)",
              borderRadius: 28,
            }}
          >
            <div className="flex flex-col items-center gap-6">
              <div 
                className="w-40 h-40 rounded-full bg-gradient-to-br from-emerald-100 to-emerald-200 grid place-content-center shadow-lg text-6xl relative overflow-hidden"
                style={{
                  animation: "float 1s ease-in-out infinite"
                }}
              >
                🎨
              </div>
              
              <div className="text-center space-y-2">
                <div className="text-slate-700 text-base font-bold">
                  Sáng Tạo Thời Trang
                </div>
                <div className="text-slate-500 text-sm">
                  Công nghệ 3D tiên tiến
                </div>
              </div>

              <div className="flex gap-3 flex-wrap justify-center">
                {["3D", "AR", "AI"].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-1.5 text-xs font-bold text-emerald-700 bg-white rounded-full shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
}