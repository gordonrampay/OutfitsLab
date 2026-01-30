"use client";

import { CheckOutlined, CloseOutlined, EyeOutlined } from "@ant-design/icons";

export default function AdminSellersPage() {
  const sellers = [
    { id: 1, name: "Fashion Studio Pro", owner: "Nguyễn Tuấn", email: "tuan@example.com", date: "2024-01-16" },
    { id: 2, name: "Vintage Closet", owner: "Trần Huyền", email: "vintage@example.com", date: "2024-01-15" },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
        Duyệt người bán
      </h1>

      <div className="space-y-5">
        {sellers.map((s) => (
          <div
            key={s.id}
            className="rounded-2xl border bg-white dark:bg-gray-900 dark:border-gray-800 p-6"
          >
            <div className="flex justify-between">
              <div>
                <h3 className="font-semibold text-lg">{s.name}</h3>
                <p className="text-sm text-gray-500">Chủ shop: {s.owner}</p>
                <p className="text-sm text-gray-500">{s.email}</p>
              </div>
              <span className="px-3 py-1 text-xs rounded-full bg-amber-100 text-amber-700">
                Đang chờ
              </span>
            </div>

            <div className="mt-5 flex gap-3">
              <button className="px-5 py-2 rounded-xl bg-emerald-600 text-white">
                <CheckOutlined /> Duyệt
              </button>
              <button className="px-5 py-2 rounded-xl bg-rose-600 text-white">
                <CloseOutlined /> Từ chối
              </button>
              <button className="px-5 py-2 rounded-xl bg-gray-600 text-white">
                <EyeOutlined /> Chi tiết
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
