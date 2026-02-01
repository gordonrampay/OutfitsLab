"use client";

import { useState } from "react";

export default function SignUp() {
    const [showPassword, setShowPassword] = useState(false);

    return <div className="min-h-screen bg-white flex flex-col">
        <main className="mt-[85px] flex justify-center">
            <div className="w-full max-w-md px-6 text-center">
                <div className="w-16 h-16 bg-[#D4A23F] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                    O
                </div>

                <h1 className="mb-1 text-2xl font-bold">
                    Create an Account
                </h1>
                <p className="mb-6 text-sm text-gray-500">
                    Join OutfitsLab and start your style journey
                </p>

                <div className="grid grid-cols-2 gap-3 w-[448px] ">
                    <div className="flex flex-col items-start gap-1 mb-4">
                        <label htmlFor="First Name" className="mb-1 text-sm block">First Name</label>
                        <input type="text"
                            placeholder="John..."
                            className="w-full rounded-[16px] border border-[#FFE9CC] px-4 py-2 "
                        />
                    </div>
                    <div className="flex flex-col items-start gap-1 mb-4">
                        <label htmlFor="Last Name" className="mb-1 text-sm block">Last Name</label>
                        <input type="text"
                            placeholder="Doe..."
                            className="w-full rounded-[16px] border border-[#FFE9CC] px-4 py-2 "
                        />
                    </div>
                </div>

                <div className="flex flex-col text-left">
                    <label htmlFor="Email" className="mt-2">Email Address</label>
                    <input type="email"
                        placeholder="you@example.com"
                        className="w-[448px] h-[50px] border border-[#FFE9CC] rounded-[16px] pl-10 pr-4 py-3 "
                    />
                </div>

                <div className="flex flex-col text-left">
                    <label htmlFor="Phone" className="mt-8">Phone Number</label>
                    <input type="number"
                        placeholder="+1 (555) 123 4567"
                        className="w-[448px] h-[50px] border border-[#FFE9CC] rounded-[16px] pl-10 pr-4 py-3" />
                </div>

                <div className="flex flex-col text-left mt-8">
                    <label htmlFor="Password">Password</label>
                    <input type="password"
                        placeholder="Enter your password"
                        className="w-[448px] h-[50px] border border-[#FFE9CC] rounded-[16px] pl-10 pr-4 py-3"
                    />
                    <h1 className="text-xs text-gray-500 mt-1">
                        At least 8 characters
                    </h1>
                </div >

                <div className="flex flex-col text-left mt-8">
                    <label htmlFor="Confirm Password">Confirm Password</label>
                    <input type="password"
                        placeholder="Enter your password"
                        className="w-[448px] h-[50px] border border-[#FFE9CC] rounded-[16px] pl-10 pr-4 py-3"
                    />

                </div>

                <div className="w-[448px] h-[62px] border border-[#FFE9CC] rounded-[16px] bg-[#FFF4E6] mt-8 items-start flex ">
                    <button className="ml-4 mt-6 w-4 h-4 border border-[#666666] rounded-[2px] bg-white text-left ">
                    </button>
                    <h1 className="ml-2 mt-5 text-[14px] text-[#4D4D4D]">
                        I agree to the
                    </h1>
                    <span className="ml-14 mt-5  text-[14px] text-[#D4A23F] flex gap-2">
                        <h1>
                            Privacy Policy
                        </h1>
                        <p className="text-[#4D4D4D]">and</p>
                        <h2>
                            Terms of Service
                        </h2>
                    </span>
                </div>

                <button className="w-[448px] h-[56px] mt-6 border bg-[#BD8928] rounded-full text-white font-semibold text-[16px]">
                    Create Account →
                </button>
                <p className="mt-8 ml-4 flex justify-center text-[#4D4D4D] text-[14px] ">
                    Or sign up with
                </p>
                <div className="grid grid-cols-2 gap-2 w-[448px] h-[50px] mb-20 mt-6">
                    <button className="border-4 border-[#FFE9CC] flex flex-col items-center justify-center rounded-[16px]">
                        Google
                    </button>
                    <button className="border-4 border-[#FFE9CC] flex flex-col items-center justify-center rounded-[16px]">
                        Facebook
                    </button>
                </div>
                <p className="mt-4 mb-10 text-center text-[16px] text-[#4D4D4D] ">
                    Already have an account?
                    <a href="Sign In" className="ml-1 text-[#D4A23F]">Sign In</a>
                </p>
            </div>
        </main >
    </div >;
}