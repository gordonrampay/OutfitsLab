'use client'

import { 
  RiseOutlined, 
  ArrowUpOutlined, 
  ArrowDownOutlined, 
  CalendarOutlined, 
  UserOutlined,
  WalletOutlined
} from "@ant-design/icons";

export default function AnalyticsPage() {
  // Dữ liệu giả lập cho biểu đồ
  const revenueData = [40, 65, 45, 80, 55, 90, 70]; // Chiều cao % của cột
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
      
      {/* HEADER: TITLE & DATE PICKER */}
      <div className="flex flex-col md:flex-row justify-between items-center bg-white p-4 rounded-xl border border-orange-100 shadow-sm">
        <h2 className="text-xl font-bold text-gray-800">Hiệu quả kinh doanh</h2>
        <button className="flex items-center gap-2 text-sm font-medium text-gray-500 bg-gray-50 px-4 py-2 rounded-lg hover:bg-gray-100 transition">
          <CalendarOutlined /> Last 7 Days
        </button>
      </div>

      {/* CARDS: THỐNG KÊ NHANH */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: "Doanh thu tuần", value: "12,450,000₫", trend: "+12.5%", isPositive: true, icon: <WalletOutlined /> },
          { title: "Lượt truy cập", value: "3,842", trend: "-2.4%", isPositive: false, icon: <UserOutlined /> },
          { title: "Tỉ lệ chuyển đổi", value: "4.2%", trend: "+0.8%", isPositive: true, icon: <RiseOutlined /> },
        ].map((item, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl border border-orange-50 shadow-sm flex items-start justify-between">
            <div>
              <p className="text-gray-400 text-xs font-bold uppercase tracking-wide mb-1">{item.title}</p>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{item.value}</h3>
              <div className={`flex items-center text-xs font-bold ${item.isPositive ? 'text-green-600 bg-green-50' : 'text-red-500 bg-red-50'} inline-flex px-2 py-1 rounded-md`}>
                {item.isPositive ? <ArrowUpOutlined className="mr-1"/> : <ArrowDownOutlined className="mr-1"/>}
                {item.trend} <span className="text-gray-400 ml-1 font-normal">vs last week</span>
              </div>
            </div>
            <div className="p-3 bg-orange-50/50 rounded-xl text-orange-400 text-xl">
              {item.icon}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* CHART 1: REVENUE OVERVIEW */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-orange-50 shadow-sm">
          <div className="flex justify-between items-center mb-8">
            <h3 className="font-bold text-lg text-gray-700">Biểu đồ doanh thu</h3>
            <div className="flex gap-2">
               <span className="w-3 h-3 rounded-full bg-teal-500"></span>
               <span className="text-xs text-gray-500">Doanh thu</span>
            </div>
          </div>
          
          {/* Chart Area */}
          <div className="h-64 flex items-end justify-between gap-2 md:gap-4 px-2">
            {revenueData.map((height, i) => (
              <div key={i} className="flex flex-col items-center w-full group cursor-pointer">
                {/* Tooltip giả */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity mb-2 bg-gray-800 text-white text-[10px] py-1 px-2 rounded absolute -mt-8">
                  {height * 100}k
                </div>
                {/* Cột */}
                <div 
                  style={{ height: `${height}%` }} 
                  className="w-full max-w-[40px] bg-teal-100 rounded-t-lg group-hover:bg-teal-500 transition-all duration-300 relative"
                ></div>
                {/* Nhãn ngày */}
                <span className="text-xs text-gray-400 mt-3 font-medium">{days[i]}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CHART 2: TOP SOURCES (Progress Bar) */}
        <div className="bg-white p-6 rounded-2xl border border-orange-50 shadow-sm">
           <h3 className="font-bold text-lg text-gray-700 mb-6">Nguồn khách hàng</h3>
           <div className="space-y-6">
             {[
               { label: "Direct Search", val: 75, color: "bg-blue-500" },
               { label: "Social Media", val: 45, color: "bg-pink-500" },
               { label: "Referral", val: 20, color: "bg-orange-500" },
               { label: "Other", val: 10, color: "bg-gray-300" },
             ].map((source, idx) => (
               <div key={idx}>
                 <div className="flex justify-between text-sm mb-2">
                   <span className="font-medium text-gray-600">{source.label}</span>
                   <span className="font-bold text-gray-800">{source.val}%</span>
                 </div>
                 <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
                   <div className={`h-full rounded-full ${source.color}`} style={{ width: `${source.val}%` }}></div>
                 </div>
               </div>
             ))}
           </div>
           
           <div className="mt-8 pt-6 border-t border-dashed border-gray-200">
             <button className="w-full py-2 text-teal-600 font-bold text-sm bg-teal-50 rounded-lg hover:bg-teal-100 transition">
               Xem báo cáo chi tiết
             </button>
           </div>
        </div>
      </div>
    </div>
  );
}