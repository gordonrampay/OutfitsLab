'use client'
import { useState } from 'react'
import StepConfirm from './components/StepConfirm'
import StepStoreDetail from './components/StepStoreDetail'
import StepSellerInfo from './components/StepSellerInfo'

export default function BecomeSeller() {
    const [currentStep, setCurrentStep] = useState(1)

    const handleNext = () => setCurrentStep((prev) => Math.min(prev + 1, 3))
    const handleBack = () => setCurrentStep((prev) => Math.max(prev - 1, 1))

    return (
    <div className="bg-white">
        {/* Header */}
        <div className="py-8 border-y-2 border-[#ffe9cc]">
            <div className="flex flex-col items-center justify-center text-center gap-4">
                <h1 className="text-[46px] font-bold text-gray-800">Open Your OutfitsLab Store</h1>
                <h2 className="text-[23px] text-gray-600">Join thousands of creators and start selling your designs</h2>
            </div>
        </div>

        {/* Thanh tiến trình */}
        <div className="py-5 border-b-2 border-[#ffe9cc]">
            <div className="flex items-center justify-center">                   
                <StepCircle stepNumber={1} label="Your Information" currentStep={currentStep}/>
                <div className="h-0.5 w-10 bg-[#ffe9cc] mx-4"></div>
               
                <StepCircle stepNumber={2} label="Store Details" currentStep={currentStep}/>
                <div className="h-0.5 w-10 bg-[#ffe9cc] mx-4"></div>
        
                <StepCircle stepNumber={3} label="Confirmation" currentStep={currentStep}/>
            </div>
        </div>

        {/* Content */}
        <div className="bg-[#fffbf5]">
            <div>
            {currentStep === 1 && (<StepSellerInfo onNext={handleNext} />)}
            
            {currentStep === 2 && (<StepStoreDetail onNext={handleNext} onBack={handleBack} />)}
            
            {currentStep === 3 && (<StepConfirm />)}
            </div>
        </div>
    </div>
  )
}

function StepCircle({ stepNumber, label, currentStep }: { stepNumber: number, label: string, currentStep: number }) {
  const isActive = currentStep === stepNumber
  const isPast = currentStep > stepNumber

  let circleClass = ""
  let labelClass = ""

  if (isActive) {
    circleClass = "bg-[#d19f42] text-white"
    labelClass = "text-[#d19f42] text-xl"
  } else if (isPast) {
    circleClass = "bg-[#fff4e6]" 
    labelClass = "text-xl"
  } else {
    circleClass = "bg-[#008080] text-white"
    labelClass = "text-xl"
  }

  return (
    <div className="flex items-center gap-1 bg-white p-2"> 
      {/* Vòng tròn số */}
      <div className={`md:w-13 md:h-13 rounded-full flex items-center justify-center text-lg font-bold ${circleClass}`}>
        {stepNumber}
      </div>
      {/* Thông tin bước */}
      <span className={`${labelClass}`}>
        {label}
      </span>
    </div>
  )
}