"use client";

import {
  BarChartOutlined,
  TeamOutlined,
  InboxOutlined,
  DollarOutlined,
  LineChartOutlined,
} from "@ant-design/icons";

export default function AdminDashboardPage() {
  const stats = [
    {
      label: "Total Users",
      value: "50,234",
      trend: "+12.5%",
      icon: TeamOutlined,
      color: "from-blue-500 to-indigo-600",
    },
    {
      label: "Active Sellers",
      value: "1,234",
      trend: "+8.2%",
      icon: InboxOutlined,
      color: "from-purple-500 to-violet-600",
    },
    {
      label: "Total Sales",
      value: "$500,234",
      trend: "+45.2%",
      icon: DollarOutlined,
      color: "from-emerald-500 to-teal-600",
    },
    {
      label: "Products Listed",
      value: "12,543",
      trend: "+23.1%",
      icon: BarChartOutlined,
      color: "from-amber-500 to-orange-600",
    },
  ];

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Dashboard
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">
          Tổng quan hệ thống
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="rounded-2xl p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-center justify-between mb-4">
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl text-white bg-gradient-to-br ${stat.color}`}
              >
                <stat.icon />
              </div>
              <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 px-3 py-1 rounded-full">
                {stat.trend}
              </span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {stat.label}
            </p>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="rounded-2xl p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm">
          <h3 className="text-lg font-semibold mb-6 flex items-center gap-3 text-gray-900 dark:text-white">
            <BarChartOutlined className="text-amber-500 text-xl" />
            Doanh số theo tháng
          </h3>
          <div className="h-72 flex items-end gap-4">
            {[65, 78, 85, 72, 90, 95, 88].map((h, i) => (
              <div
                key={i}
                className="flex-1 bg-gradient-to-t from-amber-500 to-amber-400 rounded-t-xl shadow-sm"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
            Thg 1 • Thg 2 • Thg 3 • Thg 4 • Thg 5 • Thg 6 • Thg 7
          </p>
        </div>

        <div className="rounded-2xl p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm">
          <h3 className="text-lg font-semibold mb-6 flex items-center gap-3 text-gray-900 dark:text-white">
            <LineChartOutlined className="text-teal-500 text-xl" />
            Tăng trưởng người dùng
          </h3>
          <div className="h-72 flex items-end gap-4">
            {[30, 42, 55, 68, 75, 82, 88].map((h, i) => (
              <div
                key={i}
                className="flex-1 bg-gradient-to-t from-teal-500 to-teal-400 rounded-t-xl shadow-sm"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
            Thg 1 • Thg 2 • Thg 3 • Thg 4 • Thg 5 • Thg 6 • Thg 7
          </p>
        </div>
      </div>

      <div className="rounded-2xl p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm">
        <h3 className="text-lg font-semibold mb-5 text-gray-900 dark:text-white">
          Tình trạng hệ thống
        </h3>
        <div className="space-y-4">
          {[
            { name: "Server Uptime", value: "99.95%" },
            { name: "API Response Time", value: "145ms" },
            { name: "Database Load", value: "45%" },
            { name: "Error Rate", value: "0.02%" },
          ].map((m, i) => (
            <div key={i} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-emerald-500" />
                <span className="font-medium text-gray-800 dark:text-gray-200">
                  {m.name}
                </span>
              </div>
              <span className="font-bold text-emerald-600 dark:text-emerald-400">
                {m.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
