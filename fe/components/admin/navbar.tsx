"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Try On", href: "/try-on" },
  { label: "Shop", href: "/shop" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="h-14 border-b bg-white flex items-center px-6">
      {/* Logo */}
      <Link href="/" className="font-bold text-lg mr-8">
        VIRTUAL FIT
      </Link>

      {/* Nav items */}
      <div className="flex gap-6">
        {navItems.map((item) => {
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`${
                active
                  ? "text-blue-600 font-semibold"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>

      {/* Right */}
      <div className="ml-auto flex gap-4">
        <Link href="/sign-in" className="text-sm text-gray-600">
          Login
        </Link>
        <Link
          href="/sign-up"
          className="px-3 py-1 text-sm rounded bg-black text-white"
        >
          Sign up
        </Link>
      </div>
    </nav>
  );
}
