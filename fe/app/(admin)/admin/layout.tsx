"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChartOutlined,
  TeamOutlined,
  InboxOutlined,
  WarningOutlined,
  SettingOutlined,
} from "@ant-design/icons";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const nav = [
    { href: "/admin", label: "Tổng quan", icon: BarChartOutlined },
    { href: "/admin/users", label: "Người dùng", icon: TeamOutlined },
    { href: "/admin/shop", label: "Người bán", icon: InboxOutlined },
    { href: "/admin/report", label: "Báo cáo", icon: WarningOutlined },
    { href: "/admin/setting", label: "Cài đặt", icon: SettingOutlined },
  ];

  return (
    <div className="min-h-screen flex bg-gray-50 dark:bg-gray-950">
      <aside className="w-72 border-r bg-white dark:bg-gray-900 fixed h-full">
        <div className="p-4 font-bold text-xl">Admin</div>
        <nav className="px-3 space-y-1">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition ${
                  active
                    ? "bg-indigo-600 text-white"
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                <item.icon />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>

      <main className="flex-1 p-8 ml-72">{children}</main>
    </div>
  );
}
