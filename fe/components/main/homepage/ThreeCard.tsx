
"use client";

import dynamic from "next/dynamic";
import { AppstoreOutlined } from "@ant-design/icons";
import React from "react";

const ThreeScene = dynamic(() => import("./ThreeScene"), { ssr: false });

type ThreeCardProps = {
  className?: string;
  badgeLabel?: string;
  tag?: string;
  modelUrl?: string;
  scale?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
  controls?: boolean;
  zoomLimits?: [number, number];
  polarLimits?: [number, number];
  enableShadows?: boolean;
};

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
      className={cx("relative p-4", className)}
      style={{
        background: "rgba(255,255,255,.72)",
        backdropFilter: "saturate(150%) blur(12px)",
        boxShadow:
          "0 10px 30px rgba(0,0,0,.06), inset 0 1px 0 rgba(255,255,255,.6)",
        border: "1px solid rgba(255,255,255,.6)",
        borderRadius: 22,
      }}
    >
      <div className="w-full h-full rounded-[18px] overflow-hidden relative">
        <ThreeScene
          className="w-full h-full"
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

      <div
        className="absolute top-6 right-6 flex items-center gap-2 px-3 py-2 text-sm text-emerald-700"
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

      <div
        className="absolute bottom-6 left-6 text-xs text-emerald-600"
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