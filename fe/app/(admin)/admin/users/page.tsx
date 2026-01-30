"use client";

import { SearchOutlined } from "@ant-design/icons";

export default function AdminUsersPage() {
  const users = [
    { id: 1, name: "Linh Trang", email: "linh@example.com", joined: "2024-01-15", orders: 12, status: "active" },
    { id: 2, name: "Minh Anh", email: "minh@example.com", joined: "2024-01-14", orders: 5, status: "active" },
    { id: 3, name: "Hà Nhi", email: "hani@example.com", joined: "2024-01-13", orders: 0, status: "inactive" },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
        Quản lý người dùng
      </h1>

      <div className="relative max-w-md">
        <SearchOutlined className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          placeholder="Tìm kiếm theo tên hoặc email"
          className="w-full pl-11 pr-4 py-3 rounded-xl border bg-white dark:bg-gray-900 dark:border-gray-700"
        />
      </div>

      <div className="rounded-2xl overflow-hidden border bg-white dark:bg-gray-900 dark:border-gray-800">
        <table className="min-w-full">
          <thead className="bg-gray-50 dark:bg-gray-800">
            <tr>
              <th className="px-6 py-4 text-left text-sm">Tên</th>
              <th className="px-6 py-4 text-left text-sm">Email</th>
              <th className="px-6 py-4 text-left text-sm">Ngày tham gia</th>
              <th className="px-6 py-4 text-left text-sm">Đơn hàng</th>
              <th className="px-6 py-4 text-left text-sm">Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id} className="border-t dark:border-gray-800">
                <td className="px-6 py-4 font-medium">{u.name}</td>
                <td className="px-6 py-4 text-gray-500">{u.email}</td>
                <td className="px-6 py-4">{u.joined}</td>
                <td className="px-6 py-4 text-indigo-600 font-medium">{u.orders}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs ${
                    u.status === "active"
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-gray-200 text-gray-700"
                  }`}>
                    {u.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
