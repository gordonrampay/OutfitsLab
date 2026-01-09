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
5.  PHÂN TÍCH & THIẾT KẾ HỆ THỐNG

*(System Analysis & Design)*

 1. Phân tích hệ thống (System Analysis)

1.1 Mục tiêu hệ thống

* Xây dựng hệ thống **phòng thử đồ 3D trên nền web** kết hợp **thương mại điện tử**
* Cho phép người dùng:
  * Thử quần áo 3D trên avatar cá nhân
  * Tuỳ chỉnh màu sắc, logo, text
  * Lưu outfit, thêm vào giỏ hàng và thanh toán trực tuyến
* Hỗ trợ quản trị sản phẩm, đơn hàng cho admin

---

### 1.2 Đối tượng sử dụng hệ thống

* **Khách hàng (User)**
  * Xem catalog sản phẩm
  * Custom outfit 3D
  * Quản lý giỏ hàng
  * Thanh toán và theo dõi đơn hàng
* **Quản trị viên (Admin)**
  * Quản lý sản phẩm (CRUD)
  * Quản lý đơn hàng
  * Quản lý người dùng

---

### 1.3 Phạm vi hệ thống

* Hệ thống chạy trên nền **Web**
* Bao gồm:
  * Frontend (UI + 3D Viewer)
  * Backend (API + xử lý nghiệp vụ)
  * Database (lưu trữ dữ liệu)
  * Dịch vụ bên thứ ba (Stripe, Email, Cloudinary)

---

### 1.4 Yêu cầu chức năng (Functional Requirements)

#### Đối với người dùng

* Đăng ký / đăng nhập tài khoản
* Xem danh sách sản phẩm (catalog)
* Chọn và thử đồ 3D trên avatar
* Tuỳ chỉnh màu sắc, logo
* Lưu outfit yêu thích
* Thêm sản phẩm vào giỏ hàng
* Thanh toán đơn hàng (Stripe)
* Nhận email xác nhận đơn hàng

#### Đối với admin

* Quản lý sản phẩm (thêm / sửa / xoá)
* Quản lý đơn hàng
* Xem danh sách người dùng

---

### 1.5 Yêu cầu phi chức năng (Non-Functional Requirements)

* **Hiệu năng:** Load 3D mượt, tối ưu model
* **Bảo mật:** JWT, không lưu thông tin thẻ
* **Khả năng mở rộng:** Dễ mở rộng tính năng e-commerce
* **Khả năng bảo trì:** Code chia module rõ ràng
* **Khả năng tương thích:** Responsive desktop & mobile