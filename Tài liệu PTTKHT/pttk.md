 HEAD

# OutfitsLab

# 1. Xác định yêu cầu

## 1.1. Mục tiêu hệ thống

Website thử nghiệm outfit có nhiệm vụ cho phép khách hàng xem trước các trang phục trên cơ thể ảo. Mục tiêu chính là hỗ trợ quá trình quyết định mua sắm của khách hàng, nâng cao trải nghiệm người dùng và giảm thiểu tỷ lệ hoàn trả hàng hóa.

## 1.2. Đối tượng sử dụng

* **Khách hàng (người dùng cuối)** : Những người muốn thử nghiệm các trang phục trước khi mua.
* **Quản trị viên hệ thống** : Người có trách nhiệm quản lý và duy trì hệ thống.
* **Người bán hàng** : Những người quản lý danh mục sản phẩm và dữ liệu liên quan.

## 1.3. Phạm vi hệ thống

Hệ thống sẽ được phát triển thành một website hoạt động trên cả nền tảng desktop và mobile. Nó cho phép người dùng thực hiện các chức năng như lựa chọn trang phục, thử đồ ảo, lưu và chia sẻ các bộ trang phục. Ngoài ra, hệ thống còn tích hợp các công cụ hỗ trợ quản trị sản phẩm và quản lý dữ liệu người dùng.

### 1.4.1. Chức năng cho khách hàng

* Đăng ký / đăng nhập tài khoản
* Đăng nhập bằng mạng xã hội (Google, Facebook – tùy chọn)
* Tạo hồ sơ cá nhân (giới tính, chiều cao, cân nặng, số đo cơ thể)
* Chọn người mẫu ảo theo giới tính
* Lựa chọn trang phục (áo, quần, váy, phụ kiện)
* Thử nghiệm outfit ảo (mix & match)
* Xem trước outfit ở nhiều góc độ
* Lưu outfit yêu thích
* Chia sẻ outfit qua diễn đàn
* Đề xuất outfit dựa trên hồ sơ và lịch sử sử dụng

### 1.4.2. Chức năng cho quản trị viên

* Quản lý tài khoản người dùng
* Quản lý danh mục sản phẩm (thêm/sửa/xóa)
* Quản lý hình ảnh và mô hình trang phục
* Quản lý người mẫu ảo
* Xem thống kê lượt thử đồ, lượt lưu outfit
* Phân quyền người dùng

### 1.4.3. Chức năng cho shop

* Quản lý danh mục sản phẩm (thêm/sửa/xóa)
* Quản lý hình ảnh và mô hình trang phục
* Xem thống kê lượt thử đồ, lượt lưu outfit, lượt xem
* Chỉnh sửa hồ sơ cửa hàng

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

### 3.2.1. Biểu đồ quản lý sản phẩm

 `<img src="/images/UC_quanlysanpham.png">`

### 3.2.2. Biểu đồ Usecase quản lý đơn hàng ,thanh toán

`<img src="/images/UC_quanlydonhangthanhtoan.png">`

### 3.2.3. Biểu đồ Usecase cấu hình hệ thống

`<img src="/images/UC_CauHinhHeThong.png">`

### 3.2.4. Biểu đồ Usecase quản lý báo cáo

`<img src="/images/UC_QuanLyBaoCao.png">`

### 3.2.5. Biểu đồ Usecase quản lý người bán

`<img src="/images/UC_QuanLyNguoiBan.png">`

### 3.2.5. Biểu đồ Usecase quản lý người dùng

`<img src="/images/UC_QuanLyNguoiDung.png">`

## 3.3. Các biểu đồ Usecase chức năng của user

### 3.3.1. Biểu đồ Usecase tổng quát

    `<img src="/images/UC_TongQuat.png">`

### 3.3.2. Biểu đồ Usecase chức năng chi tiết

    1. Usecase chức năng Thử nghiệm quần áo 3~~D~~

    `<img src="/images/UC_ThuQuanAo3D.png">`

    2. Usecase chức năng Chọn kích thước cơ thể

    `<img src="/images/UC_ChonKichThuoc.png">`

    3. Usecase chức năng Đăng kí

    `<img src="/images/UC_DangKyUser.png">`

    4. Usecase chức năng Đăng nhập

    `<img src="/images/UC_DangNhapUser.png">`

    5. Usecase chức năng Quản lý tài khoản

    `<img src="/images/UC_QuanLyTaiKhoan.png">`

    6. Usecase chức năng Tìm kiếm sản phẩm

    `<img src="/images/UC_TimKiemSanPham.png">`

    7. Usecase chức năng Quản lý sản phẩm yêu thích

    `<img src="/images/UC_QuanLySPYeuThich.png">`

    8. Usecase chức năng Báo lỗi

    `<img src="/images/BaoLoi.png">`

## 3.4. Các biểu đồ Usecase chức năng của seller

### 3.4.1. Usecase Tổng quát

`<img src="/images/UC_Seller.png">`

### 3.4.2. Usecase chức năng Quản lý đơn hàng

`<img src="/images/UC_OrderManager.png">`

### 3.4.3. Usecase chức năng Quản lý sản phẩm

`<img src="/images/UC_ProductManager.png">`

### 3.4.4. Usecase chức năng Báo cáo, thống kê

`<img src="/images/UC_AnalyticsReporting.png">`

### 3.4.5. Usecase chức năng Quản lý Hồ sơ Shop

`<img src="/images/UC_ShopProfile.png">`

3.4.6. Usecase chức năng Chăm sóc khách hàng

`<img src="/images/UC_CustomerService.png">`

## 3.5. Thiết kế mô hình dữ liệu và biểu đồ lớp

#### 3.5.1. Danh Sách Các Bảng và Chức Năng

##### Bảng `users`

Bảng `users` dùng để lưu trữ thông tin tài khoản và hồ sơ của tất cả người dùng trong hệ thống, bao gồm người dùng thường, chủ shop và quản trị viên.

**Các thuộc tính chính:**

* `id`: Khóa chính, định danh duy nhất cho mỗi người dùng
* `email`: Địa chỉ email đăng nhập
* `password_hash`: Mật khẩu đã mã hóa (đối với đăng nhập nội bộ)
* `display_name`: Tên hiển thị của người dùng
* `avatar_url`: Ảnh đại diện hồ sơ
* `bio`: Mô tả cá nhân
* `is_active`: Trạng thái hoạt động của tài khoản
* `created_at`: Thời điểm tạo tài khoản

**Chức năng:**

Quản lý thông tin người dùng và làm bảng trung tâm liên kết với các chức năng như outfit, blog, shop và phân quyền.Bảng `oauth_accounts`

##### Bảng `oauth_accounts`

Bảng `oauth_accounts` lưu thông tin đăng nhập thông qua các nhà cung cấp bên thứ ba như Google hoặc Facebook.

**Các thuộc tính chính:**

* `id`: Khóa chính
* `user_id`: Tham chiếu đến bảng users
* `provider`: Nhà cung cấp OAuth (Google, Facebook)
* `provider_user_id`: ID người dùng từ nhà cung cấp
* `created_at`: Thời điểm liên kết tài khoản

**Chức năng:**

Cho phép người dùng đăng nhập bằng nhiều nền tảng khác nhau.

##### Bảng `roles`

Bảng `roles` định nghĩa các vai trò trong hệ thống.

**Các thuộc tính chính:**

* `id`: Khóa chính
* `name`: Tên vai trò (admin, shop, user)

**Chức năng:**

Hỗ trợ phân quyền truy cập hệ thống.

Bảng `user_roles`

Bảng `user_roles` là bảng trung gian biểu diễn mối quan hệ nhiều-nhiều giữa người dùng và vai trò.

**Các thuộc tính chính:**

* `user_id`: Tham chiếu users
* `role_id`: Tham chiếu roles

**Chức năng:**

Gán nhiều vai trò cho một người dùng.

---

##### Bảng `gender_models`

Bảng `gender_models` lưu thông tin hai mô hình thử đồ cố định trong hệ thống.

**Các thuộc tính chính:**

* `id`: Khóa chính
* `name`: Giới tính (Nam / Nữ)
* `model_3d_url`: Đường dẫn model 3D

**Chức năng:**

Xác định model cơ thể được sử dụng khi thử đồ.

##### Bảng `shops`

Bảng `shops` lưu thông tin cửa hàng của người bán.

**Các thuộc tính chính:**

* `id`: Khóa chính
* `owner_id`: Người sở hữu shop
* `shop_name`: Tên shop
* `avatar_url`: Ảnh đại diện shop
* `description`: Mô tả shop
* `created_at`: Ngày tạo

**Chức năng:**

Quản lý thông tin cửa hàng và sản phẩm bán.

---

##### Bảng `item_types`

Bảng `item_types` định nghĩa các loại sản phẩm theo vị trí trong outfit.

**Các thuộc tính chính:**

* `id`: Khóa chính
* `code`: Mã loại (TOP, BOTTOM, SHOES, HAT, GLASSES, ACCESSORY)
* `name`: Tên loại

**Chức năng:**

Đảm bảo mỗi outfit chỉ có một sản phẩm cho mỗi vị trí.

---

##### Bảng `items`

Bảng `items` lưu thông tin sản phẩm thời trang đơn lẻ.

**Các thuộc tính chính:**

* `id`: Khóa chính
* `shop_id`: Shop sở hữu sản phẩm
* `item_type_id`: Loại sản phẩm
* `gender_model_id`: Giới tính phù hợp
* `name`: Tên sản phẩm
* `affiliate_link`: Liên kết mua hàng
* `model_3d_url`: Model 3D
* `is_active`: Trạng thái hiển thị
* `created_at`: Thời điểm tạo

**Chức năng:**

Quản lý sản phẩm dùng để kết hợp thành outfit.

---

##### Bảng `outfits`

Bảng `outfits` lưu thông tin bộ trang phục do người dùng tạo.

**Các thuộc tính chính:**

* `id`: Khóa chính
* `user_id`: Người tạo outfit
* `name`: Tên outfit
* `created_at`: Thời điểm tạo

**Chức năng:**

Đại diện cho một bộ trang phục hoàn chỉnh.

---

##### Bảng `outfit_items`

Bảng `outfit_items` lưu các sản phẩm cụ thể trong một outfit theo từng vị trí.

**Các thuộc tính chính:**

* `outfit_id`: Outfit
* `item_type_id`: Vị trí trong outfit
* `item_id`: Sản phẩm được chọn

**Chức năng:**

Liên kết các item với outfit và đảm bảo mỗi vị trí chỉ có một item.

---

##### Bảng `favorite_outfits`

Bảng `favorite_outfits` lưu danh sách outfit yêu thích của người dùng.

**Các thuộc tính chính:**

* `user_id`
* `outfit_id`

**Chức năng:**

Cho phép người dùng lưu outfit để thử lại.

---

##### Bảng `blogs`

Bảng `blogs` lưu các bài viết thảo luận trong hệ thống.

**Các thuộc tính chính:**

* `id`: Khóa chính
* `author_id`: Người viết
* `title`: Tiêu đề
* `content`: Nội dung
* `created_at`: Ngày đăng

**Chức năng:**

Tạo môi trường trao đổi, đánh giá outfit và sản phẩm.

---

##### Bảng `blog_reactions`

Bảng `blog_reactions` lưu lượt thích và không thích của người dùng đối với bài viết.

**Các thuộc tính chính:**

* `blog_id`
* `user_id`
* `reaction`: like hoặc dislike

**Chức năng:**

Ghi nhận mức độ quan tâm của cộng đồng.

---

##### Bảng `blog_comments`

Bảng `blog_comments` lưu các bình luận của người dùng.

**Các thuộc tính chính:**

* `id`
* `blog_id`
* `user_id`
* `content`
* `created_at`

**Chức năng:**

Cho phép người dùng trao đổi và phản hồi bài viết.

#### 3.5.2. Mối Quan Hệ Giữa Các Bảng

Mối quan hệ sử dụng foreign keys (FK) để liên kết, đảm bảo tính toàn vẹn dữ liệu. Dưới đây là tóm tắt (dùng ký hiệu: BảngA > BảngB nghĩa là BảngA tham chiếu đến BảngB qua FK; 1:N là one-to-many, N:M là many-to-many qua bảng trung gian):

* **Users – OAuth Accounts:** Quan hệ 1–N

  Một người dùng có thể liên kết nhiều tài khoản đăng nhập bên ngoài.
* **Users – Roles:** Quan hệ N–N

  Một người dùng có thể có nhiều vai trò, một vai trò có thể gán cho nhiều người dùng.
* **Users – Shops:** Quan hệ 1–1

  Một người dùng có thể đăng ký một shop.
* **Shops – Items:** Quan hệ 1–N

  Một shop quản lý nhiều sản phẩm.
* **Item Types – Items:** Quan hệ 1–N

  Mỗi loại item gồm nhiều sản phẩm.
* **Users – Outfits:** Quan hệ 1–N

  Một người dùng có thể tạo nhiều outfit.
* **Outfits – Items:** Quan hệ N–N (qua `outfit_items`)

  Một outfit gồm nhiều item, một item có thể xuất hiện trong nhiều outfit.
* **Users – Favorite Outfits:** Quan hệ N–N

  Người dùng có thể yêu thích nhiều outfit.
* **Users – Blogs:** Quan hệ 1–N

  Một người dùng có thể viết nhiều bài blog.
* **Blogs – Reactions / Comments:** Quan hệ 1–N

  Một bài viết có nhiều lượt thích, không thích và bình luận.

#### 3.5.3. Mối Quan Hệ Giữa Các Bảng

`<img src="/images/class.png">`

## 3.6. Biểu đồ hoạt động

### 3.6.1. Biểu đồ hoạt động chức năng đăng ký

`<img src="/images/AC_DangKy.png">`

### 3.6.2. Biểu đồ hoạt động chức năng đăng nhập

`<img src="/images/AC_DangNhap.png">`

### 3.6.3. Biểu đồ hoạt động chức năng thay đồ

`<img src="/images/AC_ThayDo.png">`

### 3.6.4. Biểu đồ hoạt động chức năng tìm kiếm đồ

`<img src="/images/AC_TimKiem.png">`

### 3.6.5. Biểu đồ hoạt động chức năng đăng xuất

`<img src="/images/AC_DangXuat.png">`

### 3.6.6. Biểu đồ hoạt động chức năng thêm vào giỏ hàng

`<img src="/images/AC_ThemSPvaogiohang.png">`

### 3.6.7. Biểu đồ hoạt động chức năng xem chi tiết sản phẩm

`<img src="/images/AC_XemChiTietSP.png">`

### 3.6.8. Biểu đồ hoạt động chức năng lưu bộ trang phục

`<img src="/images/AC_LuuOutfit.png">`

### 3.6.9. Biểu đồ hoạt động chức năng Quản lý sản phẩm Admin

`<img src="/images/AC_QuanLySPcuaAdmin.png">`

### 3.7. Biểu đồ tuần tự của User

### 3.7.1. Biểu đồ tuần tự Đăng kí tài khoản

    `<img src="/images/SE_DKTaiKhoan.png">`

### 3.7.2. Biểu đồ tuần tự Đăng nhập tài khoản

    `<img src="/images/SE_DangNhapUser.png">`

### 3.7.3. Biểu đồ tuần tự Thử đồ 3D

    `<img src="/images/SE_ThuDo3D.png">`

### 3.7.3. Biểu đồ tuần tự Chọn kích thước cơ thể

    `<img src="/images/SE_ChonSizeCoThe.png">`

### 3.7.4. Biểu đồ tuần tự Quản lý tài khoản

    `<img src="/images/SE_QuanLyTKUser.png">`

### 3.7.5. Biểu đồ tuần tự Tìm kiếm sản phẩm

    `<img src="/images/SE_TimKiemSanPham.png">`

### 3.7.6. Biểu đồ tuần tự Quản lý sản phẩm

    `<img src="/images/SE_QuanLySPYeuThich.png">`

### 3.7.7. Biểu đồ tuần tự Báo lỗi

    `<img src="/images/SE_BaoLoi_1.png">`

    `<img src="/images/SE_BaoLoi_2.png">`

    `<img src="/images/SE_BaoLoi_3.png">`

<<<<<<< HEAD

## 3.8. BIểu đồ tuần tự của shop

### 3.8.1. Biểu đồ tuần tự shop đăng kí cộng tác

`<img src="/images/SE_RegisterShop.png">`

### 3.8.1. Biểu đồ tuần tự shop đẩy sản phẩm lên

`<img src="/images/SE_DaySanPham.png">`
===

## 3.8. Biểu đồ tuần tự của Admin

### 3.8.1. Biểu đồ tuần tự thêm sản phẩm

![1768805902778](image/pttk/1768805902778.png)

### 3.8.2. Biểu đồ tuần tự xem khiếu nại

![1768805959311](image/pttk/1768805959311.png)

### 3.8.3. Biểu đồ tuần tự phê duyệt người bán

![1768806004519](image/pttk/1768806004519.png)


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
