# OutfitsLab
3) Chức năng & Use Cases
3.1 Thử nghiệm các mẫu quần áo 3D
• User chọn item 3D từ catalog → hệ thống render lên avatar (chọn avatar chuẩn hoặc tạo avatar theo số đo: height, chest, waist, hip, etc.).
• Tùy chỉnh (màu, size, material preset), xoay/zoom, chụp ảnh snapshot.
• Lưu phiên thử (ảnh render + metadata) vào hồ sơ.
• Download/Share snapshot (tùy chính sách & watermarks).
• Gợi ý size dựa trên số đo/AI (size recommendation).
3.2 Lưu trữ các mẫu thử nghiệm
• Lưu mô hình 3D (GLB/FBX/OBJ) theo item, phiên bản, vật liệu (PBR).
• Lưu phiên thử: avatar config + item config + render snapshot + thời gian.
• Quản lý thư viện cá nhân (xem/sửa/xóa).
3.3 Tìm quần áo trên gian hàng online
• Tìm kiếm theo từ khóa/bộ lọc (giá, brand, size, chất liệu).
• Đồng bộ dữ liệu từ đối tác (qua API: sản phẩm, giá, tồn kho, link).
• Deep-link/affiliate tới trang mua hàng của gian hàng.
3.4 Quản lý thông tin tài khoản
• Đăng ký/Đăng nhập (Email/Password, OAuth Google/Apple).
• Chỉnh sửa profile (tên, ảnh, số đo).
• Bảo mật (MFA, đổi mật khẩu, hoạt động đăng nhập).
• Wishlist, lịch sử thử, các sản phẩm đã xem.
• Xuất/khôi phục dữ liệu cá nhân (Data portability, GDPR-like).
3.5 Quản lý user dành cho admin
• CRUD người dùng, khóa/tạm dừng, reset MFA.
• Phân quyền (Admin/Moderator/Support).
• Kiểm duyệt mẫu 3D, nội dung mô tả.
• Nhật ký hoạt động (audit log).
3.6 Biểu đồ khảo sát mặt hàng yêu thích
• Thu thập sự kiện (view, try-on, add-to-wishlist, click-out).
• Tổng hợp & hiển thị biểu đồ: Top items, Top categories, tương tác theo thời gian, heatmap.
• Xuất báo cáo (CSV/PDF), đặt lịch gửi email.