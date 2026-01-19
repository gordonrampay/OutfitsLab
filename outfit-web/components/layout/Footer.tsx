"use client";
import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-10 lg:px-12">
        {/* Bố cục chính */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* CỘT 1: LOGO & GIỚI THIỆU */}
          <div className="space-y-6">
            <div className="flex items-center text-2xl font-black italic tracking-tighter">
              <span className="text-[#4F46E5]">Outfits</span>
              <span className="text-[#EC4899]">Lab</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Nền tảng thiết kế trang phục 3D tiên phong, giúp bạn khẳng định phong cách cá nhân qua từng đường kim mũi chỉ ảo.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4 pt-2">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-primary-gold hover:text-white transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* CỘT 2: KHÁCH HÀNG (SHOP) */}
          <div>
            <h4 className="font-bold text-gray-900 mb-7 text-lg">Cửa Hàng</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              {["Thời trang Nam", "Thời trang Nữ", "Phụ kiện", "Bộ sưu tập mới"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-primary-gold transition-colors flex items-center gap-2 group">
                    <span className="w-0 h-px bg-primary-gold group-hover:w-3 transition-all"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CỘT 3: DÀNH CHO SELLER */}
          <div>
            <h4 className="font-bold text-gray-900 mb-7 text-lg">Đối Tác</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              {["Trở thành Seller", "Quy trình thiết kế 3D", "Cộng đồng Designer", "Chính sách chiết khấu"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-primary-gold transition-colors flex items-center gap-2 group">
                    <span className="w-0 h-px bg-primary-gold group-hover:w-3 transition-all"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CỘT 4: LIÊN HỆ */}
          <div>
            <h4 className="font-bold text-gray-900 mb-7 text-lg">Liên Hệ</h4>
            <ul className="space-y-5 text-sm text-gray-500">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary-gold shrink-0" />
                <span>Khu Công Nghệ Cao, Quận 9, TP. Hồ Chí Minh</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary-gold shrink-0" />
                <a href="mailto:contact@outfitslab.com" className="hover:text-primary-gold transition-colors">contact@outfitslab.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary-gold shrink-0" />
                <a href="tel:+84123456789" className="hover:text-primary-gold transition-colors">+84 123 456 789</a>
              </li>
            </ul>
          </div>

        </div>

        {/* DÒNG BẢN QUYỀN (BOTTOM BAR) */}
        <div className="pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[12px] text-gray-400 font-medium">
            © 2026 <span className="text-gray-600">OutfitsLab Team</span>. All rights reserved.
          </p>
          <div className="flex gap-8 text-[12px] text-gray-400 font-medium">
            <a href="#" className="hover:text-gray-900 transition-colors">Điều khoản dịch vụ</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Chính sách bảo mật</a>
          </div>
        </div>
      </div>
    </footer>
  );
}