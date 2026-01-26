// --- 1. ĐỊNH NGHĨA KIỂU DỮ LIỆU (TYPES) ---
// Giúp code gợi ý thông minh và không bị lỗi

export interface User {
  id: number;
  email: string;
  display_name: string;
  avatar_url: string;
  bio: string;
  role: 'admin' | 'shop_owner' | 'user';
}

export interface Shop {
  id: number;
  owner_id: number;
  shop_name: string;
  avatar_url: string;
  description: string;
  
}

export interface Item {
  id: number;
  shop_id: number;
  type: 'TOP' | 'BOTTOM' | 'SHOES' | 'HAT' | 'GLASSES' | 'ACCESSORY';
  gender: 'Male' | 'Female';
  name: string;
  price: number; // Thêm giá để hiển thị cho đẹp
  affiliate_link: string;
  image_url: string; // Dùng ảnh 2D để hiển thị danh sách
  model_3d_url: string;
}

export interface Outfit {
  id: number;
  user_id: number; // Người tạo
  name: string;
  items: number[]; // Danh sách ID các item trong outfit
  created_at: string;
}

export interface Blog {
  id: number;
  author_id: number;
  title: string;
  content: string;
  image_url: string;
  likes: number;
  comments: number;
  created_at: string;
}

// --- 2. DỮ LIỆU MOCK (DỮ LIỆU GIẢ) ---

export const MOCK_USERS: User[] = [
  {
    id: 1,
    email: 'admin@outfitslab.com',
    display_name: 'System Admin',
    avatar_url: 'https://i.pravatar.cc/150?u=1',
    bio: 'Quản trị viên hệ thống',
    role: 'admin',
  },
  {
    id: 2,
    email: 'vintage@shop.com',
    display_name: 'Vintage Owner',
    avatar_url: 'https://i.pravatar.cc/150?u=2',
    bio: 'Yêu thích phong cách cổ điển',
    role: 'shop_owner',
  },
  {
    id: 3,
    email: 'user@gmail.com',
    display_name: 'Nguyễn Văn A',
    avatar_url: 'https://i.pravatar.cc/150?u=3',
    bio: 'Khách hàng thường xuyên',
    role: 'user',
  },
  // Các chủ shop mới thêm vào
  {
    id: 4,
    email: 'urban@shop.com',
    display_name: 'Urban Boss',
    avatar_url: 'https://i.pravatar.cc/150?u=4',
    bio: 'Chuyên đồ Streetwear',
    role: 'shop_owner',
  },
  {
    id: 5,
    email: 'minimal@shop.com',
    display_name: 'Minimalist Life',
    avatar_url: 'https://i.pravatar.cc/150?u=5',
    bio: 'Sống tối giản',
    role: 'shop_owner',
  },
  {
    id: 6,
    email: 'sporty@shop.com',
    display_name: 'Coach Mike',
    avatar_url: 'https://i.pravatar.cc/150?u=6',
    bio: 'Huấn luyện viên thể hình',
    role: 'shop_owner',
  },
  {
    id: 7,
    email: 'elegant@shop.com',
    display_name: 'Lady Sarah',
    avatar_url: 'https://i.pravatar.cc/150?u=7',
    bio: 'Thời trang dạ hội',
    role: 'shop_owner',
  },
];

// === SHOPS ===
export const MOCK_SHOPS: Shop[] = [
  {
    id: 1,
    owner_id: 2,
    shop_name: 'Vintage Vibes Store',
    avatar_url: 'https://images.unsplash.com/photo-1555529771-83ae7b7a671f?auto=format&fit=crop&w=300&q=80',
    description: 'Chuyên cung cấp các mẫu quần áo Retro thập niên 90 độc đáo và hoài cổ.',
  },
  {
    id: 2,
    owner_id: 4,
    shop_name: 'Urban Streetwear',
    avatar_url: 'https://images.unsplash.com/photo-1523381294911-8d3cead13475?auto=format&fit=crop&w=300&q=80',
    description: 'Phong cách đường phố bụi bặm, hiện đại dành cho giới trẻ năng độngChuyên cung cấp các mẫu quần áo Retro thập niên 90 độc đáo và hoài cổ. Chuyên cung cấp các mẫu quần áo Retro thập niên 90 độc đáo và hoài cổ Chuyên cung cấp các mẫu quần áo Retro thập niên 90 độc đáo và hoài cổ.',
  },
  {
    id: 3,
    owner_id: 5,
    shop_name: 'Minimalist Haven',
    avatar_url: 'https://images.unsplash.com/photo-1551488852-08017580b302?auto=format&fit=crop&w=300&q=80',
    description: 'Thời trang tối giản, tinh tế với các gam màu trung tính nhẹ nhàng.',
  },
  {
    id: 4,
    owner_id: 6,
    shop_name: 'Sporty Pro Gear',
    avatar_url: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=300&q=80',
    description: 'Đồ tập gym, yoga và phụ kiện thể thao chuyên nghiệp chất lượng cao.',
  },
  {
    id: 5,
    owner_id: 7,
    shop_name: 'Elegant Ladies',
    avatar_url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=300&q=80',
    description: 'Váy đầm dự tiệc và thời trang công sở sang trọng, quý phái.',
  },
];

// === ITEMS (SẢN PHẨM) ===
export const MOCK_ITEMS: Item[] = [
  // --- Shop 1: Vintage Vibes (ID: 1) ---
  {
    id: 1,
    shop_id: 1,
    type: 'TOP',
    gender: 'Male',
    name: 'Retro Graphic Tee',
    price: 350000,
    affiliate_link: '#',
    image_url: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=500&q=80',
    model_3d_url: '#',
  },
  {
    id: 2,
    shop_id: 1,
    type: 'BOTTOM',
    gender: 'Male',
    name: 'Baggy Jeans 90s',
    price: 550000,
    affiliate_link: '#',
    image_url: 'https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?auto=format&fit=crop&w=500&q=80',
    model_3d_url: '#',
  },
  {
    id: 3,
    shop_id: 1,
    type: 'SHOES',
    gender: 'Male',
    name: 'Classic Chunky Sneakers',
    price: 1200000,
    affiliate_link: '#',
    image_url: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=80',
    model_3d_url: '#',
  },

  // --- Shop 2: Urban Streetwear (ID: 2) ---
  {
    id: 4,
    shop_id: 2,
    type: 'TOP',
    gender: 'Male',
    name: 'Black Oversized Hoodie',
    price: 650000,
    affiliate_link: '#',
    image_url: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=500&q=80',
    model_3d_url: '#',
  },
  {
    id: 5,
    shop_id: 2,
    type: 'BOTTOM',
    gender: 'Male',
    name: 'Cargo Pants Army Green',
    price: 550000,
    affiliate_link: '#',
    image_url: 'https://images.unsplash.com/photo-1517445312882-6e216999a380?auto=format&fit=crop&w=500&q=80',
    model_3d_url: '#',
  },
  {
    id: 6,
    shop_id: 2,
    type: 'HAT',
    gender: 'Female',
    name: 'Street Snapback Cap',
    price: 250000,
    affiliate_link: '#',
    image_url: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=500&q=80',
    model_3d_url: '#',
  },
  {
    id: 13,
    shop_id: 2,
    type: 'TOP',
    gender: 'Female',
    name: 'White Linen Shirt',
    price: 450000,
    affiliate_link: '#',
    image_url: 'https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?auto=format&fit=crop&w=500&q=80',
  model_3d_url: '#',
  },

  // --- Shop 3: Minimalist Haven (ID: 3) ---
  {
    id: 7,
    shop_id: 3,
    type: 'TOP',
    gender: 'Female',
    name: 'White Linen Shirt',
    price: 450000,
    affiliate_link: '#',
    image_url: 'https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?auto=format&fit=crop&w=500&q=80',
  model_3d_url: '#',
  },
  {
    id: 8,
    shop_id: 3,
    type: 'BOTTOM',
    gender: 'Female',
    name: 'Beige Trousers',
    price: 520000,
    affiliate_link: '#',
    image_url: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=500&q=80',
    model_3d_url: '#',
  },

  // --- Shop 4: Sporty Pro Gear (ID: 4) ---
  {
    id: 9,
    shop_id: 4,
    type: 'BOTTOM',
    gender: 'Female',
    name: 'High Waist Yoga Leggings',
    price: 350000,
    affiliate_link: '#',
    image_url: 'https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?auto=format&fit=crop&w=500&q=80',
    model_3d_url: '#',
  },

  // --- Shop 5: Elegant Ladies (ID: 5) ---
  {
    id: 11,
    shop_id: 5,
    type: 'TOP',
    gender: 'Female',
    name: 'Red Silk Evening Dress',
    price: 2100000,
    affiliate_link: '#',
    image_url: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=500&q=80',
    model_3d_url: '#',
  },
  {
    id: 12,
    shop_id: 5,
    type: 'ACCESSORY',
    gender: 'Female',
    name: 'Pearl Necklace',
    price: 890000,
    affiliate_link: '#',
    image_url: 'https://images.unsplash.com/photo-1599643478518-17488fbbcd75?auto=format&fit=crop&w=500&q=80',
    model_3d_url: '#',
  },
];

export const MOCK_OUTFITS: Outfit[] = [
  {
    id: 1,
    user_id: 3,
    name: 'Dạo phố cuối tuần',
    items: [1, 2, 3], // ID của Áo, Quần, Giày
    created_at: '2023-10-25T10:00:00Z',
  },
  {
    id: 2,
    user_id: 3,
    name: 'Đi làm công sở',
    items: [4, 5], // ID của Blazer, Váy
    created_at: '2023-10-26T08:30:00Z',
  },
];

export const MOCK_BLOGS: Blog[] = [
  {
    id: 1,
    author_id: 2, // Shop Owner viết
    title: 'Xu hướng Vintage năm 2026',
    content: 'Năm nay các mẫu quần ống rộng và áo graphic tee đang quay trở lại mạnh mẽ...',
    image_url: 'https://images.unsplash.com/photo-1550614000-4b9519e02d48?auto=format&fit=crop&w=800&q=80',
    likes: 156,
    comments: 24,
    created_at: '2023-10-20T15:00:00Z',
  },
  {
    id: 2,
    author_id: 3, // User viết
    title: 'Review cách phối đồ với Blazer',
    content: 'Hôm nay mình sẽ chia sẻ 3 cách phối Blazer cực chất...',
    image_url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80',
    likes: 89,
    comments: 12,
    created_at: '2023-10-22T09:00:00Z',
  },
];