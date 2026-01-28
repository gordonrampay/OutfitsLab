/* eslint-disable @typescript-eslint/no-explicit-any */
// app/(admin)/dashboard/page.tsx
"use client";

import {
  BarChartOutlined,
  TeamOutlined,
  LineChartOutlined,
  InboxOutlined,
  DollarOutlined,
  EyeOutlined,
  WarningOutlined,
  SettingOutlined,
  CheckOutlined,
  CloseOutlined,
  SearchOutlined,
  DownloadOutlined,
  BellOutlined,
  SunOutlined,
  MoonOutlined,
} from "@ant-design/icons";
import { useState, useEffect } from "react";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<"overview" | "users" | "sellers" | "reports" | "settings">("overview");
  const [sellerFilter, setSellerFilter] = useState<"all" | "pending" | "approved" | "blocked">("all");


  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window === "undefined") return true; 
    const saved = localStorage.getItem("theme");
    return saved !== "light"; 
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  // Dữ liệu
  const stats = [
    { label: "Total Users", value: "50,234", trend: "+12.5%", icon: TeamOutlined, color: "blue" },
    { label: "Active Sellers", value: "1,234", trend: "+8.2%", icon: InboxOutlined, color: "purple" },
    { label: "Total Sales", value: "$500,234", trend: "+45.2%", icon: DollarOutlined, color: "emerald" },
    { label: "Products Listed", value: "12,543", trend: "+23.1%", icon: BarChartOutlined, color: "amber" },
  ];

  const recentUsers = [
    { id: 1, name: "Linh Trang", email: "linh@example.com", joinedAt: "2024-01-15", status: "active", orders: 12 },
    { id: 2, name: "Minh Anh", email: "minh@example.com", joinedAt: "2024-01-14", status: "active", orders: 5 },
    { id: 3, name: "Hà Nhi", email: "hani@example.com", joinedAt: "2024-01-13", status: "inactive", orders: 0 },
    { id: 4, name: "Tuấn Kiệt", email: "tuanKiet@example.com", joinedAt: "2024-01-12", status: "active", orders: 8 },
    { id: 5, name: "Quỳnh Anh", email: "quinhanh@example.com", joinedAt: "2024-01-11", status: "active", orders: 3 },
  ];

  const pendingSellers = [
    { id: 1, name: "Fashion Studio Pro", owner: "Nguyễn Tuấn", email: "tuanfashion@example.com", submittedAt: "2024-01-16", verificationDocs: 3 },
    { id: 2, name: "Vintage Closet", owner: "Trần Huyền", email: "vintage@example.com", submittedAt: "2024-01-15", verificationDocs: 4 },
    { id: 3, name: "Modern Threads", owner: "Lê Quỳnh", email: "modern@example.com", submittedAt: "2024-01-14", verificationDocs: 2 },
  ];

  const systemMetrics = [
    { name: "Server Uptime", value: "99.95%", status: "healthy" },
    { name: "API Response Time", value: "145ms", status: "healthy" },
    { name: "Database Load", value: "45%", status: "healthy" },
    { name: "Error Rate", value: "0.02%", status: "healthy" },
  ];

  const filteredSellers = pendingSellers;

  return (
    <div className={`min-h-screen ${isDark ? "dark bg-gray-950" : "bg-gray-50"} text-black transition-colors duration-300 font-sans`}>
      {/* Header - Giống hệt ảnh */}
      <header className={`${isDark ? "bg-gray-950 border-gray-800" : "bg-white border-gray-200"} border-b sticky top-0 z-50 backdrop-blur-md`}>
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo + Title */}
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-linear-to-br from-indigo-500 to-blue-600 flex items-center justify-center  font-bold shadow">
                O
              </div>
              <div>
                <h1 className="text-xl font-bold  dark:text-white">Dashboard</h1>
                <p className="text-xs text-gray-400">Next.js Admin Dashboard Solution</p>
              </div>
            </div>

            {/* Right side */}
            <div className="flex items-center gap-4 md:gap-6">
              {/* Theme Toggle */}
              <button
                onClick={() => setIsDark(!isDark)}
                className="p-2 rounded-full hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle theme"
              >
                {isDark ? <SunOutlined className="text-xl text-amber-400" /> : <MoonOutlined className="text-xl text-indigo-400" />}
              </button>

              {/* Bell Notification */}
              <button className="p-2 rounded-full hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors relative">
                <BellOutlined className="text-xl text-gray-300" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              {/* Avatar + Name */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-linear-to-brrom-purple-500 to-pink-500 flex items-center justify-center text-white font-bold shadow">
                  Đ
                </div>
                <div className="hidden md:block">
                  <p className="font-medium text-white dark:text-white">Đại</p>
                  <p className="text-xs text-gray-400">Admin</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar bên trái */}
      <aside className="fixed inset-y-0 left-0 z-40 w-72 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 overflow-y-auto shadow-sm lg:block hidden">
        <nav className="p-4 mt-14">
          <ul className="space-y-1.5">
            {[
              { id: "overview", label: "Tổng quan", icon: BarChartOutlined },
              { id: "users", label: "Người dùng", icon: TeamOutlined },
              { id: "sellers", label: "Người bán", icon: InboxOutlined },
              { id: "reports", label: "Báo cáo", icon: WarningOutlined },
              { id: "settings", label: "Cài đặt", icon: SettingOutlined },
            ].map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveTab(item.id as any)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    activeTab === item.id
                      ? "bg-indigo-50 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 shadow-sm"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800/70"
                  }`}
                >
                  <item.icon className="text-xl" />
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="lg:ml-72">
        <main className="p-6 lg:p-10">
          {activeTab === "overview" && (
            <div className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, i) => {
                  const colors = {
                    blue: "from-blue-500 to-indigo-600",
                    purple: "from-purple-500 to-violet-600",
                    emerald: "from-emerald-500 to-teal-600",
                    amber: "from-amber-500 to-orange-600",
                  };
                  return (
                    <div
                      key={i}
                      className={`rounded-2xl p-6 shadow-md border ${
                        isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-100"
                      } hover:shadow-xl transition-shadow duration-300`}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl text-white bg-linear-to-br ${colors[stat.color as keyof typeof colors]}`}>
                          <stat.icon />
                        </div>
                        <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 px-3 py-1 rounded-full">
                          {stat.trend}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{stat.label}</p>
                      <p className="text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                    </div>
                  );
                })}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className={`rounded-2xl p-6 shadow-md border ${isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-100"}`}>
                  <h3 className="text-lg font-semibold mb-5 flex items-center gap-3 text-gray-900 dark:text-white">
                    <BarChartOutlined className="text-amber-500 text-2xl" />
                    Doanh số theo tháng
                  </h3>
                  <div className="h-72 flex items-end gap-4">
                    {[65, 78, 85, 72, 90, 95, 88].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-linear-to-t from-amber-500 to-amber-400 rounded-t-xl transition-all hover:scale-y-110 origin-bottom shadow-sm"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                  <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
                    Thg 1 • Thg 2 • Thg 3 • Thg 4 • Thg 5 • Thg 6 • Thg 7
                  </p>
                </div>

                <div className={`rounded-2xl p-6 shadow-md border ${isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-100"}`}>
                  <h3 className="text-lg font-semibold mb-5 flex items-center gap-3 text-gray-900 dark:text-white">
                    <LineChartOutlined className="text-teal-500 text-2xl" />
                    Tăng trưởng người dùng
                  </h3>
                  <div className="h-72 flex items-end gap-4">
                    {[30, 42, 55, 68, 75, 82, 88].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-linear-to-trom-teal-500 to-teal-400 rounded-t-xl transition-all hover:scale-y-110 origin-bottom shadow-sm"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                  <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
                    Thg 1 • Thg 2 • Thg 3 • Thg 4 • Thg 5 • Thg 6 • Thg 7
                  </p>
                </div>
              </div>

              <div className={`rounded-2xl p-6 shadow-md border ${isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-100"}`}>
                <h3 className="text-lg font-semibold mb-6 text-gray-900 dark:text-white">Tình trạng hệ thống</h3>
                <div className="space-y-4">
                  {systemMetrics.map((m, i) => (
                    <div key={i} className="flex items-center justify-between py-2">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-emerald-500" />
                        <span className="font-medium text-gray-800 dark:text-gray-200">{m.name}</span>
                      </div>
                      <span className="font-bold text-emerald-600 dark:text-emerald-400">{m.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* USERS TAB */}
          {activeTab === "users" && (
            <div className="space-y-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <SearchOutlined className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
                  <input
                    type="text"
                    placeholder="Tìm kiếm theo tên hoặc email..."
                    className={`w-full pl-12 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all shadow-sm ${
                      isDark ? "bg-gray-800 border-gray-700 text-white" : "bg-white border-gray-300 text-gray-900"
                    }`}
                  />
                </div>
                <button className="inline-flex items-center gap-3 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl transition-all shadow-md">
                  <DownloadOutlined />
                  Export
                </button>
              </div>

              <div className={`rounded-2xl overflow-hidden shadow-md border ${isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-100"}`}>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className={`${isDark ? "bg-gray-900/50" : "bg-gray-50"}`}>
                      <tr>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Người dùng</th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Email</th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Ngày tham gia</th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Đơn hàng</th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Trạng thái</th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Hành động</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                      {recentUsers.map((user) => (
                        <tr key={user.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                          <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white">{user.name}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{user.email}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{user.joinedAt}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-indigo-600 dark:text-indigo-400 font-medium">{user.orders}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span
                              className={`inline-flex px-3 py-1 text-xs font-medium rounded-full ${
                                user.status === "active"
                                  ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300"
                                  : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
                              }`}
                            >
                              {user.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <button className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-medium">
                              Xem
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* SELLERS TAB */}
          {activeTab === "sellers" && (
            <div className="space-y-8">
              <div className="flex flex-wrap gap-3">
                {["all", "pending", "approved", "blocked"].map((f) => (
                  <button
                    key={f}
                    onClick={() => setSellerFilter(f as any)}
                    className={`px-5 py-2 text-sm font-medium rounded-full transition-all ${
                      sellerFilter === f
                        ? "bg-indigo-600 text-white shadow-sm"
                        : "bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-indigo-400"
                    }`}
                  >
                    {f === "pending" ? "Đang chờ duyệt" : f.charAt(0).toUpperCase() + f.slice(1)}
                  </button>
                ))}
              </div>

              <div className="space-y-5">
                {filteredSellers.map((seller) => (
                  <div
                    key={seller.id}
                    className={`rounded-2xl border p-6 shadow-md hover:shadow-xl transition-shadow ${
                      isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-100"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4 mb-5">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{seller.name}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Chủ: {seller.owner}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{seller.email}</p>
                      </div>
                      <span className="px-3 py-1 text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-950/40 dark:text-amber-300 rounded-full">
                        Đang chờ
                      </span>
                    </div>

                    <div className="pt-5 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between text-sm">
                      <div className="text-gray-500 dark:text-gray-400">
                        Nộp: {seller.submittedAt} • {seller.verificationDocs} tài liệu
                      </div>
                      <div className="flex gap-3">
                        <button className="inline-flex items-center gap-2 px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium rounded-xl transition-all shadow-sm">
                          <CheckOutlined /> Duyệt
                        </button>
                        <button className="inline-flex items-center gap-2 px-5 py-2 bg-rose-600 hover:bg-rose-700 text-white text-sm font-medium rounded-xl transition-all shadow-sm">
                          <CloseOutlined /> Từ chối
                        </button>
                        <button className="inline-flex items-center gap-2 px-5 py-2 bg-gray-600 hover:bg-gray-700 text-white text-sm font-medium rounded-xl transition-all shadow-sm">
                          <EyeOutlined /> Xem chi tiết
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* REPORTS TAB */}
          {activeTab === "reports" && (
            <div className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: "Vấn đề đang chờ", value: "24", color: "amber" },
                  { title: "Tháng này", value: "156", color: "teal" },
                  { title: "Đã giải quyết", value: "892", color: "emerald" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`rounded-2xl p-6 shadow-md border ${
                      isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-100"
                    }`}
                  >
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{item.title}</p>
                    <p className={`text-4xl font-bold ${item.color === "amber" ? "text-amber-600" : item.color === "teal" ? "text-teal-600" : "text-emerald-600"} mb-4`}>
                      {item.value}
                    </p>
                    <button className={`text-sm font-medium transition-opacity ${
                      item.color === "amber" ? "text-amber-600 hover:text-amber-700" : item.color === "teal" ? "text-teal-600 hover:text-teal-700" : "text-emerald-600 hover:text-emerald-700"
                    }`}>
                      Xem tất cả
                    </button>
                  </div>
                ))}
              </div>

              <div className={`rounded-2xl p-6 shadow-md border ${isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-100"}`}>
                <h3 className="text-lg font-semibold mb-6 flex items-center gap-3 text-gray-900 dark:text-white">
                  <WarningOutlined className="text-amber-500 text-2xl" />
                  Vấn đề gần đây
                </h3>
                <div className="space-y-4">
                  {[
                    { type: "Vi phạm sản phẩm", desc: "Người bán tải lên sản phẩm cấm", date: "2 giờ trước", severity: "high" },
                    { type: "Khiếu nại người dùng", desc: "Báo cáo sản phẩm giả mạo", date: "5 giờ trước", severity: "high" },
                    { type: "Vấn đề thanh toán", desc: "Tranh chấp giao dịch thất bại", date: "1 ngày trước", severity: "medium" },
                    { type: "Kiểm tra chất lượng", desc: "Hình ảnh sản phẩm không khớp mô tả", date: "2 ngày trước", severity: "medium" },
                  ].map((issue, i) => (
                    <div
                      key={i}
                      className="flex items-start justify-between p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700"
                    >
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">{issue.type}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{issue.desc}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{issue.date}</p>
                      </div>
                      <span
                        className={`px-3 py-1 text-xs font-medium rounded-full ${
                          issue.severity === "high" ? "bg-red-100 text-red-700 dark:bg-red-950/40 dark:text-red-300" : "bg-amber-100 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300"
                        }`}
                      >
                        {issue.severity}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* SETTINGS TAB */}
          {activeTab === "settings" && (
            <div className="space-y-10 max-w-3xl mx-auto">
              <div className={`rounded-2xl p-6 shadow-md border ${isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-100"}`}>
                <h3 className="text-lg font-semibold mb-6 flex items-center gap-3 text-gray-900 dark:text-white">
                  <SettingOutlined className="text-amber-500 text-2xl" />
                  Cài đặt hệ thống
                </h3>
                <div className="space-y-5">
                  {[
                    { label: "Chế độ bảo trì", desc: "Vô hiệu hóa truy cập người dùng để cập nhật hệ thống" },
                    { label: "Thông báo email", desc: "Gửi cảnh báo cho các vấn đề nghiêm trọng", checked: true },
                    { label: "Duyệt tự động người bán mới", desc: "Tự động duyệt người bán đáp ứng yêu cầu" },
                  ].map((setting, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700">
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">{setting.label}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{setting.desc}</p>
                      </div>
                      <input
                        type="checkbox"
                        className="w-5 h-5 text-indigo-600 rounded border-gray-300 dark:border-gray-600 focus:ring-indigo-500"
                        defaultChecked={setting.checked}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className={`rounded-2xl p-6 shadow-md border ${isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-100"}`}>
                <h3 className="text-lg font-semibold mb-5 text-gray-900 dark:text-white">Cài đặt hoa hồng</h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                      Tỷ lệ hoa hồng chuẩn (%)
                    </label>
                    <input
                      type="number"
                      defaultValue={15}
                      className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all shadow-sm ${
                        isDark ? "bg-gray-800 border-gray-700 text-white" : "bg-white border-gray-300 text-gray-900"
                      }`}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                      Giảm giá cho người bán cao cấp (%)
                    </label>
                    <input
                      type="number"
                      defaultValue={5}
                      className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all shadow-sm ${
                        isDark ? "bg-gray-800 border-gray-700 text-white" : "bg-white border-gray-300 text-gray-900"
                      }`}
                    />
                  </div>
                </div>
              </div>

              <button className="w-full py-3 bg-linear-to-r from-indigo-600 to-indigo-500 hover:from-indigo-700 hover:to-indigo-600 text-white font-medium rounded-xl shadow-md transition-all">
                Lưu cài đặt
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}