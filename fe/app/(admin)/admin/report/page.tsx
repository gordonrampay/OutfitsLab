"use client";

export default function AdminReportsPage() {
  const reports = [
    { id: 1, type: "Sản phẩm vi phạm", desc: "Hàng giả", date: "2 giờ trước", level: "high" },
    { id: 2, type: "Khiếu nại người dùng", desc: "Không đúng mô tả", date: "1 ngày trước", level: "medium" },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
        Báo cáo & khiếu nại
      </h1>

      <div className="space-y-4">
        {reports.map((r) => (
          <div
            key={r.id}
            className="rounded-2xl border bg-white dark:bg-gray-900 dark:border-gray-800 p-5 flex justify-between"
          >
            <div>
              <h3 className="font-medium">{r.type}</h3>
              <p className="text-sm text-gray-500">{r.desc}</p>
              <p className="text-xs text-gray-400 mt-1">{r.date}</p>
            </div>
            <span className={`px-3 py-1 h-fit text-xs rounded-full ${
              r.level === "high"
                ? "bg-red-100 text-red-700"
                : "bg-amber-100 text-amber-700"
            }`}>
              {r.level}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
