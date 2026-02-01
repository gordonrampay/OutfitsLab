"use client";


import { useState } from "react";

export default function SignIn() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="min-h-screen bg-white flex flex-col">
            <div className="mt-[85px] flex justify-center mb-4">
                <div className="w-full max-w-md px-6 text-center">
                    <div className="w-16 h-16 bg-[#D4A23F] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                        O
                    </div>

                    {/* Tiêu đề */}
                    <h1 className="mb-1 text-2xl font-bold">
                        Welcome Back
                    </h1>
                    <p className="text-[#4d4d4d] text-[16px] mb-6">
                        Sign in to continue to OutfitsLab
                    </p>
                    {/* Nhập gmail */}

                    <div className="flex flex-col mt-10">
                        <label htmlFor="Email" className="text-[14px] font-semibold text-left">Email Address</label>
                        <input type="email"
                            placeholder="you@example.com"
                            className="mt-1 w-[448px] h-[50px] border border-[#FFE9CC] rounded-[16px] pl-10 pr-4 py-3" />
                    </div>

                    {/* Nhập pass */}
                    <div className="flex flex-col mt-6">
                        <label htmlFor="Password" className="text-[14px] font-bold text-left">Password</label>
                        <input type="password"
                            placeholder="Enter your password"
                            className="mt-1 w-[448px] h-[50px] border border-[#FFE9CC] rounded-[16px] pl-10 pr-4 py-3" />
                    </div>
                    {/* nút tích nhơ smk và quên pass */}
                    <div className="mt-8 flex w-full">
                        <button className="w-4 h-4 border border-[#666666] rounded-[2px] bg-white text-left"></button>
                        <h1 className="ml-2 text-[14px] text-[#4d4d4d]">Remember me</h1>
                        <p className="ml-42 text-[14px] text-[#D4A23F]">Forgot password?</p>
                    </div>
                    {/* nút sign in */}
                    <div className="mt-8 w-[448px] h-[50px] flex items-center justify-center border bg-[#BD8928] rounded-full text-white">
                        Sign In →
                    </div>
                    {/* hoặc là các lựa chọn khác */}
                    <p className="mt-10 ml-8 text-center text-[14px] text-[#4d4d4d]">Or continue with</p>
                    {/* 2 nút fb vs Google */}
                    <div className="grid grid-cols-2 gap-14 mt-2 w-full">
                        <button className="w-[216px] h-[52px] border-4 border-[#FFE9CC] rounded-[16px]">Google</button>
                        <button className="w-[216px] h-[52px] border-4 border-[#FFE9CC] rounded-[16px]">Facebook</button>
                    </div>
                </div>
            </div>
        </div>
    );
}