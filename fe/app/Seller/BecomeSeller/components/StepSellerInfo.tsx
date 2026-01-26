'use client'

interface Props {
  onNext: () => void;
}

export default function StepSellerInfo({ onNext }: Props) {
  return (
    <div  className="py-15 flex items-center justify-center flex-col">

      {/* MAIN CARD CONTAINER */}
      <div className="bg-white rounded-4xl border-3 border-[#ffe9cc] p-15 w-4xl">
        <h2 className="text-3xl font-extrabold mb-12">Your Information</h2>

        <div className="text-xl grid grid-cols-2 gap-x-8 gap-y-6 mb-10">  

          <div className="flex flex-col gap-2">
            <label className="font-semibold">First Name</label>
            <input type="text" placeholder="John" className="h-17 w-full rounded-3xl border border-[#ffe9cc] bg-[#fffcf7] pl-7 pr-20 flex items-center placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#e2cca5]"></input>            
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-semibold">Last Name</label>
              <input type="text" placeholder="Doe" className="h-17 w-full rounded-3xl border border-[#ffe9cc] bg-[#fffcf7] pl-7 pr-20 flex items-center placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#e2cca5]"></input>
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-semibold">Email Address</label>
              <input type="text" placeholder="john.doe@example.com" className="h-17 w-full rounded-3xl border border-[#ffe9cc] bg-[#fffcf7] pl-7 pr-20 flex items-center placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#e2cca5]"></input>
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-semibold">Phone Number</label>
              <input type="text" placeholder="(123) 456-7890" className="h-17 w-full rounded-3xl border border-[#ffe9cc] bg-[#fffcf7] pl-7 pr-20 flex items-center placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#e2cca5]"></input>
          </div>
        </div>

        <div className="bg-[#fcf6eb] rounded-2xl p-6 md:p-8 mb-8">
          <h3 className="text-4xl font-bold text-gray-900 mb-2">Why we need this</h3>
          <p className="text-gray-600 leading-relaxed">
            We use your information to create your seller account and help customers contact you about their purchases.
          </p>
        </div>

        {/* Submit Button */}
        <button onClick={onNext} className="w-full h-14 bg-[#d19f42] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#d9c096]">
          <span className="text-white font-bold text-lg flex items-center gap-2">
            Continue to Store Details 🡢
          </span>
        </button>
      </div>  
    </div>
  )
}