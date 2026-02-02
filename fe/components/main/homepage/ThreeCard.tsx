// components/main/homepage/ThreeCard.tsx
"use client";

import dynamic from "next/dynamic";
import { AppstoreOutlined } from "@ant-design/icons";
import React from "react";

// Dynamic import để tắt SSR cho Canvas (bắt buộc với three.js ở Next App Router)
const ThreeScene = dynamic(() => import("./ThreeScene"), { ssr: false });

type ThreeCardProps = {
  /** Cho phép truyền className để điều khiển kích thước từ bên ngoài (w/h, max-w, responsive…) */
  className?: string;
  /** Nhãn badge nổi góc trên phải */
  badgeLabel?: string;
  /** Tag nhỏ góc trái dưới */
  tag?: string;

  /** Đường dẫn model 3D trong public/ */
  modelUrl?: string;
  /** scale tổng thể của model */
  scale?: number;
  /** vị trí [x,y,z] của model */
  position?: [number, number, number];
  /** góc quay [x,y,z] radians của model */
  rotation?: [number, number, number];

  /** Bật/tắt OrbitControls trong ThreeScene */
  controls?: boolean;
  /** Giới hạn zoom [min, max] trong ThreeScene */
  zoomLimits?: [number, number];
  /** Giới hạn góc dọc (polar) [min, max] trong ThreeScene */
  polarLimits?: [number, number];
  /** Bật/tắt shadows trong ThreeScene */
  enableShadows?: boolean;
};

/** Tiện ích gộp className mà không cần cài thêm clsx */
function cx(...args: Array<string | undefined | false>) {
  return args.filter(Boolean).join(" ");
}

export default function ThreeCard({
  className,
  badgeLabel = "Sẵn sàng thử",
  tag = "Avatar Nam • v1.0",
  modelUrl = "/model/body/avatar_male.glb",
  scale = 1.0,
  position = [0, -0.9, 0],
  rotation = [0, Math.PI, 0],
  controls = true,
  zoomLimits = [2.2, 5.5],
  polarLimits = [Math.PI / 3, Math.PI / 2],
  enableShadows = false,
}: ThreeCardProps) {
  return (
    <div
      // 👉 KHÔNG ép width cứng ở đây.
      // Hãy truyền từ ngoài: ví dụ "w-full max-w-[520px] h-[520px]"
      className={cx("relative w-full p-4", className)}
      // Glass card (không cần CSS global)
      style={{
        background: "rgba(255,255,255,.72)",
        backdropFilter: "saturate(150%) blur(12px)",
        boxShadow:
          "0 10px 30px rgba(0,0,0,.06), inset 0 1px 0 rgba(255,255,255,.6)",
        border: "1px solid rgba(255,255,255,.6)",
        borderRadius: 22,
      }}
    >
      {/* Region chứa Canvas – phải có kích thước cụ thể để Canvas fill */}
      <div className="w-full h-full rounded-[18px] overflow-hidden">
        <ThreeScene
          className="w-full h-full"         // Canvas fill toàn bộ khung
          modelUrl={modelUrl}
          scale={scale}
          position={position}
          rotation={rotation}
          controls={controls}
          zoomLimits={zoomLimits}
          polarLimits={polarLimits}
          enableShadows={enableShadows}
        />
      </div>

      {/* Badge góc phải */}
      <div
        className="absolute top-4 right-4 flex items-center gap-2 px-3 py-2 text-sm"
        style={{
          background: "rgba(255,255,255,.9)",
          backdropFilter: "blur(8px)",
          borderRadius: 12,
          boxShadow: "0 10px 30px rgba(0,0,0,.06)",
        }}
      >
        <AppstoreOutlined className="text-emerald-600" />
        <span className="font-medium">{badgeLabel}</span>
      </div>

      {/* Tag góc trái dưới */}
      <div
        className="absolute bottom-4 left-4 text-xs"
        style={{
          background: "rgba(255,255,255,.9)",
          backdropFilter: "blur(8px)",
          borderRadius: 12,
          boxShadow: "0 10px 30px rgba(0,0,0,.06)",
          padding: "6px 10px",
        }}
      >
        {tag}
      </div>
    </div>
  );
}