import { ShoppingOutlined, AppstoreOutlined, PlayCircleOutlined } from "@ant-design/icons";
import Link from "next/link";
import ThreeCard from "./ThreeCard";

export default function Hero() {
  return (
    <section className="pt-16 pb-14 md:pb-20">
      {/* flex dọc -> ngang; gap tách riêng theo trục */}
      <div className="flex flex-col md:flex-row items-center md:items-stretch gap-y-10 md:gap-y-0 md:gap-x-10">
        
        {/* Left */}
        <div className="min-w-0 basis-full md:basis-1/2 grow md:grow-0">
          <div className="text-xs text-slate-500 mb-3">
            <span
              className="inline-block px-2 py-1"
              style={{
                background: "rgba(255,255,255,.7)",
                backdropFilter: "blur(6px)",
                border: "1px solid rgba(255,255,255,.6)",
                borderRadius: 999,
                boxShadow: "inset 0 1px 0 rgba(255,255,255,.6)",
              }}
            >
              🎨 Nền tảng Custom Outfit 3D
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Khám Phá Outfit <span className="text-slate-900">Hoàn Hảo</span>
            <br />
            <span className="text-emerald-600">Với CustomOutfit3D</span>
          </h1>

          <p className="mt-4 text-slate-600 max-w-xl">
            Trải nghiệm thử đồ ảo trên avatar 3D của bạn với cảm giác chân thực — chỉnh màu,
            vải và phụ kiện chỉ bằng vài cú nhấp!
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/try-on"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-emerald-500 text-white hover:bg-emerald-600"
            >
              <ShoppingOutlined /> Bắt đầu thử Outfit
            </Link>

            <Link
              href="/catalog"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-full border border-emerald-200 text-emerald-700 bg-white/80 hover:bg-white"
            >
              <AppstoreOutlined /> Khám phá Catalog
            </Link>

            <a
              href="https://youtu.be/"
              target="_blank"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-full"
              style={{
                background: "rgba(255,255,255,.72)",
                backdropFilter: "saturate(150%) blur(12px)",
                boxShadow: "0 10px 30px rgba(0,0,0,.06), inset 0 1px 0 rgba(255,255,255,.6)",
                border: "1px solid rgba(255,255,255,.6)",
              }}
            >
              <PlayCircleOutlined /> Xem demo
            </a>
          </div>

          {/* Stats */}
          <div className="mt-7 grid grid-cols-3 gap-4 text-sm">
            {[
              { v: "10K+", l: "Mẫu Outfit" },
              { v: "500+", l: "Seller tham gia" },
              { v: "50K+", l: "Lượt hài lòng" },
            ].map((s, i) => (
              <div
                key={i}
                className="p-3 text-center"
                style={{
                  background: "rgba(255,255,255,.72)",
                  backdropFilter: "saturate(150%) blur(12px)",
                  boxShadow: "0 10px 30px rgba(0,0,0,.06), inset 0 1px 0 rgba(255,255,255,.6)",
                  border: "1px solid rgba(255,255,255,.6)",
                  borderRadius: 22,
                }}
              >
                <div className="text-xl font-bold">{s.v}</div>
                <div className="text-slate-500">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="min-w-0 basis-full md:basis-1/2 grow md:grow-0 flex justify-center">
          <ThreeCard
            className="w-full max-w-[520px]"   // 👈 parent kiểm soát kích thước card
            badgeLabel="Avatar 3D"
            tag="Male v1.0 • GLB"
            modelUrl="/model/body/avatar_male.glb"
            scale={1.0}
            position={[0, -0.9, 0]}
            rotation={[0, Math.PI, 0]}
          />
        </div>
      </div>

      {/* Nút tròn nổi (ví dụ chat/contact) */}
      <a
        href="/contact"
        className="fixed right-6 bottom-6 w-12 h-12 grid place-content-center rounded-full text-white"
        style={{
          background: "linear-gradient(135deg, #f87171, #ef4444)",
          boxShadow: "0 8px 24px rgba(0,0,0,.15)",
        }}
        aria-label="Liên hệ"
      >
        ●
      </a>
    </section>
  );
}
