# PHÂN TÍCH & THIẾT KẾ HỆ THỐNG

*(System Analysis & Design)*

## 1. Phân tích hệ thống (System Analysis)

### 1.1 Mục tiêu hệ thống

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
