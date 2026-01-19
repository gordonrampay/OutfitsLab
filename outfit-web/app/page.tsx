import Header from "../components/layout/Header";
import Hero from "../components/sections/Hero";
import Mission from "../components/sections/Mission";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import Testimonials from "../components/sections/Testimonials"; // Nếu bạn đã tạo
import SellerCTA from "../components/sections/SellerCTA"; // Nếu bạn đã tạo
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="relative">
      {/* Thanh Header luôn nằm trên cùng khi cuộn */}
      <Header />
      
      
      {/* Các Section xếp chồng theo thứ tự từ trên xuống */}
      <div className="flex flex-col">
        <Hero />
        <Mission />
        <WhyChooseUs />
        <Testimonials />
        <SellerCTA />
        {/* Thêm các phần khác vào đây nếu bạn đã có file */}
      </div>
      <Footer />
    </main>
  );
}