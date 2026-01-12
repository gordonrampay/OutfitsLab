 HEAD

# OutfitsLab

# 1.Xác định yêu cầu

## 1.1. Mục tiêu hệ thống

Website thử nghiệm outfit cho phép khách hàng xem trước trang phục trên cơ thể (ảo) nhằm hỗ trợ quyết định mua sắm, nâng cao trải nghiệm người dùng và giảm tỷ lệ hoàn trả.

## 1.2. Đối tượng sử dụng

* Khách hàng (người dùng cuối)
* Quản trị viên hệ thống
* Nhân viên quản lý sản phẩm

## 1.3. Phạm vi hệ thống

Hệ thống là một website (desktop & mobile) cho phép người dùng lựa chọn trang phục, thử đồ ảo, lưu và chia sẻ outfit, đồng thời hỗ trợ quản trị sản phẩm và dữ liệu người dùng.

## 1.4. Yêu cầu chức năng

### 1.4.1. Chức năng cho khách hàng

* Đăng ký / đăng nhập tài khoản
* Đăng nhập bằng mạng xã hội (Google, Facebook – tùy chọn)
* Tạo hồ sơ cá nhân (giới tính, chiều cao, cân nặng, số đo cơ thể)
* Tải ảnh cá nhân hoặc chọn người mẫu ảo
* Lựa chọn trang phục (áo, quần, váy, phụ kiện)
* Thử nghiệm outfit ảo (mix & match)
* Xem trước outfit ở nhiều góc độ
* Lưu outfit yêu thích
* Chia sẻ outfit qua mạng xã hội
* Đề xuất outfit dựa trên hồ sơ và lịch sử sử dụng

### 1.4.2. Chức năng cho quản trị viên

* Quản lý tài khoản người dùng
* Quản lý danh mục sản phẩm (thêm/sửa/xóa)
* Quản lý hình ảnh và mô hình trang phục
* Quản lý người mẫu ảo
* Xem thống kê lượt thử đồ, lượt lưu outfit
* Phân quyền người dùng

## 1.5. Yêu cầu phi chức năng

### 1.5.1. Hiệu năng

* Thời gian tải trang < 3 giây
* Xử lý thử đồ ảo trong thời gian thực hoặc gần thời gian thực

### 1.5.2. Tính khả dụng

* Giao diện thân thiện, dễ sử dụng
* Hỗ trợ đa thiết bị (PC, tablet, mobile)
* Hỗ trợ đa trình duyệt (Chrome, Edge, Firefox, Safari)

### 1.5.3. Bảo mật

* Mã hóa mật khẩu người dùng
* Bảo vệ dữ liệu cá nhân và hình ảnh người dùng
* Phân quyền truy cập rõ ràng

### 1.5.4. Khả năng mở rộng

* Dễ dàng bổ sung sản phẩm, người mẫu, tính năng mới
* Hỗ trợ tích hợp AI/AR trong tương lai

## 1.6. Yêu cầu dữ liệu

* Thông tin người dùng
* Thông tin sản phẩm (tên, loại, size, màu sắc, hình ảnh)
* Dữ liệu outfit đã thử
* Dữ liệu thống kê hệ thống

## 1.7. Yêu cầu công nghệ (gợi ý)

* Frontend: HTML, CSS, JavaScript (React/Vue)
* Backend: Node.js / Java / PHP
* Database: MySQL / PostgreSQL / MongoDB
* Công nghệ thử đồ: AI/AR, Computer Vision (tùy mức độ)

## 1.8. Ràng buộc hệ thống

* Tuân thủ quy định bảo vệ dữ liệu người dùng
* Phù hợp với ngân sách và tiến độ dự án
* Khả năng triển khai trên hosting/cloud

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
* Chưa tích hợp trực tiếp chức năng thanh toán online, chỉ hỗ trợ chuyển hướng tới gian hàng bán sản phẩm

2. Đối tượng & vai trò (Actors)
   • Guest (khách vãng lai): xem sản phẩm, thử demo 3D hạn chế, xem biểu đồ chung (ẩn chi tiết).
   • User (đã đăng ký): đầy đủ tính năng thử 3D, lưu mst, đồng bộ thiết bị.
   • Admin: quản lý users, nội dung (mẫu 3D, catalog), cấu hình tích hợp, dashboard khảo sát.
   • Integration Partner: đối tác bán hàng/e-commerce; cấp API key & định dạng dữ liệu.
   • Analytics/BI: hệ thống thu thập sự kiện, tổng hợp & vẽ biểu đồ.

# 3. Các biểu đồ phân tích thiết kế hệ thống

# 3. Các biểu đồ phân tích thiết kế hệ thống

## 3.1. Các biểu đồ Usecase chung của hệ thống

## 3.2. Các biểu đồ Usecase chức năng của admin

1. Usecase quản lý đơn hàng , thanh toán

   `<img src="/images/UC_quanlydonhangthanhtoan.png">`
2. Usecase quản lý sản phẩm

   `<img src="/images/UC_quanlysanpham.png">`

## 3.3. Các biểu đồ Usecase chức năng của user

### 3.3.1. Biểu đồ Usecase tổng quát

    `<img src="/images/UC_TongQuat.png">`

### 3.3.2. Biểu đồ Usecase chức năng chi tiết

    1. Usecase chức năng Thử nghiệm quần áo 3~~D~~

    `<img src="/images/UC_ThuNghiemQuanAo.png">`

    2. Use chức năng Quản lý thư viện cá nhân .

    `<img src="/images/UC_QuanLyThuVien.png">`

## 3.4. Thiết kế mô hình dữ liệu và biểu đồ lớp

#### 3.4.1. Danh Sách Các Bảng và Chức Năng

Dưới đây là các bảng, với mô tả chức năng chính (liên kết với tính năng dự án):

* **users** : Lưu thông tin tài khoản người dùng (bao gồm admin). Chức năng: Quản lý thông tin tài khoản, phân quyền (user/admin), và theo dõi hoạt động đăng nhập.
* **stores** : Lưu danh sách các gian hàng online (như Shopee, Lazada). Chức năng: Hỗ trợ tìm kiếm quần áo từ các gian hàng có sẵn.
* **categories** : Phân loại sản phẩm (ví dụ: Áo, Quần). Chức năng: Giúp tìm kiếm và lọc quần áo theo loại, làm cho tìm kiếm chi tiết hơn.
* **tags** : Các nhãn mô tả (ví dụ: Mùa hè, Thể thao). Chức năng: Thêm thuộc tính linh hoạt để lọc và tìm kiếm sản phẩm.
* **clothing_items** : Lưu chi tiết các mẫu quần áo 3D. Chức năng: Lưu trữ mẫu 3D để thử nghiệm, bao gồm link model, giá, và hình ảnh.
* **sizes** : Danh sách kích cỡ (S, M, L). Chức năng: Quản lý thuộc tính kích cỡ cho sản phẩm, hỗ trợ thử nghiệm phù hợp.
* **colors** : Danh sách màu sắc (Red, Blue). Chức năng: Quản lý thuộc tính màu cho sản phẩm, hỗ trợ hiển thị biến thể.
* **item_sizes** : Bảng trung gian liên kết clothing_items với sizes. Chức năng: Xử lý nhiều kích cỡ cho một sản phẩm (many-to-many).
* **item_colors** : Bảng trung gian liên kết clothing_items với colors. Chức năng: Xử lý nhiều màu cho một sản phẩm (many-to-many).
* **item_tags** : Bảng trung gian liên kết clothing_items với tags. Chức năng: Xử lý nhiều tags cho một sản phẩm (many-to-many).
* **trials** : Lưu lịch sử thử nghiệm quần áo. Chức năng: Theo dõi và lưu trữ các mẫu thử nghiệm của user.
* **favorites** : Lưu lượt yêu thích và rating. Chức năng: Thu thập dữ liệu cho biểu đồ khảo sát mặt hàng yêu thích.
* **reviews** : Lưu đánh giá chi tiết (comment, rating). Chức năng: Mở rộng khảo sát, hỗ trợ biểu đồ và phản hồi user.
* **user_sessions** : Lưu phiên đăng nhập. Chức năng: Quản lý và theo dõi hoạt động user (dành cho admin).

#### 3.4.2. Mối Quan Hệ Giữa Các Bảng

Mối quan hệ sử dụng foreign keys (FK) để liên kết, đảm bảo tính toàn vẹn dữ liệu. Dưới đây là tóm tắt (dùng ký hiệu: BảngA > BảngB nghĩa là BảngA tham chiếu đến BảngB qua FK; 1:N là one-to-many, N:M là many-to-many qua bảng trung gian):

* **users > trials, favorites, reviews, user_sessions** (1:N): Một user có nhiều trials, favorites, reviews, sessions; nhưng một trial/favorite/review/session chỉ thuộc một user.
* **stores > clothing_items** (1:N): Một store cung cấp nhiều items; một item thuộc một store.
* **categories > clothing_items** (1:N): Một category chứa nhiều items; một item thuộc một category. (Cũng có self-ref: categories > categories cho category con).
* **tags > item_tags** (1:N): Một tag áp dụng cho nhiều items qua item_tags.
* **sizes > item_sizes** (1:N): Một size áp dụng cho nhiều items qua item_sizes.
* **colors > item_colors** (1:N): Một color áp dụng cho nhiều items qua item_colors.
* **clothing_items > trials, favorites, reviews, item_sizes, item_colors, item_tags** (1:N cho trials/favorites/reviews; N:M cho sizes/colors/tags): Một item được thử nghiệm/thích/đánh giá nhiều lần; và có nhiều sizes/colors/tags qua bảng trung gian.

`<img src="/images/Untitled.png">`

## 3.5. Biểu đồ hoạt động

## 3.1. Các biểu đồ Usecase chung của hệ thống

## 3.2. Các biểu đồ Usecase chức năng của admin

`<img src="/images/UC_quanlysanpham.png">`

`<img src="/images/UC_quanlydonhangthanhtoan.png">`


###1.1 Mục tiêu hệ thống

=======

## 3.3. Các biểu đồ Usecase chức năng của user

`<img src="/images/UC_DangKy.png">`

`<img src="/images/UC_DangNhap.png">`

### 3.3.1. Biểu đồ Usecase tổng quát

    `<img src="/images/UC_TongQuat.png">`

### 3.3.2. Biểu đồ Usecase chức năng chi tiết

    1. Usecase chức năng Thử nghiệm quần áo 3~~D~~

    `<img src="/images/UC_ThuNghiemQuanAo.png">`

    2. Use chức năng Quản lý thư viện cá nhân

    `<img src="">`

## 3.4. Thiết kế mô hình dữ liệu và biểu đồ lớp

## 3.5. Biểu đồ hoạt động

### 3.5.1. Biểu đồ hoạt động chức năng đăng ký

`<img src="/images/AC_DangKy.png">`

### 3.5.2. Biểu đồ hoạt động chức năng đăng nhập

`<img src="/images/AC_DangNhap.png">`

### 3.5.3. Biểu đồ hoạt động chức năng thay đồ

`<img src="/images/AC_ThayDo.png">`

### 3.5.4. Biểu đồ hoạt động chức năng tìm kiếm đồ

`<img src="/images/AC_TimKiem.png">`

# PHÂN TÍCH & THIẾT KẾ HỆ THỐNG

## 5. Phân tích hệ thống (System Analysis)

### 5.1 Mục tiêu hệ thống

 Xây dựng hệ thống **phòng thử đồ 3D trên nền web** kết hợp **thương mại điện tử**

### 1.1 Mục tiêu hệ thống

 279b517 (Add pttkht.md file)

* Cho phép người dùng:
  * Thử quần áo 3D trên avatar cá nhân
  * Tuỳ chỉnh màu sắc, logo, text
  * Lưu outfit, thêm vào giỏ hàng và thanh toán trực tuyến
* Hỗ trợ quản trị sản phẩm, đơn hàng cho admin

---

### 5.2 Đối tượng sử dụng hệ thống

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

### 5.3 Phạm vi hệ thống

* Hệ thống chạy trên nền **Web**
* Bao gồm:
  * Frontend (UI + 3D Viewer)
  * Backend (API + xử lý nghiệp vụ)
  * Database (lưu trữ dữ liệu)
  * Dịch vụ bên thứ ba (Stripe, Email, Cloudinary)

---

### 5.4 Yêu cầu chức năng (Functional Requirements)

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

### 5.5 Yêu cầu phi chức năng (Non-Functional Requirements)

* **Hiệu năng:** Load 3D mượt, tối ưu model
* **Bảo mật:** JWT, không lưu thông tin thẻ
* **Khả năng mở rộng:** Dễ mở rộng tính năng e-commerce
* **Khả năng bảo trì:** Code chia module rõ ràng
* **Khả năng tương thích:** Responsive desktop & mobile

hello
