# OutfitsLab

### **2.1. Mục tiêu xây dựng hệ thống**

Hệ thống **Website thử nghiệm outfit cho khách hàng** được xây dựng nhằm giải quyết các hạn chế của việc mua sắm thời trang trực tuyến truyền thống, đồng thời tận dụng các công nghệ web và đồ họa 3D hiện đại để nâng cao trải nghiệm người dùng.

Các mục tiêu chính của hệ thống bao gồm:

* Xây dựng nền tảng thử nghiệm trang phục trực tuyến dựa trên công nghệ 3D, cho phép người dùng quan sát trang phục một cách trực quan.
* Hỗ trợ người dùng yêu thích thời trang thử nhiều mẫu quần áo khác nhau trước khi đưa ra quyết định mua hàng.
* Tạo môi trường kết nối giữa người mua và các cửa hàng thời trang nhỏ (seller), giúp mở rộng kênh bán hàng trực tuyến.
* Góp phần giảm tỷ lệ hoàn trả sản phẩm do không phù hợp kiểu dáng hoặc phong cách.
* Nâng cao tính cạnh tranh và khả năng tiếp cận khách hàng cho các cửa hàng thời trang nhỏ.

### **2.2. Đối tượng sử dụng hệ thống**

Hệ thống hướng đến các nhóm đối tượng chính sau:

* **Người dùng cá nhân**

  Là những người yêu thích thời trang, có nhu cầu thử trang phục online và mua sắm tiện lợi.
* **Cửa hàng thời trang / Seller**

  Các cửa hàng kinh doanh thời trang quy mô nhỏ, bán hàng trực tuyến và muốn giới thiệu sản phẩm thông qua hình thức thử đồ 3D.
* **Quản trị viên (Admin)**

  Người quản lý toàn bộ hệ thống, giám sát người dùng, dữ liệu và hoạt động của website.

### **2.3. Các chức năng chính của hệ thống**

Hệ thống cung cấp các chức năng chính như sau:

* Thử nghiệm các mẫu quần áo 3D trên mô hình người.
* Lưu trữ các outfit đã thử để người dùng xem lại hoặc so sánh.
* Tìm kiếm và truy cập các mẫu quần áo từ các gian hàng online có sẵn.
* Quản lý thông tin tài khoản người dùng (đăng ký, đăng nhập, chỉnh sửa thông tin).
* Quản lý người dùng hệ thống dành cho admin.
* Thống kê và hiển thị biểu đồ khảo sát các mặt hàng được người dùng yêu thích.

### **2.4. Phạm vi xây dựng hệ thống**

Phạm vi của hệ thống trong khuôn khổ dự án bao gồm:

* Phát triển website hoạt động trên nền tảng trình duyệt web.
* Áp dụng công nghệ 3D để mô phỏng trang phục, chưa đi sâu vào mô phỏng vật lý chi tiết (vải, chuyển động phức tạp).
* Hỗ trợ các chức năng cơ bản phục vụ thử đồ, tìm kiếm và quản lý người dùng.
* Chưa tích hợp trực tiếp chức năng thanh toán online, chỉ hỗ trợ chuyển hướng tới gian hàng bán sản phẩm.


2. Đối tượng & vai trò (Actors)
   • Guest (khách vãng lai): xem sản phẩm, thử demo 3D hạn chế, xem biểu đồ chung (ẩn chi tiết).
   • User (đã đăng ký): đầy đủ tính năng thử 3D, lưu mst, đồng bộ thiết bị.
   • Admin: quản lý users, nội dung (mẫu 3D, catalog), cấu hình tích hợp, dashboard khảo sát.
   • Integration Partner: đối tác bán hàng/e-commerce; cấp API key & định dạng dữ liệu.
   • Analytics/BI: hệ thống thu thập sự kiện, tổng hợp & vẽ biểu đồ.

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

5. PHÂN TÍCH & THIẾT KẾ HỆ THỐNG

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
