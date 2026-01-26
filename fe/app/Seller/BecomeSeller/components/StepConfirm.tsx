import Image from "next/image"

export default function StepConfirm() {
    return (
      <div className="py-20 flex items-center justify-center flex-col">
          <Image
            src="/Complete.png"
            alt="Confirmation"
            width={130}
            height={130}
            className="object-cover"
          />
          <h1 className="mt-5 text-4xl font-bold">Welcome to OutfitsLab!</h1>
          <h2 className="mt-5 text-2xl text-gray-700">Your store "ABCD" has been created successfully.</h2>
          <div className="border-4 border-[#ffe9cc] bg-white rounded-3xl p-10 mt-10">
            <div className="text-center">
              <p className="text-xl mb-2 text-gray-600">Email Confirmation</p>
              <p className="text-xl mb-2 font-semibold">ABCD</p>
              <p className="text-lg text-gray-500">Check your email for account verification and setup instructions.</p>
            </div>
          </div>
          <div className="mt-10 flex flex-col gap-5">
            <button className="px-110 py-5 text-white text-xl bg-[#d19f42] hover:bg-[#d9c096] rounded-4xl cursor-pointer">
              Start Adding Products
            </button>
            <button onClick={() => {window.location.href = '/Seller/BecomeSeller'}} className="py-4 text-[#d19f42] text-xl border-4 bg-white border-[#d19f42] hover:bg-[#fff9f0] rounded-4xl cursor-pointer">
              Back to Home
            </button>
          </div>
          <div className="rounded-4xl bg-[#fff4e6] p-7 mt-10">
            <div className="text-start pr-40">
              <p className="text-[40px] font-bold">Next Steps</p>
              <p className="text-lg my-3 text-gray-700">✅ Complete your store setup</p>
              <ul className="text-lg text-gray-700 space-y-3">
                <li>🡢 Upload your first 3D models and products</li>
                <li>🡢 Set up store branding</li>
                <li>🡢 Go live and start selling!</li>
              </ul>
            </div>
          </div>
      </div>
    )
}