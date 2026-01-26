'use client'
import { useState } from 'react'

interface Props {
  onNext: () => void;
  onBack: () => void;
}

export default function StepStoreDetail({ onNext, onBack }: Props) {
  const [description, setDescription] = useState('')
  return (
   <div className="py-15 flex items-center justify-center flex-col">
    {/* MAIN CARD CONTAINER */}
    <div className="bg-white rounded-4xl border-3 border-[#ffe9cc] p-15 w-4xl">
    
      <h2 className="text-3xl font-extrabold mb-12">Store Details</h2>

      {/* FORM FIELDS */}
      <div className="mb-7 text-xl space-y-10">
        
        {/* 1. Store Name */}
        <div className="flex flex-col gap-2">
          <label className="font-semibold ">Store Name</label>
          <input 
            type="text" 
            placeholder="My Awesome Fashion Store" 
            className="h-17 w-full rounded-3xl border border-[#ffe9cc] bg-[#fffcf7] pl-7 pr-20 flex items-center placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#e2cca5]"
          />
          <p className="text-xs text-gray-500">This is how customers will see your store</p>
        </div>

        {/* 2. Store Description */}
        <div className="flex flex-col gap-2">
          <label className="font-semibold ">Store Description</label>
          <textarea 
            rows={4}
            onChange={(e) => setDescription(e.target.value)}
            maxLength={500} 
            className="w-full rounded-xl border border-[#ffe9cc] bg-[#fffcf7] p-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#e2cca5] resize-none"
          ></textarea>
          <p className="text-base text-gray-500 text-left">{description.length}/500 characters</p>
        </div>

        {/* 3. Primary Category */}
        <div className="flex flex-col gap-2">
          <label className="font-semibold ">Primary Category</label>
          <div className="relative">
            <select 
              defaultValue="" 
              className="h-12 w-full rounded-xl border border-[#d1d5db] bg-[#e5e7eb] px-4 focus:outline-none cursor-pointer"
            >
              <option value="" disabled>Choose option...</option>
              
              <option value="fashion">Fashion</option>
              <option value="electronics">Electronics</option>
              <option value="home">Home & Living</option>
            </select>
          </div>
        </div>

        {/* 4. Store Logo (Upload Box) */}
        <div className="flex flex-col gap-2">
          <label className="font-semibold ">Store Logo</label>
          <div className="w-full rounded-2xl bg-[#fffcf7] border border-[#ffe9cc] p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-[#fff9f0] transition-colors border-dashed">
            <div className="mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-11 h-11">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
              </svg>
            </div>
            <span className="font-semibold ">Click to upload or drag and drop</span>
            <span className="text-xs text-gray-500 mt-1">PNG, JPG (Max 5MB, Square recommended)</span>
          </div>
        </div>

        {/* 5. Password & Confirm Password */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="font-semibold ">Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              className="h-17 w-full rounded-3xl border border-[#ffe9cc] bg-[#fffcf7] pl-7 pr-20 flex items-center placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#e2cca5]"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Confirm Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              className="h-17 w-full rounded-3xl border border-[#ffe9cc] bg-[#fffcf7] pl-7 pr-20 flex items-center placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#e2cca5]"
            />
          </div>
        </div>

        {/* 6. Terms Agreement */}
        <div className="flex items-center gap-3 bg-[#fcf6eb] rounded-2xl h-17 w-full pl-6">
          <input 
            type="checkbox" 
            id="terms"
            className="w-5 h-5 rounded border-gray-300 text-[#e2cca5] focus:ring-[#e2cca5]"
          />
          <label htmlFor="terms" className="text-lg text-gray-600">
            I agree to the <span className="text-[#d19f42] cursor-pointer hover:underline">Terms of Service</span> and <span className="text-[#d19f42] cursor-pointer hover:underline">Seller Agreement</span>
          </label>
        </div>

      </div>

      {/* BUTTONS ACTION */}
      <div className="flex gap-4">
        {/* Back Button */}
        <button onClick={onBack} className="cursor-pointer flex flex-1 justify-start items-center p-4 h-14 rounded-full font-semibold border-3 border-[#d19f42] text-[#d19f42] hover:bg-[#fff9f0]">
          Back
        </button>

        {/* Create Store Button */}
        <button onClick={onNext} className="cursor-pointer flex flex-1 justify-start items-center p-4 h-14 rounded-full font-semibold bg-[#d19f42] text-white hover:bg-[#d9c096]">
          Create Store
        </button>
      </div>

    </div>
  </div>
  )
}