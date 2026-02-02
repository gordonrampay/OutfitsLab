// components/main/homepage/Hero.tsx
"use client";
import { ShoppingOutlined, AppstoreOutlined, PlayCircleOutlined } from "@ant-design/icons";
import Link from "next/link";
import ThreeCard from "./ThreeCard";

export default function Hero() {
  return (
    <section className="w-full pb-20 mt-16">
      {/* Grid layout với khoảng cách rộng hơn */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center">
        
        {/* Left Column */}
        <div className="flex flex-col justify-center space-y-8">
          {/* Badge */}
          <div>
            <span 
              className="inline-block px-4 py-2 text-lg font-bold rounded-full text-slate-800"
              style={{
                background: "rgba(255,255,255,.85)",
                backdropFilter: "saturate(150%) blur(12px)",
                boxShadow: "0 4px 12px rgba(0,0,0,.08), inset 0 1px 0 rgba(255,255,255,.8)",
                border: "1px solid rgba(255,255,255,.8)",
              }}
            >
              🎨 Nền tảng Custom Outfit 3D
            </span>
          </div>

          {/* Heading với spacing tốt hơn */}
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-slate-900">
            Khám Phá Outfit{" "}
            <span className="block mt-2">Hoàn Hảo</span>
            <span className="block mt-3 text-emerald-600">
              Với CustomOutfit3D
            </span>
          </h1>

          {/* Description với line-height tốt hơn */}
          <p className="text-slate-600 max-w-xl text-xl leading-relaxed">
            Trải nghiệm thử đồ ảo trên avatar 3D của bạn với cảm giác chân thực — chỉnh màu,
            vải và phụ kiện chỉ bằng vài cú nhấp!
          </p>

          {/* Buttons - đầy đặn hơn với padding lớn hơn */}
          <div className="flex flex-wrap gap-5">
            <Link
              href="/try-on"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white hover:from-emerald-600 hover:to-emerald-700 font-semibold text-lg transition-all hover:shadow-xl hover:scale-105 active:scale-100"
            >
              <ShoppingOutlined className="text-xl" /> 
              Bắt đầu thử Outfit
            </Link>

            <Link
              href="/catalog"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 border-emerald-300 text-emerald-700 bg-white hover:bg-emerald-50 font-semibold text-lg transition-all hover:shadow-lg hover:border-emerald-400"
            >
              <AppstoreOutlined className="text-xl" /> 
              Khám phá Catalog
            </Link>

            <a
              href="https://youtu.be/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-lg hover:bg-slate-100 transition-all text-slate-700 hover:text-emerald-600"
            >
              <PlayCircleOutlined className="text-xl" /> 
              Xem demo
            </a>
          </div>

          {/* Stats - spacing tốt hơn */}
          <div className="grid grid-cols-3 gap-6 mt-12">
            {[
              { v: "10K+", l: "Mẫu Outfit" },
              { v: "500+", l: "Seller tham gia" },
              { v: "50K+", l: "Lượt hài lòng" },
            ].map((s, i) => (
              <div
                key={i}
                className="p-5 text-center transition-all hover:scale-105"
                style={{
                  background: "rgba(255,255,255,.75)",
                  backdropFilter: "saturate(150%) blur(12px)",
                  boxShadow: "0 10px 30px rgba(0,0,0,.06), inset 0 1px 0 rgba(255,255,255,.6)",
                  border: "1px solid rgba(255,255,255,.7)",
                  borderRadius: 24,
                }}
              >
                <div className="text-3xl font-bold text-emerald-600 mb-2">{s.v}</div>
                <div className="text-slate-600 text-sm font-medium">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - 3D Card */}
        <div className="flex items-center justify-center">
          <div className="w-full max-w-[550px]">
            <ThreeCard
              className="w-full h-[650px]"
              badgeLabel="Avatar 3D"
              tag="Male v1.0 • GLB"
              modelUrl="/model/body/avatar_male.glb"
              scale={1.0}
              position={[0, -0.9, 0]}
              rotation={[0, Math.PI, 0]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}